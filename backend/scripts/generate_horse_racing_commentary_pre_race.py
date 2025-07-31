#!/usr/bin/env python3
import json
import random

def generate_horse_racing_commentary():
    """Generate an array of JSON objects for horse racing chat simulation"""
    
    # Horse racing commentator pre-race sayings
    horse_racing_comments = [
        {
            "en": "Welcome, ladies and gentlemen, to a thrilling day of horse racing.",
            "nl": "Welkom, dames en heren, bij een spannende dag paardenrennen.",
            "pt": "Bem-vindos, senhoras e senhores, a um dia emocionante de corrida de cavalos."
        },
        {
            "en": "The tension is palpable as the horses make their way to the starting gate.",
            "nl": "De spanning is voelbaar terwijl de paarden zich naar de startpoort begeven.",
            "pt": "A tensão é palpável enquanto os cavalos se dirigem ao portão de largada."
        },
        {
            "en": "All eyes are on Thunder Strike—can the favorite deliver under pressure?",
            "nl": "Alle ogen zijn gericht op Thunder Strike—kan de favoriet presteren onder druk?",
            "pt": "Todos os olhos estão em Thunder Strike—conseguirá o favorito entregar sob pressão?"
        },
        {
            "en": "The horses look in magnificent condition as they parade before the crowd.",
            "nl": "De paarden zien er magnifiek uit terwijl ze voor de menigte paraderen.",
            "pt": "Os cavalos parecem em condição magnífica enquanto desfilam diante da multidão."
        },
        {
            "en": "The jockeys are focused, each one hoping for the perfect start.",
            "nl": "De jockeys zijn gefocust, elk hopend op de perfecte start.",
            "pt": "Os jóqueis estão concentrados, cada um esperando pela largada perfeita."
        },
        {
            "en": "The atmosphere here is absolutely electric as we count down to the off.",
            "nl": "De sfeer hier is absoluut elektrisch terwijl we aftellen naar de start.",
            "pt": "A atmosfera aqui está absolutamente elétrica enquanto contamos para a largada."
        },
        {
            "en": "The track is in pristine condition, ideal for fast times today.",
            "nl": "De baan is in perfecte staat, ideaal voor snelle tijden vandaag.",
            "pt": "A pista está em condições perfeitas, ideal para tempos rápidos hoje."
        },
        {
            "en": "There's a real buzz in the air as the runners approach the gate.",
            "nl": "Er hangt een echte opwinding in de lucht terwijl de deelnemers de poort naderen.",
            "pt": "Há uma verdadeira agitação no ar enquanto os competidores se aproximam do portão."
        },
        {
            "en": "This is the moment we've all been waiting for—the start is just moments away.",
            "nl": "Dit is het moment waar we allemaal op hebben gewacht—de start is slechts momenten weg.",
            "pt": "Este é o momento que todos esperávamos—a largada está a poucos momentos."
        },
        {
            "en": "The field is strong today, and we could be in for a real spectacle.",
            "nl": "Het veld is sterk vandaag, en we zouden wel eens een echt spektakel kunnen krijgen.",
            "pt": "O campo está forte hoje, e podemos ter um verdadeiro espetáculo."
        },
        {
            "en": "The parade to post is complete, and the horses are lining up.",
            "nl": "De parade naar de post is compleet, en de paarden stellen zich op.",
            "pt": "O desfile até o posto está completo, e os cavalos estão se alinhando."
        },
        {
            "en": "A hush falls over the crowd as the starter raises the flag.",
            "nl": "Een stilte valt over de menigte terwijl de starter de vlag opheft.",
            "pt": "Um silêncio toma conta da multidão enquanto o juiz de largada levanta a bandeira."
        },
        {
            "en": "It's a wide-open contest—any one of these could take the honors.",
            "nl": "Het is een open wedstrijd—elk van deze zou de eer kunnen behalen.",
            "pt": "É uma disputa completamente aberta—qualquer um destes pode levar as honras."
        },
        {
            "en": "The favorite looks calm and collected, but anything can happen in racing.",
            "nl": "De favoriet ziet er kalm en beheerst uit, maar alles kan gebeuren in de paardensport.",
            "pt": "O favorito parece calmo e controlado, mas tudo pode acontecer nas corridas."
        },
        {
            "en": "The last checks are being made—blinkers adjusted, girths tightened.",
            "nl": "De laatste controles worden uitgevoerd—oogkleppen aangepast, buikbanden aangetrokken.",
            "pt": "As últimas verificações estão sendo feitas—antolhos ajustados, cilhas apertadas."
        },
        {
            "en": "The tension is mounting as the horses edge into the stalls.",
            "nl": "De spanning stijgt terwijl de paarden de startboxen ingaan.",
            "pt": "A tensão está aumentando enquanto os cavalos entram nas baias."
        },
        {
            "en": "We're just seconds away from the off here at the track.",
            "nl": "We zijn slechts seconden verwijderd van de start hier op de baan.",
            "pt": "Estamos a apenas segundos da largada aqui na pista."
        },
        {
            "en": "The anticipation is building—who will get the best break from the gate?",
            "nl": "De verwachting groeit—wie krijgt de beste start uit de poort?",
            "pt": "A expectativa está crescendo—quem terá a melhor saída do portão?"
        },
        {
            "en": "The starter is ready, and so are we. Stand by for action.",
            "nl": "De starter is klaar, en wij ook. Maak je klaar voor actie.",
            "pt": "O juiz de largada está pronto, e nós também. Preparem-se para a ação."
        },
        {
            "en": "And they're almost set—just waiting for the signal.",
            "nl": "En ze zijn bijna klaar—wachten alleen nog op het signaal.",
            "pt": "E eles estão quase prontos—apenas esperando pelo sinal."
        },
        {
            "en": "The crowd is on their feet, eager for the race to begin.",
            "nl": "De menigte staat op hun voeten, verlangend naar het begin van de race.",
            "pt": "A multidão está de pé, ansiosa para que a corrida comece."
        },
        {
            "en": "It's a perfect day for racing, and the excitement is tangible.",
            "nl": "Het is een perfecte dag voor racen, en de opwinding is voelbaar.",
            "pt": "É um dia perfeito para corridas, e a emoção é tangível."
        },
        {
            "en": "The horses are loaded, the gates are set—let's get ready for a great race.",
            "nl": "De paarden zijn geladen, de poorten zijn klaar—laten we ons voorbereiden op een geweldige race.",
            "pt": "Os cavalos estão carregados, os portões estão prontos—vamos nos preparar para uma grande corrida."
        },
        {
            "en": "There's a lot of confidence in the paddock, but only one can win.",
            "nl": "Er is veel vertrouwen in de paddock, maar slechts één kan winnen.",
            "pt": "Há muita confiança no paddock, mas apenas um pode vencer."
        },
        {
            "en": "The bell is about to ring—hold your breath, folks.",
            "nl": "De bel gaat zo rinkelen—houd je adem in, mensen.",
            "pt": "O sino está prestes a tocar—prendam a respiração, pessoal."
        },
        {
            "en": "The underdog has caught the eye in the preliminaries—could we see an upset?",
            "nl": "De underdog heeft de aandacht getrokken in de voorbereiding—zouden we een verrassing kunnen zien?",
            "pt": "O azarão chamou atenção nos preliminares—poderíamos ver uma surpresa?"
        },
        {
            "en": "The starter is giving final instructions—any moment now.",
            "nl": "De starter geeft laatste instructies—elk moment nu.",
            "pt": "O juiz de largada está dando instruções finais—a qualquer momento agora."
        },
        {
            "en": "The horses are restless in the stalls, sensing the race is near.",
            "nl": "De paarden zijn onrustig in de boxen, voelend dat de race nabij is.",
            "pt": "Os cavalos estão inquietos nas baias, sentindo que a corrida está próxima."
        },
        {
            "en": "The big question: who will seize the initiative when the gates fly open?",
            "nl": "De grote vraag: wie grijpt het initiatief wanneer de poorten openvliegen?",
            "pt": "A grande pergunta: quem tomará a iniciativa quando os portões se abrirem?"
        },
        {
            "en": "Here we go—stand by for the start of this much-anticipated contest!",
            "nl": "Daar gaan we—maak je klaar voor de start van deze langverwachte wedstrijd!",
            "pt": "Aqui vamos nós—preparem-se para o início desta disputa muito aguardada!"
        },
        {
            "en": "The connections are watching anxiously from the grandstand.",
            "nl": "De connecties kijken angstig toe vanaf de hoofdtribune.",
            "pt": "As conexões estão observando ansiosamente da arquibancada principal."
        },
        {
            "en": "This field represents some of the finest bloodlines in racing.",
            "nl": "Dit veld vertegenwoordigt enkele van de beste bloedlijnen in de paardensport.",
            "pt": "Este campo representa algumas das melhores linhagens nas corridas."
        },
        {
            "en": "The stewards have given the all-clear—we're ready to proceed.",
            "nl": "De officials hebben het sein op groen gegeven—we zijn klaar om te beginnen.",
            "pt": "Os comissários deram sinal verde—estamos prontos para prosseguir."
        },
        {
            "en": "Each horse and rider partnership tells a unique story today.",
            "nl": "Elk paard-ruiter duo vertelt vandaag een uniek verhaal.",
            "pt": "Cada parceria cavalo-cavaleiro conta uma história única hoje."
        },
        {
            "en": "The bookmakers' boards show a fascinating picture of public opinion.",
            "nl": "De borden van de bookmakers tonen een fascinerend beeld van de publieke opinie.",
            "pt": "Os quadros das casas de apostas mostram um panorama fascinante da opinião pública."
        },
        {
            "en": "Years of preparation have led to this single moment.",
            "nl": "Jaren van voorbereiding hebben geleid tot dit ene moment.",
            "pt": "Anos de preparação levaram a este único momento."
        },
        {
            "en": "The veteran commentator in me has rarely seen such quality assembled.",
            "nl": "De ervaren commentator in mij heeft zelden zoveel kwaliteit bij elkaar gezien.",
            "pt": "O comentarista veterano em mim raramente viu tanta qualidade reunida."
        },
        {
            "en": "Behind the scenes, trainers are offering final words of encouragement.",
            "nl": "Achter de schermen geven trainers laatste woorden van aanmoediging.",
            "pt": "Nos bastidores, treinadores estão oferecendo palavras finais de encorajamento."
        },
        {
            "en": "The ground conditions could not be more perfect for fast times.",
            "nl": "De bodemomstandigheden zouden niet perfecter kunnen zijn voor snelle tijden.",
            "pt": "As condições do terreno não poderiam ser mais perfeitas para tempos rápidos."
        },
        {
            "en": "This is what separates champions from the rest of the field.",
            "nl": "Dit is wat kampioenen onderscheidt van de rest van het veld.",
            "pt": "Isso é o que separa campeões do resto do campo."
        },
        {
            "en": "The racing gods have blessed us with ideal conditions today.",
            "nl": "De racegoden hebben ons vandaag gezegend met ideale omstandigheden.",
            "pt": "Os deuses das corridas nos abençoaram com condições ideais hoje."
        },
        {
            "en": "Every stride from this point forward will be etched in history.",
            "nl": "Elke pas vanaf dit punt zal in de geschiedenis gegraveerd worden.",
            "pt": "Cada passada deste ponto em diante será gravada na história."
        },
        {
            "en": "The culmination of months of careful planning is about to unfold.",
            "nl": "Het hoogtepunt van maanden zorgvuldige planning staat op het punt zich te ontvouwen.",
            "pt": "O ápice de meses de planejamento cuidadoso está prestes a se desenrolar."
        },
        {
            "en": "These magnificent athletes are poetry in motion even at rest.",
            "nl": "Deze magnifieke atleten zijn poëzie in beweging, zelfs in rust.",
            "pt": "Esses atletas magníficos são poesia em movimento mesmo em repouso."
        },
        {
            "en": "The silence before the storm—you can cut the tension with a knife.",
            "nl": "De stilte voor de storm—je kunt de spanning snijden met een mes.",
            "pt": "O silêncio antes da tempestade—você pode cortar a tensão com uma faca."
        },
        {
            "en": "Racing fans around the world are holding their collective breath.",
            "nl": "Racefans over de hele wereld houden collectief hun adem in.",
            "pt": "Fãs de corrida ao redor do mundo estão prendendo a respiração coletivamente."
        },
        {
            "en": "The next few seconds will determine months of celebration or heartbreak.",
            "nl": "De volgende paar seconden zullen maanden van viering of hartpijn bepalen.",
            "pt": "Os próximos segundos determinarão meses de celebração ou desgosto."
        },
        {
            "en": "This is why we fell in love with the sport of kings.",
            "nl": "Daarom werden we verliefd op de sport der koningen.",
            "pt": "É por isso que nos apaixonamos pelo esporte dos reis."
        },
        {
            "en": "The final moments of anticipation before greatness is unleashed.",
            "nl": "De laatste momenten van verwachting voordat grootsheid wordt losgelaten.",
            "pt": "Os momentos finais de expectativa antes que a grandeza seja liberada."
        }
    ]   
    
    chat_entries = []
    time_ms = 1000
    time_end_ms = 30000  # You can change this value to set the end time in ms

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
    output_filename = "horse_racing_commentary_data_pre_race.txt"
    
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(chat_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Generated {len(chat_data)} chat entries")
    print(f"📝 Data saved to: {output_filename}")
    print(f"⏱️  Time range: {chat_data[0]['timeSinceVideoStartedInMs']}ms to {chat_data[-1]['timeSinceVideoStartedInMs']}ms")

if __name__ == "__main__":
    main() 