import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import PersonalSectionProps from '../../model/PersonalSectionProps';

export default function PersonalSection({...props}: PersonalSectionProps) {
  const descriptionParagraphs = props.description.split("\n");

  return (
    <section id={props.title}>
        <div className='personal-card'>
            <h3>{props.title}</h3>

            {
              descriptionParagraphs.map((paragraph) => {
                return <p key={uuidv4()}>{paragraph}</p>
              })
            }
        </div>
        <img className='personal-background pe-none' src={`asset/personal/${props.imagePath}`} alt={props.title} />
    </section>
  )
}
