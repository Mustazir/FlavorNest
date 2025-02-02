import Title from "../../../Shared/title";
import bg from "../../../assets/assets/home/featured.jpg";

const FeaturedItem = () => {
  return (
    <section 
      className="relative bg-fixed bg-cover bg-center text-white py-20" 
      style={{ backgroundImage: `url(${bg})` }} 
    >
    
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

    
      <div className="relative w-full md:p-10">
        <Title subheading="Check it out" heading={<span className="text-white">Featured Item</span>} />
        <div className="md:flex px-4 md:px-20 pb-20 gap-14 items-center">
  
          <img className="w-[648px] rounded-lg shadow-lg" src={bg} alt="Featured Item" />

          
          <div className="text-lg space-y-4">
            <p className="text-yellow-300 font-bold">February 02, 2025</p>
            <p className="text-2xl font-semibold">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, 
              deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium 
              tempore consequatur consequuntur omnis ullam maxime tenetur.
            </p>

            {/* ✅ Button Fix */}
            <button className="btn uppercase text-orange-400 border border-gray-500 px-6 py-3 rounded-md shadow-md bg-transparent shadow-slate-300 hover:bg-slate-600 active:bg-gray-800 hover:text-white transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
