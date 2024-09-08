import { FaChevronDown } from "react-icons/fa";
import { assets } from "../../../assets";
import { NavItem } from "../../atoms/NavItem";

const NAV_ITEMS: { name: string; to: string; isHaveChildren?: boolean }[] = [
  {
    name: "Discover",
    to: "/",
  },
  {
    name: "My Library",
    to: "/",
  },
  {
    name: "Create",
    to: "/",
    isHaveChildren: true,
  },
  {
    name: "Shop",
    to: "/",
  },
  {
    name: "Battle Pass",
    to: "/",
  },
  {
    name: "News",
    to: "/",
  },
  {
    name: "More",
    to: "/",
  },
];
const Navbar = () => {
  return (
    <div className="bg-black px-6 py-6 flex gap-7 items-center">
      <div className="flex items-center gap-1">
        <img src={assets.IMGEpicLogo} alt="epic-logo" className="w-7" />
        <FaChevronDown className="text-white" size={10} />
      </div>
      <div className="">
        <img
          src={assets.FortNiteLogo}
          alt="fortnite-text-logo"
          className="w-20"
        />
      </div>
      {NAV_ITEMS.map(({ name, to, isHaveChildren }) => (
        <NavItem isHaveChildren={isHaveChildren} key={name} to={to}>
          {name}
        </NavItem>
      ))}
    </div>
  );
};

export default Navbar;
