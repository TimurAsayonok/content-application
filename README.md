# ContentApplication
The application is designed as a test task. 
The main idea is to build applications for display news.

# Navigation
For navigation in the application is used [react-native-navigation](https://github.com/wix/react-native-navigation)

# Redux and GraphQl
To control the store, [Redux](https://github.com/reactjs/react-redux) and the Graphql API are used to get data from the server
To work with the GraphQl API is used [Apollo](https://github.com/apollographql/react-apollo)

# Persist the state
To Persist and rehydrate a redux store. is used [Redux-persist](https://github.com/rt2zz/redux-persist)

# Main features
- User login is persisted. You don't need to go through the Login Screen every time when you open the application.
If you logout the application by clicking the "Exit" button on the "About" screen, the Store will be cleared.

- Last News are persisted. 
If you don't have access to the Internet, the latest news will be displayed on the "News" screen.

# Demo
You can clone this repo and execute the command `sudo npm install`,  `react-native run-ios` or `react-native run-android` from the folder where the code is located

![alt text](https://github.com/TimurAsayonok/ContentApplication/blob/master/demo/democa.gif)
