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
    <button type='button' onClick={handlePlatformClick} className="btn btn-platform-container text-center">
      <div className={`btn btn-lg btn-platform platform-icon ${platform.name} ${platform.filteringOn ? "selected" : ""}`} title={`filter for ${platform.name}`} data-primary={platform.primary} data-filter={platform.filteringOn}></div>
      <small className='d-none d-lg-block opacity-75 fw-bold m-1'>{platform.name}</small>
    </button>
  )
}

function FilterText({platforms}: PlatformArray) {
  const activePlatforms: Array<Platform> = platforms.filter(platform => platform.filteringOn);
  const activePlatformNames: Array<string> = activePlatforms.map(platform => platform.name);

  
  const namesString = (activePlatformNames.length > 1) ? activePlatformNames.slice(0, -1).join(', ') + ` OR ${activePlatformNames.slice(-1)}` : activePlatformNames.slice(-1);
  const shortNamesString = (activePlatformNames.length >= 3) ? activePlatformNames.slice(0, 2).join(', ') + `, OR ...` : namesString;

  if(!activePlatforms.length) { return null; }

  return (
    <div className={ `d-none d-lg-block w-100 platform-filter-text text-end`}>
      <small className='opacity-50' title={`filter: ${namesString}`}>filter: {shortNamesString}</small>
    </div>
  )
}