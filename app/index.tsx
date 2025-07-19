import AppBar from '@/components/App';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Notes from './notes';
import Profile from './profile';
import Settings from './settings';


const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <AppBar />
      <Notes/>
      <Profile/> 
      <Settings/>
   
    </SafeAreaProvider>
  );
};

export default App;