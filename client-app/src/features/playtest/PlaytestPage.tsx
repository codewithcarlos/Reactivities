import React, { useContext } from "react";
import { RouteComponentProps } from "react-router";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../app/stores/rootStore";
import Battleground from "./Battleground";
import Commands from "./Commands";
import Hand from "./Hand";
import Library from "./Library";
import Graveyard from "./Graveyard";
import Exiled from "./Exiled";
import "./PlaytestPage.css";

interface RouteParams {
  deckID: string;
}
interface IProps extends RouteComponentProps<RouteParams> {}

const PlaytestPage: React.FC<IProps> = () => {
  const rootStore = useContext(RootStoreContext);
  const { library } = rootStore.playtestStore;
// console.log('Playtest page rerendered');
  // useEffect(() => {
  //   parseDeck();
  // }, []);

  return (
    <div className="playtest">
      {/* <NavBar /> */}
      <div className="container-flex">
        <Battleground />
        <Commands />
      </div>
      {library.length >= 0 && (
        <div className="container-flex">
          <Hand />
          <div className="zones">
            <Library />
            <Graveyard />
            <Exiled />
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(PlaytestPage);
