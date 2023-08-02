export interface GetConsentData {
  consentTTL: number;
  consentVersion: number;
  device: "desktop" | "tablet" | "mobile";
  visitorId?: string;
}
export interface UpdateConsentData extends GetConsentData {
  eventType: null;
  optInTags: Array<string>;
  optOutTags: Array<string>;
}
export interface Response {
  message: string;
  success: boolean;
  data?: any;
}
