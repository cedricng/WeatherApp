// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://open-weather13.p.rapidapi.com/city',
  XRapidAPIHostHeaderName :'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue : 'open-weather13.p.rapidapi.com',
  XRapidAPIKeyHeaderName : 'X-RapidAPI-Key' ,
  XRapidAPIKeyHeaderValue : 'a59d3069e2msh807260c577870f9p175166jsn6dfe72ba1a37'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.