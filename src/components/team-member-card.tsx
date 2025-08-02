import { Card, CardContent } from "@/components/ui/card";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  linkedinUrl: string;
  imageSrc?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, linkedinUrl, imageSrc}) => (
  <Card className="flex flex-col items-center justify-center py-4 px-2 text-center w-full h-54">
    <CardContent className="flex flex-col items-center justify-center p-0">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
        />
      ) : (
        <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-2"></div>
      )}
      <h3 className="font-semibold text-accent-foreground text-lg">{name}</h3>
      <p className="text-muted-foreground text-sm mb-1">{role}</p>
      <div className="flex justify-center mt-1">
        <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
          <FaLinkedin className="w-6 h-6 text-blue-600 hover:text-blue-700 transition-colors" />
        </Link>
      </div>
    </CardContent>
  </Card>
); 
