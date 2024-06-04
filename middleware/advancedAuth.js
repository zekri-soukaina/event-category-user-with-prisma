import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "https://events-api",
  issuerBaseURL: "https://dev-saa4brqcj1js0gi8.eu.auth0.com/",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
