import { useTheme } from "next-themes";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { FaCode, FaGithub } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";
import { MdWorkspacePremium } from "react-icons/md";
import { SiTypescript } from "react-icons/si";
import { externalLinks } from "../utils/external-links";
import { internalLinks } from "../utils/internal-links";

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
    <Link href={href}>
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

export function ExampleBuilds() {
  return (
    <CardGridSecondary>
      <SelectionCardSecondary
        title="Wallpapers"
        description="Browse and download AI generated wallpapers."
        href={internalLinks.builds_wallpapersFyi}
        icon={<FaGithub size={26} />}
      />
      <SelectionCardSecondary
        title="Ambience"
        description="Chrome Extension displaying new AI wallpapers every hour."
        href={internalLinks.builds_ambience}
        icon={<FaGithub size={26} />}
      />
      <SelectionCardSecondary
        title="Remix My Face"
        description="Upload a selfie and generate a custom avatar."
        href={internalLinks.builds_remixMyFace}
        icon={<FaGithub size={26} />}
      />
      <SelectionCardSecondary
        title="Draw It"
        description="Sketch something and turn it into an image."
        href={internalLinks.builds_drawIt}
        icon={<FaGithub size={26} />}
      />
    </CardGridSecondary>
  );
}
