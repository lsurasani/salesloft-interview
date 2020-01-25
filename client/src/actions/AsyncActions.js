import * as actions from './Actions'

export const creds = { credentials: 'same-origin' };

export function fetchPeople(page) {
  let url = '/api/people'
  if (page) { url += `?page=${page}` }
  return dispatch => {
    return fetch(url, creds).
      then(response => response.json()).
      then(people => dispatch(actions.receivePeople(people)));
  }
}