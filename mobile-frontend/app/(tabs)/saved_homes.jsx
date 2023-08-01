import { StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'
import { ScrollView } from 'native-base'
import * as Location from 'expo-location'
import { Spinner } from 'native-base'
import {bigHomesList} from '../homeobjects'
import { useRouter, Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'
import { Text, View } from '@/components/Themed'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { LoginContext } from '../_layout'
import { FormControl, Input, Button } from 'native-base'
import {useForm} from 'react-hook-form'
import { FlatList } from 'native-base'
import { Alert } from 'react-native'


export default function SavedHomes() {

  const contextValue = useContext(LoginContext)
  const user = contextValue.user
  const setUser = contextValue.setUser
  const signedIn = contextValue.signedIn
  const setSignedIn = contextValue.setSignedIn
  const [homes, setHomes] = useState('')
  const [home, setHome] = useState('')

  function formatString(str) {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  useEffect(()=>{
    const getHomes = async()=>{
      const homesList = await axios.get('http://localhost:3001/api/savedhomes')
      console.log(homesList.data)
      setHomes(homesList.data)
    }
    getHomes()

  },[])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{marginVertical: 10}}></View>
      <View style={{marginVertical: 20}}></View>
      <View style={styles.container}>
        {!homes && (
          <Spinner color='emerald.500'></Spinner>
        )}
      </View>
      <View>
        {user && homes && homes.map((house, index) => (
          user.saved_homes.includes(home.home_id) ?
          (house.size_sqft && house.thumbnail && (
            <View style={{ width: '100%',shadowColor: '#171717', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3, padding: 10, borderRadius: 10, borderColor: 'black',  marginBottom: 10}} key={index}>
              <TouchableOpacity style={{width: '100%'}} onPress={()=> {
                setHome(house)
                router.push({ pathname: 'selected_home', params: {home: JSON.stringify(house)}})
              }}>
                <Image source={{uri:`${house.thumbnail}`}} style={{width: '90%', aspectRatio: 16/9}}></Image>
                <View style={{width: '90%', marginTop: 15, gap: 7}}>
                  <View style={{flexDirection:'row', gap: 10, alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>${numberWithCommas(house.price)}</Text>
                    <Text style={{marginBottom: 1}}>{house.beds} bd | {house.baths} ba | {house.size_sqft} sqft </Text>
                  </View>
                  <Text>{house.address_line}, {house.city} {house.state_code} {house.postal_code}</Text>
                  <Text style={{fontWeight: 'bold'}}>{formatString(house.prop_type)} | {formatString(house.prop_status)}</Text>
                </View>
              </TouchableOpacity>

            </View>
          ) )
          :
            null
        ))}

        {!user && (
          <View style={{width: '80%'}}>
            <Text style={styles.title}>Please sign in to save and view homes.</Text>
          </View>
        )}
        {/* {homes && homes.map((house,index)=> (
          (house.size_sqft && house.thumbnail && (
            <View style={{ width: '100%',shadowColor: '#171717', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3, padding: 10, borderRadius: 10, borderColor: 'black',  marginBottom: 10}} key={index}>
              <TouchableOpacity style={{width: '100%'}} onPress={()=> {
                setHome(house)
                router.push({ pathname: 'selected_home', params: {home: JSON.stringify(house)}})
              }}>
                <Image source={{uri:`${house.thumbnail}`}} style={{width: '90%', aspectRatio: 16/9}}></Image>
                <View style={{width: '90%', marginTop: 15, gap: 7}}>
                  <View style={{flexDirection:'row', gap: 10, alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>${numberWithCommas(house.price)}</Text>
                    <Text style={{marginBottom: 1}}>{house.beds} bd | {house.baths} ba | {house.size_sqft} sqft </Text>
                  </View>
                  <Text>{house.address_line}, {house.city} {house.state_code} {house.postal_code}</Text>
                  <Text style={{fontWeight: 'bold'}}>{formatString(house.prop_type)} | {formatString(house.prop_status)}</Text>
                </View>
              </TouchableOpacity>

            </View>
          ) )

        ))} */}
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',

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
    textAlign: 'center'
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