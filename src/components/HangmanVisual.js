import React from "react";

const HEAD = (
  <div
    key="HEAD"
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "30px",
      right: "71px",
    }}
  ></div>
);
const BODY = (
  <div
    key="BODY"
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "75px",
      right: "91px",
    }}
  ></div>
);
const R_ARM = (
  <div
    key="R_ARM"
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: "13px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);
const L_ARM = (
  <div
    key="L_ARM"
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "100px",
      right: "100px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);
const R_LEG = (
  <div
    key="R_LEG"
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "160px",
      right: "21px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);
const L_LEG = (
  <div
    key="L_LEG"
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "160px",
      right: "91px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

const BODY_PARTS = [HEAD, BODY, R_ARM, L_ARM, R_LEG, L_LEG];

export default function HangmanVisual({ incorrectGuesses }) {
  return (
    <div className="border-2 mt-2 mx-1 block h-2/5">
      <div className="w-[275px] h-full border-2 mx-auto">
        <div className="relative">
          {/* hanging bar */}
          <div
            style={{
              height: "30px",
              width: "10px",
              background: "black",
              position: "absolute",
              marginTop: "10px",
              marginLeft: "170px",
            }}
          />
          {/* top cross bar */}
          <div
            style={{
              height: "10px",
              width: "100px",
              background: "black",
              marginLeft: "80px",
              marginTop: "30px",
            }}
          />
          {/* vertical bar */}
          <div
            style={{
              height: "250px",
              width: "10px",
              background: "black",
              marginLeft: "80px",
            }}
          />
          {/* bottom bar */}
          <div
            style={{
              height: "10px",
              width: "200px",
              background: "black",
              // marginLeft: "30px",
            }}
          />
          {BODY_PARTS.slice(0, incorrectGuesses)}
        </div>
      </div>
    </div>
  );
}
