import About from './elements/about/about';
import Hero from "./elements/hero";
import Community from './elements/community';
import GrowingBusiness from './elements/growing_business';
import GrowBetter from './elements/grow_better';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Community />
      <GrowingBusiness />
      <GrowBetter />
    </div>
  );
};
export default HomePage;
