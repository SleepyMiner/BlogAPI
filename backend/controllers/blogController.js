const Blog = require("../models/blogModel");
const asyncHandler = require("express-async-handler");
//@desc Gets all the Blogs
//@endpoint /api/blogs
//@acess Public

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json(blogs);
});

//@desc Post a Blog
//@endpoint /api/blogs
//@acess Private

const postBlog = asyncHandler(async (req, res) => {
  if (!(req.body.title || req.body.description)) {
    res.status(400);
    res.json({ message: "Please enter a title and description for the Blog" });
  }
  const blog = await Blog.create({
    title: req.body.title,
    description: req.body.description,
  });

  res.status(200).json(blog);
});

//@desc Update a Blog
//@endpoint /api/blogs/:id
//@acess Private

const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400).json("The Blog doesn't exist");
  }

  const updatedBlog = await Blog.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
    },
    { new: true }
  );

  res.status(200).json(updatedBlog);
});

//@desc Delete a Blog
//@endpoint /api/blogs/:id
//@acess Private

const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400).json({ message: "The Blog Doesn't exist" });
  }

  await blog.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBlogs,
  postBlog,
  updateBlog,
  deleteBlog,
};
