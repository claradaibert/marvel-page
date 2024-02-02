import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";

// Store action import
import { setKeys } from "../../store/user/slice";

// Asset import
import MarvelLogo from "../../assets/Marvel_Logo.png";

// Component import
import { Button } from "../../components/Button";

// Inner component import
import { Form } from "./Form/index.";

// Style import
import { Container } from "./styles";

const Auth: React.FC = () => {
  // Hooks
  const dispatch = useAppDispatch();
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();

  // Local states
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
        throw err;
      });

      dispatch(setKeys(data));
      setCookie('userKeys', data);
      navigate('/characters');
    } catch {
      return;
    }
  };

  useEffect(() => {
    if (cookies?.userKeys?.publicKey) {
      navigate('/characters');
    }
  });

  return (
    <Container>
      <div className="formBox">
        <img src={MarvelLogo} alt="Marvel Logo" />
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
