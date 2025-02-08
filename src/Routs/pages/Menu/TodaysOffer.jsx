import { Link, useParams } from "react-router-dom";
import ButtonP from "../../../Shared/ButtonP";
import MenuItems from "../../../Shared/MenuItems";
import Title from "../../../Shared/title";
import useMenu from "../../../Shared/useMenu";

const TodaysOffer = () => {
  const [menu] = useMenu();
  
  const dessert = menu.filter((item) => item.category === "offered");
  return (
    <div className="mb-10">
      <Title heading={"TODAY'S OFFER"} subheading={"Don't miss"}></Title>

      <div className="p-3 md:grid grid-cols-2 gap-8 mb-8">
        {dessert.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <Link to={`/order/${dessert[0]?.category}`}>
  <div className="flex justify-center">
    <ButtonP ButtonInfo={"ORDER YOUR FAVOURITE FOOD"}></ButtonP>
  </div>
</Link>

    </div>
  );
};

export default TodaysOffer;
