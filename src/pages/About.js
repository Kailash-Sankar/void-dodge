import React from "react";
import { GlitchText } from "@components/GlitchText";
import { Story } from "@components/";
import { Social } from "@components/";

function About() {
  return (
    <div className="page">
      <div>
        <GlitchText type="large" text="About" />
        <h3>Void dodge is a tiny game written with react</h3>
        <Story />
        <Social />
      </div>
    </div>
  );
}

export default About;
