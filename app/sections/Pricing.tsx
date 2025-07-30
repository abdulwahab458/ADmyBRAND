"use client"
import React, { useState } from 'react'
import { Element } from 'react-scroll'
import { IconUser, IconUsers, IconBuildingSkyscraper } from '@tabler/icons-react';

const Pricing = () => {

    const [monthly, setmonthly] = useState(false)
    const pricingPlans = [
        {
            name: 'Starter',
            description: 'For individuals and small teams',
            monthly: 19,
            annually: 190,
            features: [
                'Basic analytics',
                'Email support',
                'Up to 3 projects',
            ],
            highlight: false,
            icon: <IconUser size={40} className="text-cyan-400 mb-4" />,
        },
        {
            name: 'Pro',
            description: 'For growing businesses',
            monthly: 39,
            annually: 390,
            features: [
                'All Starter features',
                'Priority support',
                'Unlimited projects',
                'Team collaboration',
            ],
            highlight: true,
            icon: <IconUsers size={40} className="text-cyan-400 mb-4" />,
        },
        {
            name: 'Enterprise',
            description: 'For large organizations',
            monthly: 99,
            annually: 990,
            features: [
                'All Pro features',
                'Dedicated manager',
                'Custom integrations',
                '24/7 support',
            ],
            highlight: false,
            icon: <IconBuildingSkyscraper size={40} className="text-cyan-400 mb-4" />,
        },
    ];
  return (
    
      <section>
        <Element name='pricing'>
            <div className='container'>
                <div className='w-full md:w-screen mb-14'>
                    <h3 className="mx-auto relative z-3 mb-14 max-w-lg text-center max-md:mb-11 max-sm:max-w-sm text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
                        Flexible Pricing <br className="hidden sm:block" />
                        <span className="text-cyan-400">for teams of all sizes</span>
                    </h3>
                    <div className="flex justify-center gap-4 mb-10">
                        <div className="flex items-center bg-gray-800 rounded-full p-1 mb-3 shadow-inner ">
                            <button
                                onClick={() => setmonthly(true)}
                                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 focus:outline-none ${monthly ? 'bg-cyan-400 text-black shadow-lg' : 'text-cyan-400'}`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setmonthly(false)}
                                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 focus:outline-none ${!monthly ? 'bg-cyan-400 text-black shadow-lg' : 'text-cyan-400'}`}
                            >
                                Annually
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                        {pricingPlans.map((plan, idx) => (
                            <div
                                key={plan.name}
                                className={`rounded-3xl p-8 border-2 transition-all duration-300 flex flex-col items-center relative
                                    ${plan.highlight
                                        ? 'bg-gradient-to-br from-gray-950 to-gray-900 text-white border-gray-700 shadow-lg hover:scale-105 hover:border-cyan-300 md:bg-gradient-to-br md:from-cyan-400/40 md:to-cyan-700/10 md:border-cyan-400 md:scale-105 md:z-10 md:shadow-2xl md:hover:border-cyan-300'
                                        : 'bg-gradient-to-br from-gray-950 to-gray-900 text-white border-gray-700 shadow-lg hover:scale-105 hover:border-cyan-300'}
                                `}
                            >
                                <div className="flex justify-center w-full">{plan.icon}</div>
                                {plan.highlight && (
                                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-black px-4 py-1 rounded-full text-xs font-bold shadow-lg">Most Popular</span>
                                )}
                                <div className={`flex justify-center items-center mb-6`}>
                                  <span
                                    className={`inline-flex items-center justify-center px-2 py-0.5 rounded-lg border text-xs font-semibold tracking-widest uppercase bg-black/60 shadow-md font-mono
                                      ${plan.highlight ? 'border-cyan-400 text-cyan-400' : 'border-gray-700 text-gray-300'}`}
                                  >
                                    {plan.name}
                                  </span>
                                </div>
                                <p className="mb-6 text-gray-300">{plan.description}</p>
                                <div className="flex items-end mb-6">
                                    <span className="text-5xl font-extrabold text-cyan-400 mr-2">${monthly ? plan.monthly : plan.annually}</span>
                                    <span className="text-lg text-gray-400 font-medium mb-1">/{monthly ? 'mo' : 'yr'}</span>
                                </div>
                                <ul className="mb-8 space-y-2 w-full text-left">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-200">
                                            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-lg transition-colors duration-200 shadow-md">Choose {plan.name}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Element>
      </section>

  )
}

export default Pricing
