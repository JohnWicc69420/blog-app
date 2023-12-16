const BASE_URL = "https://main--blog-app64209.netlify.app";
const LOCAL_HOST = "http://localhost:3000";
const getData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/blogs`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Could Not Fetch Blogs: ", error);
  }
};

const blogs = async () => {
  try {
    const { blogs } = await getData();
    return blogs;
  } catch (error) {
    console.log("Could not fetch data: ", error);
  }
};

export default blogs;
