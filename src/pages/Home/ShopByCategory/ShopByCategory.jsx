import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CardShopByCategory from "./CardShopByCategory";

const ShopByCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [activeTab, setActiveTab] = useState("marvel");

  useEffect(() => {
    fetch(`https://battle-zone-toys-server.vercel.app/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  // view details handler
  const handleViewDetails = (id) => {
    console.log(id);
  };

  return (
    <div className="md:mx-0 nx-5">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3 text-blue-500 text-center">
          Choose your favorite category
        </h2>
        <p className="text-gray-500 md:w-2/3 mx-auto">
          Find your perfect action figure! Explore diverse categories and choose
          from a wide range of characters to ignite your imagination and create
          epic adventures.
        </p>
      </div>
      <Tabs>
        <TabList className="tabs mx-auto w-fit tabs-boxed bg-blue-500 ">
          {/* select tab */}
          <Tab
            onClick={() => handleTabClick("marvel")}
            className="tab tab-lg text-white"
          >
            Marvel
          </Tab>
          <Tab
            onClick={() => handleTabClick("avengers")}
            className="tab tab-lg text-white"
          >
            Avengers
          </Tab>
          <Tab
            onClick={() => handleTabClick("starWars")}
            className="tab tab-lg text-white"
          >
            Star Wars
          </Tab>
        </TabList>

        {/* data show by tab */}

        <TabPanel className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {categoryData?.map((category) => (
              <CardShopByCategory
                key={category._id}
                category={category}
                handleViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {categoryData?.map((category) => (
              <CardShopByCategory
                key={category._id}
                category={category}
                handleViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {categoryData?.map((category) => (
              <CardShopByCategory
                key={category._id}
                category={category}
                handleViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
