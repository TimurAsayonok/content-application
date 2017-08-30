import { gql } from 'react-apollo';

export const fetchNewsQuery = gql`
  query NewsQuery($serv: [ServiceName]){
    articles(t: Article, service: $serv){
      title
      id
      ts
      img {
        url
      }
      entities {
        author
        description
        title
      }
      t
      tags
      author {
        img
        name
      }
      body(t: Plain){
        data
      }
    }
  }
`;