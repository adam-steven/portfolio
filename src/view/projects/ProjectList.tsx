import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import Images from '../../data/image-route.json';
import WorkItem, {Environment} from '../../model/WorkItem';

interface IProjectListProps {
    environment: Environment;
    items: Array<WorkItem>;
}

export default function ProjectList({environment, items}: IProjectListProps) {
  return (
    <section className='project-section'>
        <h3 className='my-2 mx-3'>{environment.charAt(0).toUpperCase() + environment.slice(1)}</h3>
        <hr className='mx-3'/>
        <div className='project-container'>
          {
            items.map((item) => {
              return <ProjectItem key={uuidv4()} {...item}/>
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
      <button type='button' className="list-image m-3 card" data-bs-toggle="modal" data-bs-target="#projectModal" data-bs-custom-data={JSON.stringify(workItem)} title={workItem.name}>
        <img src={imageFileConfig.images[0] ? `asset/${workItem.imagesPath}/${imageFileConfig.images[0]}` : 'asset/placeholder.png'} alt={workItem.imagesPath} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title m-0">{workItem.name}</h5>
        </div>
      </button>
    )

  } catch(e) { 
    console.error(e);
    return null; 
  }
}