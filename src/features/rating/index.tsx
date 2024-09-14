import React, { useState } from "react";
import { string, number, func, bool } from "prop-types";
import styles from "./rating.module.css";
import RatingIcon from "../rating-icon";

const SIZES = {
  SMALL: {
    key: "s",
    size: 10,
  },
  MEDIUM: {
    key: "m",
    size: 18,
  },
  LARGE: {
    key: "l",
    size: 28,
  },
};

const OUT_OF_VALUE = 10;

const Rating = (props: any) => {
  const {
    iconSize,
    percent,
    showOutOf,
    interaction,
    onClick,
    skill,
    showTotal,
  } = props;

  const [activeStar, setActiveStar] = useState(-1);
  const decimal = showOutOf ? percent / (100 / OUT_OF_VALUE) : percent / 20;
  const nonFraction = Math.trunc(decimal);
  const fraction = Number((decimal - nonFraction).toFixed(2));
  const fractionPercent = fraction * 100;

  const numberOfStar = OUT_OF_VALUE;
  const size =
    iconSize === SIZES.SMALL.key
      ? SIZES.SMALL.size
      : iconSize === SIZES.MEDIUM.key
      ? SIZES.MEDIUM.size
      : SIZES.LARGE.size;

  const RatingHighlighted = (
    <RatingIcon type={"ratingHighlighted"} width={size} height={size} />
  );
  const RatingDefault = (
    <RatingIcon type={"ratingDefault"} width={size} height={size} />
  );

  const handleClick = (index: number) => {
    onClick(index + 1);
    setActiveStar(index);
  };

  const showDefaultStar = (index: any) => {
    return RatingDefault;
  };

  let isShow = true;
  const getStar = (index: number) => {
    if (index <= nonFraction - 1) {
      isShow = true;
      return "100%";
    } else if (fractionPercent > 0 && isShow) {
      isShow = false;
      return `${fractionPercent}%`;
    } else {
      return "0%";
    }
  };

  const isShowOutOfStar = (index: any) => {
    if (showOutOf) {
      return showOutOf;
    }

    const isLoopThrough = (fraction === 0 ? nonFraction : nonFraction + 1) - 1;
    return index <= isLoopThrough;
  };

  const withoutUserInteraction = (index: number) => {
    return isShowOutOfStar(index) ? (
      <div style={{ position: "relative" }} key={index}>
        <div
          style={{
            width: getStar(index),
            overflow: "hidden",
            position: "absolute",
          }}
        >
          {RatingHighlighted}
        </div>
        {showDefaultStar(
          showOutOf
            ? nonFraction === 0
              ? index < nonFraction
              : index <= nonFraction
            : index <= numberOfStar
        )}
      </div>
    ) : null;
  };

  const withUserInteraction = (index: any) => {
    return (
      <div
        style={{ position: "relative" }}
        onClick={() => handleClick(index)}
        key={index}
      >
        <div
          style={{
            width: index <= activeStar ? "100%" : "0%",
            overflow: "hidden",
            position: "absolute",
          }}
        >
          {RatingHighlighted}
        </div>
        {/* {showDefaultStar()} */}
      </div>
    );
  };

  return (
    <>
      <div className="flex align-center justify-between">
        <p className="py-2">{skill}</p>
        {showTotal ? <p className="py-2">{decimal}</p> : null}
      </div>

      <div className={styles.root}>
        {[...new Array(numberOfStar)].map((arr, index) =>
          interaction
            ? withUserInteraction(index)
            : withoutUserInteraction(index)
        )}
      </div>
    </>
  );
};

Rating.propTypes = {
  percent: number.isRequired,
  iconSize: string,
  showOutOf: bool.isRequired,
  interaction: bool.isRequired,
  onClick: func,
  skill: string,
  showTotal: bool,
};

Rating.defaultProps = {
  ratingpercentInPercent: 50,
  iconSize: SIZES.LARGE.key,
  onClick: () => null,
  showOutOf: false,
  interaction: false,
  skill: "",
  showTotal: false,
};

export default Rating;
