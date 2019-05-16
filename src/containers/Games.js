import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRecipes, getMeals } from '../actions/recipes';

class GameListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    games: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({}) }),
    fetchGames: PropTypes.func.isRequired,
    fetchMeals: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  state = {
    error: null,
    loading: false,
  }

  componentDidMount = () => this.fetchData();

  fetchData = (data) => {
    const { fetchGames, fetchMeals } = this.props;

    this.setState({ loading: true });

    return fetchGames(data)
      .then(() => fetchMeals())
      .then(() => this.setState({
        loading: false,
        error: null,
      })).catch(err => this.setState({
        loading: false,
        error: err,
      }));
  }

  render = () => {
    const { Layout, games, match } = this.props;
    const { loading, error } = this.state;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        gameId={id}
        error={error}
        loading={loading}
        games={games}
        reFetch={() => this.fetchData()}
      />
    );
  }
}

const mapStateToProps = state => ({
  games: state.recipes.recipes || {},
});

const mapDispatchToProps = {
  fetchMeals: getMeals,
  fetchGames: getRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameListing);
