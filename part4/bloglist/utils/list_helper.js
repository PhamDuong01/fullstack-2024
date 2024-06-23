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

export default { totalLikes, favoriteBlog };
