import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img className="h-[100vh] object-cover" src="https://media.istockphoto.com/id/531782050/photo/grocery-store-produce-department.jpg?s=1024x1024&w=is&k=20&c=Pldo9tr76jyqv8VpSgRJi7DUXbw1ASRfGhDswwWsEGQ=" />

        </div>
        <div>
          <img className="h-[100vh] object-cover" src="http://images.huffingtonpost.com/2016-04-09-1460214027-6283509-Ingredients.jpg" />
        </div>
        <div>
          <img className="h-[100vh] object-cover" src="http://1.bp.blogspot.com/-cVw29UUtpg0/Ttd-ur7l9YI/AAAAAAAAABY/cGCGMfolD-I/s1600/product_list_for_website%2bcopy.jpg" />
        </div>
        <div>
          <img className="h-[100vh] object-cover" src="https://media.istockphoto.com/id/171340119/photo/american-grocery-assortment-for-food-drive.jpg?s=1024x1024&w=is&k=20&c=fMO2Di0rzo79VXt9c6iIF5dXQOArVkrp1uADBBsKPjo=" />
          {/* <p className="legend">TV</p> */}
        </div>
      </Carousel>

    </>
  )
}

export default HomeCarousel
