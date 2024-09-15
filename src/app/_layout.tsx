import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, DarkTheme } from '@react-navigation/native'
import RealmCustomProvider from "../providers/RealmCustomProvider";


const RootLayout = () => {
  return (
    <ThemeProvider value={DarkTheme}>
    <RealmCustomProvider>
      <Stack screenOptions={{}}>
          <Stack.Screen name="index" options={{ title: "Todo Board"}} />
          <Stack.Screen name="[id]" options={{ title: "Task Detail"}} />
      </Stack>
    </RealmCustomProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
};

export default RootLayout;
