import express from 'express';
import Blog from '../models/blog.js';

const blogsRouter = express.Router();

blogsRouter.get('/', (request, response, next) => {
    Blog.find({})
        .then((blogs) => {
            response.json(blogs);
        })
        .catch((error) => {
            next(error);
        });
});

blogsRouter.get('/:id', (request, response, next) => {
    Blog.find({ _id: request.params.id })
        .then((blogs) => {
            response.json(blogs);
        })
        .catch((error) => {
            next(error);
        });
});

blogsRouter.post('/', (request, response, next) => {
    const blog = new Blog(request.body);

    blog.save()
        .then((result) => {
            response.status(201).json(result);
        })
        .catch((error) => {
            next(error);
        });
});

blogsRouter.put('/likes/:id', (request, response, next) => {
    const id = request.params.id;
    Blog.findById(id)
        .then((blog) => {
            blog.likes += 1;
            blog.save()
                .then((result) => {
                    response.status(201).json(blog);
                })
                .catch((error) => {
                    next(error);
                });
        })
        .catch((error) => {
            next(error);
        });
});

blogsRouter.put('/content/:id', (request, response, next) => {
    const id = request.params.id;
    Blog.findById(id)
        .then((blog) => {
            blog.save()
                .then((result) => {
                    response.status(201).json(blog);
                })
                .catch((error) => {
                    next(error);
                });
        })
        .catch((error) => {
            next(error);
        });
});

blogsRouter.delete('/:id', (request, response, next) => {
    Blog.findByIdAndDelete({ _id: request.params.id })
        .then((blogs) => {
            response.json(blogs);
        })
        .catch((error) => {
            next(error);
        });
});

export default blogsRouter;
