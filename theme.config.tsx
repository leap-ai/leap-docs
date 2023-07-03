import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Leap Docs</span>,
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
};

export default config;
