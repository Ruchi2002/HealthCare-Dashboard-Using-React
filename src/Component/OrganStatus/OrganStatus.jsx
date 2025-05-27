import React from "react";
import OrgansCard from "../OrganCard/OrganCard";
import "./OrganStatus.css";


const OrgansStatus = () => {
  return (
    <div className="organs-status">
      <OrgansCard icon="🫁" organ="Lungs" date="26 Okt 2021" progress={40} color="#DB3E3E" />
      <OrgansCard icon="🦷" organ="Teeth" date="26 Okt 2021" progress={80} color="#5CC9A7" />
      <OrgansCard icon="🦴" organ="Bone" date="26 Okt 2021" progress={60} color="#E37A7A" />
    </div>
  );
};

export default OrgansStatus;
