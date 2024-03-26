import light_theme_logo from "./assets/removed_bg_logo_cleanup.png";
import dark_theme_logo from "./assets/removed_bg_logo.png";
import { ModeToggle } from "./components/mode-toggle";
import { useTheme } from "./components/theme-provider";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genres } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
      <div className="aside hidden lg:block lg:col-span-2 px-5">
        <GenresList
          selectedGenre={selectedGenre}
          onSelectedGenre={(genre) => setSelectedGenre(genre)}
        />
      </div>
      <div className="main md:col-span-12 lg:col-span-10 px-5">
        <div className="mb-5 flex gap-5">
          <PlatformSelector
            onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <SortSelector />
        </div>
        <GameGrid
          onSelectedGenre={selectedGenre}
          onSelectedPlatform={selectedPlatform}
        />
      </div>
    </div>
  );
}

export default App;
