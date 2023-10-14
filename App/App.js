import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen_01 from "./AppClients/Screen_01";
import Screen_02 from "./AppClients/Screen_02";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Screen_01></Screen_01>*/}
      <Screen_02></Screen_02>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
