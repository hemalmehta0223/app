import brandListData from "./brandListData";
import channelListData from "./channelListData";

const getBranches = () => {
  return brandListData.map((brand) => {
    return channelListData.map((channel, index) => ({
      id: index + 1,
      name: brand.name + " " + channel.name,
    }));
  });
};

export default getBranches().flat(1);
