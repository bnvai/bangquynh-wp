import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      {!isInvitation && (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Lời Cảm Ơn</h2>
                <p className="info">
                  Từ tận đáy lòng, chúng mình xin gửi lời cảm ơn chân thành đến gia đình, bạn bè và tất cả những ai đã
                  dành thời gian, tình cảm và lời chúc tốt đẹp cho chúng mình trong dịp trọng đại này.
                </p>
                <p className="info">
                  Dù quý vị có thể hiện diện hay chỉ gửi lời chúc từ xa, sự hiện diện và yêu thương của quý vị luôn là
                  nguồn động viên to lớn đối với chúng tôi.
                </p>
                <p className="info">
                  Một lần nữa, xin chân thành cảm ơn và kính chúc quý vị cùng gia đình luôn mạnh khỏe, bình an và hạnh
                  phúc.
                </p>
                <p className="info">
                  Trân trọng,
                  <br />
                  [Bàng] & [Quỳnh]
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2025 Bàng & Quỳnh Wedding. All Rights Reserved.</small>
                <small className="block">💖 Làm bằng cả tấm lòng gửi đến người con gái của đời tôi.</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
