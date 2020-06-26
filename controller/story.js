const Story = require("../model/story");

exports.getAllStories = async (req, res) => {
  try {
    let allStories = await Story.find();

    if (allStories) {
      res.status(200).send({
        success: true,
        stories: allStories,
        numberOfStories: allStories.length,
      });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.createStory = async (req, res) => {
  //create new course here
  try {
    let newStory = await new Story(req.body);
    newStory.save().then((data) => {
      res.status(200).send({ success: true, data: data });
    });
  } catch (e) {
    res.status(400).send({ success: false, message: e.message });
  }
};



//get single  story 
// :id