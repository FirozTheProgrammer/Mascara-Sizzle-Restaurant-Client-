// eslint-disable-next-line react/prop-types, no-unused-vars
const MenuItems = ({ item }) => {
  const { name, recipe, image, price } = item || {};
  return (
    <div className="flex flex-row font-inter space-x-2 ">
   <div>
   <img
        src={image}
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[105px] md:w-52 lg:w-28"
      />
   </div>

      <div>
        <p className="text-xl font-cinzel">{name} --------</p>
        <p className="text-base">{recipe}</p>
      </div>
      <p className="text-xl text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItems;
