import { v4 as uuidv4 } from 'uuid';

interface IPlatform {
    id: string;
    name: string;
    primary: boolean;
    filteringOn: boolean;
}

export default class Platform implements IPlatform {
    id: string;
    name: string;
    primary: boolean;
    filteringOn: boolean;

    constructor(name: string, primary: boolean)
    {
        this.id = uuidv4();
        this.name = name;
        this.primary = primary;
        this.filteringOn = false;
    }
}