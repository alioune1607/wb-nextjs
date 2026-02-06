'use client';
import Image from 'next/image';
import Link from 'next/link';

interface SocialLogoProps {
  imagen: string;
  enlace: string;
  alt: string;
}

export default function SocialLogo({ imagen, enlace, alt }: SocialLogoProps) {
  return (
    <Link href={enlace} target="_blank" className="d-inline-block opacity-75 hover-opacity-100 transition">
      <Image 
        src={imagen} 
        alt={alt} 
        width={35} 
        height={35} 
        className="rounded-circle"
        style={{ objectFit: 'cover' }}
      />
    </Link>
  );
}