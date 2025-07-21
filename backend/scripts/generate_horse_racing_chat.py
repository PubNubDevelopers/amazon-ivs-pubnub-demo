#!/usr/bin/env python3
import json
import random

def generate_horse_racing_chat():
    """Generate an array of JSON objects for horse racing chat simulation"""
    
    # Horse racing fan commentary options
    horse_racing_comments = [
        "Let's make history!",
        "Come on Thunder Strike!",
        "What a magnificent gallop!",
        "The pace is incredible today!",
        "Look at that stride!",
        "Perfect form coming around the turn!",
        "This is going to be close!",
        "Amazing jockey work there!",
        "The crowd is going wild!",
        "What a beautiful race!",
        "That's some serious speed!",
        "Incredible finish line approach!",
        "The horses are neck and neck!",
        "Spectacular performance today!",
        "What a champion!",
        "The track conditions are perfect!",
        "Look at those powerful legs!",
        "This is edge-of-your-seat racing!",
        "What determination!",
        "The thundering hooves!",
        "Absolutely breathtaking!",
        "What a comeback story!",
        "The precision is remarkable!",
        "This is why we love horse racing!",
        "Pure poetry in motion!",
        "The energy is electric!",
        "What a photo finish!",
        "Incredible athleticism!",
        "The crowd is on their feet!",
        "This is racing at its finest!",
        "What a beautiful stride pattern!",
        "The tension is palpable!",
        "Magnificent horsemanship!",
        "This is what legends are made of!",
        "The speed is unbelievable!",
        "What a thrilling race!",
        "Perfect timing on that move!",
        "The horses are flying!",
        "This is absolutely incredible!",
        "What a day for racing!"
    ]
    
    chat_entries = []
    time_ms = 1000
    
    # Generate 40 chat entries (one for each possible bot)
    for i in range(40):
        # Generate bot number from 01 to 40
        bot_number = f"{(i % 40) + 1:02d}"
        
        # Select a random comment
        comment = random.choice(horse_racing_comments)
        
        entry = {
            "timeSinceVideoStartedInMs": time_ms,
            "persistInHistory": False,
            "action": {
                "channel": "game.chat",
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
    output_filename = "horse_racing_chat_data.txt"
    
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(chat_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Generated {len(chat_data)} chat entries")
    print(f"📝 Data saved to: {output_filename}")
    print(f"⏱️  Time range: {chat_data[0]['timeSinceVideoStartedInMs']}ms to {chat_data[-1]['timeSinceVideoStartedInMs']}ms")

if __name__ == "__main__":
    main() 