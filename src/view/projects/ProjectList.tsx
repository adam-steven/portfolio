import React from 'react'

import Images from '../../data/image-route.json';

import ProjectListProps from '../../model/ProjectListProps';
import WorkItem from '../../model/WorkItem';

export default function ProjectList({environment, workItems}: ProjectListProps) {
  return (
    <section className='project-section'>
        <h3 className='mx-5'>{environment.charAt(0).toUpperCase() + environment.slice(1)}</h3>
        <hr className='my-0 mx-3'/>
        <div className='project-container'>
          {
            workItems.map((item) => {
              return <ProjectItem key={item.id} {...item}/>
            })
          }
        </div>
    </section>
  )
}

function ProjectItem({...workItem}: WorkItem) {
  try {
    const imageFileConfig = Images.find(i => i.folder === workItem.imagesPath);
    if(!imageFileConfig) { 
      console.error(`${workItem.imagesPath} not found`);
      return null; 
    }

    return (
      <button type='button' className="list-image card" data-bs-toggle="modal" data-bs-target="#projectModal" data-bs-custom-data={JSON.stringify(workItem)} title={workItem.name}>
        <img src={imageFileConfig.images[0] ? `asset/${workItem.imagesPath}/${imageFileConfig.images[0]}` : 'asset/placeholder.png'} alt={workItem.imagesPath} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title m-0 text-start border-start rounded-0 px-2">{workItem.name}</h5>
        </div>
      </button>
    )

  } catch(e) { 
    console.error(e);
    return null; 
  }
}