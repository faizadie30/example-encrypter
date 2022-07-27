const CryptoJs = require("crypto-js");
module.exports = (value, setDec = "68*-/43dasflkjl32903298sd/**") => {
  const firstDecrypt = CryptoJs.Rabbit.decrypt(value, setDec).toString(
    CryptoJs.enc.Utf8
  );
  const twoDecrypt = CryptoJs.RC4Drop.decrypt(firstDecrypt, setDec).toString(
    CryptoJs.enc.Utf8
  );

  return { encrypted: value, origin: twoDecrypt };
};
