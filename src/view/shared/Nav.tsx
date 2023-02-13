import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default function Nav()  {
  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand">Adam Steven</div>
        <div className="d-flex">
          <NavLink href="/personal">About Me</NavLink>
          <NavLink href="/projects">Portfolio</NavLink>
        </div>
      </div>
    </nav>
  )
}

interface INavLinkProps {
  href: string;
  children: ReactNode
}

function NavLink({href, children, ...props}: INavLinkProps) {
  return (
    <Link to={href} className="btn btn-md btn-link" {...props}>{children}</Link>
  )
}
