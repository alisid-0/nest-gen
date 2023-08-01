import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { LoginContext } from './_layout';
import { FormControl, Input, Button } from 'native-base';
import { Link } from 'expo-router';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import {useForm} from 'react-hook-form'

export default function ModalScreen() {
  
  const contextValue = useContext(LoginContext);
  const user = contextValue.user;
  const setUser = contextValue.setUser;
  const signedIn = contextValue.signedIn
  const setSignedIn = contextValue.setSignedIn;

  const [isSigningUp, setIsSigningUp] = useState(false)

  const { register, handleSubmit, setValue } = useForm()

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  useEffect(()=>{
    const getUsers = async()=> {
      const users = await axios.get('http://localhost:3001/api/users')
      console.log(users.data)
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
        email: data.email,
        password: data.password
      }
      const response = await axios.post('http://localhost:3001/api/users/login', loginData)
      console.log(response.data)
      setSignedIn(true)
      setUser(response.data)
    } catch(err){
      console.error(err)
    }
  }

  const validateEmail = (email) => {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(email);
  };

  // Function to validate password
  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
  };

  // Use useEffect to perform checks whenever inputs change
  useEffect(() => {
    setEmailIsValid(validateEmail(email));
    setPasswordIsValid(validatePassword(password));
    setPasswordsMatch(password === confirmPassword);
  }, [email, password, confirmPassword]);

  return (
    <View style={styles.container}>
      
      {!signedIn && !isSigningUp && (
        <View style={styles.container}>
          <View style={{marginVertical: 10}}></View>

          <Text style={styles.title}>Login</Text>
          <FormControl as='form' onSubmit={handleSubmit(onLogin)} style={{width: 200, marginTop: 20}}>
            <FormControl.Label>Email</FormControl.Label>
            <Input autoCapitalize= 'none' onChangeText={text => setValue('username', text)} style={{width: 200}}/>
            <FormControl.Label>Password</FormControl.Label>
            <Input autoCapitalize='none' onChangeText={text => setValue('password', text)} type='password'/>
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
                setValue('email', text);
                setEmail(text);
              }}
              isInvalid={!emailIsValid && email !== ""}
            />
            {!emailIsValid && email !== "" && <FormControl.HelperText style={{color: 'red'}}>Your email is invalid.</FormControl.HelperText>}
            <FormControl.Label>Username</FormControl.Label>
            <Input
              autoCapitalize='none'
              onChangeText={text => {
                setValue('username', text);
                setUsername(text);
              }}
            />
            <FormControl.Label>Password</FormControl.Label>
            <Input
              autoCapitalize='none'
              onChangeText={text => {
                setValue('password', text);
                setPassword(text);
              }}
              type='password'
              isInvalid={!passwordIsValid && password !== ""}
            />
            {!passwordIsValid && password !== "" && <FormControl.HelperText>Password should be at least 8 characters, have a number, a lowercase letter, an uppercase letter, and a special character.</FormControl.HelperText>}
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              autoCapitalize='none'
              onChangeText={text => {
                setValue('confirmPassword', text);
                setConfirmPassword(text);
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
          <View style={{marginVertical: 10}}></View>
          <Text style={styles.title}>Welcome, {user.username}!</Text>
          <Button onPress={()=>{
            setSignedIn(false)
            setUser('')
          }}>Sign Out</Button>
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
