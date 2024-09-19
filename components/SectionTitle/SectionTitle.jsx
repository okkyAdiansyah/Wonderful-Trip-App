import React from 'react';
import Subtitle from './Subtitle/Subtitle';
import Title from './Title/Title';

const SectionTitle = ({subtitle, subtitleHref, title}) => {
  return (
    <div className='flex flex-col gap-y-1 items-start px-6 md:px-[104px] justify-start'>
      <Subtitle 
        href={subtitleHref}
        subtitle={subtitle}
      />
      <Title 
        title={title}
      />
    </div>
  )
}

export default SectionTitle