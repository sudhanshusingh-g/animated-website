import { MoveUpRight } from 'lucide-react';
import React, { useState } from 'react'
import about from "../assets/about.png";

export const About = () => {
    const social=["Instagram","Behance","Facebook","Linkedin"];
    const [showIcon,setShowIcon]=useState(false);
    const onMouseEnter=()=>{
        setShowIcon(true);
    }
    const onMouseleave=()=>{
        setShowIcon(false);

    }
  return (
    <div className="bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className="text-[6vw] leading-[7vw] p-20">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="border-t-[1px] border-zinc-400 w-full"></div>
      <div className="grid grid-cols-4 p-20 ">
        <p className="col-span-2">What you can expect:</p>
        <div className="flex flex-col gap-8">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it's live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div>
            <p className="text-left">S:</p>
            {social.map((s, index) => (
              <li key={index}>{s}</li>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-400 w-full"></div>
      <div className="p-20 flex">
        <div className="w-1/2">
          <h1 className="text-[3vw] font-semibold">Our Approach</h1>
          <button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseleave}
            className="bg-zinc-900 text-white px-8 py-4 rounded-full flex items-center gap-8 transition duration-300 mt-2"
          >
            Read More
            <div
              className={`bg-zinc-100 w-2 h-2 rounded-full flex items-center justify-center ${
                showIcon ? "w-7 h-7" : "w-2 h-2 "
              }`}
            >
              <MoveUpRight
                className={`text-black transform transition-transform duration-300 ${
                  showIcon ? "scale-100" : "scale-0"
                }`}
                size={24}
              />
            </div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]">
          <img src={about} alt="About" className="object-cover rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
