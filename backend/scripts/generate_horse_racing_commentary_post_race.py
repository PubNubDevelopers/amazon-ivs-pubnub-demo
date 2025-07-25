#!/usr/bin/env python3
import json
import random

def generate_horse_racing_commentary():
    """Generate an array of JSON objects for horse racing chat simulation"""
    
    # Horse racing crowd commentary options (POST-RACE)
    horse_racing_comments = [
        "What a sensational finish to the race!",
        "The crowd is still on their feet after that dramatic conclusion.",
        "A truly memorable performance from the winner today.",
        "That's what horse racing is all about—unpredictable and thrilling to the very end.",
        "The jockey timed that run to perfection.",
        "Let's take another look at that photo finish—absolutely remarkable.",
        "The favorite lived up to the billing, but what a challenge from the runner-up.",
        "You could feel the tension right up to the final stride.",
        "The atmosphere here is electric as the celebrations begin.",
        "A well-deserved victory and a race that will be talked about for years.",
        "Congratulations to the connections of our new champion.",
        "That was a masterclass in riding under pressure.",
        "The underdog gave it everything—what a run for second place.",
        "The winning margin was just a nose—extraordinary scenes at the finish line.",
        "The horses gave their all, and the crowd is showing their appreciation.",
        "What a way to close out today's racing action.",
        "The trainer will be absolutely delighted with that result.",
        "A thrilling end to a fantastic day at the races.",
        "The winner showed real heart and determination in the final furlong.",
        "We'll be replaying that finish for a long time to come.",
        "The trophy presentation is about to get underway.",
        "A standing ovation for all the participants after a spectacular contest.",
        "That was a race worthy of the grandest stage.",
        "The excitement here is palpable as fans discuss that incredible finish.",
        "A new chapter written in the history books today.",
        "The winning connections are making their way to the winner's enclosure.",
        "That was a true test of stamina and speed.",
        "The post-race celebrations are in full swing.",
        "A fitting end to a day of top-class racing.",
        "We'll remember that finish for a long, long time.",
        "The horses are returning to the paddock to a hero's welcome.",
        "What a privilege to witness such a contest.",
        "The favorite justified the support, but every runner played their part.",
        "A dramatic finish and a worthy winner.",
        "The crowd is still buzzing after that breathtaking finale.",
        "That's why we love this sport—anything can happen right up to the line.",
        "Congratulations to all involved on a fantastic race."
    ]
    
    chat_entries = []
    time_ms = 39000
    time_end_ms = 69000  # You can change this value to set the end time in ms

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
    output_filename = "horse_racing_commentary_data_post_race.txt"
    
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(chat_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Generated {len(chat_data)} chat entries")
    print(f"📝 Data saved to: {output_filename}")
    print(f"⏱️  Time range: {chat_data[0]['timeSinceVideoStartedInMs']}ms to {chat_data[-1]['timeSinceVideoStartedInMs']}ms")

if __name__ == "__main__":
    main() 