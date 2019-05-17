import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import {
  Container, Content, Card, CardItem, Body, H3, List, ListItem, Text,
} from 'native-base';
import { errorMessages } from '../../../constants/messages';
import Error from '../UI/Error';
import Spacer from '../UI/Spacer';

const GameView = ({
  error, games, gameId,
}) => {
  // Error
  if (error) return <Error content={error} />;

  // Get this Game from all recipes
  let game = null;
  if (gameId && games) {
    game = games.find(item => parseInt(item.id, 10) === parseInt(gameId, 10));
  }

  // Game not found
  if (!game) return <Error content={errorMessages.game404} />;

  return (
    <Container>
      <Content padder>
        <Spacer size={25} />
        <H3>{game.localName} VS {game.visitName}</H3>
        <Text>
          Estadio
          {' '}
          {game.stadium}
        </Text>
        <Spacer size={15} />
        <Text>
          Fecha
          {' '}
          {game.date} {' '} {game.time}
        </Text>
        <Spacer size={20} />
      </Content>
    </Container>
  );
};

GameView.propTypes = {
  error: PropTypes.string,
  gameId: PropTypes.string.isRequired,
  games: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

GameView.defaultProps = {
  error: null,
};

export default GameView;
