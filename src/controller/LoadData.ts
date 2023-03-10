import PersonalData from '../data/personal-data.json';
import PlatformData from '../data/platform-data.json';
import ProjectData from '../data/project-data.json';

import PersonalSectionProp from '../model/PersonalSectionProps';
import Platform from '../model/Platform';
import WorkItem, {Environment} from '../model/WorkItem';

export function loadPersonalData(): Array<PersonalSectionProp> {
    const data: Array<PersonalSectionProp> = new Array<PersonalSectionProp>()

    for (let i = 0; i < PersonalData.length; i++) {
        const item = PersonalData[i];
        data.push(new PersonalSectionProp(item.title, item.description, item.imagePath))
    }

    return data;
}

export function loadPlatformData(): Array<Platform> {
    const data: Array<Platform> = new Array<Platform>()

    for (let i = 0; i < PlatformData.length; i++) {
        const item = PlatformData[i];
        data.push(new Platform(item.name, item.primary))
    }

    return data;
}

export function loadProjectData(): Array<WorkItem> {
    const data: Array<WorkItem> = new Array<WorkItem>()

    for (let i = 0; i < ProjectData.length; i++) {
        const item = ProjectData[i];
        data.push(new WorkItem(item.name, item.platforms, new Date(item.date), Environment[item.environment as keyof typeof Environment], item.description, item.contribution, item.github))
    }

    return data;
}

