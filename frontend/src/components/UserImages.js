function UserImages(props) {
  return (
    <>
      {props.images.map((image, index) => (
        <img key={index} src={image} alt="" />
      ))}
    </>
  );
}

export default UserImages;
