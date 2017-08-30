import gql from 'graphql-tag';

export const getData = ({categoryName}) => {
  //console.log(categoryName);
  const elements = false ? `t:Article service: ${categoryName} ` : `t: Article`;

  qql`
    query DataQuery($type : Article $service: ${categoryName})
  `

  return gql`{
    articles(${elements}){
      title
      id
      cid
      ts
      redacted_title
      img {
        url
        h
        w
      }
      entities {
        author
        description
        title
      }
      original_cid
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
  }`;
}