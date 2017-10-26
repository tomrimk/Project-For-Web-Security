# Project-For-Web-Security
A Yelp clone for university project

## Kodo išdėstymas
**middleware** aplanke yra visi failai, kuriuose yra middleware logika [Sužinoti daugiau...](http://expressjs.com/en/guide/using-middleware.html).

**models** aplanke yra visi failai susiję su duomenų baze. Galite tai traktuoti, kaip užrašytos duomenų bazių lentelės. [Daugiau..](https://docs.mongodb.com/manual/core/data-model-design/).

**public** aplanke yra failai, susiję su stiliumi, paveikslėliais ir kitais failais, kurie susiję su stiliumi.

**routes** aplanke yra http request ir logikos failai. (Šiuo metu yra 3, naudoja RESTful routing ir CRUD principą).

**views** aplanke yra .ejs failai (tas pats kaip .twig failai dirbant su Symfony).

Taip pat yra du failai:
- **app.js** - pagrindiniai programos nustatymai. Patį puslapį paleiskite per ``` node app.js ``` komandą.
- **seeds.js** - užseedinama duomenų bazė keliais įrašais. Norint pasinaudoti komanda ``` app.js ``` faile nuimkite komentarą nuo ```seedDB()``` eilutės.

# MongoDB

[Kaip įsirašyti galite peržiūrėti čia](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/).
Viską įrašę patį mongodb serverį galite paleisti nuėjus į įrašymo folderį ir paleidus mongod.exe failą.

Jei kyla kokių klausimų, rašykite FB.

# Autoriai
- @EmilisSm
- @julius1223
- @tomrimk
