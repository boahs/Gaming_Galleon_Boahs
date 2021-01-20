const Jim = (props) => {
  const { data } = props;
  return (
    <div className="Image">
      <center>
        <img
          src={data}
          height="20%"
          width="20%"
          alt="step three is making sure we can load images as props"
        />
      </center>
    </div>
  );
};

export default Jim;
