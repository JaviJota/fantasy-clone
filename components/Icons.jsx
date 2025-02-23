import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Foundation from "@expo/vector-icons/Foundation";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export const MenuIcon = (props) => {
  return <FontAwesome5 name="grip-lines" size={20} color="white" {...props} />;
};

export const BellIcon = (props) => {
  return <FontAwesome5 name="bell" size={20} color="white" {...props} />;
};

export const TrophyIcon = (props) => {
  return (
    <MaterialCommunityIcons
      name="trophy-variant-outline"
      size={26}
      color="white"
      {...props}
    />
  );
};

export const ChartIcon = (props) => {
  return <Ionicons name="podium-outline" size={26} color="white" {...props} />;
};

export const SoccerFieldIcon = (props) => {
  return (
    <MaterialCommunityIcons
      name="soccer-field"
      size={26}
      color="white"
      {...props}
    />
  );
};

export const MarketIcon = (props) => {
  return <AntDesign name="shoppingcart" size={26} color="white" {...props} />;
};

export const ActivityIcon = (props) => {
  return (
    <Foundation name="clipboard-notes" size={26} color="white" {...props} />
  );
};

export const LiveIcon = (props) => {
  return <FontAwesome6 name="wifi" size={11} color="white" {...props} />;
};

export const ChevronDownIcon = (props) => {
  return (
    <FontAwesome6 name="chevron-down" size={14} color="white" {...props} />
  );
};

export const OptionsIcon = (props) => {
  return (
    <SimpleLineIcons
      name="options-vertical"
      size={24}
      color="black"
      {...props}
    />
  );
};
