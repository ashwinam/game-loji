import light_theme_logo from "./assets/removed_bg_logo_cleanup.png";
import dark_theme_logo from "./assets/removed_bg_logo.png";
import { ModeToggle } from "./components/mode-toggle";
import { useTheme } from "./components/theme-provider";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";

function App() {
  return (
    <div className="grid sm:grid-cols-12 gap-4">
      <div className="nav sm:col-span-12 flex items-center justify-between pr-4">
        <img
          src={
            useTheme().theme === "light" ? light_theme_logo : dark_theme_logo
          }
          alt=""
          className="w-24"
        />
        <ModeToggle />
      </div>
      <div className="aside hidden sm:block sm:col-span-2 p-5">
        <GenresList />
      </div>
      <div className="main sm:col-span-10 px-5">
        <GameGrid />
      </div>
    </div>
  );
}

export default App;
