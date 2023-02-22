import React from 'react'

import { loadPersonalData } from '../../controller/LoadData';
import PersonalSectionProps from '../../model/PersonalSectionProps';
import PersonalSection from './PersonalSection';

export default function personal() {
  const sections: Array<PersonalSectionProps> = loadPersonalData();
  return (
    <div className='personal-content'>
      <section id="welcome" className='welcome-section'>
        <div id="title-container" className='mt-auto d-flex flex-row flex-wrap align-items-end'>
          <h1 className='mb-3 me-3 decode-text' data-value="Welcome">Welcome</h1>
          <small className='mb-3 decode-text opacity-75 flex-grow-1' data-value="Portfolio by Adam Steven">Portfolio by Adam Steven</small>
        </div>
      </section>
      
      {
        sections.map((item) => { 
          return <PersonalSection key={item.id} {...item}/>
        })
      }
    </div>
  )
}