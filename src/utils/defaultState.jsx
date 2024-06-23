let playersState = [
  {
    currentSimTime: 1856,
    activeTimelines: [
      {
        timelineType: "Tree of Life",
        timelineID: 6,
        actions: [
          {
            actionType: "BuildUnitAction",
            trigger: {
              triggerType: "ASAP",
            },
            actionID: 0,
            name: "Wisp",
            duration: 140,
            startTime: 0,
          },
        ],
      },
      {
        timelineType: "Wisp",
        timelineID: 1,
        actions: [
          {
            actionType: "WorkerMovementAction",
            trigger: {
              triggerType: "ASAP",
            },
            actionID: 1,
            travelTime: 10,
            startTime: 0,
            currentWorkerTask: "IDLE",
            desiredWorkerTask: "GOLD",
          },
          {
            actionType: "BuildStructureAction",
            trigger: {
              triggerType: "GOLD_AMOUNT",
              value: 300,
            },
            actionID: 7,
            name: "Hunter's Hall",
            duration: 600,
            travelTime: 0,
            startTime: 656,
            currentWorkerTask: "GOLD",
          },
        ],
      },
      {
        timelineType: "Wisp",
        timelineID: 2,
        actions: [
          {
            actionType: "WorkerMovementAction",
            trigger: {
              triggerType: "ASAP",
            },
            actionID: 2,
            travelTime: 12,
            startTime: 0,
            currentWorkerTask: "IDLE",
            desiredWorkerTask: "GOLD",
          },
        ],
      },
      {
        timelineType: "Wisp",
        timelineID: 3,
        actions: [
          {
            actionType: "WorkerMovementAction",
            trigger: {
              triggerType: "ASAP",
            },
            actionID: 3,
            travelTime: 14,
            startTime: 0,
            currentWorkerTask: "IDLE",
            desiredWorkerTask: "GOLD",
          },
        ],
      },
      {
        timelineType: "Wisp",
        timelineID: 4,
        actions: [
          {
            actionType: "WorkerMovementAction",
            trigger: {
              triggerType: "ASAP",
            },
            actionID: 4,
            travelTime: 16,
            startTime: 0,
            currentWorkerTask: "IDLE",
            desiredWorkerTask: "LUMBER",
          },
        ],
      },
      {
        timelineType: "Wisp",
        timelineID: 5,
        actions: [
          {
            actionType: "BuildStructureAction",
            trigger: {
              triggerType: "ASAP",
            },
            actionID: 5,
            name: "Altar of Elders",
            duration: 600,
            travelTime: 20,
            startTime: 0,
            currentWorkerTask: "IDLE",
          },
        ],
      },
      {
        timelineType: "Wisp",
        timelineID: 9,
        actions: [
          {
            actionType: "BuildStructureAction",
            trigger: {
              triggerType: "NEXT_WORKER_BUILT",
              value: "Wisp",
            },
            actionID: 6,
            name: "Moon Well",
            duration: 500,
            travelTime: 15,
            startTime: 140,
            currentWorkerTask: "IN_PRODUCTION",
          },
        ],
      },
      {
        timelineType: "Altar of Elders",
        timelineID: 10,
        actions: [
          {
            actionType: "BuildUnitAction",
            trigger: {
              triggerType: "ASAP",
            },
            actionID: 8,
            name: "Demon Hunter",
            duration: 550,
            startTime: 656,
          },
        ],
      },
      {
        timelineType: "Hunter's Hall",
        timelineID: 12,
        actions: [
          {
            actionType: "BuildUpgradeAction",
            trigger: {
              triggerType: "LUMBER_AMOUNT",
              value: 75,
            },
            actionID: 9,
            name: "Strength of the Moon",
            duration: 600,
            startTime: 1856,
          },
        ],
      },
    ],
    inactiveTimelines: [
      {
        timelineType: "Gold Mine",
        timelineID: 0,
        actions: [],
      },
      {
        timelineType: "Tavern",
        timelineID: 7,
        actions: [],
      },
      {
        timelineType: "Goblin Merchant",
        timelineID: 8,
        actions: [],
      },
      {
        timelineType: "Moon Well",
        timelineID: 11,
        actions: [],
      },
    ],
    currentResources: {
      currentGold: 605,
      currentLumber: 0,
      currentFood: 11,
      currentFoodMax: 20,
    },
  },
  {
    currentSimTime: 795,
    activeTimelines: [
      {
        timelineType: "Tree of Life",
        timelineID: 6,
        actions: [
          {
            actionType: "BuildUnitAction",
            trigger: {
              triggerType: "ASAP",
            },
            actionID: 0,
            name: "Wisp",
            duration: 140,
            startTime: 0,
          },
          {
            actionType: "BuildUnitAction",
            trigger: {
              triggerType: "NEXT_WORKER_BUILT",
              value: "Wisp",
            },
            actionID: 5,
            name: "Wisp",
            duration: 140,
            startTime: 140,
          },
        ],
      },
      {
        timelineType: "Wisp",
        timelineID: 1,
        actions: [
          {
            actionType: "WorkerMovementAction",
            trigger: {
              triggerType: "ASAP",
            },
            actionID: 1,
            travelTime: 10,
            startTime: 0,
            currentWorkerTask: "IDLE",
            desiredWorkerTask: "GOLD",
          },
        ],
      },
      {
        timelineType: "Wisp",
        timelineID: 2,
        actions: [
          {
            actionType: "WorkerMovementAction",
            trigger: {
              triggerType: "ASAP",
            },
            actionID: 2,
            travelTime: 12,
            startTime: 0,
            currentWorkerTask: "IDLE",
            desiredWorkerTask: "GOLD",
          },
        ],
      },
      {
        timelineType: "Wisp",
        timelineID: 3,
        actions: [
          {
            actionType: "WorkerMovementAction",
            trigger: {
              triggerType: "ASAP",
            },
            actionID: 3,
            travelTime: 14,
            startTime: 0,
            currentWorkerTask: "IDLE",
            desiredWorkerTask: "LUMBER",
          },
        ],
      },
      {
        timelineType: "Wisp",
        timelineID: 4,
        actions: [
          {
            actionType: "WorkerMovementAction",
            trigger: {
              triggerType: "ASAP",
            },
            actionID: 4,
            travelTime: 16,
            startTime: 0,
            currentWorkerTask: "IDLE",
            desiredWorkerTask: "LUMBER",
          },
        ],
      },
      {
        timelineType: "Wisp",
        timelineID: 5,
        actions: [
          {
            actionType: "BuildStructureAction",
            trigger: {
              triggerType: "ASAP",
            },
            actionID: 6,
            name: "Altar of Elders",
            duration: 600,
            travelTime: 20,
            startTime: 140,
            currentWorkerTask: "IDLE",
          },
        ],
      },
      {
        timelineType: "Wisp",
        timelineID: 10,
        actions: [
          {
            actionType: "BuildStructureAction",
            trigger: {
              triggerType: "NEXT_WORKER_BUILT",
              value: "Wisp",
            },
            actionID: 7,
            name: "Moon Well",
            duration: 500,
            travelTime: 15,
            startTime: 280,
            currentWorkerTask: "IN_PRODUCTION",
          },
        ],
      },
      {
        timelineType: "Goblin Merchant",
        timelineID: 8,
        actions: [
          {
            actionType: "ShopAction",
            trigger: {
              triggerType: "ASAP",
            },
            actionID: 8,
            name: "Scroll of Town Portal",
            travelTime: 150,
            startTime: 786,
            isBeingSold: true,
          },
        ],
      },
      {
        timelineType: "Altar of Elders",
        timelineID: 11,
        actions: [
          {
            actionType: "BuildUnitAction",
            trigger: {
              triggerType: "ASAP",
            },
            actionID: 9,
            name: "Keeper of the Grove",
            duration: 550,
            startTime: 795,
          },
        ],
      },
    ],
    inactiveTimelines: [
      {
        timelineType: "Gold Mine",
        timelineID: 0,
        actions: [],
      },
      {
        timelineType: "Tavern",
        timelineID: 7,
        actions: [],
      },
      {
        timelineType: "Wisp",
        timelineID: 9,
        actions: [],
      },
      {
        timelineType: "Moon Well",
        timelineID: 12,
        actions: [],
      },
    ],
    currentResources: {
      currentGold: 5,
      currentLumber: 150,
      currentFood: 12,
      currentFoodMax: 20,
    },
  },
];

let pixelsPerSecond = 50; //seconds

export { pixelsPerSecond, playersState };
