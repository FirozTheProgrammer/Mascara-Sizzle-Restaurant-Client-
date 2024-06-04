// eslint-disable-next-line react/prop-types
const SectionTitle = ({ SubHeading, Heading }) => {
  return (
    <div className="text-xl text-center font-inter mx-auto w-4/12 ">
      {/* subHeading */}
      <p className=" text-[#D99904] italic "> ---{SubHeading}---</p>

      {/* {Heading} */}
      <h2 className="text-4xl font-inter border-y-4 border-[#E8E8E8] mt-4 mb-10 py-4 ">
        {Heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
