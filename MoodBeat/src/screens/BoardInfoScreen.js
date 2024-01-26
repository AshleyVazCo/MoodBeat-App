import React from "react";
import { CloseDarkMode } from "./CloseDarkMode";
import { DivWrapper } from "./DivWrapper";
import { InputFormText } from "./InputFormText";
import { Property } from "./Property";
import { Property1Expressive } from "./Property1Expressive";
import { PropertyEnergetic } from "./PropertyEnergetic";
import { PropertyWrapper } from "./PropertyWrapper";
import { Switches } from "./Switches";
import { TabBarLightMode } from "./TabBarLightMode";
import "./style.css";

export const BoardInfoScreen = () => {
  return (
    <div className="board-info-screen">
      <div className="overlap-wrapper">
        <div className="overlap">
          <Switches className="switches-instance" property1="off-1" />
          <div className="frame">
            <div className="frame-2">
              <img className="img" alt="Line" src="line-82.svg" />
              <div className="frame-3">
                <CloseDarkMode className="interface-essential" />
                <img className="vector" alt="Vector" src="image.svg" />
              </div>
            </div>
            <div className="frame-4">
              <TabBarLightMode property1="group-279" />
              <div className="frame-5">
                <div className="text-wrapper-8">Board Description</div>
                <div className="group">
                  <div className="vector-wrapper">
                    <img className="vector-2" alt="Vector" src="vector.svg" />
                  </div>
                </div>
                <div className="text-wrapper-9">Upload cover image</div>
              </div>
              <InputFormText
                className="input-form-text-light-mode"
                controlsTextFieldsInputText="Board Title"
                property1="text-fields"
              />
              <div className="frame-6">
                <div className="text-wrapper-10">Select a category below</div>
                <div className="group-2">
                  <Property className="component" />
                  <PropertyWrapper className="property-1-concentration" />
                  <DivWrapper className="property-1-relaxation" />
                  <PropertyEnergetic className="property-1-energetic" />
                  <Property1Expressive className="property-instance" />
                </div>
                <div className="text-wrapper-11">Private Board</div>
              </div>
              <img className="line-2" alt="Line" src="line-83.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
