import Container from "../../Components/Container/Container";
import SectionTitle from "../../Components/Container/SectionTitle/SectionTitle";
import featured from "../../assets/home/featured.webp";

const FromOurMenu = () => {
  return (
    <div className="bg-featured-BG ">
      <div className="bg-black bg-opacity-50 py-10 ">
        <Container>
          {/*  section title  */}
          <SectionTitle
            SubHeading={"Check it out"}
            Heading={"From our menu"}
          ></SectionTitle>

          <div className="flex flex-col lg:flex-row space-y-5 lg:space-x-12 ">
            <div className="div">
              <img src={featured} alt="" />
            </div>
            <div className="flex flex-col text-white font-inter justify-center space-y-2 ">
              <div className="text-base md:text-2xl">
                <p>June 20, 2024</p>
                <p>WHERE CAN I GET SOME?</p>
              </div>
              <p className="text-sm md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>

              <div>
              <button className="text-sm md:text-xl font-medium pb-1 px-5 mt-5 uppercase border-b-2 rounded-md ">
                Read more
              </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FromOurMenu;
