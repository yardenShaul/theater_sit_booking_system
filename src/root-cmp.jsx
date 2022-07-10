import { AppHeader } from "./cmps/AppHeader";
import { SectionsList } from "./cmps/SectionsList";

export function RootCmp() {

  return (
    <div className="root-cmp">
      <AppHeader />
      <SectionsList />
    </div>
  );
}



