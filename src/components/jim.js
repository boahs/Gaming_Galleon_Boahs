const Jim = (props) => {
  const { data } = props;
  return (
    <div className="Image">
      <img
        src={data}
        height="50%"
        width="50%"
        alt="step three is making sure we can load images as props"
      />
    </div>
  );
};

export default Jim;
