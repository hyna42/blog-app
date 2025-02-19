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

const Navbar = () => {

  return (
    <nav className="flex items-center justify-between p-4 border-b bg-white relative">
      {/* Bouton "Mon Site" */}
      <Button variant="ghost" className="text-lg font-bold">
        Mon Site
      </Button>

      {/* Menu en mode desktop (visible à partir de md) */}
      <Menubar className="hidden md:flex space-x-4">
        <MenubarMenu>
          <MenubarTrigger>
            <a href="#post">Articles</a>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            <a href="#">Home</a>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            <a href="#contact">Contact</a>
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
