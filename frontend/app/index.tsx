import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Dialog from '@/components/Dialog/Dialog';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Gallery, GalleryItem } from '@/components/Gallery/Gallery';

export default function App() {
  const numColumns = 2
  const horizontal = false
  return (
    // <Gallery isHorizontal={true} numColumns={2}>
    //   <GalleryItem>
    //     <Card>
    //     <Text>Beh</Text>
    //     <Text>Beh</Text>
    //     <Text>Beh</Text>
    //     <Text>Beh</Text>
    //     <Text>Beh</Text>
    //     </Card>
    //   </GalleryItem>
    //   <GalleryItem>
    //     <Card><Text>Beh</Text></Card>
    //   </GalleryItem>
    //   <GalleryItem>
    //     <Card><Text>Beh</Text></Card>
    //   </GalleryItem>
    // </Gallery>
    <ScrollView style={ { flex: 1, alignSelf: 'stretch' }}>
      <View
        style={[
          {
            flex: 1,
            flexDirection: horizontal ? 'column' : 'row',
          },
        ]}
      >
        {Array.from(Array(numColumns), (_, num) => {
          return (
            <View
              style={{
                flex: 1 / numColumns,
                flexDirection: horizontal ? 'row' : 'column',
              }}
            >
              <View>
                <Card><Text>Beh</Text></Card>
              </View>
              <View>
                <Card>
                <Text>Beh</Text>
                <Text>Beh</Text>
                <Text>Beh</Text>
                </Card>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
