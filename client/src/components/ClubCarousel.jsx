
import Carousel from "react-material-ui-carousel";

const ClubCarousel = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1>Homepage</h1>
      <Carousel className="w-[70%]">
          <img src="https://3.files.edl.io/8b47/21/08/19/133942-9c4280ef-a5d0-4ad5-809f-777668d95e1d.png" />
          <img src="http://www.franklinpta.com/uploads/5/6/8/0/56809307/math_orig.jpg" />
          <img src="https://sites.austincc.edu/accent/wp-content/uploads/sites/157/2022/09/Computer-science-club-1200-x-300.png" />
          <img src="https://thumbs.dreamstime.com/b/music-club-logo-illustration-you-can-used-your-design-your-bar-many-more-bussines-entertainment-67814384.jpg" />
      </Carousel>
    </div>
  );
};

export default ClubCarousel;
