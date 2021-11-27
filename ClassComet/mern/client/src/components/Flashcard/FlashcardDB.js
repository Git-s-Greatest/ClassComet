let DECKS = {
    vocabulary1: [
      {
        front: 'tumid',
        back: 'abnormally distended especially by fluids or gas',
        last: [true, false]
      },
      {
        front: 'intemperance',
        back: 'excess in action and immoderate indulgence of appetites',
        last: [false, false, false]
      },
      {
        front: 'elixir',
        back: 'a substance believed to cure all ills',
        last: [true]
      },
      {
        front: 'quixotic',
        back: 'not sensible about practical matters',
        last: [true, false]
      },
      {
        front: 'dogma',
        back: 'a doctrine or code of beliefs accepted as authoritative',
        last: [true]
      }
    ],
    vocabulary2: [
      {
        front: 'belligerent',
        back: "characteristic of an enemy or one eager to fight",
        last: [false, true]
      },
      {
        front: 'impetuous',
        back: 'characterized by undue haste and lack of thought',
        last: [false, false, false]
      },
      {
        front: 'pernicious',
        back: 'exceedingly harmful',
        last: [true]
      },
      {
        front: 'brazen',
        back: 'unrestrained by convention or propriety',
        last: [true, false]
      },
      {
        front: 'doppelganger',
        back: 'a ghostly double that haunts its living counterpart',
        last: [true]
      }
    ],
    sports: [
      {
        front: 'How many medals did China win at the Beijing Olympics?',
        back: '100',
        last: [true, false]
      },
      {
        front: 'The Olympics are held every how many years?',
        back: '4 years',
        last: [false, false, false]
      },
      {
        front: 'What’s the national sport of Canada?',
        back: 'Lacrosse',
        last: [true]
      }
    ]
  };
  
  export default class QuizDB {
    static getDecks() {
      return Object.keys(DECKS).sort((a, b) => (a < b ? -1 : 1));
    }
    static getDeck(deckname) {
      return DECKS[deckname];
    }
    static addDeck(deckname) {
      DECKS[deckname] = [];
    }
    static addCard(deckname, front, back) {
      DECKS[deckname].push({
        front,
        back,
        last: []
      });
    }
  }
  
