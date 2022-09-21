import { LogBox } from "react-native"
import Toast from "react-native-toast-message"
import { AppNavigation } from "./src/navigation/AppNavigation";
import {NavigationContainer} from "@react-navigation/native"
import { initFirebase } from "./src/utils"
import "react-native-get-random-values"


LogBox.ignoreAllLogs()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>

      <Toast />
    </>
  );
}

