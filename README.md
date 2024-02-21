# TrakaMobile
<!-- View: This is like a <div> in web development or a container in other UI frameworks. It's used to group and layout other components.

Text: This component is used to display text in your app. It's similar to the <span> element in HTML.

Image: The Image component is used to display images in your app.

ScrollView: This component provides a scrolling container that can contain multiple components and views. It's similar to a <div> with overflow in web development.

TouchableOpacity: This is a component used to provide touchable feedback to users. It's often used to create buttons or interactive elements.

TextInput: This component provides an input field for users to enter text.

FlatList: This component is used to render lists of data. It's more efficient than using ScrollView for large lists because it only renders the items that are currently visible on the screen. -->

## Overview
Traka is an IOS/Android app used to track your daily habits. You can use it to set daily, monthly, and yearly goals for categories such as fitness, education, hygiene, and health. This app is meant to be offline-first meaning that it will sync your results with the cloud periodically whenever a connection is available.

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