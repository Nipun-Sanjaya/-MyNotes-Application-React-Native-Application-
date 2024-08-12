import { useState } from "react";
import React from "react";
import {
  Pressable,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export function Note({ navigation }) {
  const image = {
    uri: "https://i.stack.imgur.com/ctkcR.png",
  };

  const [getNotes, setNotes] = useState([]);

  
 
 loadNoteList();

  const ui = (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

      <FlatList
          data={getNotes}
          renderItem={({ item }) => (
            <View
            style={{
              marginBottom: 10,
              padding: 10,
              borderWidth:1,
              borderColor: "black",
              borderRadius:5,
              backgroundColor: "#0077b6",
              width:300,
            }}>

              
              <Text style={{marginLeft:100 , color:"white"}}>Date: {item.date}</Text>
              <Text style={{fontWeight:"bold"}}>Mobile: {item.mobile}</Text>
              <Text style={{ fontWeight:"bold"}}>Note: {item.note}</Text>

            </View>
          )}
        />
      
        <Pressable onPress={() => navigation.navigate('Createnewnote')}  >
          <View style={styles.btn}>
            <Text style={styles.btntext1} >New Note</Text>
          </View>
        </Pressable>


      </ImageBackground>
    </SafeAreaView>
  );

  return ui;

  async function loadNoteList() {
    const mobile = await AsyncStorage.getItem('mobile');
    const formData = new FormData();

    formData.append('mobile', mobile);

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        setNotes(JSON.parse(request.responseText));
      }
    }

    request.open('POST', 'http://10.0.2.2/MyNotes/getnote.php', true);
    request.send(formData);
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0077b6",
  },
  text2: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 8,
    color: "black",
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logo: {
    paddingVertical: 40,
    flexDirection: "row",
  },
  noteView: {
    borderWidth: 1,
    width: 400,
    height: 350,
  },
  categoryView:{
    width: 400,
    height:150,

  },
  btn: {
    width: 250,
    backgroundColor: "#0089BA",
    borderRadius: 10,
    marginBottom: 20,
    marginTop:10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  btntext1: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    paddingStart: 10,
  },
});