const CryptoJs = require("crypto-js");

module.exports = (value, setEnc = "68*-/43dasflkjl32903298sd/**") => {
  const firstEncrypt = CryptoJs.RC4Drop.encrypt(value, setEnc).toString();
  const twoEncrypt = CryptoJs.Rabbit.encrypt(firstEncrypt, setEnc).toString();

  return { encrypted: twoEncrypt, origin: value };
};
