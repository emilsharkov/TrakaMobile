import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default registerRootComponent(App)