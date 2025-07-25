#!/usr/bin/env python3
import json
import random

def generate_horse_racing_commentary():
    """Generate an array of JSON objects for horse racing chat simulation"""
    
    # Horse racing commentator pre-race sayings
    horse_racing_comments = [
        "Welcome, ladies and gentlemen, to a thrilling day of horse racing.",
        "The tension is palpable as the horses make their way to the starting gate.",
        "All eyes are on Thunder Strike—can the favorite deliver under pressure?",
        "The horses look in magnificent condition as they parade before the crowd.",
        "The jockeys are focused, each one hoping for the perfect start.",
        "The atmosphere here is absolutely electric as we count down to the off.",
        "The track is in pristine condition, ideal for fast times today.",
        "There's a real buzz in the air as the runners approach the gate.",
        "This is the moment we've all been waiting for—the start is just moments away.",
        "The field is strong today, and we could be in for a real spectacle.",
        "The parade to post is complete, and the horses are lining up.",
        "A hush falls over the crowd as the starter raises the flag.",
        "It's a wide-open contest—any one of these could take the honors.",
        "The favorite looks calm and collected, but anything can happen in racing.",
        "The last checks are being made—blinkers adjusted, girths tightened.",
        "The tension is mounting as the horses edge into the stalls.",
        "We're just seconds away from the off here at the track.",
        "The anticipation is building—who will get the best break from the gate?",
        "The starter is ready, and so are we. Stand by for action.",
        "And they're almost set—just waiting for the signal.",
        "The crowd is on their feet, eager for the race to begin.",
        "It's a perfect day for racing, and the excitement is tangible.",
        "The horses are loaded, the gates are set—let's get ready for a great race.",
        "There's a lot of confidence in the paddock, but only one can win.",
        "The bell is about to ring—hold your breath, folks.",
        "The underdog has caught the eye in the preliminaries—could we see an upset?",
        "The starter is giving final instructions—any moment now.",
        "The horses are restless in the stalls, sensing the race is near.",
        "The big question: who will seize the initiative when the gates fly open?",
        "Here we go—stand by for the start of this much-anticipated contest!"
    ]   
    
    chat_entries = []
    time_ms = 1000
    time_end_ms = 22000  # You can change this value to set the end time in ms

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
    output_filename = "horse_racing_commentary_data_pre_race.txt"
    
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(chat_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Generated {len(chat_data)} chat entries")
    print(f"📝 Data saved to: {output_filename}")
    print(f"⏱️  Time range: {chat_data[0]['timeSinceVideoStartedInMs']}ms to {chat_data[-1]['timeSinceVideoStartedInMs']}ms")

if __name__ == "__main__":
    main() 