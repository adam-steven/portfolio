import Platform from "./Platform";

interface IPlatformArray {
    platforms: Array<Platform>;
}

export default class PlatformArray implements IPlatformArray {
    platforms: Array<Platform>;

    constructor(platforms: Array<Platform>)
    {
        this.platforms = platforms;
    }
}