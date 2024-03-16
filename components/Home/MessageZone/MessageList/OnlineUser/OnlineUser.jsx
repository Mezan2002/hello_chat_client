"use client";

import { useRef, useState, useEffect } from "react";
import { Avatar } from "@/helpers/ui";

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

  const getStatus = (status) => {
    switch (status) {
      case "online":
        return "bg-green";
      case "busy":
        return "bg-red";
      case "away":
        return "bg-orange";
      case "offline":
        return "bg-regular-light";
      default:
        return "";
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex w-full gap-3 overflow-x-auto mt-2 no-scrollbar"
      style={{ scrollBehavior: "smooth", display: "flex" }}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <div key={item} className="flex-shrink-0 cursor-pointer">
          <div className="relative" style={{ userSelect: "none" }}>
            <Avatar size={14} />
            <div
              className={`h-4 w-4 border-2 border-white z-50 rounded-full absolute bottom-0 right-0 
          ${getStatus("online")}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OnlineUser;
