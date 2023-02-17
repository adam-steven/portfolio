import WorkItem, { Environment } from "./WorkItem";

interface IProjectListProps {
    environment: Environment;
    workItems: Array<WorkItem>;
}

export default class ProjectListProps implements IProjectListProps {
    environment: Environment;
    workItems: Array<WorkItem>;

    constructor(environment: Environment, workItems: Array<WorkItem>)
    {
        this.environment = environment;
        this.workItems = workItems;
    }
}