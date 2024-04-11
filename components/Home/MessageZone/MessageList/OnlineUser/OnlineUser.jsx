"use client";

import { Avatar, Badge } from "@nextui-org/react";
import { useRef, useState, useEffect } from "react";

const OnlineUser = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheelScroll = (event) => {
      container.scrollTo({
        left: container.scrollLeft + event.deltaY,
        behavior: "smooth",
      });
    };

    const handleMouseDown = (event) => {
      setIsDragging(true);
      setStartX(event.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    };

    const handleMouseMove = (event) => {
      if (!isDragging) return;
      const x = event.pageX - container.offsetLeft;
      const walk = x - startX;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (container) {
      container.addEventListener("wheel", handleWheelScroll, {
        passive: false,
      });
      container.addEventListener("mousedown", handleMouseDown);
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mouseleave", handleMouseUp);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheelScroll);
        container.removeEventListener("mousedown", handleMouseDown);
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("mouseleave", handleMouseUp);
      }
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div
      ref={containerRef}
      className="flex w-full gap-3 overflow-x-auto mt-2 no-scrollbar"
      style={{ scrollBehavior: "smooth", display: "flex" }}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <div key={item} className="flex-shrink-0 cursor-pointer">
          <Badge
            content=""
            color="success"
            shape="circle"
            placement="bottom-right"
          >
            <Avatar radius="full" size="lg" src="/assets/images/user.jpg" />
          </Badge>
        </div>
      ))}
    </div>
  );
};

export default OnlineUser;
