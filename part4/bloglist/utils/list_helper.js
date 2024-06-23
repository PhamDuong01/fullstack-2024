export const totalLikes = (blogs) => {
    if (blogs.length === 0) return 0;
    if (blogs.length === 1) return blogs[0].likes;
    return blogs.reduce((cur, val) => {
        return (cur += val.likes);
    }, 0);
};

export const favoriteBlog = (blogs) => {
    const mostLikeBlog = blogs.sort((a, b) => b.likes - a.likes)[0];
    const result = {
        title: mostLikeBlog.title,
        author: mostLikeBlog.author,
        likes: mostLikeBlog.likes,
    };
    return result;
};

export const authorMoreBlog = (blogs) => {
    const refList = {};
    let mostBlogAuthor = { author: '', blogs: 0 };
    blogs.forEach((blog) => {
        if (refList[blog.author]) {
            refList[blog.author].blogs += 1;
        } else {
            let newAuthor = { author: blog.author, blogs: 1 };
            refList[blog.author] = newAuthor;
        }
    });

    for (const author in refList) {
        if (refList[author].blogs > mostBlogAuthor.blogs) {
            mostBlogAuthor = refList[author];
        }
    }

    return mostBlogAuthor;
};

export default { totalLikes, favoriteBlog, authorMoreBlog };
