import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabFourScreen() {
  return (
    <View style={styles.container}>
      <Image 
        style={{ width: 400, height: 700 }}
        source={require('@/assets/images/settings.png')} 
      />
      {/* <Text style={styles.title}>Tab FOURRRR</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/four.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 90,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
