import React, { useEffect } from 'react';

export function LifecycleDemo() {

  useEffect(() => {
    console.log('render!');
    return () => console.log('unmounting...');
  })

  return <div className='lifecycle-demo'>I'm a lifecycle demo</div>;
}