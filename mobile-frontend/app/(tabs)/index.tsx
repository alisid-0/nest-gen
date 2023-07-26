import { StyleSheet, Touchable } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View, } from '@/components/Themed';
import { ScrollView, TouchableOpacity, TextInput, Image} from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';

export default function Home() {

  const [newHouses, setNewHouses] = useState(null)

  useEffect(() => {
    const getNewHouses = async() => {
      const options = {
        method: 'GET',
        url: 'https://realty-mole-property-api.p.rapidapi.com/saleListings',
        params: {
          city: 'Wildwood',
          state: 'MO',
          daysOld: '30',
          limit: '5'
        },
        headers: {
          'X-RapidAPI-Key': '55744ee29emsh8d7f5fc5fdca9b9p176e64jsn68abcf1c6127',
          'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setNewHouses(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getNewHouses()
  }, [])
  
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

        <TouchableOpacity>
          <Text style={styles.scrollViewItem}>Buy</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.scrollViewItem}>Rent</Text>
        </TouchableOpacity>


      </ScrollView>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}

      <View style={styles.leftContainer}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>New in your area</Text>
        <ScrollView horizontal>

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer:{
    width: '80%',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    // textAlign: 'left'
  },
  section: {
    gap: 10,
    flexDirection: 'row',
    height: 50,
    width: '80%',
  },
  scrollview: {
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

