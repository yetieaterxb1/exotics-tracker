import { Exotic } from "../Exotic/Exotic";
import "./ExoticsList.css";

type ExoticsListProps = {
  exotics: {
    name: string;
    slot: string;
    type: string;
    img: string;
  }[];
};

export const ExoticsList = (props: ExoticsListProps) => {
  const { exotics } = props;

  return (
    <div className="exotics-list-wrapper">
      <div>
        {exotics.map((exotic) => (
          <Exotic exotic={exotic} />
        ))}
      </div>
    </div>
  );
};
