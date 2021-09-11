import React, { useState } from "react";
import {
  MY_PROMISE,
  PENDING_INVITATION,
  PENDING_OFFER,
  PROMISED_OWED_TO_ME,
} from "../constants/types";
import "bootstrap/dist/css/bootstrap.min.css";
import pendingInvitaionData from "../../assets/data/PendingInvitation.json";
import myPromisesData from "../../assets/data/MyPromise.json";
import pendingOfferData from "../../assets/data/PendingOffer.json";
import promisestoOwedData from "../../assets/data/PromisesOwedToMe.json";
import "../../assets/styles/action.css"
import CustomTable from "./table/CustomTable";
import CustomCardCollapse from "./CustomCardCollapse";
import { Collapse } from "react-bootstrap";

const Actions = () => {
  const pendingInvitationColumns = [
    {
      dataField: "from",
      text: "FROM ",
      sort: true,
      footer: "FROM",
      footerClasses: 'sortable'
    },
    {
      dataField: "description",
      text: "DESCRIPTION",
      sort: true,
      footer: "DESCRIPTION",
      footerClasses: 'sortable'
    },
    {
      dataField: "createdDate",
      text: "CREATED DATE",
      sort: true,
      footer: "CREATED DATE",
      footerClasses: 'sortable'
    },
    {
      dataField: "badgeName",
      text: "BADGE NAME",
      sort: true,
      footer: "BADGE NAME",
      footerClasses: 'sortable'
    },
    {
      dataField: "updatedDate",
      text: "UPDATED DATE",
      sort: true,
      footer: "UPDATED DATE",
      footerClasses: 'sortable'
    },
  ];

  const myPromiseColumns = [
    {
      dataField: "to",
      text: "TO",
      sort: true,
      footer: "TO",
      footerClasses: 'sortable'
    },
    {
      dataField: "description",
      text: "COMMITMENT DESCRIPTION",
      sort: true,
      footer: "COMMITMENT DESCRIPTION",
      footerClasses: 'sortable'
    },
    {
      dataField: "committedDate",
      text: "COMMITTED DATE",
      sort: true,
      footer: "COMMITTED DATE",
      footerClasses: 'sortable'
    },
    {
      dataField: "dueDate",
      text: "DUE DATE",
      sort: true,
      footer: "DUE DATE",
      footerClasses: 'sortable'
    },
    {
      dataField: "badgeName",
      text: "BADGE NAME",
      sort: true,
      footer: "BADGE NAME",
      footerClasses: 'sortable'
    },
    {
      dataField: "requestABadge",
      text: "REQUEST A BADGE",
      sort: true,
      footer: "REQUEST A BADGE",
      footerClasses: 'sortable'
    },
    {
      dataField: "bchain",
      text: "BCHAIN ",
      sort: true,
      footer: "BCHAIN",
      footerClasses: 'sortable'
    },
  ]

  const myPromisesDataMoc = myPromisesData.map(data => {
    return {
      ...data,
      requestABadge: () => {
        <>
          <span>
            <a
              href="#"
              data-target="#request-badge-modal"
              data-toggle="modal"
              className="clarify btn bg-custom-primary text-center text-white d-none d-md-block "
            >
              Request A Badge
            </a>
          </span>
          <span className="d-none d-sm-block d-md-none show-on-small">
            <img
              src="img/validation.png"
              alt="validation"
              width="32px"
            />
          </span>
        </>
      }
    }
  })
  const [openCollapse, setOpenCollapse] = useState({
    myPromiseCollapse: false,
    pendingInvitationCollapse: false,
    pendingOfferCollapse: false,
    promisedOwedToMeCollapse: false,
  });

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];

  const handleCollapse = (type) => {
    if (type && type !== "") {
      switch (type) {
        case MY_PROMISE:
          setOpenCollapse({
            ...openCollapse,
            myPromiseCollapse: !openCollapse.myPromiseCollapse,
          });
          break;
        case PENDING_INVITATION:
          setOpenCollapse({
            ...openCollapse,
            pendingInvitationCollapse: !openCollapse.pendingInvitationCollapse,
          });
          break;
        case PENDING_OFFER:
          setOpenCollapse({
            ...openCollapse,
            pendingOfferCollapse: !openCollapse.pendingOfferCollapse,
          });
          break;
        case PROMISED_OWED_TO_ME:
          setOpenCollapse({
            ...openCollapse,
            promisedOwedToMeCollapse: !openCollapse.promisedOwedToMeCollapse,
          });
          break;
        default:
          break;
      }
    }
  };
  return (
    <div>
        {/* Page Wrapper */}
        <div id="wrapper">
          {/* Sidebar */}
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
          {/* End of Sidebar */}
          {/* ------------------------------------------------------------------------------------------------------------------------------ */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                  <i className="fa fa-bars" />
                </button>
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                  {/* Nav Item - Search Dropdown (Visible Only XS) */}
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-search fa-fw" />
                    </a>
                    {/* Dropdown - Messages */}
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                  {/* Nav Item - Alerts */}
                  <li className="nav-item no-arrow">
                    <a className="nav-link" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="img/faq.png" width="30px" />
                    </a>
                    {/* Dropdown - Alerts */}
                  </li>
                  {/* Nav Item - Messages */}
                  <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {/* Counter - Messages */}
                      <img src="img/pdf-file.png" width="30px" />
                    </a>
                  </li>
                  <div className="topbar-divider d-none d-sm-block" />
                  {/* Nav Item - User Information */}
                  <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="mr-2 d-none d-lg-inline text-dark h5 mb-0 font-weight-bold">Alex Todd</span>
                      <img className="img-profile rounded-circle" src="img/profile.svg" />
                    </a>
                    {/* Dropdown - User Information */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                        Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                        Settings
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                        Activity Log
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              {/* End of Topbar */}
              {/* Begin Page Content */}
              <div className="container-fluid">
                {/* Page Heading */}
                <div className="d-sm-flex flex-row-reverse align-items-center justify-content-center mb-4">
                  <h1 className="h3 mb-0 text-gray-800 font-weight-bold">Actions</h1>
                </div>
                <div className="d-sm-flex flex-row cta-buttons">
                  <div className="cta-btns mx-0 my-3">
                    <button type="button" className="btn bg-custom-secondary mr-2 ml-0 text-white" data-toggle="modal" data-target="#offer" data-whatever="An Offer" style={{width: '160px'}}>Send An Offer</button>
                    <button type="button" className="btn bg-custom-primary text-white" data-toggle="modal" data-target="#invitation" data-whatever="An Invitation" style={{width: '160px'}}>Send An Invitation</button>	
                  </div>
                </div>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
                {/* ----------------------- */}
                {/* ----------------- */}
                {/* DataTables Actions */}
                {/* ----------------- */}
                {/* Show Only on Medium and Large Devices */}
                {/* Collapsible Card Example */}
                <div className="card shadow mb-4">
                  {/* Card Header - Accordion */}
                  <a className="d-block card-header py-3 text-decoration-none bg-custom-secondary collapsed" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardAction">
                    <h5 className="m-0 text-center text-white">My Promises <span className="small">(76)</span></h5>
                  </a>
                  {/* Card Content - Collapse */}
                  <div className="card-body" id="collapseCardAction1">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped table-hover small nowrap badge-priority" width="100%" cellSpacing={0}>
                        <thead className="thead-dark">
                          <tr className="text-uppercase">
                            <th>To</th>
                            <th>Commitment Description</th>
                            <th>Committed Date</th>
                            <th>Due Date</th>
                            <th>Badge Name</th>
                            <th>Request A Badge</th>
                            <th>Bchain</th>
                          </tr>
                        </thead>
                        <tfoot className="thead-dark">
                          <tr className="text-uppercase">
                            <th>To</th>
                            <th>Commitment Description</th>
                            <th>Committed Date</th>
                            <th>Due Date</th>
                            <th>Badge Name</th>
                            <th>Request A Badge</th>
                            <th>Bchain</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          <tr>
                            <td>James</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>
                              <span><a href="#" data-target="#request-badge-modal" data-toggle="modal" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block ">Request A Badge</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><img src="img/validation.png" alt="validation" width="32px" /></span>
                            </td>
                            <td className="text-center">
                              <div>
                                <a href><i className="fas fa-link fa-2x" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Andre</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011/07/25</td>
                            <td>
                              <span><a href="#" data-target="#request-badge-modal" data-toggle="modal" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block ">Request A Badge</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><img src="img/validation.png" alt="validation" width="32px" /></span>
                            </td>
                            <td className="text-center">
                              <div>
                                <a href><i className="fas fa-link fa-2x" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Russel</td>
                            <td>Junior Technical Author</td>
                            <td>San Francisco</td>
                            <td>66</td>
                            <td>$86,000</td>
                            <td>
                              <span><a href="#" data-target="#request-badge-modal" data-toggle="modal" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block ">Request A Badge</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><img src="img/validation.png" alt="validation" width="32px" /></span>
                            </td>
                            <td className="text-center">
                              <div>
                                <a href><i className="fas fa-link fa-2x" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Victor</td>
                            <td>Senior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                            <td>2012/03/29</td>
                            <td>
                              <span><a href="#" data-target="#request-badge-modal" data-toggle="modal" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block ">Request A Badge</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><img src="img/validation.png" alt="validation" width="32px" /></span>
                            </td>
                            <td className="text-center">
                              <div>
                                <a href><i className="fas fa-link fa-2x" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Maximillian</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>33</td>
                            <td>2008/11/28</td>
                            <td>
                              <span><a href="#" data-target="#request-badge-modal" data-toggle="modal" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block ">Request A Badge</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><img src="img/validation.png" alt="validation" width="32px" /></span>
                            </td>
                            <td className="text-center">
                              <div>
                                <a href><i className="fas fa-link fa-2x" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Yogurt</td>
                            <td>Integration Specialist</td>
                            <td>New York</td>
                            <td>61</td>
                            <td>2012/12/02</td>
                            <td>
                              <span><a href="#" data-target="#request-badge-modal" data-toggle="modal" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block ">Request A Badge</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><img src="img/validation.png" alt="validation" width="32px" /></span>
                            </td>
                            <td className="text-center">
                              <div>
                                <a href="#"><i className="fas fa-link fa-2x" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Sedan</td>
                            <td>Sales Assistant</td>
                            <td>San Francisco</td>
                            <td>59</td>
                            <td>2012/08/06</td>
                            <td>
                              <span><a href="#" data-target="#request-badge-modal" data-toggle="modal" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block ">Request A Badge</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><img src="img/validation.png" alt="validation" width="32px" /></span>
                            </td>
                            <td className="text-center">
                              <div>
                                <a href><i className="fas fa-link fa-2x" /></a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Collapsible Card Example */}
                <div className="card shadow mb-4">
                  {/* Card Header - Accordion */}
                  <a href="#collapseCardAction2" className="d-block card-header py-3 text-decoration-none bg-custom-secondary collapsed" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardAction">
                    <h5 className="m-0 text-center text-white">Pending Invitation <span className="small">(34)</span></h5>
                  </a>
                  {/* Card Content - Collapse */}
                  <div className="card-body collapse" id="collapseCardAction2">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped table-hover small display nowrap hide-sort" width="100%" cellSpacing={0}>
                        <thead className="thead-dark">
                          <tr className="text-uppercase">
                            <th>Actions</th>
                            <th>From</th>
                            <th>Description</th>
                            <th>Created Date</th>
                            <th>Badge Name</th>
                            <th>Updated Date</th>
                          </tr>
                        </thead>
                        <tfoot className="thead-dark">
                          <tr className="text-uppercase">
                            <th>Actions</th>
                            <th>From</th>
                            <th>Description</th>
                            <th>Created Date</th>
                            <th>Badge Name</th>
                            <th>Updated Date</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          <tr>
                            <td>
                              <div className="text-center">
                                <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2" data-toggle="modal" data-target="#accept-invitation">Accept</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x text-success" data-toggle="modal" data-target="#accept-invitation" /></a></span>	
                                <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block ">Decline</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></a></span>	
                              </div>
                            </td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>Alaska Ocean</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="text-center">
                                <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2" data-toggle="modal" data-target="#accept-invitation">Accept</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x text-success" data-toggle="modal" data-target="#accept-invitation" /></a></span>	
                                <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block ">Decline</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></a></span>	
                              </div>
                            </td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011/07/25</td>
                            <td>Alaska Ocean</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="text-center">
                                <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2" data-toggle="modal" data-target="#accept-invitation">Accept</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x text-success" data-toggle="modal" data-target="#accept-invitation" /></a></span>	
                                <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block ">Decline</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></a></span>	
                              </div>
                            </td>
                            <td>Junior Technical Author</td>
                            <td>San Francisco</td>
                            <td>66</td>
                            <td>$86,000</td>
                            <td>Alaska Ocean</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="text-center">
                                <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2" data-toggle="modal" data-target="#accept-invitation">Accept</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x text-success" data-toggle="modal" data-target="#accept-invitation" /></a></span>	
                                <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block ">Decline</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></a></span>	
                              </div>
                            </td>
                            <td>Senior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                            <td>2012/03/29</td>
                            <td>Alaska Ocean</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="text-center">
                                <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2" data-toggle="modal" data-target="#accept-invitation">Accept</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x text-success" data-toggle="modal" data-target="#accept-invitation" /></a></span>	
                                <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block ">Decline</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></a></span>	
                              </div>
                            </td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>33</td>
                            <td>2008/11/28</td>
                            <td>Alaska Ocean</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="text-center">
                                <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2" data-toggle="modal" data-target="#accept-invitation">Accept</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x text-success" data-toggle="modal" data-target="#accept-invitation" /></a></span>	
                                <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block ">Decline</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></a></span>	
                              </div>
                            </td>
                            <td>Integration Specialist</td>
                            <td>New York</td>
                            <td>61</td>
                            <td>2012/12/02</td>
                            <td>Alaska Ocean</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="text-center">
                                <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2" data-toggle="modal" data-target="#accept-invitation">Accept</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x text-success" data-toggle="modal" data-target="#accept-invitation" /></a></span>	
                                <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block ">Decline</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></a></span>	
                              </div>
                            </td>
                            <td>Sales Assistant</td>
                            <td>San Francisco</td>
                            <td>59</td>
                            <td>2012/08/06</td>
                            <td>Alaska Ocean</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Collapsible Card Example */}
                <div className="card shadow mb-4">
                  {/* Card Header - Accordion */}
                  <a href="#collapseCardAction4" className="d-block card-header py-3 text-decoration-none bg-custom-primary collapsed" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardAction">
                    <h5 className="m-0 text-center text-white">Pending Offer <span className="small">(22)</span></h5>
                  </a>
                  {/* Card Content - Collapse */}
                  <div className="card-body collapse" id="collapseCardAction4">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped table-hover small display nowrap hide-sort" width="100%" cellSpacing={0}>
                        <thead className="thead-dark">
                          <tr className="text-uppercase">
                            <th>Actions</th>
                            <th>From</th>
                            <th>Description</th>
                            <th>Created Date</th>
                            <th>Badge Name</th>
                            <th>Updated Date</th>
                          </tr>
                        </thead>
                        <tfoot className="thead-dark">
                          <tr className="text-uppercase">
                            <th>Actions</th>
                            <th>From</th>
                            <th>Description</th>
                            <th>Created Date</th>
                            <th>Badge Name</th>
                            <th>Updated Date</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          <tr>
                            <td>
                              <div className="text-center">
                                <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2">Accept</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x text-success" /></a></span>	
                                <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block ">Decline</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></a></span>	
                              </div>
                            </td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>Alaska Ocean</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="text-center">
                                <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2">Accept</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x text-success" /></a></span>	
                                <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block ">Decline</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></a></span>	
                              </div>
                            </td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011/07/25</td>
                            <td>Alaska Ocean</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="text-center">
                                <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2">Accept</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x text-success" /></a></span>	
                                <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block ">Decline</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></a></span>	
                              </div>
                            </td>
                            <td>Junior Technical Author</td>
                            <td>San Francisco</td>
                            <td>66</td>
                            <td>$86,000</td>
                            <td>Alaska Ocean</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="text-center">
                                <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2">Accept</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x text-success" /></a></span>	
                                <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block ">Decline</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></a></span>	
                              </div>
                            </td>
                            <td>Senior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                            <td>2012/03/29</td>
                            <td>Alaska Ocean</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="text-center">
                                <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2">Accept</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x text-success" /></a></span>	
                                <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block ">Decline</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></a></span>	
                              </div>
                            </td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>33</td>
                            <td>2008/11/28</td>
                            <td>Alaska Ocean</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="text-center">
                                <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2">Accept</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x text-success" /></a></span>	
                                <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block ">Decline</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></a></span>	
                              </div>
                            </td>
                            <td>Integration Specialist</td>
                            <td>New York</td>
                            <td>61</td>
                            <td>2012/12/02</td>
                            <td>Alaska Ocean</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="text-center">
                                <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2">Accept</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x text-success" /></a></span>	
                                <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block ">Decline</a></span>
                                <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></a></span>	
                              </div>
                            </td>
                            <td>Sales Assistant</td>
                            <td>San Francisco</td>
                            <td>59</td>
                            <td>2012/08/06</td>
                            <td>Alaska Ocean</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Collapsible Card Example */}
                <div className="card shadow mb-4">
                  {/* Card Header - Accordion */}
                  <a href="#collapseCardAction3" className="d-block card-header py-3 text-decoration-none bg-custom-primary collapsed" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardAction">
                    <h5 className="m-0 text-center text-white">Promises Owed To Me <span className="small">(27)</span></h5>
                  </a>
                  {/* Card Content - Collapse */}
                  <div className="card-body collapse" id="collapseCardAction3">
                    <div className="table-responsive">
                      <tr>
                      </tr><table className="table table-bordered table-striped table-hover small display nowrap hide-sort" width="100%" cellSpacing={0}>
                        <thead className="thead-dark">
                          <tr className="text-uppercase">
                            <th>Actions</th>
                            <th>From</th>
                            <th>Commitment Description</th>
                            <th>Committed Date</th>
                            <th>Due Date</th>
                            <th>Badge Name</th>
                            <th>Requested Date</th>
                            <th>Bchain</th>
                          </tr>
                        </thead>
                        <tfoot className="thead-dark">
                          <tr className="text-uppercase">
                            <th>Actions</th>
                            <th>From</th>
                            <th>Commitment Description</th>
                            <th>Committed Date</th>
                            <th>Due Date</th>
                            <th>Badge Name</th>
                            <th>Requested Date</th>
                            <th>Bchain</th>
                          </tr>
                        </tfoot>
                        <tbody>
                          <tr>
                            <td className="align-middle text-center">
                              <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2">Accept</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x mr-2 text-success" /></span>
                              <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block mb-2 ">Decline</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></span>
                              <span><a href="#" className="clarify btn reliably-aqua text-center text-white d-none d-md-block">Clarify</a></span>
                              <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-history fa-2x" /></a></span>
                            </td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td>
                            <td>Software Architect</td>
                            <td className="text-center">
                              <div>
                                <a href><i className="fas fa-link fa-2x" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle text-center">
                              <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2">Accept</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x mr-2 text-success" /></span>
                              <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block mb-2 ">Decline</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></span>
                              <span><a href="#" className="clarify btn reliably-aqua text-center text-white d-none d-md-block">Clarify</a></span>
                              <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-history fa-2x" /></a></span>
                            </td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011/07/25</td>
                            <td>$170,750</td>
                            <td>Software Architect</td>
                            <td className="text-center">
                              <div>
                                <a href><i className="fas fa-link fa-2x" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle text-center">
                              <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2">Accept</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x mr-2 text-success" /></span>
                              <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block mb-2 ">Decline</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></span>
                              <span><a href="#" className="clarify btn reliably-aqua text-center text-white d-none d-md-block">Clarify</a></span>
                              <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-history fa-2x" /></a></span>
                            </td>
                            <td>Junior Technical Author</td>
                            <td>San Francisco</td>
                            <td>66</td>
                            <td>$86,000</td>
                            <td>2009/01/12</td>
                            <td>Software Architect</td>
                            <td className="text-center">
                              <div>
                                <a href><i className="fas fa-link fa-2x" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle text-center">
                              <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2">Accept</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x mr-2 text-success" /></span>
                              <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block mb-2 ">Decline</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></span>
                              <span><a href="#" className="clarify btn reliably-aqua text-center text-white d-none d-md-block">Clarify</a></span>
                              <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-history fa-2x" /></a></span>
                            </td>
                            <td>Senior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                            <td>2012/03/29</td>
                            <td>$433,060</td>
                            <td>Software Architect</td>
                            <td className="text-center">
                              <div>
                                <a href><i className="fas fa-link fa-2x" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle text-center">
                              <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2">Accept</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x mr-2 text-success" /></span>
                              <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block mb-2 ">Decline</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></span>
                              <span><a href="#" className="clarify btn reliably-aqua text-center text-white d-none d-md-block">Clarify</a></span>
                              <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-history fa-2x" /></a></span>
                            </td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>33</td>
                            <td>2008/11/28</td>
                            <td>$162,700</td>
                            <td>Software Architect</td>
                            <td className="text-center">
                              <div>
                                <a href><i className="fas fa-link fa-2x" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle text-center">
                              <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2">Accept</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x mr-2 text-success" /></span>
                              <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block mb-2 ">Decline</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></span>
                              <span><a href="#" className="clarify btn reliably-aqua text-center text-white d-none d-md-block">Clarify</a></span>
                              <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-history fa-2x" /></a></span>
                            </td>
                            <td>Integration Specialist</td>
                            <td>New York</td>
                            <td>61</td>
                            <td>2012/12/02</td>
                            <td>$372,000</td>
                            <td>Software Architect</td>
                            <td className="text-center">
                              <div>
                                <a href="#"><i className="fas fa-link fa-2x" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr><td className="align-middle text-center">
                              <span><a href="#" className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2">Accept</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-check fa-2x mr-2 text-success" /></span>
                              <span><a href="#" className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block mb-2 ">Decline</a></span>
                              <span className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-times fa-2x text-danger" /></span>
                              <span><a href="#" className="clarify btn reliably-aqua text-center text-white d-none d-md-block">Clarify</a></span>
                              <span><a href="#" className="d-none d-sm-block d-md-none show-on-small"><i className="fas fa-history fa-2x" /></a></span>
                            </td>
                            <td>Sales Assistant</td>
                            <td>San Francisco</td>
                            <td>59</td>
                            <td>2012/08/06</td>
                            <td>$137,500</td>
                            <td>Software Architect</td>
                            <td className="text-center">
                              <div>
                                <a href><i className="fas fa-link fa-2x" /></a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */}
              </div>
              {/* END .container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © ReliablyMe 2021</span>
                </div>
              </div>
            </footer>
            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}
        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
        {/* Logout Modal*/}
        <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="login.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------- */}
        {/* MODALS FOR SEND AN OFFER BUTTON */}
        {/*  */}
        {/* SEND AN OFFER MODAL */}
        <div className="modal fade" id="offer" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel1">Send An Offer</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name-one" className="col-form-label">Select the person to whom you want to send the offer from the list below</label>
                    <select className="js-example-basic-multiple-three form-control" name="states[]" multiple="multiple">
                      <option value="AL">Pat Stummuler</option>
                      <option value="WY">Andy Muller</option>
                      <option value="JA">John Adam</option>
                      <option value="VN">Victor Naval</option>
                    </select>							
                  </div>
                  <input type="email" className="form-control mb-2" id="exampleFormControlInput1" placeholder="Or, if not listed, enter the mobile number in international format" />
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">Select the type of badge that you will issue from the list:</label>
                    <select className="form-control" id="exampleFormControlSelect2">
                      <option value selected disabled>Select Badge</option>
                      <option>Teamwork</option>
                      <option>Confidence</option>
                      <option>Champion</option>
                      <option>Leadership</option>
                      <option>Communication</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Select or enter a custom Promise Card:</label>
                    <select className="form-control" id="exampleFormControlSelect2">
                      <option value selected disabled>Select A Promise Card</option>
                      <option>I promise to extend a helping hand to a fellow team member this week</option>
                      <option>I promise to respond cooperatively to a request from a teammate this week</option>
                    </select>
                    <input type="email" className="form-control mt-3" id="exampleFormControlInput1" placeholder="Or enter a custom promise card" />
                  </div>
                  <div className="form-group" style={{marginBottom: '8px'}}>
                    <input type="text" className="form-control" id="datetime1" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-toggle="modal" data-target="#offer-confirmation" data-dismiss="modal">Send Offer</button>
                <button type="button" className="btn bg-custom-primary border-0 text-white" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal For Offer Confirmation */}
        <div className="modal fade" id="offer-confirmation" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel9">Offer Confirmation</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Your offer to <span className="font-weight-bold reliably-blue">Aarij Khan +16479792745 </span> (or all selected
                      contacts) reads: <span className="font-weight-bold reliably-orange">Alex</span> has offered to make this promise,
                      "I promise to not talk negatively about team members
                      this week“ due on <span className="font-weight-bold reliably-blue">2021-06-11</span> to earn a <span className="font-weight-bold reliably-orange">TEAMWORK</span>
                      badge?
                    </label>							
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal">Send It</button>
                <button type="button" className="btn bg-custom-primary text-white border-0" data-target="#change-offer" data-toggle="modal" data-dismiss="modal">Change It</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal For Change Offer */}
        <div className="modal fade" id="change-offer" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel10">Change Offer</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Select what you would like to change:</label>							
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Your Offer to <span className="font-weight-bold reliably-blue"><a href data-toggle="modal" data-target="#update-teammates" data-dismiss="modal">Alexander +16479792745 </a></span> (or all selected
                      contacts) reads: <span className="font-weight-bold reliably-orange">Alex</span> has offered to make this promise,<span className="font-weight-bold reliably-blue"><a href data-toggle="modal" data-target="#update-promise" data-dismiss="modal">"I promise to not talk negatively about team members
                          this week“</a></span>
                      due on <span className="font-weight-bold reliably-blue"><a href data-toggle="modal" data-target="#update-datetime" data-dismiss="modal">2021-06-11 </a></span>at<span className="font-weight-bold reliably-orange"><a href data-toggle="modal" data-target="#update-time" data-dismiss="modal"> 19:24</a></span> to earn a <span className="font-weight-bold reliably-orange"><a href data-toggle="modal" data-target="#update-badge" data-dismiss="modal">TEAMWORK</a></span>
                      badge.
                    </label>							
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Update Teammates Modal */}
        <div className="modal fade" id="update-teammates" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel11">Update Teammate</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor>Select the person to whom you want to send the Offer from the
                      list below. Or, if not listed, enter the contact number</label>
                    <select className="js-example-basic-multiple-four form-control" name="states[]" multiple="multiple">
                      <option value="AL">Pat Stummuler</option>
                      <option value="WY">Andy Muller</option>
                      <option value="JA">John Adam</option>
                      <option value="VN">Victor Naval</option>
                    </select>							
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target="#offer-confirmation">Update</button>
                <button type="button" className="btn bg-custom-primary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target="#change-offer">Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* Update Promise Modal */}
        <div className="modal fade" id="update-promise" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel12">Update Promise</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">Select or choice a custom Promise Card:</label>
                    <select className="form-control" id="exampleFormControlSelect5">
                      <option value selected disabled>Select A Promise Card</option>
                      <option>I promise to not talk negatively about team members this week</option>
                      <option>I promise to give a compliment to a team member every day this week</option>
                      <option>I promise to keep my communication job related this week</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target="#offer-confirmation">Update</button>
                <button type="button" className="btn bg-custom-primary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target="#">Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* Update Badge Modal */}
        <div className="modal fade" id="update-badge" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel13">Update Badge</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">Select a Badge:</label>
                    <select className="form-control" id="exampleFormControlSelect6">
                      <option value selected disabled>Select A Badge</option>
                      <option>Promise Kept</option>
                      <option>Teamwork</option>
                      <option>Covid-19 P2P Safety</option>
                      <option>Outreach</option>
                      <option>Helping Hand</option>
                      <option>Outreach</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target="#offer-confirmation">Update</button>
                <button type="button" className="btn bg-custom-primary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target>Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* Update Date Modal */}
        <div className="modal fade" id="update-datetime" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel14">Update Date</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group" style={{marginBottom: '8px'}}>
                    <label htmlFor="message-text" className="col-form-label">Please provide a completion date and time:
                    </label>
                    <input type="text" className="form-control" id="datetime2" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target="#offer-confirmation">Update</button>
                <button type="button" className="btn bg-custom-primary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target>Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* Update Time Modal */}
        <div className="modal fade" id="update-time" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel14">Update Date</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group" style={{marginBottom: '8px'}}>
                    <label htmlFor="message-text" className="col-form-label">Please provide a completion date and time:
                    </label>
                    <input type="text" className="form-control" id="datetime4" />
                    <label htmlFor="message-text" className="col-form-label">How many questions will you answer between now and 2021-06-11?
                    </label>
                    <input type="text" className="form-control" placeholder="Enter minimum 1" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target="#update-datetime-2">Update</button>
                <button type="button" className="btn bg-custom-primary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target>Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* Update DateTime Modal - Scenario: Send Offer Multi-part badge confirmation */}
        <div className="modal fade" id="update-datetime-offer" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel9">Offer Confirmation</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Your offer to <span className="font-weight-bold reliably-blue">Badar Khan +16479792745 </span> (or all selected
                      contacts) reads: <span className="font-weight-bold reliably-orange">Alex</span> has offered to make this promise,
                      "I promise to not talk negatively about team members
                      this week“ due on <span className="font-weight-bold reliably-blue">2021-06-11</span> to earn a <span className="font-weight-bold reliably-orange">SELF CARE</span>
                      badge
                    </label>							
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-primary text-white border-0" data-dismiss="modal">Send It</button>
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-target="#update-datetime-2-confirm" data-toggle="modal" data-dismiss="modal">Change It</button>
              </div>
            </div>
          </div>
        </div>
        {/* Update DateTime Modal - Scenario: Send Offer Multi-part badge confirmation */}
        <div className="modal fade" id="update-datetime-2" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor>Select what would you like to change:</label>
                    <label htmlFor="recipient-name" className="col-form-label">Your offer to <span className="font-weight-bold reliably-blue">Badar Khan +16479792745</span> (or all selected
                      contacts) reads: <span className="font-weight-bold reliably-orange">Alex</span> has offered to make this promise,
                      <span className="font-weight-bold reliably-blue">"I promise to not talk negatively about team members
                        this week“ </span>by responding to <span className="font-weight-bold reliably-orange" /> request(s) before <span className="font-weight-bold reliably-blue">2021-06-11 </span>at <span className="font-weight-bold reliably-blue">19:20</span> hrs to earn a <span className="font-weight-bold reliably-blue">SELF CARE</span> badge
                    </label>							
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target>Send It</button>
                <button type="button" className="btn bg-custom-primary text-white border-0" data-target="#update-datetime-2-confirm" data-toggle="modal" data-dismiss="modal">Change It</button>
              </div>
            </div>
          </div>
        </div>
        {/* Update DateTime Modal - Scenario: Send Offer Multi-part badge confirmation */}
        <div className="modal fade" id="update-datetime-2-confirm" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor>Select what would you like to change:</label>
                    <label htmlFor="recipient-name" className="col-form-label">Your offer to <span className="font-weight-bold reliably-blue"><a href data-toggle="modal" data-target="#update-teammates" data-dismiss="modal">Badar Khan +16479792745 </a></span> (or all selected
                      contacts) reads: <span className="font-weight-bold reliably-orange">Alex</span> has offered to make this promise,
                      </label>							
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target>Send It</button>
                <button type="button" className="btn bg-custom-primary text-white border-0" data-target="#offer-confirmation" data-toggle="modal" data-dismiss="modal">Change It</button>
              </div>
            </div>
          </div>
        </div>
        {/* Update number of questions */}
        <div className="modal fade" id="update-offer-questions" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel9">Enter Number Of Questions</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor>How many questions will you answer between now and 2021-06-11? (minimum: 1)</label>
                    <input type="text" className="form-control" placeholder />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-primary text-white border-0" data-target="#update-datetime-2" data-toggle="modal" data-dismiss="modal">Update</button>
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* MODALS FOR SEND AN INVITATION BUTTON */}
        <div className="modal fade" id="invitation" tabIndex={-1} role="dialog" aria-labelledby="invitation" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel2">Send An Invitation</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Select the type of badge that you will issue from the list:</label>
                    <select className="form-control" id="exampleFormControlSelect3">
                      <option value selected disabled>Select a Badge</option>
                      <option>Teamwork</option>
                      <option>Confidence</option>
                      <option>Champion</option>
                      <option>Leadership</option>
                      <option>Communication</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">Select or enter a custom Promise Card:</label>
                    <select className="form-control" id="exampleFormControlSelect4">
                      <option value selected disabled>Select A Promise Card</option>
                      <option>I will be responsive to the requests of my teammates</option>
                      <option>I will be responsive to help other teammates to achieve their badges</option>
                      <option>I promise to give a compliment to a team member every day this week</option>
                      <option>I promise to keep my communication job related this week</option>
                    </select>
                  </div>
                  <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Or enter a custom promise card" />
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Select the person to whom you want to send the invitation from the list below</label>
                    <select className="js-example-basic-multiple-one form-control" name="states[]" multiple="multiple">
                      <option value="AL">Pat Stummuler</option>
                      <option value="WY">Andy Muller</option>
                      <option value="JA">John Adam</option>
                      <option value="VN">Victor Naval</option>
                    </select>							
                  </div>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="If member is not listed, enter mobile number instead..." />
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary border-0 text-white" data-dismiss="modal" data-target="#invitation-confirmation" data-toggle="modal">Send Invitation</button>
                <button type="button" className="btn bg-custom-primary text-white border-0" data-dismiss="modal" data-target data-toggle="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal For Invitation Confirmation */}
        <div className="modal fade" id="invitation-confirmation" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel10">invitation Confirmation</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Your Invitation to <span className="font-weight-bold reliably-blue">Aarij Khan +16479792745 </span> (or all selected
                      contacts) reads: <span className="font-weight-bold reliably-orange">Alex</span> has invited to make this promise,
                      "I promise to not talk negatively about team members
                      this week“ to earn a <span className="font-weight-bold reliably-orange">TEAMWORK</span>
                      badge
                    </label>							
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal">Send It</button>
                <button type="button" className="btn bg-custom-primary text-white border-0" data-target="#change-invitation" data-toggle="modal" data-dismiss="modal">Change It</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal For Change Invitation */}
        <div className="modal fade" id="change-invitation" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel19">Change Invitation</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Select what you would like to change:</label>							
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Your invitation to <span className="font-weight-bold reliably-blue"><a href data-toggle="modal" data-target="#update-teammates-invitation" data-dismiss="modal">Hussey +46579792745 </a></span> (or all selected
                      contacts) reads: <span className="font-weight-bold reliably-orange">Alex</span> has invited to make this promise,<span className="font-weight-bold reliably-blue"><a href className="font-weight-bold" data-toggle="modal" data-target="#update-promise-invitation" data-dismiss="modal">"I promise to not talk negatively about team members
                          this week“ </a></span>to earn a <span><a href className="font-weight-bold" data-toggle="modal" data-target="#update-badge-invitation" data-dismiss="modal">Teamwork</a></span> badge
                    </label>							
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Update Teammates Modal Invitation */}
        <div className="modal fade" id="update-teammates-invitation" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel21">Update Teammates</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor>Select the person to whom you want to send the invitation from
                      the list below. Or, if not listed, enter the contact number</label>
                    <select className="js-example-basic-multiple-two form-control" name="states[]" multiple="multiple">
                      <option value="AL">Pat Stummuler</option>
                      <option value="WY">Andy Muller</option>
                      <option value="JA">John Adam</option>
                      <option value="VN">Victor Naval</option>
                    </select>							
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target="#invitation-confirmation">Update</button>
                <button type="button" className="btn bg-custom-primary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target="#change-invitation">Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* Update Promise Modal Invitation */}
        <div className="modal fade" id="update-promise-invitation" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel22">Update Promise</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">Select or choice a custom Promise Card:</label>
                    <select className="form-control" id="exampleFormControlSelect5">
                      <option value selected disabled>Select A Promise Card</option>
                      <option>I promise to not talk negatively about team members this week</option>
                      <option>I promise to give a compliment to a team member every day this week</option>
                      <option>I promise to keep my communication job related this week</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target="#invitation-confirmation">Update</button>
                <button type="button" className="btn bg-custom-primary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target="#change-invitation">Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* Update Badge Modal Invitation */}
        <div className="modal fade" id="update-badge-invitation" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel23">Update Badge</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">Select a Badge:</label>
                    <select className="form-control" id="exampleFormControlSelect6">
                      <option value selected disabled>Select the type of badge that you will issue from the list below</option>
                      <option>Promise Kept</option>
                      <option>Teamwork</option>
                      <option>Covid-19 P2P Safety</option>
                      <option>Outreach</option>
                      <option>Helping Hand</option>
                      <option>Outreach</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target="#invitation-confirmation">Update</button>
                <button type="button" className="btn bg-custom-primary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target>Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* Update DateTime Modal Invitation */}
        {/* <div class="modal fade" id="update-datetime-invitation" tabindex="-1" role="dialog" aria-labelledby="offer" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header bg-custom-primary text-white" >
						<h5 class="modal-title" id="exampleModalLabel24">Update Badge</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form>
							<div class="form-group" style="margin-bottom: 8px;">
								<input type="text" class="form-control" id="datetime2">
								<label for="message-text" class="col-form-label">How many questions will you answer between now and 2021-06-11? (minimum: 1)
								</label>
								<input type="text" class="form-control">
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn bg-custom-primary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target="#change-invitation">Update</button>
					</div>
	
				</div>
			</div>
		</div> */}
        {/* MODAL FOR CLARIFICATION */}
        <div className="modal fade" id="clarify" tabIndex={-1} role="dialog" aria-labelledby="clarify" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel7">Clarification</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleFormControlInput7" placeholder="Clarification and details here..." />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary border-0" data-dismiss="modal">Close</button>
                <button type="button" className="btn bg-custom-secondary text-white border-0">Proceed</button>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL FOR REQUEST BADGE */}
        <div className="modal fade" id="request" tabIndex={-1} role="dialog" aria-labelledby="clarify" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel8">Badge Request</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleFormControlInput8" placeholder="Badge requisition here..." />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary border-0" data-dismiss="modal">Close</button>
                <button type="button" className="btn bg-custom-secondary text-white border-0">Proceed</button>
              </div>
            </div>
          </div>
        </div>
        {/* Request A Badge - Modal */}
        <div className="modal fade" id="request-badge-modal" tabIndex={-1} role="dialog" aria-labelledby="clarify" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel33">Badge Request</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor className="col-form-label"><span className="font-weight-bold reliably-blue" style={{fontSize: '18px'}}><a>Badar </a></span>what did you do to keep your promise?</label>
                    <input type="email" className="form-control" id="exampleFormControlInput44" placeholder="Your details here..." />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal" data-target="#badge-request-confirm" data-toggle="modal">Submit</button>
              </div>
            </div>
          </div>
        </div>
        {/* Request A Badge Confirmation - Modal */}
        <div className="modal fade" id="badge-request-confirm" tabIndex={-1} role="dialog" aria-labelledby="clarify" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel43">Badge Request Confirmation</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor className="col-form-label">You have entered the following explanation</label>
                    <label className="d-block">...</label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal" data-target>Send It</button>
                <button type="button" className="btn bg-custom-primary text-white border-0" data-dismiss="modal" data-target="#badge-request-explaination-update" data-toggle="modal">Change It</button>
              </div>
            </div>
          </div>
        </div>
        {/* Request A Badge Confirmation Explaination Update - Modal */}
        <div className="modal fade" id="badge-request-explaination-update" tabIndex={-1} role="dialog" aria-labelledby="clarify" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel43">Badge Request Confirmation</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor className="col-form-label">Update what did you do to keep your promise?</label>
                    <input type="email" className="form-control" id="exampleFormControlInput44" placeholder="Your details here..." />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-secondary text-white border-0" data-dismiss="modal" data-target>Send It</button>
                <button type="button" className="btn bg-custom-primary text-white border-0" data-dismiss="modal" data-target="#request-badge-modal" data-toggle="modal">Change It</button>
              </div>
            </div>
          </div>
        </div>
        {/* Accept Invitation Button - Modal */}
        <div className="modal fade" id="accept-invitation" tabIndex={-1} role="dialog" aria-labelledby="offer" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-custom-primary text-white">
                <h5 className="modal-title" id="exampleModalLabel54">Accept Pending Invitation</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group" style={{marginBottom: '8px'}}>
                    <label htmlFor="message-text" className="col-form-label text-uppercase">Please provide a completion date and time</label>
                    <input type="text" className="form-control" id="datetime3" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-custom-primary text-white border-0" data-dismiss="modal" data-toggle="modal" data-target="#update-datetime-offer">Submit</button>
                <label htmlFor="message-text" className="col-form-label text-uppercase">Note: The following is temp, please copy and save it if there is any issue</label>
              </div>
            </div>
          </div>
        </div>
        {/* Bootstrap core JavaScript*/}
        {/* Core plugin JavaScript*/}
        {/* Custom scripts for all pages*/}
        {/* Page level plugins */}
        {/* Page level custom scripts */}
        {/* Bootstrap Date Picker JS */}
        {/* Select2 Multiple Select */}
        {/* Select2 Inits */}
        {/* // Select2 Inits */}
        {/* DateTime Picker Inits */}
        {/* // DateTime Picker Inits */}
        {/* Sidebar Toggle Off */}
        {/* // Sidebar Toggle Off */}
      </div>
  );
};

export default Actions;
