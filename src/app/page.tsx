'use client';

import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Card, CardBody } from '@nextui-org/card';
import Link from 'next/link';

export default function Home() {
  const list = [
    {
      title: 'Lose Weight',
      img: '/goal_1_LoseWeight.png',
    },
    {
      title: 'Gain Muscle',
      img: '/goal_2_GainMuscle.png',
    },
    {
      title: 'Develop healthy habits',
      img: '/goal_3_DevelopHealthyHabits.png',
    },
    {
      title: 'Develop healthy habits',
      img: '/goal_4_DevelopHealthyHabits.png',
    },

  ];

  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 text-dark">
        <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-between gap-y-4 font-mono text-sm">
          <header className={'flex flex-col items-center justify-between gap-y-3'}>
            <h1 className={'text-2xl font-bold'}>The Goal</h1>
            <p className={'text-sm text-gray text-center'}>Focus on the health benefits you need. <br />Balanced
              nutrition will let you achieve them </p>
          </header>

          <div className={'flex flex-col items-center justify-between gap-y-4'}>
            <h4 className={'text-sm font-bold'}>What are your goals?</h4>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
              {list.map((item, index) => (
                <Link key={index} href={'/measureYourself'}>
                  <Card
                    className={'w-44 h-44 shadow-none border border-solid border-[#E1E1E1] bg-gradient-to-b from-[#F1F1F1] to-[#fff] '}
                    isPressable
                    onPress={() => console.log('item pressed')}
                  >
                    <CardBody
                      className="overflow-visible p-0 text-dark flex flex-row items-center justify-between gap-x-2">
                      <p className={'text-base font-medium w-1/2 pl-3'}>{item.title}</p>
                      <div className={'w-1/2 h-44'}>
                        <img
                          alt={item.title}
                          className="w-full h-44 object-contain"
                          src={item.img}
                        />
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}
