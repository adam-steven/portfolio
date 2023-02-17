import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { loadPersonalData } from '../../controller/LoadData';

import PersonalSectionProps from '../../model/PersonalSectionProps';
import PersonalSection from './PersonalSection';

export default function personal() {
  const sections: Array<PersonalSectionProps> = loadPersonalData();

  return (
    <div className='personal-content'>
      <section id="welcome" className='welcome-section'>
        <h1 className='m-auto'>Welcome</h1>
      </section>
      
      {
        sections.map((item) => { 
          return <PersonalSection key={uuidv4()} {...item}/>
        })
      }
    </div>
  )
}