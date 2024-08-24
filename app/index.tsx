import { StyleSheet,View,Text,TouchableOpacity } from "react-native";
import { PortalRoot,Portal } from "@/components/Portal/Portal";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/Card/Card';
import PortalExample from "@/components/Portal/Portal.example";

export default function App() {
  return (
    // <View className="flex-1 justify-center items-center bg-white">
    //       <TouchableOpacity className="border bg-green-100">
    //         <Text>Button</Text>
    //       </TouchableOpacity>
    // </View>
    <PortalExample/>
  )
}