import React from 'react';
import { Counter } from '@/modules/Counter';

const MainCardBody = () => {
  return (
    <div>
      <div>
        <Counter.VisitorCounter />
        <Counter.RecommendationCounter />
      </div>
    </div>
  )
}

export default MainCardBody