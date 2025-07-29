#!/usr/bin/env python3
import json
import random

def generate_horse_racing_chat():
    """Generate an array of JSON objects for horse racing chat simulation"""
    
    # Horse racing crowd commentary options (POST-RACE)
    horse_racing_comments = [
        "What an incredible finish!",
        "That was the most exciting race I've seen in years.",
        "Congratulations to the winner!",
        "Thunder Strike really earned that victory.",
        "I can't believe how close that was at the end.",
        "Photo finish! My heart is still racing.",
        "The jockey did an amazing job out there.",
        "What a comeback in the final stretch!",
        "That was pure adrenaline from start to finish.",
        "I lost my voice cheering!",
        "Well deserved win for number 7.",
        "That was a masterclass in horsemanship.",
        "The crowd is still buzzing after that result.",
        "I thought my horse had it, but what a surprise ending.",
        "That was a race for the history books.",
        "So proud of all the horses and riders today.",
        "I can't wait to see the replay.",
        "That finish line was intense!",
        "What a way to end the day.",
        "My bet finally paid off!",
        "I didn't expect that underdog to place!",
        "The atmosphere after the race is electric.",
        "Everyone's talking about that final sprint.",
        "That was a nail-biter right to the end.",
        "The winner really pulled away in the last seconds.",
        "What a performance from the whole field.",
        "I hope all the horses and jockeys are okay after that.",
        "That was worth every penny.",
        "Already looking forward to the next race!",
        "That was a true display of heart and determination.",
        "The celebrations are just getting started!",
        "What a day for racing fans.",
        "That finish will be talked about for years.",
        "I wish I could relive that moment again.",
        "The energy in the stands is unbelievable.",
        "That was a perfect ending to a great race.",
        "Cheers to the new champion!",
        "What a storybook ending.",
        "That was absolutely unforgettable."
    ]
    
    chat_entries = []
    time_ms = 39000
    time_end_ms = 69000  # You can change this value to set the end time in ms

    # Generate chat entries from time_ms up to and including time_end_ms, incrementing by 1000ms
    while time_ms <= time_end_ms:
        # Generate random bot number from 01 to 40
        bot_number = f"{random.randint(1, 40):02d}"
        
        # Select a random comment
        comment = random.choice(horse_racing_comments)
        
        entry = {
            "timeSinceVideoStartedInMs": time_ms,
            "persistInHistory": False,
            "action": {
                "channel": "race.chat.all",
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
    output_filename = "horse_racing_chat_data_post_race.txt"
    
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(chat_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Generated {len(chat_data)} chat entries")
    print(f"📝 Data saved to: {output_filename}")
    print(f"⏱️  Time range: {chat_data[0]['timeSinceVideoStartedInMs']}ms to {chat_data[-1]['timeSinceVideoStartedInMs']}ms")

if __name__ == "__main__":
    main() 