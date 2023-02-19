interface IParagraphProps {
    title: string;
    body: string;
}

export default class ParagraphProps implements IParagraphProps {
    title: string;
    body: string;

    constructor(title: string, body: string)
    {
        this.title = title;
        this.body = body;
    }
}