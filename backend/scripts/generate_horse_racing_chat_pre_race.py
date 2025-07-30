#!/usr/bin/env python3
import json
import random

def generate_horse_racing_chat():
    """Generate an array of JSON objects for horse racing chat simulation"""
    
    # Horse racing fan commentary options with multilingual support
    horse_racing_comments = [
        {
            "en": "I can't wait for the race to start!",
            "nl": "Ik kan niet wachten tot de race begint!",
            "pt": "Mal posso esperar que a corrida comece!"
        },
        {
            "en": "Who do you think will win today?",
            "nl": "Wie denk je dat er vandaag gaat winnen?",
            "pt": "Quem você acha que vai ganhar hoje?"
        },
        {
            "en": "The tension is building at the starting gate.",
            "nl": "De spanning stijgt bij de startpoorten.",
            "pt": "A tensão está crescendo no portão de largada."
        },
        {
            "en": "All eyes on Thunder Strike—can he pull it off?",
            "nl": "Alle ogen op Thunder Strike—kan hij het voor elkaar krijgen?",
            "pt": "Todos os olhos em Thunder Strike—será que ele consegue?"
        },
        {
            "en": "The horses look so calm before the storm.",
            "nl": "De paarden zien er zo rustig uit voor de storm.",
            "pt": "Os cavalos parecem tão calmos antes da tempestade."
        },
        {
            "en": "I hope my bet pays off this time!",
            "nl": "Ik hoop dat mijn inzet deze keer uitbetaalt!",
            "pt": "Espero que minha aposta valha a pena desta vez!"
        },
        {
            "en": "Look at those beautiful horses warming up.",
            "nl": "Kijk naar die prachtige paarden die opwarmen.",
            "pt": "Olhem esses cavalos lindos se aquecendo."
        },
        {
            "en": "The jockeys look focused and ready.",
            "nl": "De jockeys zien er gefocust en klaar uit.",
            "pt": "Os jóqueis parecem concentrados e prontos."
        },
        {
            "en": "This is going to be an exciting race!",
            "nl": "Dit wordt een spannende race!",
            "pt": "Esta vai ser uma corrida emocionante!"
        },
        {
            "en": "The crowd is buzzing with anticipation.",
            "nl": "Het publiek gonst van verwachting.",
            "pt": "A multidão está vibrando de expectativa."
        },
        {
            "en": "I love the energy before the race begins.",
            "nl": "Ik hou van de energie voordat de race begint.",
            "pt": "Adoro a energia antes da corrida começar."
        },
        {
            "en": "Which horse are you cheering for?",
            "nl": "Voor welk paard juich je?",
            "pt": "Por qual cavalo você está torcendo?"
        },
        {
            "en": "The track looks perfect for racing today.",
            "nl": "De baan ziet er perfect uit om vandaag te racen.",
            "pt": "A pista está perfeita para correr hoje."
        },
        {
            "en": "I've got a good feeling about number 7.",
            "nl": "Ik heb een goed gevoel over nummer 7.",
            "pt": "Tenho um bom pressentimento sobre o número 7."
        },
        {
            "en": "The parade to the post is always my favorite part.",
            "nl": "De parade naar de post is altijd mijn favoriete deel.",
            "pt": "O desfile até o poste é sempre minha parte favorita."
        },
        {
            "en": "Let's see if there's an upset today!",
            "nl": "Laten we kijken of er vandaag een verrassing is!",
            "pt": "Vamos ver se há uma surpresa hoje!"
        },
        {
            "en": "The starting bell is about to ring.",
            "nl": "De startbel gaat zo rinkelen.",
            "pt": "O sino de largada está prestes a tocar."
        },
        {
            "en": "Everyone's placing their last-minute bets.",
            "nl": "Iedereen plaatst hun last-minute inzetten.",
            "pt": "Todo mundo está fazendo suas apostas de última hora."
        },
        {
            "en": "The horses are lining up at the gate.",
            "nl": "De paarden stellen zich op bij de poort.",
            "pt": "Os cavalos estão se alinhando no portão."
        },
        {
            "en": "It's almost time—good luck to all the riders!",
            "nl": "Het is bijna tijd—veel succes aan alle ruiters!",
            "pt": "Está quase na hora—boa sorte a todos os cavaleiros!"
        },
        {
            "en": "Who's ready for some action?",
            "nl": "Wie is er klaar voor wat actie?",
            "pt": "Quem está pronto para um pouco de ação?"
        },
        {
            "en": "May the best horse win!",
            "nl": "Moge het beste paard winnen!",
            "pt": "Que o melhor cavalo vença!"
        },
        {
            "en": "I hope for a clean and safe race.",
            "nl": "Ik hoop op een schone en veilige race.",
            "pt": "Espero por uma corrida limpa e segura."
        },
        {
            "en": "The excitement is unreal right now!",
            "nl": "De opwinding is onwerkelijk op dit moment!",
            "pt": "A emoção está irreal agora!"
        },
        {
            "en": "This is what we've all been waiting for!",
            "nl": "Dit is waar we allemaal op hebben gewacht!",
            "pt": "Isso é o que todos estávamos esperando!"
        },
        {
            "en": "Let's go, Thunder Strike!",
            "nl": "Kom op, Thunder Strike!",
            "pt": "Vamos lá, Thunder Strike!"
        },
        {
            "en": "I wonder if we'll see a new record today.",
            "nl": "Ik vraag me af of we vandaag een nieuw record zullen zien.",
            "pt": "Me pergunto se veremos um novo recorde hoje."
        },
        {
            "en": "The atmosphere is electric before the start.",
            "nl": "De sfeer is elektrisch voor de start.",
            "pt": "A atmosfera está elétrica antes da largada."
        },
        {
            "en": "I can feel the adrenaline in the air.",
            "nl": "Ik kan de adrenaline in de lucht voelen.",
            "pt": "Posso sentir a adrenalina no ar."
        },
        {
            "en": "Here we go—any second now!",
            "nl": "Daar gaan we—elk moment nu!",
            "pt": "Lá vamos nós—a qualquer segundo agora!"
        }
    ]   
    
    chat_entries = []
    time_ms = 1000
    time_end_ms = 22000  # You can change this value to set the end time in ms

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
    output_filename = "horse_racing_chat_data_pre_race.txt"
    
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(chat_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Generated {len(chat_data)} chat entries")
    print(f"📝 Data saved to: {output_filename}")
    print(f"⏱️  Time range: {chat_data[0]['timeSinceVideoStartedInMs']}ms to {chat_data[-1]['timeSinceVideoStartedInMs']}ms")

if __name__ == "__main__":
    main() 