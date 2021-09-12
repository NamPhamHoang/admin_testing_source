import React, { useState } from "react";
import CustomCardCollapse from "../shared-components/CustomCardCollapse";
import CustomTable from "../shared-components/table/CustomTable";
import myPromisesData from "../../assets/data/MyPromisePortfolo.json";
import {
  MY_PROMISE,
  PENDING_INVITATION,
  PENDING_OFFER,
  PROMISED_OWED_TO_ME,
} from "../constants/types";
import { Collapse } from "react-bootstrap";

const Commitments = () => {
  const [open, setOpen] = useState(false);

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

  const myPromiseColumns = [
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
      text: "REQUEST DATE",
      sort: true,
      footer: "REQUESTED DATE",
      footerClasses: "sortable",
    },
    {
      dataField: "bchain",
      text: "BCHAIN ",
      sort: true,
      footer: "BCHAIN",
      footerClasses: "sortable",
    },
  ];

  const myPromisesDataMoc = myPromisesData.map((data) => {
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
            <img src="img/validation.png" alt="validation" width="32px" />
          </span>
        </>;
      },
    };
  });

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
    <div className="card shadow card-all">
      <div
        style={{ backgroundColor: "#ff7f41" }}
        onClick={() => setOpen(!open)}
      >
        <a
          href="#collapseCardExampleOne"
          className="d-flex card-header py-3 text-center"
          data-toggle="collapse"
          role="button"
          aria-controls="example-collapse-text"
          aria-expanded={open}
          style={{
            justifyContent: "space-between",
            width: "49vw",
            padding: 0,
            backgroundColor: "#ff7f41",
          }}
        >
          <i
            class="fas fa-angle-down"
            style={{
              color: "#fff",
              margin: "5px 0 0 25px",
              transform: !open ? "rotate(270deg)" : "",
            }}
          ></i>
          <h5
            style={{ width: "11em", whiteSpace: "nowrap" }}
            className="m-0 text-center text-white"
          >
            My Commitments Made
          </h5>
        </a>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="card-body collapse show" id="collapseCardExampleOne">
            <div className="card mb-4">
              <div className="collapse show" id="collapseCardExampleinner1">
                <div className="table-responsive mt-2">
                  <div
                    id="DataTables_Table_0_wrapper"
                    className="dataTables_wrapper dt-bootstrap4"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <CustomCardCollapse
                          id="collapseCardAction1"
                          title="My Promises"
                          amountValues={76}
                          content={
                            <CustomTable
                              data={myPromisesDataMoc}
                              columns={myPromiseColumns}
                              defaultSorted={defaultSorted}
                            />
                          }
                          isCollapse={openCollapse.myPromiseCollapse}
                          handleCollapse={() => handleCollapse(MY_PROMISE)}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <CustomCardCollapse
                          id="collapseCardAction2"
                          title="My Badges"
                          amountValues={76}
                          content={
                            <CustomTable
                              data={myPromisesDataMoc}
                              columns={myPromiseColumns}
                              defaultSorted={defaultSorted}
                            />
                          }
                          isCollapse={openCollapse.pendingInvitationCollapse}
                          handleCollapse={() =>
                            handleCollapse(PENDING_INVITATION)
                          }
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <CustomCardCollapse
                          id="collapseCardAction3"
                          title="My Unkept Promises"
                          amountValues={76}
                          content={
                            <CustomTable
                              data={myPromisesDataMoc}
                              columns={myPromiseColumns}
                              defaultSorted={defaultSorted}
                            />
                          }
                          isCollapse={openCollapse.pendingOfferCollapse}
                          handleCollapse={() => handleCollapse(PENDING_OFFER)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Commitments;
