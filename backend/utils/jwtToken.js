export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, // Cookie cannot be accessed by client-side JavaScript
    secure: isProduction, // ✅ Set to true if in production (HTTPS)
    sameSite: isProduction ? 'None' : 'Lax', // None for cross-site in prod, Lax in dev
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
