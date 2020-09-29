# Hoe gebruiken wij GIT.

> Schroom niet mij een berichtje te sturen als je moeite hebt met GIT.

## Push & Merge
Elke contributer maakt een fork van het project (jouw origin). Deze repository op /svIndicium is de upstream.
Deze begrippen zijn belangrijk om te weten.
Je kan altijd jouw eigen code schrijven, pushen en pullen van jouw origin. Alleen als je jouw code wilt mergen met code van de upstream kan je een Pull request maken.

## Pull
Je kan altijd pullen vanuit jouw eigen origin. Met het bekende 'git pull origin [branch]' command. Echter werken we nu ook met een upstream remote. Wat betekend dat als je de code van /svIndicium wilt hebben je deze repository moet toevoegen als een remote. Het commando hiervoor is

`git remote add upstream https://github.com/svIndicium/hacktoberfest-fest-2020`

Als deze remote is toegevoegd werk je dus met 2 remotes. Jouw eigen fork(origin) en de upstream(die van /svIndicium).

## Branch names
Ik vind het belangrijk om te werken met declaratieve branch namen. Daarom gaan we werken met feature branches. De naming hiervoor is

- feature/iets-gedaan
- fix/iets-gefixed
- refactor/iets-betere-gemaakt

Dit zorgt ervoor dat alles overzichtelijk gaat, direct met een best practise werken is ook goed voor de skills!

## Vragen?
Geen zorgen, ik ga dit allemaal nog een keer uitleggen. En als er daarna nog vragen zijn, stuur mij gewoon een berichtje!
