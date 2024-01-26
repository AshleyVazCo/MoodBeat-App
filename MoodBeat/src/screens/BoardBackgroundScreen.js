import React from "react";
import { CloseDarkMode } from "./CloseDarkMode";
import { TabBarLightMode } from "./TabBarLightMode";
import "./style.css";

export const BoardBackground = () => {
  return (
    <div className="board-background">
      <div className="frame-wrapper">
        <div className="frame">
          <div className="frame-2">
            <img className="line" alt="Line" src="line-82.svg" />
            <div className="frame-3">
              <CloseDarkMode className="interface-essential" />
              <img className="vector" alt="Vector" src="vector.svg" />
            </div>
          </div>
          <TabBarLightMode property1="group-280" />
          <div className="frame-4">
            <div className="text-wrapper-3">Background Color</div>
            <p className="p">
              Select a background color for your moodboard by dragging the circle to the color you want, type in a HEX
              code, or type in the RGB code.
            </p>
          </div>
          <div className="frame-5">
            <div className="group">
              <div className="hex-rgb">
                <div className="hex">
                  <div className="text-wrapper-4">HEX</div>
                  <div className="text-field">
                    <div className="input">
                      <div className="text-wrapper-5">#9751F2</div>
                    </div>
                  </div>
                </div>
                <div className="rgb">
                  <div className="value">
                    <div className="text-wrapper-4">R</div>
                    <div className="text-field">
                      <div className="div-wrapper">
                        <div className="text-wrapper-5">151</div>
                      </div>
                    </div>
                  </div>
                  <div className="value">
                    <div className="text-wrapper-4">G</div>
                    <div className="text-field">
                      <div className="input-2">
                        <div className="text-wrapper-5">81</div>
                      </div>
                    </div>
                  </div>
                  <div className="value">
                    <div className="text-wrapper-4">B</div>
                    <div className="text-field">
                      <div className="input-3">
                        <div className="text-wrapper-5">242</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <img className="color-wheel" alt="Color wheel" src="color-wheel.png" />
                <div className="text-wrapper-6">Placeholder</div>
              </div>
            </div>
            <div className="text-wrapper-7">Must meet WCAG standards</div>
            <div className="group">
              <img className="preview" alt="Preview" src="preview.svg" />
              <div className="sliders">
                <div className="div-2">
                  <div className="rectangle" />
                  <div className="pointer" />
                </div>
                <div className="div-2">
                  <img className="img" alt="Rectangle" src="rectangle.png" />
                  <div className="pointer-2" />
                </div>
              </div>
            </div>
          </div>
          <img className="line-2" alt="Line" src="line-83.svg" />
        </div>
      </div>
    </div>
  );
};
