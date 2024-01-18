'use client';

import React, { FC, useState } from 'react';
import { Input, Tab, Tabs } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { CustomButton } from '@/components/CustomButton/CustomButton';

interface IProps {
  // setHeight: Dispatch<SetStateAction<string>>,
}

export const MeasureTab: FC<IProps> = () => {
  const router = useRouter();

  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  const setMetrics = () => {
    router.push('/destructiveBehaviors');

    console.log(`Height: ${height}`);
    console.log(`Weight: ${weight}`);
  };

  return (
    <div className="flex w-full flex-col">
      <Tabs fullWidth color={'success'} classNames={{
        tabContent: 'group-data-[selected=true]:text-[#dff5d7] font-bold',
        tabList: 'border-2 border-solid border-[#5FCB39]',
      }}>
        <Tab key="imperial" title="IMPERIAL">
          <form className="flex flex-col gap-4">
            <Input
              isRequired
              label="Height(ft)"
              type="number"
              size={'lg'}
              variant={'bordered'}
              value={height}
              onValueChange={setHeight}
            />
            <Input
              isRequired
              label="Current Weight(ft)"
              type="number"
              size={'lg'}
              variant={'bordered'}
              value={weight}
              onValueChange={setWeight}
            />

            <div className="mt-20">
              <CustomButton title={'Continue'} isDisabled={!height || !weight}
                            handler={setMetrics} />
            </div>
          </form>
        </Tab>

        <Tab key="metric" title="METRIC">
          <form className="flex flex-col gap-4">
            <Input
              isRequired
              label="Height(sm)"
              type="number"
              size={'lg'}
              variant={'bordered'}
              value={height}
              onValueChange={setHeight}
            />
            <Input
              isRequired
              label="Current Weight(sm)"
              type="number"
              size={'lg'}
              variant={'bordered'}
              value={weight}
              onValueChange={setWeight}
            />

            <div className="mt-20">
              <CustomButton title={'Continue'} isDisabled={!height || !weight}
                            handler={setMetrics} />
            </div>
          </form>
        </Tab>
      </Tabs>
    </div>
  );
};
