import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
function Screen({children}) {
    return <SafeAreaView styles={styles.screen}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default Screen;