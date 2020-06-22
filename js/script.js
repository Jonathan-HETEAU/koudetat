"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
  Help: {
    Title: "Help",
    Subtitle: "Some useful Links",
    Message:
      "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>",
  },
};

// Define the notifications used in the game
let notifications = {
  Disclaimer: {
    title: "Avertissement!",
    body: ` Bonjour, ce n'est pas un vrai site Koudetat ! ! ! C'est le prototype d'une idée que je voulais montrer au membre de The Family et  Koudetat. En fait, je suis Jonathan et les propos sont les miens et non celles des personnes représentées, même si j'ai essayé de m'y approcher. \n https://www.linkedin.com/in/jonathan-heteau-35b160a6/`,
    icon: "img/moi.jpeg",
  },
};

// Define the Particles JS Configurations used in the game
let particles = {};

// Define the music used in the game.
const music = {};

// Define the voice files used in the game.
const voice = {};

// Define the sounds used in the game.
const sound = {
  Koudetat: "koudetat.mp3",
};

// Define the videos used in the game.
const videos = {
  Intro: "koudetat.mp4",
};

// Define the images used in the game.
const images = {};

// Define the backgrounds for each scene.
const scenes = {
  Sex: "homme-femme.jpeg",
  Goldup: "Goldup.jpeg",
  Koudetat: "koudetat.jpeg",
  TheFamily: "the-family.jpeg",
  TheFamily2: "the-family-2.jpeg",
};

// Define the Characters
const characters = {
  valentin: {
    Name: "Valentin",
    Color: "#FFAB03",
    Directory: "Valentin", // Optional*
    Images: {
      Bonjour: "salut.png",
      Question1: "question.png",
      Question2: "question2.png",
      Question3: "question3.png",
      Presentation: "presentation.png",
    },
  },
  ouss: {
    Name: "Oussama",
    Color: "#00269A",
    Directory: "Oussama", // Optional*
    Images: {
      // Images Identifier for the "Show" statement.
      Bonjour: "Bonjour.png",
      Calme: "Calme.png",
      Scale: "Scale.png",
      Stop: "Stop.png",
      Attend: "Wait.png",
    },
  },
  alice: {
    Name: "Alice",
    Color: "#ff0088",
    Directory: "Alice", // Optional*
    Images: {
      // Images Identifier for the "Show" statement.
      Stop: "no.png",
      Bonjour: "bonjour.png",
      Smile: "sourire.png",
    },
  },
};

