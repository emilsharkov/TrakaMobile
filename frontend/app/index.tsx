import Button from '@/components/Button/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/Card/Card';
import Dialog from '@/components/Dialog/Dialog';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Gallery, GalleryItem } from '@/components/Gallery/Gallery';

export default function App() {
  return (
      <Card className='flex-1 w-1/2'>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Text>Card Content</Text>
        </CardContent>
        <CardFooter>
          <Text>Card Footer</Text>
        </CardFooter>
      </Card>
  );
}
