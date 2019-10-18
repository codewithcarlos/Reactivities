import React, { useContext, Fragment } from 'react';
import { Container, Segment, Header, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';
import LoginForm from '../user/LoginForm';
import RegisterForm from '../user/RegisterForm';
import './HomePage.css';

const HomePage = () => {
  const token = window.localStorage.getItem('jwt');
  const rootStore = useContext(RootStoreContext);
  const { isLoggedIn, user } = rootStore.userStore;
  const { openModal } = rootStore.modalStore;
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted className="iphone5 ipadpro">
          {/* <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          /> */}
          Modern Magic
        </Header>
        {isLoggedIn && user && token ? (
          <Fragment>
            {/* <Header
              as="h2"
              inverted
              content={`Welcome back, ${user.displayName}`}
            /> */}
            <Button as={Link} to="/activities" size="huge" inverted>
              Go to activities!
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            {/* <Header as="h2" inverted content="Welcome to Modern Magic" /> */}
            <Button
              onClick={() => openModal(<LoginForm />)}
              to="/login"
              size="huge"
              inverted
            >
              Login
            </Button>
            <Button
              onClick={() => openModal(<RegisterForm />)}
              to="/register"
              size="huge"
              inverted
            >
              Register
            </Button>
          </Fragment>
        )}
      </Container>
    </Segment>
  );
};

export default HomePage;
