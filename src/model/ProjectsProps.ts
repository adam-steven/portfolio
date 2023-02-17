import Platform from "./Platform";
import WorkItem from "./WorkItem";

interface IProjectsProps {
    platforms: Array<Platform>;
    workItems: Array<WorkItem>;
    togglePlatform: Function;
    itemInView: WorkItem;
}

export default class ProjectsProps implements IProjectsProps {
    platforms: Array<Platform>;
    workItems: Array<WorkItem>;
    togglePlatform: Function;
    itemInView: WorkItem;

    constructor(platforms: Array<Platform>, workItems: Array<WorkItem>, togglePlatform: Function, itemInView: WorkItem)
    {
        this.platforms = platforms;
        this.workItems = workItems;
        this.togglePlatform = togglePlatform;
        this.itemInView = itemInView;
    }
}