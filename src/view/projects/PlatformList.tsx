import React from 'react'
import Platform from '../../model/Platform';

import PlatformItemProps from '../../model/PlatformItemProps';
import PlatformListProps from '../../model/PlatformListProps';
import PlatformArray from '../../model/PlatformArray';

export default function PlatformList({platforms, togglePlatform}: PlatformListProps) {
  return (
    <section className={`platform-section w-100 d-flex d-row flex-wrap justify-content-evenly align-items-center`}>
       {
        platforms.map((item) => { 
          return <PlatformItem key={item.id} platform={item} togglePlatform={togglePlatform}/>
        })
      }
      <FilterText platforms={platforms} />
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
    <div className="btn-platform-container text-center">
      <button type='button' onClick={handlePlatformClick} className={`btn btn-lg btn-platform platform-icon ${platform.name} ${platform.filteringOn ? "selected" : ""}`} title={`filter for ${platform.name}`} data-primary={platform.primary} data-filter={platform.filteringOn}></button>
      <small className='d-none d-lg-block opacity-75 fw-bold m-1'>{platform.name}</small>
    </div>
  )
}

function FilterText({platforms}: PlatformArray) {
  const activePlatforms: Array<Platform> = platforms.filter(platform => platform.filteringOn);
  const activePlatformsName: Array<string> = activePlatforms.map(platform => platform.name);

  if(!activePlatforms.length) { return null; }

  return (
    <div className={ `d-none d-lg-block w-100 platform-filter-text text-end`}>
      <small className='opacity-50'>filter: {activePlatformsName.join(' OR ')}</small>
    </div>
  )
}