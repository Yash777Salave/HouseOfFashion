// ScrollingBanners.tsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { setCurrentBannerIndex } from "../redux/bannersSlice";
import "./styled/BannerSlider.css";
interface Banner {
  id: number;
  imageURL: string;
}

interface ScrollingBannersProps {
  banners: Banner[];
  autoScrollInterval?: number;
}

const ScrollingBanners: React.FC<ScrollingBannersProps> = ({
  banners,
  autoScrollInterval = 5000,
}) => {
  const dispatch = useDispatch();
  const currentBannerIndex = useSelector(
    (state: any) => state.banners.currentBannerIndex
  );

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      dispatch(
        setCurrentBannerIndex(
          currentBannerIndex === 0 ? banners.length - 1 : currentBannerIndex - 1
        )
      );
    } else if (direction === "right") {
      dispatch(
        setCurrentBannerIndex(
          currentBannerIndex === banners.length - 1 ? 0 : currentBannerIndex + 1
        )
      );
    }
  };

  useEffect(() => {
    const autoScrollTimer = setInterval(() => {
      dispatch(
        setCurrentBannerIndex(
          currentBannerIndex === banners.length - 1 ? 0 : currentBannerIndex + 1
        )
      );
    }, autoScrollInterval);

    return () => {
      clearInterval(autoScrollTimer);
    };
  }, [currentBannerIndex]);

  return (
    <div className="scrolling-banners">
      <div
        className="banner-container"
        style={{ transform: `translateX(-${currentBannerIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="banner"
            style={{ backgroundImage: `url(${banner.imageURL})` }}
          />
        ))}
      </div>
      <div className="arrow-container">
        <FaArrowLeft
          className="arrow"
          onClick={() => handleArrowClick("left")}
        />
        <FaArrowRight
          className="arrow"
          onClick={() => handleArrowClick("right")}
        />
      </div>
    </div>
  );
};

export default ScrollingBanners;
