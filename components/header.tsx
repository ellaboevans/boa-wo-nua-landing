"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/app/assets/boa-wo-nua.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Our Work", href: "#work" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link
            href={"#home"}
            className="flex hover:cursor-pointer items-center">
            <div className="w-15">
              <Image
                src={Logo}
                alt="BOA WO NUA INITIATIVE"
                className="h-8 object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-base font-bold text-green-600">
                Boa Wo Nua Initiative
              </h1>
              <p className="text-xs text-gray-600">
                Impacting Tomorrow's Leaders
              </p>
            </div>
          </Link>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-green-600 hover:bg-green-700">
              Get Involved
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-ngo-green block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-ngo-green hover:bg-ngo-green-dark">
              Get Involved
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
