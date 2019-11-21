// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '2p9oy9ko86'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'zakariautopia.auth0.com',            // Auth0 domain
  clientId: '62IzO44W7T0ANrxz1g7JjFwJrGwuyR2r',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
