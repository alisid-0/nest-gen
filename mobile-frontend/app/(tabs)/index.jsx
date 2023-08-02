import { StyleSheet, Touchable } from 'react-native'

import EditScreenInfo from '@/components/EditScreenInfo'
import { Text, View, } from '@/components/Themed'
import { TouchableOpacity, TextInput, Image} from 'react-native'
import axios from 'axios'
import { useRouter, Link, router } from 'expo-router'
import { useState, useEffect, useContext } from 'react'
import * as Location from 'expo-location'
import { newHomesList } from '../homeobjects'
import { ScrollView } from 'native-base'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { LoginContext } from '../_layout'
import { useRef } from 'react'

export default function Home() {

  const contextValue = useContext(LoginContext)
  const user = contextValue.user
  const signedIn = contextValue.signedIn

  const houses = newHomesList
  
  // console.log(houses)
  const [newHouses, setNewHouses] = useState(newHomesList)
  const [searchHouses, setSearchHouses] = useState(null)
  const [home, setHome] = useState(null)

  const [location, setLocation] = useState(null)
  const [address, setAddress] = useState(null)
  const [city, setCity] = useState('')
  const [searchedCity, setSearchedCity] = useState('')
  const [searchInput, setSearchInput] = useState('')
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

    console.log(newHouses)
   
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
      // getSearchHouses()
    }

  },[city,state])

  const getSearchHouses = async(searchCity, searchState)=>{
    const options = {
      method: 'GET',
      url: 'https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale',
      params: {
        city: searchCity,
        state_code: searchState,
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
      setSearchHouses(response.data.properties)
    } catch (error) {
      console.error(error)
    }
  }

  const onSearch = async () => {
    const [searchCity, searchState] = searchInput.split(", ").map(item => item.trim())
    getSearchHouses(searchCity, searchState)
    
    try {
      const searchResponse = await axios.post('http://localhost:3001/api/search/', {
        query: searchInput
      })
      console.log(searchResponse.data)
  
      // get the id of the newly created search
      const searchId = searchResponse.data.id
  
      if (signedIn && user){
        const userSearches = user.searches; // get user's current searches
        axios.put(`http://localhost:3001/api/users/${user._id}`, { searches: [...userSearches, searchInput] })
          .then(userResponse => {
              console.log(userResponse.data);
          })
          .catch(error => {
              console.log('Error updating user:', error);
          });
      }
  
    } catch (error) {
      console.error('Error creating new search:', error)
    }
  }
  
  
  
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Getting Started</Text>

      <View style={styles.section}>
        <TextInput style={styles.input} placeholder='City, State' onChangeText={text => setSearchInput(text)} value={searchInput}/>
        <TouchableOpacity onPress={onSearch}>
          <Image source={require('../../assets/images/search.png')} style={styles.searchImg}/>
        </TouchableOpacity>
      </View>

      <View style={styles.leftContainer}>
        <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 15}}>New in your area</Text>
        <ScrollView horizontal style={{gap:5}} showsHorizontalScrollIndicator= 'false'>
          {!searchHouses && newHouses && (
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
          {searchHouses &&  (
            searchHouses.map((house,index)=>(
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
      {!searchHouses && newHouses && location && (
        <View style={{width: '100%', height: 230, marginTop: 10}}>
          <MapView
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}        
          style={styles.map}>
            {newHouses && newHouses.map((house,index)=> (
              <Marker key={index} coordinate={{latitude: house.address.lat, longitude: house.address.lon}}
              onPress={()=> {
                setHome(house)
                router.push({ pathname: 'selected_home', params: {home: JSON.stringify(house)}})
              }}></Marker>
            ))}
          </MapView>
        </View>
      )}

      {searchHouses && newHouses && location && (
        <View style={{width: '100%', height: 230, marginTop: 10}}>
          <MapView
          initialRegion={{
            latitude: searchHouses[0].address.lat,
            longitude: searchHouses[0].address.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}        
          style={styles.map}>
            {searchHouses && searchHouses.map((house,index)=> (
              <Marker key={index} coordinate={{latitude: house.address.lat, longitude: house.address.lon}}
              onPress={()=> {
                setHome(house)
                router.push({ pathname: 'selected_home', params: {home: JSON.stringify(house)}})
              }}></Marker>
            ))}
          </MapView>
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


