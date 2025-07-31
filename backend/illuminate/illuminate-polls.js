exports.engagement = [
  {
    timeSinceVideoStartedInMs: 2100,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 101,
        title: "Which horse wants the victory more?",
        victoryPoints: 0,
        alertText: "Your voice matters!",
        pollType: "side",
        options: [
          { id: 1, text: "Iron Mirage" },
          { id: 2, text: "Thunderstride" },
          { id: 3, text: "Velvet Fury" },
          { id: 4, text: "Silver Arrow" },
        ],
      },
    },
  },
  {
    timeSinceVideoStartedInMs: 58000,
    persistInHistory: false,
    action: {
      channel: "game.poll-results",
      data: {
        id: 101,
        correctOption: 0,
        pollType: "side",
        options: [
          { id: 1, score: 20 },
          { id: 2, score: 20 },
          { id: 3, score: 20 },
          { id: 4, score: 20 },
          { id: 5, score: 20 },
        ],
      },
    },
  },
];
