import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";
import { Menu } from "lucide-react"; // Icônes pour burger
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b bg-white relative">
      {/* Bouton "Mon Site" */}
      <Link to="/">
        <Button variant="ghost" className="text-lg font-bold">
          MonSite
        </Button>
      </Link>

      {/* Menu en mode desktop (visible à partir de md) */}
      <Menubar className="hidden md:flex space-x-4">
        <MenubarMenu>
          <MenubarTrigger>
            <Link to="/">Home</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link to="post/new">Poster un acrticle</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link to="contact">Contact</Link>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup>
              <MenubarRadioItem value="email">Email</MenubarRadioItem>
              <MenubarSeparator />
              <MenubarRadioItem value="tel">Téléphone</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      {/* Menu mobile (visible uniquement si open est true) */}

      {/* Menu Mobile - Dropdown */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Menu size={24} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
              <a href="#post">Articles</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="#">Home</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="#contact">Contact</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
