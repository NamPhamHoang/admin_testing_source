import React, { useState } from "react";
import {
  MODAL_INVITATION_TYPE,
  MODAL_OFFER_TYPE,
  MODAL_REQUEST_TYPE,
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
import "../../assets/styles/action.css";
import CustomTable from "./table/CustomTable";
import CustomCardCollapse from "./CustomCardCollapse";
import OfferAndInvitationGroupModals from "./GroupModals/OfferAndInvitationGroupModals";
import { Button } from "react-bootstrap";
import RequestBadgeGroupModal from "./GroupModals/RequestBadgeGroupModal";
import AcceptGroupModal from "./GroupModals/AcceptGroupModal";
import {
  myPromiseExpandRow,
  pendingInvitationExpandRow,
  pendingOfferExpandRow,
  promisesOwedToMeExpandRow,
} from "./table/ExpandRowTable";
const Actions = () => {
  const pendingInvitationColumns = [
    {
      dataField: "action",
      text: "ACTION ",
      sort: true,
      footer: "ACTION",
      footerClasses: "sortable",
      formatter: (cell, row) => {
        return (
          <div className="d-flex flex-md-column flex-sm-row wrap">
            <Button
              className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2"
              variant="primary"
              type="button"
              onClick={() =>
                setIsOpenAcceptModal({
                  isOpen: {
                    inputModal: true,
                  },
                })
              }
            >
              Accept
            </Button>
            <span
              className="d-none d-sm-block d-md-none show-on-small"
              onClick={() =>
                setIsOpenAcceptModal({
                  isOpen: {
                    inputModal: true,
                  },
                })
              }
            >
              <i className="fas fa-check fa-2x mr-2 text-success" />
            </span>
            <Button
              type="button"
              className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block mb-2 "
            >
              Decline
            </Button>
            <span
              className="d-none d-sm-block d-md-none show-on-small"
              onClick={() =>
                setIsOpenAcceptModal({
                  isOpen: {
                    inputModal: true,
                  },
                })
              }
            >
              <i className="fas fa-times fa-2x text-danger" />
            </span>
          </div>
        );
      },
    },
    {
      dataField: "from",
      text: "FROM ",
      sort: true,
      footer: "FROM",
      footerClasses: "sortable",
    },
    {
      dataField: "description",
      text: "DESCRIPTION",
      sort: true,
      footer: "DESCRIPTION",
      footerClasses: "sortable",
    },
    {
      dataField: "createdDate",
      text: "CREATED DATE",
      sort: true,
      footer: "CREATED DATE",
      footerClasses: "sortable",
    },
    {
      dataField: "badgeName",
      text: "BADGE NAME",
      sort: true,
      footer: "BADGE NAME",
      footerClasses: "sortable",
    },
    {
      dataField: "updatedDate",
      text: "UPDATED DATE",
      sort: true,
      footer: "UPDATED DATE",
      footerClasses: "sortable",
    },
  ];

  const myPromiseColumns = [
    {
      dataField: "to",
      text: "TO",
      sort: true,
      footer: "TO",
      header: "TO",
      footerClasses: "sortable",
    },
    {
      dataField: "description",
      text: "COMMITMENT DESCRIPTION",
      sort: true,
      footer: "COMMITMENT DESCRIPTION",
      footerClasses: "sortable",
    },
    {
      dataField: "committedDate",
      text: "COMMITTED DATE",
      sort: true,
      footer: "COMMITTED DATE",
      footerClasses: "sortable",
    },
    {
      dataField: "dueDate",
      text: "DUE DATE",
      sort: true,
      footer: "DUE DATE",
      footerClasses: "sortable",
    },
    {
      dataField: "badgeName",
      text: "BADGE NAME",
      sort: true,
      footer: "BADGE NAME",
      footerClasses: "sortable",
    },
    {
      dataField: "requestABadge",
      text: "REQUEST A BADGE",
      sort: true,
      footer: "REQUEST A BADGE",
      footerClasses: "sortable",
      formatter: (cell, row) => {
        return (
          <>
            {cell ? (
              cell
            ) : (
              <>
                <span className="d-flex justify-content-center">
                  <Button
                    className="clarify btn bg-custom-primary text-center text-white d-none d-md-block"
                    onClick={() => {
                      setIsOpenRequestModal({
                        ...isOpenRequestModal,
                        type: MODAL_REQUEST_TYPE,
                        isOpen: {
                          inputModal: true,
                        },
                      });
                    }}
                  >
                    Request A Badge
                  </Button>
                </span>
                <span className="d-none d-sm-block d-md-none show-on-small">
                  <img src="img/validation.png" alt="validation" width="32px" />
                </span>
              </>
            )}
          </>
        );
      },
    },
    {
      dataField: "bchain",
      text: "BCHAIN ",
      sort: true,
      classes: "d-sm-none d-md-table-cell",
      footer: "BCHAIN",
      footerClasses: "sortable d-sm-none d-md-table-cell",
      headerClasses: "d-sm-none d-md-table-cell",
      formatter: (cell, row) => {
        return (
          <>
            <div>
              <a href="#">
                <i class="fas fa-link fa-2x"></i>
              </a>
            </div>
          </>
        );
      },
    },
  ];

  const pendingOfferColumns = [
    {
      dataField: "action",
      text: "ACTION ",
      sort: true,
      footer: "ACTION",
      footerClasses: "sortable",
      formatter: (cell, row) => {
        return (
          <div className="d-flex flex-md-column flex-sm-row wrap">
            <Button
              className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2"
              variant="primary"
              type="button"
              onClick={() =>
                setIsOpenAcceptModal({
                  isOpen: {
                    inputModal: true,
                  },
                })
              }
            >
              Accept
            </Button>
            <span
              className="d-none d-sm-block d-md-none show-on-small"
              onClick={() =>
                setIsOpenAcceptModal({
                  isOpen: {
                    inputModal: true,
                  },
                })
              }
            >
              <i className="fas fa-check fa-2x mr-2 text-success" />
            </span>
            <Button
              type="button"
              className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block mb-2 "
            >
              Decline
            </Button>
            <span
              className="d-none d-sm-block d-md-none show-on-small"
              onClick={() =>
                setIsOpenAcceptModal({
                  isOpen: {
                    inputModal: true,
                  },
                })
              }
            >
              <i className="fas fa-times fa-2x text-danger" />
            </span>
          </div>
        );
      },
    },
    {
      dataField: "from",
      text: "FROM",
      sort: true,
      footer: "FROM",
      footerClasses: "sortable",
    },
    {
      dataField: "description",
      text: "DESCRIPTION",
      sort: true,
      footer: "DESCRIPTION",
      footerClasses: "sortable",
    },
    {
      dataField: "createdDate",
      text: "CREATE DATE",
      sort: true,
      footer: "CREATE DATE",
      footerClasses: "sortable",
    },
    {
      dataField: "badgeName",
      text: "BADGE NAME",
      sort: true,
      footer: "BADGE NAME",
      footerClasses: "sortable",
    },
    {
      dataField: "updatedDate",
      text: "UPDATED DATE",
      sort: true,
      footer: "UPDATED DATE",
      footerClasses: "sortable",
    },
  ];

  const promisestoOwedColumns = [
    {
      dataField: "action",
      text: "ACTION ",
      sort: true,
      footer: "ACTION",
      footerClasses: "sortable",
      formatter: (cell, row) => {
        return (
          <div className="d-flex flex-md-column flex-sm-row wrap">
            <Button
              className="clarify btn bg-custom-primary text-center text-white d-none d-md-block mb-2"
              variant="primary"
              type="button"
              onClick={() =>
                setIsOpenAcceptModal({
                  isOpen: {
                    inputModal: true,
                  },
                })
              }
            >
              Accept
            </Button>
            <span className="d-none d-sm-block d-md-none show-on-small">
              <i className="fas fa-check fa-2x mr-2 text-success" />
            </span>
            <Button
              type="button"
              className="clarify btn bg-custom-secondary text-center text-white d-none d-md-block mb-2 "
            >
              Decline
            </Button>
            <span className="d-none d-sm-block d-md-none show-on-small">
              <i className="fas fa-times fa-2x text-danger" />
            </span>
            <Button
              type="button"
              className="clarify btn reliably-aqua text-center text-white d-none d-md-block"
            >
              Clarify
            </Button>
            <span>
              <a href="#" className="d-none d-sm-block d-md-none show-on-small">
                <i className="fas fa-history fa-2x" />
              </a>
            </span>
          </div>
        );
      },
    },
    {
      dataField: "to",
      text: "TO",
      sort: true,
      footer: "TO",
      footerClasses: "sortable",
    },
    {
      dataField: "description",
      text: "COMMITMENT DESCRIPTION",
      sort: true,
      footer: "COMMITMENT DESCRIPTION",
      footerClasses: "sortable",
    },
    {
      dataField: "committedDate",
      text: "COMMITTED DATE",
      sort: true,
      footer: "COMMITTED DATE",
      footerClasses: "sortable",
    },
    {
      dataField: "dueDate",
      text: "DUE DATE",
      sort: true,
      footer: "DUE DATE",
      footerClasses: "sortable",
    },
    {
      dataField: "badgeName",
      text: "BADGE NAME",
      sort: true,
      footer: "BADGE NAME",
      footerClasses: "sortable",
    },
    {
      dataField: "requestABadge",
      text: "REQUEST A BADGE",
      sort: true,
      footer: "REQUEST A BADGE",
      footerClasses: "sortable",
      formatter: (cell, row) => {
        return (
          <>
            {cell ? (
              cell
            ) : (
              <div className="d-flex justify-content-center">
                <Button
                  className="clarify btn bg-custom-primary text-center text-white d-none d-md-block"
                  onClick={() => {
                    setIsOpenRequestModal({
                      ...isOpenRequestModal,
                      type: MODAL_REQUEST_TYPE,
                      isOpen: {
                        inputModal: true,
                      },
                    });
                  }}
                >
                  Request A Badge
                </Button>

                <span className="d-none d-sm-block d-md-none show-on-small">
                  <img
                    src="/img/validation.png"
                    alt="validation"
                    width="32px"
                  />
                </span>
              </div>
            )}
          </>
        );
      },
    },
    {
      dataField: "bchain",
      text: "BCHAIN ",
      sort: true,
      footer: "BCHAIN",
      footerClasses: "sortable",
      formatter: (cell, row) => {
        return (
          <div>
            <a href="#">
              <i class="fas fa-link fa-2x"></i>
            </a>
          </div>
        );
      },
    },
  ];

  const [openCollapse, setOpenCollapse] = useState({
    myPromiseCollapse: false,
    pendingInvitationCollapse: false,
    pendingOfferCollapse: false,
    promisedOwedToMeCollapse: false,
  });

  const [isOpenModal, setIsOpenModal] = useState({
    type: "",
    isOpen: {
      inputModal: false,
      confirmModal: false,
      updateModal: false,
    },
  });
  const [isOpenRequestModal, setIsOpenRequestModal] = useState({
    type: "",
    isOpen: {
      inputModal: false,
      confirmModal: false,
      updateModal: false,
    },
  });

  const [isOpenAcceptModal, setIsOpenAcceptModal] = useState({
    type: "",
    isOpen: {
      inputModal: false,
      confirmModal: false,
      updateModal: false,
    },
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

  const handleCloseModal = () => {
    setIsOpenModal({
      ...isOpenModal,
      isOpen: false,
    });
  };

  const handleCloseRequestModal = () => {
    setIsOpenRequestModal({
      ...isOpenRequestModal,
      isOpen: false,
    });
  };

  const handleCloseAcceptModal = () => {
    setIsOpenAcceptModal({
      ...isOpenAcceptModal,
      isOpen: false,
    });
  };
  return (
    <div style={{ width: "85%" }}>
      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Sidebar */}

        {/* End of Sidebar */}
        {/* ------------------------------------------------------------------------------------------------------------------------------ */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}

            {/* End of Topbar */}
            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <div className="d-sm-flex flex-row-reverse align-items-center justify-content-center mb-4">
                <h1 className="h3 mb-0 text-gray-800 font-weight-bold">
                  Actions
                </h1>
              </div>
              <div className="d-sm-flex flex-row cta-buttons">
                <div className="cta-btns mx-0 my-3">
                  <button
                    type="button"
                    onClick={() =>
                      setIsOpenModal({
                        ...isOpenModal,
                        type: MODAL_OFFER_TYPE,
                        isOpen: {
                          inputModal: true,
                        },
                      })
                    }
                    className="btn bg-custom-secondary mr-2 ml-0 text-white"
                    data-toggle="modal"
                    data-target="#offer"
                    data-whatever="An Offer"
                    style={{ width: "160px" }}
                  >
                    Send An Offer
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setIsOpenModal({
                        ...isOpenModal,
                        type: MODAL_INVITATION_TYPE,
                        isOpen: {
                          inputModal: true,
                        },
                      })
                    }
                    className="btn bg-custom-primary text-white"
                    data-toggle="modal"
                    data-target="#invitation"
                    data-whatever="An Invitation"
                    style={{ width: "160px" }}
                  >
                    Send An Invitation
                  </button>
                </div>
              </div>

              {/* DataTables Actions */}
              {/* Show Only on Medium and Large Devices */}
              {/* Collapsible Card Example */}
              <CustomCardCollapse
                id="collapseCardAction1"
                title="My Promises"
                amountValues={76}
                content={
                  <CustomTable
                    data={myPromisesData}
                    columns={myPromiseColumns}
                    defaultSorted={defaultSorted}
                    expandRow={myPromiseExpandRow}
                  />
                }
                isCollapse={openCollapse.myPromiseCollapse}
                handleCollapse={() => handleCollapse(MY_PROMISE)}
              />
              {/* Collapsible Card Example */}
              <CustomCardCollapse
                id="collapseCardAction2"
                title="Pending Invitation"
                amountValues={34}
                content={
                  <CustomTable
                    data={pendingInvitaionData}
                    columns={pendingInvitationColumns}
                    defaultSorted={defaultSorted}
                    expandRow={pendingInvitationExpandRow}
                  />
                }
                isCollapse={openCollapse.pendingInvitationCollapse}
                handleCollapse={() => handleCollapse(PENDING_INVITATION)}
              />
              {/* Collapsible Card Example */}
              <CustomCardCollapse
                id="collapseCardAction3"
                title="Pending Offer"
                amountValues={22}
                content={
                  <CustomTable
                    data={pendingOfferData}
                    columns={pendingOfferColumns}
                    defaultSorted={defaultSorted}
                    expandRow={pendingOfferExpandRow}
                  />
                }
                isCollapse={openCollapse.pendingOfferCollapse}
                handleCollapse={() => handleCollapse(PENDING_OFFER)}
              />
              <CustomCardCollapse
                id="collapseCardAction4"
                title="Promises Owed To Me"
                amountValues={27}
                content={
                  <CustomTable
                    data={promisestoOwedData}
                    columns={promisestoOwedColumns}
                    defaultSorted={defaultSorted}
                    expandRow={promisesOwedToMeExpandRow}
                  />
                }
                isCollapse={openCollapse.promisedOwedToMeCollapse}
                handleCollapse={() => handleCollapse(PROMISED_OWED_TO_ME)}
              />
            </div>
            {/* END .container-fluid */}
          </div>
          {/* End of Main Content */}
          {/* Footer */}

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
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------- */}
      {/* MODALS FOR SEND AN OFFER BUTTON */}
      {/*  */}
      {/* SEND AN OFFER MODAL */}

      <OfferAndInvitationGroupModals
        show={isOpenModal.isOpen}
        setShow={setIsOpenModal}
        modalType={isOpenModal.type}
        handleClose={handleCloseModal}
      />

      <RequestBadgeGroupModal
        show={isOpenRequestModal.isOpen}
        setShow={setIsOpenRequestModal}
        modalType={isOpenRequestModal.type}
        handleClose={handleCloseRequestModal}
      />

      <AcceptGroupModal
        show={isOpenAcceptModal.isOpen}
        setShow={setIsOpenAcceptModal}
        modalType={isOpenAcceptModal.type}
        handleClose={handleCloseAcceptModal}
      />
      {/* Update Time Modal */}
      <div
        className="modal fade"
        id="update-time"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="offer"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-custom-primary text-white">
              <h5 className="modal-title" id="exampleModalLabel14">
                Update Date
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group" style={{ marginBottom: "8px" }}>
                  <label htmlFor="message-text" className="col-form-label">
                    Please provide a completion date and time:
                  </label>
                  <input type="text" className="form-control" id="datetime4" />
                  <label htmlFor="message-text" className="col-form-label">
                    How many questions will you answer between now and
                    2021-06-11?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter minimum 1"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-custom-secondary text-white border-0"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#update-datetime-2"
              >
                Update
              </button>
              <button
                type="button"
                className="btn bg-custom-primary text-white border-0"
                data-dismiss="modal"
                data-toggle="modal"
                data-target
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Update DateTime Modal - Scenario: Send Offer Multi-part badge confirmation */}
      <div
        className="modal fade"
        id="update-datetime-offer"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="offer"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-custom-primary text-white">
              <h5 className="modal-title" id="exampleModalLabel9">
                Offer Confirmation
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Your offer to{" "}
                    <span className="font-weight-bold reliably-blue">
                      Badar Khan +16479792745{" "}
                    </span>{" "}
                    (or all selected contacts) reads:{" "}
                    <span className="font-weight-bold reliably-orange">
                      Alex
                    </span>{" "}
                    has offered to make this promise, "I promise to not talk
                    negatively about team members this week“ due on{" "}
                    <span className="font-weight-bold reliably-blue">
                      2021-06-11
                    </span>{" "}
                    to earn a{" "}
                    <span className="font-weight-bold reliably-orange">
                      SELF CARE
                    </span>
                    badge
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-custom-primary text-white border-0"
                data-dismiss="modal"
              >
                Send It
              </button>
              <button
                type="button"
                className="btn bg-custom-secondary text-white border-0"
                data-target="#update-datetime-2-confirm"
                data-toggle="modal"
                data-dismiss="modal"
              >
                Change It
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Update DateTime Modal - Scenario: Send Offer Multi-part badge confirmation */}
      <div
        className="modal fade"
        id="update-datetime-2"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="offer"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-custom-primary text-white">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor>Select what would you like to change:</label>
                  <label htmlFor="recipient-name" className="col-form-label">
                    Your offer to{" "}
                    <span className="font-weight-bold reliably-blue">
                      Badar Khan +16479792745
                    </span>{" "}
                    (or all selected contacts) reads:{" "}
                    <span className="font-weight-bold reliably-orange">
                      Alex
                    </span>{" "}
                    has offered to make this promise,
                    <span className="font-weight-bold reliably-blue">
                      "I promise to not talk negatively about team members this
                      week“{" "}
                    </span>
                    by responding to{" "}
                    <span className="font-weight-bold reliably-orange" />{" "}
                    request(s) before{" "}
                    <span className="font-weight-bold reliably-blue">
                      2021-06-11{" "}
                    </span>
                    at{" "}
                    <span className="font-weight-bold reliably-blue">
                      19:20
                    </span>{" "}
                    hrs to earn a{" "}
                    <span className="font-weight-bold reliably-blue">
                      SELF CARE
                    </span>{" "}
                    badge
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-custom-secondary text-white border-0"
                data-dismiss="modal"
                data-toggle="modal"
                data-target
              >
                Send It
              </button>
              <button
                type="button"
                className="btn bg-custom-primary text-white border-0"
                data-target="#update-datetime-2-confirm"
                data-toggle="modal"
                data-dismiss="modal"
              >
                Change It
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Update DateTime Modal - Scenario: Send Offer Multi-part badge confirmation */}
      <div
        className="modal fade"
        id="update-datetime-2-confirm"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="offer"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-custom-primary text-white">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor>Select what would you like to change:</label>
                  <label htmlFor="recipient-name" className="col-form-label">
                    Your offer to{" "}
                    <span className="font-weight-bold reliably-blue">
                      <a
                        href=""
                        data-toggle="modal"
                        data-target="#update-teammates"
                        data-dismiss="modal"
                      >
                        Badar Khan +16479792745{" "}
                      </a>
                    </span>{" "}
                    (or all selected contacts) reads:{" "}
                    <span className="font-weight-bold reliably-orange">
                      Alex
                    </span>{" "}
                    has offered to make this promise,
                    <span className="font-weight-bold reliably-blue">
                      <a
                        href
                        data-toggle="modal"
                        data-target="#update-badge"
                        data-dismiss="modal"
                      >
                        "I promise to not talk negatively about team members
                        this week“{" "}
                      </a>
                    </span>
                    by responding to{" "}
                    <span className="font-weight-bold reliably-orange">
                      <a
                        href
                        data-toggle="modal"
                        data-target="#update-offer-questions"
                        data-dismiss="modal"
                      >
                        3
                      </a>
                    </span>{" "}
                    request(s) before{" "}
                    <span className="font-weight-bold reliably-blue">
                      <a
                        href
                        data-toggle="modal"
                        data-target="#update-datetime-offer"
                        data-dismiss="modal"
                      >
                        2021-06-11{" "}
                      </a>
                    </span>
                    at{" "}
                    <span className="font-weight-bold">
                      <a
                        href
                        data-toggle="modal"
                        data-target="#update-datetime"
                        data-dismiss="modal>19:24 </a></span>hrs to earn a <span class='font-weight-bold reliably-blue'"
                      />
                      <a
                        href
                        data-toggle="modal"
                        data-target="#update-badge"
                        data-dismiss="modal"
                      >
                        SELF CARE
                      </a>
                    </span>{" "}
                    badge
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-custom-secondary text-white border-0"
                data-dismiss="modal"
                data-toggle="modal"
                data-target
              >
                Send It
              </button>
              <button
                type="button"
                className="btn bg-custom-primary text-white border-0"
                data-target="#offer-confirmation"
                data-toggle="modal"
                data-dismiss="modal"
              >
                Change It
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Update number of questions */}
      <div
        className="modal fade"
        id="update-offer-questions"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="offer"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-custom-primary text-white">
              <h5 className="modal-title" id="exampleModalLabel9">
                Enter Number Of Questions
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor>
                    How many questions will you answer between now and
                    2021-06-11? (minimum: 1)
                  </label>
                  <input type="text" className="form-control" placeholder />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-custom-primary text-white border-0"
                data-target="#update-datetime-2"
                data-toggle="modal"
                data-dismiss="modal"
              >
                Update
              </button>
              <button
                type="button"
                className="btn bg-custom-secondary text-white border-0"
                data-dismiss="modal"
              >
                Close
              </button>
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
      <div
        className="modal fade"
        id="clarify"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="clarify"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-custom-primary text-white">
              <h5 className="modal-title" id="exampleModalLabel7">
                Clarification
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput7"
                    placeholder="Clarification and details here..."
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary border-0"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn bg-custom-secondary text-white border-0"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL FOR REQUEST BADGE */}
      <div
        className="modal fade"
        id="request"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="clarify"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-custom-primary text-white">
              <h5 className="modal-title" id="exampleModalLabel8">
                Badge Request
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput8"
                    placeholder="Badge requisition here..."
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary border-0"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn bg-custom-secondary text-white border-0"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Request A Badge - Modal */}
      <div
        className="modal fade"
        id="request-badge-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="clarify"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-custom-primary text-white">
              <h5 className="modal-title" id="exampleModalLabel33">
                Badge Request
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor className="col-form-label">
                    <span
                      className="font-weight-bold reliably-blue"
                      style={{ fontSize: "18px" }}
                    >
                      <a>Badar </a>
                    </span>
                    what did you do to keep your promise?
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput44"
                    placeholder="Your details here..."
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-custom-secondary text-white border-0"
                data-dismiss="modal"
                data-target="#badge-request-confirm"
                data-toggle="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Request A Badge Confirmation - Modal */}
      <div
        className="modal fade"
        id="badge-request-confirm"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="clarify"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-custom-primary text-white">
              <h5 className="modal-title" id="exampleModalLabel43">
                Badge Request Confirmation
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor className="col-form-label">
                    You have entered the following explanation
                  </label>
                  <label className="d-block">...</label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-custom-secondary text-white border-0"
                data-dismiss="modal"
                data-target
              >
                Send It
              </button>
              <button
                type="button"
                className="btn bg-custom-primary text-white border-0"
                data-dismiss="modal"
                data-target="#badge-request-explaination-update"
                data-toggle="modal"
              >
                Change It
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Request A Badge Confirmation Explaination Update - Modal */}
      <div
        className="modal fade"
        id="badge-request-explaination-update"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="clarify"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-custom-primary text-white">
              <h5 className="modal-title" id="exampleModalLabel43">
                Badge Request Confirmation
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor className="col-form-label">
                    Update what did you do to keep your promise?
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput44"
                    placeholder="Your details here..."
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-custom-secondary text-white border-0"
                data-dismiss="modal"
                data-target
              >
                Send It
              </button>
              <button
                type="button"
                className="btn bg-custom-primary text-white border-0"
                data-dismiss="modal"
                data-target="#request-badge-modal"
                data-toggle="modal"
              >
                Change It
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Accept Invitation Button - Modal */}
      <div
        className="modal fade"
        id="accept-invitation"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="offer"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-custom-primary text-white">
              <h5 className="modal-title" id="exampleModalLabel54">
                Accept Pending Invitation
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group" style={{ marginBottom: "8px" }}>
                  <label
                    htmlFor="message-text"
                    className="col-form-label text-uppercase"
                  >
                    Please provide a completion date and time
                  </label>
                  <input type="text" className="form-control" id="datetime3" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-custom-primary text-white border-0"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#update-datetime-offer"
              >
                Submit
              </button>
              <label
                htmlFor="message-text"
                className="col-form-label text-uppercase"
              >
                Note: The following is temp, please copy and save it if there is
                any issue
              </label>
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
