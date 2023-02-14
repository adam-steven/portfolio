import React from 'react'
import PersonalData from '../data/personal-data.json';
import PlatformData from '../data/platform-data.json';
import ProjectData from '../data/project-data.json';

import PersonalSectionProp from '../model/PersonalSectionProp';

export function loadPersonalData() : Array<PersonalSectionProp> {
    const data: Array<PersonalSectionProp> = new Array<PersonalSectionProp>()

    for (let i = 0; i < PersonalData.length; i++) {
        const item = PersonalData[i];
        data.push(new PersonalSectionProp(item.title, item.description, item.imagePath))
    }

    return data;
}

export function loadPlatformData() {

}

export function loadProjectData(filter: Array<string>) {

}

