import gql from 'graphql-tag';
import client from '../../client';
import { fetchNewsQuery } from '../graphql/queries'
import * as Actions from '../../constants/actions'

export function fetchNews(serviceName) {
  return (dispatch, getState) => {
    dispatch({ type:Actions.FETCH_NEWS_START });
    client.query({
      query: fetchNewsQuery,
      variables: { serv: serviceName }
    })
    .then((response) => {
      if(response.data){
        dispatch({ type: Actions.FETCH_NEWS_SUCCESS, payload: response.data });
      } else {
        dispatch({ type: Actions.FETCH_NEWS_ERROR });
      }
    })
    .catch((error) => {
      if (error.message === 'Network error: Network request failed'){
        dispatch({ type: Actions.FETCH_NEWS_SUCCESS, payload: getState().news})
      }
    })
  }
}