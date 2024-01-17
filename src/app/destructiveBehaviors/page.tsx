import { ArrowBack } from '@/components/ArrowBack/ArrowBack';
import React from 'react';

export default function DestructiveBehaviors() {

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-5 p-5 text-dark">
      <section
        className="z-10 max-w-5xl w-[360px] flex flex-col items-center justify-between gap-y-20 font-mono text-sm">
        <ArrowBack href={'/measureYourself'} />

        Destructive Behaviors
      </section>
    </main>
  );
}
