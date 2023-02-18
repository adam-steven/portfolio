import React from 'react'

import PlatformItemProps from '../../model/PlatformItemProps';
import PlatformListProps from '../../model/PlatformListProps';

export default function PlatformList({platforms, togglePlatform}: PlatformListProps) {
  return (
    <section className='platform-section w-100 d-flex d-row flex-wrap justify-content-around align-items-center'>
       {
        platforms.map((item) => { 
          return <PlatformItem key={item.id} platform={item} togglePlatform={togglePlatform}/>
        })
      }
    </section>
  )
}

function PlatformItem({platform, togglePlatform}: PlatformItemProps) {
  function handlePlatformClick() {
    //unfocus on click
    const btn = document.activeElement as HTMLElement;
    if(btn) { btn.blur(); }

    togglePlatform(platform.name);
  }

  return (
    <div className="btn-platform-container">
      <button type='button' onClick={handlePlatformClick} className={`btn btn-lg btn-platform platform-icon ${platform.name} ${platform.filteringOn ? "selected" : ""}`} title={`filter for ${platform.name}`} data-primary={platform.primary} data-filter={platform.filteringOn}></button>
    </div>
  )
}
