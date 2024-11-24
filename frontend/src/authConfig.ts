// src/authConfig.ts
export const msalConfig = {
    auth: {
        clientId: "5c8def70-31ba-4255-a5a6-3ac6dc699b8d", // Azure App Registration Client ID
        authority: "https://login.microsoftonline.com/common", // Multi-tenant authority URL
        redirectUri: "http://localhost:3000", // Ensure this matches your Azure AD redirect URI
      },
      cache: {
        cacheLocation: "sessionStorage", // or "localStorage" if needed
        storeAuthStateInCookie: false, // true if IE/Edge compatibility is needed
      },
    };
