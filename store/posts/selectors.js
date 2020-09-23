export const getPostsSelector = (state) => state.posts.posts;
export const getPostById = (postId) => (state) => state.posts.posts.find(post => post._id === postId);
export const getChangeComment = (state) => state.posts.changingComment;
