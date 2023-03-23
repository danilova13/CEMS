
import Carousel from "react-material-ui-carousel";

const ClubCarousel = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Carousel className="w-[50%]">
          <img className="h-[30vh] w-full rounded-lg shadow-xl" src="https://3.files.edl.io/8b47/21/08/19/133942-9c4280ef-a5d0-4ad5-809f-777668d95e1d.png" />
          <img className="h-[30vh] w-full rounded-lg shadow-xl" src="http://www.franklinpta.com/uploads/5/6/8/0/56809307/math_orig.jpg" />
          <img className="h-[30vh] w-full rounded-lg shadow-xl" src="https://thumbs.dreamstime.com/b/music-club-logo-illustration-you-can-used-your-design-your-bar-many-more-bussines-entertainment-67814384.jpg" />
          <img className="h-[30vh] w-full rounded-lg shadow-xl" src="https://thumbs.dreamstime.com/b/vector-thin-line-computer-science-poster-banner-computer-science-poster-banner-template-information-technology-machine-learning-122820300.jpg" />
      </Carousel>
    </div>
  );
};

export default ClubCarousel;
