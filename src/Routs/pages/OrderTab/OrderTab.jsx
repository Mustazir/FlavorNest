import { useEffect, useState } from "react";
import Cover from "../../../Shared/Cover";
import bannerimg from "../../../assets/assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Shared/useMenu";
import Card from "../../../Shared/Card";

const OrderTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

  // Get unique categories from the menu
  const uniqueCategories = [...new Set(menu.map((item) => item.category))];

  return (
    <div>
      <Cover
        title={"OUR SHOP"}
        subtitle={"Would you like to try a dish?"}
        img={bannerimg}
      />
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          {uniqueCategories.map((category, index) => (
            <Tab key={index}>
              <h1>{category}</h1>
            </Tab>
          ))}
        </TabList>
        {uniqueCategories.map((category, index) => (
          <TabPanel key={index}>
            {/* You can map over the menu and show items that belong to this category */}
            <div className="grid grid-cols-3 max-w-screen-xl mx-auto">
              {menu
                .filter((item) => item.category === category)
                .map((item) => (
                  <Card
                    key={item._id}
                    name={item.name}
                    description={item.recipe}
                    img={item.image}
                  ></Card>
                ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default OrderTab;









