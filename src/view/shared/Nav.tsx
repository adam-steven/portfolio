import React from 'react';
import { Link } from 'react-router-dom';

import NavLinkProps from '../../model/NavLinkProps';

export default function Nav()  {
  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid ps-sm-5">
        <div className="navbar-brand d-none d-sm-block">Adam Steven</div>
        <div className="d-flex">
          <NavLink href="/personal">Personal</NavLink>
          <NavLink href="/projects" className="border-start rounded-0">Projects</NavLink>
        </div>
      </div>
    </nav>
  )
}

function NavLink({href, children, className, ...props}: NavLinkProps) {
  return (
    <Link to={href} className={`btn btn-lg btn-link ${className}`} {...props}>{children}</Link>
  )
}
