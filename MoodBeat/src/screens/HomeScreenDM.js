import React from "react";
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBarDM from "../components/NavBarDM";
import MoodBoardCard from "../components/MoodBoardCard";

const HomeScreenDM = () => {
  const navigation = useNavigation();

  const handleSettingsPress = () => {
    navigation.navigate('SettingDM');
  };

  return (
    <View style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../assets/images/homeBackground_Dark.png')}
              style={styles.backgroundImg}
            />
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/icons/logoBlack.png')}
                style={styles.logo}
              />
              <TouchableOpacity onPress={handleSettingsPress}>
                <Image
                  source={require('../../assets/icons/settingsIcon_Dark.png')}
                  style={styles.settingLogo}
                />
              </TouchableOpacity>
            </View>
                <Text style={styles.landingText}>What Mood Are You In?</Text>
                <Text style={styles.descriptionText}>MoodBeat is here to help you listen to tunes that match your mood. Generate a new moodboard, discover other boards, or look at your favorite creators.</Text>
                  </View>
            <Text style={styles.browseText}>Browse Your Mood</Text>
            <View style={styles.browseContainer}>
            <Image
              source={require('../../assets/images/browseBackground.png')}
              style={styles.backgroundImg}
                      />
            <Text style={styles.titleText}>Boards</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardContainer}>
            <MoodBoardCard
              imageSource={require('../../assets/images/classicalPic.png')}
              title="Classical"
              id="Expressive"
              cardColor="#A7A69E"
              onPress={() => navigation.navigate('CuratorSelectionDM')}
            />
            <MoodBoardCard
              imageSource={require('../../assets/images/ambiencePic.png')}
              title="Ambiance"
              id="Relaxation"
              cardColor="#339392"
              onPress={() => navigation.navigate('ProfileScreenDM', { curatorName: 'Ambiance' })}
            />
            </ScrollView>
            <Text style={styles.titleText}>Profiles</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardContainer}>
            <MoodBoardCard
              imageSource={require('../../assets/images/jolinaProfilePic.png')}
              title="Jolijass"
              cardColor="#8E8E8E"
              onPress={() => navigation.navigate('CuratorSelectionDM')}
            />
            <MoodBoardCard
              imageSource={require('../../assets/images/alanProfilePic.png')}
              title="alan.jpg"
              cardColor="#B7E3FF"
              color="#0055FF"
              onPress={() => navigation.navigate('ProfileScreenDM', { curatorName: 'Ambiance' })}
            />
          </ScrollView>
          </View>
        </View>
          </ScrollView>
        <NavBarDM />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#26282C",
  },
  container: {
      flex: 1,
      height: 1704
  },
  imgContainer: {
      height: 740,
      alignItems: 'center'
  },
  backgroundImg: {
    height: 765,
    position: "absolute",
    },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 150,
  },
  logo: {
    marginTop: 50,
    width: 70,
    height: 75,
  },
  settingLogo: {
    marginLeft: 120,
    width: 28,
    height: 28,
  },
  landingText: {
    fontSize: 45,
    width: 200,
    color: '#26282C',
    fontFamily: 'BarlowCondensed_Black',
      marginTop: 80,
  },
  descriptionText: {
    fontSize: 17,
    width: 298,
    color: '#26282C',
    fontFamily: 'BarlowCondensed_400Regular',
    marginTop: 320,
  },
  browseContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    },
  browseText: {
    fontSize: 34,
    color: '#CA9CE1',
    fontFamily: 'BarlowCondensed_ExtraBold',
    marginTop: 80,
    marginLeft: 80,
    },
  cardContainer: {
    marginTop: 150,
    },
  titleText: {
      top: 120,
      fontFamily: 'BarlowCondensed_400Regular',
      color: '#FFFFFC',
      fontSize: 28,
    }
});

export default HomeScreenDM;
