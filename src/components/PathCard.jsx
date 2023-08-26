import Button from "./Button";

const PathCard = (props) => {
  return (
    <div className="box">
      <div className="img-box">
        <img className="path-img" src={props.srcImg} alt="jsdev" />
      </div>
      <h2 className="path-h2">{props.pathH2}</h2>
      <Button href={props.href} />
    </div>
  );
};

export default PathCard;

// Front End Developer
