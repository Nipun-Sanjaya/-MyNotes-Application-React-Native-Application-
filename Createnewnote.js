import React from 'react';
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Createnewnote({navigation}) {

  const [note, setnote] = useState('');

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
          <Text style={styles.text1}>Type Your New Note</Text>
          <View style={styles.inputBox}>
            <Text style={styles.text2}>Type Here *</Text>
            <TextInput

              autoCorrect={false}
              style={styles.input}
              value={note} onChangeText={text => setnote(text)}/>
           
            <View style={styles.mainBtnPanel}>
             
              <Pressable style={styles.signInBtn} onPress={Notesave}>
                <Text style={styles.signInText}>Save</Text>
              </Pressable>
              <Pressable style={styles.signInBtn2}>
                <Text style={styles.signInText2}  >Back</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
  return ui;

  async function Notesave(){
    const getmobile = await AsyncStorage.getItem("mobile");
   
  
  
    var requestObject = {
  
      note,
      getmobile,
      
  
      };
  
      var requestText =JSON.stringify(requestObject);
  
      var formData = new FormData();
      formData.append('requestText',requestText);
  
      var request= new XMLHttpRequest();
      request.onreadystatechange= function(){
          if(request.readyState == 4 && request.status == 200){
  
              if(request.responseText== "success"){
               
                navigation.navigate("Note");
  
                  Alert.alert("Message","Success");
               
  
              }else{
                  Alert.alert("Message","Invalid Details");
              }
  
          }
      }
  
      request.open('POST','http://10.0.2.2/MyNotes/createnote.php',true);
      request.send(formData);
    }
  
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
    height:300,
    borderColor: '#0089BA',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 18,
    marginBottom:25,
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


