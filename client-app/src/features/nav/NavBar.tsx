import React, { useContext, useState } from 'react';
import {
  Menu,
  Container,
  Button,
  Image,
  Dropdown,
  Icon,
  Sidebar,
  Segment
} from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { NavLink, Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';

const NavBar: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;
  const [visible, setVisible] = useState(false);

  return (
    <Menu borderless fixed="top" inverted id="menu-mobile" className="mobile-menu-container">
      <Container className="mobile-menu-container">
        <Sidebar
          className="mobile-menu-sidebar"
          as={Segment}
          animation="push"
          direction="top"
          dimmed="true"
          onHide={() => {
            setVisible(false);
          }}
          visible={visible}
        >
          {user && (
            <Menu.Item position="right" className="menu-profile">
              <Image
                avatar
                spaced="right"
                src={user.image || '/assets/user.png'}
              />
              <Dropdown pointing="top left" text={user.displayName}>
                <Dropdown.Menu>
                  <Dropdown.Item
                    as={Link}
                    to={`/profile/${user.username}`}
                    text="My profile"
                    icon="user"
                    onClick={() => setVisible(!visible)}
                  />
                  <Dropdown.Item onClick={logout} text="Logout" icon="power" />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          )}
          <Menu.Item
            name="Activities"
            className="activities-mobile"
            as={NavLink}
            to="/activities"
            onClick={() => setVisible(!visible)}
          />
          <Menu.Item className="create-activity">
            <Button
              as={NavLink}
              to="/createActivity"
              positive
              content="Create Activity"
              onClick={() => setVisible(!visible)}
            />
          </Menu.Item>
        </Sidebar>
        <Menu.Item>
          <Icon
            size="large"
            name="content"
            onClick={() => setVisible(!visible)}
          />
        </Menu.Item>
        <Menu.Item header as={NavLink} exact to="/">
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Modern Magic
        </Menu.Item>
        <div className={visible ? 'backdrop' : ''}></div>
      </Container>

      <Container className="container-desktop">
        <Menu.Item header className="header-mobile" as={NavLink} exact to="/">
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Modern Magic
        </Menu.Item>
        <Menu.Item
          name="Activities"
          className="activities-mobile"
          as={NavLink}
          to="/activities"
        />
        <Menu.Item className="create-activity">
          <Button
            as={NavLink}
            to="/createActivity"
            positive
            content="Create Activity"
          />
        </Menu.Item>
        {user && (
          <Menu.Item position="right" className="menu-profile">
            <Image
              avatar
              spaced="right"
              src={user.image || '/assets/user.png'}
            />
            <Dropdown pointing="top left" text={user.displayName}>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to={`/profile/${user.username}`}
                  text="My profile"
                  icon="user"
                />
                <Dropdown.Item onClick={logout} text="Logout" icon="power" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        )}
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
