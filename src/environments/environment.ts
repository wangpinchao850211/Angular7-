// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  websocketUrl: 'http://localhost:3000',
  websocketPath: 'api',
  OAuth: {
    clientID: 'c047b90b-07de-45cc-b2e2-cca83ab14163',
    tenant: 'f3211d0e-125b-42c3-86db-322b19a65a22',
    localLoginUrl: '设置此项可将用户重定向到自定义登录页',
    expireOffsetSeconds: 120,
    noaccess_groups: 'FCSG.All.Test;FCSG.All',
    response_type: 'id_token',
    storage: {
      TOKEN_KEYS: 'thirdpart_token_keys',
      EXPIRATION_KEY: 'thirdpart_expiration_key',
      USERNAME: 'thirdpart_username',
    }
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
