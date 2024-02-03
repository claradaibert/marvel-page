import React from "react";

// Inner component import
import { InfoBox } from "../InfoBox";

// Util import
import { IResponse } from "../../../utils/ResponseModels";

interface IProps {
  itemInfo?: IResponse;
}

const PageBody: React.FC<IProps> = ({ itemInfo }) => {
  const getItemName = () => {
    if (itemInfo?.name) return itemInfo?.name;
    if (itemInfo?.fullName) return itemInfo?.fullName;
    return itemInfo?.title;
  };

  return (
    <>
      <div className="header">{getItemName()}</div>
      <div className="itemInfo">
        {!!itemInfo?.comics && (
          <InfoBox items={itemInfo?.comics?.items} title="Quadrinhos" />
        )}
        {!!itemInfo?.series && (
          <InfoBox items={itemInfo?.series?.items} title="Séries" />
        )}
        {!!itemInfo?.characters && (
          <InfoBox items={itemInfo?.characters?.items} title="Personagens" />
        )}
        {!!itemInfo?.stories && (
          <InfoBox items={itemInfo?.stories?.items} title="Histórias" />
        )}
      </div>
    </>
  );
};

export { PageBody };
