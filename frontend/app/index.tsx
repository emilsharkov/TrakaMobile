import Card from '@/components/Card/Card';
import Dialog from '@/components/Dialog/Dialog';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

export default function App() {
  const [open,setOpen] = useState<boolean>(false)
  return (
    <View className="flex-1 items-center justify-center bg-[#fafafa]">
      <Card onPress={() => setOpen(true)}>
        <Text>Open up App.js to start working on your app!</Text>
      </Card>
      <Dialog isOpen={open}>
        <Text>This is a dialog!</Text>
      </Dialog>
      <StatusBar style="auto" />
    </View>
  );
}