import { Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Route from './Components/Routing/Route'
import Router from './Components/Routing/Router'
import Home from './Components/Screens/Home'
import Workout from './Components/Screens/Workout'
import Activity from './Components/Screens/Activity'

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Router>
          <Route to="Home" component={<Home/>} />
          <Route to="Workout" component={<Workout/>} />
          <Route to="Activity" component={<Activity/>} />
        </Router>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
export default App
