# AdOpt Disclaimer Api SDK

The AdOpt SDK is a powerful tool that allows you to manipulate the functions of the AdOpt tag, providing seamless integration with your applications. This SDK enables you to access and interact with various functionalities offered by the AdOpt platform.

## Installation

You can install the AdOpt SDK via npm. Ensure that you have Node.js and npm installed on your system, and then run the following command:

```bash
npm i @goadopt/disclaimer-api
```

## Functions

### getDisclaimerInfo

Retrieve information about the configured disclaimer.

```typescript
import Adopt from "@goadopt/disclaimer-api";

const client = new Adopt({ disclaimerId: "your_disclaimer_id" });

client
  .getDisclaimerInfo()
  .then((info) => {
    console.log("Disclaimer information:", info);
  })
  .catch((error) => {
    console.error("Error fetching disclaimer information:", error);
  });
```

### getConsent

Retrieve the initial consent from the user.

```typescript
import Adopt from "@goadopt/disclaimer-api";

const client = new Adopt({ disclaimerId: "your_disclaimer_id" });

const consentData: GetConsentData = {
  consentTTL: 60,
  consentVersion: 1,
  device: "desktop",
  visitorId: "visitor_id",
};

client
  .getConsent(consentData)
  .then((consent) => {
    console.log("Initial consent received:", consent);
  })
  .catch((error) => {
    console.error("Error getting initial consent:", error);
  });
```

### updateConsent

Update the user's consent.

```typescript
import Adopt from "@goadopt/disclaimer-api";

const client = new Adopt({ disclaimerId: "your_disclaimer_id" });

const updateConsentData: UpdateConsentData = {
  consentTTL: 86400,
  consentVersion: 2,
  device: "mobile",
  eventType: null,
  optInTags: ["tag1", "tag2"],
  optOutTags: ["tag3", "tag4"],
  visitorId: "visitor_id",
};

client
  .updateConsent(updateConsentData)
  .then((updatedConsent) => {
    console.log("Updated consent:", updatedConsent);
  })
  .catch((error) => {
    console.error("Error updating consent:", error);
  });
```

## Data Interfaces

### GetConsentData

| Field          | Type                              | Description                                                                 |
| -------------- | --------------------------------- | --------------------------------------------------------------------------- |
| consentTTL     | number                            | Time-to-live for the consent in seconds (retrieved from getDislcaimerInfo). |
| consentVersion | number                            | Version number of the consent (retrieved from getDislcaimerInfo).           |
| device         | "desktop" \| "tablet" \| "mobile" | The device type used by the visitor.                                        |
| visitorId      | string (optional)                 | Unique identifier for the visitor (if available).                           |

### UpdateConsentData

| Field          | Type                              | Description                                                                 |
| -------------- | --------------------------------- | --------------------------------------------------------------------------- |
| consentTTL     | number                            | Time-to-live for the consent in seconds (retrieved from getDislcaimerInfo). |
| consentVersion | number                            | Version number of the consent (retrieved from getDislcaimerInfo).           |
| device         | "desktop" \| "tablet" \| "mobile" | The device type used by the visitor.                                        |
| eventType      | null                              | (Set to null for consent update).                                           |
| optInTags      | Array\<string>                    | Tags for which the visitor opted-in.                                        |
| optOutTags     | Array\<string>                    | Tags for which the visitor opted-out.                                       |
| visitorId      | string (optional)                 | Unique identifier for the visitor (if available).                           |

## Getting Help

If you encounter any issues while using the AdOpt SDK or have any questions, feel free to reach out to our support team. We are here to assist you in making the most of our SDK and ensuring a smooth experience.
