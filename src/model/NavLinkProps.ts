import { ReactNode } from "react";

interface INavLinkProps {
    href: string;
    className?: string;
    children: ReactNode;
}

export default class NavLinkProps implements INavLinkProps {
    href: string;
    className?: string;
    children: ReactNode

    constructor(href: string, children: ReactNode)
    {
        this.href = href;
        this.children = children;
    }
}