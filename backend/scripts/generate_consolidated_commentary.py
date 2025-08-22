#!/usr/bin/env python3
import json
import sys
import os
import shutil

# Configuration constants
NUM_LOOPS = 180  # Number of times to loop through each child script
OFFSET_EACH_LOOP = 180000  # Time offset in ms to add for each loop iteration

# Add the current directory to the Python path so we can import the other scripts
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Import the generation functions from each commentary script
from generate_horse_racing_commentary_pre_race import generate_horse_racing_commentary as generate_pre_race_commentary
from generate_horse_racing_commentary_during_race import generate_horse_racing_commentary as generate_during_race_commentary
from generate_horse_racing_commentary_post_race import generate_horse_racing_commentary as generate_post_race_commentary

def generate_consolidated_commentary():
    """Generate consolidated commentary data from all three phases with multiple loops"""
    all_commentary_data = []
    
    for loop in range(NUM_LOOPS):
        time_offset = loop * OFFSET_EACH_LOOP
        print(f"🔄 Loop {loop + 1}/{NUM_LOOPS} (offset: {time_offset}ms)")
        
        print("   Generating pre-race commentary data...")
        pre_race_data = generate_pre_race_commentary()
        
        print("   Generating during-race commentary data...")
        during_race_data = generate_during_race_commentary()
        
        print("   Generating post-race commentary data...")
        post_race_data = generate_post_race_commentary()
        
        # Combine data for this loop
        loop_data = pre_race_data + during_race_data + post_race_data
        
        # Apply time offset to all entries in this loop
        for entry in loop_data:
            entry['timeSinceVideoStartedInMs'] += time_offset
        
        # Add to all commentary data
        all_commentary_data.extend(loop_data)
        
        print(f"   Added {len(loop_data)} entries for loop {loop + 1}")
    
    # Sort by timestamp to ensure proper chronological order
    all_commentary_data.sort(key=lambda x: x['timeSinceVideoStartedInMs'])
    
    print(f"✅ Combined {len(all_commentary_data)} total commentary entries from {NUM_LOOPS} loops")
    print(f"⏱️  Time range: {all_commentary_data[0]['timeSinceVideoStartedInMs']}ms to {all_commentary_data[-1]['timeSinceVideoStartedInMs']}ms")
    
    return all_commentary_data

def write_commentary_js(commentary_data, output_file):
    """Write commentary data in the commentary.js format"""
    print(f"📝 Writing consolidated commentary data to {output_file}...")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        # Write the module.exports header
        f.write("\nexports.commentary = [\n")
        
        # Write each commentary entry
        for i, entry in enumerate(commentary_data):
            # Convert to pretty-printed JSON with 2-space indentation
            entry_json = json.dumps(entry, indent=2, ensure_ascii=False)
            
            # Indent each line by 2 spaces to match the existing format
            indented_lines = []
            for line in entry_json.split('\n'):
                indented_lines.append('  ' + line)
            
            f.write('\n'.join(indented_lines))
            
            # Add comma if not the last entry
            if i < len(commentary_data) - 1:
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
    """Main function to generate consolidated commentary data"""
    print("🎬 Starting consolidated commentary generation...")
    
    # Generate all commentary data
    commentary_data = generate_consolidated_commentary()
    
    # Write to commentary.js file
    output_file = "commentary.js"
    write_commentary_js(commentary_data, output_file)
    
    print(f"🎉 Successfully generated {output_file} with {len(commentary_data)} commentary entries!")
    print("📊 Summary:")
    print(f"   - Pre-race entries: ~25 (1000ms - 29000ms)")
    print(f"   - During-race entries: ~53 (31000ms - 135000ms)")
    print(f"   - Post-race entries: ~21 (137000ms - 179000ms)")
    print(f"   - Total entries: {len(commentary_data)}")
    
    # Clean up Python cache files
    cleanup_python_cache()

if __name__ == "__main__":
    main()