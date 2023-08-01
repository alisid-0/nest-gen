import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { LoginContext } from './_layout';
import { FormControl, Input } from 'native-base';
import { Link } from 'expo-router';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function ModalScreen() {
  
  const contextValue = useContext(LoginContext);
  const user = contextValue.user;
  const setUser = contextValue.setUser;
  const signedIn = contextValue.signedIn
  const setSignedIn = contextValue.setSignedIn;

  useEffect(()=>{
    const getUsers = async()=> {
      const users = await axios.get('http://localhost:3001/api/users')
      console.log(users.data)
    }
    getUsers()
  },[])

  return (
    <View style={styles.container}>
      
      {!signedIn && (
        <View style={styles.container}>
          <View style={{marginVertical: 10}}></View>

          <Text style={styles.title}>Login</Text>
          <FormControl style={{width: 200, marginTop: 20}}>
            <FormControl.Label>Username</FormControl.Label>
            <Input style={{width: 200}}/>
            <FormControl.Label>Password</FormControl.Label>
            <Input/>
          </FormControl>

          <View style={{flexDirection: 'row', gap: 5, marginVertical: 10, alignItems: 'center'}}>
            <View>
              <Text>Or Sign Up</Text>
            </View>
            <View>
              <TouchableOpacity onPress={()=>{
                router.push({ pathname: 'rent'})
              }}>
                <Text style={{color: 'blue'}}>Here</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      )}

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
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
