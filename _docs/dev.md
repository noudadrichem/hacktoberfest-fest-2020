# Hoe krijg ik dit zelf 'runnend'?
Het project bestaat uit 2 delen. Client en Modules. Client is hier de 'main' applicatie waarbij de modules allemaal losse projecten zijn die hierin worden geimporteerd. Dit zorgt ervoor dat er 'widgts' onstaan in de main applicatie, <br/>vet he!?

![](https://i.ibb.co/2jG4Fxb/hacktoberfest-Starter-repo-architecture.png)

## How to
- Alles draait op nodejs 14. Dus dat moet je sowieso installeren.
- De repository zelf is geen project.

Als je client wilt draaien open je de client directory in je terminal (of in VSCode) en voer je eerst `npm install` uit. Dit installeert alle dependencies. Daarna run je `npm run dev`. Dit zorgt ervoor dat er op [http://localhost:8080](http://localhost:8080) de dev server draait. Deze server reload en inject automatisch nieuwe code als je een bestand in 'client' saved. Super chill dus!

Als je aan een module wilt werken kopieer je of de 'ts-example' of de 'vue-example'. Deze module geef jij dan een eigen naam.
Om een module te 'runnen' open je de module ook weer los in een terminal. via `npm run dev` run je een development environment voor je module die wederom kijkt naar wanneer je opslaat en deze build dan het project opnieuw zodat deze weer gebruikt kan worden in bijv. een vue component of in de client.

🚨 __Elk module + client is allemaal een eigen nodejs project/app. Deze moet je dus los van elkaar runnen ookal gebruiken ze elkaar__


# tl;dr
`npm install`
`npm run dev`
