import React, { useState } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
// import { AppImage } from "../../assets/images";
// import { AppIcons } from "../../assets/icons";
import { Button, IconButton, TextInput } from "react-native-paper";

const SearchDMScreen = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const [showFilter, setFilter] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/homeBackground_Dark.png")}
        style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <TextInput
            style={{
              flex: 1,
              marginVertical: 10,
              marginHorizontal: 15,
              borderRadius: 10,
            }}
            label="Search..."
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <IconButton
          style={{
            position: "absolute",
            top: 80,
            right: 10,
            display: showFilter ? "none" : "flex",
          }}
          icon="filter-variant"
          size={30}
          onPress={() => {
            setFilter(true);
          }}
        />
        <View
          style={{
            display: showFilter ? "flex" : "none",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "relative",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingBottom: 10,
            }}
          >
            <IconButton
              style={{
                position: "absolute",
                zIndex: 1000,
                top: 0,
                right: 10,
                color: "#FFF",
              }}
              icon="close"
              size={30}
              onPress={() => {
                console.log("asd");
                setFilter(false);
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: "#FFF" }}>Motivation</Text>
              <Text style={{ fontSize: 14, color: "#FFF" }}>Concentration</Text>
              <Text style={{ fontSize: 14, color: "#FFF" }}>Relaxation</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: "#FFF" }}>Energetic</Text>
              <Text style={{ fontSize: 14, color: "#FFF" }}>Expression</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SearchDMScreen;
