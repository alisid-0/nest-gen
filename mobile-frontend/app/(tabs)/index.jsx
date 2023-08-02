import { StyleSheet, Touchable } from 'react-native'

import EditScreenInfo from '@/components/EditScreenInfo'
import { Text, View, } from '@/components/Themed'
import { TouchableOpacity, TextInput, Image} from 'react-native'
import axios from 'axios'
import { useRouter, Link, router } from 'expo-router'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { newHomesList } from '../homeobjects'
import { ScrollView } from 'native-base'
import MapView from 'react-native-maps'

export default function Home() {

  const houses = newHomesList
  
  // console.log(houses)
  const [newHouses, setNewHouses] = useState(newHomesList)
  const [home, setHome] = useState(null)

  const [location, setLocation] = useState(null)
  const [address, setAddress] = useState(null)
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [errorMsg, setErrorMsg] = useState(null)


  useEffect(()=>{
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      let address = await Location.reverseGeocodeAsync({latitude: location.coords.latitude, longitude: location.coords.longitude})
      setLocation(location)
      setAddress(address)
      let text = 'Waiting..'
      if (errorMsg) {
        text = errorMsg
      } else if (location) {
        text = location
        text2 = (address[0].city)
        text3 = (address[0].region)
        console.log(text)
        setCity(text2)
        setState(text3)
      }
    })()

   
  },[])

  useEffect(()=>{
    if(city && state){
      console.log(city)
      console.log(state)
      console.log(location)
    }

    const getNewHouses = async()=>{
      const options = {
        method: 'GET',
        url: 'https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale',
        params: {
          city: city,
          state_code: state,
          offset: '0',
          limit: '10',
          sort: 'relevance'
        },
        headers: {
          'X-RapidAPI-Key': '55744ee29emsh8d7f5fc5fdca9b9p176e64jsn68abcf1c6127',
          'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        }
      }
      
      try {
        const response = await axios.request(options)
        console.log(response.data.properties)
        setNewHouses(response.data.properties)
      } catch (error) {
        console.error(error)
      }
    }

    if(city && state){
      // getNewHouses()
    }

  },[city,state])

  

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Getting Started</Text>

      <View style={styles.section}>
        <TextInput style={styles.input} placeholder='Search housing'/>
        <TouchableOpacity>
          <Image source={require('../../assets/images/search.png')} style={styles.searchImg}/>
        </TouchableOpacity>
      </View>

      <View style={styles.leftContainer}>
        <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 15}}>New in your area</Text>
        <ScrollView horizontal style={{gap:5}} showsHorizontalScrollIndicator= 'false'>
          {newHouses && (
            newHouses.map((house,index)=>(
              house.thumbnail && (house.beds) && (

                <TouchableOpacity key={index} style={{paddingHorizontal: 10, }}
                  onPress={()=> {
                    setHome(house)
                    router.push({ pathname: 'selected_home', params: {home: JSON.stringify(house)}})
                  }} 
                  >
                  <View style={{backgroundColor:'white', borderRadius: 10, overflow: 'hidden'}}>
                    <Image 
                      source={{uri:`${house.thumbnail}`}} 
                      style={{width: 250, aspectRatio: 16/9}}
                    />
                    <Text 
                      style={{
                        position: 'absolute', 
                        top: 0, 
                        color: 'white', 
                        backgroundColor: 'rgba(0,0,0,0.2)', 
                        paddingHorizontal: 5, 
                        paddingVertical: 2,
                        width: 250
                      }}
                    >
                      {house.beds} beds, {house.baths} baths
                    </Text>
                    <Text 
                      style={{
                        position: 'absolute', 
                        bottom: 0, 
                        color: 'white', 
                        backgroundColor: 'rgba(0,0,0,0.6)', 
                        paddingHorizontal: 5, 
                        paddingVertical: 2,
                        width: 250
                      }}
                    >
                      {house.address.line} {house.address.city}, {house.address.state_code}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            ))
          )}
        </ScrollView>
      </View>
      {location && (
        <View style={{width: '100%', height: 230, marginTop: 10}}>
          <MapView
          initalRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}        
          style={styles.map}></MapView>
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    backgroundColor: 'white'
  },
  map: {
    width: '100%',
    height: '100%'
  },
  leftContainer:{
    width: '100%',
    marginLeft: 50
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
})


