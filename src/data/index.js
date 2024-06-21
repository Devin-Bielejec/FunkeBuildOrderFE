//Filter out data from large file that we don't need, resolve some issues?
import data from "./wc3Data.json" assert { type: "json" };
import fs from "fs";

let races = ["human", "orc", "nightelf", "undead", "neutral"];
/*
each race
each building
-builds
    each unit
    -name
    -requires
    -gold
    -lumber
    -build_time
    -food
    -foodproduced
    -morphs
-unlocks
-upgrades
    each upgrade
    -gold
    -lumber
    -requirements or required
    -name
    -researchtime

    if value is array, then subsequent upgrades require previous
-name (come from key instead?)
-requires
-gold
-lumber
-build_time
-food
-foodproduced 
-items
-stock?
-upgradesTo
    same as building
    gold and lumber subtract previous structure
*/
let race_tiers = {
  human: ["Keep", "Castle"],
  orc: ["Stronghold", "Fortress"],
  nightelf: ["Tree of Ages", "Tree of Eternity"],
  undead: ["Halls of the Dead", "Black Citadel"],
};
let newData = {};
//Loop through each Race
for (let i = 0; i < races.length; i++) {
  let cur_race = races[i];
  newData[races[i]] = {};

  //Loop through the buildings of each race
  for (let bKey in data[races[i]]["buildings"]) {
    newData[races[i]][bKey] = {};
    let cur_building = newData[races[i]][bKey];
    let old_building = data[races[i]].buildings[bKey];

    //For all single valued keys
    let keys_to_add = [
      "name",
      "unlocks",
      "requires",
      "gold",
      "lumber",
      "build_time",
      "food_produced",
    ];

    for (let key of keys_to_add) {
      if (key == "food_produced") {
        cur_building[key] = old_building["foodproduced"];
      } else {
        cur_building[key] = old_building[key];
      }
    }

    if (bKey.startsWith("Altar")) {
      cur_building.units = [];
      for (let j = 0; j < 4; j++) {
        let tmp = {};
        tmp["food"] = "5";
        tmp["name"] = old_building.builds[0]["name" + `${j + 1}`];
        tmp.gold = ["0", "400", "400"];
        tmp.lumber = ["0", "100", "100"];
        tmp.requirements = [
          "",
          race_tiers[cur_race][0],
          race_tiers[cur_race][1],
        ];
        tmp.build_time = "55";
        cur_building.units.push(tmp);
      }
    } else if (bKey.startsWith("Tavern")) {
      cur_building.units = [];
      for (let j = 0; j < 8; j++) {
        let tmp = {};
        tmp["food"] = "5";
        tmp["name"] = old_building.builds[0]["name" + `${j + 1}`];
        tmp.gold = ["0", "425", "425"];
        tmp.lumber = ["0", "135", "135"];
        tmp.requirements =
          cur_race != "neutral"
            ? ["", race_tiers[cur_race][0], race_tiers[cur_race][1]]
            : [];
        tmp.build_time = "0";
        cur_building.units.push(tmp);
      }
    } else if ("builds" in old_building) {
      cur_building.units = [];
      //Builds ie Units
      for (let unit of old_building["builds"]) {
        let keys_to_add_units = [
          "name",
          "requires",
          "gold",
          "lumber",
          "build_time",
          "food",
          "morphs",
        ];

        let tmp = {};
        for (let tmpK of keys_to_add_units) {
          tmp[tmpK] = unit[tmpK];
        }
        cur_building.units.push(tmp);
      }
    }

    //Upgrades
    cur_building.upgrades = [];
    let old_building_upgrades =
      "upgrades" in old_building && old_building["upgrades"].length
        ? old_building["upgrades"]
        : [];
    for (let upgrade of old_building_upgrades) {
      //stand alone upgrade
      if ("name" in upgrade) {
        let tmp = {};
        tmp.name = upgrade.name;
        tmp.gold = upgrade.gold;
        tmp.lumber = upgrade.lumber;
        tmp.research_time = upgrade.researchtime;
        cur_building.upgrades.push(tmp);
      } else {
        let tmp_levels = [];
        //level based upgrade
        for (let level_upgrade of upgrade) {
          let tmp = {};
          tmp.name = level_upgrade.name;
          tmp.gold = level_upgrade.gold;
          tmp.lumber = level_upgrade.lumber;
          tmp.required = level_upgrade.required;
          tmp.research_time = level_upgrade.researchtime;
          tmp_levels.push(tmp);
        }
        cur_building.upgrades.push(tmp_levels);
      }
    }

    //Items for shops
    cur_building.items = [];
    if ("items" in old_building && old_building.items.length) {
      for (let item of old_building.items) {
        let tmp = {};
        tmp.name = item.name;
        tmp.gold = item.gold;
        tmp.stock = item.stock;
        tmp.stock_replenish = item.stockreplenish;
        tmp.stock_start = item.stockstart;
        tmp.requires = item.requires;
        tmp.lumber = item.lumber;
        cur_building.items.push(tmp);
      }
    }

    //UpgradesTo - Town Hall
    if (
      "upgradesTo" in old_building &&
      old_building.class.includes("TownHall")
    ) {
      let level1_gold = parseInt(cur_building.gold);
      let level1_lumber = parseInt(cur_building.lumber);
      let upgrade_to = old_building.upgradesTo[0];

      let tmp = { ...cur_building };

      tmp.gold = parseInt(upgrade_to.gold) - level1_gold;
      tmp.lumber = parseInt(upgrade_to.lumber) - level1_lumber;
      tmp.name = upgrade_to.name;
      tmp.build_time = upgrade_to.build_time;
      tmp.food_produced = upgrade_to.foodproduced;
      tmp.upgrades_to = upgrade_to.upgradesTo[0];
      tmp.requires = upgrade_to.requires;
      tmp.unlocks = upgrade_to.unlocks;

      //assign - 2nd level town hall
      cur_building.upgrades_to = tmp;

      //Set previous
      let level2_gold = tmp.gold;
      let level2_lumber = tmp.lumber;
      upgrade_to = upgrade_to.upgradesTo[0];

      let tmp1 = { ...tmp };
      tmp1.gold = parseInt(upgrade_to.gold) - level2_gold - level1_gold;
      tmp1.lumber = parseInt(upgrade_to.lumber) - level2_lumber - level1_lumber;
      tmp1.name = upgrade_to.name;
      tmp1.build_time = upgrade_to.build_time;
      tmp1.food_produced = upgrade_to.foodproduced;
      tmp1.upgrades_to = null;
      tmp1.requires = upgrade_to.requires;
      tmp1.unlocks = upgrade_to.unlocks;

      //Assign 3rd level town hall
      tmp.upgrades_to = tmp1;
      console.log(cur_building);
    }

    //UpgradeTo Tower
    if (
      "upgradesTo" in old_building &&
      !old_building.class.includes("TownHall")
    ) {
      cur_building.upgrades_to = [];
      for (let upgrade_to of old_building.upgradesTo) {
        let tmp = {};

        tmp.name = upgrade_to.name;
        tmp.requires = upgrade_to.requires;
        tmp.gold = upgrade_to.gold;
        tmp.lumber = upgrade_to.lumber;
        tmp.build_time = upgrade_to.build_time;

        cur_building.upgrades_to.push(tmp);
      }
    }
  }
}

// Convert JSON data to a string
const jsonString = JSON.stringify(newData, null, 2);

// Write JSON string to a file
fs.writeFile("filteredData.json", jsonString, (err) => {
  if (err) {
    console.error("Error writing file", err);
  } else {
    console.log("Successfully wrote file");
  }
});
