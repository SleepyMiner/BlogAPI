#  Blog API

  

This is a simple REST API built with Express.js that provides CRUD (Create, Read, Update, Delete) operations for managing blogs.

  

##  Features

  

-  **GET /api/blog**: Retrieve all blogs from the database.

-  **POST /api/blog/post**: Create a new blog with title and description.

-  **PUT /api/blog/:id**: Update a blog with a specific ID.

-  **DELETE /api/blog/:id**: Delete a blog with a specific ID.

  

##  Setup

  

To set up and run this API on your machine, follow these steps:

  

###  Prerequisites

  

- Node.js installed on your machine.

  

###  Installation

  

1. Clone this repository to your local machine:

  
  
```bash
git clone https://github.com/your-username/express-blog-api.git
```
  
  
  

##  Usage

  

Once the server is running, you can use any HTTP client (e.g., Postman) to interact with the API endpoints.

  

##  Example Requests

  

- GET all blogs:

```
GET http://localhost:3000/api/blog
```
- POST a new blog:
```bash
POST http://localhost:3000/api/blog/post

Body:

{
"title": "New Blog Title",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}
```

  

- PUT (update) a blog with ID 123:
```bash
PUT http://localhost:3000/api/blog/123
Body:

{
"title": "Updated Blog Title",
"description": "Updated description."
}
```

  

- DELETE a blog with ID 123:

  

```bash
Send a DELETE request to http://localhost:<port>/api/blog/:id with the ID of the blog to delete in the URL.
```
