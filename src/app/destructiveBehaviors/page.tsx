'use client';

import React, { useState } from 'react';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Behavior_1_rest from '/public/behavior_1_rest.png';
import Behavior_2_tooth from '/public/behavior_2_tooth.png';
import Behavior_3_soda from '/public/behavior_3_soda.png';
import Behavior_4_salty_foods from '/public/behavior_4_salty_foods.png';
import Behavior_5_snacks from '/public/behavior_5_snacks.png';
import Behavior_6_none from '/public/behavior_6_none.png';

import { ArrowBack } from '@/components/ArrowBack/ArrowBack';
import { CustomButton } from '@/components/CustomButton/CustomButton';

export default function DestructiveBehaviors() {
  const behaviorsList = [
    {
      id: 1,
      title: 'I don\'t rest enough',
      img: Behavior_1_rest,
    },
    {
      id: 2,
      title: 'I have a sweet tooth',
      img: Behavior_2_tooth,
    },
    {
      id: 3,
      title: 'I have too much soda',
      img: Behavior_3_soda,
    },
    {
      id: 4,
      title: 'I eat many salty foods',
      img: Behavior_4_salty_foods,
    },
    {
      id: 5,
      title: 'I enjoy midnight snacks',
      img: Behavior_5_snacks,
    },
    {
      id: 6,
      title: 'None of the above',
      img: Behavior_6_none,
    },
  ];

  const [behaviors, setBehaviors] = useState<string[]>([]);
  const router = useRouter();

  const selectBehavior = (title: string, id: number) => {
    const card = document.querySelector(`#card${id}`) as HTMLElement;

    if (!behaviors.includes(title)) {
      setBehaviors(prevState => [...prevState, title]);
      card.classList.add('selected');
    } else {
      const behaviorsArr = [...behaviors];
      behaviorsArr.splice(
        behaviorsArr.findIndex(item => item === title),
        1
      );

      setBehaviors([...behaviorsArr]);
      card.classList.remove('selected');
    }
  };

  const setDestructiveBehaviors = () => {
    router.push('/physicalExercise');

    console.log(`DestructiveBehaviors: ${behaviors}`);
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
                <Card key={item.id} id={'card' + item.id}
                      className={'w-[172px] h-[60px] shadow-none border-2 border-solid border-[#E1E1E1] hover:cursor-pointer'}
                >
                  <CardBody className={'flex flex-row items-center gap-x-2 text-xs h-full'}
                            onClick={() => selectBehavior(item.title, item.id)}
                  >
                    <Image src={item.img} alt={item.title} width={30} height={30} />
                    <p>{item.title}</p>
                  </CardBody>
                </Card>
              ))
            }
          </div>
        </div>

        <CustomButton title={'Continue'} isDisabled={!behaviors.length}
                      handler={setDestructiveBehaviors} />
      </section>
    </main>
  );
}
