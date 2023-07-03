import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import LeapLogo from "./components/leapLogo";

const config: DocsThemeConfig = {
  logo: <LeapLogo />,
  project: {
    link: "https://github.com/leap-api",
  },
  chat: {
    link: "https://discord.com/invite/NCAKTUayPK",
  },
  docsRepositoryBase: "https://github.com/leap-api/leap-docs/blob/main",
  footer: {
    text: "Leap Docs",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Leap Docs",
    };
  },
};

export default config;
