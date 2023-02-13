interface IPlatform {
    name: string;
    primary: boolean;
    filteringOn: boolean;
}

export default class Platform implements IPlatform {
    name: string;
    primary: boolean;
    filteringOn: boolean;

    constructor(name: string, primary: boolean)
    {
        this.name = name;
        this.primary = primary;
        this.filteringOn = false;
    }
}