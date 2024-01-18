'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/react';

import { ArrowBack } from '@/components/ArrowBack/ArrowBack';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import Physical_exercise from '/public/physical_exercise.png';

export default function PhysicalExercise() {
  const activitiesList = [
    {
      id: 1,
      title: 'Hardly at all',
    },
    {
      id: 2,
      title: 'Fitness 1-2 times a week',
    },
    {
      id: 3,
      title: 'Fitness 3-5 times a week',
    },
    {
      id: 4,
      title: 'Fitness 5-7 times a week',
    },
  ];

  const [activity, setActivity] = useState<string>('');

  useEffect(() => {
    console.log(`Activity: ${activity}`);
  }, [activity]);

  const selectActivity = (title: string, id: number) => {
    const card = document.querySelector(`#activity${id}`) as HTMLElement;
    const cards = document.querySelectorAll('.activity') as NodeListOf<Element>;

    if (activity === title) {
      setActivity('');
      card.classList.remove('selected')
    } else {
      setActivity(title);
      cards.forEach(item => item.classList.remove('selected'));
      card.classList.add('selected');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-5 p-5 text-dark">
      <section
        className="z-10 max-w-5xl w-[360px] flex flex-col items-center justify-between gap-y-20 font-mono text-sm">
        <ArrowBack href={'/destructiveBehaviors'} />

        <div className={'flex flex-col items-center justify-between gap-y-4 w-full'}>
          <PageHeader title={'Physical exercise'}
                      description={'Physical exercise means a lot for a woman who wants to lose kilos and works at the office'}
          />

          <h4 className={'text-sm font-bold'}>How active are you during the day?</h4>

          <div className={'flex flex-row justify-between items-center w-full'}>
            <Image src={Physical_exercise} alt={'physical_exercise'} width={172} height={275}/>

            <div className="flex flex-col gap-y-4">
              {
                activitiesList.map(item => (
                  <Card key={item.id} id={'activity' + item.id}
                        className={'activity w-[172px] h-[80px] shadow-none border-2 border-solid border-[#E1E1E1] hover:cursor-pointer'}
                  >
                    <CardBody className={'flex flex-row items-center text-base h-full'}
                              onClick={() => selectActivity(item.title, item.id)}
                    >
                      <p>{item.title}</p>
                    </CardBody>
                  </Card>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
