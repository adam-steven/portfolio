import { v4 as uuidv4 } from 'uuid';

interface IPersonalSectionProps {
    id: string;
    title: string;
    description: string;
    imagePath: string;
}

export default class PersonalSectionProps implements IPersonalSectionProps {
    id: string;
    title: string;
    description: string;
    imagePath: string;

    constructor(title: string, description: string, imagePath: string)
    {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.imagePath = imagePath;
    }
}