import React from "react";

// Component import
import { Input } from "../../../components/Input";

interface IProps {
  secretKey: string;
  publicKey: string;
  setSecretKey: (value: string) => void;
  setPublicKey: (value: string) => void;
}

const Form: React.FC<IProps> = ({
  secretKey,
  publicKey,
  setSecretKey,
  setPublicKey,
}) => {
  return (
    <div className="formContainer">
      <Input
        name="secretKey"
        value={secretKey}
        label="Chave secreta"
        type="text"
        handleChange={(e) => setSecretKey(e)}
      />
      <Input
        name="publicKey"
        value={publicKey}
        label="Chave pública"
        type="text"
        handleChange={(e) => setPublicKey(e)}
      />
    </div>
  );
};

export { Form };
