import Adopt from "adopt-sdk";

const client = new Adopt({
  disclaimerId: "390897ba-2417-474c-944a-567925f7e16b",
});

client.getDisclaimerInfo().then((data) => console.log(data));
