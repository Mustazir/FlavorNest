import { useEffect, useState } from "react";
import Cover from "../../../Shared/Cover";
import bannerimg from "../../../assets/assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Shared/useMenu";
import Card from "../../../Shared/Card";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OrderTab = () => {
  const [menu] = useMenu();
  const { category } = useParams();

  // Get unique categories from the menu, excluding "popular"
  const uniqueCategories = [
    ...new Set(menu.map((item) => item.category)),
  ]
    .filter((category) => category !== "popular") // Remove "popular" category
    .sort(); // Sort the categories alphabetically

  // Move "offered" category to the first position if it exists
  const sortedCategories = [
    "offered", // Always put "offered" first
    ...uniqueCategories.filter((category) => category !== "offered"),
  ];

  // Set the initial tab index based on the category from URL
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    // Update tabIndex when category changes
    const initialIndex = sortedCategories.indexOf(category);
    if (initialIndex !== -1) {
      setTabIndex(initialIndex);
    }
  }, [category, sortedCategories]);

  // Filter the menu based on the selected category
  const filteredMenu = category
    ? menu.filter((item) => item.category === category)
    : menu;

  return (
    <div>
      <Helmet>
        <title>FlavourNest | Ordered Food</title>
      </Helmet>
      <Cover
        title={"OUR SHOP"}
        subtitle={"Would you like to try a dish?"}
        img={bannerimg}
      />
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          {sortedCategories.map((category, index) => (
            <Tab key={index}>
              <h1 className="uppercase">{category}</h1>
            </Tab>
          ))}
        </TabList>

        {sortedCategories.map((category, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-3 max-w-screen-xl mx-auto">
              {filteredMenu
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
