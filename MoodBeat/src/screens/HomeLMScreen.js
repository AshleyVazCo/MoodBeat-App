// HomeScreen.js
import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
//import { AppImage } from "../../assets/images";
// import { AppIcons } from "../../assets/icons";
// import { Button, IconButton } from "react-native-paper";
// import { Boards, Profiles } from "./mockData";

const HomeLMScreen = ({ navigation }) => {
  let [backgroundImage, setBackgroundImage] = useState(true)
  let [board, setBoard] = useState([
    {
      image:
        require("../../assets/images/classicalPic.png"),
      name: "Classic",
    },{
        image:
          require("../../assets/images/regencyPic.png"),
        name: "Regency",
      },
    {
      image:
        require("../../assets/images/ambiencePic.png"),
      name: "Ambience",
    }
  ]);
  let [profile, setProfile] =useState([
    {
      image:
        require("../../assets/images/alanProfilePic.png"),
      name: "Alan",
    },
    {
      image:
        require("../../assets/images/jolinaProfilepic.png"),
      name: "Jolina",
    }
  ]);
  return (
    <ImageBackground
      source={require("../../assets/images/homeBackground_Light.png")}
      style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <ScrollView>
        <View style={{ height: "100vh" }}>
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <Image
              source={require("../../assets/icons/logoPurple.png")}
              style={{
                width: 180,
                height: 200,
              }}
            />
          </View>
          <Image
            style={{ position: "absolute", top: 10, right: 10 }}
            source={require("../../assets/icons/settingsIcon_Dark.png")}
            size={30}
            onPress={() => {
              console.log("testing");
              let backgroundImageValue = backgroundImage ? false : true;
              console.log("backgroundImageValue", backgroundImageValue)
              setBackgroundImage(backgroundImageValue);
              navigation.navigate("Search");
            }}
          />
          <Text
            style={{
              padding: 20,
              textAlign: "justify",
              fontSize: 14,
              marginTop: 300,
              backgroundColor: "rgba(0,0,0,.1)",
              color: 'white',
            }}
          >
            Welcome to MoodBeats, your personal companion for emotional
            well-being. MoodBeats is more than just a mood tracking app; it's a
            tool designed to help you understand, manage, and improve your
            emotional health.
          </Text>
        </View>
        <View style={{ height: "90vh", marginHorizontal: 10 }}>
          <View>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 28 }}
            >
              Boards
            </Text>
            <FlatList
              style={{ marginVertical: 20 }}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={board}
              renderItem={(item) =>{
                console.log("item", item);                
               return (                
               
                <View
                  style={{
                    backgroundColor: "#0008",
                    padding: 10,
                    borderRadius: 10,
                    marginRight: 15,
                  }}
                >
                  <Image
                    source={item.item.image}
                    style={{ width: 180, height: 180 }}
                  />
                  <Text
                    style={{
                      color: "#FFF",
                      fontWeight: "600",
                      paddingTop: 10,
                      fontSize: 20,
                    }}
                  >
                    {" "}
                    {item.item.name}
                  </Text>
                </View>
              )}}
            />
            <View>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 28 }}
            >
              Profile
            </Text>
            <FlatList
              style={{ marginVertical: 20 }}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={profile}
              renderItem={(item) => (
                <View
                  style={{
                    backgroundColor: "#0008",
                    padding: 10,
                    borderRadius: 10,
                    marginRight: 15,
                  }}
                >
                  <Image
                    source={{ uri: item.item.image }}
                    style={{ width: 180, height: 180 }}
                  />
                  <Text
                    style={{
                      color: "#FFF",
                      fontWeight: "600",
                      paddingTop: 10,
                      fontSize: 20,
                    }}
                  >
                    {" "}
                    {item.item.name}
                  </Text>
                </View>
              )}
            />
          </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeLMScreen;
