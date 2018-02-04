'use strict';

module.exports.hello = (event, context, callback) => {
  console.log('Hello was called!');
  console.log('RECORD HI');
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Just a random message'
    })
  };

  callback(null, response);
};
