import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import Logo from '/public/logo_icon.png';

interface IProps {
  href: string,
}

export const ArrowBack: FC<IProps> = ({ href }) => {
  return (
    <Link href={href} className={'flex justify-center items-center gap-x-3'}>
      <ArrowBackIosIcon />
      <Image src={Logo} alt={'arrow back'} width={33} height={33} />
      <p className={'text-lg font-semibold'}>Food Mentor</p>
    </Link>
  );
};

