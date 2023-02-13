import React from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Platform from '../../model/Platform';
import PlatformList from './PlatformList';

import WorkItem, {Environment} from '../../model/WorkItem';
import ProjectList from './ProjectList';
import DetailsModal from './DetailsModal';

export default function Projects({...itemInView}: WorkItem) {

  const platforms: Array<Platform> = TempPlatform();
  const workItems: Array<WorkItem> = TempWorkItem();

  return (
    <>
      <div className='projects-content'>
        <PlatformList items={platforms} />

        {
          (Object.keys(Environment) as Array<keyof typeof Environment>).map((key) => { 
            const filteredItems: Array<WorkItem> = workItems.filter(item => item.environment === Environment[key]);
            return <ProjectList key={uuidv4()} environment={Environment[key]} items={filteredItems}/>
          })
        }
      </div>

      <Link to='/list' id='list-view-btn' className="btn btn-primary switch-view-btn">List View</Link>
      <DetailsModal {...itemInView}/>
    </>
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

  tempWorkItem.push(new WorkItem("Outlook Add-in", ["nodejs", "html", "ejs", "css", "javascript", "bootstrap"], new Date(Date.now()), Environment.Work, "", "", ""));
  for (let index = 0; index < 10; index++) {
    tempWorkItem.push(new WorkItem("Word Scroll Game", ["html", "css", "javascript", "bootstrap"], new Date(1655113057893), Environment.Work, "", "", ""));
  }

  return tempWorkItem;
}

//#endregion
