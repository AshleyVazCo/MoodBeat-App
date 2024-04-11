import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import ProfileDescriptionContentDM from "./ProfileDescriptionContentDM";
import BackgroundContentDM from "./BackgroundContentDM";
import TextContentDM from "./TextContentDM";

const ProfileThreeTabMenuDM = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === "Description" && styles.activeTab]}
          onPress={() => setActiveTab("Description")}
        >
          <Text style={[styles.tabText, activeTab === "Description" && styles.activeText]}>Description</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === "Background" && styles.activeTab]}
          onPress={() => setActiveTab("Background")}
        >
          <Text style={[styles.tabText, activeTab === "Background" && styles.activeText]}>Background</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === "Text" && styles.activeTab]}
          onPress={() => setActiveTab("Text")}
        >
          <Text style={[styles.tabText, activeTab === "Text" && styles.activeText]}>Text</Text>
        </TouchableOpacity>
      </View>
      {/* Render content based on active tab */}
      <View style={styles.content}>
        {activeTab === "Description" && <ProfileDescriptionContentDM />}
        {activeTab === "Background" && <BackgroundContentDM />}
        {activeTab === "Text" && <TextContentDM />}
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 71,
    width: "100%",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: '#161717',
    width: 118,
    height: 42,
  },
  tabText: {
    fontSize: 16,
    color: '#909090'
  },
  activeTab: {
    width: 118,
    height: 42,
    backgroundColor: '#4F4F4F',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activeText: {
    color: '#CA9CE1',
    textAlign: 'center',
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 20,
    color: '#909090'
  },
});

export default ProfileThreeTabMenuDM;