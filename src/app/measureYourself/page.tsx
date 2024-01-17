// 'use client'

import { ArrowBack } from '@/components/ArrowBack/ArrowBack';
import React from 'react';

import { PageHeader } from '@/components/PageHeader/PageHeader';
import { MeasureTab } from '@/components/MeasureTab/MeasureTab';

export default function MeasureYourself() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-5 p-5 text-dark">
      <section
        className="z-10 max-w-5xl w-[360px] flex flex-col items-center justify-between gap-y-20 font-mono text-sm">
        <ArrowBack href={'/'} />

        <div className={'flex flex-col items-center justify-between gap-y-4 w-full'}>
          <PageHeader title={'Measure Yourself'} description={'What are your height and body weight?'} />

          <MeasureTab/>
        </div>
      </section>
    </main>
  );
}
