import http from "../Api/api";

class Peerbnk {
  static findAllCharges() {
    return http.get("/qrcodes");
  }
  static findByChages(id: string) {
    return http.get(`/qrcodes/${id}/transactions`);
  }
}

export default Peerbnk;
