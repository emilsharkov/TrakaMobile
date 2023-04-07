import { Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import Route from './Components/Routing/Route'
import Router from './Components/Routing/Router'

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Router>
          <Route to="home" component={<Text>Bello</Text>} />
          <Route to="activity" component={<Text>Hello</Text>} />
          <Route to="workout" component={<Text>Tello</Text>} />
        </Router>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
export default App
