import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeUi } from "./Home";
import { Signin } from "./Signin";
import { Register } from "./Register";
import {Note} from "./Note";
import { Createnewnote } from "./Createnewnote";



const Stack = createNativeStackNavigator();

function app() {


  async function checkUser() {
    const mobile = await AsyncStorage.getItem('mobile');   
    return mobile;
     }
  

  const ui = (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={checkUser != null?"Note":"Home"}>
        <Stack.Screen name="Home" component={HomeUi} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Note" component={Note} />
        <Stack.Screen name="Createnewnote" component={Createnewnote}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
  return ui;
}

export default app;