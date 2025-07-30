"use client";
import { useRef, useState } from "react";
import { Element } from "react-scroll";

type FaqItemType = {
  q: string;
  a: string;
};

type FaqsCardProps = {
  faqsList: FaqItemType;
  idx: number;
};

const FaqsCard: React.FC<FaqsCardProps> = ({ faqsList, idx }) => {
  const answerElRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [answerHeight, setAnswerHeight] = useState("0px");

  const handleToggle = () => {
    const height =
      answerElRef.current?.childNodes[0] instanceof HTMLElement
        ? answerElRef.current.childNodes[0].offsetHeight
        : 0;

    setIsOpen(!isOpen);
    setAnswerHeight(`${height + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b border-gray-700 cursor-pointer"
      onClick={handleToggle}
    >
      <h4 className="pb-5 flex items-center justify-between text-lg text-white font-medium">
        {faqsList.q}
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300 ease-in-out"
        style={isOpen ? { height: answerHeight } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-400">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqsList: FaqItemType[] = [
    {
      q: "What is ADmyBRAND AI Suite?",
      a: "ADmyBRAND AI Suite is a full-stack marketing automation platform that enables businesses to plan, execute, and optimize ad campaigns across multiple channels using artificial intelligence and data-driven analytics.",
    },
    {
      q: "What makes ADmyBRAND different from other ad platforms?",
      a: "Unlike typical ad platforms, ADmyBRAND unifies both offline and digital ad inventory—including billboards, TV, radio, print, and influencer marketing—into one AI-powered dashboard for seamless execution.",
    },
    {
      q: "Which industries use ADmyBRAND the most?",
      a: "The platform serves clients across FMCG, retail, e-commerce, automotive, healthcare, real estate, and more—especially brands that need centralized control over diverse media formats.",
    },
    {
      q: "Can I run both digital and traditional ads using ADmyBRAND?",
      a: "Yes. ADmyBRAND supports omnichannel campaign booking, covering digital media, OOH (out-of-home), print, TV, radio, cinema, and influencer marketing in one place.",
    },
    {
      q: "How does ADmyBRAND help improve ad campaign performance?",
      a: "With predictive analytics and AI optimization, ADmyBRAND ensures your budget is allocated to the most effective channels. Real-time reporting helps fine-tune campaigns and maximize ROI.",
    },
    {
      q: "Does ADmyBRAND offer creative support?",
      a: "Yes. The platform offers creative distribution workflows and can integrate with design teams or external vendors to streamline asset creation and delivery.",
    },
    {
      q: "Is financing available for ad campaigns?",
      a: "Yes. ADmyBRAND partners with NBFCs and fintech lenders to offer EMI options and credit-based financing, so startups and growing brands can advertise without upfront costs.",
    },
    {
      q: "How quickly can I launch a campaign?",
      a: "Campaigns can be launched in as little as 15–30 minutes after setup. The smart dashboard makes media planning and booking extremely fast and intuitive.",
    },
    {
      q: "Is ADmyBRAND available only in India?",
      a: "No. While it’s headquartered in India with operations in Indore and Bangalore, ADmyBRAND supports global campaigns and is expanding into markets like the UAE, Singapore, and the U.S.",
    },
    {
      q: "Can agencies use ADmyBRAND to manage their clients?",
      a: "Absolutely. ADmyBRAND provides a white-label-friendly platform for media and creative agencies to manage multiple clients, campaigns, and reporting from a single interface.",
    },
  ];

  const midpoint = Math.ceil(faqsList.length / 2);
  const firstHalf = faqsList.slice(0, midpoint);
  const secondHalf = faqsList.slice(midpoint);

  return (
    <section className="bg-black text-white max-w-screen-4xl mt-20 mx-auto px-4 md:px-8">
      <Element name="faq" className="relative">
        <div className="space-y-3 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-lg">
            Answered all frequently asked questions. Still confused? Feel free to contact us.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1600px] mx-auto">
          <div>
            {firstHalf.map((item, idx) => (
              <FaqsCard key={idx} idx={idx} faqsList={item} />
            ))}
          </div>
          <div>
            {secondHalf.map((item, idx) => (
              <FaqsCard key={midpoint + idx} idx={midpoint + idx} faqsList={item} />
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default FAQ;
