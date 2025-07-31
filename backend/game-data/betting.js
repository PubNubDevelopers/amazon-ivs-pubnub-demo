//  Start of betting: 0
//  Start of race: 30000
//  End of race: 136000
//  End of video loop: 180000

exports.betting = [
  {
    timeSinceVideoStartedInMs: 0,
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
            name: 'Iron Mirage',
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
            name: 'Blazing Comet',
            trainer: 'Tomás Rivera',
            jockey: 'Ricardo Del Mar',
            age: 2,
            weight: 130,
            odds: 11.00
          },
          {
            number: 6,
            name: 'Silver Arrow',
            trainer: 'Elena Petrova',
            jockey: 'Sophie Dubois',
            age: 2,
            weight: 134,
            odds: 13.00
          }
        ]
      }
    }
  },
  {
    timeSinceVideoStartedInMs: 30000,
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
    timeSinceVideoStartedInMs: 136000,
    persistInHistory: true,
    action: {
      channel: 'race.betting',
      data: {
        type: 'betting_results',
        raceId: 1,
        raceResults: [2, 1, 3]
      }
    }
  }
]
