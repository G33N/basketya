import Store from '../store/recipes';

export const initialState = Store;

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case 'MEALS_REPLACE': {
      return {
        ...state,
        meals: action.data,
      };
    }
    case 'RECIPES_REPLACE': {
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
          ingredients: item.ingredients,
          method: item.method,
        }));
      }

      return {
        ...state,
        recipes,
      };
    }
    default:
      return state;
  }
}
