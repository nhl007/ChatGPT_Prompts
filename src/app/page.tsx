import Feed from '@/components/Feed';
import LoadingSpinner from '@/components/Loading';
import { Suspense } from 'react';

export default function Home() {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className=' head_text text-center'>
        Discover and Share
        <br className=' max-md:hidden' />
        <span className=' orange_gradient text-center'>Ai-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Gpt Prompts is an open source AI Powered prompting tool for modern world
        to discover , create and share creative prompts
      </p>
      <Suspense fallback={<LoadingSpinner />}>
        <Feed />
      </Suspense>
    </section>
  );
}
