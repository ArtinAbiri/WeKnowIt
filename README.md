# Arbetsprov We Know IT

Uppgiften var att utvecka en mobil applikation för en kund "CityPop". Slut användaren ska kunna söka efter populationen av en specifik stad eller att söka på ett land och få fram de största städernas population.
Denna aplikation gjordes i [ReactNative Expo](https://expo.dev/). 

## Struktur
Main:  `WeKnowIt/citypop/App.js`
Fetch: `WeKnowIt/citypop/App/Api/`
Vyer:  `WeKnowIt/citypop/App/Screens/`

### Dependencies

* [NodeJS](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [Expo phone app(for compiling ios not on Mac)](https://apps.apple.com/app/apple-store/id982107779)

### Köra programmet

1. Öppna terminalen och klona projektet med: git clone https://github.com/ArtinAbiri/WeKnowIt.git
2. För att navigera dig in i applikationen skriver du `cd WeKnowIt/citypop`
3. Skriv `expo install` och vänta tills allt är installerat
4. Skriv `expo start` för att starta klienten som appen körs på
5. Starta emulator som appen ska köras på eller scanna qr-koden på hemsidan med mobilen.

## Förbättringsmöjligheter
* En design som är mer astetisk än den givna wireframe.
* Byte av Api då denna har vissa buggar. Ex. söker man vissa bostäver eller fraser som länder så visar den någon slumpat land.
* Tydliggöra och plocka ut loading animationen från sidor för att leda till ett mer konsist och utvecklarvänlig kod.

## Utvecklare

[Artin Abiri](https://www.linkedin.com/in/artin-abiri-7673251a4/),[ kevinabiri@gmail.com](kevinabiri@gmail.com)

## Vertion Historik

* 0.1
    * Initial Release
