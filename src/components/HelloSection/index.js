import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-quynh.jpg';
import Groom from '@assets/images/p-bang.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation ? '11:00 AM • 21/08/2025 • Nhà hàng Long Phụng' : 'TP Huế • 21/08/2025';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Chúng Mình Nè</h2>
              <h3 className="sub-title hs">{finalSubtitle}</h3>
              <p className="info">
                Gặp nhau từ những ngày ngây ngô nhất. Yêu nhau qua thư tay, tin nhắn, video call, những lần giận hờn...
                và bây giờ là yêu nhau cả đời 💗.
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Nguyễn Văn Bàng.</h3>
                <p className="parent-name parent-name__top">
                  Nguyễn Văn Hữu <br /> & Lê Thị Lan
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Hồ Thị Như Quỳnh.</h3>
                <p className="parent-name">
                  Hồ Dũng <br /> & Trần Thị Tâm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
