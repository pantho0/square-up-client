import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";

import NextLink from "next/link";
import Logo from "../../public/images/logo.png";
import { siteConfig } from "../config/site";
import { ThemeSwitch } from "../components/theme-switch";
import {
  GithubIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/src/components/icons";
import Image from "next/image";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-[#13050C] text-[#FEE3FA] border-b-1 border-[#FF80C0]"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center" href="/">
            <Image
              width={50}
              height={50}
              src={Logo}
              alt="logo"
              className="mr-2 w-14 h-14"
            />
            <p className="font-bold text-inherit text-2xl">SquareUp</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="basis-1/5 sm:basis-full text-[#FEE3FA]"
        justify="center"
      >
        <ul className="hidden lg:flex gap-4 justify-center ml-2 text-[#FEE3FA]">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={
                  "data-[active=true]:text-[#FEE3FA] data-[active=true]:font-medium text-[#FEE3FA]"
                }
                color="text-[#FEE3FA]"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-[#FEE3FA] bg-[#FD46CD]"
            href={siteConfig.links.sponsor}
            // startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
