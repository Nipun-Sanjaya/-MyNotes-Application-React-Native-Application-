import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';


export function HomeUi({navigation}) {
  const ui = (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.main2}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://w7.pngwing.com/pngs/469/358/png-transparent-scalable-graphics-notebook-icon-book-text-comic-book-rectangle-thumbnail.png',
            }}
          />
          <Text style={styles.text1}>Welcome to My Notes!</Text>
          <View style={styles.inputBox}>
           
            <View style={styles.box2}>
              <View>
               
              </View>
            </View>
            <View style={styles.mainBtnPanel}>
             
              <Pressable style={styles.signInBtn}>
                <Text style={styles.signInText} onPress={Register}>Register</Text>
              </Pressable>
              <Pressable style={styles.signInBtn2}>
                <Text style={styles.signInText2} onPress={Signin} >Sign In</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
  return ui;

  function Signin(){
    navigation.navigate("Signin");

  };
  function Register(){
    navigation.navigate("Register");

  };
 
  
}

const styles = StyleSheet.create({
  text3: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0089BA',
    textAlignVertical: 'bottom',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  box2: {
    display: 'flex',
    width: '100%',
    height: 40,
    // backgroundColor: 'red',
    top: 30,
  },

  inputBox: {
    rowGap: 10,
  },
  input: {
    top: 30,
    width: '100%',
    height: 50,
    borderColor: '#0089BA',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 18,
  },
  text2: {
    top: 30,
    bottom: 30,
    color: 'black',
    fontSize: 18,
  },
  main: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main2: {
    // backgroundColor: 'red',
    width: '80%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    width: 40,
    height: 40,
  },
  text1: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  signInText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText2: {
    fontSize: 18,
    color: '#0089BA',
    fontWeight: 'bold',
  },
  signInBtn2: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: '#0089BA',
    borderWidth: 2,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInBtn: {
    width: '100%',
    height: 40,
    backgroundColor: '#0089BA',
    borderRadius: 15,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBtnPanel: {
   
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});


