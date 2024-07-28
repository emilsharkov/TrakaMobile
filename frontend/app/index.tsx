import { StyleSheet,View,Text,TouchableOpacity } from "react-native";

export default function App() {
  return (
    <>
      <View className="flex-1">
        <TouchableOpacity onPress={() => console.log('1')} style={StyleSheet.absoluteFill} className="z-[16] bg-green-300">
          <Text>Blue</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('2')} style={StyleSheet.absoluteFill} className="z-[15] bg-red-100">
        </TouchableOpacity>
      </View>
    </>    
  )
}