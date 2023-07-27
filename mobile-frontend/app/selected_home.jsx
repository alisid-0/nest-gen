import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useRoute } from '@react-navigation/native';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import {WebView} from 'react-native-webview'

function SelectedHome() {

  const route = useRoute()
  const {home} = route.params

  const house = JSON.parse(home)
  const house_id = house.property_id.slice(1)
  console.log(house_id)

  console.log(house)

  function formatString(str) {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  useEffect(() =>{

  },[])
  
  

  return (
    <View style={styles.container}>

      <View>
        <Image source={{uri:`${house.thumbnail}`}} style={{width: '100%', aspectRatio: 16/9}}></Image>
      </View>

      <View style={{width: '90%', marginVertical: 15, gap: 7}}>
        <View style={{flexDirection:'row', gap: 10, alignItems: 'flex-end'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>${house.price}</Text>
          <Text style={{marginBottom: 1}}>{house.beds} bd | {house.baths} ba | {house.building_size.size} sqft </Text>
        </View>
        <Text>{house.address.line}, {house.address.city} {house.address.state_code} {house.address.postal_code}</Text>
        <Text style={{fontWeight: 'bold'}}>{formatString(house.prop_type)} | {formatString(house.prop_status)}</Text>
      </View>

      <View style={{width: '90%', alignItems: 'flex-start'}}>
        <Button>View Listing</Button>
        
      </View>
      <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>Hello world</h1>' }}
      />

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default SelectedHome