let script = {
  // The game starts here.
  Start: ["notify Disclaimer", "jump Sex"],
  Sex: [
    "scene Sex",
    {
      Choice: {
        Homme: {
          Text: "Je suis un homme.",
          Do: "jump Homme",
        },
        Femme: {
          Text: "Je suis une femme.",
          Do: "jump Femme",
        },
      },
    },
  ],
  Homme: [
    function () {
      storage.player.sex = "HOMME";
      return true;
    },
    "jump Nom",
  ],
  Femme: [
    function () {
      storage.player.sex = "FEMME";
      return true;
    },
    "jump Nom",
  ],
  Nom: [
    {
      Input: {
        Text: "Comment tu t'appelle ?",
        Validation: function (input) {
          return input.trim().length > 0;
        },
        Save: function (input) {
          storage.player.Name = input;
          return true;
        },
        Warning: "Vous devez entrer un nom !",
      },
    },
    "jump Bonjour",
  ],
  Bonjour: [
    "scene rgb(255,171,3)",
    "play video Intro",
    "show valentin Bonjour left with fadeIn",
    "valentin Bonjour {{player.Name}} bienvenue sur Koudetat ",
    "show valentin Presentation left with fadeIn",
    "valentin Je suis Valentin CEO de Koudetat ",
    "valentin Chez Koudetat, nous n'avons qu'une seule mission.",
    "valentin Vous aider à créer des boîtes dont vous êtes fier.",
    "valentin Nous sommes actuellement 3 formateurs, Alice, Oussama et moi.",
    "jump Formateur",
  ],
  Formateur: [
    "scene rgb(0,0,0)",
    "show valentin Question1 left with fadeIn",
    "valentin Des questions avant de commencer ?",
    {
      Choice: {
        Valentin: {
          Text: "Qui est tu ?",
          Do: "jump Valentin",
        },
        Alice: {
          Text: "Qui est Alice ?",
          Do: "jump Alice",
        },
        Oussama: {
          Text: "Qui est Oussama ?",
          Do: "jump Oussama",
        },
        No: {
          Text: "Je vous connais bien, commençons !",
          Do: "jump Formations",
        },
      },
    },
  ],
  Alice: [
    "scene TheFamily",
    "show alice Bonjour right",
    "valentin Alice est co-fondatrice et CEO de The Family. ",
    "valentin Elle s'investit aussi beaucoup dans GoldUp, une communauté d'entrepreneuses par une entrepreneuse pour les entrepreneuses. ",
    "jump Formateur",
  ],
  Oussama: [
    "scene TheFamily2",
    "show ouss Bonjour right",
    "valentin Oussama et un des co-fondateurs de The Family.",
    "valentin Il a donné de nombreuses conférences sur l'entreprenariat et les start-ups. ",
    "jump Formateur",
  ],
  Valentin: [
    "scene Koudetat",
    "show valentin Presentation center",
    "valentin Après avoir fondé Menu Next Door, start-up du portefeuille de The Family, je suis devenu, depuis mai 2018, CEO de Koudetat.",
    "valentin Je me bats depuis pour réaliser un  projet que j'ai depuis longtemps",
    "valentin Casser le game de l'Education. ",
    "jump Formateur",
  ],
  Formations: [
    "scene rgb(0,0,0)",
    "show valentin Question2 left with fadeIn",
    "valentin C'est partie, que veux tu faire ? ",
    {
      Choice: {
        GoldUp: {
          Text: "Je veux trouver l'or qui est en moi grâce à Alice!",
          Do: "jump GoldUp",
        },
        BreakTheGame: {
          Text: "Je veux casser le Game avec toi!",
          Do: "jump BreakTheGame",
        },
        Mindset: {
          Text: "Je veux le mindset d'Oussama!",
          Do: "jump Mindset",
        },
      },
    },
  ],
  Mindset: [
    "scene rgb(0,38,154)",
    "show ouss Attend left ",
    {
      Conditional: {
        Condition: function () {
          return storage.player.sex == "FEMME";
        },
        True: "ouss Bonjour {{player.Name}}",
        False: "ouss Hey Dude, bienvenue",
      },
    },
    "ouss Que veux-tu savoir ? ",
    {
      Choice: {
        Covid: {
          Text: "Le Covid-19 me fait peur !",
          Do: "jump Covid",
        },
        Entrepreneur: {
          Text: "J'aimerais créer ma propre entreprise",
          Do: "jump Entrepreneur",
        },
        Scale: {
          Text: "J'ai une boîte qui fonctionne, et j'aimerais la faire Scaler ",
          Do: "jump Scale",
        },
      },
    },
  ],
  Scale: [
    "show ouss Scale left ",
    "ouss Avant, je pensais que les boîtes de service ne pouvaient pas être à l'échelle. J'avais tort.",
    "ouss Maintenant je sais que toute entreprise a une partie qui scale.",
    "jump Mindset",
  ],
  Entrepreneur: [
    "show ouss Stop left ",
    "ouss C'est un environnement difficile où vous réussissez rarement, mais quand vous y parvenez",
    "show ouss Calme left ",
    "ouss ...  c'est plus haut que ce qu'on imaginait.",
    "jump Mindset",
  ],
  Covid: [
    "show ouss Calme left ",
    "ouss Je comprends, c'est un moment difficile où l'incertitude est grande.",
    "ouss <a href='https://www.youtube.com/watch?v=GoP1060aKY0'>Regarde cette série de vidéos spéciales de Covid. tu y trouveras des conseils utiles.</a> ",
    "jump Mindset",
  ],
  GoldUp: [
    {
      Conditional: {
        Condition: function () {
          return storage.player.sex == "FEMME";
        },
        True: "jump GoldUpYes",
        False: "jump GoldupNo",
      },
    },
  ],
  GoldupNo: [
    "scene Goldup",
    "show alice Stop right",
    "alice Je suis désolé, mais j'aide seulement les meufs qui déchirent...",
    "jump Formations",
  ],
  GoldUpYes: [
    "scene Goldup",
    "show alice Smile right",
    "alice Hello {{player.Name}} .",
    "alice Désolé c'est la guerre en ce moment. Mais bientôt, je pourrai t'accompagner.",
    "alice Tu as choisi d'investir en toi et c'est super car on a trop besoin de meuf comme toi qui déchire dans l'entreprenariat..",
    "jump Formations",
  ],
  BreakTheGame: [
    "scene Koudetat ",
    "show valentin Presentation center ",
    "valentin Super ! Depuis que je suis chez Koudetat, c'est mon objectif.",
    "valentin Casser le Game!",
    "scene Koudetat with shake infinite",
    "vibrate 14000",
    "play sound Koudetat",
    "wait 14000",
    "jump Formations",
  ],
};
