import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Landmark } from "lucide-react";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Landmark className="h-8 w-8 text-primary" />
          <span className="text-xl font-heading font-bold tracking-tight text-primary">
            Heritage Conservation Network
          </span>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                render={<Link to="/" />}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                render={<Link to="/cultural-landscape" />}
              >
                Cultural Landscapes
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                render={<Link to="/ws-virginia-city-2007" />}
              >
                Biodiversity Bridge
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                render={<Link to="/participant-info" />}
              >
                Volunteer Hub
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                render={<Link to="/links" />}
              >
                Resources
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Support Our Mission
          </button>
        </div>
      </div>
    </motion.header>
  );
}
