let base_uri2 = 'https://stgmotapi.dhwaniris.in/web/api/';
let baseURL = "https://stg_idhinstep.dhwaniris.in/web/api/";

let origin = window.location.hostname;
let secretKey ="1234";
let captchaSecretKet = '6LdqKrMmAAAAAJ7DYHSe6wThAtPnhYyEkP099ZbP'

if(origin == 'uatidhinstepui.dhwaniris.in')
baseURL = "https://uat_idhinstep.dhwaniris.in/web/api/";

if(origin == 'idhinstep.dhwaniris.in')
baseURL = "https://idhinstepapi.dhwaniris.in/web/api/";

if(origin == 'idh-instep.com')
baseURL = "https://api.idh-instep.com/web/api/";

if(origin == 'www.idh-instep.com')
baseURL = "https://api.idh-instep.com/web/api/";

export const environment = {
  production: true,
  url2: base_uri2,
  baseURL: baseURL,
  secretKey:secretKey,
  captchaSecretKet:captchaSecretKet,

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
