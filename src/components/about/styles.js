import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  text: {
    fontSize: 20,
    letterSpacing: 0.05,
    color: "#000000"
  },
  constainer: { 
    flex: 1,
    margin: 20
  },
  buttonContainer: {
    flex: 1,
    height: 35,
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#d92b2b',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.05,
    textAlign: "center",
    color: "#ffffff"
  }
})

export default Styles