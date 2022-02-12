const checkLogin = (req, res, next) => {
  if (!req.header("x-user-id")) {
    return res.status(401).json({
      error: "Please Login",
    });
  }
};

export default checkLogin;
