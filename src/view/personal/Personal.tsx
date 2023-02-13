import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import PersonalSectionProp from '../../model/PersonalSectionProp';
import PersonalSection from './PersonalSection';

export default function personal() {
  const sections: Array<PersonalSectionProp> = TempPersonalSections();

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

function TempPersonalSections(): Array<PersonalSectionProp> {
  const tempPersonalSections: Array<PersonalSectionProp>  = new Array<PersonalSectionProp>();

  tempPersonalSections.push(new PersonalSectionProp("Overview", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "ggj2018.png"));
  tempPersonalSections.push(new PersonalSectionProp("Work", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "ggj2019.png"));
  tempPersonalSections.push(new PersonalSectionProp("Education", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "ggj2018.png"));
  tempPersonalSections.push(new PersonalSectionProp("Merits", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "ggj2019.png"));
  tempPersonalSections.push(new PersonalSectionProp("Interests", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "ggj2018.png"));

  return tempPersonalSections;
}