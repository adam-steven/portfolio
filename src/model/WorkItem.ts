import { v4 as uuidv4 } from 'uuid';

interface IWorkItem {
    id: string;
    name: string;
    platforms: Array<string>;
    date: Date;
    environment: Environment;
    imagesPath: string;
    description: string;
    contribution: string;
    github: string;
}

export default class WorkItem implements IWorkItem {
    id: string;
    name: string;
    platforms: Array<string>;
    date: Date;
    environment: Environment;
    imagesPath: string; //e.g. name 'Print Failure Detection' = 'print_failure_detection'
    description: string;
    contribution: string;
    github: string;

    constructor(name: string, platforms: Array<string>, date: Date, environment: Environment, description: string, contribution: string, github: string) {
        this.id = uuidv4();
        this.name = name.trim();
        this.platforms = platforms;
        this.date = date;
        this.environment = environment;
        this.imagesPath = name.trim().toLowerCase().replace(/\s/g, '_');
        this.description = description;
        this.contribution = contribution;
        this.github = github;
    }
}

export enum Environment {
    Work = 'work',
    Education = 'education',
    Personal = 'personal'
}

