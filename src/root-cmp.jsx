import { AppHeader } from "./cmps/AppHeader";
import { TheaterApp } from "./pages/TheaterApp";

export function RootCmp() {
  return (
    <div className="root-cmp">
      <AppHeader />
      <TheaterApp />
    </div>
  );
}



