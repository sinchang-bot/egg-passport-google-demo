/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1603335482094_5958';

  // add your middleware config here
  config.middleware = [];

  // get key and secret from https://console.developers.google.com/apis/credentials?project=upbeat-arch-188203&folder=&organizationId=
  config.passportGoogle = {
    key: '',
    secret: '',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
