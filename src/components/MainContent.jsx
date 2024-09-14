import { Flex } from "antd";
import Banner from "./Banner";
import ProductLists from "./ProductLists";
import SallerLists from "./SallerLists";

const MainContent = () => {
  return (
    <div style={{ flex: 1 }}>
      <Flex vertical gap="2.3rem">
        <Banner />
        <ProductLists />
        <SallerLists />
      </Flex>
    </div>
  );
};

export default MainContent;
