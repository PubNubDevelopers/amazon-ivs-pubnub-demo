#!/usr/bin/env python3
import json
import random

def generate_horse_racing_commentary():
    """Generate an array of JSON objects for horse racing chat simulation"""
    
    # Horse racing crowd commentary options (POST-RACE)
    horse_racing_comments = [
        {
            "en": "What a sensational finish to the race!",
            "nl": "Wat een sensationele finish van de race!",
            "pt": "Que final sensacional da corrida!"
        },
        {
            "en": "The crowd is still on their feet after that dramatic conclusion.",
            "nl": "Het publiek staat nog steeds na die dramatische ontknoping.",
            "pt": "A multidão ainda está de pé após essa conclusão dramática."
        },
        {
            "en": "A truly memorable performance from the winner today.",
            "nl": "Een werkelijk onvergetelijke prestatie van de winnaar vandaag.",
            "pt": "Uma performance verdadeiramente memorável do vencedor hoje."
        },
        {
            "en": "That's what horse racing is all about - unpredictable and thrilling to the very end.",
            "nl": "Dat is waar paardenrennen om draait - onvoorspelbaar en spannend tot het einde.",
            "pt": "É disso que a corrida de cavalos se trata - imprevisível e emocionante até o fim."
        },
        {
            "en": "The jockey timed that run to perfection.",
            "nl": "De jockey timede die run tot perfectie.",
            "pt": "O jóquei cronometrou essa corrida à perfeição."
        },
        {
            "en": "Let's take another look at that photo finish - absolutely remarkable.",
            "nl": "Laten we nog eens kijken naar die fotofinish - absoluut opmerkelijk.",
            "pt": "Vamos dar outra olhada nessa chegada por foto - absolutamente notável."
        },
        {
            "en": "The favorite lived up to the billing, but what a challenge from the runner-up.",
            "nl": "De favoriet deed waar hij voor stond, maar wat een uitdaging van de tweede.",
            "pt": "O favorito correspondeu às expectativas, mas que desafio do segundo colocado."
        },
        {
            "en": "You could feel the tension right up to the final stride.",
            "nl": "Je kon de spanning voelen tot de laatste pas.",
            "pt": "Você podia sentir a tensão até a última passada."
        },
        {
            "en": "The atmosphere here is electric as the celebrations begin.",
            "nl": "De sfeer hier is elektrisch terwijl de feesten beginnen.",
            "pt": "A atmosfera aqui está elétrica enquanto as celebrações começam."
        },
        {
            "en": "A well-deserved victory and a race that will be talked about for years.",
            "nl": "Een welverdiende overwinning en een race waar nog jaren over gesproken wordt.",
            "pt": "Uma vitória bem merecida e uma corrida que será comentada por anos."
        },
        {
            "en": "Congratulations to the connections of our new champion.",
            "nl": "Gefeliciteerd aan de connecties van onze nieuwe kampioen.",
            "pt": "Parabéns às conexões do nosso novo campeão."
        },
        {
            "en": "That was a masterclass in riding under pressure.",
            "nl": "Dat was een meesterklasse in rijden onder druk.",
            "pt": "Essa foi uma aula magistral de montar sob pressão."
        },
        {
            "en": "The underdog gave it everything - what a run for second place.",
            "nl": "De underdog gaf alles - wat een run voor de tweede plaats.",
            "pt": "O azarão deu tudo de si - que corrida pelo segundo lugar."
        },
        {
            "en": "The winning margin was just a nose - extraordinary scenes at the finish line.",
            "nl": "De winnende marge was slechts een neus - buitengewone taferelen bij de finish.",
            "pt": "A margem de vitória foi apenas um focinho - cenas extraordinárias na linha de chegada."
        },
        {
            "en": "The horses gave their all, and the crowd is showing their appreciation.",
            "nl": "De paarden gaven alles, en het publiek toont hun waardering.",
            "pt": "Os cavalos deram tudo de si, e a multidão está mostrando sua apreciação."
        },
        {
            "en": "What a way to close out today's racing action.",
            "nl": "Wat een manier om de race-actie van vandaag af te sluiten.",
            "pt": "Que maneira de encerrar a ação de corrida de hoje."
        },
        {
            "en": "The trainer will be absolutely delighted with that result.",
            "nl": "De trainer zal absoluut verheugd zijn met dat resultaat.",
            "pt": "O treinador ficará absolutamente encantado com esse resultado."
        },
        {
            "en": "A thrilling end to a fantastic day at the races.",
            "nl": "Een spannend einde van een fantastische dag op de races.",
            "pt": "Um final emocionante para um dia fantástico nas corridas."
        },
        {
            "en": "The winner showed real heart and determination in the final furlong.",
            "nl": "De winnaar toonde echt hart en vastberadenheid in de laatste furlong.",
            "pt": "O vencedor mostrou coração e determinação reais no último furlong."
        },
        {
            "en": "We'll be replaying that finish for a long time to come.",
            "nl": "We zullen die finish nog lang herhalen.",
            "pt": "Estaremos reprisando esse final por muito tempo."
        },
        {
            "en": "The trophy presentation is about to get underway.",
            "nl": "De trofee-uitreiking staat op het punt te beginnen.",
            "pt": "A apresentação do troféu está prestes a começar."
        },
        {
            "en": "A standing ovation for all the participants after a spectacular contest.",
            "nl": "Een staande ovatie voor alle deelnemers na een spectaculaire wedstrijd.",
            "pt": "Uma ovação de pé para todos os participantes após uma disputa espetacular."
        },
        {
            "en": "That was a race worthy of the grandest stage.",
            "nl": "Dat was een race waardig van het grootste podium.",
            "pt": "Essa foi uma corrida digna do maior palco."
        },
        {
            "en": "The excitement here is palpable as fans discuss that incredible finish.",
            "nl": "De opwinding hier is voelbaar terwijl fans die ongelooflijke finish bespreken.",
            "pt": "A emoção aqui é palpável enquanto os fãs discutem esse final incrível."
        },
        {
            "en": "A new chapter written in the history books today.",
            "nl": "Een nieuw hoofdstuk geschreven in de geschiedenisboeken vandaag.",
            "pt": "Um novo capítulo escrito nos livros de história hoje."
        },
        {
            "en": "The winning connections are making their way to the winner's enclosure.",
            "nl": "De winnende connecties maken hun weg naar de winnaarscirkel.",
            "pt": "As conexões vencedoras estão se dirigindo ao cercado do vencedor."
        },
        {
            "en": "That was a true test of stamina and speed.",
            "nl": "Dat was een echte test van uithoudingsvermogen en snelheid.",
            "pt": "Esse foi um verdadeiro teste de resistência e velocidade."
        },
        {
            "en": "The post-race celebrations are in full swing.",
            "nl": "De na-race celebraties zijn in volle gang.",
            "pt": "As celebrações pós-corrida estão a todo vapor."
        },
        {
            "en": "A fitting end to a day of top-class racing.",
            "nl": "Een passend einde van een dag met eersteklas races.",
            "pt": "Um final adequado para um dia de corridas de primeira classe."
        },
        {
            "en": "We'll remember that finish for a long, long time.",
            "nl": "We zullen die finish nog heel lang onthouden.",
            "pt": "Vamos lembrar desse final por muito, muito tempo."
        },
        {
            "en": "The horses are returning to the paddock to a hero's welcome.",
            "nl": "De paarden keren terug naar de paddock voor een heldenontval.",
            "pt": "Os cavalos estão retornando ao paddock para uma recepção de herói."
        },
        {
            "en": "What a privilege to witness such a contest.",
            "nl": "Wat een voorrecht om zo'n wedstrijd bij te wonen.",
            "pt": "Que privilégio testemunhar tal disputa."
        },
        {
            "en": "The favorite justified the support, but every runner played their part.",
            "nl": "De favoriet rechtvaardigde de steun, maar elke loper speelde zijn rol.",
            "pt": "O favorito justificou o apoio, mas cada corredor fez sua parte."
        },
        {
            "en": "A dramatic finish and a worthy winner.",
            "nl": "Een dramatische finish en een waardige winnaar.",
            "pt": "Um final dramático e um vencedor digno."
        },
        {
            "en": "The crowd is still buzzing after that breathtaking finale.",
            "nl": "Het publiek gonst nog na die adembenemende finale.",
            "pt": "A multidão ainda está vibrando após esse final de tirar o fôlego."
        },
        {
            "en": "That's why we love this sport - anything can happen right up to the line.",
            "nl": "Daarom houden we van deze sport - alles kan gebeuren tot de lijn.",
            "pt": "É por isso que amamos este esporte - qualquer coisa pode acontecer até a linha."
        },
        {
            "en": "Congratulations to all involved on a fantastic race.",
            "nl": "Gefeliciteerd aan alle betrokkenen met een fantastische race.",
            "pt": "Parabéns a todos os envolvidos por uma corrida fantástica."
        },
        {
            "en": "The official times confirm what we witnessed - a truly exceptional performance.",
            "nl": "De officiële tijden bevestigen wat we meemaakten - een werkelijk uitzonderlijke prestatie.",
            "pt": "Os tempos oficiais confirmam o que presenciamos - uma performance verdadeiramente excepcional."
        },
        {
            "en": "Racing like this reminds us why it's called the most exciting two minutes in sports.",
            "nl": "Racen zoals dit herinnert ons waarom het de meest spannende twee minuten in de sport wordt genoemd.",
            "pt": "Corridas assim nos lembram por que são chamadas de os dois minutos mais emocionantes do esporte."
        },
        {
            "en": "The winning owner's box is erupting in celebration - what a moment for them.",
            "nl": "De winnaars loge barst uit in viering - wat een moment voor hen.",
            "pt": "O camarote do proprietário vencedor está explodindo em celebração - que momento para eles."
        },
        {
            "en": "This victory will echo through racing history for generations to come.",
            "nl": "Deze overwinning zal door de racegeschiedenis echo'en voor generaties.",
            "pt": "Esta vitória ecoará pela história das corridas por gerações vindouras."
        },
        {
            "en": "What we've witnessed today transcends mere competition - it's pure artistry.",
            "nl": "Wat we vandaag meemaakten overstijgt louter competitie - het is pure kunst.",
            "pt": "O que presenciamos hoje transcende mera competição - é pura arte."
        },
        {
            "en": "The bond between horse and rider has never been more beautifully displayed.",
            "nl": "De band tussen paard en ruiter is nog nooit zo mooi getoond.",
            "pt": "A ligação entre cavalo e cavaleiro nunca foi tão lindamente demonstrada."
        },
        {
            "en": "Racing fans worldwide will be talking about this performance for decades.",
            "nl": "Racefans wereldwijd zullen decennia lang over deze prestatie praten.",
            "pt": "Fãs de corridas mundialmente estarão falando sobre esta performance por décadas."
        },
        {
            "en": "The stewards have confirmed the result - a clean and decisive victory.",
            "nl": "De officials hebben het resultaat bevestigd - een schone en beslissende overwinning.",
            "pt": "Os comissários confirmaram o resultado - uma vitória limpa e decisiva."
        },
        {
            "en": "Every element came together perfectly - the stars aligned for this magical moment.",
            "nl": "Elk element kwam perfect samen - de sterren stonden goed voor dit magische moment.",
            "pt": "Cada elemento se juntou perfeitamente - as estrelas se alinharam para este momento mágico."
        },
        {
            "en": "This is why we dedicate our lives to covering the sport of kings.",
            "nl": "Daarom wijden we ons leven aan het verslaan van de sport der koningen.",
            "pt": "É por isso que dedicamos nossas vidas a cobrir o esporte dos reis."
        }
    ]
    
    chat_entries = []
    time_ms = 137000
    time_end_ms = 179000  # You can change this value to set the end time in ms

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
    output_filename = "horse_racing_commentary_data_post_race.txt"
    
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(chat_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Generated {len(chat_data)} chat entries")
    print(f"📝 Data saved to: {output_filename}")
    print(f"⏱️  Time range: {chat_data[0]['timeSinceVideoStartedInMs']}ms to {chat_data[-1]['timeSinceVideoStartedInMs']}ms")

if __name__ == "__main__":
    main() 