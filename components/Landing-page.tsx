import React from 'react';
import { Boxes } from './ui/background-boxes';
import { cn } from '@/lib/utils';

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg rounded-b-none">
      <div className="absolute inset-0 bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn('md:text-6xl text-xl text-white relative z-20 font-bold')}>
        Brett Comrie | Developer
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 font-medium text-lg leading-loose">
        Crafting user-friendly web experiences.
      </p>
      <p className="text-center mt-2 text-neutral-300 relative z-20 font-medium text-lg leading-loose">
        Passionate about coding for positive impact.
      </p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-30">
        Resume
      </button>
    </div>
  );
}
