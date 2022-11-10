import React from "react";

const HEAD = <div key="HEAD">head</div>;
const BODY = <div key="BODY">body</div>;
const R_ARM = <div key="R_ARM">r_arm</div>;
const L_ARM = <div key="L_ARM">l_arm</div>;
const R_LEG = <div key="R_LEG">r_leg</div>;
const L_LEG = <div key="L_LEG">l_leg</div>;

const BODY_PARTS = [HEAD, BODY, R_ARM, L_ARM, R_LEG, L_LEG];

export default function HangmanVisual({ incorrectGuesses }) {
  return (
    <div className="border-2 mt-4 mx-1 block h-2/5">
      <div className="relative">{BODY_PARTS.slice(0, incorrectGuesses)}</div>
    </div>
  );
}
