"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathName = usePathname() || "/";

  const isActive = (path) => path === pathName || path === `${pathName}/`;

  return (
    <Sheet>
      <SheetTrigger
        className="flex justify-center items-center"
        aria-label="Open navigation menu"
      >
        <CiMenuFries className="text-[32px] text-accent " />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <div className="text-4xl font-semibold">
              Hiru<span className="text-accent">.</span>
            </div>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className={`${
                isActive(link.path)
                  ? "text-accent border-b-2 border-accent"
                  : ""
              } text-xl hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
