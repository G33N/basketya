import Store from '../store/games';

// init a store
export const initialState = Store;

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    // this is the action type
    case 'GAMES_REPLACE': {
      let games = [];

      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {
        games = action.data.map(item => ({
          id: item.id,
          localName: item.localName,
          visitName: item.visitName,
          localPoints: item.localPoints,
          visitPoints: item.visitPoints,
          estadio: item.estadio,
          date: item.date,
          horario: item.horario,
          status: item.status
        }));
      }

      return {
        ...state,
        games,
      };
    }
    default:
      return state;
  }
}
