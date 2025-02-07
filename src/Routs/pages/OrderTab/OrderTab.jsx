import { useEffect, useState } from "react";
import Cover from "../../../Shared/Cover";
import bannerimg from "../../../assets/assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Shared/useMenu";

const OrderTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  // Get unique categories from the menu
  const uniqueCategories = [...new Set(menu.map(item => item.category))];

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
            {menu
              .filter((item) => item.category === category)
              .map((item) => (
                <div key={item._id}>
                  <h2>{item.name}</h2>
                  {/* Add more item details here */}
                </div>
              ))}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default OrderTab;
