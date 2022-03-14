import http from "../Api/api";

class Peerbnk {
  static findAllCharges() {
    return http.get("/qrcodes");
  }
}

export default Peerbnk;
