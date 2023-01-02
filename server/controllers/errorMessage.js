const errorMessage = (functionName, error, message) => (
    {
      log: `Error in ${functionName}: ${error}`,
      message: {err: message}
    }
  );

  module.exports = errorMessage;