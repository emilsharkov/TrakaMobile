import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/Card/Card';
import { Portal, PortalRoot } from "@/components/Portal/Portal";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function PortalExample() {
  const [open,setOpen] = useState<boolean>(false)
  const [open2,setOpen2] = useState<boolean>(false)

  return (
    <>
      <PortalRoot>
        <View className="flex-1 justify-center items-center bg-white">
          <TouchableOpacity className="border bg-green-100" onPress={() => setOpen(!open)}>
            <Text>Button</Text>
          </TouchableOpacity>
          <Portal open={open}>
            <TouchableOpacity onPress={() => setOpen(!open)} className="bg-purple-500 p-10 border">
              <Card onPress={() => setOpen2(!open2)}>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <Portal open={open2}>
                    <TouchableOpacity className="border bg-yellow-100 p-20" onPress={() => setOpen2(!open2)}>
                      <Text className="bg-red-500">Card Content</Text>
                    </TouchableOpacity>
                  </Portal>
                </CardContent>
                <CardFooter>
                  <Text>Card Footer</Text>
                </CardFooter>
              </Card>
            </TouchableOpacity>
          </Portal>
        </View>
      </PortalRoot>
    </>    
  )
}