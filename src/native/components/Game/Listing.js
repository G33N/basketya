import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, TouchableOpacity, RefreshControl, Image,
} from 'react-native';
import {
  Container, Content, Card, CardItem, Body, Text, Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import Header from '../UI/Header';
import Spacer from '../UI/Spacer';

const GameListing = ({
  error,
  loading,
  games,
  reFetch,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  // Get the item ID
  const keyExtractor = item => item.id.toString();
  // Find match in games a game where the ID be equal to item.id
  const onPress = item => Actions.game({ match: { params: { id: String(item.id) } } });

  return (
    <Container>
      <Content padder>
        <Image
          source={{ uri: 'https://flcfit.com/wp-content/uploads/2018/04/Mens-league-logo.png' }}
          style={{
            height: 280,
            width: null,
            flex: 1,
            borderRadius: 5,
          }}
        />

        <FlatList
          numColumns={1}
          data={games}
          renderItem={({ item }) => (
            <Card transparent style={{ paddingHorizontal: 6 }}>
              <CardItem cardBody>
                <Body>
                  <Spacer size={10} />
                  <Text style={{ fontWeight: '800' }}>
                    {item.localName}
                    {item.visitName}
                    {item.localPoints}
                    {item.visitPoints}
                    {item.stadium}
                    {item.date}
                    {item.horario}
                    {item.status}
                  </Text>
                  <Spacer size={15} />
                  <Button
                    block
                    bordered
                    small
                    onPress={() => onPress(item)}
                  >
                    <Text>
                      View Game
                    </Text>
                  </Button>
                  <Spacer size={5} />
                </Body>
              </CardItem>
            </Card>
          )}
          keyExtractor={keyExtractor}
          refreshControl={(
            <RefreshControl
              refreshing={loading}
              onRefresh={reFetch}
            />
          )}
        />

        <Spacer size={20} />
      </Content>
    </Container>
  );
};

GameListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  games: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

GameListing.defaultProps = {
  error: null,
  reFetch: null,
};

export default GameListing;
