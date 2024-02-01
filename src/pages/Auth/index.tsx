import React, { useState } from "react";
import * as yup from "yup";
import { toast } from "react-toastify";

// Asset import
import MarvelLogo from "../../assets/Marvel_Logo.png";

// Component import
import { Button } from "../../components/Button";

// Inner component import
import { Form } from "./Form/index.";

// Style import
import { Container } from "./styles";

const Auth: React.FC = () => {
  const [secretKey, setSecretKey] = useState<string>("");
  const [publicKey, setPublicKey] = useState<string>("");

  const handleSend = async () => {
    try {
      const schema = yup.object().shape({
        secretKey: yup
          .string()
          .strict()
          .required("Por favor informe a chave secreta"),
        publicKey: yup
          .string()
          .strict()
          .required("Por favor informe a chave secreta"),
      });

      const data = { secretKey, publicKey };

      await schema.validate(data, { abortEarly: false }).catch((err) => {
        err.inner.forEach((error: any) => {
          toast.error(error.message);
        });
      });
    } catch {
      return;
    }
  };

  return (
    <Container>
      <div className="formBox">
        <img src={MarvelLogo} />
        <Form
          secretKey={secretKey}
          publicKey={publicKey}
          setSecretKey={setSecretKey}
          setPublicKey={setPublicKey}
        />
        <Button handleClick={() => handleSend()} text="ENTRAR" />
      </div>
    </Container>
  );
};

export { Auth };
