import { Base } from "../base";

const resourceName = "tag/disclaimer-info-v2";

export class Disclaimer extends Base {
  getDisclaimerInfo() {
    return this.request(`/${resourceName}/${this.disclaimerId}`);
  }
}
