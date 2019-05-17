import { Firebase, FirebaseRef } from '../lib/firebase';

/**
  * Get Games from firebase REALTIME DATABASE
  */
export function getGames() {
  if (Firebase === null) return () => new Promise(resolve => resolve());
  // call firebasref and get the child games in the database
  return dispatch => new Promise(resolve => FirebaseRef.child('games')
    .on('value', (snapshot) => {
      const data = snapshot.val() || [];
      // return the action.type to the store and data
      return resolve(dispatch({ type: 'GAMES_REPLACE', data }));
    })).catch((err) => { throw err.message; });
}
