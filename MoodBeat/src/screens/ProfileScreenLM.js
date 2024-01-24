import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { NavigationContainer } from "@react-navigation/native";
// import { useFonts, BarlowCondensed_400Regular } from '@expo-google-fonts/barlow-condensed';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [saveIconVisible, setSaveIconVisible] = useState(false);

  const openSaveIcon = useCallback(() => {
    setSaveIconVisible(true);
  }, []);

  const closeSaveIcon = useCallback(() => {
    setSaveIconVisible(false);
  }, []);

  return (
    <>
      {/* This is the code for the profile image */}
      <View style={styles.profileScreenLightMode}>
        <Image
          style={[styles.navBarLightMode, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/profileimage.png")}
        />

        {/* This is the code for the share icon */}
        <View style={[styles.frameParent, styles.statusBarPosition1]}>
          <View style={styles.shareIconLightModeParent}>
            <Image
              style={styles.iconLayout2}
              contentFit="cover"
              source={require("../assets/Share Icon - Light Mode.png")}
            />
            <Pressable
              style={[styles.settingsIconLightMode, styles.iconLayout2]}
              onPress={() => navigation.navigate("ScreenLightMode")}
            >
              // This is the code for the settings icon
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../assets/settings-icon--light-mode.png")}
              />
            </Pressable>
          </View>
          <View
            style={[styles.rectangleParent, styles.rectangleParentSpaceBlock]}
          >
            <View style={[styles.frameChild, styles.imageCardBg]} />
            <View style={[styles.imageCard, styles.imageCardSpaceBlock1]}>
              <View style={[styles.image, styles.imageLayout]}>
                <Image
                  style={styles.imageIconPosition}
                  contentFit="cover"
                  source={require("../assets/ambienceimageboard.png")}
                />
                <View style={[styles.imageBlurEffect, styles.imagePosition]} />
                <LinearGradient
                  style={[styles.imageGradientOverlay, styles.imagePosition]}
                  locations={[0, 1]}
                  colors={["rgba(26, 26, 26, 0.77)", "rgba(26, 26, 26, 0)"]}
                />
              </View>
              <View style={styles.copy}>
                <Text style={[styles.cardHeadline, styles.cardLayout1]}>
                  alan.jpg
                </Text>
                <Text
                  style={[styles.cardDescription, styles.cardLayout]}
                >{`Lorem ipsum dolor sit amet, consectetur `}</Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.profileBoardTabLight,
              styles.rectangleParentSpaceBlock,
            ]}
          >
            <View style={styles.tabbar2EditLightModeWrapper}>
              <View style={styles.tabbar2EditLightMode}>
                <View
                  style={[styles.tabbar2EditLightModeChild, styles.iconLayout1]}
                />
                <View style={[styles.createdWrapper, styles.wrapperFlexBox]}>
                  <Text style={[styles.created, styles.createdClr]}>
                    Created
                  </Text>
                </View>
                <View style={styles.rectangleGroup}>
                  <View style={styles.frameItem} />
                  <View style={styles.editIconWrapper}>
                    <Image
                      style={styles.iconLayout2}
                      contentFit="cover"
                      source={require("../assets/EditIcon.png")}
                    />
                  </View>
                </View>
                <View style={[styles.savedWrapper, styles.wrapperFlexBox]}>
                  <Text style={[styles.saved, styles.savedClr]}>Saved</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentRowSlider}>
              <View style={styles.scrollFrame}>
                <View style={[styles.imageCard1, styles.imageCardSpaceBlock1]}>
                  <View style={[styles.image1, styles.imageLayout]}>
                    <Image
                      style={[styles.imageIcon1, styles.imageIconPosition]}
                      contentFit="cover"
                      source={require("../assets/traditionalimageboard.png")}
                    />
                    <View
                      style={[styles.imageBlurEffect, styles.imagePosition]}
                    />
                    <LinearGradient
                      style={[
                        styles.imageGradientOverlay,
                        styles.imagePosition,
                      ]}
                      locations={[0, 1]}
                      colors={["rgba(26, 26, 26, 0.77)", "rgba(26, 26, 26, 0)"]}
                    />
                  </View>
                  <View style={styles.copy}>
                    <Text style={[styles.cardHeadline1, styles.createdClr]}>
                      Ambience
                    </Text>
                    <Text
                      style={[styles.cardDescription, styles.cardLayout]}
                    >{`Lorem ipsum dolor sit amet, consectetur `}</Text>
                  </View>
                </View>
                <View style={[styles.imageCard2, styles.imageCardSpaceBlock]}>
                  <View style={[styles.image1, styles.imageLayout]}>
                    <Image
                      style={[styles.imageIcon1, styles.imageIconPosition]}
                      contentFit="cover"
                      source={require("../assets/enchantedimageboard.png")}
                    />
                    <View
                      style={[styles.imageBlurEffect, styles.imagePosition]}
                    />
                    <LinearGradient
                      style={[
                        styles.imageGradientOverlay,
                        styles.imagePosition,
                      ]}
                      locations={[0, 1]}
                      colors={["rgba(26, 26, 26, 0.77)", "rgba(26, 26, 26, 0)"]}
                    />
                  </View>
                  <View style={styles.copy}>
                    <Text style={[styles.cardHeadline2, styles.cardTypo]}>
                      Traditional
                    </Text>
                    <Text
                      style={[styles.cardDescription, styles.cardLayout]}
                    >{`Lorem ipsum dolor sit amet, consectetur `}</Text>
                  </View>
                </View>
                <View style={[styles.imageCard3, styles.imageCardSpaceBlock]}>
                  <View style={[styles.image1, styles.imageLayout]}>
                    <Image
                      style={[styles.imageIcon1, styles.imageIconPosition]}
                      contentFit="cover"
                      source={require("../assets/image9.png")}
                    />
                    <View
                      style={[styles.imageBlurEffect, styles.imagePosition]}
                    />
                    <LinearGradient
                      style={[
                        styles.imageGradientOverlay,
                        styles.imagePosition,
                      ]}
                      locations={[0, 1]}
                      colors={["rgba(26, 26, 26, 0.77)", "rgba(26, 26, 26, 0)"]}
                    />
                  </View>
                  <View style={styles.copy}>
                    <Text style={[styles.cardHeadline3, styles.cardTypo]}>
                      Enchanted
                    </Text>
                    <Text
                      style={[styles.cardDescription, styles.cardLayout]}
                    >{`Lorem ipsum dolor sit amet, consectetur `}</Text>
                  </View>
                </View>
                <View style={[styles.imageCard4, styles.imageCardSpaceBlock]}>
                  <View style={[styles.image1, styles.imageLayout]}>
                    <Image
                      style={[styles.imageIcon1, styles.imageIconPosition]}
                      contentFit="cover"
                      source={require("../assets/image10.png")}
                    />
                    <View
                      style={[styles.imageBlurEffect, styles.imagePosition]}
                    />
                    <LinearGradient
                      style={[
                        styles.imageGradientOverlay,
                        styles.imagePosition,
                      ]}
                      locations={[0, 1]}
                      colors={["rgba(26, 26, 26, 0.77)", "rgba(26, 26, 26, 0)"]}
                    />
                  </View>
                  <View style={styles.copy}>
                    <Text style={[styles.cardHeadline4, styles.cardTypo]}>
                      Grunge
                    </Text>
                    <Text
                      style={[styles.cardDescription4, styles.cardLayout]}
                    >{`Lorem ipsum dolor sit amet, consectetur `}</Text>
                  </View>
                </View>
                <View style={[styles.imageCard5, styles.imageCardSpaceBlock]}>
                  <View style={[styles.image1, styles.imageLayout]}>
                    <Image
                      style={styles.imageIconPosition}
                      contentFit="cover"
                      source={require("../assets/image11.png")}
                    />
                    <View
                      style={[styles.imageBlurEffect, styles.imagePosition]}
                    />
                    <LinearGradient
                      style={[
                        styles.imageGradientOverlay,
                        styles.imagePosition,
                      ]}
                      locations={[0, 1]}
                      colors={["rgba(26, 26, 26, 0.77)", "rgba(26, 26, 26, 0)"]}
                    />
                  </View>
                  <View style={styles.copy}>
                    <Text style={[styles.cardHeadline5, styles.cardTypo]}>
                      Foreign
                    </Text>
                    <Text
                      style={[styles.cardDescription4, styles.cardLayout]}
                    >{`Lorem ipsum dolor sit amet, consectetur `}</Text>
                  </View>
                </View>
                <View style={[styles.imageCard6, styles.imageCardSpaceBlock]}>
                  <View style={[styles.image1, styles.imageLayout]}>
                    <Image
                      style={[styles.imageIcon1, styles.imageIconPosition]}
                      contentFit="cover"
                      source={require("../assets/image12.png")}
                    />
                    <View
                      style={[styles.imageBlurEffect, styles.imagePosition]}
                    />
                    <LinearGradient
                      style={[
                        styles.imageGradientOverlay,
                        styles.imagePosition,
                      ]}
                      locations={[0, 1]}
                      colors={["rgba(26, 26, 26, 0.77)", "rgba(26, 26, 26, 0)"]}
                    />
                  </View>
                  <View style={styles.copy}>
                    <Text style={[styles.cardHeadline6, styles.savedClr]}>
                      Title
                    </Text>
                    <Text
                      style={[styles.cardDescription4, styles.cardLayout]}
                    >{`Lorem ipsum dolor sit amet, consectetur `}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Pressable style={styles.save} onPress={openSaveIcon}>
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/SaveIcon.png")}
          />
        </Pressable>
        {/* <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.rightSide, styles.iconLayout]}>
            <Image
              style={[styles.batteryIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/battery.png")}
            />
            <Image
              style={[styles.wifiIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/wifi2.png")}
            />
            <Image
              style={[styles.mobileSignalIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/mobile-signal.png")}
            />
          </View> */}
        {/* <Text style={styles.text}>9:41</Text>
        </View> */}
        <View style={[styles.homeIndicator, styles.imagePosition]}>
          <View style={styles.rectangle} />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={saveIconVisible}>
        <View style={styles.saveIconOverlay}>
          <Pressable style={styles.saveIconBg} onPress={closeSaveIcon} />
          <EditProfileDescriptionScree onClose={closeSaveIcon} />
        </View>
      </Modal>

      <View>
        <StatusBar style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    width: 393,
    left: 0,
  },
  statusBarPosition1: {
    left: 0,
    position: "absolute",
  },
  iconLayout2: {
    height: 35,
    width: 35,
  },
  rectangleParentSpaceBlock: {
    marginTop: 15,
    width: 393,
  },
  imageCardBg: {
    backgroundColor: Color.colorLightblue,
    position: "absolute",
  },
  imageCardSpaceBlock1: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_xs,
    alignItems: "center",
  },
  imageLayout: {
    height: 152,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  imagePosition: {
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  cardLayout1: {
    width: 152,
    textTransform: "capitalize",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  cardLayout: {
    marginTop: 4,
    textAlign: "left",
    width: 152,
    lineHeight: 24,
    display: "none",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_16xl,
    justifyContent: "center",
    width: "38.87%",
    bottom: "2.27%",
    top: "2.27%",
    height: "95.45%",
    borderRadius: Border.br_xs,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  createdClr: {
    color: Color.colorGray_200,
    textAlign: "left",
  },
  savedClr: {
    color: Color.colorGray_500,
    textAlign: "left",
  },
  imageIconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: 0,
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  imageCardSpaceBlock: {
    marginLeft: 8,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
  },
  cardTypo: {
    textAlign: "left",
    width: 152,
    textTransform: "capitalize",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  statusBarPosition: {
    right: 0,
    top: 0,
  },
  iconLayout: {
    height: 11,
    position: "absolute",
  },
  navBarLightMode: {
    top: 747,
    height: 71,
    position: "absolute",
  },
  settingsIconLightMode: {
    marginLeft: 272,
  },
  shareIconLightModeParent: {
    flexDirection: "row",
  },
  frameChild: {
    top: 0,
    height: 299,
    width: 393,
    left: 0,
  },
  imageBlurEffect: {
    backgroundColor: Color.colorGray_700,
    display: "none",
    top: 0,
  },
  imageGradientOverlay: {
    backgroundColor: Color.gradientDown,
    display: "none",
    top: 0,
  },
  image: {
    borderRadius: Border.br_81xl,
  },
  cardHeadline: {
    color: "#0055ff",
    textAlign: "center",
    fontFamily: FontFamily.balooThambi,
    width: 152,
    textTransform: "capitalize",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  cardDescription: {
    color: Color.colorGray_400,
    fontFamily: FontFamily.barlowCondensedRegular,
    marginTop: 4,
    fontSize: FontSize.size_xl,
  },
  copy: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  imageCard: {
    top: 30,
    left: 113,
    backgroundColor: Color.colorLightblue,
    position: "absolute",
  },
  rectangleParent: {
    height: 299,
  },
  tabbar2EditLightModeChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  created: {
    lineHeight: 20,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.barlowCondensedRegular,
  },
  createdWrapper: {
    right: "60.8%",
    left: "0.33%",
    backgroundColor: Color.colorDarkslateblue,
  },
  frameItem: {
    width: 63,
    height: 42,
    zIndex: 0,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_xs,
  },
  editIconWrapper: {
    top: 3,
    left: 14,
    zIndex: 1,
    position: "absolute",
  },
  rectangleGroup: {
    width: "20.93%",
    right: "0.33%",
    left: "78.74%",
    bottom: "2.27%",
    top: "2.27%",
    height: "95.45%",
    position: "absolute",
  },
  saved: {
    lineHeight: 20,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.barlowCondensedRegular,
  },
  savedWrapper: {
    right: "21.59%",
    left: "39.53%",
    backgroundColor: Color.colorGainsboro_100,
  },
  tabbar2EditLightMode: {
    width: 301,
    height: 44,
  },
  tabbar2EditLightModeWrapper: {
    alignItems: "center",
  },
  imageIcon1: {
    borderRadius: Border.br_xs,
  },
  image1: {
    borderRadius: Border.br_xs,
  },
  cardHeadline1: {
    width: 152,
    textTransform: "capitalize",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.balooThambi,
  },
  imageCard1: {
    backgroundColor: Color.colorDarkcyan,
  },
  cardHeadline2: {
    fontFamily: FontFamily.dMSerifDisplayRegular,
    color: Color.colorDarkolivegreen,
  },
  imageCard2: {
    backgroundColor: Color.colorAntiquewhite,
    borderRadius: Border.br_xs,
  },
  cardHeadline3: {
    fontFamily: FontFamily.macondoRegular,
    color: Color.colorBlack,
  },
  imageCard3: {
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_xs,
  },
  cardHeadline4: {
    fontFamily: FontFamily.libreBodoniRegular,
    color: Color.colorGray_300,
  },
  cardDescription4: {
    fontSize: FontSize.paragraphRegularLarge_size,
    fontFamily: FontFamily.paragraphRegularLarge,
    color: Color.monochromatic10,
  },
  imageCard4: {
    backgroundColor: Color.colorGray_600,
    borderRadius: Border.br_xs,
  },
  cardHeadline5: {
    fontFamily: FontFamily.hinaMinchoRegular,
    color: Color.colorDarkkhaki,
  },
  imageCard5: {
    backgroundColor: Color.colorOrangered,
    borderRadius: Border.br_xs,
  },
  cardHeadline6: {
    fontFamily: FontFamily.barlowCondensedSemiBold,
    fontWeight: "600",
    width: 152,
    textTransform: "capitalize",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_500,
  },
  imageCard6: {
    display: "none",
  },
  scrollFrame: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    top: 0,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  contentRowSlider: {
    backgroundColor: Color.colorGray_800,
    height: 220,
    marginTop: 21,
    alignSelf: "stretch",
  },
  profileBoardTabLight: {
    alignItems: "center",
  },
  frameParent: {
    top: 62,
    alignItems: "center",
  },
  saveIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  saveIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  save: {
    left: 236,
    top: 279,
    height: 24,
    width: 24,
    position: "absolute",
  },
  batteryIcon: {
    width: 24,
    right: 0,
    top: 0,
  },
  wifiIcon: {
    right: 29,
    width: 15,
    top: 0,
  },
  mobileSignalIcon: {
    right: 50,
    width: 17,
    top: 0,
  },
  rightSide: {
    top: 17,
    right: 21,
    width: 67,
  },
  text: {
    marginTop: -10,
    top: "50%",
    left: 21,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.sFProText,
    width: 54,
    fontWeight: "600",
    color: Color.colorBlack,
    lineHeight: 20,
    textAlign: "center",
    position: "absolute",
  },
  statusBar: {
    backgroundColor: Color.blurLight,
    height: 44,
    left: 0,
    position: "absolute",
  },
  rectangle: {
    marginLeft: -66.5,
    bottom: 9,
    left: "50%",
    backgroundColor: Color.monochromatic01,
    width: 134,
    height: 5,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  homeIndicator: {
    backgroundColor: Color.monochromatic10,
    height: 34,
  },
  profileScreenLightMode: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfileScreen;
