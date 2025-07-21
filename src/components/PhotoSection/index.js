import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { photos } from './photo-data';

function PhotoSection() {
  const renderYoutubeVideo = () => {
    return (
      <iframe
        title="Pre-Wedding Dinda & Indra"
        width="100%"
        height="360px"
        src="https://www.youtube.com/embed/75w39OY7N-k"
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
              <h2 className="main-font">#Bang & Quynh</h2>
              <p className="sub-title">
                "Có những khoảnh khắc trong đời, dù chỉ lướt qua cũng đủ để khắc ghi mãi mãi. Hành trình của tụi mình
                bắt đầu từ những ánh mắt ngại ngùng thuở học trò, đi qua những năm tháng yêu xa, cùng nhau trưởng thành,
                cùng nhau mơ ước. Hôm nay, khi đã đến được bên nhau – tụi mình muốn mời bạn cùng nhìn lại những hình ảnh
                ngọt ngào ấy… từng nụ cười, từng chuyến đi, từng khoảnh khắc của hai trái tim đã chọn nhau giữa thế giới
                rộng lớn này. Cảm ơn vì đã ở đây để chứng kiến câu chuyện tình yêu của Bang và Quỳnh 💗" <br />
                (Ar-Rum 30:21).
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
