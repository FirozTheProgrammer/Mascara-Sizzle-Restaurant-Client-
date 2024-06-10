import SectionTitle from "../../../Components/Container/SectionTitle/SectionTitle";
import image1 from "../../../assets/home/slide1.webp";
import image2 from "../../../assets/home/slide2.webp";
import image3 from "../../../assets/home/slide3.webp";

const ChefRecommends = () => {
  return (
    <>
      <section className="mb-10 md:mb-20">
        {/* section title */}
        <div>
          <SectionTitle
            SubHeading={"Should Try"}
            Heading={"Chep Recommends"}
          ></SectionTitle>
        </div>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 space-x-7  gap-8 ">
       <div className="card font-inter md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="scale-150" src={image1} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn border-b-2 border-  uppercase">add to cart</button>
            </div>
          </div>
        </div>
       <div className="card font-inter lg:w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="scale-150" src={image2} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn border-b-2 border-  uppercase">add to cart</button>
            </div>
          </div>
        </div>
       <div className="card font-inter md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="scale-150" src={image3} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn border-b-2 border-  uppercase">add to cart</button>
            </div>
          </div>
        </div>
       <div className="card font-inter md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="scale-150" src={image1} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn border-b-2 border-  uppercase">add to cart</button>
            </div>
          </div>
        </div>
       <div className="card font-inter lg:w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="scale-150" src={image2} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn border-b-2 border-  uppercase">add to cart</button>
            </div>
          </div>
        </div>
       <div className="card font-inter md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="scale-150" src={image3} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn border-b-2 border-  uppercase">add to cart</button>
            </div>
          </div>
        </div>
       </div>
      </section>
      
    </>
  );
};

export default ChefRecommends;
