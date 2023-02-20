import React, {useEffect, useState} from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';

import Personal from '../personal/Personal';
import ListView from '../projects/ListView';
import Projects from '../projects/Projects';

import WorkItem, {Environment} from '../../model/WorkItem';

import { loadPlatformData, loadProjectData } from '../../controller/LoadData';

export default function App() {
  const loadPlatforms = loadPlatformData();
  const loadWorkItems = loadProjectData();

  const [itemInView, setItemInView] = useState(new WorkItem("", [], new Date(), Environment.Personal, "", "", ""));
  const [platforms, setPlatforms] = useState(loadPlatforms);
  const [workItems, setWorkItems] = useState(loadWorkItems);
  
  const location = useLocation();
  useEffect(() => {
    if(document.querySelector(".personal-content")) { 
      window.addEventListener('load', decodeWelcomeEffect);
      window.addEventListener('scroll', personalSectionScroll);
    }

    const mouseBlob = document.getElementById('mouse-blob');
    if(mouseBlob) { document.body.onpointermove = (event) => { moveMouseBlob(event as PointerEvent, mouseBlob)}}

    const projectModal = document.getElementById('projectModal');
    if(projectModal) { projectModal.addEventListener('show.bs.modal', (event) => { displayProjectInfo(event as MouseEvent)}); }

    return () => {
      window.removeEventListener('scroll', personalSectionScroll);
    }
  }, [location]);

  function togglePlatform(name: string) {
    //Toggle the click platform
    const newPlatforms = [...platforms];
    const platform = newPlatforms.find(platform => platform.name === name);
    if(platform) { platform.filteringOn = !platform.filteringOn; }

    //Update the work items to match the new filter
    const activePlatforms = newPlatforms.filter(platform => platform.filteringOn);
    const activePlatformsName: Array<string> = activePlatforms.map(platform => platform.name);
    const newWorkItems = loadWorkItems.filter(workItem => activePlatformsName.some(item => workItem.platforms.includes(item)));

    setPlatforms(newPlatforms);
    setWorkItems(Boolean(newWorkItems.length) ? newWorkItems : loadWorkItems);
  }

  function decodeWelcomeEffect() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const decodeTexts = document.getElementsByClassName("decode-text");

    for (let i = 0; i < decodeTexts.length; i++) {
      const elem = decodeTexts[i];
      const elemDataVal = elem.getAttribute("data-value");
      if(!elemDataVal) { continue; }
      
      let iterations: number = 0;
      const interval = setInterval(() => {
        elem.textContent = elemDataVal.split('')
        .map((_, index) => {
          if(index < iterations) { return elemDataVal[index]; }
          return letters[Math.floor(Math.random() * 26)]
        }).join('');

        if(iterations >= elemDataVal.length) { clearInterval(interval); }
        iterations += 3;
      }, 80);
    }
  }

  function personalSectionScroll() {
    const sections = document.getElementsByTagName("section");
    const windowCenter = window.innerHeight / 2;
  
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionImage = section.querySelector("img");
      if(!sectionImage) { continue; }
  
      const rect = section.getBoundingClientRect();
      const elemCenter = rect.top + (rect.height / 2);
      const elemPosition = Math.abs(windowCenter - elemCenter);
  
      let sectionOpacity = Math.round((1 - (elemPosition / windowCenter)) * 100) / 100;
      sectionOpacity = Math.max(Math.min(sectionOpacity, 1), 0);
      sectionOpacity = 1- (Math.cos(Math.PI * sectionOpacity) + 1) / 2;

      sectionImage.style.opacity = sectionOpacity.toString();
    }
  }
  
  function displayProjectInfo(event: MouseEvent) {
    const button = event.relatedTarget as HTMLElement;
    const data = button.getAttribute('data-bs-custom-data') ?? "";
    const dataObj: WorkItem = JSON.parse(data);
    setItemInView(dataObj);
  }

  function moveMouseBlob(event: PointerEvent, mouseBlob: HTMLElement) {
    const { clientX, clientY } = event;

    mouseBlob.animate ({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, {duration: 3000, fill: "forwards"});
  }

  return (
    <>
    <div id="mouse-blob"></div>
    <Routes>
      <Route path="/" element={<Personal />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/projects" element={<Projects platforms={platforms} workItems={workItems} togglePlatform={togglePlatform} itemInView={itemInView} />} />
      <Route path="/list" element={<ListView platforms={platforms} workItems={workItems} togglePlatform={togglePlatform} itemInView={itemInView} />} />
    </Routes>
    </>
  )
}


