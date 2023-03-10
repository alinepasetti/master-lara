import { PantrySection } from 'components/PantrySection';
import { Recipes } from 'components/Recipes';
import { PantryProvider } from 'contexts/PantryProvider';

function Home() {
  return (
    <>
      <PantryProvider>
        <PantrySection />
      </PantryProvider>
      <Recipes />
    </>
  );
}

export default Home;
