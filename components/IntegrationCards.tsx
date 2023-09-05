import { useTheme } from "next-themes";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { internalLinks } from "../utils/internal-links";

import { BsImages } from "react-icons/bs";
import { FiMusic } from "react-icons/fi";
import { RiAiGenerate } from "react-icons/ri";

import zapier from "../pages/images/zapier.png";
import pipedream from "../pages/images/pipedream.png";
import make from "../pages/images/make.png";
import paperform from "../pages/images/paperform.png";
import replit from "../pages/images/replit.png";
import microsoft from "../pages/images/microsoft.png";

export function SelectionCardSecondary({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
}) {
  const { resolvedTheme } = useTheme();

  // Add state variable for hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} target="blank">
      <div
        style={{
          backgroundColor: resolvedTheme !== "light" ? "#52BAFF1A" : "#E0EFFF",
          border: isHovered ? "1px solid" : "none",
          borderColor: resolvedTheme !== "light" ? "#52BAFF" : "#52BAFF77",
          padding: "25px",
          paddingTop: "20px",
          paddingBottom: "20px",
          borderRadius: "10px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "8px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: resolvedTheme !== "light" ? "#52BAFF" : "#52BAFF77",
            marginBottom: "8px",
            // justifyContent: "center",
          }}
        >
          {icon}
        </div>
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</h3>
        <p style={{ fontSize: "15px" }}>{description}</p>
      </div>
    </Link>
  );
}

export function CardGridSecondary({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        justifyContent: "flex-start",
        gap: "15px",
        marginTop: "30px",
        maxWidth: "750px",
      }}
    >
      {children}
    </div>
  );
}

export function IntegrationCards() {
  return (
    <CardGridSecondary>
      <SelectionCardSecondary
        title="Zapier"
        description="Connect to 5,000+ apps without writing any code"
        href={"https://zapier.com/apps/leap-ai/integrations"}
        icon={
          <img
            src={zapier.src}
            style={{
              height: "28px",
              width: "28px",
            }}
          />
        }
      />
      <SelectionCardSecondary
        title="Replit"
        description="Run Leap starter templates in your browser"
        href={"https://replit.com/@leap-ai"}
        icon={
          <img
            src={replit.src}
            style={{
              height: "28px",
              width: "28px",
            }}
          />
        }
      />
      <SelectionCardSecondary
        title="Make.com"
        description="Automate workflows with Leap and your favorite apps"
        href={"https://www.make.com/en/integrations/leapai"}
        icon={
          <img
            src={make.src}
            style={{
              height: "28px",
              width: "28px",
            }}
          />
        }
      />
      <SelectionCardSecondary
        title="Paperform"
        description="Integrate Leap into your forms"
        href={"https://paperform.co/integrations/leap-ai/"}
        icon={
          <img
            src={paperform.src}
            style={{
              height: "28px",
              width: "28px",
            }}
          />
        }
      />
      <SelectionCardSecondary
        title="Pipedream"
        description="Build workflows using Pipedream"
        href={"https://pipedream.com/apps/leap"}
        icon={
          <img
            src={pipedream.src}
            style={{
              height: "28px",
              width: "28px",
            }}
          />
        }
      />

      <SelectionCardSecondary
        title="Microsoft Power Platform"
        description="Connect to Microsoft cloud services"
        href={"https://learn.microsoft.com/en-us/connectors/leapaiip/"}
        icon={
          <img
            src={microsoft.src}
            style={{
              height: "28px",
              width: "28px",
            }}
          />
        }
      />
    </CardGridSecondary>
  );
}
