import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Hook import
import { useAppSelector } from "../../hooks/reduxHooks";

// Service import
import { api } from "../../services";

// Util import
import { IResponse } from "../../utils/ResponseModels";

// Import components
import { PageLayout } from "../../components/PageLayout";

// Inner component import
import { InfoBox } from "./InfoBox";

// Style import
import { Container } from "./styles";

const ItemDetails: React.FC = () => {
  // Hooks
  const user = useAppSelector((state) => state.user);
  const location = useLocation().pathname;

  // Local states
  const [loading, setLoading] = useState<boolean>(false);
  const [itemInfo, setItemInfo] = useState<IResponse>();
  console.log(itemInfo, "itemInfo");
  const myPublicKey = user?.publicKey;

  const getItemInfo = () => {
    const separateItemLocation = location.split("/");
    const itemId = separateItemLocation[2];
    const itemType = separateItemLocation[3];

    return {
      itemId,
      itemType,
    };
  };

  const getItemName = () => {
    if (itemInfo?.name) return itemInfo?.name;
    if (itemInfo?.fullName) return itemInfo?.fullName;
    return itemInfo?.title;
  };

  const { itemId, itemType } = getItemInfo();

  useEffect(() => {
    const getItemInfo = async () => {
      setLoading(true);
      try {
        const response = await api.get(
          `/${itemType}/${itemId}?apikey=${myPublicKey}`
        );
        setItemInfo(response.data.data.results[0]);
      } catch {}
      setLoading(false);
    };

    if (myPublicKey) {
      getItemInfo();
    }
    console.log(myPublicKey, "mypublickey");
  }, [itemType, itemId, myPublicKey]);

  return (
    <PageLayout>
      <Container>
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
      </Container>
    </PageLayout>
  );
};

export { ItemDetails };
