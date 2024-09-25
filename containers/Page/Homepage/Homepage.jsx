"use client";

import React from 'react';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import useFetch from '@/hooks/useFetch';
import { Skeleton } from '@/components/Skeleton';
import { Slider } from '@/components/Slider';
import AttractionShowcase from '@/modules/Showcase/AttractionShowcase/AttractionShowcase';


const Homepage = React.memo(() => {
  const {loading, error, data} = useFetch('/api/v1/taxonomies/attraction');
  return (
    <>
      {/* Attraction Section */}
      <section className='w-full py-5 md:py-6 overflow-hidden'>
        {loading ?
          <Skeleton.SlideSkeleton /> :
          <AttractionShowcase>
            {data.map((item, index) => (
            <Slider.AttractionSliderCard 
              key={`attraction-${index}`}
              src={item.cover_url}
              alt={item.slug}
              href={`/${item.slug}`}
              content={item.name}
            />
           ))}
          </AttractionShowcase>
        }
      </section>
      {/* Around You Section */}
      <section className='flex flex-col gap-y-4 md:gap-y-8 py-5 md:py-6'>
        <SectionTitle
          subtitle={'Explore'}
          subtitleHref={'/'}
          title={'Around You'}
        />
      </section>
    </>
  )
})

export default Homepage