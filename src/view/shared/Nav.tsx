import React from 'react';
import { Link } from 'react-router-dom';

import NavLinkProps from '../../model/NavLinkProps';

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

function NavLink({href, children, ...props}: NavLinkProps) {
  return (
    <Link to={href} className="btn btn-md btn-link" {...props}>{children}</Link>
  )
}
