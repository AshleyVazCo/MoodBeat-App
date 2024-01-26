import React from "react";
import { CloseDarkMode } from "./CloseDarkMode";
import { InputFormText } from "./InputFormText";
import { PropertyStandard } from "./PropertyStandard";
import { TextboxLightMode } from "./TextboxLightMode";
import { UploadButton } from "./UploadButton";
import "./style.css";

export const CreateSection = () => {
  return (
    <div className="create-section">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="frame">
            <div className="text-wrapper">Characters: 0/30</div>
          </div>
          <div className="frame-2">
            <div className="frame-3">
              <img className="line-2" alt="Line" src="line-82.svg" />
              <div className="frame-4">
                <CloseDarkMode className="interface-essential" />
                <img className="vector" alt="Vector" src="vector.svg" />
              </div>
            </div>
            <div className="text-wrapper-2">Song Details</div>
            <div className="frame-5">
              <div className="frame-6">
                <div className="group">
                  <div className="upload-button-wrapper">
                    <UploadButton className="upload-button-instance" property1="group-3" />
                  </div>
                </div>
                <div className="text-wrapper-3">Upload cover image</div>
              </div>
              <InputFormText
                className="design-component-instance-node"
                controlsTextFieldsInputText="Song Title"
                property1="text-fields"
              />
              <div className="frame-7">
                <InputFormText
                  className="design-component-instance-node"
                  controlsTextFieldsInputText="Artist Name"
                  property1="text-fields"
                />
                <div className="text-wrapper-3">Characters: 0/30</div>
              </div>
              <div className="frame-8">
                <TextboxLightMode
                  className="design-component-instance-node"
                  focused="text-fields"
                  lineClassName="textbox-light-mode-instance"
                  text="#Enter a hashtag"
                />
                <p className="hashtags-must-have-a">
                  Hashtags must have a # symbol and no spaces.
                  <br />
                  Maximum of 10 hashtags.
                </p>
              </div>
            </div>
            <div className="frame-9">
              <PropertyStandard divClassName="small-button-light" text="Existing Board" />
              <PropertyStandard divClassName="property-1-standard-button" text="New Board" />
            </div>
            <img className="line-3" alt="Line" src="line-83.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
