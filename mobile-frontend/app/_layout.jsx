import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { createContext, useState, useEffect } from 'react';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}
export const LoginContext = createContext(null)

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const [user, setUser] = useState(null)
  const [signedIn, setSignedIn] = useState(false)
  const [searchQueryCity, setSearchQueryCity] = useState('')
  const [searchQueryState, setSearchQueryState] = useState('')

  return (
    <NativeBaseProvider>
      <LoginContext.Provider value={{ user, setUser, signedIn, setSignedIn, searchQueryCity, setSearchQueryCity, searchQueryState, setSearchQueryState}}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Account' }} />
          <Stack.Screen name='selected_home' options={{ title: 'Selected Home' }} />
        </Stack>
      </LoginContext.Provider>
    </NativeBaseProvider>
  );
}
