import Home from "../assets/img/Home.svg";
import calender from "../assets/img/calender.svg";
import message from "../assets/img/message.svg";
import profile from "../assets/img/profile.svg";
import { PlusCircleFilled } from "@ricons/antd";
import { Icon } from "@ricons/utils";
const Footer = () => {
  return (
    <div className="mt-auto flex h-24 items-center justify-evenly">
      <span className="flex w-8 flex-col items-center ">
        <img src={Home} />
        <p>Home</p>
      </span>
      <span className="flex w-8 flex-col items-center">
        <img src={message} />
        <p>Message</p>
      </span>
      <span className="mb-4 flex w-8 flex-col items-center">
        <Icon color="blue" size={45}>
          <PlusCircleFilled />
        </Icon>
      </span>
      <span className="flex w-8 flex-col items-center">
        <img src={calender} />
        <p>Calender</p>
      </span>
      <span className="flex w-8 flex-col items-center">
        <img src={profile} />
        <p>Profile</p>
      </span>
    </div>
  );
};

export default Footer;
