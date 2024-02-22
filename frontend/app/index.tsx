import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Dialog from '@/components/Dialog/Dialog';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

export default function App() {
  const [open,setOpen] = useState<boolean>(false)
  return (
    <View className="flex-1 items-center justify-center bg-[#fafafa]">
      <Card styling="bg-red-400" onPress={() => setOpen(true)}>
        <Text>Open up App.js to start working on your app!</Text>
      </Card>
      <Dialog styling='w-[80%]' open={open} setOpen={setOpen}>
        <Text>This is a dialog!</Text>
      </Dialog>
      <Button onPress={() => console.log('hello')} variant='default'><Text>This is a button</Text></Button>
      <StatusBar style="auto" />
    </View>
  );
}