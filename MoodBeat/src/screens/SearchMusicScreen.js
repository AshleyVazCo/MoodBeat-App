import React from "react";
import { CloseDarkMode } from "./CloseDarkMode";
import { InputFormText } from "./InputFormText";
import { PropertyStandard } from "./PropertyStandard";
import "./style.css";

export const SearchMusicScreen = () => {
  return (
    <div className="search-music-screen">
      <div className="frame-wrapper">
        <div className="frame">
          <div className="frame-2">
            <img className="img" alt="Line" src="line-82.svg" />
            <div className="frame-3">
              <CloseDarkMode className="interface-essential" />
              <img className="vector" alt="Vector" src="vector-2.svg" />
            </div>
          </div>
          <div className="frame-4">
            <div className="text-wrapper">Find Your Songs</div>
            <p className="p">
              Already have songs on another platform? No worries! Just import them here with a simple URL link, click
              the app it’s on, and have a better mood!
            </p>
          </div>
          <div className="frame-5">
            <InputFormText
              className="input-form-text-light-mode"
              controlsTextFieldsInputText="URL"
              property1="text-fields"
            />
            <div className="frame-6">
              <div className="group">
                <div className="icomoon-free">
                  <div className="rectangle" />
                  <img className="vector-2" alt="Vector" src="image.svg" />
                </div>
              </div>
              <img className="group" alt="Vector" src="vector.svg" />
              <img className="icomoon-free" alt="Icomoon free" src="icomoon-free-soundcloud2.svg" />
            </div>
          </div>
          <PropertyStandard className="standard-button" divClassName="property-1-standard-button" text="Import Songs" />
          <img className="line-2" alt="Line" src="line-83.svg" />
        </div>
      </div>
    </div>
  );
};