import { useTheme } from "next-themes";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { FaCode, FaGithub } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";
import { MdWorkspacePremium } from "react-icons/md";
import { SiTypescript } from "react-icons/si";
import { externalLinks } from "../utils/external-links";
import { internalLinks } from "../utils/internal-links";

import { RiAiGenerate } from "react-icons/ri";
import { FiMusic } from "react-icons/fi";
import { BsImages } from "react-icons/bs";

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

export function QuickStartCards() {
  return (
    <CardGridSecondary>
      <SelectionCardSecondary
        title="Generate Images"
        description="Generate images simply with text."
        href={internalLinks.typeScriptSdk_images}
        icon={<BsImages size={26} />}
      />
      <SelectionCardSecondary
        title="Train Models"
        description="Teach AI about people, objects, or even styles."
        href={internalLinks.typeScriptSdk_models}
        icon={<RiAiGenerate size={26} />}
      />
      <SelectionCardSecondary
        title="Generate Music"
        description="Generate music simply with text."
        href={internalLinks.typeScriptSdk_music}
        icon={<FiMusic size={26} />}
      />
    </CardGridSecondary>
  );
}
