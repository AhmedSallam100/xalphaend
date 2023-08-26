import Button from "./Button";

const PathCard = (props) => {
  return (
    <div className="box">
      <div className="img-box channel-box-img">
        <img className="path-img" src={props.srcImg} alt="jsdev" />
      </div>
      <h2 className="path-h2 fs-24">{props.channelName}</h2>
      <Button href={props.href} />
    </div>
  );
};

export default PathCard;

// Front End Developer
