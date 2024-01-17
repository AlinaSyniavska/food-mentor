import React, { FC } from 'react';

interface IProps {
  title: string,
  description: string,
}

export const PageHeader: FC<IProps> = ({ title, description }) => {
  return (
    <header className={'flex flex-col items-center justify-between gap-y-3'}>
      <h1 className={'text-2xl font-bold'}>{title}</h1>
      <p className={'text-sm text-gray text-center'}>{description}</p>
    </header>
  );
};

