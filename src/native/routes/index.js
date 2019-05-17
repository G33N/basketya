import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';

import GamesContainer from '../../containers/Games';
import GameListingComponent from '../components/Game/Listing';
import GameSingleComponent from '../components/Game/Single'

import FixtureComponent from '../components/Fixture/Fixture';

import NewsComponent from '../components/News/News'

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="games"
          title="PARTIDOS"
          icon={() => <Icon name="basketball" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          {/* THIS IS THE STACK FOR THE TAB GAMES WITH THE CONTAINER GAME AND INIT WITH A LIST OF GAMES LAYAOUT */}
          <Scene key="games" component={GamesContainer} Layout={GameListingComponent} />
        </Stack>

        <Stack
          key="news"
          title="NOTICIAS"
          icon={() => <Icon name="book" {...DefaultProps.icons} />}
          // This inherit the navigations props to the child
          {...DefaultProps.navbarProps}
        >
          <Scene key="news" component={NewsComponent}/>
        </Stack>

        <Stack
          key="fixtures"
          title="POSICIONES"
          icon={() => <Icon name="list" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="fixtures" component={FixtureComponent} />
        </Stack>
      </Tabs>
    </Scene>
    {/* When you add a Scene here you are declaration a new Action.{key} in the redux actions*/}
    <Scene
      back
      clone
      key="game"
      title="PARTIDO"
      {...DefaultProps.navbarProps}
      component={GamesContainer}
      Layout={GameSingleComponent}
    />
  </Stack>
);

export default Index;
