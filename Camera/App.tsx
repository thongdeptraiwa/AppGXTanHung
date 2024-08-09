import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import AppNavigation from './src/navigations/AppNavigation';
import QR from './src/components/user/QR';
import Home from './src/components/user/Home';

function App(): React.JSX.Element {
  return (
    // <SafeAreaView style={styles.container}>
    //   <StatusBar />  keytool -export -rfc -keystore gxtanhungapk.jks -alias gxtanhungapk -file gxtanhungapk.pem
    // </SafeAreaView> 
    <AppNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
