//  Start of betting: 1000
//  Start of race: 23000
//  End of race: 39000

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
          },
          {
            number: 6,
            name: 'Silver Arrow',
            trainer: 'Elena Petrova',
            jockey: 'Sophie Dubois',
            age: 2,
            weight: 134,
            odds: 13.00
          },
          {
            number: 7,
            name: 'Crimson Rocket',
            trainer: 'Derek Lin',
            jockey: 'Ava Johnson',
            age: 1,
            weight: 132,
            odds: 15.00
          },
          {
            number: 8,
            name: 'Golden Gale',
            trainer: 'Priya Singh',
            jockey: 'Lucas Moretti',
            age: 2,
            weight: 137,
            odds: 18.00
          },
          {
            number: 9,
            name: 'Shadow Whisper',
            trainer: 'Nina Müller',
            jockey: 'Omar Farouk',
            age: 1,
            weight: 129,
            odds: 21.00
          },
          {
            number: 10,
            name: 'Emerald Dancer',
            trainer: 'Jack O\'Reilly',
            jockey: 'Emily Chen',
            age: 2,
            weight: 135,
            odds: 26.00
          }
        ]
      }
    }
  },
  {
    timeSinceVideoStartedInMs: 23000,
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
    timeSinceVideoStartedInMs: 39000,
    persistInHistory: true,
    action: {
      channel: 'race.betting',
      data: {
        type: 'betting_results',
        raceId: 1,
        raceResults: [3, 7, 1]
      }
    }
  }
]
