import { Base } from "../base";
import { GetConsentData, UpdateConsentData, Response } from "./types";
const resourceName = "tag";

export class Disclaimer extends Base {
  getDisclaimerInfo() {
    return this.request(
      `/${resourceName}/disclaimer-info-v2/${this.disclaimerId}`
    );
  }

  getConsent(data: GetConsentData): Promise<Response> {
    return this.request(`/${resourceName}/get-consent`, {
      method: "POST",
      body: JSON.stringify({
        ...data,
        websiteID: this.disclaimerId,
      }),
    });
  }

  updateConsent(data: UpdateConsentData): Promise<Response> {
    return this.request(`/${resourceName}/update-consent`, {
      method: "POST",
      body: JSON.stringify({
        ...data,
        websiteID: this.disclaimerId,
      }),
    });
  }
}
