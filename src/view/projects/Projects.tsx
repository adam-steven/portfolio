import React from 'react'
import { Link } from 'react-router-dom';

import PlatformList from './PlatformList';
import ProjectList from './ProjectList';
import DetailsModal from './DetailsModal';

import ProjectsProps from '../../model/ProjectsProps';
import WorkItem, {Environment} from '../../model/WorkItem';

export default function Projects({platforms, workItems, togglePlatform, itemInView}: ProjectsProps) {
  return (
    <>
      <div className={`projects-content ${!workItems.length ? "no-project-display" : ""}`}>
        <PlatformList platforms={platforms} togglePlatform={togglePlatform} />

        {
          (Object.keys(Environment) as Array<keyof typeof Environment>).map((key) => { 
            const filteredItems: Array<WorkItem> = workItems.filter(item => item.environment === Environment[key]);
            const sortedItems: Array<WorkItem> = filteredItems.sort(function(a,b){ return new Date(b.date).getFullYear() - new Date(a.date).getFullYear(); })
            if(!sortedItems.length) { return null; }

            return <ProjectList key={key} environment={Environment[key]} workItems={sortedItems}/>
          })
        }
      </div>

      <Link to='/list' id='list-view-btn' className={`btn btn-primary btn-lg switch-view-btn ${!workItems.length ? "d-none" : ""}`}>List View</Link>
      <DetailsModal {...itemInView}/>
    </>
  )
}
