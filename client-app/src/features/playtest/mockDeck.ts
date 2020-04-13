import { ICard } from "../../app/models/playtest";
// const mockDeck = `1 Archmage's Charm
// 4 Arcum's Astrolabe
// 1 Ashiok, Dream Render
// 1 Batterskull
// 1 Breeding Pool
// 1 Celestial Colonnade
// 2 Cryptic Command
// 2 Field of Ruin
// 4 Flooded Strand
// 2 Force of Negation
// 1 Hallowed Fountain
// 3 Ice-Fang Coatl
// 2 Jace, the Mind Sculptor
// 2 Mana Leak
// 4 Misty Rainforest
// 2 Mystic Sanctuary
// 1 Once Upon a Time
// 4 Path to Exile
// 2 Snapcaster Mage
// 1 Snow-Covered Forest
// 5 Snow-Covered Island
// 1 Snow-Covered Plains
// 1 Steam Vents
// 4 Stoneforge Mystic
// 2 Supreme Verdict
// 1 Sword of Feast and Famine
// 2 Teferi, Time Raveler
// 1 Temple Garden
// 2 Uro, Titan of Nature's Wrath

// 2 Aether Gust
// 1 Ashiok, Dream Render
// 2 Blood Moon
// 1 Disdainful Stroke
// 1 Kor Firewalker
// 1 Mystical Dispute
// 1 Rest in Peace
// 1 Return to Nature
// 1 Surgical Extraction
// 2 Timely Reinforcements
// 2 Veil of Summer
// `;
const mockDeck: ICard[] = [
  {
    id: 60,
    name: "Cryptic Command",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=438614&type=card",
    multiverseid: 438614,
    cardID: 0,
  },
  {
    id: 48,
    name: "Stoneforge Mystic",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=198383&type=card",
    multiverseid: 198383,
    cardID: 1,
  },
  {
    id: 45,
    name: "Flooded Strand",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=405098&type=card",
    multiverseid: 405098,
    cardID: 2,
  },
  {
    id: 54,
    name: "Snow-Covered Island",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=121130&type=card",
    multiverseid: 121130,
    cardID: 3,
  },
  {
    id: 51,
    name: "Sword of Feast and Famine",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=214070&type=card",
    multiverseid: 214070,
    cardID: 4,
  },
  {
    id: 59,
    name: "Path to Exile",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=220511&type=card",
    multiverseid: 220511,
    cardID: 5,
  },
  {
    id: 54,
    name: "Snow-Covered Island",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=121130&type=card",
    multiverseid: 121130,
    cardID: 6,
  },
  {
    id: 48,
    name: "Stoneforge Mystic",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=198383&type=card",
    multiverseid: 198383,
    cardID: 7,
  },
  {
    id: 47,
    name: "Ice-Fang Coatl",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464152&type=card",
    multiverseid: 464152,
    cardID: 8,
  },
  {
    id: 59,
    name: "Path to Exile",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=220511&type=card",
    multiverseid: 220511,
    cardID: 9,
  },
  {
    id: 47,
    name: "Ice-Fang Coatl",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464152&type=card",
    multiverseid: 464152,
    cardID: 10,
  },
  {
    id: 50,
    name: "Ashiok, Dream Render",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461155&type=card",
    multiverseid: 461155,
    cardID: 11,
  },
  {
    id: 61,
    name: "Teferi, Time Raveler",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461148&type=card",
    multiverseid: 461148,
    cardID: 12,
  },
  {
    id: 47,
    name: "Ice-Fang Coatl",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464152&type=card",
    multiverseid: 464152,
    cardID: 13,
  },
  {
    id: 57,
    name: "Misty Rainforest",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=405102&type=card",
    multiverseid: 405102,
    cardID: 14,
  },
  {
    id: 55,
    name: "Mystic Sanctuary",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=473209&type=card",
    multiverseid: 473209,
    cardID: 15,
  },
  {
    id: 44,
    name: "Jace, the Mind Sculptor",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442051&type=card",
    multiverseid: 442051,
    cardID: 16,
  },
  {
    id: 48,
    name: "Stoneforge Mystic",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=198383&type=card",
    multiverseid: 198383,
    cardID: 17,
  },
  {
    id: 57,
    name: "Misty Rainforest",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=405102&type=card",
    multiverseid: 405102,
    cardID: 18,
  },
  {
    id: 56,
    name: "Arcum's Astrolabe",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464169&type=card",
    multiverseid: 464169,
    cardID: 19,
  },
  {
    id: 53,
    name: "Snapcaster Mage",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=227676&type=card",
    multiverseid: 227676,
    cardID: 20,
  },
  {
    id: 56,
    name: "Arcum's Astrolabe",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464169&type=card",
    multiverseid: 464169,
    cardID: 21,
  },
  {
    id: 55,
    name: "Mystic Sanctuary",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=473209&type=card",
    multiverseid: 473209,
    cardID: 22,
  },
  {
    id: 70,
    name: "Steam Vents",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=405109&type=card",
    multiverseid: 405109,
    cardID: 23,
  },
  {
    id: 54,
    name: "Snow-Covered Island",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=121130&type=card",
    multiverseid: 121130,
    cardID: 24,
  },
  {
    id: 56,
    name: "Arcum's Astrolabe",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464169&type=card",
    multiverseid: 464169,
    cardID: 25,
  },
  {
    id: 54,
    name: "Snow-Covered Island",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=121130&type=card",
    multiverseid: 121130,
    cardID: 26,
  },
  {
    id: 78,
    name: "Archmage's Charm",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463989&type=card",
    multiverseid: 463989,
    cardID: 27,
  },
  {
    id: 52,
    name: "Force of Negation",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464001&type=card",
    multiverseid: 464001,
    cardID: 28,
  },
  {
    id: 57,
    name: "Misty Rainforest",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=405102&type=card",
    multiverseid: 405102,
    cardID: 29,
  },
  {
    id: 60,
    name: "Cryptic Command",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=438614&type=card",
    multiverseid: 438614,
    cardID: 30,
  },
  {
    id: 46,
    name: "Supreme Verdict",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=438776&type=card",
    multiverseid: 438776,
    cardID: 31,
  },
  {
    id: 65,
    name: "Breeding Pool",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97088&type=card",
    multiverseid: 97088,
    cardID: 32,
  },
  {
    id: 54,
    name: "Snow-Covered Island",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=121130&type=card",
    multiverseid: 121130,
    cardID: 33,
  },
  {
    id: 45,
    name: "Flooded Strand",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=405098&type=card",
    multiverseid: 405098,
    cardID: 34,
  },
  {
    id: 64,
    name: "Uro, Titan of Nature's Wrath",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=476480&type=card",
    multiverseid: -1,
    cardID: 35,
  },
  {
    id: 45,
    name: "Flooded Strand",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=405098&type=card",
    multiverseid: 405098,
    cardID: 36,
  },
  {
    id: 56,
    name: "Arcum's Astrolabe",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464169&type=card",
    multiverseid: 464169,
    cardID: 37,
  },
  {
    id: 49,
    name: "Snow-Covered Plains",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=121267&type=card",
    multiverseid: 121267,
    cardID: 38,
  },
  {
    id: 62,
    name: "Snow-Covered Forest",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=121192&type=card",
    multiverseid: 121192,
    cardID: 39,
  },
  {
    id: 79,
    name: "Temple Garden",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=405112&type=card",
    multiverseid: 405112,
    cardID: 40,
  },
  {
    id: 59,
    name: "Path to Exile",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=220511&type=card",
    multiverseid: 220511,
    cardID: 41,
  },
  {
    id: 43,
    name: "Mana Leak",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=45242&type=card",
    multiverseid: 45242,
    cardID: 42,
  },
  {
    id: 59,
    name: "Path to Exile",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=220511&type=card",
    multiverseid: 220511,
    cardID: 43,
  },
  {
    id: 63,
    name: "Once Upon a Time",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=473131&type=card",
    multiverseid: 473131,
    cardID: 44,
  },
  {
    id: 80,
    name: "Batterskull",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=233055&type=card",
    multiverseid: 233055,
    cardID: 45,
  },
  {
    id: 44,
    name: "Jace, the Mind Sculptor",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442051&type=card",
    multiverseid: 442051,
    cardID: 46,
  },
  {
    id: 46,
    name: "Supreme Verdict",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=438776&type=card",
    multiverseid: 438776,
    cardID: 47,
  },
  {
    id: 61,
    name: "Teferi, Time Raveler",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461148&type=card",
    multiverseid: 461148,
    cardID: 48,
  },
  {
    id: 64,
    name: "Uro, Titan of Nature's Wrath",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=476480&type=card",
    multiverseid: -1,
    cardID: 49,
  },
  {
    id: 58,
    name: "Field of Ruin",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=435415&type=card",
    multiverseid: 435415,
    cardID: 50,
  },
  {
    id: 52,
    name: "Force of Negation",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464001&type=card",
    multiverseid: 464001,
    cardID: 51,
  },
  {
    id: 53,
    name: "Snapcaster Mage",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=227676&type=card",
    multiverseid: 227676,
    cardID: 52,
  },
  {
    id: 43,
    name: "Mana Leak",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=45242&type=card",
    multiverseid: 45242,
    cardID: 53,
  },
  {
    id: 57,
    name: "Misty Rainforest",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=405102&type=card",
    multiverseid: 405102,
    cardID: 54,
  },
  {
    id: 81,
    name: "Hallowed Fountain",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97071&type=card",
    multiverseid: 97071,
    cardID: 55,
  },
  {
    id: 45,
    name: "Flooded Strand",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=405098&type=card",
    multiverseid: 405098,
    cardID: 56,
  },
  {
    id: 82,
    name: "Celestial Colonnade",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457137&type=card",
    multiverseid: 457137,
    cardID: 57,
  },
  {
    id: 48,
    name: "Stoneforge Mystic",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=198383&type=card",
    multiverseid: 198383,
    cardID: 58,
  },
  {
    id: 58,
    name: "Field of Ruin",
    imageUrl:
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=435415&type=card",
    multiverseid: 435415,
    cardID: 59,
  },
];

export default mockDeck;
