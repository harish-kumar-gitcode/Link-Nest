"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  const secRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate-[fade-in-up_0.5s_ease-out_forwards]"
          );
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );
    if (secRef.current) observer.observe(secRef.current);
    return () => observer.disconnect();
  });

  //Image animation with small variation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          //Logic
          const animation = entry.target.dataset.animate;
          if (animation) {
            entry.target.classList.add(animation);
          }
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.5,
      }
    );

    const elements = document.querySelectorAll(".observe-item");
    elements.forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  });
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center" ref={secRef}>
          <h1 className="text-3xl text-center md:text-6xl/21 font-semibold mt-15">
            Why real estate agents use{" "}
            <span className="text-blue-900">Privy</span>{" "}
            <span className="text-green-800">Pad</span>
          </h1>
          <p className="hidden md:block text-sm md:text-lg text-gray-500">
            Because deals happen on WhatsApp - not portals.
          </p>
        </div>

        <div className="relative mt-5 md:mt-0 w-full h-40 md:h-[400px] md:w-[100%]">
          <Image
            src="/images/why-choose-us-1.webp"
            fill
            className="object-contain"
          ></Image>
        </div>
        <div className="flex flex-col md:flex-wrap md:flex-row justify-center">
          {/* Looks Professional */}
          <div
            className="mx-4 md:mx-0 md:w-[40%] flex items-center observe-item opacity-0"
            data-animate="animate-[fade-in-left_0.7s_ease-out_forwards]"
          >
            <div className="relative h-50 w-60 md:w-[180px] md:h-[180px]">
              <Image
                src="/images/highlights/professional.webp"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain"
              ></Image>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Looks professional without extra effort
              </h3>
              <p className="text-sm w-[80%] md:w-full md:text-base text-gray-600">
                Send one clean link instead of long, messy WhatsApp messages.
              </p>
            </div>
          </div>
          {/* Saves time */}
          <div
            className="flex flex-row-reverse md:flex-row mx-4 md:mx-0 items-center observe-item opacity-0 md:w-[40%]"
            data-animate="animate-[fade-in-right_0.7s_ease-out_forwards]"
          >
            <div className="relative w-60 h-50 md:w-[180px] md:h-[180px]">
              <Image
                src="/images/highlights/saves-time.webp"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain"
              ></Image>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Stop explaining the same property again and again
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Buyers see photos, price, and details before they message you.
              </p>
            </div>
          </div>
          {/* No distractions */}
          <div
            className="mx-4 md:mx-0 md:w-[40%] flex items-center observe-item opacity-0"
            data-animate="animate-[fade-in-left_0.7s_ease-out_forwards]"
          >
            <div className="w-60 h-50 md:w-[180px] md:h-[180px] relative">
              <Image
                src="/images/highlights/no-distractions.webp"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain"
              ></Image>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                No competing listings. No portals.
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                Each page focuses on one property and one agent — you.
              </p>
            </div>
          </div>
          {/* Fits the flow */}
          <div
            className="mx-4 md:mx-0 md:w-[40%] flex flex-row-reverse md:flex-row items-center observe-item opacity-0"
            data-animate="animate-[fade-in-right_0.7s_ease-out_forwards]"
          >
            <div className="w-60 h-50 md:w-[180px] md:h-[180px] relative">
              <Image
                src="/images/highlights/fits-flow.webp"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain"
              ></Image>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Works with how you already sell
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                Use it with WhatsApp, calls, follow-ups, and portal leads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
