import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { object } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper } from './styles';
import { styButtonWrapper } from './styles';
import qrImage from '@assets/images/QR.jpg';

function TicketData({ guest, configData }) {
  const [message, setMessage] = useState('');

  console.log('useState:', useState);
  // Thay URL Google Apps Script của bạn vào đây
  const GOOGLE_SHEET_URL =
    'https://script.google.com/macros/s/AKfycbwrnp8Nz6dXBMcCtAof5B1PtUjlaaeCmnuGrtDdCk__sea7xzZYQX9KbjW7pxURaoPKAg/exec';

  const handleSubmitAttendance = async (isAttending) => {
    setIsSubmitting(true);
    const payload = {
      name: guest.name,
      code: guest.code,
      isAttending,
      message,
    };

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      setTimeout(() => {
        alert(
          isAttending
            ? 'Cảm ơn bạn đã xác nhận tham gia nhé! 💖'
            : 'Rất tiếc bạn không thể tham dự, cảm ơn bạn đã thông báo nhé!',
        );

        setMessage('');
        setIsSubmitting(false);
        window.location.href = `/?type=invitation&to=${guest.name}&code=${guest.code}`;
      }, 2000);
    } catch (error) {
      alert('Gửi phản hồi thất bại rồi, bạn thử lại nhé 😢');
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div css={styWrapper} className="container">
      <h2 style={{ marginBottom: 16, color: '#e91e63', fontFamily: "'Pacifico', cursive" }}>
        ✨ Gửi Lời Chúc Dễ Thương ✨
      </h2>

      <p style={{ marginBottom: 12, fontSize: 16, lineHeight: 1.5, color: '#555' }}>
        Tụi mình <b>rất mong được gặp bạn</b> trong ngày vui nè 🎉 Nhưng nếu bạn bị deadline dí, vướng công chuyện, hay
        bị kẹt ở vũ trụ song song 🌀 thì vẫn có thể “góp vui từ xa” bằng cách cực kỳ hiện đại phía dưới đây nha 😚
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        {/* QR Code chuyển khoản */}
        <div style={{ textAlign: 'center' }}>
          <img
            src={qrImage}
            alt="Mã QR chuyển khoản ngân hàng"
            style={{
              width: 220,
              height: 220,
              borderRadius: 12,
              border: '1px solid #ccc',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <p style={{ fontSize: 14, color: '#999', marginTop: 8 }}>QR cho nhanh gọn lẹ nha 📱</p>
        </div>

        {/* Thông tin ngân hàng */}
        <div style={{ fontSize: 18, lineHeight: 1.6, color: '#333' }}>
          <p>
            🏦 <strong>Ngân hàng:</strong> Vietcombank
          </p>
          <p>
            🔢 <strong>Số tài khoản:</strong> 1051504398
          </p>
          <p>
            👤 <strong>Chủ tài khoản:</strong> Hồ Thị Như Quỳnh
          </p>
          <p>
            📝 <strong>Nội dung:</strong> {guest.code || guest.name}
          </p>
        </div>

        {/* Nhập lời nhắn */}
        <div
          style={{
            marginTop: 20,
            textAlign: 'left',
            maxWidth: 480,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <label htmlFor="message" style={{ fontWeight: '600', color: '#f14e95' }}>
            💌 Lời nhắn dễ thương cho tụi mình (tuỳ chọn):
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Viết gì đó gửi đến bọn mình nhé..."
            rows={4}
            style={{
              width: '100%',
              borderRadius: 8,
              border: '1px solid #ccc',
              padding: 12,
              fontSize: 16,
              resize: 'vertical',
              marginTop: 8,
            }}
          />
        </div>
      </div>

      {/* Trạng thái gửi */}
      {isSubmitting && <p style={{ color: '#888', marginTop: 12, textAlign: 'center' }}>⏳ Đang gửi phản hồi...</p>}

      {/* Nút RSVP */}
      <div css={styButtonWrapper}>
        <button className="btn attend" onClick={() => handleSubmitAttendance(true)} disabled={isSubmitting}>
          🎉 Tôi sẽ tham gia!
        </button>

        <button
          className="btn decline"
          onClick={() => handleSubmitAttendance(false)}
          disabled={isSubmitting}
          style={{ marginLeft: 12 }}
        >
          😞 Không tham gia
        </button>
      </div>

      {/* Nút quay lại */}
      <Link to={`/?type=invitation&to=${guest.name}&code=${guest.code}`}>
        <button
          className="btn primary"
          style={{ marginTop: 24, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        >
          {'< Quay về trang chính'}
        </button>
      </Link>
    </div>
  );
}

TicketData.propTypes = {
  guest: object,
  configData: object,
};

TicketData.defaultProps = {
  guest: {},
  configData: {},
};

export default TicketData;
