#!/usr/bin/env python3
import json
import random

def generate_horse_racing_commentary():
    """Generate an array of JSON objects for horse racing chat simulation"""
    
    # Horse racing crowd commentary DURING the race
    horse_racing_comments = [
        {
            "en": "And they're off! A clean break from the gates.",
            "nl": "En daar gaan ze! Een schone start uit de startboxen.",
            "pt": "E lá vão eles! Uma largada limpa dos portões."
        },
        {
            "en": "Thunder Strike takes an early lead as they charge down the straight.",
            "nl": "Thunder Strike neemt een vroege voorsprong terwijl ze de rechte lijn opstormen.",
            "pt": "Thunder Strike assume a liderança inicial enquanto disparam pela reta."
        },
        {
            "en": "They're tightly packed as they approach the first turn.",
            "nl": "Ze zitten dicht op elkaar terwijl ze de eerste bocht naderen.",
            "pt": "Estão muito próximos enquanto se aproximam da primeira curva."
        },
        {
            "en": "Look at that acceleration from the favorite on the outside!",
            "nl": "Kijk naar die versnelling van de favoriet aan de buitenkant!",
            "pt": "Olhem essa aceleração do favorito pelo lado externo!"
        },
        {
            "en": "Number 7 is making a bold move up the rail.",
            "nl": "Nummer 7 maakt een gewaagde zet langs de balustrade.",
            "pt": "O número 7 está fazendo uma jogada ousada pela parte interna."
        },
        {
            "en": "It's neck and neck between the front runners!",
            "nl": "Het is nek aan nek tussen de koplopers!",
            "pt": "É cabeça a cabeça entre os líderes!"
        },
        {
            "en": "The jockeys are urging their mounts for more speed.",
            "nl": "De jockeys sporen hun paarden aan voor meer snelheid.",
            "pt": "Os jóqueis estão incentivando seus cavalos por mais velocidade."
        },
        {
            "en": "They're thundering down the backstretch—what a sight!",
            "nl": "Ze denderen door de achterrechte—wat een spektakel!",
            "pt": "Estão correndo como um trovão pela reta de trás—que visão!"
        },
        {
            "en": "A strong challenge coming from the middle of the pack.",
            "nl": "Een sterke uitdaging komt uit het midden van het peloton.",
            "pt": "Um desafio forte vindo do meio do pelotão."
        },
        {
            "en": "The pace is relentless as they head into the far turn.",
            "nl": "Het tempo is meedogenloos terwijl ze de verre bocht ingaan.",
            "pt": "O ritmo é implacável enquanto entram na curva distante."
        },
        {
            "en": "You can feel the tension as they bunch up for the final stretch.",
            "nl": "Je kunt de spanning voelen terwijl ze zich groeperen voor de eindsprint.",
            "pt": "Você pode sentir a tensão enquanto se agrupam para a reta final."
        },
        {
            "en": "Thunder Strike is being pressed hard by the challengers.",
            "nl": "Thunder Strike wordt hard onder druk gezet door de uitdagers.",
            "pt": "Thunder Strike está sendo pressionado duramente pelos desafiantes."
        },
        {
            "en": "What a surge from the outsider—he's closing the gap!",
            "nl": "Wat een sprint van de outsider—hij dicht de kloof!",
            "pt": "Que arrancada do azarão—ele está fechando a diferença!"
        },
        {
            "en": "They're three wide as they swing into the home straight.",
            "nl": "Ze rijden drie breed terwijl ze de thuisrechte inslaan.",
            "pt": "Estão correndo em três fileiras enquanto entram na reta final."
        },
        {
            "en": "The crowd is roaring as the leaders battle it out.",
            "nl": "De menigte brult terwijl de leiders het uitvechten.",
            "pt": "A multidão está rugindo enquanto os líderes disputam."
        },
        {
            "en": "It's a duel to the finish—who will get there first?",
            "nl": "Het is een duel tot de finish—wie komt er als eerste aan?",
            "pt": "É um duelo até o final—quem chegará primeiro?"
        },
        {
            "en": "A late charge from number 12 on the outside!",
            "nl": "Een late aanval van nummer 12 aan de buitenkant!",
            "pt": "Uma arrancada tardia do número 12 pelo lado externo!"
        },
        {
            "en": "They're giving it everything in the final furlong.",
            "nl": "Ze geven alles in de laatste furlong.",
            "pt": "Estão dando tudo no último furlong."
        },
        {
            "en": "Photo finish looming as they hit the wire together!",
            "nl": "Fotofinish dreigt terwijl ze samen de eindstreep raken!",
            "pt": "Chegada por foto se aproxima enquanto cruzam a linha juntos!"
        },
        {
            "en": "What a thrilling race—absolutely breathtaking action!",
            "nl": "Wat een spannende race—absoluut adembenemende actie!",
            "pt": "Que corrida emocionante—ação absolutamente de tirar o fôlego!"
        },
        {
            "en": "The favorite is digging deep, but the challengers won't quit.",
            "nl": "De favoriet graaft diep, maar de uitdagers geven niet op.",
            "pt": "O favorito está se esforçando ao máximo, mas os desafiantes não desistem."
        },
        {
            "en": "Every stride counts now as they approach the finish line.",
            "nl": "Elke pas telt nu terwijl ze de finish naderen.",
            "pt": "Cada passada conta agora enquanto se aproximam da linha de chegada."
        },
        {
            "en": "Unbelievable determination from these horses and riders.",
            "nl": "Ongelofelijke vastberadenheid van deze paarden en ruiters.",
            "pt": "Determinação inacreditável desses cavalos e cavaleiros."
        },
        {
            "en": "The lead keeps changing—this is horse racing at its best!",
            "nl": "De leiding blijft wisselen—dit is paardenrennen op zijn best!",
            "pt": "A liderança continua mudando—isso é corrida de cavalos no seu melhor!"
        },
        {
            "en": "A burst of speed from the back—can he catch them in time?",
            "nl": "Een snelheidsvlaag van achteren—kan hij ze op tijd inhalen?",
            "pt": "Uma rajada de velocidade de trás—conseguirá alcançá-los a tempo?"
        },
        {
            "en": "They're all out—no one is holding back now!",
            "nl": "Ze gaan voluit—niemand houdt zich nu in!",
            "pt": "Estão dando tudo—ninguém está se segurando agora!"
        },
        {
            "en": "It's too close to call as they flash past the post!",
            "nl": "Het is te nipt om te zeggen terwijl ze voorbij de paal flitsen!",
            "pt": "Está muito disputado para decidir enquanto passam pelo poste!"
        },
        {
            "en": "What a performance—this race will be talked about for years!",
            "nl": "Wat een prestatie—over deze race wordt nog jaren gesproken!",
            "pt": "Que performance—esta corrida será comentada por anos!"
        }
    ]
    
    chat_entries = []
    time_ms = 23000
    time_end_ms = 38000  # You can change this value to set the end time in ms

    # Generate chat entries from time_ms up to and including time_end_ms, incrementing by 1000ms
    while time_ms <= time_end_ms:
        if (time_ms / 1000) % 2 == 0:
            time_ms += 1000
            continue
        # Select a random comment
        comment = random.choice(horse_racing_comments)
        
        entry = {
            "timeSinceVideoStartedInMs": time_ms,
            "persistInHistory": False,
            "action": {
                "channel": "race.commentary",
                "data": {
                    "text": comment["en"],
                    "text-nl": comment["nl"],
                    "text-pt": comment["pt"],
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
    output_filename = "horse_racing_commentary_data_during_race.txt"
    
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(chat_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Generated {len(chat_data)} chat entries")
    print(f"📝 Data saved to: {output_filename}")
    print(f"⏱️  Time range: {chat_data[0]['timeSinceVideoStartedInMs']}ms to {chat_data[-1]['timeSinceVideoStartedInMs']}ms")

if __name__ == "__main__":
    main() 