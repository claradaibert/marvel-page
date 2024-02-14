import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import md5 from "md5";

// Hook import
import { useAppSelector } from "../../hooks/reduxHooks";

// Service import
import { api } from "../../services";

// Util import
import { IResponse } from "../../utils/ResponseModels";

// Import components
import { PageLayout } from "../../components/PageLayout";

// Inner component import
import { PageBody } from "./PageBody";

// Style import
import { Container } from "./styles";

const ItemDetails: React.FC = () => {
  // Hooks
  const user = useAppSelector((state) => state.user);
  const location = useLocation().pathname;

  // Local states
  const [loading, setLoading] = useState<boolean>(false);
  const [itemInfo, setItemInfo] = useState<IResponse>();

  const myPublicKey = user?.publicKey;
  const myPrivateKey = user?.secretKey;
  const hash = md5(`1${myPrivateKey}${myPublicKey}`);

  const getItemInfo = () => {
    const separateItemLocation = location.split("/");
    const itemId = separateItemLocation[2];
    const itemType = separateItemLocation[3];

    return {
      itemId,
      itemType,
    };
  };

  const { itemId, itemType } = getItemInfo();

  useEffect(() => {
    const getItemInfo = async () => {
      setLoading(true);
      try {
        const response = await api.get(
          `/${itemType}/${itemId}?ts=1&apikey=${myPublicKey}&hash=${hash}`
        );
        setItemInfo(response.data.data.results[0]);
      } catch (err: any) {
        toast.error(err?.response?.data?.message);
      }
      setLoading(false);
    };

    if (myPublicKey) {
      getItemInfo();
    }
  }, [itemType, itemId, myPublicKey, hash]);

  return (
    <PageLayout>
      <Container>
        {loading ? (
          <div className="loadingContainer">
            <CircularProgress />
          </div>
        ) : (
          <PageBody itemInfo={itemInfo} />
        )}
      </Container>
    </PageLayout>
  );
};

export { ItemDetails };
