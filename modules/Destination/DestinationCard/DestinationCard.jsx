import React from 'react';
import { Card } from '@/components/Card';
import { Counter } from '@/components/Counter';
import RecommendationButton from '../StatefulButton/RecommendationButton';
import Link from 'next/link';

const DestinationCard = ({thumbSrc, thumbAlt, cat, screen, destinationLink, locationLink}) => {
  return (
    <Link className='w-full flex flex-col items-start justify-start'
      href={destinationLink}
    >
        <Card.CardThumb
          src={thumbSrc}
          alt={thumbAlt}
        />
        <div className='flex flex-col items-start justify-start gap-x-1 md:gap-x-2'>
          <div className='flex'>
            <Counter.VisitorCounter 
              screen={screen}
              count={'729'}
            />
            <RecommendationButton 
              screen={screen}
            />
          </div>
          <div className='flex flex-col px-[2px] md:px-1'>
            <Card.CardCategory 
              cat={'Art & Heritages'}
            />
            <Card.CardTitle
              title={'Test Data'}
            />
          </div>
          <div className='flex p-1'>
            <Card.LocationTag
              href={'/'}
              location={'test'}
              screen={screen}
            />
          </div>
        </div>
    </Link>
  )
}

export default DestinationCard