// sendToken.js (or wherever your sendToken function is)

export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  // VV HERE IS THE LIKELY CULPRIT VV
  const isProduction = process.env.NODE_ENV === 'production'; // <<< If this line was missed or not deployed

  const options = {
    expires: new Date(
      Date.now() + parseInt(process.env.COOKIE_EXPIRE, 10) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: isProduction, // <<< If 'isProduction' is not defined, this line will throw a ReferenceError
    sameSite: isProduction ? 'None' : 'Lax', // <<< And so will this line
    // path: '/', // Optional
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
