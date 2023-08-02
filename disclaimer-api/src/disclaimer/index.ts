import { Base } from "../base";
// test1
const resourceName = "tag/disclaimer-info-v2";

export class Disclaimer extends Base {
  getDisclaimerInfo() {
    return this.request(`/${resourceName}/${this.disclaimerId}`);
  }
}
