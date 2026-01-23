"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HowItWorks = ({
  step,
  color,
  title,
  desc,
  source,
  imganimate,
  textanimate,
  reverse = false,
}) => {
  // This is the reference for the text and image.
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  //Animation for Text.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        //Logic
        if (entry.isIntersecting) {
          entry.target.classList.add(`${textanimate}`);
          observer.disconnect(); //Triggering the animation just once.
        }
      },
      {
        threshold: 0.4,
      }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  //Animation for Image.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${imganimate}`);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div
        className={`flex justify-between items-center mx-20 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div ref={sectionRef} className="opacity-0">
          <h4 className={`text-4xl -translate-y-10 font-medium ${color}`}>
            Step {step}: {title}
          </h4>
          <p className="w-[65%] pt-2 -translate-y-10">{desc}</p>
        </div>
        <div className="w-[40%] h-[300px] relative">
          <Image
            src={source}
            alt="Step images"
            fill
            className="object-contain opacity-0 delay-5000"
            ref={imageRef}
          />
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
