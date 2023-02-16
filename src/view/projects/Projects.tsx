import React from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Platform from '../../model/Platform';
import PlatformList from './PlatformList';

import WorkItem, {Environment} from '../../model/WorkItem';
import ProjectList from './ProjectList';
import DetailsModal from './DetailsModal';
import { loadPlatformData, loadProjectData } from '../../controller/LoadData';

export default function Projects({...itemInView}: WorkItem) {

  const platforms: Array<Platform> = loadPlatformData();
  const workItems: Array<WorkItem> = loadProjectData([]);

  return (
    <>
      <div className='projects-content'>
        <PlatformList items={platforms} />

        {
          (Object.keys(Environment) as Array<keyof typeof Environment>).map((key) => { 
            const filteredItems: Array<WorkItem> = workItems.filter(item => item.environment === Environment[key]);
            const sortedItems: Array<WorkItem> = filteredItems.sort(function(a,b){ return new Date(b.date).getFullYear() - new Date(a.date).getFullYear(); })
            return <ProjectList key={uuidv4()} environment={Environment[key]} items={sortedItems}/>
          })
        }
      </div>

      <Link to='/list' id='list-view-btn' className="btn btn-primary switch-view-btn">List View</Link>
      <DetailsModal {...itemInView}/>
    </>
  )
}
