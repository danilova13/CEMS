import Carousel from "react-material-ui-carousel";

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Carousel>
        {this.props.item.images.map((image, i) => (
          <img key={i} src={image} />
        ))}
      </Carousel>
    </div>
  );
};

export default Homepage;
