import { useTheme } from "next-themes";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { externalLinks } from "../utils/external-links";
import { internalLinks } from "../utils/internal-links";
import { SiTypescript } from "react-icons/si";
import { FaCode } from "react-icons/fa";

export function SelectionCard({
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
    <Link href={href}>
      <div
        style={{
          backgroundColor: resolvedTheme !== "light" ? "#52BAFF1A" : "#E0EFFF",
          border: "1px solid",
          borderColor: resolvedTheme !== "light" ? "#52BAFF" : "#52BAFF77",
          padding: "30px",
          borderRadius: "10px",
          opacity: isHovered ? "0.8" : "1",
          transition: "all 0.2s ease",
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
            // justifyContent: "center",
          }}
        >
          {icon}
        </div>
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export function QuickStartCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "15px",
        marginTop: "30px",
      }}
    >
      <SelectionCard
        title="TypeScript SDK"
        description="Install with npm and get started in minutes."
        href={internalLinks.typeScriptSdk}
        icon={<SiTypescript size={26} />}
      />
      <SelectionCard
        title="RESTful API"
        description="Call our HTTP endpoints directly from any language."
        href={externalLinks.apiReference}
        icon={<FaCode size={26} />}
      />
    </div>
  );
}
