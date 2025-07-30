#!/usr/bin/env python3
import json
import random

def generate_horse_racing_chat():
    """Generate an array of JSON objects for horse racing chat simulation"""
    
    # Horse racing crowd commentary options (POST-RACE)
    horse_racing_comments = [
        {
            "en": "What an incredible finish!",
            "nl": "Wat een ongelooflijke finish!",
            "pt": "Que final incrível!"
        },
        {
            "en": "That was the most exciting race I've seen in years.",
            "nl": "Dat was de meest spannende race die ik in jaren heb gezien.",
            "pt": "Essa foi a corrida mais emocionante que vi em anos."
        },
        {
            "en": "Congratulations to the winner!",
            "nl": "Gefeliciteerd met de winnaar!",
            "pt": "Parabéns ao vencedor!"
        },
        {
            "en": "Thunder Strike really earned that victory.",
            "nl": "Thunder Strike heeft die overwinning echt verdiend.",
            "pt": "Thunder Strike realmente mereceu essa vitória."
        },
        {
            "en": "I can't believe how close that was at the end.",
            "nl": "Ik kan niet geloven hoe close dat was op het einde.",
            "pt": "Não posso acreditar como foi apertado no final."
        },
        {
            "en": "Photo finish! My heart is still racing.",
            "nl": "Foto finish! Mijn hart bonkt nog steeds.",
            "pt": "Chegada por foto! Meu coração ainda está acelerado."
        },
        {
            "en": "The jockey did an amazing job out there.",
            "nl": "De jockey deed fantastisch werk daar.",
            "pt": "O jóquei fez um trabalho incrível lá."
        },
        {
            "en": "What a comeback in the final stretch!",
            "nl": "Wat een comeback in de laatste rechte lijn!",
            "pt": "Que recuperação na reta final!"
        },
        {
            "en": "That was pure adrenaline from start to finish.",
            "nl": "Dat was pure adrenaline van start tot finish.",
            "pt": "Isso foi pura adrenalina do início ao fim."
        },
        {
            "en": "I lost my voice cheering!",
            "nl": "Ik ben mijn stem kwijt van het juichen!",
            "pt": "Perdi a voz de tanto torcer!"
        },
        {
            "en": "Well deserved win for number 7.",
            "nl": "Welverdiende overwinning voor nummer 7.",
            "pt": "Vitória bem merecida para o número 7."
        },
        {
            "en": "That was a masterclass in horsemanship.",
            "nl": "Dat was een masterclass in paardrijkunst.",
            "pt": "Isso foi uma aula magistral de equitação."
        },
        {
            "en": "The crowd is still buzzing after that result.",
            "nl": "Het publiek is nog steeds opgewonden na dat resultaat.",
            "pt": "A multidão ainda está agitada após esse resultado."
        },
        {
            "en": "I thought my horse had it, but what a surprise ending.",
            "nl": "Ik dacht dat mijn paard het had, maar wat een verrassend einde.",
            "pt": "Achei que meu cavalo tinha ganhado, mas que final surpreendente."
        },
        {
            "en": "That was a race for the history books.",
            "nl": "Dat was een race voor de geschiedenisboeken.",
            "pt": "Essa foi uma corrida para os livros de história."
        },
        {
            "en": "So proud of all the horses and riders today.",
            "nl": "Zo trots op alle paarden en ruiters vandaag.",
            "pt": "Muito orgulhoso de todos os cavalos e cavaleiros hoje."
        },
        {
            "en": "I can't wait to see the replay.",
            "nl": "Ik kan niet wachten om de herhaling te zien.",
            "pt": "Mal posso esperar para ver o replay."
        },
        {
            "en": "That finish line was intense!",
            "nl": "Die finishlijn was intens!",
            "pt": "Essa linha de chegada foi intensa!"
        },
        {
            "en": "What a way to end the day.",
            "nl": "Wat een manier om de dag af te sluiten.",
            "pt": "Que maneira de terminar o dia."
        },
        {
            "en": "My bet finally paid off!",
            "nl": "Mijn weddenschap heeft eindelijk uitbetaald!",
            "pt": "Minha aposta finalmente valeu a pena!"
        },
        {
            "en": "I didn't expect that underdog to place!",
            "nl": "Ik had niet verwacht dat die underdog zou eindigen!",
            "pt": "Não esperava que esse azarão se classificasse!"
        },
        {
            "en": "The atmosphere after the race is electric.",
            "nl": "De sfeer na de race is elektrisch.",
            "pt": "A atmosfera após a corrida está elétrica."
        },
        {
            "en": "Everyone's talking about that final sprint.",
            "nl": "Iedereen heeft het over die laatste sprint.",
            "pt": "Todo mundo está falando sobre essa reta final."
        },
        {
            "en": "That was a nail-biter right to the end.",
            "nl": "Dat was spannend tot het allerlaatste moment.",
            "pt": "Foi de tirar o fôlego até o final."
        },
        {
            "en": "The winner really pulled away in the last seconds.",
            "nl": "De winnaar trok echt weg in de laatste seconden.",
            "pt": "O vencedor realmente disparou nos últimos segundos."
        },
        {
            "en": "What a performance from the whole field.",
            "nl": "Wat een prestatie van het hele veld.",
            "pt": "Que performance de todo o pelotão."
        },
        {
            "en": "I hope all the horses and jockeys are okay after that.",
            "nl": "Ik hoop dat alle paarden en jockeys oké zijn na dat.",
            "pt": "Espero que todos os cavalos e jóqueis estejam bem depois disso."
        },
        {
            "en": "That was worth every penny.",
            "nl": "Dat was elke cent waard.",
            "pt": "Valeu cada centavo."
        },
        {
            "en": "Already looking forward to the next race!",
            "nl": "Kijk al uit naar de volgende race!",
            "pt": "Já estou ansioso pela próxima corrida!"
        },
        {
            "en": "That was a true display of heart and determination.",
            "nl": "Dat was een echte vertoning van hart en vastberadenheid.",
            "pt": "Isso foi uma verdadeira demonstração de coração e determinação."
        },
        {
            "en": "The celebrations are just getting started!",
            "nl": "De vieringen zijn net begonnen!",
            "pt": "As comemorações estão apenas começando!"
        },
        {
            "en": "What a day for racing fans.",
            "nl": "Wat een dag voor racefans.",
            "pt": "Que dia para os fãs de corrida."
        },
        {
            "en": "That finish will be talked about for years.",
            "nl": "Over die finish zal jarenlang gepraat worden.",
            "pt": "Esse final será assunto por anos."
        },
        {
            "en": "I wish I could relive that moment again.",
            "nl": "Ik wou dat ik dat moment opnieuw kon beleven.",
            "pt": "Queria poder reviver esse momento novamente."
        },
        {
            "en": "The energy in the stands is unbelievable.",
            "nl": "De energie op de tribunes is ongelooflijk.",
            "pt": "A energia nas arquibancadas é inacreditável."
        },
        {
            "en": "That was a perfect ending to a great race.",
            "nl": "Dat was een perfecte afsluiting van een geweldige race.",
            "pt": "Esse foi um final perfeito para uma grande corrida."
        },
        {
            "en": "Cheers to the new champion!",
            "nl": "Proost op de nieuwe kampioen!",
            "pt": "Um brinde ao novo campeão!"
        },
        {
            "en": "What a storybook ending.",
            "nl": "Wat een sprookjeseinde.",
            "pt": "Que final de conto de fadas."
        },
        {
            "en": "That was absolutely unforgettable.",
            "nl": "Dat was absoluut onvergetelijk.",
            "pt": "Isso foi absolutamente inesquecível."
        }
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
    output_filename = "horse_racing_chat_data_post_race.txt"
    
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(chat_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Generated {len(chat_data)} chat entries")
    print(f"📝 Data saved to: {output_filename}")
    print(f"⏱️  Time range: {chat_data[0]['timeSinceVideoStartedInMs']}ms to {chat_data[-1]['timeSinceVideoStartedInMs']}ms")

if __name__ == "__main__":
    main() 