/* eslint-disable react/function-component-definition */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createStackNavigator();

// const firebaseConfig = {
//   apiKey: 'AIzaSyDtjJ03MO3lA_FrdVn8umkdiVS6uB3IKm4',
//   authDomain: 'memoapp-3cef6.firebaseapp.com',
//   projectId: 'memoapp-3cef6',
//   storageBucket: 'memoapp-3cef6.appspot.com',
//   messagingSenderId: '698520717147',
//   appId: '1:698520717147:web:10918b29879e303d073c7e',
// };

// if (firebase.apps.length === 0){
//   firebase.initializeApp(firebaseConfig);
// }

// export default function App(){
//   return(
//     <MemoDetailScreen/>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SignUp'
        screenOptions={{
          headerStyle: { backgroundColor: '#1A9DBD'},
          headerTitleStyle: { color: 'white'},
          headerTitle: 'Memo App',
          headerTintColor: 'white',
          headerBackTitle: 'Back',
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
