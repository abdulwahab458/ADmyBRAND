"use client"
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { Element } from "react-scroll";

const Testimonials = () => {
    return (
      <Element name="reviews">
        <section className="h-screen flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl md:text-5xl font-extrabold text-center text-white tracking-tight leading-snug drop-shadow-md">
            Built on Trust, <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Backed by Words
            </span>
          </h3>
  
          <div className="h-[30rem] w-full rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </section>
      </Element>
    );
  };

export default Testimonials
const testimonials = [
    {
      quote:
        "ADmyBRAND completely transformed how we run our ad campaigns. From planning to execution, everything just works seamlessly. The AI suggestions are a game changer!",
      name: "Samantha Ray",
      title: "Digital Marketing Manager at GreenEdge",
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      quote:
        "We were able to go live with a multi-channel campaign in under 30 minutes! The dashboard is intuitive, powerful, and incredibly fast.",
      name: "Rahul Mehta",
      title: "Founder of Nomadic Frames",
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      quote:
        "The financing options helped us scale our marketing while managing cash flow. This platform is a must for any startup looking to grow quickly.",
      name: "Jessica Lin",
      title: "CFO at StartSmart Inc.",
      image: "https://i.pravatar.cc/100?img=3",
    },
    {
      quote:
        "As an agency, ADmyBRAND allows us to manage all our clients' campaigns from one place. The white-label feature saved us tons of hours every week.",
      name: "Carlos Rivera",
      title: "Account Director at MediaOrbit",
      image: "https://i.pravatar.cc/100?img=4",
    },
    {
      quote:
        "I love how ADmyBRAND merges both offline and online advertising. No more jumping between platforms—this is the future of unified media buying.",
      name: "Emily Zhang",
      title: "CMO at LumeTech",
      image: "https://i.pravatar.cc/100?img=5",
    },
    {
      quote:
        "The insights we got from their AI-based analytics helped us optimize our campaigns in real time and double our ROI.",
      name: "Daniel O’Connor",
      title: "Head of Growth at FreshNest",
      image: "https://i.pravatar.cc/100?img=6",
    },
    {
      quote:
        "From print to influencers, ADmyBRAND's coverage is unmatched. We reached audiences we didn’t even know we were missing.",
      name: "Aisha Khan",
      title: "Brand Manager at Kultura",
      image: "https://i.pravatar.cc/100?img=7",
    },
    {
      quote:
        "The onboarding was super fast and smooth. Their support team is responsive and truly understands the needs of modern marketers.",
      name: "Tom Bennett",
      title: "Marketing Lead at AeroWaves",
      image: "https://i.pravatar.cc/100?img=8",
    },
    {
      quote:
        "Our creative team loved the integration features—it was easy to get assets uploaded and published across all channels without friction.",
      name: "Priya Desai",
      title: "Creative Director at Zentro Agency",
      image: "https://i.pravatar.cc/100?img=9",
    },
    {
      quote:
        "We've used a lot of platforms, but none bring everything together like ADmyBRAND. It's a one-stop-shop for serious advertising teams.",
      name: "Liam Walsh",
      title: "VP Marketing at UrbanEssence",
      image: "https://i.pravatar.cc/100?img=10",
    },
  ];