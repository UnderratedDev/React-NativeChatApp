import React from 'react';

import {
  AppRegistry,
  Platform
} from 'react-native';

import {
  Router,
  Scene
} from 'react-native-router-flux';

import Home from './src/components/Home';
import Chat from './src/components/Chat';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Scene key = 'root' style = { { paddingTop : Platform.OS === 'ios' ? 64 : 54 } }>
          <Scene key = 'home' component = { Home } title = 'Home' />
          <Scene key = 'chat' component = { Chat } title = 'Chat' />
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent ('ChatApp', () => App);

export default App;