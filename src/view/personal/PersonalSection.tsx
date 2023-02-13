import React from 'react'
import PersonalSectionProp from '../../model/PersonalSectionProp';

export default function PersonalSection({...props}: PersonalSectionProp) {
  return (
    <section id={props.title}>
        <div className='personal-card'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
        <img className='personal-background pe-none' src={`asset/_personal/${props.imagePath}`} alt={props.title} />
    </section>
  )
}
