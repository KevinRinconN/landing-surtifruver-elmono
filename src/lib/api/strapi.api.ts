import axios from "axios";
export const STRAPI_HOST ="http://localhost:1337"

const strapiApi = axios.create({
  baseURL: `${STRAPI_HOST}/api/`,
});

export { strapiApi };
