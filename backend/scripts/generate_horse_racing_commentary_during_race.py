#!/usr/bin/env python3
import json
import random

def generate_horse_racing_commentary():
    """Generate an array of JSON objects for horse racing chat simulation"""
    
    # Horse racing crowd commentary DURING the race
    horse_racing_comments = [
        "And they're off! A clean break from the gates.",
        "Thunder Strike takes an early lead as they charge down the straight.",
        "They're tightly packed as they approach the first turn.",
        "Look at that acceleration from the favorite on the outside!",
        "Number 7 is making a bold move up the rail.",
        "It's neck and neck between the front runners!",
        "The jockeys are urging their mounts for more speed.",
        "They're thundering down the backstretch—what a sight!",
        "A strong challenge coming from the middle of the pack.",
        "The pace is relentless as they head into the far turn.",
        "You can feel the tension as they bunch up for the final stretch.",
        "Thunder Strike is being pressed hard by the challengers.",
        "What a surge from the outsider—he's closing the gap!",
        "They're three wide as they swing into the home straight.",
        "The crowd is roaring as the leaders battle it out.",
        "It's a duel to the finish—who will get there first?",
        "A late charge from number 12 on the outside!",
        "They're giving it everything in the final furlong.",
        "Photo finish looming as they hit the wire together!",
        "What a thrilling race—absolutely breathtaking action!",
        "The favorite is digging deep, but the challengers won't quit.",
        "Every stride counts now as they approach the finish line.",
        "Unbelievable determination from these horses and riders.",
        "The lead keeps changing—this is horse racing at its best!",
        "A burst of speed from the back—can he catch them in time?",
        "They're all out—no one is holding back now!",
        "It's too close to call as they flash past the post!",
        "What a performance—this race will be talked about for years!"
    ]
    
    chat_entries = []
    time_ms = 23000
    time_end_ms = 38000  # You can change this value to set the end time in ms

    # Generate chat entries from time_ms up to and including time_end_ms, incrementing by 1000ms
    while time_ms <= time_end_ms:
        if (time_ms / 1000) % 2 == 0:
            time_ms += 1000
            continue
        # Generate random bot number from 01 to 40
        bot_number = f"{random.randint(1, 40):02d}"
        
        # Select a random comment
        comment = random.choice(horse_racing_comments)
        
        entry = {
            "timeSinceVideoStartedInMs": time_ms,
            "persistInHistory": False,
            "action": {
                "channel": "race.commentary",
                "data": {
                    "text": comment,
                    "timeCode": "00:00"
                }
            }
        }
        
        chat_entries.append(entry)
        time_ms += 1000
    
    return chat_entries

def main():
    """Main function to generate and save the chat data"""
    print("Generating horse racing chat data...")
    
    # Generate the chat entries
    chat_data = generate_horse_racing_commentary()
    
    # Write to text file as JSON array
    output_filename = "horse_racing_commentary_data_during_race.txt"
    
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(chat_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Generated {len(chat_data)} chat entries")
    print(f"📝 Data saved to: {output_filename}")
    print(f"⏱️  Time range: {chat_data[0]['timeSinceVideoStartedInMs']}ms to {chat_data[-1]['timeSinceVideoStartedInMs']}ms")

if __name__ == "__main__":
    main() 