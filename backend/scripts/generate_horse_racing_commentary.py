#!/usr/bin/env python3
import json
import random

def generate_horse_racing_commentary():
    """Generate an array of JSON objects for horse racing commentator simulation"""
    
    # Professional horse racing commentator phrases
    commentator_phrases = [
        "Welcome to Aintree.",
        "And they're off to a perfect start.",
        "The field is bunched together as they approach the first fence.",
        "Thunder Strike leads by two lengths.",
        "A magnificent jump there by Lightning Bolt.",
        "They're setting a steady pace in the early stages.",
        "The runners are well within themselves at this point.",
        "Perfect positioning as they negotiate the turn.",
        "The pace is beginning to quicken now.",
        "Magnificent horsemanship on display here.",
        "They're approaching the water jump in good order.",
        "A slight mistake there but recovers well.",
        "The field is starting to stretch out now.",
        "Coming to the business end of the race.",
        "The leaders are pulling clear of the field.",
        "An extraordinary turn of foot there.",
        "They're entering the home straight now.",
        "The crowd is on their feet as they approach the line.",
        "What a thrilling finish we have in store.",
        "Down to the final furlong now.",
        "They're neck and neck as they battle it out.",
        "A photo finish looks certain from here.",
        "The jockey is asking for everything now.",
        "An incredible burst of speed in the final yards.",
        "What drama in the closing stages.",
        "They flash past the winning post together.",
        "A magnificent performance from the winner.",
        "That was poetry in motion.",
        "The crowd erupts as they cross the line.",
        "What a spectacular finish to a wonderful race.",
        "The tension is palpable as they round the bend.",
        "A bold move on the outside.",
        "The favorite is making a charge.",
        "A stumble there, but quickly recovered.",
        "The pace is relentless.",
        "They're really strung out across the track.",
        "A masterclass in riding from the jockey.",
        "The underdog is surprising everyone.",
        "A surge from the back of the field.",
        "They're jostling for position.",
        "A flawless jump over the last fence.",
        "The crowd is roaring with excitement.",
        "A heart-stopping moment as they nearly collide.",
        "The leader is under pressure now.",
        "A late challenge emerging on the rail.",
        "They're giving it everything in the final stretch.",
        "A sensational run from the outsider.",
        "The gap is closing rapidly.",
        "A breathtaking display of stamina.",
        "The finish line is in sight.",
        "A dramatic turn of events in the last seconds.",
        "The jockey glances over his shoulder.",
        "A new course record could be on the cards.",
        "The horses are neck and neck.",
        "A thrilling duel to the finish.",
        "The winner punches the air in delight.",
        "A race that will be remembered for years.",
        "The tension is unbearable.",
        "A fairy-tale ending for the connections.",
        "The field is giving their all.",
        "A truly unforgettable race.",
        "The atmosphere is electric as they cross the line."
    ]
    
    commentary_entries = []
    time_ms = 1500
    time_minutes = 0
    time_seconds = 0
    
    # Generate 30 commentary entries
    for i in range(20):
        # Format timeCode as MM:SS
        time_code = f"{time_minutes:02d}:{time_seconds:02d}"
        
        # Select a random commentator phrase
        comment = random.choice(commentator_phrases)
        
        entry = {
            "timeSinceVideoStartedInMs": time_ms,
            "persistInHistory": False,
            "action": {
                "channel": "race.commentary",
                "data": {
                    "text": comment,
                    "timeCode": time_code
                }
            }
        }
        
        commentary_entries.append(entry)
        
        # Increment time by 3000ms (3 seconds)
        time_ms += 3000
        
        # Increment timeCode by 3 seconds
        time_seconds += 3
        if time_seconds >= 60:
            time_minutes += 1
            time_seconds -= 60
    
    return commentary_entries

def main():
    """Main function to generate and save the commentary data"""
    print("Generating horse racing commentary data...")
    
    # Generate the commentary entries
    commentary_data = generate_horse_racing_commentary()
    
    # Write to text file as JSON array
    output_filename = "horse_racing_commentary_data.txt"
    
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(commentary_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Generated {len(commentary_data)} commentary entries")
    print(f"📝 Data saved to: {output_filename}")
    print(f"⏱️  Time range: {commentary_data[0]['timeSinceVideoStartedInMs']}ms to {commentary_data[-1]['timeSinceVideoStartedInMs']}ms")
    print(f"🕒 TimeCode range: {commentary_data[0]['action']['data']['timeCode']} to {commentary_data[-1]['action']['data']['timeCode']}")

if __name__ == "__main__":
    main() 