"use client"

import React from 'react'
import { Element } from 'react-scroll'
import { cn } from "@/lib/utils";
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react";



const Features = () => {
    const features = [
        {
            title: "Built for developers",
            description:
                "Built for engineers, developers, dreamers, thinkers and doers.",
            icon: <IconTerminal2 />,
        },
        {
            title: "Ease of use",
            description:
                "It's as easy as using an Apple, and as expensive as buying one.",
            icon: <IconEaseInOut />,
        },
        {
            title: "Pricing like no other",
            description:
                "Our prices are best in the market. No cap, no lock, no credit card required.",
            icon: <IconCurrencyDollar />,
        },
        {
            title: "100% Uptime guarantee",
            description: "We just cannot be taken down by anyone.",
            icon: <IconCloud />,
        },
        {
            title: "Multi-tenant Architecture",
            description: "You can simply share passwords instead of buying new seats",
            icon: <IconRouteAltLeft />,
        },
        {
            title: "24/7 Customer Support",
            description:
                "We are available a 100% of the time. Atleast our AI Agents are.",
            icon: <IconHelp />,
        },
        {
            title: "Money back guarantee",
            description:
                "If you donot like EveryAI, we will convince you to like us.",
            icon: <IconAdjustmentsBolt />,
        },
        {
            title: "And everything else",
            description: "I just ran out of copy ideas. Accept my sincere apologies",
            icon: <IconHeart />,
        },
    ];
    return (
        <section className="pt-20 ">
            
            <Element name='features'>
            <h3 className="mx-auto relative z-3 mb-14 max-w-lg text-center max-md:mb-11 max-sm:max-w-sm text-4xl md:text-5xl font-extrabold  drop-shadow-lg
            bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Features
                    </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 pb-32 max-w-7xl mx-auto px-8">
                    {features.map((feature, index) => (
                        <Feature key={feature.title} {...feature} index={index} />
                    ))}
                </div>
            </Element>
        </section>
    )
}
const Feature = ({
    title,
    description,
    icon,
    index,
  }: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
  }) => {
      return (
    <div
      className={cn(
        "flex flex-col lg:border-r border-gray-700 py-16 relative group/feature hover:bg-gray-800/50 transition-all duration-300 rounded-lg",
        (index === 0 || index === 4) && "lg:border-l border-gray-700",
        index < 4 && "lg:border-b border-gray-700"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none rounded-lg" />
      <div className="mb-6 relative z-10 px-12 text-cyan-400 group-hover/feature:text-cyan-300 transition-colors duration-300 text-2xl">
        {icon}
      </div>
      <div className="text-xl font-bold mb-4 relative z-10 px-12">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-600 group-hover/feature:bg-cyan-400 transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-white group-hover/feature:text-cyan-300">
          {title}
        </span>
      </div>
      <p className="text-base text-gray-400 group-hover/feature:text-gray-300 max-w-sm relative z-10 px-12">
        {description}
      </p>
    </div>
  );
  };
export default Features
