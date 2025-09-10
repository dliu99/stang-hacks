import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import React from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  linkedinUrl: string;
  imageSrc?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, linkedinUrl }) => (
  <div className="flex flex-col items-center text-center">
    <h3 className="font-semibold text-accent-foreground text-lg mb-1">
      <Link
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-150 hover:text-blue-600 hover:scale-105 hover:translate-y-1"
      >
        {name}
      </Link>
    </h3>
    <p className="text-muted-foreground text-sm mb-1">{role}</p>
  </div>
); 
