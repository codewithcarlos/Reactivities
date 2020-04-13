import React, { useState, useContext } from "react";
import { RootStoreContext } from "../../app/stores/rootStore";
import { Icon, Popup } from "semantic-ui-react";
import { ICard } from "../../app/models/playtest";
import { observer } from 'mobx-react-lite';

const Card = ({
  card,
  // onDragStart,
  left,
  position,
}: {
  card: ICard;
  // onDragStart: (e: any, zone: string) => void;
  left: number;
  position: any;
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const rootStore = useContext(RootStoreContext);
  const { handlePopupClick, onDragStart } = rootStore.playtestStore;
  // console.log("card rerendered", card.cardID);

  return (
    <div
      className="card-container"
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
      onDrag={() => setShowPopup(false)}
      style={{ left, position }}
    >
      <div className={showPopup ? "popup" : "popup hide"}>
        <button>
          <Popup
            content="Put card on top of library"
            trigger={
              <Icon
                name="arrow up"
                onClick={(e: any) => handlePopupClick(e, card.cardID, "top")}
              />
            }
            position="top center"
          />
        </button>
        <button>
          <Popup
            content="Put card on bottom of library"
            trigger={
              <Icon
                name="arrow down"
                onClick={(e: any) => handlePopupClick(e, card.cardID, "bottom")}
              />
            }
            position="top center"
          />
        </button>
      </div>
      <div className="card" onDragStart={(e: any) => onDragStart(e, "hand")} >
        <div className="card-image-container">
          <img
            src={card.imageUrl}
            alt={card.name}
            className="card-image"
            id={card.cardID.toString()}
          />
        </div>
      </div>
    </div>
  );
};

export default observer(Card);
