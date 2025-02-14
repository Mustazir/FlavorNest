import { useEffect, useState, useMemo } from "react";
import Cover from "../../../Shared/Cover";
import bannerimg from "../../../assets/assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Shared/useMenu";
import Card from "../../../Shared/Card";
import { useParams, useNavigate } from "react-router-dom";

const OrderTab = () => {
  const [menu] = useMenu();
  const { category } = useParams();
  const navigate = useNavigate();

  const [categoryCount, setCategoryCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  // Fetch selected category count
  useEffect(() => {
    fetch(`http://localhost:5000/menucount/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryCount(data.count);
        setCurrentPage(0); // Reset page when category changes
      });
  }, [category]);

  // Calculate total pages
  const totalNoOfPages = Math.ceil(categoryCount / itemsPerPage);
  const pages = [...Array(totalNoOfPages).keys()];

  // Handle items per page change
  const handlePages = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(0); // Reset to first page
  };

  // Extract unique categories
  const uniqueCategories = useMemo(() => {
    return [
      "offered",
      ...[...new Set(menu.map((item) => item.category))].filter((cat) => cat !== "popular"),
    ];
  }, [menu]);

  // Set tab index based on category
  const initialIndex = uniqueCategories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex !== -1 ? initialIndex : 0);

  useEffect(() => {
    const newIndex = uniqueCategories.indexOf(category);
    if (newIndex !== -1) {
      setTabIndex(newIndex);
    }
  }, [category, uniqueCategories]);

  const handleTabChange = (index) => {
    setTabIndex(index);
    navigate(`/order/${uniqueCategories[index]}`);
  };

  // Function to handle previous page
  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  // Function to handle next page
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalNoOfPages - 1));
  };

  return (
    <div>
      <Cover title={"OUR SHOP"} subtitle={"Would you like to try a dish?"} img={bannerimg} />
      <Tabs selectedIndex={tabIndex} onSelect={handleTabChange}>
        <TabList>
          {uniqueCategories.map((category, index) => (
            <Tab key={index}>
              <h1>{category}</h1>
            </Tab>
          ))}
        </TabList>

        {uniqueCategories.map((category, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto">
              {menu
                .filter((item) => item.category === category)
                .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage) // Apply Pagination
                .map((item) => (
                  <Card key={item._id} name={item.name} description={item.recipe} img={item.image} />
                ))}
            </div>
          </TabPanel>
        ))}

        {/* Pagination Controls */}
        <div className="mx-auto text-center my-5">
          {/* Previous Button */}
          <button
            onClick={handlePreviousPage}
            className="text-xs mx-3 rounded-full bg-green-400 py-2 px-3 border border-gray-700 hover:bg-red-800 hover:text-white cursor-pointer"
            disabled={currentPage === 0}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`mx-3 rounded-full text-xs py-2 px-4 border border-gray-700 ${
                currentPage === page
                  ? "bg-black text-white"
                  : "bg-green-400 hover:bg-red-800 hover:text-white active:bg-green-950 active:text-white cursor-pointer"
              }`}
            >
              {page + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={handleNextPage}
            className="mx-3 rounded-full bg-green-400 text-xs py-2 px-3 border border-gray-700 hover:bg-red-800 hover:text-white cursor-pointer"
            disabled={currentPage === totalNoOfPages - 1}
          >
            Next
          </button>

          {/* Items Per Page Dropdown */}
          <select
            className="bg-green-400 p-3 border-purple-900 border ml-3 cursor-pointer"
            value={itemsPerPage}
            onChange={handlePages}
          >
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
          </select>
        </div>
      </Tabs>
    </div>
  );
};

export default OrderTab;
