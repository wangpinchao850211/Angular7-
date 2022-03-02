// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mock: false,
  websocketUrl: 'http://localhost:3000',
  websocketPath: 'api',
  OAuth: {
    wpclientID: '123456',
    wpcTenant: '123456',
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
  host: 'http://localhost:3000',
  nestApiUrl: 'http://localhost:3000/api/upload'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
