## Data For Front End
Tech Tree per race to display buildings/upgrades/units trainable
What workers can/cannot build

-need to add to current state to represent quantity
-for tech tree, is everything we have there??

Rough Draft JSON
{ 
  "races": {
    "human": {
      "units": {
        "peasant": {
          "type": "worker",
          "gold": 65,
          "lumber": 0,
          "supply": 1,
          "enabled": true,
          "actions": [
            "mineGold",
            "mineLumber",
            "return",
            "build",
            "roam"
          ],
          "buildings": {
            "Town Hall": {
              "enabled": true,
              "unlockedTech": {
                "upgrades": {
                  "Town Hall": "Backpack"
                },
                "buildings": [
                  "Blacksmith"
                ],
                "units": {
                  "Town Hall": "Peasant"
                }
              },
              "upgrades": {
                "Keep": {
                  "enabled": true,
                  "researched": false,
                  "lumber": 240,
                  "gold": 320
                },
                "Backpack": {
                  "enabled": true,
                  "lumber": 40,
                  "gold": 50,
                  "supplyGiven": 0
                }
              }
            }
          }
        }
      }
    }
  }
}
## Plan
Resources/Units Built/Things that can be built outside

Units


Resources
  -Current Time in mm:ss
  -Total Gold
  -Total Lumber
  -Food min/Food Max
Units
  -displays units that are busy/pending/made
  -icons in top right indicating how many
  -icons in bottom left for indication of what kind (worker     etc)
ToBeBuilt??

Whole page separated into 8rowsx6cols grid (rows inclusive, cols)
+---------+---------+---------+---------+---------+---------+
|  Data   |  data   |    data |    data |    SB   |    SB   |
|         |         |         |         |         |         | 
+---------+---------+---------+---------+---------+---------+
|   PRS   |   PRS   |      PRS|  PRS    |    SB   |   SB    |
|         |         |         |         |         |         | 
|         |         |         |         |         |         |
+---------+---------+---------+---------+---------+---------+
|   PRS   |   PRS   |      PRS|  PRS    |    SB   |   SB    |
|         |         |         |         |         |         | 
|         |         |         |         |         |         |
+---------+---------+---------+---------+---------+---------+
|   PRS   |   PRS   |      PRS|  PRS    |    SB   |   SB    |
|         |         |         |         |         |         | 
|         |         |         |         |         |         |
+---------+---------+---------+---------+---------+---------+
|   PRS   |   PRS   |      PRS|  PRS    |    BB   |   BB    |
|         |         |         |         |         |         | 
|         |         |         |         |         |         |
+---------+---------+---------+---------+---------+---------+
|   PRS   |   PRS   |      PRS|  PRS    |    BB   |   BB    |
|         |         |         |         |         |         | 
|         |         |         |         |         |         |
+---------+---------+---------+---------+---------+---------+
|   PRS   |   PRS   |      PRS|  PRS    |    BB   |   BB    |
|         |         |         |         |         |         | 
|         |         |         |         |         |         |
+---------+---------+---------+---------+---------+---------+
|   PRS   |   PRS   |      PRS|  PRS    |    BB   |   BB    |
|         |         |         |         |         |         | 
|         |         |         |         |         |         |
+---------+---------+---------+---------+---------+---------+

PlayerData (rows 1-1, cols 1-4)
ProductionRows (rows 2-8, cols 1-4)
Selection (rows 1-4, cols 5-6)
Building (rows 5-8, cols 5-6)

Track(Timeline)
  -scrollX auto
  -height adjusts by how many worker rows
  Headers(timeIntervals)
  ProductionRows
    -dragend locks into 1 second intervals
    -also checks with data to confirm if valid
    ProductionRow
      -width adjust by how long it takes
      -css transition left to right showing travel time as as       diff color then the build color
      -icon first, left click on icon pops up menu to adjust         travel time
  Slider
    -shift left and right arrow skips interval by 1 second?
    -ctrl left and right arrow skips by more??
    -dragend locks into 1 second intervals
    -update resources

## Running React on Repl.it

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the vite docs for [serving production websites](https://vitejs.dev/guide/build.html)

### Typescript

Just rename any file from `.jsx` to `.tsx`. You can also try our [TypeScript Template](https://replit.com/@replit/React-TypeScript)