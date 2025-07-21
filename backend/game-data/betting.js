exports.betting = [
  {
    timeSinceVideoStartedInMs: 1000,
    persistInHistory: true,
    action: {
      channel: "game.betting",
      data: {
        id: 1,  //  Race ID
        title: "Race #1",
        type: "betting_open",
        odds: [
          { id: 1, Name: "Joël Piroe (Leeds)", profit: 1.375 },
          { id: 2, text: "Daniel James (Leeds)", payout: 1.000 },
          { id: 3, text: "Sékou Mara (Soton)", payout: 0.500 },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 48000,
    persistInHistory: true,
    action: {
      channel: "game.betting",
      data: {
        id: 1,  //  Race ID
        type: "betting_closed",
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 58000,
    persistInHistory: true,
    action: {
      channel: "game.betting",
      data: {
        id: 1,  //  Race ID
        type: "results",
        results: [
          { pos: 1, id: 2, text: "Daniel James (Leeds)", payout: 1.000 },
          { pos: 2, id: 3, text: "Sékou Mara (Soton)", payout: 0.500 },
          { pos: 3, id: 1, Name: "Joël Piroe (Leeds)", profit: 1.375 },
        ],
      },
    },
  },
];


