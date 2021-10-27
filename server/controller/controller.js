const data = require("../db.json");

module.exports = {
  getJobs: (req, res) => {
    res.status(200).send(data);
  },
};
