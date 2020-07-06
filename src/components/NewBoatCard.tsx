import React, { useState, useEffect } from "react";

export interface INewBoatCardProps {
  producer: string;
  name: string;
  buildNumber?: number;
  userId: number;
  loA: number;
  b: number;
  imageUrl: string;
  crewMembers: any[];
}

const NewBoatCard = (props: INewBoatCardProps) => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <img
          src="../assets/img/avatars/teams/team-logo-1.jpg"
          alt=""
          className="avatar-img rounded"
        />

        <h2 className="mb-3">{props.name}</h2>

        <p className="card-text text-muted">
          Producer: {props.producer}
        </p>
        <p className="card-text text-muted">
          B: {props.b}
        </p>
        <p className="card-text text-muted">
          LoA: {props.loA}
        </p>
      </div>
      <div className="card-footer card-footer-boxed">
        <div className="row align-items-center">
          <div className="col">
            <small className="text-muted">
              Build number: {props.buildNumber}
            </small>
          </div>
          <div className="col-auto">
            <div className="avatar-group">
              <a href="profile-posts.html" className="avatar avatar-xs">
                <img
                  src="../assets/img/avatars/profiles/avatar-2.jpg"
                  className="avatar-img rounded-circle"
                  alt="..."
                />
              </a>
              <div className="avatar avatar-xs">
                <div className="avatar-title rounded-circle">{props.crewMembers && props.crewMembers.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBoatCard;
