import Container from "../../../Components/Container/Container";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <>
      <div className="">
        <Banner></Banner>
      </div>
      <Container>
        <div className="mx-auto">
          <Category></Category>
        </div>

        {/* Hero section */}

        <div>
          <HeroSection></HeroSection>
        </div>
      </Container>
    </>
  );
};

export default Home;
