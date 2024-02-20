# TrakaMobile

<!-- View: This is like a <div> in web development or a container in other UI frameworks. It's used to group and layout other components.

Text: This component is used to display text in your app. It's similar to the <span> element in HTML.

Image: The Image component is used to display images in your app.

ScrollView: This component provides a scrolling container that can contain multiple components and views. It's similar to a <div> with overflow in web development.

TouchableOpacity: This is a component used to provide touchable feedback to users. It's often used to create buttons or interactive elements.

TextInput: This component provides an input field for users to enter text.

FlatList: This component is used to render lists of data. It's more efficient than using ScrollView for large lists because it only renders the items that are currently visible on the screen.

StyleSheet: This isn't a component per se, but it's a very important part of React Native development. StyleSheet is used to define styles for your components using JavaScript objects. -->

<!-- View:
javascript
Copy code
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is a View component!</Text>
    </View>
  );
};

export default App;
Text:
javascript
Copy code
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is a Text component!</Text>
    </View>
  );
};

export default App;
Image:
javascript
Copy code
import React from 'react';
import { View, Image } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={{ width: 150, height: 150 }}
      />
    </View>
  );
};

export default App;
ScrollView:
javascript
Copy code
import React from 'react';
import { ScrollView, View, Text } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
        <Text>Item 4</Text>
        <Text>Item 5</Text>
      </View>
    </ScrollView>
  );
};

export default App;
TouchableOpacity:
javascript
Copy code
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => alert('Button pressed')}>
        <View style={{ backgroundColor: 'blue', padding: 10 }}>
          <Text style={{ color: 'white' }}>Press me</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default App;
TextInput:
javascript
Copy code
import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
        placeholder="Type here..."
        onChangeText={setText}
        value={text}
      />
      <Text>You typed: {text}</Text>
    </View>
  );
};

export default App;
FlatList:
javascript
Copy code
import React from 'react';
import { FlatList, View, Text } from 'react-native';

const data = [
  { key: 'item1', name: 'Item 1' },
  { key: 'item2', name: 'Item 2' },
  { key: 'item3', name: 'Item 3' },
  { key: 'item4', name: 'Item 4' },
  { key: 'item5', name: 'Item 5' },
];

const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
};

export default App; -->

## Tech Stack
- App: React-Native, Expo, TypeScript, Nativewind, RTK Query, SQLite
- Backend: Go, Gin
- Database: Postgres

## Hosting
- Backend: https://fly.io/launchpad or https://railway.app
- Database: https://neon.tech/

## How To Run Myself
1. Run ```git clone https://github.com/emilsharkov/TrakaMobile``` to clone the repository
2. Run ```npm install``` to install any dependencies
3. Run ```npm start``` to start the expo server