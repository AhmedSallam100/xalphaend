const SectionTitle = (props) => {
  return (
    <div id={props.id} className="wb-1 m-wb bg-white p-10 m-10 mb-25">
      <div className="inf inf-2">
        <h2 className="web-h2">{props.title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
