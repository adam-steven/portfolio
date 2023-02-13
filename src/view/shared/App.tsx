import React, {useEffect, useState} from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';

import Personal from '../personal/Personal';
import ListView from '../projects/ListView';
import Projects from '../projects/Projects';

import WorkItem, {Environment} from '../../model/WorkItem';

export default function App() {
  const [itemInView, setItemInView] = useState(new WorkItem("", [], new Date(), Environment.Personal, "", "", ""));
  
  const location = useLocation();
  useEffect(() => {
    if(document.querySelector(".personal-content")) { 
      window.addEventListener('scroll', personalSectionScroll);
    }

    const projectModal = document.getElementById('projectModal');
    if(projectModal) { projectModal.addEventListener('show.bs.modal', (event) => { displayProjectInfo(event as MouseEvent)}); }

    return () => {
      window.removeEventListener('scroll', personalSectionScroll);
    }
  }, [location]);

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
      sectionOpacity = Math.max(sectionOpacity, 0);
  
      sectionImage.style.opacity = sectionOpacity.toString();
    }
  }
  
  function displayProjectInfo(event: MouseEvent) {
    const button = event.relatedTarget as HTMLElement;
    const data = button.getAttribute('data-bs-custom-data') ?? "";
    const dataObj: WorkItem = JSON.parse(data);
    setItemInView(dataObj);
  }

  return (
    <Routes>
      <Route path="/" element={<Personal />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/projects" element={<Projects {...itemInView} />} />
      <Route path="/list" element={<ListView {...itemInView} />} />
    </Routes>
  )
}


