/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Badges from "./Badges";
import Point from "../../assets/images/point.png";
import Trusted from "../../assets/images/trusted.png";
import Reliability from "../../assets/images/reliability.png";
import Leadership from "../../assets/images/leadership.png";

const Accomplishments = () => {
  return (
    <div className="accomplish">
      <div className="accomplish__container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800 font-weight-bold">
            Commitment Portfolio
          </h1>
        </div>
        <div className="row">
          <div className="col">
            <div className="card shadow mb-4">
              <a className="d-block card-header py-3 nounderline" href="#">
                <h4 className="m-0 font-weight-bold text-dark">
                  Alex Todd
                  <span className="txt-custom-primary ml-3">
                    SMS# +16474021497
                  </span>
                </h4>
              </a>

              <div className="" id>
                <div className="card-body">
                  <h4 className="text-dark">Accomplishments</h4>
                  <div className="row">
                    {/* COMPOENT 1  */}
                    <div className="col-xl-3 col-md-6 col-6 mb-4">
                      <div className="card card-border-left-one shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2 order-down">
                              <div className="text font-weight-bold reliably-black text-uppercase mb-1">
                                Total Points
                              </div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">
                                938
                              </div>
                            </div>

                            <div className="col-auto order-up">
                              <img src={Point} width="40px"></img>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* COMPOENT 2  */}
                    <div className="col-xl-3 col-md-6 col-6 mb-4">
                      <div className="card card-border-left-two shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2 order-down">
                              <div className="text font-weight-bold reliably-black text-uppercase mb-1">
                                Reliability Record
                              </div>
                              <div className="row no-gutters align-items-center">
                                <div className="col-auto">
                                  <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                    65%
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="progress progress-sm mr-2">
                                    <div
                                      className="progress-bar bg-custom-primary"
                                      style={{ width: "65%" }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-auto order-up">
                              <img src={Trusted} width="40px" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* COMPOENT 3  */}
                    <div className="col-xl-3 col-md-6 col-6 mb-4">
                      <div className="card card-border-left-three shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2 order-down">
                              <div className="text font-weight-bold reliably-black text-uppercase mb-1">
                                Punctuality Record
                              </div>
                              <div className="row no-gutters align-items-center">
                                <div className="col-auto">
                                  <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                    90.9%
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="progress progress-sm mr-2">
                                    <div
                                      className="progress-bar bg-custom-primary"
                                      aria-valuenow="50"
                                      width="90%"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-auto order-up">
                              <img src={Reliability} width="40px" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* COMPOENT 4  */}
                    <div className="col-xl-3 col-md-6 col-6 mb-4">
                      <div className="card card-border-left-four shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2 order-down">
                              <div className="text font-weight-bold reliably-black text-uppercase mb-1">
                                Confidence Score
                              </div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">
                                2.3
                              </div>
                            </div>

                            <div className="col-auto order-up">
                              <img src={Leadership} width="40px" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Your current Reliability Rating is  */}
                    <div className="row">
                      <div className="col">
                        {/* CONTENT */}
                        <div className="ratings text-center mt-1">
                          <p>
                            Your current Reliability Rating is{" "}
                            <span className="txt-custom-primary font-weight-bold h3">
                              57,1%
                            </span>
                            after making{" "}
                            <span className="txt-custom-primary font-weight-bold h3">
                              28
                            </span>{" "}
                            commitments in the past
                            <span className="txt-custom-primary font-weight-bold h3">
                              90
                            </span>
                            days
                          </p>
                        </div>

                        {/* CARD BODY */}
                        <div className="card-body text-center padding-dec">
                          <div className="row">
                            {/* COMPOENT 1  */}
                            <div className="col-xl-6 col-md-6 col-6 mb-4">
                              <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                  <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                      <div className="text font-weight-bold text-primary text-uppercase mb-1">
                                        Number Of Earned Badges
                                      </div>
                                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        137
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <img src={Point} width="40px" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* COMPOENT 2  */}
                            <div className="col-xl-6 col-md-6 col-6 mb-4">
                              <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                  <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                      <div className="text font-weight-bold text-success text-uppercase mb-1">
                                        Number Of Earned Badges
                                      </div>
                                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        74
                                      </div>
                                    </div>
                                    <div className="col-auto">
                                      <img src={Trusted} width="40px" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badges />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomplishments;
