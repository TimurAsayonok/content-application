import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  text: {
    fontSize: 20,
    letterSpacing: 0.05,
    color: "#000000"
  },
  container: {
    flex: 1,
    marginBottom: 12,
    marginLeft: 20
  },
  categoryContainer: {
    flexDirection: 'row',
    borderBottomColor: '#c9c9c9',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center'
  },
  categoryTestContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  categoryText: {
    fontSize: 21,
    letterSpacing: 0.36,
    color: '#41424e'
  },
  image: {
    justifyContent: 'center',
    marginRight: 15 
  }
})

export default Styles