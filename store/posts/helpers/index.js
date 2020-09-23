export const updatePosts = (posts = [], newPost) => {
  if (!posts || posts.length === 0) {
    return [newPost];
  }

  const newPosts = posts.map(post => {
    if (post._id === newPost._id) {
      return newPost;
    }
    return post;
  });

  return newPosts;
};


export const deletePost = (posts = [], id) => posts.filter(post => post._id !== id);


