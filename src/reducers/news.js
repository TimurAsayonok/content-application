
const initialState = {
  news: [],
  fetching: false,
  fetched: false,
};

export default function (state = initialState, action){
  switch(action.type) {
    case 'FETCH_NEWS_START': 
      return { ...state, fetching: true }
    case 'FETCH_NEWS_SUCCESS':
      return { ...state, fetching: false, fetched: true, articles: action.payload.articles }
    case 'FETCH_NEWS_ERROR':
      return { ...state, error: 'Somthing happened' }
    default: 
      return state;
  }
}