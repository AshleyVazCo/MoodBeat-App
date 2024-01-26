import React from "react";
import { AccountCircle } from "./AccountCircle";
import { CreateBoard } from "./CreateBoard";
import { Home } from "./Home";
import { HomeIndicator } from "./HomeIndicator";
import { NavBarLightMode } from "./NavBarLightMode";
import { SettingsIconLightMode } from "./SettingsIconLightMode";
import { StatusBar } from "./StatusBar";
import { StyleLight1Filled } from "./StyleLight1Filled";
import "./style.css";
/* import { Text, StyleSheet, View } from 'react-native';
import { useFonts, BarlowCondensed_400Regular } from '@expo-google-fonts/barlow-condensed'; */

export const CreationScreen = () => {
  return (
    <div className="creation-screen">
      <div className="div">
        <div className="frame">
          <div className="frame-2">
            <img className="vector" alt="Vector" src="vector.svg" />
            <SettingsIconLightMode className="settings-icon-light" />
          </div>
          <div className="frame-3">
            <p className="p">In the Mood to Create?</p>
            <p className="text-wrapper-2">
              The Creation Page is here to serve your moody needs. Your thoughts and feelings are unique, so make them a
              reality right here.
            </p>
          </div>
          <div className="frame-4">
            <div className="frame-5">
              <StyleLight1Filled className="style-light-1-filled" />
              <div className="text-wrapper-3">Create Section</div>
            </div>
            <div className="frame-5">
              <CreateBoard className="style-light-1-filled" />
              <div className="text-wrapper-3">Create Board</div>
            </div>
          </div>
          <NavBarLightMode
            boardsIconLightPropertySelected="image.svg"
            className="nav-bar-light-mode-instance"
            icon={<Home className="icon-instance-node" />}
            override={<AccountCircle className="account-circle-instance" />}
            property1="boards-selected"
          />
        </div>
        <StatusBar
          className="status-bar-instance"
          darkMode="off"
          divClassName="status-bar-2"
          rightSide="image.png"
          rightSideClassName="design-component-instance-node"
        />
        <HomeIndicator className="home-indicator-instance" darkMode="off" rectangleClassName="home-indicator-2" />
      </div>
    </div>
  );
};

export default CreationScreen;