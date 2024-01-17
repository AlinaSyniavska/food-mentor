export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-dark">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-between gap-y-4 font-mono text-sm">
        <header className={'flex flex-col items-center justify-between gap-y-3'}>
          <h1 className={'text-2xl font-bold'}>The Goal</h1>
          <p className={'text-sm text-gray text-center'}>Focus on the health benefits you need. <br />Balanced
            nutrition will let you achieve them </p>
        </header>

        <div className={'flex flex-col items-center justify-between gap-y-3'}>
          <h4 className={'text-sm font-bold'}>What are your goals?</h4>
          <div className={''}></div>
        </div>
      </div>
    </main>
  );
}
