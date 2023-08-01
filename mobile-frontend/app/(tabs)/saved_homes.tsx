import { StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'
import { ScrollView } from 'native-base'
import { Text, View } from '@/components/Themed'
import axios from 'axios'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { Spinner } from 'native-base'
import {bigHomesList} from '../homeobjects'
import { useRouter, Link, router } from 'expo-router'

export default function SavedHomes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Homes</Text>

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