import { StyleSheet, Touchable } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View, } from '@/components/Themed';
import { ScrollView, TouchableOpacity, TextInput, Image} from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Getting Started</Text>

      <View style={styles.section}>
        <TextInput style={styles.input} placeholder='Search housing'/>
        <TouchableOpacity>
          <Image source={require('../../assets/images/search.png')} style={styles.searchImg}/>
        </TouchableOpacity>
      </View>
      

      <ScrollView horizontal contentContainerStyle={styles.scrollview}>

        <TouchableOpacity 
        >
          <Text style={styles.scrollViewItem}>Buy</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.scrollViewItem}>Rent</Text>
        </TouchableOpacity>


      </ScrollView>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    // flex: 1,
    gap: 5,
    flexDirection: 'row',
    height: 50,
    width: '80%',
  },
  scrollview: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    height: 50,
    width: '100%',
  },
  searchImg: {
    height: 40,
    width: 40,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  input: {
    flex: 4,
    height: 40,
    borderWidth: 0.3,
    padding: 10,
    borderRadius: 10,
  },
  scrollViewItem: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    borderWidth: 0.3,
    borderRadius: 10
  }
});

