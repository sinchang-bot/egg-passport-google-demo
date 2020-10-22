'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  passportGoogle: {
    enable: true,
    package: 'egg-passport-google',
  },
  passport: {
    enable: true,
    package: 'egg-passport',
  },
};
