import ButtonP from "../../../Shared/ButtonP";
import Cover from "../../../Shared/Cover";
import MenuItems from "../../../Shared/MenuItems";
import useMenu from "../../../Shared/useMenu";
import dImg from "../../../assets/assets/menu/dessert-bg.jpeg";

const Dessert = () => {
  const [menu] = useMenu();
  const todaysOffer = menu.filter((item) => item.category === "dessert");
  return (
    <div>
      <div className="logo">
        <Cover
          title={"DESSERTS"}
          subtitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          img={dImg}
        ></Cover>
      </div>

      <div className="max-w-screen-xl mx-auto my-24">
        <div className="p-3 md:grid grid-cols-2 gap-8 mb-8">
          {todaysOffer.map((item) => (
            <MenuItems key={item._id} item={item}></MenuItems>
          ))}
        </div>
        <div className="flex justify-center">
          <ButtonP ButtonInfo={"ORDER YOUR FAVOURITE FOOD"}></ButtonP>
        </div>
      </div>
      <style>
        {`
          .logo h1 {
            font-size: 45px !important;
          }
          .logo p {
            font-size: 16px !important;
          }
        `}
      </style>
    </div>
  );
};

export default Dessert;
