// IMPORT REDUCERS HERE
import games from './games'

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  rehydrated,
  games,
  // REDUCERS TO IMPORT YOU SHOULD ADD HERE ALL IMPORTS REDUCERS
};
