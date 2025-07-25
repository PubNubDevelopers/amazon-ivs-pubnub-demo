#!/usr/bin/env python3
import json
import random

def generate_horse_racing_chat():
    """Generate an array of JSON objects for horse racing chat simulation"""
    
    # Horse racing fan commentary options
    horse_racing_comments = [
        "I can't wait for the race to start!",
        "Who do you think will win today?",
        "The tension is building at the starting gate.",
        "All eyes on Thunder Strike—can he pull it off?",
        "The horses look so calm before the storm.",
        "I hope my bet pays off this time!",
        "Look at those beautiful horses warming up.",
        "The jockeys look focused and ready.",
        "This is going to be an exciting race!",
        "The crowd is buzzing with anticipation.",
        "I love the energy before the race begins.",
        "Which horse are you cheering for?",
        "The track looks perfect for racing today.",
        "I’ve got a good feeling about number 7.",
        "The parade to the post is always my favorite part.",
        "Let’s see if there’s an upset today!",
        "The starting bell is about to ring.",
        "Everyone’s placing their last-minute bets.",
        "The horses are lining up at the gate.",
        "It’s almost time—good luck to all the riders!",
        "Who’s ready for some action?",
        "May the best horse win!",
        "I hope for a clean and safe race.",
        "The excitement is unreal right now!",
        "This is what we’ve all been waiting for!",
        "Let’s go, Thunder Strike!",
        "I wonder if we’ll see a new record today.",
        "The atmosphere is electric before the start.",
        "I can feel the adrenaline in the air.",
        "Here we go—any second now!"
    ]   
    
    chat_entries = []
    time_ms = 1000
    
    # Generate 22 chat entries, each with a random bot number between 1 and 40
    for i in range(22):
        # Generate random bot number from 01 to 40
        bot_number = f"{random.randint(1, 40):02d}"
        
        # Select a random comment
        comment = random.choice(horse_racing_comments)
        
        entry = {
            "timeSinceVideoStartedInMs": time_ms,
            "persistInHistory": False,
            "action": {
                "channel": "race.chat",
                "data": {
                    "user": f"bot-{bot_number}",
                    "text": comment
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
    chat_data = generate_horse_racing_chat()
    
    # Write to text file as JSON array
    output_filename = "horse_racing_chat_data_pre_race.txt"
    
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(chat_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Generated {len(chat_data)} chat entries")
    print(f"📝 Data saved to: {output_filename}")
    print(f"⏱️  Time range: {chat_data[0]['timeSinceVideoStartedInMs']}ms to {chat_data[-1]['timeSinceVideoStartedInMs']}ms")

if __name__ == "__main__":
    main() 