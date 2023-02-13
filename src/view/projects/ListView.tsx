import React from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Platform from '../../model/Platform';
import PlatformList from './PlatformList';

import WorkItem, {Environment} from '../../model/WorkItem';
import WorkItemDateGroup from '../../model/WorkItemDateGroup';
// import ProjectList from './ProjectList';
import DetailsModal from './DetailsModal';

//List view of all project sorted by date
//list items are links, on click => open info modal
export default function ListView({...itemInView}: WorkItem) {

  const platforms: Array<Platform> = TempPlatform();
  const workItems: Array<WorkItem> = TempWorkItem();
  const groupedWorkItems: Array<WorkItemDateGroup> = new Array<WorkItemDateGroup>();

  const currentYear = new Date(Date.now()).getFullYear();
  for (let i = currentYear; i > 0; i--) {
    const filteredItems: Array<WorkItem> = workItems.filter(item => new Date(item.date).getFullYear() === i);
    if(filteredItems.length) { groupedWorkItems.push(new WorkItemDateGroup(i, filteredItems)); }
  }

  return (
    <>
      <div className='projects-content'>
        <PlatformList items={platforms} />

        {
          groupedWorkItems.map((group) => {
            return <DateList key={uuidv4()} {...group} />
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
                <li key={uuidv4()}>
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

//#region test function

function TempPlatform(): Array<Platform> {
  const tempPlatforms: Array<Platform>  = new Array<Platform>();

  tempPlatforms.push(new Platform("javascript", true));
  tempPlatforms.push(new Platform("typescript", true));
  tempPlatforms.push(new Platform("csharp", true));
  tempPlatforms.push(new Platform("html", true));
  tempPlatforms.push(new Platform("bootstrap", true));
  tempPlatforms.push(new Platform("php", true));
  tempPlatforms.push(new Platform("sass", true));
  tempPlatforms.push(new Platform("python", true));
  tempPlatforms.push(new Platform("reactjs", true));
  tempPlatforms.push(new Platform("nodejs", true));
  tempPlatforms.push(new Platform("aspnet", true));
  tempPlatforms.push(new Platform("ejs", true));
  tempPlatforms.push(new Platform("swiftui", true));
  tempPlatforms.push(new Platform("css", true));
  tempPlatforms.push(new Platform("mysql", true));
  tempPlatforms.push(new Platform("bash", true));
  tempPlatforms.push(new Platform("java", true));

  return tempPlatforms;
}

function TempWorkItem(): Array<WorkItem> {
  const tempWorkItem: Array<WorkItem>  = new Array<WorkItem>();

  // tempWorkItem.push(new WorkItem("Batch Audio Remover", ["bash"], Date.now(), Environment.Personal, "", "", "https://github.com/adam-steven/Bash-Audio-Scrubber"));
  
  tempWorkItem.push(new WorkItem("AI Test", ["csharp"], new Date(Date.now()), Environment.Education, "hgodfgdfiogdfgio dfuigodfgudfigou dfugiodfgudfio uidfogudiog", "gdfgdfh jk hdfgudh u dfigoudfgio  dufigodfgudifgo  duifgogdufigo", "https://github.com/adam-steven/Game-AI-Comparison"));
  tempWorkItem.push(new WorkItem("Emotion Recognition", ["csharp"], new Date(Date.now()), Environment.Education, "", "", "https://github.com/adam-steven/AI-Emotion-Detection"));

  // tempWorkItem.push(new WorkItem("Outlook Add-in", ["nodejs", "html", "ejs", "css", "javascript", "bootstrap"], Date.now(), Environment.Work, "", "", ""));
  for (let index = 0; index < 10; index++) {
    tempWorkItem.push(new WorkItem("Word Scroll Game", ["html", "css", "javascript", "bootstrap"], new Date(1055113057893), Environment.Work, "", "", ""));
  }

  return tempWorkItem;
}

//#endregion

