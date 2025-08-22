#!/usr/bin/env python3
import json
import os
import shutil

# Configuration constants
NUM_LOOPS = 180  # Number of times to loop through the betting template
OFFSET_EACH_LOOP = 180000  # Time offset in ms to add for each loop iteration

def get_betting_event_template():
    """Define the betting event template based on the existing betting.js structure"""
    return [
        {
            "timeSinceVideoStartedInMs": 0,
            "persistInHistory": True,
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
                            "odds": 2.50
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
                            "odds": 5.00
                        },
                        {
                            "number": 4,
                            "name": "Midnight Charge",
                            "trainer": "Veronica DuBois",
                            "jockey": "Tyrell Banks",
                            "age": 1,
                            "weight": 131,
                            "odds": 7.50
                        },
                        {
                            "number": 5,
                            "name": "Blazing Comet",
                            "trainer": "Tomás Rivera",
                            "jockey": "Ricardo Del Mar",
                            "age": 2,
                            "weight": 130,
                            "odds": 11.00
                        },
                        {
                            "number": 6,
                            "name": "Silver Arrow",
                            "trainer": "Elena Petrova",
                            "jockey": "Sophie Dubois",
                            "age": 2,
                            "weight": 134,
                            "odds": 13.00
                        }
                    ]
                }
            }
        },
        {
            "timeSinceVideoStartedInMs": 25000,
            "persistInHistory": True,
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
            "persistInHistory": True,
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
            "persistInHistory": True,
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
            "persistInHistory": True,
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
            "persistInHistory": True,
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
            "persistInHistory": True,
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
            "persistInHistory": True,
            "action": {
                "channel": "race.betting",
                "data": {
                    "type": "betting_results",
                    "raceId": 1,
                    "raceResults": [2, 1, 3]
                }
            }
        }
    ]

def generate_consolidated_betting():
    """Generate consolidated betting data with multiple loops"""
    all_betting_data = []
    template = get_betting_event_template()
    
    for loop in range(NUM_LOOPS):
        time_offset = loop * OFFSET_EACH_LOOP
        race_id = loop + 1
        print(f"🔄 Loop {loop + 1}/{NUM_LOOPS} (offset: {time_offset}ms, raceId: {race_id})")
        
        # Create a deep copy of the template for this loop
        loop_data = json.loads(json.dumps(template))
        
        # Apply time offset and update race ID for all entries in this loop
        for entry in loop_data:
            entry['timeSinceVideoStartedInMs'] += time_offset
            # Update race ID in the data
            if 'raceId' in entry['action']['data']:
                entry['action']['data']['raceId'] = race_id
        
        # Add to all betting data
        all_betting_data.extend(loop_data)
        
        print(f"   Added {len(loop_data)} entries for loop {loop + 1}")
    
    # Sort by timestamp to ensure proper chronological order
    all_betting_data.sort(key=lambda x: x['timeSinceVideoStartedInMs'])
    
    print(f"✅ Combined {len(all_betting_data)} total betting entries from {NUM_LOOPS} loops")
    print(f"⏱️  Time range: {all_betting_data[0]['timeSinceVideoStartedInMs']}ms to {all_betting_data[-1]['timeSinceVideoStartedInMs']}ms")
    
    return all_betting_data

def write_betting_js(betting_data, output_file):
    """Write betting data in the betting.js format"""
    print(f"📝 Writing consolidated betting data to {output_file}...")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        # Write the header comments
        f.write("//  Start of betting: 0\n")
        f.write("//  Start of race: 30000\n")
        f.write("//  End of race: 136000\n")
        f.write("//  End of video loop: 180000\n")
        f.write("\n")
        
        # Write the module.exports header
        f.write("exports.betting = [\n")
        
        # Write each betting entry
        for i, entry in enumerate(betting_data):
            # Convert to pretty-printed JSON with 2-space indentation
            entry_json = json.dumps(entry, indent=2, ensure_ascii=False)
            
            # Indent each line by 2 spaces to match the existing format
            indented_lines = []
            for line in entry_json.split('\n'):
                indented_lines.append('  ' + line)
            
            f.write('\n'.join(indented_lines))
            
            # Add comma if not the last entry
            if i < len(betting_data) - 1:
                f.write(',')
            
            f.write('\n')
        
        # Close the array and export
        f.write("]\n")

def cleanup_python_cache():
    """Clean up Python cache files and directories"""
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Remove __pycache__ directories
    pycache_dirs = []
    for root, dirs, files in os.walk(current_dir):
        for dir_name in dirs:
            if dir_name == '__pycache__':
                pycache_dirs.append(os.path.join(root, dir_name))
    
    for pycache_dir in pycache_dirs:
        try:
            shutil.rmtree(pycache_dir)
            print(f"🧹 Cleaned up {pycache_dir}")
        except OSError:
            pass  # Ignore if already deleted
    
    # Remove .pyc files
    pyc_files = []
    for root, dirs, files in os.walk(current_dir):
        for file_name in files:
            if file_name.endswith('.pyc'):
                pyc_files.append(os.path.join(root, file_name))
    
    for pyc_file in pyc_files:
        try:
            os.remove(pyc_file)
            print(f"🧹 Cleaned up {pyc_file}")
        except OSError:
            pass  # Ignore if already deleted
    
    if pycache_dirs or pyc_files:
        print("✅ Python cache cleanup completed")

def main():
    """Main function to generate consolidated betting data"""
    print("🎬 Starting consolidated betting generation...")
    
    # Generate all betting data
    betting_data = generate_consolidated_betting()
    
    # Write to betting.js file
    output_file = "betting.js"
    write_betting_js(betting_data, output_file)
    
    print(f"🎉 Successfully generated {output_file} with {len(betting_data)} betting entries!")
    print("📊 Summary:")
    print(f"   - Betting events per race: 3 (betting_open, betting_closed, betting_results)")
    print(f"   - Number of races: {NUM_LOOPS}")
    print(f"   - Total entries: {len(betting_data)}")
    print(f"   - Time offset between races: {OFFSET_EACH_LOOP}ms")
    
    # Clean up Python cache files
    cleanup_python_cache()

if __name__ == "__main__":
    main()