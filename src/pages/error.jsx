import errorSvg from "../assets/img/404.png";

const Error = () => {
  return (
    <div className="error">
      <img src={errorSvg} alt="404 Error" />
    </div>
  );
};

export default Error;
