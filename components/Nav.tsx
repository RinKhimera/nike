import { hamburger } from "@/assets/icons"
import { headerLogo } from "@/assets/images"
import { navLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <Link href="/">
          <Image src={headerLogo} alt={"Logo"}></Image>
        </Link>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-montserrat text-lg leading-normal text-slate-gray"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <Image
            src={hamburger}
            alt={"Hamburger"}
            width={25}
            height={25}
          ></Image>
        </div>
      </nav>
    </header>
  )
}

export default Nav
