import WorkItem from './WorkItem';

interface IWorkItemDateGroup {
    year: number;
    items: Array<WorkItem>
}

export default class WorkItemDateGroup implements IWorkItemDateGroup {
    year: number;
    items: Array<WorkItem>

    constructor(year: number, items: Array<WorkItem>) {
        this.year = year;
        this.items = items;
    }
}