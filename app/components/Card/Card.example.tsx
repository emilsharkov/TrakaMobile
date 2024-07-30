import React from 'react';
import { Text } from 'react-native';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/Card/Card';

export default function CardExample() {
  return (
      <Card>
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
