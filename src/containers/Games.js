import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getGames } from '../actions/games';

class GameListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    games: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({}) }),
    fetchGames: PropTypes.func.isRequired,
  }

  // This prop is for get a match by example game ID equal to item ID
  static defaultProps = {
    match: null,
  }
  // States to redux, this addd a spiner while getting data from firebase if fail show error
  state = {
    error: null,
    loading: false,
  }

  componentDidMount = () => this.fetchData();

  fetchData = (data) => {
    const { fetchGames } = this.props;

    this.setState({ loading: true });

    return fetchGames(data)
      .then(() => this.setState({
        loading: false,
        error: null,
      })).catch(err => this.setState({
        loading: false,
        error: err,
      }));
  }
  // render send data to the component through const export 
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
  games: state.games.games || {},
});

const mapDispatchToProps = {
  fetchGames: getGames,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameListing);
