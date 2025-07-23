exports.betting = [
  {
    timeSinceVideoStartedInMs: 1000,
    persistInHistory: true,
    action: {
      channel: 'race.betting',
      data: {
        type: 'betting_open',
        raceId: 1,
        title: 'Stormhoof Sprint',
        stake: 5,
        horses: [
          {
            number: 1,
            name: 'Blazing Comet',
            trainer: 'Matha Caldwell',
            jockey: 'Miguel Santiago',
            age: 2,
            weight: 133,
            odds: 2.50
          },
          {
            number: 2,
            name: 'Thunderstride',
            trainer: 'Harlan McCoy',
            jockey: 'Casey O\'Connor',
            age: 1,
            weight: 135,
            odds: 3.75
          },
          {
            number: 3,
            name: 'Velvet Fury',
            trainer: 'Yusef Ghani',
            jockey: 'Lena Hoshino',
            age: 2,
            weight: 136,
            odds: 5.00
          },
          {
            number: 4,
            name: 'Midnight Charge',
            trainer: 'Veronica DuBois',
            jockey: 'Tyrell Banks',
            age: 1,
            weight: 131,
            odds: 7.50
          },
          {
            number: 5,
            name: 'Iron Mirage',
            trainer: 'Tomás Rivera',
            jockey: 'Ricardo Del Mar',
            age: 2,
            weight: 130,
            odds: 11.00
          }
        ]
      }
    }
  },
  {
    timeSinceVideoStartedInMs: 10000,
    persistInHistory: true,
    action: {
      channel: 'race.betting',
      data: {
        raceId: 1,
        type: 'betting_closed'
      }
    }
  },
  {
    timeSinceVideoStartedInMs: 12000,
    persistInHistory: true,
    action: {
      channel: 'race.betting',
      data: {
        type: 'betting_results',
        raceId: 1,
        raceResults: [4, 2, 1]
      }
    }
  }
]
