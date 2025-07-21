import React from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper, styFlex } from './styles';

function ConfirmationSection({ isInvitation, guestName, codeLink }) {
  if (!isInvitation) return null;

  return (
    <div id="fh5co-started" className="fh5co-bg" css={styWrapper}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">{` Bạn có đến tham dự không, ${guestName}?`}</h2>
            <p>
              Sự hiện diện và lời chúc phúc của quý anh/chị/bạn là niềm vinh hạnh to lớn đối với gia đình chúng tôi/i,{' '}
              <br /> Xin chân thành cảm ơn và kính chúc quý vị sức khỏe, hạnh phúc và bình an.
            </p>
          </div>
        </div>
        <div className="row" css={styFlex}>
          <div className="col-md-3">
            <Link to={`e-ticket?${codeLink}`}>
              <button className="btn btn-default btn-block">Link e-Ticket</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

ConfirmationSection.propTypes = {
  codeLink: string.isRequired,
  isInvitation: bool.isRequired,
  guestName: string.isRequired,
};

export default React.memo(ConfirmationSection);
