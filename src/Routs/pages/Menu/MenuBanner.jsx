import menubg from "../../../assets/assets/menu/banner3.jpg";
import Cover from "./../../../Shared/Cover";

const MenuBanner = () => {
  return (
    <div className="text-center logo">
      <div className="[&_*]:text-white">
        <Cover
          img={menubg}
          title="OUR MENU"
          subtitle="Would you like to try a dish?"
        />
      </div>

      
      <style>
        {`
          .logo h1 {
            font-size: 88px !important;
          }
          .logo p {
            font-size: 26px !important;
          }
        `}
      </style>
    </div>
  );
};

export default MenuBanner;
