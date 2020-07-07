import React  from "react";

export interface IEmptyBoardCardProps {}

const EmptyBoardCard = () => {
  return (
    <div className="card pointer" style={{height: 270}}>
      <div className="card-body h-100 flex-column d-flex justify-content-center text-center">
        <i style={{fontSize: '5em'}} className="fe fe-plus grow" />

        <h2 className="mb-3">Add new Boat</h2>
      </div>
    </div>
  );
};

export default EmptyBoardCard;
