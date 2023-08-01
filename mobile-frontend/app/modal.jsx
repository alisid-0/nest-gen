import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet } from 'react-native'
import { Text, View } from '@/components/Themed'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { LoginContext } from './_layout'
import { FormControl, Input, Button } from 'native-base'
import { Link } from 'expo-router'
import { router } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import {useForm} from 'react-hook-form'
import { FlatList } from 'native-base'
import { Alert } from 'react-native'
import { ScrollView } from 'native-base'

export default function ModalScreen() {
  
  const contextValue = useContext(LoginContext)
  const user = contextValue.user
  const setUser = contextValue.setUser
  const signedIn = contextValue.signedIn
  const setSignedIn = contextValue.setSignedIn

  const [isSigningUp, setIsSigningUp] = useState(false)

  const { register, handleSubmit, setValue } = useForm()

  const [email, setEmail] = useState("")
  const [loginEmail, setLoginEmail] = useState('')
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginPassword, setLoginPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState("")
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [passwordIsValid, setPasswordIsValid] = useState(false)
  const [passwordsMatch, setPasswordsMatch] = useState(false)
  const [homes, setHomes] = useState('')

  useEffect(()=>{
    const getUsers = async()=> {
      const users = await axios.get('http://localhost:3001/api/users')
    }
    getUsers()

  },[])

  useEffect(()=> {
    register('email')
    register('username')
    register('password')
    register('confirmPassword')
  }, [register])

  const onSubmit = async data => {
    if(emailIsValid && passwordIsValid && passwordsMatch) {
      try{
        const response = await axios.post('http://localhost:3001/api/users', data)
        console.log(response.data)
      } catch(err){
        console.error(error)
      }
      
    } else{
      alert('Please enter the fields correctly.')
    }
  }

  const onLogin = async data =>{
    try{
      const loginData = {
        email: loginEmail,
        password: loginPassword
      }
      console.log(loginData)
      const response = await axios.post('http://localhost:3001/api/users/login', loginData)
      console.log(response.data)
      setSignedIn(true)
      setUser(response.data)

    } catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
    const getHomes = async()=>{
      const homesList = await axios.get('http://localhost:3001/api/savedhomes')
      setHomes(homesList.data)
    }

    getHomes()
  }, [user])



  const validateEmail = (email) => {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    return re.test(email)
  }

  
  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return re.test(password)
  }

  
  useEffect(() => {
    setEmailIsValid(validateEmail(email))
    setPasswordIsValid(validatePassword(password))
    setPasswordsMatch(password === confirmPassword)
  }, [email, password, confirmPassword])

  const [newUsername, setNewUsername] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)

  const updateUserInfo = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/users/${user._id}`, 
        { username: newUsername, email: newEmail }
      )
      setUser(response.data)
      setIsUpdating(false)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteAccount = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/users/${user._id}`)
      setSignedIn(false)
      setUser('')
    } catch (error) {
      console.error(error)
    }
  }

  const signOutAccount = () => {
    setSignedIn(false)
    setUser('')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {!signedIn && !isSigningUp && (
        <View style={styles.container}>
          <View style={{marginVertical: 10}}></View>

          <Text style={styles.title}>Login</Text>
          <FormControl as='form' onSubmit={handleSubmit(onLogin)} style={{width: 200, marginTop: 20}}>
            <FormControl.Label>Email</FormControl.Label>
            <Input autoCapitalize= 'none' onChangeText={setLoginEmail} style={{width: 200}}/>
            <FormControl.Label>Password</FormControl.Label>
            <Input autoCapitalize='none' onChangeText={setLoginPassword} type='password'/>
            <Button onPress={handleSubmit(onLogin)} style={{marginTop: 20}}>Log In</Button>
          </FormControl>

          <View style={{marginVertical: 5}}></View>
          <View style={{flexDirection: 'row', gap: 5, marginVertical: 10, alignItems: 'center'}}>
            <View>
              <Text style={{fontStyle: 'italic'}}>Don't have an account? Sign up</Text>
            </View>
            <View>
              <TouchableOpacity onPress={()=>{
                setIsSigningUp(true)
              }}>
                <Text style={{color: 'blue', fontStyle: 'italic'}}>Here</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      )}

      {!signedIn && isSigningUp && (
        <View style={styles.container}>
          <View style={{marginVertical: 10}}></View>
          <Text style={styles.title}>Sign Up with NestGen</Text>
          <FormControl as='form' onSubmit={handleSubmit(onSubmit)} style={{width: 200, marginTop: 20}}>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              autoCapitalize='none'
              onChangeText={text => {
                setValue('email', text)
                setEmail(text)
              }}
              isInvalid={!emailIsValid && email !== ""}
            />
            {!emailIsValid && email !== "" && <FormControl.HelperText style={{color: 'red'}}>Your email is invalid.</FormControl.HelperText>}
            <FormControl.Label>Username</FormControl.Label>
            <Input
              autoCapitalize='none'
              onChangeText={text => {
                setValue('username', text)
                setUsername(text)
              }}
            />
            <FormControl.Label>Password</FormControl.Label>
            <Input
              autoCapitalize='none'
              onChangeText={text => {
                setValue('password', text)
                setPassword(text)
              }}
              type='password'
              isInvalid={!passwordIsValid && password !== ""}
            />
            {!passwordIsValid && password !== "" && <FormControl.HelperText>Password should be at least 8 characters, have a number, a lowercase letter, an uppercase letter, and a special character.</FormControl.HelperText>}
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              autoCapitalize='none'
              onChangeText={text => {
                setValue('confirmPassword', text)
                setConfirmPassword(text)
              }}
              type='password'
              isInvalid={!passwordsMatch && confirmPassword !== ""}
            />
            {!passwordsMatch && confirmPassword !== "" && <FormControl.HelperText>Passwords do not match.</FormControl.HelperText>}
            <Button onPress={handleSubmit(onSubmit)} style={{marginTop: 20}}>Sign Up</Button>
          </FormControl>

          <View style={{marginVertical: 5}}></View>
          <View style={{flexDirection: 'row', gap: 5, marginVertical: 10, alignItems: 'center'}}>
            <View>
              <Text style={{fontStyle: 'italic'}}>Already have an account? Log in</Text>
            </View>
            <View>
              <TouchableOpacity onPress={()=>{
                setIsSigningUp(false)
              }}>
                <Text style={{color: 'blue', fontStyle: 'italic'}}>Here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {signedIn && user && (
        <View style={styles.container}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Welcome, {user.username}!</Text>

          <View style={{width: '75%', gap: 10, backgroundColor: '#f2f2f2', padding: 10, borderRadius: 10, marginBottom: 20}}>
            <Text style={styles.subTitle}>Profile Information</Text>
            <Text>Email: {user.email}</Text>
            <Text>Username: {user.username}</Text>
          </View>

          <View style={{width: '75%', gap: 10, backgroundColor: '#f2f2f2', padding: 10, borderRadius: 10, marginBottom: 20}}>
            <Text style={styles.subTitle}>Saved Homes</Text>
              {homes && homes.map((home, index) => (
              user.saved_homes.includes(home.home_id) ?
                <View key={index} style={{borderRadius: 10, padding: 5}}>
                  <Text>Address: {home.address_line}, {home.city}, {home.state_code} {home.postal_code}</Text>
                  <Text>Price: ${home.price}</Text>
                  <Text>Beds: {home.beds}</Text>
                  <Text>Baths: {home.baths}</Text>
                </View>
              :
                null
            ))}
          </View>


          {!isUpdating && (
            <Button onPress={()=> setIsUpdating(true)}>Update Information</Button>
          )}

          {isUpdating && (
            <FormControl>
              <FormControl.Label>New Username</FormControl.Label>
              <Input
                onChangeText={(val) => setNewUsername(val)}
                autoCapitalize='none'
              />
              <FormControl.Label>New Email</FormControl.Label>
              <Input
                onChangeText={(val) => setNewEmail(val)}
                autoCapitalize='none'
              />
              <View style={{flexDirection: 'row', marginTop: 10, gap: 5}}>
                <Button onPress={()=>{
                  setNewUsername('')
                  setNewEmail('')
                  setIsUpdating(false)
                }}
                variant='outline'
                colorScheme='secondary'
                >Cancel</Button>
                <Button onPress={updateUserInfo}>Save</Button>
              </View>
            </FormControl>
          )}

          <Button
            colorScheme="secondary"
            onPress={() => {
              Alert.alert(
                "Delete Account",
                "Are you sure you want to delete your account? This action cannot be undone.",
                [
                  { text: "Cancel", style: "cancel" },
                  { text: "Delete", style: "destructive", onPress: deleteAccount },
                ],
              )
            }}
          >
            Delete Account
          </Button>

          <Button  
            onPress={() => {
              Alert.alert(
                "Sign Out",
                "Are you sure you want to sign out? You will need to log back in.",
                [
                  { text: "Cancel", style: "cancel" },
                  { text: "Sign Out", style: "destructive", onPress: signOutAccount },
                ],
              )
            }}
          >
            Sign Out
          </Button>

        </View>
      )}


      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    gap: 10,
    paddingVertical: 10
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
  },
  profileInfo: {
    width: '100%',  // adjust as needed
    backgroundColor: '#f2f2f2',  // adjust as needed
    padding: 10,  // adjust as needed
    borderRadius: 10,  // adjust as needed
    marginBottom: 20,  // adjust as needed
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
