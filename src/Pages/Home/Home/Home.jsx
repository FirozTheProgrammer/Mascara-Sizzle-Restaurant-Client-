import Container from "../../../Components/Container/Container";
import CallUs from "../../CallUs/CallUs";
import FromOurMenu from "../../FromOurMenu/FromOurMenu";
import PopularMenu from "../../PopularMenu/PopularMenu";
import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <>
      <div className="">
        <Banner></Banner>
      </div>
      <Container>
        {/* Category Section */}
        <Category></Category>

        {/* Hero section */}
        <HeroSection></HeroSection>

        {/* Popular section */}
        <PopularMenu></PopularMenu>

        {/*  Call us seciton  */}
        <CallUs></CallUs>

        {/* Chef Recommends Section */}
        <ChefRecommends></ChefRecommends>
      </Container>

      {/* From our menu section */}
      <FromOurMenu></FromOurMenu>
      <Container>
        {/* Testimonials Section */}
        <Testimonials></Testimonials>
      </Container>
    </>
  );
};

export default Home;
