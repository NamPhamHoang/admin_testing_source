import React from "react";

const SideBar = () => {
    return (
        <ul className="navbar-nav bg-custom-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center logo-bg" href="index.html"><img src="img/reliably_me_logo.png" alt="Logo" style={{width: '170px'}} className="img-fluid" /></a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="index.html" aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-handshake" />
            <span>Commitment Portfolio</span>
          </a>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Commitments Type:</h6>
              <a className="collapse-item" href="cards.html">My Promises</a>
              <a className="collapse-item" href="cards.html">My Unkept Promises</a>
              <a className="collapse-item" href="cards.html">Promises Owed To Me</a>
              <a className="collapse-item" href="cards.html">Badges Issued</a>
              <a className="collapse-item" href="cards.html">Unkept Promises To Me</a>
            </div>
          </div>
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item active-tab">
          <a className="nav-link" href="#" data-toggle data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-check-circle" />
            <span>Actions</span>
          </a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Sidebar Toggler (Sidebar) */}
        {/* <div class="text-center d-none d-md-inline mt-3">
                <button class="rounded-circle border-0 bg-custom-secondary text-white" id="sidebarToggle"></button>
            </div> */}
      </ul>
    )
}

export default SideBar;