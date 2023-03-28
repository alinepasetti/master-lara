import NavBar from 'components/NavBar';
import { PantrySection } from 'components/PantrySection';
import { Recipes } from 'components/Recipes';

function Home() {
  return (
    <>
      <NavBar />
      <PantrySection />
      <Recipes />
    </>
  );
}

export default Home;
