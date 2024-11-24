// config.ts
export const config = {
    appId: '5c8def70-31ba-4255-a5a6-3ac6dc699b8d', // Replace with your Azure App Registration Client ID
    authority: 'https://login.microsoftonline.com/common', // Replace with your Azure AD tenant ID
    redirectUri: 'http://localhost:3000/', // Replace with your redirect URI set in Azure AD
    scopes: ['user.read'], // Specify the scopes your app needs
  };
  
  
  