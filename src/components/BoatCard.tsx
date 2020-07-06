import React, { useState, useEffect } from "react";

export interface IBoatCardProps {
  producer: string;
  name: string;
  buildNumber?: number;
  userId: number;
  loA: number;
  b: number;
  imageUrl: string;
  crewMembers: any[];
}

const BoatCard = (props: IBoatCardProps) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.producer}</h6>
        <p className="card-text">LoA: {props.loA}</p>
        <p className="card-text">B: {props.b}</p>
        <p className="card-text">Build Number: {props.buildNumber}</p>
      </div>
      <div className="card-footer">
        Crew Members: <hr />
        {props.crewMembers &&
          props.crewMembers.map((item) => <p key={item.Id}>{item.name}</p>)}
      </div>
    </div>
  );
};

export default BoatCard;
