let playerState = {
  lumber: 0,
  gold: 0,
  supply: [0, 11], //min and max supply,
  workers: [
    [
      {
        action: "GOLD",
        start: 0,
        end: 5,
      },
      {
        action: "GOLD",
        start: 5,
        end: 10,
      },
      {
        action: "GOLD",
        start: 10,
        end: 15,
      },
      {
        action: "GOLD",
        start: 15,
        end: 20,
      },
      { action: "CONSTRUCTION", start: 20, end: 30 },
      { action: "LUMBER", start: 30, end: 40 },
      { action: "ROAMING", start: 40, end: 45 },
      { action: "LUMBER", start: 45, end: 55 },
    ],
    [
      { action: "ROAMING", start: 0, end: 1 },
      {
        action: "GOLD",
        start: 1,
        end: 6,
      },
      {
        action: "GOLD",
        start: 6,
        end: 11,
      },
      {
        action: "GOLD",
        start: 11,
        end: 16,
      },
      {
        action: "GOLD",
        start: 16,
        end: 21,
      },
      { action: "CONSTRUCTION", start: 21, end: 31 },
      { action: "LUMBER", start: 31, end: 41 },
      { action: "ROAMING", start: 41, end: 46 },
      { action: "LUMBER", start: 46, end: 56 },
    ],
  ],
  units: [],
  buildings: [],
};

let pixelsPerSecond = 50; //seconds

export { pixelsPerSecond, playerState };
