import light_theme_logo from "../assets/removed_bg_logo_cleanup.png";
import dark_theme_logo from "../assets/removed_bg_logo.png";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "./theme-provider";
import { Input } from "@/components/ui/input";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearchText: (searchText: string) => void;
}

function Navbar({ onSearchText }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <img
        src={useTheme().theme === "light" ? light_theme_logo : dark_theme_logo}
        alt=""
        className="w-24"
      />
      <form
        action=""
        className="w-full"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearchText(ref.current.value);
        }}
      >
        <div className="relative basis-full mr-2 flex items-center">
          <Input
            ref={ref}
            className="rounded-[25px] font-bold px-12 text-xl h-11 placeholder:font-bold placeholder:text-xl shadow-sm outline-fuchsia-500"
            placeholder="Search Games ..."
          />
          <BsSearch className="absolute left-4 font-bold" size="1.3em" />
        </div>
      </form>
      <ModeToggle />
    </>
  );
}

export default Navbar;
