#!/usr/bin/env python3
import json
import sys
import os
import shutil

# Configuration constants
NUM_LOOPS = 3  # Number of times to loop through each child script
OFFSET_EACH_LOOP = 180000  # Time offset in ms to add for each loop iteration

# Add the current directory to the Python path so we can import the other scripts
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Import the generation functions from each script
from generate_horse_racing_chat_pre_race import generate_horse_racing_chat as generate_pre_race_chat
from generate_horse_racing_chat_during_race import generate_horse_racing_chat as generate_during_race_chat
from generate_horse_racing_chat_post_race import generate_horse_racing_chat as generate_post_race_chat

def generate_consolidated_chat():
    """Generate consolidated chat data from all three phases with multiple loops"""
    all_chat_data = []
    
    for loop in range(NUM_LOOPS):
        time_offset = loop * OFFSET_EACH_LOOP
        print(f"🔄 Loop {loop + 1}/{NUM_LOOPS} (offset: {time_offset}ms)")
        
        print("   Generating pre-race chat data...")
        pre_race_data = generate_pre_race_chat()
        
        print("   Generating during-race chat data...")
        during_race_data = generate_during_race_chat()
        
        print("   Generating post-race chat data...")
        post_race_data = generate_post_race_chat()
        
        # Combine data for this loop
        loop_data = pre_race_data + during_race_data + post_race_data
        
        # Apply time offset to all entries in this loop
        for entry in loop_data:
            entry['timeSinceVideoStartedInMs'] += time_offset
        
        # Add to all chat data
        all_chat_data.extend(loop_data)
        
        print(f"   Added {len(loop_data)} entries for loop {loop + 1}")
    
    # Sort by timestamp to ensure proper chronological order
    all_chat_data.sort(key=lambda x: x['timeSinceVideoStartedInMs'])
    
    print(f"✅ Combined {len(all_chat_data)} total chat entries from {NUM_LOOPS} loops")
    print(f"⏱️  Time range: {all_chat_data[0]['timeSinceVideoStartedInMs']}ms to {all_chat_data[-1]['timeSinceVideoStartedInMs']}ms")
    
    return all_chat_data

def write_chat_js(chat_data, output_file):
    """Write chat data in the chat.js format"""
    print(f"📝 Writing consolidated chat data to {output_file}...")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        # Write the module.exports header
        f.write("\nexports.chat = [\n")
        
        # Write each chat entry
        for i, entry in enumerate(chat_data):
            # Convert to pretty-printed JSON with 2-space indentation
            entry_json = json.dumps(entry, indent=2, ensure_ascii=False)
            
            # Indent each line by 2 spaces to match the existing format
            indented_lines = []
            for line in entry_json.split('\n'):
                indented_lines.append('  ' + line)
            
            f.write('\n'.join(indented_lines))
            
            # Add comma if not the last entry
            if i < len(chat_data) - 1:
                f.write(',')
            
            f.write('\n')
        
        # Close the array and export
        f.write("];\n")

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
    """Main function to generate consolidated chat data"""
    print("🎬 Starting consolidated chat generation...")
    
    # Generate all chat data
    chat_data = generate_consolidated_chat()
    
    # Write to chat.js file
    output_file = "chat.js"
    write_chat_js(chat_data, output_file)
    
    print(f"🎉 Successfully generated {output_file} with {len(chat_data)} chat entries!")
    print("📊 Summary:")
    print(f"   - Pre-race entries: ~30 (1000ms - 30000ms)")
    print(f"   - During-race entries: ~106 (31000ms - 136000ms)")
    print(f"   - Post-race entries: ~43 (137000ms - 179000ms)")
    print(f"   - Total entries: {len(chat_data)}")
    
    # Clean up Python cache files
    cleanup_python_cache()

if __name__ == "__main__":
    main()