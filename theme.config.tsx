import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import LeapLogo from "./components/LeapLogo";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

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
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://docs.tryleap.ai" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta
          property="og:image"
          content="https://www.tryleap.ai/og.png"
        ></meta>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Leap"} />
        <meta
          property="og:description"
          content={frontMatter.description || "Add AI to your app in minutes."}
        />
      </>
    );
  },
};

export default config;
