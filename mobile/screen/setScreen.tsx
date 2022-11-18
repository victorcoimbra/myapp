import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function SetScreen() {
  return (

      <View style={styles.container}>
        <Text>Set Screen</Text>
        <StatusBar style="auto" />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
