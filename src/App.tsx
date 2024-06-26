import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genres } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import Navbar from "./components/Navbar";
import GameHeading from "./components/GameHeading";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [searchValue, setSearchValue] = useState("");

  const [sortSelected, setSortSelected] = useState("");

  return (
    <div className="grid sm:grid-cols-12 gap-4">
      <div className="nav sm:col-span-12 flex items-center pr-4">
        <Navbar onSearchText={(searchText) => setSearchValue(searchText)} />
      </div>

      <div className="aside hidden lg:block lg:col-span-2 px-5">
        <GenresList
          selectedGenre={selectedGenre}
          onSelectedGenre={(genre) => setSelectedGenre(genre)}
        />
      </div>
      <div className="main md:col-span-12 lg:col-span-10 px-5">
        <GameHeading platform={selectedPlatform} genre={selectedGenre} />
        <div className="mb-8 flex gap-5">
          <PlatformSelector
            onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <SortSelector
            onSortSelected={(sortOrder) => setSortSelected(sortOrder)}
          />
        </div>
        <GameGrid
          onSelectedGenre={selectedGenre}
          onSelectedPlatform={selectedPlatform}
          onSortSelected={sortSelected}
          onSearchField={searchValue}
        />
      </div>
    </div>
  );
}

export default App;
