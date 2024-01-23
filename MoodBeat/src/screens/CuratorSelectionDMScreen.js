import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ShareSettingHeader from "../components/ShareSettingHeader";

const CuratorSelectionDMScreen = ({ navigation }) => {
    return (
        <View style={style.background}>
            <ShareSettingHeader navigation={navigation} />
        </View>
    );
};

const style = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: "#26282C",
    },
    text: {
      fontFamily: 'BarlowCondensed_400Regular',
      color: 'white',
      fontSize: 20,
      marginTop: 20,
    },
});

export default CuratorSelectionDMScreen;
