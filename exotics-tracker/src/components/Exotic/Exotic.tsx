import "./Exotic.css";

export type ExoticProps = {
  exotic: {
    name: string;
    slot: string;
    type: string;
    img: string;
  };
};

export const Exotic = (props: ExoticProps) => {
  const { exotic } = props;
  return (
    <div className="exotic-wrapper">
      <div className="exotic-name">Name: {exotic.name}</div>
      <div className="exotic-slot">Slot: {exotic.slot}</div>
      <div className="exotic-type">Type: {exotic.type}</div>
      <div className="exotic-img">
        <img src={exotic.img} alt="" />
      </div>
    </div>
  );
};
