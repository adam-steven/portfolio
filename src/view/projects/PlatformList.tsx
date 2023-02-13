import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Platform from '../../model/Platform';

interface IPlatformListProps {
  items: Array<Platform>;
}

export default function PlatformList({items} : IPlatformListProps) {
  return (
    <section className='platform-section w-100 d-flex d-row flex-wrap justify-content-around align-items-center'>
       {
        items.map((item) => { 
          return <PlatformItem key={uuidv4()} {...item}/>
        })
      }
    </section>
  )
}

function PlatformItem({...platform}: Platform) {
  return (
    <div className="btn-platform-container">
      <button type='button' className={`btn btn-lg btn-platform platform-icon ${platform.name}`} title={`filter for ${platform.name}`} data-primary={platform.primary} data-filter={platform.filteringOn}></button>
    </div>
    
  )
}
