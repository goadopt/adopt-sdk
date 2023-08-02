import Adopt from "@goadopt/disclaimer-api";

const client = new Adopt({
  disclaimerId: "390897ba-2417-474c-944a-567925f7e16b",
});

async function startingApp() {
  const disclaimerInfo = await client.getDisclaimerInfo();
  console.log("disclaimerInfo", disclaimerInfo);

  const getUserConsent = await client.getConsent({
    consentTTL: 60,
    consentVersion: 5,
    device: "mobile",
    visitorId: "9f30d7d7-ca0b-47e9-8e08-867298533704",
  });
  console.log("getUserConsent", getUserConsent);

  // const updateUserResponse = await client.updateConsent({
  //   visitorId: "9f30d7d7-ca0b-47e9-8e08-867298533704",
  //   consentTTL: 60,
  //   consentVersion: 5,
  //   device: "mobile",
  //   optInTags: ["test"],
  //   optOutTags: [],
  //   eventType: null,
  // });
  // console.log("updateUserResponse", updateUserResponse);
}

startingApp();
