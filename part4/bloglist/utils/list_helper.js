export const totalLikes = (blogs) => {
    if (blogs.length === 0) return 0;
    if (blogs.length === 1) return blogs[0].likes;
    return blogs.reduce((cur, val) => {
        return (cur += val.likes);
    }, 0);
};

export default { totalLikes };
