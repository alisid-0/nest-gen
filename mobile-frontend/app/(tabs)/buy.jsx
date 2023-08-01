import { StyleSheet, TouchableOpacity, Image} from 'react-native'
import { ScrollView } from 'native-base'
import { Text, View } from '@/components/Themed'
import axios from 'axios'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { Spinner } from 'native-base'
import {bigHomesList} from '../homeobjects'
import { router } from 'expo-router'

export default function Buy() {

  const [location, setLocation] = useState(null)
  const [address, setAddress] = useState(null)
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [errorMsg, setErrorMsg] = useState(null)
  const [houses,setHouses] = useState(null)
  const [home, setHome] = useState(null)

  function formatString(str) {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

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
    }

    const getHouses = async()=>{
      const options = {
        method: 'GET',
        url: 'https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale',
        params: {
          city: city,
          state_code: state,
          offset: '0',
          limit: '200',
          sort: 'relevance',
          is_new_plan: 'false'
        },
        headers: {
          'X-RapidAPI-Key': '55744ee29emsh8d7f5fc5fdca9b9p176e64jsn68abcf1c6127',
          'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        }
      }
      
      
      try {
        const response = await axios.request(options)
        console.log(response.data.properties)
        setHouses(response.data.properties)
      } catch (error) {
        console.error(error)
      }
    }

    if(city && state){
      setTimeout(()=>{
        // getHouses()
        console.log(bigHomesList)
        setHouses(bigHomesList) //
      }, 3000)
    }

  },[city,state])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{marginVertical: 10}}></View>
      <Text style={styles.title}>Homes Listed for Sale</Text>
      <View style={{marginVertical: 20}}></View>
      <View style={styles.container}>
        {!houses && (
          <Spinner color='emerald.500'></Spinner>
        )}
      </View>
      <View>
        {houses && houses.slice(0,15).map((house,index)=> (
          (house.building_size && house.building_size.size && house.thumbnail && (
            <View style={{ width: '100%',shadowColor: '#171717', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3, padding: 10, borderRadius: 10, borderColor: 'black',  marginBottom: 10}} key={index}>
              <TouchableOpacity style={{width: '100%'}} onPress={()=> {
                setHome(house)
                router.push({ pathname: 'selected_home', params: {home: JSON.stringify(house)}})
              }}>
                <Image source={{uri:`${house.thumbnail}`}} style={{width: '90%', aspectRatio: 16/9}}></Image>
                <View style={{width: '90%', marginTop: 15, gap: 7}}>
                  <View style={{flexDirection:'row', gap: 10, alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>${numberWithCommas(house.price)}</Text>
                    <Text style={{marginBottom: 1}}>{house.beds} bd | {house.baths} ba | {house.building_size.size} sqft </Text>
                  </View>
                  <Text>{house.address.line}, {house.address.city} {house.address.state_code} {house.address.postal_code}</Text>
                  <Text style={{fontWeight: 'bold'}}>{formatString(house.prop_type)} | {formatString(house.prop_status)}</Text>
                </View>
              </TouchableOpacity>

            </View>
          ) )

        ))}
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  leftContainer: {
    width: '90%',
    alignItems: 'flex-start',
    
  },
  leftContainerGap: {
    width: '90%',
    alignItems: 'flex-start',
    gap: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separatorTop: {
    marginTop: 10,
    height: 1,
    width: '80%',
  },
  separatorBottom: {
    marginBottom: 10,
    height: 1,
    width: '80%',
  },
  separatorFull: {
    marginBottom: 10,
    height: 1,
    width: '100%',
  }
})