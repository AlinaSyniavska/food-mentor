import { ArrowBack } from '@/components/ArrowBack/ArrowBack';
import React from 'react';

import { PageHeader } from '@/components/PageHeader/PageHeader';

export default function PhysicalExercise() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-5 p-5 text-dark">
      <section
        className="z-10 max-w-5xl w-[360px] flex flex-col items-center justify-between gap-y-20 font-mono text-sm">
        <ArrowBack href={'/destructiveBehaviors'} />

        <div className={'flex flex-col items-center justify-between gap-y-4 w-full'}>
          <PageHeader title={'Physical exercise'}
                      description={'Physical exercise means a lot for a woman who wants to lose kilos and works at the office'}
          />


        </div>
      </section>
    </main>
  );
}
