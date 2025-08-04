import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuSquareIcon } from "lucide-react";
import { Button } from "./ui/button";
import { mobileSections } from "../lib/helper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className="px-6 lg:px-40 border-b py-4 flex items-center justify-between">
      <div>
        <span className="text-xl font-semibold">EstateLogo</span>
      </div>

      <div>
        <LanguageSwitcher />
      </div>

      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="font-medium hover:text-gray-600"
              >
                {t("navbar.home")}
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/listings"
                className="font-medium hover:text-gray-600"
              >
                Listings
              </NavigationMenuLink>
            </NavigationMenuItem>

            {mobileSections
              .filter((section) => section.items.length > 0)
              .map((section) => (
                <NavigationMenuItem key={section.title}>
                  <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] ">
                      {section.items.map((item) => (
                        <li key={item}>
                          <NavigationMenuLink asChild>
                            <a href="#" className="block">
                              <div className="font-medium">{item}</div>
                              <div className="text-muted-foreground text-sm">
                                {`Details about ${item.toLowerCase()}.`}
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden md:flex gap-3">
        <Button
          size="sm"
          className="border-orange-400 border-3 text-orange-500 hover:text-orange-600 rounded-4xl"
          variant="outline"
        >
          Login / Signup
        </Button>
        <Button size="sm" className=" bg-orange-500   rounded-4xl">
          Add Listing
        </Button>
      </div>

      {/* mobile menu */}
      <div className="md:hidden fixed top-3 right-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <MenuSquareIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-64 p-6">
            <div className="mt-4 flex flex-col gap-4 text-sm">
              <Accordion type="multiple" className="w-full">
                {mobileSections.map((section) =>
                  section.items.length === 0 ? (
                    <div key={section.title}>
                      <a
                        href="/"
                        className="text-base font-medium hover:underline block mb-2"
                      >
                        {section.title}
                      </a>
                    </div>
                  ) : (
                    <AccordionItem value={section.title} key={section.title}>
                      <AccordionTrigger className="text-base font-medium">
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent className="pl-3">
                        <ul className="flex flex-col gap-2 text-sm font-semibold">
                          {section.items.map((item) => (
                            <li key={item}>
                              <a href="#" className="hover:underline">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  )
                )}
              </Accordion>

              <div className="flex flex-col gap-4">
                <Button variant="outline">Login / Signup</Button>
                <Button>Add Listing</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
