import images from "./images";

// Generate random data for n number of posts
export const generateRandomPosts = (n) => {
  const photos = [images.img1, images.img2, images.img3, images.img4];
  const posts = [];

  for (let i = 0; i < n; i++) {
    const randomLikes = Math.floor(Math.random() * 100);
    const randomComments = Math.floor(Math.random() * 100);
    const randomImageIndex = Math.floor(Math.random() * photos.length);

    const post = {
      likes: randomLikes,
      comments: randomComments,
      imageURL: photos[randomImageIndex],
    };

    posts.push(post);
  }

  return posts;
};
