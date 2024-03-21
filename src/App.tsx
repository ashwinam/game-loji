import light_theme_logo from "./assets/removed_bg_logo_cleanup.png";
import dark_theme_logo from "./assets/removed_bg_logo.png";
import { ModeToggle } from "./components/mode-toggle";
import { useTheme } from "./components/theme-provider";

function App() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="nav sm:col-span-2 flex items-center justify-between pr-4">
        <img
          src={
            useTheme().theme === "light" ? light_theme_logo : dark_theme_logo
          }
          alt=""
          className="w-24"
        />
        <ModeToggle />
      </div>
      <div className="aside bg-orange-500 hidden sm:block h-20 shadow-lg">
        aside
      </div>
      <div className="main bg-teal-500 h-20 shadow-lg">main</div>
    </div>
  );
}

export default App;
