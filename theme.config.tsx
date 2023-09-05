import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import LeapLogo from "./components/LeapLogo";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <LeapLogo />,
  project: {
    link: "https://github.com/leap-ai",
  },
  chat: {
    link: "https://discord.com/invite/NCAKTUayPK",
  },
  docsRepositoryBase: "https://github.com/leap-ai/leap-docs/blob/main",
  footer: {
    text: "Leap Docs",
  },
  sidebar: {
    autoCollapse: false,
    defaultMenuCollapseLevel: 1,
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
    const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

    return (
      <>
        <link rel="icon" href="https://app.tryleap.ai/favicon.ico" />
        <meta
          property="og:image"
          content="https://app.tryleap.ai/og.png"
        ></meta>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Leap"} />
        <meta
          property="og:description"
          content={frontMatter.description || "Add AI to your app in minutes."}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleAnalyticsId}');`}
        </script>
      </>
    );
  },
};

export default config;
