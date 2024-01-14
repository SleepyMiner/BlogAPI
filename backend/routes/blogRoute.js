const express = require("express");
const router = express.Router();
const {
  getBlogs,
  postBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

router.route("/post/").post(postBlog);
router.route("/").get(getBlogs);
router.route("/:id").put(updateBlog).delete(deleteBlog);

module.exports = router;
