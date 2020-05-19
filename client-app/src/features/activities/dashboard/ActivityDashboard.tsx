import React, { useContext, useEffect, useState } from "react";
import { Grid, Loader, Container } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../../app/stores/rootStore";
import InfiniteScroll from "react-infinite-scroller";
import ActivityFilters from "./ActivityFilters";
import ActivityListItemPlaceholder from "./ActivityListItemPlaceholder";
import "./ActivityDashboard.css";

const ActivityDashboard: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    loadActivities,
    loadingInitial,
    setPage,
    page,
    totalPages,
  } = rootStore.activityStore;
  const [loadingNext, setLoadingNext] = useState(false);

  const handleGetNext = () => {
    setLoadingNext(true);
    setPage(page + 1);
    loadActivities().then(() => setLoadingNext(false));
  };

  useEffect(() => {
    loadActivities();
  }, [loadActivities]);

  return (
    <Container className="activities-container-desktop activities-container-mobile">
      <Grid>
        <Grid.Column width={10} id={"activities-grid"}>
          {loadingInitial && page === 0 ? (
            <ActivityListItemPlaceholder />
          ) : (
            <InfiniteScroll
              pageStart={0}
              loadMore={handleGetNext}
              hasMore={!loadingNext && page + 1 < totalPages}
              initialLoad={false}
              loader={
                <div className="loader" key={0}>
                  Loading ...
                </div>
              }
            >
              <ActivityList />
            </InfiniteScroll>
          )}
        </Grid.Column>
        <Grid.Column width={6} id="filters-grid">
          <ActivityFilters />
        </Grid.Column>
        <Grid.Column width={10} id="loader-grid">
          <Loader active={loadingNext} />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default observer(ActivityDashboard);
