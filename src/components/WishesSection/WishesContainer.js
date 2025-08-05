import React, { useState, useEffect, useCallback } from 'react';

import WishesItem from './WishesItem';
// import { wishlist } from './wishlist-data';
import { styButtonWrapper } from './styles';

import img1 from '@assets/images/img1.jpg';
import img2 from '@assets/images/img2.jpg';

const INTERVAL_SLIDE = 35000;

function WishesContainer() {
  const [active, setActive] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [pauseSlide, setPauseSlide] = useState(false);
  const totalWishes = wishlist.length || 0;
  const images = [img1, img2];

  useEffect(() => {
    async function fetchWishlist() {
      try {
        const res = await fetch(
          'https://script.google.com/macros/s/AKfycbyydU9gc_-WxxcI7P2ZI0aXpaJEG5xXpvCDvuL2NSXDJ1NlGf33GiRZN0Fp1Ek-mg5tmQ/exec',
        );

        const rawData = await res.json(); // JSON từ Google Sheet

        // Chuyển đổi từng entry thành định dạng bạn muốn
        const wishlistWithImages = rawData.map((item) => ({
          name: item.Name,
          description: item.Message || '', // fallback nếu không có message
          image: images[Math.floor(Math.random() * images.length)],
        }));

        setWishlist(wishlistWithImages);
      } catch (error) {
        console.error('Lỗi fetch wishlist:', error);
      }
    }

    fetchWishlist();

    const intervalId = setInterval(fetchWishlist, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSetActive = (isNext = true) => {
    if (isNext) {
      if (active === totalWishes - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    } else {
      if (active === 0) {
        setActive(totalWishes - 1);
      } else {
        setActive(active - 1);
      }
    }

    setPauseSlide(true);

    setTimeout(() => {
      setPauseSlide(false);
    }, INTERVAL_SLIDE);
  };

  const handleSetNext = useCallback(() => {
    if (active === wishlist.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }, [active]);

  const renderWishlist = () => {
    return wishlist.map((w, index) => <WishesItem key={index} {...w} isActive={index === active} />);
  };

  /** Side effect to autoscroll */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseSlide) {
        handleSetNext();
      } else {
        clearInterval(interval);
      }
    }, INTERVAL_SLIDE);

    return () => clearInterval(interval);
  }, [handleSetNext, pauseSlide]);

  return (
    <div className="wrap-testimony">
      {renderWishlist()}
      <div css={styButtonWrapper}>
        <button className="btn btn-sm button-nav" onClick={() => handleSetActive(false)}>{`< Previous`}</button>
        <button className="btn btn-sm button-nav" onClick={() => handleSetActive(true)}>{`Next >`}</button>
      </div>
    </div>
  );
}

export default React.memo(WishesContainer);
