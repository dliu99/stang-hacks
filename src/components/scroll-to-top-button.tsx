'use client'; // This directive marks it as a Client Component

import Image from 'next/image';
import { Button } from "@/components/ui/button"; // Assuming Button component is used
import Link from 'next/link';

export function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToTop}
      className="flex items-center justify-center w-20 h-20"
      variant="link"
      asChild
    >
      <Link href="/" className="flex items-center justify-center w-20 h-20">
        <Image src="/mainlogo.webp" alt="Stang Hacks Logo" width={72} height={72}/>
      </Link>
    </Button>
  );
} 