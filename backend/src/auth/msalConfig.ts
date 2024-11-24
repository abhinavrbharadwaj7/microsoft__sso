import { ConfidentialClientApplication } from "@azure/msal-node";

const msalConfig = {
  auth: {
    clientId: "5c8def70-31ba-4255-a5a6-3ac6dc699b8d",
    authority: "https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a",
    clientSecret: "400f508f-65da-4c17-b27d-3402c01d16cb", // Replace this with your actual client secret
  },
};

const msalClient = new ConfidentialClientApplication(msalConfig);

export { msalClient };