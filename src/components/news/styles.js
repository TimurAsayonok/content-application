import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  articleContainer: {
    margin: 15
  },
  articleImage: {
    height: 350
  },
  articleTitleText: {
    fontSize: 20,
    letterSpacing: 0.05,
    color: "#000000", 
    fontWeight: '600'
  },
  articleTimeText: {
    fontSize: 15,
    letterSpacing: 0.18,
    color: "#999"
  },
  articleBodyText: {
    marginTop: 12,
    fontSize: 18,
    letterSpacing: 0.05,
    color: "#000000"
  },
  articleTegsText: {
    fontSize: 15,
    letterSpacing: 0.18,
    color: "#999",
    marginTop: 5
  },
  newsContainer: {
    flex: 1, 
    margin: 12
  },
  newsArticleContainer: {
    marginBottom: 12,
    borderColor: '#c9c9c9',
    borderWidth: 1,
    borderRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#ccc',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  newsArticleHeader: {
    flex: 1,
    flexDirection: 'row',
    margin: 8
  },
  newsArticleHeaderTextContainer: {
    paddingLeft: 10,
    alignContent: 'center',
    alignSelf: 'center'
  },
  newsArticleHeaderTextAuthor: {
    fontSize: 15,
    letterSpacing: 0.18,
    fontWeight: '600',
    color: "#000000"
  },
  newsArticleHeaderTextTime: {
    fontSize: 15,
    letterSpacing: 0.18,
    color: "#999"
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 20 
  },
  newsArticleImage: {
    height: 200
  },
  newsArticleTitle: {
    fontSize: 15,
    letterSpacing: 0.18,
    margin: 5,
    color: "#000000"
  }
})

export default Styles