import { RootStore } from "./rootStore";
import { observable, action, runInAction } from "mobx";
import { ICard } from "../models/playtest";
import mockDeck from "../../features/playtest/mockDeck";
import agent from "../api/agent";
import { toast } from "react-toastify";

export default class PlaytestStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable importedDeck: string[] = [];
  @observable library: ICard[] = [];
  @observable hand: ICard[] = [];
  @observable field: ICard[] = [];
  @observable graveyard: ICard[] = [];
  @observable exiled: ICard[] = [];
  @observable coordinates: { [index: number]: { x: number; y: number } } = {};
  @observable untapAll: boolean = false;

  // @action parseDeck = () => {
  //   const deck: string[] = [];
  //   // console.log(mockDeck.trim().split("\n"));
  //   const mockDeckArr = mockDeck.trim().split("\n");
  //   let importedDeckIndex = 60;
  //   mockDeckArr.forEach((card, index) => {
  //     const firstSpace = card.indexOf(" ");
  //     const quantity =
  //       card.slice(0, firstSpace) === ""
  //         ? 0
  //         : parseInt(card.slice(0, firstSpace));
  //     // console.log(quantity);
  //     if (quantity === 0 && index > 60) importedDeckIndex = index;
  //     const cardName = card.slice(firstSpace);
  //     // console.log("quantity", quantity);
  //     // console.log("cardname", cardName);
  //     for (let i = 0; i < quantity; i++) {
  //       deck.push(cardName.trim());
  //     }
  //   });
  //   // console.log("unique deck", deck);
  //   const importedDeck = deck.slice(0, importedDeckIndex);
  //   // console.log('imported deck is:', importedDeck);
  //   const sideboard = deck.slice(importedDeckIndex);
  //   // console.log("sideboard is:", sideboard);
  //   const randomizedDeck = this.shuffle(importedDeck);
  //   console.log("shuffled imported deck is:", randomizedDeck);
  //   this.importedDeck = randomizedDeck;
  //   // setSideboard(sideboard);
  // };

  @action shuffle = (array: any) => {
    if (!array.length) return array;
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    if (Array.isArray(this.library)) this.library = array;
    return array;
  };

  @action newGame = () => {
    // console.log("library is", this.library, mockDeck);
    if (!Array.isArray(this.library)) {
      this.getCardImages(this.importedDeck);
      return;
    }
    const shuffledDeck = this.shuffle([
      ...this.library,
      ...this.field,
      ...this.hand,
      ...this.graveyard,
      ...this.exiled,
      ...mockDeck,
    ]);
    // console.log("shuffledDeck", shuffledDeck, shuffledDeck.length);
    this.coordinates = {};
    this.field = this.graveyard = this.exiled = [];
    this.hand = shuffledDeck.slice(0, 7);
    this.library = shuffledDeck.slice(7);
    // console.log(shuffledDeck, this.library);
  };

  @action getCardImages = async (importedDeck: string[] | ICard[]) => {
    console.log("axios called");

    try {
      const data = await agent.Decks.deck(importedDeck);
      runInAction(() => {
        console.log("getCardImages", data);
        for (let i = 0; i < data.length; i++) {
          data[i]["cardID"] = i;
        }
        this.hand = data.slice(0, 7);
        this.library = data.slice(7);
      });
    } catch (error) {
      toast.error("Problem getting card images for deck");
      console.log("error", error);
      runInAction(() => {
        // this.loadingActivities = false;
      });
    }
  };

  @action drawCard = () => {
    if (this.library.length === undefined || this.library.length === 0) return;
    const updatedDeck = [...this.library];
    const movedCard = updatedDeck.splice(0, 1);
    this.hand = [...this.hand, ...movedCard];
    this.library = updatedDeck;
  };

  @action onDragOver = (e: React.MouseEvent) => {
    e.preventDefault();
    // e.stopPropagation();
  };

  @action onDragStart = (e: any, zone: string) => {
    // console.log("zone is", zone);
    e.persist();
    if (e.dataTransfer) {
      if (e.target.id !== "deck-img") e.target.style.opacity = "0.2";
      e.dataTransfer.setDragImage(e.target, 61, 85);
      e.dataTransfer.setData("Text", `${zone}-${e.target.id}`);
    }
  };

  @action onBattlegroundDrop = (e: any) => {
    if (this.library.length === undefined) return;
    if (e && e.dataTransfer) {
      e.target.style.opacity = "1";
      let dataID = e.dataTransfer.getData("Text").split("-");
      const zone = dataID[0];
      dataID = dataID[1];
      // console.log("onBattlegroundDrop", zone);
      let movedCard: any = undefined;
      switch (zone) {
        case "deck":
          if (this.library.length === 0) return;
          const updatedDeck = [...this.library];
          movedCard = updatedDeck.splice(0, 1);
          this.coordinates = {
            ...this.coordinates,
            [movedCard[0].cardID]: { x: e.pageX - 70, y: e.pageY - 149 },
          };
          this.field = [...this.field, ...movedCard];
          this.library = updatedDeck;
          break;

        case "hand":
          movedCard = this.hand.find(
            (card) => card.cardID.toString() === dataID
          );
          const updatedHand = this.hand.filter(
            (card) => card.cardID !== movedCard.cardID
          );
          this.coordinates = {
            ...this.coordinates,
            [dataID]: { x: e.pageX - 70, y: e.pageY - 149 },
          };
          this.hand = updatedHand;
          this.field = [...this.field, movedCard];
          break;

        case "field":
          movedCard = this.field.find((card) => card.cardID === Number(dataID));
          this.coordinates = {
            ...this.coordinates,
            [dataID]: { x: e.pageX - 70, y: e.pageY - 149 },
          };
          break;

        case "graveyard":
          const updatedGraveyard = [...this.graveyard];
          movedCard = updatedGraveyard.shift();
          this.coordinates = {
            ...this.coordinates,
            [dataID]: { x: e.pageX - 70, y: e.pageY - 149 },
          };
          this.graveyard = updatedGraveyard;
          this.field = [...this.field, movedCard];
          break;

        case "exiled":
          const updatedExiled = [...this.exiled];
          movedCard = updatedExiled.shift();
          this.coordinates = {
            ...this.coordinates,
            [dataID]: { x: e.pageX - 70, y: e.pageY - 149 },
          };
          this.exiled = updatedExiled;
          this.field = [...this.field, movedCard];
          break;

        default:
          break;
      }

      e.preventDefault();
    }
  };

  @action onHandDrop = (e: any) => {
    if (!this.library.length) return;
    if (e && e.dataTransfer) {
      e.persist();
      let dataID = e.dataTransfer.getData("Text").split("-");
      const zone = dataID[0];
      dataID = dataID[1];
      const targetId = e.target.id;
      // console.log("dataID", dataID);
      let updatedHand = [...this.hand];
      let currentCardIndex = 0,
        targetCardIndex = 0,
        movedCard: any;

      switch (zone) {
        case "deck":
          if (targetId === "") {
            this.drawCard();
            return;
          }
          const updatedDeck = [...this.library];
          movedCard = updatedDeck.splice(0, 1);
          this.hand.forEach((card, i) => {
            if (card.cardID === Number(targetId)) targetCardIndex = i;
          });
          updatedHand.splice(targetCardIndex, 0, ...movedCard);
          this.hand = updatedHand;
          this.library = updatedDeck;
          break;

        case "hand":
          this.hand.forEach((card, i) => {
            if (card.cardID === Number(dataID)) {
              movedCard = card;
              currentCardIndex = i;
            }
            if (targetId === "") {
              targetCardIndex = this.hand.length;
            } else {
              if (card.cardID === Number(targetId)) {
                targetCardIndex = i;
              }
            }
          });
          updatedHand.splice(currentCardIndex, 1);
          updatedHand.splice(targetCardIndex, 0, movedCard);
          this.hand = updatedHand;
          break;

        case "field":
          this.field.forEach((card, i) => {
            if (card.cardID === Number(dataID)) {
              movedCard = card;
              currentCardIndex = i;
            }
          });

          if (targetId === "") {
            targetCardIndex = this.hand.length;
          } else {
            this.hand.forEach((card, i) => {
              if (card.cardID === Number(targetId) && targetId !== "") {
                targetCardIndex = i;
              }
            });
          }

          let updatedField = [...this.field];
          updatedField.splice(currentCardIndex, 1);
          updatedHand.splice(targetCardIndex, 0, movedCard);
          this.field = updatedField;
          this.hand = updatedHand;
          break;

        case "graveyard":
          const updatedGraveyard = [...this.graveyard];
          movedCard = updatedGraveyard.shift();
          if (targetId === "") {
            targetCardIndex = this.hand.length;
          } else {
            this.hand.forEach((card, i) => {
              if (card.cardID === Number(targetId)) {
                targetCardIndex = i;
              }
            });
          }
          updatedHand.splice(targetCardIndex, 0, movedCard);
          this.graveyard = updatedGraveyard;
          this.hand = updatedHand;
          break;

        case "exiled":
          const updatedExiled = [...this.exiled];
          movedCard = updatedExiled.shift();
          if (targetId === "") {
            targetCardIndex = this.hand.length;
          } else {
            this.hand.forEach((card, i) => {
              if (card.cardID === Number(targetId)) {
                targetCardIndex = i;
              }
            });
          }
          updatedHand.splice(targetCardIndex, 0, movedCard);
          this.exiled = updatedExiled;
          this.hand = updatedHand;
          break;

        default:
          break;
      }
    }
  };

  @action onLibraryDrop = (e: any) => {
    e.persist();
    if (e && e.dataTransfer) {
      let dataID = e.dataTransfer.getData("Text").split("-");
      const zone = dataID[0];
      dataID = dataID[1];
      let updatedDeck = [...this.library];

      let currentCardIndex = 0,
        movedCard: any;
      // console.log("onDeckDrop", zone);
      switch (zone) {
        case "hand":
          let updatedHand = [...this.hand];
          this.hand.forEach((card, i) => {
            if (card.cardID === Number(dataID)) {
              movedCard = card;
              currentCardIndex = i;
            }
          });
          updatedHand.splice(currentCardIndex, 1);
          updatedDeck.unshift(movedCard);
          this.hand = updatedHand;
          this.library = updatedDeck;
          break;

        case "field":
          this.field.forEach((card, i) => {
            if (card.cardID === Number(dataID)) {
              movedCard = card;
              currentCardIndex = i;
            }
          });
          let updatedField = [...this.field];
          updatedField.splice(currentCardIndex, 1);
          updatedDeck.unshift(movedCard);
          this.field = updatedField;
          this.library = updatedDeck;
          break;

        case "graveyard":
          const updatedGraveyard = [...this.graveyard];
          movedCard = updatedGraveyard.shift();
          updatedDeck.unshift(movedCard);
          this.graveyard = updatedGraveyard;
          this.library = updatedDeck;
          break;

        case "exiled":
          const updatedExiled = [...this.exiled];
          movedCard = updatedExiled.shift();
          updatedDeck.unshift(movedCard);
          this.exiled = updatedExiled;
          this.library = updatedDeck;
          break;

        default:
          break;
      }
    }
  };

  @action onGraveyardDrop = (e: any) => {
    if (e && e.dataTransfer) {
      let dataID = e.dataTransfer.getData("Text").split("-");
      const zone = dataID[0];
      dataID = dataID[1];
      let updatedGraveyard = [...this.graveyard];

      let currentCardIndex = 0,
        movedCard: any;
      // console.log("onGraveyardDrop", zone);
      switch (zone) {
        case "hand":
          let updatedHand = [...this.hand];
          this.hand.forEach((card, i) => {
            if (card.cardID === Number(dataID)) {
              movedCard = card;
              currentCardIndex = i;
            }
          });
          updatedHand.splice(currentCardIndex, 1);
          updatedGraveyard.unshift(movedCard);
          this.hand = updatedHand;
          this.graveyard = updatedGraveyard;
          break;

        case "field":
          this.field.forEach((card, i) => {
            if (card.cardID === Number(dataID)) {
              movedCard = card;
              currentCardIndex = i;
            }
          });
          let updatedField = [...this.field];
          updatedField.splice(currentCardIndex, 1);
          updatedGraveyard.unshift(movedCard);
          this.field = updatedField;
          this.graveyard = updatedGraveyard;
          break;

        case "deck":
          const updatedDeck = [...this.library];
          movedCard = updatedDeck.splice(0, 1);
          updatedGraveyard.unshift(movedCard[0]);
          this.library = updatedDeck;
          this.graveyard = updatedGraveyard;
          break;

        case "exiled":
          const updatedExiled = [...this.exiled];
          movedCard = updatedExiled.shift();
          updatedGraveyard.unshift(movedCard);
          this.exiled = updatedExiled;
          this.graveyard = updatedGraveyard;
          break;

        default:
          break;
      }
    }
  };

  @action onExiledDrop = (e: any) => {
    if (e && e.dataTransfer) {
      let dataID = e.dataTransfer.getData("Text").split("-");
      const zone = dataID[0];
      dataID = dataID[1];
      let updatedExiled = [...this.exiled];

      let currentCardIndex = 0,
        movedCard: any;
      // console.log("onExiledDrop", zone);
      switch (zone) {
        case "hand":
          let updatedHand = [...this.hand];
          this.hand.forEach((card, i) => {
            if (card.cardID === Number(dataID)) {
              movedCard = card;
              currentCardIndex = i;
            }
          });
          updatedHand.splice(currentCardIndex, 1);
          updatedExiled.unshift(movedCard);
          this.hand = updatedHand;
          this.exiled = updatedExiled;
          break;

        case "field":
          this.field.forEach((card, i) => {
            if (card.cardID === Number(dataID)) {
              movedCard = card;
              currentCardIndex = i;
            }
          });
          let updatedField = [...this.field];
          updatedField.splice(currentCardIndex, 1);
          updatedExiled.unshift(movedCard);
          this.field = updatedField;
          this.exiled = updatedExiled;
          break;

        case "deck":
          const updatedDeck = [...this.library];
          movedCard = updatedDeck.splice(0, 1);
          updatedExiled.unshift(movedCard[0]);
          this.library = updatedDeck;
          this.exiled = updatedExiled;
          break;

        case "graveyard":
          const updatedGraveyard = [...this.graveyard];
          movedCard = updatedGraveyard.shift();
          updatedExiled.unshift(movedCard);
          this.graveyard = updatedGraveyard;
          this.exiled = updatedExiled;
          break;

        default:
          break;
      }
    }
  };

  @action onDragEnd = (e: any) => {
    // console.log("onDragEnd", e.target);
    e.target.style.opacity = "1";
  };

  @action handleDropdownSelection = (e: any) => {
    // e.persist();
    const zone = e.target.dataset.id.split("-")[0];
    const cardID = Number(e.target.dataset.id.split("-")[1]);
    // console.log("find data-id", zone, cardID);

    let updatedDeck: ICard[],
      movedCard: any,
      movedIndex = 0;

    switch (zone) {
      case "deck":
        updatedDeck = [...this.library];
        this.library.forEach((card, i) => {
          if (card.cardID === cardID) {
            movedCard = card;
            movedIndex = i;
          }
        });
        updatedDeck.splice(movedIndex, 1);
        this.library = updatedDeck;
        break;
      case "graveyard":
        updatedDeck = [...this.graveyard];
        this.graveyard.forEach((card, i) => {
          if (card.cardID === cardID) {
            movedCard = card;
            movedIndex = i;
          }
        });
        updatedDeck.splice(movedIndex, 1);
        this.graveyard = updatedDeck;
        break;
      case "exiled":
        updatedDeck = [...this.exiled];
        this.exiled.forEach((card, i) => {
          if (card.cardID === cardID) {
            movedCard = card;
            movedIndex = i;
          }
        });
        updatedDeck.splice(movedIndex, 1);
        this.exiled = updatedDeck;
        break;
      default:
        break;
    }

    const updatedHand = [...this.hand];
    updatedHand.push(movedCard);
    this.hand = updatedHand;
  };

  @action handlePopupClick = (e: any, cardID: number, direction: string) => {
    const updatedDeck = [...this.library];
    let updatedHand = [...this.hand];
    let movedCard: any,
      currentCardIndex = 0;
    this.hand.forEach((card, i) => {
      if (card.cardID === cardID) {
        movedCard = card;
        currentCardIndex = i;
      }
    });
    if (direction === "top") {
      console.log("top", cardID);
      updatedHand.splice(currentCardIndex, 1);
      updatedDeck.unshift(movedCard);
    } else {
      console.log("bottom", cardID);
      updatedHand.splice(currentCardIndex, 1);
      updatedDeck.push(movedCard);
    }
    this.hand = updatedHand;
    this.library = updatedDeck;
  };

  @action handeleUntapAll = () => {
    this.untapAll = !this.untapAll;
  };
}
