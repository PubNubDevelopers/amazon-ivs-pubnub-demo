exports.engagement = [
  {
    timeSinceVideoStartedInMs: 2100,
    persistInHistory: false,
    action: {
      channel: "game.new-poll",
      data: {
        id: 101,
        title: "Who do you think is going to win?",
        victoryPoints: 0,
        alertText: "Your voice matters!",
        pollType: "side",
        options: [
          { id: 1, text: "Red" },
          { id: 2, text: "Blue" },
          { id: 3, text: "Green" },
          { id: 4, text: "Yellow" },
          { id: 5, text: "Purple" },
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
