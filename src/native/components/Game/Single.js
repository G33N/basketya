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

  // Get this Recipe from all recipes
  let game = null;
  if (gameId && games) {
    game = games.find(item => parseInt(item.id, 10) === parseInt(gameId, 10));
  }

  // Recipe not found
  if (!game) return <Error content={errorMessages.recipe404} />;

  return (
    <Container>
      <Content padder>
        <Image source={{ uri: game.image }} style={{ height: 100, width: null, flex: 1 }} />

        <Spacer size={25} />
        <H3>{game.title}</H3>
        <Text>
          by
          {' '}
          {game.author}
        </Text>
        <Spacer size={15} />

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
