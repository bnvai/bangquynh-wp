import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { photos } from './photo-data';

function PhotoSection() {
  const renderYoutubeVideo = () => {
    return (
      <iframe
        title="Pre-Wedding Bàng & Quỳnh"
        width="100%"
        height="450px"
        src="https://www.youtube.com/embed/EEF4cj2wMSk?autoplay=1&mute=1"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  };

  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">#Bàng & Quỳnh</h2>
              <p className="sub-title">
                "Có những khoảnh khắc lướt qua nhưng khắc ghi mãi mãi. Hành trình của tụi mình bắt đầu từ ánh mắt thuở
                học trò, đi qua yêu xa, cùng nhau lớn lên và mơ ước. Hôm nay, khi đã nắm tay nhau trọn vẹn, tụi mình mời
                bạn cùng nhìn lại những nụ cười, chuyến đi, và những giây phút ngọt ngào mà hai trái tim đã chọn nhau
                giữa thế giới rộng lớn này. Cảm ơn vì đã ở đây – chứng kiến câu chuyện tình yêu của Chúng Mình 💗".
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">{renderYoutubeVideo()}</div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <ImageGallery items={photos} showBullets={false} />;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
