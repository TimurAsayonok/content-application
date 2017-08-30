import gql from 'graphql-tag';
import client from '../../client';
import { fetchNewsQuery } from '../graphql/queries'

export function fetchNews(serviceName) {
  return (dispatch) => {
    dispatch({type:'FETCH_NEWS_START'});
    client.query({
      query: fetchNewsQuery,
      variables: { serv: serviceName }
    }).then((response) => {
      if(response.data){
        dispatch({type: 'FETCH_NEWS_SUCCESS', payload: response.data});
      } else {
        dispatch({ type: 'FETCH_NEWS_ERROR'});
      }
    })
  }
}