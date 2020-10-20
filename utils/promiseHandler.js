// This is simply a function to handle promises.
module.exports = promise => promise
  .then(response => [null, response])
  .catch(err => [err, null]);