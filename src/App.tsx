import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-between">
        <Button>Use Me</Button>
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
