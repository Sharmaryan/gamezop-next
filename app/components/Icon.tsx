import { IconBaseProps } from "react-icons";
import {
  FaChess,
  FaFootballBall,
  FaGamepad,
  FaParachuteBox,
  FaPuzzlePiece,
} from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import { LuJoystick } from "react-icons/lu";

export interface IconProps extends IconBaseProps {
  name?: string;
}

const Icons: {
  [key: string]: (props: IconBaseProps) => React.JSX.Element;
} = {
  logicIcon: () => {
    return <FaPuzzlePiece className="text-secondary" size={20}/>;
  },
  actionIcon: () => {
    return <FaGun className="text-secondary" size={20}/>;
  },
  adventureIcon: () => {
    return <FaParachuteBox className="text-secondary" size={20}/>;
  },
  strategyIcon: () => {
    return <FaChess className="text-secondary" size={20}/>;
  },
  featuredIcon: () => {
    return <FaGamepad className="text-secondary" size={20}/>;
  },
  arcadeIcon: () => {
    return <LuJoystick className="text-secondary" size={20}/>;
  },
  sportsIcon: () => {
    return <FaFootballBall className="text-secondary" size={20}/>;
  },
};
export const Icon = (props: IconProps) => {
  const { name } = props;
  const IconComponent = name && Icons[name];
  return IconComponent ? <IconComponent /> : null;
};
