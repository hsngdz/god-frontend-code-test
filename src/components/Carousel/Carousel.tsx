import Image from "next/future/image";
import { useState, useEffect, useRef } from "react";
import { Block, Flex, Click, Spacer } from "vcc-ui";
import type { CarouselProps } from "./interfaces";
import styles from "./Carousel.module.css";
import navButton from "../../../docs/chevron-circled.svg";
import Indicators from "./Indicators";

const Carousel = ({ children, length, itemWidth }: CarouselProps) => {
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    if (!carouselContainerRef?.current) return;
    let targets;
    targets = carouselContainerRef.current.querySelectorAll("[data-itemid]");
    // Detect when an item is in viewport, used for indicators on mobile
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setItemId(Number(entry.target.getAttribute("data-itemid")));
          }
        });
      },
      { threshold: 0.9 }
    );
    carouselContainerRef.current.scrollLeft = 0;
    targets.forEach((target) => observer.observe(target));
  }, [children]);

  const handleSideScroll = (direction?: "reverse") => {
    if (carouselContainerRef.current) {
      carouselContainerRef.current.scrollLeft +=
        direction === "reverse" ? -itemWidth : itemWidth;
    }
  };
  return (
    <Block>
      <Flex
        role="region"
        aria-roledescription="carousel"
        aria-label="volvo cars"
        className={styles.carouselContainer}
        ref={carouselContainerRef}
        data-testid="carousel"
        extend={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          touchAction: "pan-x",
          flexDirection: "row",
          overflowX: "scroll",
        }}
      >
        {children}
      </Flex>
      <Flex
        role="group"
        aria-label="carousel controls"
        data-testid="carousel-controls"
        extend={{
          display: "none",
          fromM: {
            display: "flex",
            border: 0,
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: "1rem",
          },
        }}
      >
        <Click
          onClick={() => handleSideScroll("reverse")}
          aria-label="previous"
          data-testid="button-previous"
        >
          <Image style={{ rotate: "180deg" }} src={navButton} alt="previous" />
        </Click>
        <Spacer />
        <Click
          aria-label="next"
          onClick={() => handleSideScroll()}
          data-testid="button-next"
        >
          <Image src={navButton} alt="next" />
        </Click>
      </Flex>
      <Indicators length={length} active={itemId} />
    </Block>
  );
};

export default Carousel;
