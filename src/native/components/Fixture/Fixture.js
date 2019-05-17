import React from 'react';
import { View } from 'react-native';
import {
  Container, Content, List, ListItem, Body, Left, Text, Icon,
} from 'native-base';
import Header from '../UI/Header';

const Fixture = () => (
  <Container>
    <Content>
      <List>
        <View>
          <Content padder>
            <Header
              title="Hi there,"
              content="This is the news page"
            />
          </Content>
        </View>
      </List>
    </Content>
  </Container>
);

export default Fixture;