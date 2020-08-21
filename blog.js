// target all of the blog posts
const blogPosts = document.getElementsByClassName("blog-post");
// convert blogPosts HTMLCollection to an Array
const blogPostsArr = Array.from(blogPosts);
// // for each blog post:
blogPostsArr.forEach((blogPost) => {
  const content = blogPost.children[1];
  blogPost.addEventListener("click", (event) => {
    content.classList.toggle("hidden");
    console.log("added");
  });
});

// for (let i = 0; i < blogPostsArr.length; i++) {
//   const blogPost = blogPostsArr[i];
//   const content = blogPost.children[1];
//   console.log(content);
//   blogPost.addEventListener("click", () => {
//     content.classList.toggle("hidden");
//     console.log("clicked");
//   });
// }
// add event listener to the blog-post
// on click, it'll toggle a class on the relevant blog-content div
