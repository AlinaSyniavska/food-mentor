import React, { FC } from 'react';
import { Button } from '@nextui-org/react';

interface IProps {
  title: string,
  isDisabled: boolean,
  handler: () => void,
}

export const CustomButton: FC<IProps> = ({ title, isDisabled, handler }) => {
  return (
    <div className="h-[50px] w-full">
      <Button isDisabled={isDisabled} fullWidth color="success" className={'text-white text-lg font-bold'}
              onClick={handler}>
        {title}
      </Button>
    </div>
  );
};
