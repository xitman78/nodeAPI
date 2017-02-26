import db from './../models';

const userController = {};

userController.post = (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  // Validation

  const user = new db.User({
    username,
    password
  });

  user.save().then((newUser) => {
    console.log('/signup');
    res.status(200).json({
      success: true,
      data: newUser,
    });
  }).catch((err) => {
    console.log('Error', err);
    res.status(500).json({
      message: err,
    });
  });
}

export default userController;
