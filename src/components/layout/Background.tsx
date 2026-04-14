import React from 'react';

export function Background() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#050505]">
      <img 
        src="https://lh3.googleusercontent.com/d/1whiEVQBIAioDVcskAf403wVFdgJCW075"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 md:opacity-20"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
