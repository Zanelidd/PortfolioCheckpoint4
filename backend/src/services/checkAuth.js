const verifyPassword = (req, res) => {
    argon2
      .verify(req.user.password, req.body.password)
      .then((isVerified) => {
        if (isVerified) {
          const payload = { sub: req.user.id };
          const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
            expiresIn: "1h",
          });
          delete req.user.hpassword;
          res
            .status(200)
            .cookie("user_token", token, {
              httpOnly: false,
              expires: new Date(Date.now() + 1000 * 60 * 60),
            })
            .send({ token, user: req.user });
        } else {
          res
            .status(401)
            .send({ message: "Les informations renseignées sont incorrectes" });
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };