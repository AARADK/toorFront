'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="w-full border-b border-[#ccc]/10 shadow-sm">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Toorunta Logo"
            width={120}
            height={40}
            priority
          
          />
        </Link>

        {/* Navigation + Buttons */}
        <div className="flex items-center space-x-10 ml-auto">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-10 text-sm text-[#1D1E4C]">
            <Link href="/listings" className="hover:underline">Listings</Link>
            <Link href="/map" className="hover:underline">View Map</Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-6">
            <Button className="bg-[#2D3363] hover:bg-[#16173d] text-white">
              Sell for free
            </Button>
            <Button className="bg-[#1D1E4C] hover:bg-[#16173d] text-white">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
