import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="Akad Nikah" time="08.00 WIB (Live di Instagram)" date="Sabtu, 03 Oktober 2020" />
        </div>
        <ButtonLive />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font main-font__wedding">Hôn Lễ</h2>
            </div>
          </div>
          <div className="row">
            {!isInvitation && renderGuestInfo()}
            {isInvitation && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Lễ Vu Quy"
                  time="7:00AM - 8:00AM"
                  date="Thứ 5, ngày 21 tháng 8 2025"
                  description="Nhà Gái <br/>Nam Phổ Hạ, Lộc An, Thành phố Huế"
                />
                <WeddingInfoBox
                  title="Lễ Thành Hôn"
                  time="9:00AM - 10:00AM"
                  date="Thứ 5, ngày 21 tháng 8 2025"
                  description="Nhà Trai <br/>Thuận Hóa, Hưng Lộc, Thành phố Huế"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
