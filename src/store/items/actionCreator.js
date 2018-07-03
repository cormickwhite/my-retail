import { requestItems } from '../../services/itemsService';

export function fetchItem() {
  return dispatch => {
    return requestItems().then(resp => {
      dispatch({
        type: 'FETCH_ITEM',
        payload: resp
      });
    });
  };
}
