import React, { useState } from "react";
import Cata from "../../assets/images/Badges/Catalyst2030_CONNECT.png";
import Participate from "../../assets/images/Badges/Catalyst2030_PARTICIPATE.png";
import Plan from "../../assets/images/Badges/Common_Approach_Plan.png";
import Covid from "../../assets/images/Badges/COVID-19.png";
import Helping from "../../assets/images/Badges/Daily+Dump+Helping+Hand+badge.png";
import Outreact from "../../assets/images/Badges/Daily+Dump+Outreach+badge.png";

const Badges = () => {
  const [bages, setBages] = useState([
    { title: "CONNECTED", point: 13, img: Cata },
    { title: "PARTICIPATED", point: 22, img: Participate },
    { title: "APPROACHED", point: 4, img: Plan },
    { title: "COVID-19", point: 27, img: Covid },
    { title: "HELPING HAND", point: 13, img: Helping },
    { title: "OUTREACHED", point: 44, img: Outreact },
  ]);

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="h3 text-center reliably-blue my-4 font-weight-bold">
            Badges Earned In Specific Categories
          </div>
        </div>
      </div>

      <div className="row">
        {bages.map((item, index) => (
          <div className="col-xl-4 col-md-4 col-6 mb-4">
            <div className="card card-border-left-one shadow h-100 py-2">
              <div className="card-body txt-sm">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text font-weight-bold reliably-black text-uppercase mb-1">
                      {item.title}
                    </div>
                    <div className="h2 mb-0 font-weight-bold text-gray-800">
                      {item.point}
                    </div>
                  </div>
                  <div className="col-auto text-center align-middle">
                    <img src={item.img} width="60px" alt="item"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Badges;
