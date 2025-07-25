#!/usr/bin/env python3
import json
import random

def generate_horse_racing_chat():
    """Generate an array of JSON objects for horse racing chat simulation"""
    
    # Horse racing crowd commentary DURING the race
    horse_racing_comments = [
        "Go, go, go!",
        "Thunder Strike is pulling ahead!",
        "Look at them sprint down the backstretch!",
        "They're neck and neck!",
        "What a move on the inside!",
        "He's gaining ground—can he catch up?",
        "Come on, number 7!",
        "They're coming around the final turn!",
        "It's too close to call!",
        "Push, push, push!",
        "The crowd is on their feet!",
        "What a burst of speed!",
        "Don't let up now!",
        "He's making a late charge!",
        "They're all bunched up!",
        "Who's going to break away?",
        "Hold that lead!",
        "Here comes the favorite on the outside!",
        "It's a battle to the finish!",
        "Unbelievable acceleration!",
        "They're thundering down the stretch!",
        "Can he hold on to first place?",
        "Look at that finish!",
        "Photo finish coming up!",
        "What a thrilling race!",
        "He's closing the gap!",
        "Come on, bring it home!",
        "They're giving it everything they've got!",
        "The tension is unreal!",
        "What a race!"
    ]
    
    chat_entries = []
    time_ms = 23000
    
    # Generate 16 chat entries, each with a random bot number between 1 and 40
    for i in range(16):
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
    output_filename = "horse_racing_chat_data_during_race.txt"
    
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(chat_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Generated {len(chat_data)} chat entries")
    print(f"📝 Data saved to: {output_filename}")
    print(f"⏱️  Time range: {chat_data[0]['timeSinceVideoStartedInMs']}ms to {chat_data[-1]['timeSinceVideoStartedInMs']}ms")

if __name__ == "__main__":
    main() 