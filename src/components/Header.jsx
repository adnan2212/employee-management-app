import { MdNotificationsOutline } from "@ricons/ionicons4";
import { Icon } from "@ricons/utils";
import Vector from "../assets/img/Vector.png";
import DropdownMenu from "./DropdownMenu";

const Header = ({ userName }) => {
  return (
    <div
      className="flex h-32
    items-center justify-between rounded-b-2xl bg-[#2051E5] p-2 pb-0 "
    >
      <div className="ml-3 pt-6 text-white">
        <img className="absolute left-0 top-0" src={Vector} />
        <p className="font-sans text-xs font-light opacity-80">Hello,</p>
        <p className="color-text font-sans text-2xl font-semibold">
          {userName}
        </p>
      </div>
      <div className="flex  items-center justify-between pt-5">
        <span className="mx-6">
          <Icon color="white" size={20}>
            <MdNotificationsOutline />
          </Icon>
        </span>

        <span className="mr-3">
          <Icon color="white" size={20}>
            <DropdownMenu />
          </Icon>
        </span>
      </div>
    </div>
  );
};

export default Header;
