#!/usr/bin/env python3
import json
import random

def generate_horse_racing_chat():
    """Generate an array of JSON objects for horse racing chat simulation"""
    
    # Horse racing crowd commentary DURING the race - multilingual
    horse_racing_comments = [
        {
            "en": "Go, go, go!",
            "nl": "Ga, ga, ga!",
            "pt": "Vai, vai, vai!"
        },
        {
            "en": "Thunder Strike is pulling ahead!",
            "nl": "Thunder Strike trekt vooruit!",
            "pt": "Thunder Strike está se distanciando!"
        },
        {
            "en": "Look at them sprint down the backstretch!",
            "nl": "Kijk hoe ze sprinten over de lange zijde!",
            "pt": "Olhem como eles correm na reta oposta!"
        },
        {
            "en": "They're neck and neck!",
            "nl": "Ze lopen gelijk op!",
            "pt": "Estão emparelhados!"
        },
        {
            "en": "What a move on the inside!",
            "nl": "Wat een beweging aan de binnenkant!",
            "pt": "Que movimento pela parte interna!"
        },
        {
            "en": "He's gaining ground—can he catch up?",
            "nl": "Hij wint terrein—kan hij inhalen?",
            "pt": "Ele está ganhando terreno—consegue alcançar?"
        },
        {
            "en": "Come on, number 7!",
            "nl": "Kom op, nummer 7!",
            "pt": "Vamos, número 7!"
        },
        {
            "en": "They're coming around the final turn!",
            "nl": "Ze komen de laatste bocht om!",
            "pt": "Estão chegando na curva final!"
        },
        {
            "en": "It's too close to call!",
            "nl": "Het is te krap om te bepalen!",
            "pt": "Está muito disputado para definir!"
        },
        {
            "en": "Push, push, push!",
            "nl": "Druk door, druk door!",
            "pt": "Força, força, força!"
        },
        {
            "en": "The crowd is on their feet!",
            "nl": "Het publiek staat op zijn voeten!",
            "pt": "A multidão está de pé!"
        },
        {
            "en": "What a burst of speed!",
            "nl": "Wat een uitbarsting van snelheid!",
            "pt": "Que explosão de velocidade!"
        },
        {
            "en": "Don't let up now!",
            "nl": "Laat nu niet verslappen!",
            "pt": "Não desista agora!"
        },
        {
            "en": "He's making a late charge!",
            "nl": "Hij maakt een late aanval!",
            "pt": "Ele está fazendo uma investida final!"
        },
        {
            "en": "They're all bunched up!",
            "nl": "Ze zitten allemaal op een kluitje!",
            "pt": "Estão todos agrupados!"
        },
        {
            "en": "Who's going to break away?",
            "nl": "Wie gaat er wegbreken?",
            "pt": "Quem vai se destacar?"
        },
        {
            "en": "Hold that lead!",
            "nl": "Houd die voorsprong vast!",
            "pt": "Mantenha a liderança!"
        },
        {
            "en": "Here comes the favorite on the outside!",
            "nl": "Daar komt de favoriet aan de buitenkant!",
            "pt": "Aí vem o favorito por fora!"
        },
        {
            "en": "It's a battle to the finish!",
            "nl": "Het is een strijd tot de finish!",
            "pt": "É uma batalha até a chegada!"
        },
        {
            "en": "Unbelievable acceleration!",
            "nl": "Ongelooflijke versnelling!",
            "pt": "Aceleração inacreditável!"
        },
        {
            "en": "They're thundering down the stretch!",
            "nl": "Ze donderen over de laatste rechte lijn!",
            "pt": "Estão disparando na reta final!"
        },
        {
            "en": "Can he hold on to first place?",
            "nl": "Kan hij de eerste plaats behouden?",
            "pt": "Consegue manter o primeiro lugar?"
        },
        {
            "en": "Look at that finish!",
            "nl": "Kijk naar die finish!",
            "pt": "Olhem essa chegada!"
        },
        {
            "en": "Photo finish coming up!",
            "nl": "Foto-finish in aantocht!",
            "pt": "Chegada no fotofinish!"
        },
        {
            "en": "What a thrilling race!",
            "nl": "Wat een spannende race!",
            "pt": "Que corrida emocionante!"
        },
        {
            "en": "He's closing the gap!",
            "nl": "Hij sluit de kloof!",
            "pt": "Ele está diminuindo a diferença!"
        },
        {
            "en": "Come on, bring it home!",
            "nl": "Kom op, breng het naar huis!",
            "pt": "Vamos, traga para casa!"
        },
        {
            "en": "They're giving it everything they've got!",
            "nl": "Ze geven alles wat ze hebben!",
            "pt": "Estão dando tudo que têm!"
        },
        {
            "en": "The tension is unreal!",
            "nl": "De spanning is onwerkelijk!",
            "pt": "A tensão é surreal!"
        },
        {
            "en": "What a race!",
            "nl": "Wat een race!",
            "pt": "Que corrida!"
        }
    ]
    
    chat_entries = []
    time_ms = 23000
    time_end_ms = 38000  # You can change this value to set the end time in ms

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
                    "text": comment["en"],
                    "text-nl": comment["nl"],
                    "text-pt": comment["pt"],
                    "type": "chat"
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