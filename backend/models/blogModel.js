const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: ["true", "Please enter a Blog title"],
    },
    description: {
      type: String,
      required: ["true", "Please give the Blog a description"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
