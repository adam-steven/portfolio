import React from 'react'
import { Link } from 'react-router-dom';

import PlatformList from './PlatformList';
import DetailsModal from './DetailsModal';

import WorkItem from '../../model/WorkItem';
import WorkItemDateGroup from '../../model/WorkItemDateGroup';
import ProjectsProps from '../../model/ProjectsProps';

//List view of all project sorted by date
//list items are links, on click => open info modal
export default function ListView({platforms, workItems, togglePlatform, itemInView}: ProjectsProps) {

  const groupedWorkItems: Array<WorkItemDateGroup> = new Array<WorkItemDateGroup>();

  const currentYear = new Date(Date.now()).getFullYear();
  for (let i = currentYear; i > 0; i--) {
    const filteredItems: Array<WorkItem> = workItems.filter(item => new Date(item.date).getFullYear() === i);
    if(filteredItems.length) { groupedWorkItems.push(new WorkItemDateGroup(i, filteredItems)); }
  }

  return (
    <>
      <div className='projects-content'>
        <PlatformList platforms={platforms} togglePlatform={togglePlatform} />

        {
          groupedWorkItems.map((group) => {
            return <DateList key={group.year} {...group} />
          })
        }
      </div>

      <Link to='/projects' id='list-view-btn' className="btn btn-primary switch-view-btn">Card View</Link>
      <DetailsModal {...itemInView} />
    </>
  )
}

function DateList({...group}: WorkItemDateGroup) {
  return (
    <section className='project-section'>
        <h3 className='my-2 mx-3'>{group.year.toString().charAt(0).toUpperCase() + group.year.toString().slice(1)}</h3>
        <hr className='mx-3'/>
        <ul className='project-live-view-list'>
          {
            group.items.map((item) => {
              return (
                <li key={item.id}>
                  <button type='button' className="btn btn-link" data-bs-toggle="modal" data-bs-target="#projectModal" data-bs-custom-data={JSON.stringify(item)} title={item.name}>
                    {item.name}
                  </button>
                </li>
              )
            })
          }
        </ul>
    </section>
  )
}

