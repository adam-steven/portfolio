import Platform from "./Platform";

interface IPlatformListProps {
    platforms: Array<Platform>;
    togglePlatform: Function;
}

export default class PlatformListProps implements IPlatformListProps {
    platforms: Array<Platform>;
    togglePlatform: Function;

    constructor(platforms: Array<Platform>, togglePlatform: Function)
    {
        this.platforms = platforms;
        this.togglePlatform = togglePlatform;
    }
}