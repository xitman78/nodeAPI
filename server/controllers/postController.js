import db from './../models';

const postController = {};

postController.get = (req, res) => {
  db.Post.find().populate('userId', '-password').then(posts => {
    res.status(200).json(posts);
  }).catch(err => {
    res.status(400).json(err);
  });
};

postController.getOne = (req, res) => {
  db.Post.findOne({ _id: req.params.postId}).populate('userId', '-password').then(post => {
    res.status(200).json(post);
  }).catch(err => {
    res.status(400).json({...err, success: false});
  });
};

postController.post = (req, res) => {
  const { text, userId } = req.body;
  console.log(req.body);
  // Validation

  const post = new db.Post({
    text,
    userId
  });

  post.save().then((newPost) => {
    console.log('/post');
    res.status(200).json({
      success: true,
      data: newPost,
    });
  }).catch((err) => {
    console.log('Error', err);
    res.status(500).json({
      message: err,
    });
  });
};

export default postController;
