# AdOpt SDK

The AdOpt SDK is a powerful tool that allows you to manipulate the functions of the AdOpt tag, providing seamless integration with your applications. This SDK enables you to access and interact with various functionalities offered by the AdOpt platform.

## Installation

You can install the AdOpt SDK via npm. Ensure that you have Node.js and npm installed on your system, and then run the following command:

```bash
npm install adopt-sdk
```

## Functions

### getDisclaimerInfo

Retrieve information about the configured disclaimer.

```typescript
import Adopt from "adopt-sdk";

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

## Getting Help

If you encounter any issues while using the AdOpt SDK or have any questions, feel free to reach out to our support team at support@adopt-sdk.com. We are here to assist you in making the most of our SDK and ensuring a smooth experience.
