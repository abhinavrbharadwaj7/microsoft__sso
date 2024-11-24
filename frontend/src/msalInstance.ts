// src/msalInstance.ts
import { PublicClientApplication, Configuration } from "@azure/msal-browser";
import { msalConfig } from './authConfig';  // Import your configuration

const msalInstance = new PublicClientApplication(msalConfig); // Initialize MSAL.js with your config

export default msalInstance; // Export for use in your app
