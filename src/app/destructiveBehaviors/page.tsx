'use client';

import React, { useEffect, useState } from 'react';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';

import { ArrowBack } from '@/components/ArrowBack/ArrowBack';

export default function DestructiveBehaviors() {

  const behaviorsList = [
    {
      id: 1,
      title: 'I don\'t rest enough',
      img: '/behavior_1_rest.png',
    },
    {
      id: 2,
      title: 'I have a sweet tooth',
      img: '/behavior_2_tooth.png',
    },
    {
      id: 3,
      title: 'I have too much soda',
      img: '/behavior_3_soda.png',
    },
    {
      id: 4,
      title: 'I eat many salty foods',
      img: '/behavior_4_salty_foods.png',
    },
    {
      id: 5,
      title: 'I enjoy midnight snacks',
      img: '/behavior_5_snacks.png',
    },
    {
      id: 6,
      title: 'None of the above',
      img: '/behavior_6_none.png',
    },
  ];

  const [behaviors, setBehaviors] = useState<string[]>([]);

  useEffect(() => {
    console.log(behaviors);
  }, [behaviors]);

  const selectBehavior = (event: any, title: string) => {
    // console.log(event.target);

    if (!behaviors.includes(title)) {
      setBehaviors(prevState => [...prevState, title]);
    } else {
      const behaviorsArr = [...behaviors];
      behaviorsArr.splice(
        behaviorsArr.findIndex(item => item === title),
        1
      );

      setBehaviors([...behaviorsArr]);
    }

  };

  return (
    <main className="flex min-h-screen flex-col items-center p-5 text-dark">
      <section
        className="z-10 max-w-5xl w-[360px] flex flex-col items-center justify-between gap-y-20 font-mono text-sm">
        <ArrowBack href={'/measureYourself'} />

        <div>
          <PageHeader title={'Destructive Behaviors'}
                      description={'We all have them! Which are yours?'} />

          <div className="mt-4 gap-4 grid grid-cols-1 sm:grid-cols-2">
            {
              behaviorsList.map(item => (
                <Card key={item.id}
                      className={'w-[172px] h-[60px] shadow-none border border-solid border-[#E1E1E1] hover:cursor-pointer'}
                >
                  <CardBody className={'flex flex-row items-center gap-x-2 text-xs h-full'}
                            onClick={(event) => selectBehavior(event, item.title)}
                  >
                    <Image src={item.img} alt={item.title} width={30} height={30} />
                    <p>{item.title}</p>
                  </CardBody>
                </Card>
              ))
            }
          </div>
        </div>


      </section>
    </main>
  );
}
