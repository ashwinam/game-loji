import { Props } from "./GameCard";
import { IconType } from "react-icons";
import { FaWindows, FaPlaystation, FaXbox, FaLinux } from "react-icons/fa";
import { BsNintendoSwitch, BsGlobe } from "react-icons/bs";
import { RiMacbookLine } from "react-icons/ri";
import { MdAndroid, MdPhoneIphone } from "react-icons/md";

function PlatformIconsList({ game }: Props) {
  const IconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: RiMacbookLine,
    linux: FaLinux,
    android: MdAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      {game.parent_platforms.map(({ platform }) => {
        const IconComponent = IconsMap[platform.slug];
        return <IconComponent key={platform.id} size={"1.3em"} color="gray" />;
      })}
    </>
  );
}

export default PlatformIconsList;
