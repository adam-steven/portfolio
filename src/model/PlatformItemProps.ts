import Platform from "./Platform";

interface IPlatformItemProps {
    platform: Platform;
    togglePlatform: Function;
}

export default class PlatformItemProps implements IPlatformItemProps {
    platform: Platform;
    togglePlatform: Function;

    constructor(platform: Platform, togglePlatform: Function)
    {
        this.platform = platform;
        this.togglePlatform = togglePlatform;
    }
}