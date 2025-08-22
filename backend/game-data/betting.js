//  Start of betting: 0
//  Start of race: 30000
//  End of race: 136000
//  End of video loop: 180000

exports.betting = [
  {
    "timeSinceVideoStartedInMs": 0,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 1,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 1,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 1,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 1,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 1,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 1,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 1,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 136000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 1,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 180000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 2,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 205000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 2,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 206000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 2,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 207000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 2,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 208000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 2,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 209000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 2,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 210000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 2,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 316000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 2,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 360000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 3,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 385000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 3,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 386000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 3,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 387000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 3,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 388000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 3,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 389000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 3,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 390000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 3,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 496000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 3,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 540000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 4,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 565000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 4,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 566000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 4,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 567000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 4,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 568000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 4,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 569000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 4,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 570000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 4,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 676000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 4,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 720000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 5,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 745000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 5,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 746000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 5,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 747000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 5,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 748000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 5,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 749000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 5,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 750000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 5,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 856000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 5,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 900000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 6,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 925000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 6,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 926000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 6,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 927000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 6,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 928000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 6,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 929000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 6,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 930000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 6,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1036000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 6,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1080000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 7,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1105000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 7,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1106000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 7,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1107000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 7,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1108000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 7,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1109000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 7,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1110000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 7,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1216000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 7,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1260000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 8,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1285000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 8,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1286000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 8,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1287000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 8,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1288000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 8,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1289000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 8,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1290000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 8,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1396000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 8,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1440000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 9,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1465000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 9,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1466000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 9,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1467000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 9,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1468000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 9,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1469000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 9,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1470000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 9,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1576000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 9,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1620000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 10,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1645000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 10,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1646000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 10,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1647000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 10,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1648000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 10,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1649000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 10,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1650000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 10,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1756000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 10,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1800000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 11,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1825000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 11,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1826000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 11,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1827000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 11,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1828000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 11,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1829000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 11,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1830000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 11,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1936000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 11,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 1980000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 12,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2005000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 12,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2006000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 12,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2007000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 12,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2008000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 12,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2009000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 12,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2010000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 12,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2116000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 12,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2160000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 13,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2185000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 13,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2186000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 13,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2187000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 13,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2188000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 13,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2189000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 13,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2190000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 13,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2296000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 13,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2340000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 14,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2365000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 14,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2366000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 14,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2367000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 14,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2368000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 14,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2369000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 14,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2370000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 14,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2476000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 14,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2520000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 15,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2545000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 15,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2546000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 15,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2547000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 15,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2548000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 15,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2549000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 15,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2550000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 15,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2656000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 15,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2700000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 16,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2725000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 16,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2726000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 16,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2727000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 16,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2728000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 16,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2729000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 16,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2730000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 16,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2836000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 16,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2880000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 17,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2905000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 17,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2906000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 17,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2907000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 17,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2908000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 17,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2909000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 17,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 2910000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 17,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3016000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 17,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3060000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 18,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3085000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 18,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3086000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 18,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3087000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 18,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3088000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 18,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3089000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 18,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3090000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 18,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3196000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 18,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3240000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 19,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3265000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 19,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3266000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 19,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3267000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 19,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3268000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 19,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3269000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 19,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3270000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 19,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3376000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 19,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3420000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 20,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3445000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 20,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3446000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 20,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3447000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 20,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3448000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 20,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3449000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 20,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3450000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 20,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3556000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 20,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3600000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 21,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3625000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 21,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3626000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 21,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3627000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 21,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3628000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 21,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3629000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 21,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3630000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 21,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3736000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 21,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3780000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 22,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3805000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 22,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3806000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 22,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3807000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 22,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3808000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 22,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3809000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 22,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3810000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 22,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3916000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 22,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3960000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 23,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3985000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 23,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3986000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 23,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3987000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 23,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3988000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 23,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3989000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 23,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 3990000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 23,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4096000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 23,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4140000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 24,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4165000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 24,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4166000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 24,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4167000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 24,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4168000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 24,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4169000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 24,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4170000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 24,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4276000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 24,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4320000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 25,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4345000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 25,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4346000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 25,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4347000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 25,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4348000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 25,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4349000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 25,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4350000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 25,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4456000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 25,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4500000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 26,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4525000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 26,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4526000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 26,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4527000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 26,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4528000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 26,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4529000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 26,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4530000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 26,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4636000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 26,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4680000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 27,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4705000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 27,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4706000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 27,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4707000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 27,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4708000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 27,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4709000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 27,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4710000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 27,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4816000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 27,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4860000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 28,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4885000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 28,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4886000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 28,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4887000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 28,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4888000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 28,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4889000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 28,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4890000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 28,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 4996000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 28,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5040000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 29,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5065000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 29,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5066000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 29,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5067000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 29,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5068000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 29,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5069000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 29,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5070000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 29,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5176000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 29,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5220000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 30,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5245000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 30,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5246000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 30,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5247000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 30,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5248000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 30,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5249000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 30,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5250000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 30,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5356000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 30,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5400000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 31,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5425000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 31,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5426000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 31,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5427000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 31,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5428000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 31,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5429000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 31,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5430000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 31,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5536000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 31,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5580000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 32,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5605000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 32,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5606000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 32,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5607000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 32,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5608000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 32,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5609000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 32,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5610000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 32,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5716000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 32,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5760000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 33,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5785000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 33,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5786000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 33,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5787000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 33,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5788000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 33,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5789000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 33,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5790000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 33,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5896000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 33,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5940000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 34,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5965000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 34,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5966000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 34,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5967000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 34,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5968000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 34,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5969000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 34,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 5970000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 34,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6076000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 34,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6120000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 35,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6145000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 35,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6146000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 35,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6147000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 35,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6148000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 35,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6149000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 35,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6150000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 35,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6256000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 35,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6300000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 36,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6325000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 36,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6326000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 36,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6327000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 36,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6328000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 36,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6329000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 36,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6330000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 36,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6436000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 36,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6480000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 37,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6505000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 37,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6506000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 37,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6507000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 37,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6508000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 37,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6509000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 37,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6510000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 37,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6616000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 37,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6660000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 38,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6685000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 38,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6686000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 38,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6687000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 38,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6688000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 38,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6689000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 38,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6690000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 38,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6796000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 38,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6840000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 39,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6865000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 39,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6866000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 39,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6867000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 39,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6868000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 39,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6869000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 39,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6870000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 39,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 6976000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 39,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7020000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 40,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7045000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 40,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7046000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 40,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7047000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 40,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7048000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 40,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7049000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 40,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7050000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 40,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7156000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 40,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7200000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 41,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7225000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 41,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7226000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 41,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7227000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 41,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7228000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 41,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7229000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 41,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7230000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 41,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7336000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 41,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7380000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 42,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7405000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 42,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7406000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 42,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7407000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 42,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7408000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 42,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7409000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 42,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7410000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 42,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7516000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 42,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7560000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 43,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7585000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 43,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7586000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 43,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7587000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 43,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7588000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 43,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7589000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 43,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7590000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 43,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7696000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 43,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7740000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 44,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7765000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 44,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7766000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 44,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7767000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 44,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7768000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 44,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7769000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 44,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7770000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 44,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7876000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 44,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7920000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 45,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7945000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 45,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7946000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 45,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7947000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 45,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7948000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 45,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7949000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 45,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 7950000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 45,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8056000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 45,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8100000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 46,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8125000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 46,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8126000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 46,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8127000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 46,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8128000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 46,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8129000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 46,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8130000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 46,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8236000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 46,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8280000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 47,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8305000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 47,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8306000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 47,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8307000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 47,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8308000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 47,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8309000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 47,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8310000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 47,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8416000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 47,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8460000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 48,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8485000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 48,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8486000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 48,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8487000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 48,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8488000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 48,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8489000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 48,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8490000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 48,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8596000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 48,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8640000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 49,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8665000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 49,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8666000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 49,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8667000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 49,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8668000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 49,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8669000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 49,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8670000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 49,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8776000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 49,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8820000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 50,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8845000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 50,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8846000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 50,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8847000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 50,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8848000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 50,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8849000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 50,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8850000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 50,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 8956000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 50,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9000000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 51,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9025000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 51,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9026000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 51,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9027000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 51,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9028000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 51,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9029000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 51,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9030000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 51,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9136000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 51,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9180000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 52,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9205000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 52,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9206000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 52,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9207000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 52,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9208000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 52,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9209000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 52,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9210000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 52,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9316000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 52,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9360000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 53,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9385000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 53,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9386000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 53,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9387000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 53,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9388000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 53,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9389000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 53,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9390000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 53,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9496000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 53,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9540000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 54,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9565000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 54,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9566000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 54,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9567000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 54,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9568000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 54,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9569000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 54,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9570000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 54,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9676000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 54,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9720000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 55,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9745000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 55,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9746000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 55,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9747000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 55,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9748000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 55,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9749000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 55,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9750000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 55,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9856000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 55,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9900000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 56,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9925000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 56,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9926000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 56,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9927000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 56,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9928000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 56,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9929000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 56,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 9930000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 56,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10036000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 56,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10080000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 57,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10105000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 57,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10106000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 57,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10107000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 57,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10108000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 57,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10109000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 57,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10110000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 57,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10216000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 57,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10260000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 58,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10285000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 58,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10286000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 58,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10287000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 58,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10288000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 58,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10289000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 58,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10290000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 58,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10396000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 58,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10440000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 59,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10465000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 59,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10466000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 59,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10467000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 59,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10468000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 59,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10469000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 59,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10470000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 59,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10576000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 59,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10620000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 60,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10645000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 60,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10646000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 60,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10647000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 60,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10648000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 60,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10649000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 60,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10650000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 60,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10756000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 60,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10800000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 61,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10825000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 61,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10826000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 61,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10827000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 61,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10828000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 61,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10829000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 61,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10830000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 61,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10936000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 61,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 10980000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 62,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11005000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 62,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11006000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 62,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11007000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 62,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11008000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 62,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11009000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 62,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11010000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 62,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11116000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 62,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11160000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 63,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11185000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 63,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11186000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 63,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11187000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 63,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11188000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 63,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11189000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 63,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11190000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 63,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11296000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 63,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11340000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 64,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11365000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 64,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11366000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 64,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11367000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 64,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11368000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 64,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11369000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 64,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11370000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 64,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11476000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 64,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11520000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 65,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11545000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 65,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11546000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 65,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11547000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 65,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11548000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 65,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11549000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 65,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11550000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 65,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11656000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 65,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11700000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 66,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11725000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 66,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11726000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 66,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11727000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 66,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11728000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 66,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11729000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 66,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11730000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 66,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11836000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 66,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11880000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 67,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11905000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 67,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11906000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 67,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11907000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 67,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11908000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 67,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11909000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 67,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 11910000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 67,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12016000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 67,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12060000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 68,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12085000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 68,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12086000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 68,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12087000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 68,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12088000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 68,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12089000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 68,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12090000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 68,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12196000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 68,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12240000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 69,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12265000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 69,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12266000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 69,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12267000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 69,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12268000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 69,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12269000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 69,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12270000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 69,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12376000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 69,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12420000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 70,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12445000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 70,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12446000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 70,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12447000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 70,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12448000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 70,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12449000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 70,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12450000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 70,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12556000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 70,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12600000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 71,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12625000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 71,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12626000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 71,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12627000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 71,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12628000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 71,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12629000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 71,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12630000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 71,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12736000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 71,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12780000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 72,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12805000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 72,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12806000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 72,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12807000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 72,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12808000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 72,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12809000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 72,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12810000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 72,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12916000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 72,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12960000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 73,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12985000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 73,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12986000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 73,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12987000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 73,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12988000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 73,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12989000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 73,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 12990000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 73,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13096000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 73,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13140000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 74,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13165000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 74,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13166000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 74,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13167000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 74,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13168000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 74,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13169000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 74,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13170000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 74,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13276000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 74,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13320000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 75,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13345000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 75,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13346000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 75,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13347000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 75,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13348000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 75,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13349000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 75,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13350000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 75,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13456000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 75,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13500000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 76,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13525000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 76,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13526000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 76,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13527000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 76,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13528000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 76,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13529000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 76,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13530000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 76,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13636000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 76,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13680000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 77,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13705000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 77,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13706000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 77,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13707000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 77,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13708000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 77,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13709000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 77,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13710000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 77,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13816000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 77,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13860000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 78,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13885000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 78,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13886000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 78,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13887000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 78,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13888000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 78,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13889000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 78,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13890000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 78,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 13996000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 78,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14040000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 79,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14065000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 79,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14066000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 79,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14067000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 79,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14068000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 79,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14069000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 79,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14070000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 79,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14176000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 79,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14220000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 80,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14245000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 80,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14246000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 80,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14247000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 80,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14248000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 80,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14249000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 80,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14250000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 80,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14356000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 80,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14400000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 81,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14425000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 81,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14426000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 81,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14427000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 81,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14428000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 81,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14429000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 81,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14430000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 81,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14536000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 81,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14580000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 82,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14605000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 82,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14606000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 82,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14607000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 82,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14608000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 82,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14609000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 82,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14610000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 82,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14716000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 82,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14760000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 83,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14785000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 83,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14786000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 83,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14787000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 83,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14788000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 83,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14789000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 83,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14790000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 83,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14896000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 83,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14940000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 84,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14965000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 84,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14966000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 84,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14967000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 84,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14968000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 84,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14969000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 84,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 14970000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 84,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15076000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 84,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15120000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 85,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15145000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 85,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15146000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 85,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15147000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 85,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15148000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 85,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15149000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 85,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15150000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 85,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15256000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 85,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15300000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 86,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15325000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 86,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15326000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 86,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15327000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 86,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15328000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 86,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15329000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 86,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15330000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 86,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15436000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 86,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15480000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 87,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15505000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 87,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15506000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 87,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15507000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 87,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15508000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 87,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15509000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 87,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15510000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 87,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15616000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 87,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15660000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 88,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15685000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 88,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15686000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 88,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15687000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 88,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15688000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 88,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15689000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 88,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15690000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 88,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15796000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 88,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15840000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 89,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15865000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 89,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15866000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 89,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15867000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 89,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15868000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 89,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15869000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 89,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15870000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 89,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 15976000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 89,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16020000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 90,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16045000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 90,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16046000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 90,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16047000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 90,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16048000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 90,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16049000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 90,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16050000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 90,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16156000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 90,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16200000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 91,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16225000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 91,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16226000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 91,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16227000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 91,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16228000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 91,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16229000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 91,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16230000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 91,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16336000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 91,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16380000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 92,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16405000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 92,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16406000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 92,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16407000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 92,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16408000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 92,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16409000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 92,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16410000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 92,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16516000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 92,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16560000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 93,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16585000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 93,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16586000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 93,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16587000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 93,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16588000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 93,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16589000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 93,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16590000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 93,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16696000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 93,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16740000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 94,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16765000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 94,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16766000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 94,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16767000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 94,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16768000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 94,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16769000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 94,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16770000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 94,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16876000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 94,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16920000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 95,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16945000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 95,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16946000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 95,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16947000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 95,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16948000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 95,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16949000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 95,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 16950000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 95,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17056000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 95,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17100000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 96,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17125000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 96,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17126000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 96,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17127000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 96,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17128000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 96,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17129000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 96,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17130000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 96,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17236000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 96,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17280000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 97,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17305000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 97,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17306000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 97,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17307000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 97,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17308000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 97,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17309000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 97,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17310000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 97,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17416000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 97,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17460000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 98,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17485000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 98,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17486000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 98,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17487000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 98,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17488000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 98,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17489000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 98,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17490000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 98,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17596000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 98,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17640000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 99,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17665000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 99,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17666000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 99,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17667000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 99,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17668000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 99,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17669000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 99,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17670000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 99,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17776000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 99,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17820000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 100,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17845000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 100,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17846000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 100,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17847000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 100,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17848000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 100,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17849000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 100,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17850000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 100,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 17956000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 100,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18000000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 101,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18025000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 101,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18026000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 101,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18027000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 101,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18028000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 101,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18029000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 101,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18030000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 101,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18136000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 101,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18180000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 102,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18205000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 102,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18206000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 102,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18207000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 102,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18208000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 102,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18209000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 102,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18210000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 102,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18316000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 102,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18360000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 103,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18385000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 103,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18386000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 103,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18387000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 103,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18388000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 103,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18389000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 103,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18390000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 103,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18496000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 103,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18540000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 104,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18565000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 104,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18566000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 104,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18567000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 104,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18568000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 104,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18569000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 104,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18570000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 104,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18676000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 104,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18720000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 105,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18745000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 105,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18746000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 105,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18747000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 105,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18748000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 105,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18749000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 105,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18750000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 105,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18856000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 105,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18900000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 106,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18925000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 106,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18926000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 106,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18927000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 106,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18928000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 106,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18929000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 106,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 18930000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 106,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19036000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 106,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19080000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 107,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19105000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 107,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19106000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 107,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19107000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 107,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19108000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 107,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19109000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 107,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19110000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 107,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19216000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 107,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19260000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 108,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19285000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 108,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19286000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 108,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19287000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 108,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19288000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 108,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19289000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 108,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19290000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 108,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19396000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 108,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19440000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 109,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19465000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 109,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19466000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 109,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19467000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 109,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19468000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 109,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19469000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 109,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19470000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 109,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19576000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 109,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19620000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 110,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19645000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 110,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19646000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 110,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19647000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 110,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19648000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 110,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19649000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 110,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19650000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 110,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19756000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 110,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19800000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 111,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19825000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 111,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19826000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 111,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19827000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 111,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19828000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 111,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19829000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 111,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19830000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 111,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19936000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 111,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 19980000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 112,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20005000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 112,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20006000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 112,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20007000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 112,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20008000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 112,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20009000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 112,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20010000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 112,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20116000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 112,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20160000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 113,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20185000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 113,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20186000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 113,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20187000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 113,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20188000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 113,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20189000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 113,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20190000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 113,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20296000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 113,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20340000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 114,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20365000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 114,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20366000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 114,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20367000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 114,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20368000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 114,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20369000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 114,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20370000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 114,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20476000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 114,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20520000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 115,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20545000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 115,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20546000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 115,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20547000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 115,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20548000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 115,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20549000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 115,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20550000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 115,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20656000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 115,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20700000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 116,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20725000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 116,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20726000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 116,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20727000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 116,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20728000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 116,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20729000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 116,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20730000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 116,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20836000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 116,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20880000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 117,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20905000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 117,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20906000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 117,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20907000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 117,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20908000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 117,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20909000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 117,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 20910000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 117,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21016000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 117,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21060000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 118,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21085000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 118,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21086000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 118,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21087000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 118,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21088000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 118,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21089000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 118,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21090000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 118,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21196000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 118,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21240000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 119,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21265000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 119,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21266000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 119,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21267000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 119,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21268000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 119,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21269000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 119,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21270000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 119,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21376000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 119,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21420000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 120,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21445000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 120,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21446000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 120,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21447000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 120,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21448000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 120,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21449000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 120,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21450000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 120,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21556000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 120,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21600000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 121,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21625000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 121,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21626000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 121,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21627000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 121,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21628000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 121,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21629000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 121,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21630000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 121,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21736000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 121,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21780000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 122,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21805000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 122,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21806000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 122,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21807000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 122,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21808000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 122,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21809000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 122,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21810000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 122,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21916000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 122,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21960000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 123,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21985000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 123,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21986000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 123,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21987000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 123,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21988000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 123,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21989000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 123,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 21990000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 123,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22096000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 123,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22140000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 124,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22165000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 124,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22166000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 124,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22167000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 124,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22168000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 124,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22169000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 124,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22170000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 124,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22276000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 124,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22320000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 125,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22345000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 125,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22346000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 125,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22347000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 125,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22348000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 125,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22349000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 125,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22350000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 125,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22456000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 125,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22500000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 126,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22525000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 126,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22526000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 126,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22527000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 126,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22528000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 126,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22529000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 126,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22530000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 126,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22636000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 126,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22680000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 127,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22705000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 127,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22706000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 127,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22707000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 127,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22708000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 127,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22709000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 127,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22710000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 127,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22816000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 127,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22860000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 128,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22885000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 128,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22886000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 128,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22887000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 128,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22888000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 128,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22889000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 128,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22890000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 128,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 22996000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 128,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23040000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 129,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23065000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 129,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23066000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 129,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23067000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 129,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23068000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 129,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23069000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 129,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23070000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 129,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23176000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 129,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23220000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 130,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23245000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 130,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23246000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 130,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23247000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 130,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23248000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 130,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23249000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 130,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23250000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 130,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23356000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 130,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23400000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 131,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23425000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 131,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23426000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 131,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23427000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 131,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23428000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 131,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23429000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 131,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23430000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 131,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23536000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 131,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23580000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 132,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23605000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 132,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23606000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 132,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23607000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 132,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23608000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 132,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23609000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 132,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23610000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 132,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23716000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 132,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23760000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 133,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23785000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 133,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23786000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 133,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23787000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 133,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23788000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 133,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23789000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 133,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23790000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 133,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23896000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 133,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23940000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 134,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23965000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 134,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23966000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 134,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23967000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 134,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23968000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 134,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23969000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 134,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 23970000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 134,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24076000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 134,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24120000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 135,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24145000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 135,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24146000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 135,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24147000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 135,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24148000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 135,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24149000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 135,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24150000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 135,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24256000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 135,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24300000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 136,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24325000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 136,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24326000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 136,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24327000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 136,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24328000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 136,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24329000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 136,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24330000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 136,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24436000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 136,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24480000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 137,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24505000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 137,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24506000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 137,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24507000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 137,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24508000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 137,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24509000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 137,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24510000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 137,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24616000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 137,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24660000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 138,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24685000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 138,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24686000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 138,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24687000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 138,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24688000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 138,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24689000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 138,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24690000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 138,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24796000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 138,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24840000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 139,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24865000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 139,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24866000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 139,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24867000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 139,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24868000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 139,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24869000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 139,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24870000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 139,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 24976000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 139,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25020000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 140,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25045000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 140,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25046000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 140,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25047000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 140,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25048000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 140,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25049000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 140,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25050000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 140,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25156000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 140,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25200000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 141,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25225000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 141,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25226000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 141,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25227000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 141,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25228000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 141,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25229000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 141,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25230000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 141,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25336000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 141,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25380000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 142,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25405000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 142,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25406000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 142,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25407000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 142,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25408000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 142,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25409000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 142,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25410000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 142,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25516000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 142,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25560000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 143,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25585000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 143,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25586000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 143,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25587000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 143,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25588000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 143,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25589000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 143,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25590000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 143,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25696000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 143,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25740000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 144,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25765000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 144,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25766000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 144,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25767000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 144,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25768000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 144,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25769000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 144,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25770000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 144,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25876000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 144,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25920000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 145,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25945000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 145,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25946000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 145,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25947000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 145,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25948000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 145,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25949000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 145,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 25950000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 145,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26056000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 145,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26100000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 146,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26125000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 146,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26126000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 146,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26127000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 146,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26128000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 146,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26129000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 146,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26130000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 146,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26236000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 146,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26280000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 147,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26305000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 147,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26306000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 147,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26307000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 147,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26308000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 147,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26309000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 147,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26310000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 147,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26416000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 147,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26460000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 148,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26485000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 148,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26486000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 148,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26487000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 148,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26488000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 148,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26489000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 148,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26490000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 148,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26596000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 148,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26640000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 149,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26665000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 149,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26666000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 149,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26667000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 149,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26668000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 149,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26669000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 149,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26670000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 149,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26776000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 149,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26820000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 150,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26845000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 150,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26846000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 150,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26847000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 150,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26848000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 150,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26849000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 150,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26850000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 150,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 26956000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 150,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27000000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 151,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27025000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 151,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27026000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 151,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27027000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 151,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27028000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 151,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27029000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 151,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27030000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 151,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27136000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 151,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27180000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 152,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27205000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 152,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27206000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 152,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27207000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 152,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27208000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 152,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27209000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 152,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27210000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 152,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27316000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 152,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27360000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 153,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27385000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 153,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27386000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 153,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27387000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 153,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27388000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 153,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27389000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 153,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27390000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 153,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27496000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 153,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27540000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 154,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27565000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 154,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27566000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 154,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27567000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 154,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27568000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 154,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27569000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 154,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27570000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 154,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27676000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 154,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27720000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 155,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27745000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 155,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27746000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 155,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27747000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 155,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27748000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 155,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27749000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 155,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27750000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 155,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27856000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 155,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27900000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 156,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27925000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 156,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27926000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 156,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27927000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 156,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27928000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 156,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27929000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 156,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 27930000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 156,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28036000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 156,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28080000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 157,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28105000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 157,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28106000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 157,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28107000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 157,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28108000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 157,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28109000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 157,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28110000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 157,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28216000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 157,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28260000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 158,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28285000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 158,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28286000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 158,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28287000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 158,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28288000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 158,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28289000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 158,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28290000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 158,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28396000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 158,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28440000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 159,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28465000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 159,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28466000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 159,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28467000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 159,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28468000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 159,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28469000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 159,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28470000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 159,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28576000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 159,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28620000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 160,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28645000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 160,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28646000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 160,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28647000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 160,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28648000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 160,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28649000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 160,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28650000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 160,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28756000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 160,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28800000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 161,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28825000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 161,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28826000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 161,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28827000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 161,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28828000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 161,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28829000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 161,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28830000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 161,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28936000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 161,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 28980000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 162,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29005000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 162,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29006000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 162,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29007000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 162,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29008000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 162,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29009000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 162,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29010000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 162,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29116000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 162,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29160000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 163,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29185000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 163,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29186000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 163,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29187000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 163,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29188000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 163,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29189000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 163,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29190000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 163,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29296000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 163,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29340000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 164,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29365000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 164,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29366000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 164,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29367000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 164,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29368000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 164,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29369000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 164,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29370000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 164,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29476000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 164,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29520000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 165,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29545000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 165,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29546000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 165,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29547000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 165,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29548000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 165,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29549000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 165,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29550000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 165,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29656000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 165,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29700000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 166,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29725000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 166,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29726000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 166,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29727000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 166,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29728000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 166,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29729000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 166,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29730000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 166,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29836000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 166,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29880000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 167,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29905000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 167,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29906000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 167,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29907000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 167,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29908000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 167,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29909000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 167,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 29910000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 167,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30016000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 167,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30060000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 168,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30085000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 168,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30086000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 168,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30087000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 168,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30088000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 168,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30089000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 168,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30090000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 168,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30196000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 168,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30240000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 169,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30265000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 169,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30266000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 169,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30267000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 169,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30268000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 169,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30269000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 169,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30270000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 169,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30376000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 169,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30420000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 170,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30445000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 170,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30446000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 170,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30447000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 170,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30448000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 170,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30449000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 170,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30450000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 170,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30556000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 170,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30600000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 171,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30625000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 171,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30626000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 171,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30627000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 171,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30628000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 171,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30629000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 171,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30630000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 171,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30736000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 171,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30780000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 172,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30805000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 172,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30806000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 172,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30807000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 172,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30808000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 172,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30809000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 172,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30810000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 172,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30916000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 172,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30960000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 173,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30985000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 173,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30986000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 173,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30987000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 173,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30988000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 173,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30989000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 173,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 30990000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 173,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31096000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 173,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31140000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 174,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31165000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 174,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31166000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 174,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31167000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 174,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31168000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 174,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31169000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 174,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31170000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 174,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31276000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 174,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31320000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 175,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31345000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 175,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31346000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 175,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31347000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 175,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31348000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 175,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31349000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 175,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31350000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 175,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31456000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 175,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31500000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 176,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31525000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 176,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31526000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 176,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31527000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 176,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31528000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 176,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31529000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 176,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31530000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 176,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31636000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 176,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31680000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 177,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31705000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 177,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31706000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 177,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31707000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 177,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31708000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 177,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31709000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 177,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31710000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 177,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31816000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 177,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31860000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 178,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31885000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 178,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31886000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 178,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31887000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 178,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31888000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 178,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31889000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 178,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31890000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 178,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 31996000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 178,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32040000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 179,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32065000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 179,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32066000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 179,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32067000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 179,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32068000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 179,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32069000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 179,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32070000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 179,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32176000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 179,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32220000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_open",
        "raceId": 180,
        "title": "Stormhoof Sprint",
        "stake": 5,
        "horses": [
          {
            "number": 1,
            "name": "Iron Mirage",
            "trainer": "Matha Caldwell",
            "jockey": "Miguel Santiago",
            "age": 2,
            "weight": 133,
            "odds": 2.5
          },
          {
            "number": 2,
            "name": "Thunderstride",
            "trainer": "Harlan McCoy",
            "jockey": "Casey O'Connor",
            "age": 1,
            "weight": 135,
            "odds": 3.75
          },
          {
            "number": 3,
            "name": "Velvet Fury",
            "trainer": "Yusef Ghani",
            "jockey": "Lena Hoshino",
            "age": 2,
            "weight": 136,
            "odds": 5.0
          },
          {
            "number": 4,
            "name": "Midnight Charge",
            "trainer": "Veronica DuBois",
            "jockey": "Tyrell Banks",
            "age": 1,
            "weight": 131,
            "odds": 7.5
          },
          {
            "number": 5,
            "name": "Blazing Comet",
            "trainer": "Tomás Rivera",
            "jockey": "Ricardo Del Mar",
            "age": 2,
            "weight": 130,
            "odds": 11.0
          },
          {
            "number": 6,
            "name": "Silver Arrow",
            "trainer": "Elena Petrova",
            "jockey": "Sophie Dubois",
            "age": 2,
            "weight": 134,
            "odds": 13.0
          }
        ]
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32245000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 180,
        "type": "betting_closing_soon",
        "timeRemaining": 5000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32246000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 180,
        "type": "betting_closing_soon",
        "timeRemaining": 4000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32247000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 180,
        "type": "betting_closing_soon",
        "timeRemaining": 3000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32248000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 180,
        "type": "betting_closing_soon",
        "timeRemaining": 2000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32249000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 180,
        "type": "betting_closing_soon",
        "timeRemaining": 1000
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32250000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "raceId": 180,
        "type": "betting_closed"
      }
    }
  },
  {
    "timeSinceVideoStartedInMs": 32356000,
    "persistInHistory": true,
    "action": {
      "channel": "race.betting",
      "data": {
        "type": "betting_results",
        "raceId": 180,
        "raceResults": [
          2,
          1,
          3
        ]
      }
    }
  }
]
