import React, { useContext, useEffect } from "react";
import { Grid, Container } from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import { RootStoreContext } from "../../app/stores/rootStore";
import { RouteComponentProps } from "react-router";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";

interface RouteParams {
  username: string;
}

interface IProps extends RouteComponentProps<RouteParams> {}

const ProfilePage: React.FC<IProps> = ({ match }) => {
  const rootStore = useContext(RootStoreContext);
  const {
    loadingProfile,
    profile,
    loadProfile,
    follow,
    unfollow,
    isCurrentUser,
    loading,
    setActiveTab,
  } = rootStore.profileStore;

  useEffect(() => {
    loadProfile(match.params.username);
  }, [loadProfile, match]);

  if (loadingProfile) return <LoadingComponent content="Loading Profile..." />;

  return (
    <Container className="activities-container-desktop activities-container-mobile">
      <Grid>
        <Grid.Column width={16}>
          <ProfileHeader
            profile={profile!}
            follow={follow}
            unfollow={unfollow}
            isCurrentUser={isCurrentUser}
            loading={loading}
          />
          <ProfileContent setActiveTab={setActiveTab} />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default observer(ProfilePage);
