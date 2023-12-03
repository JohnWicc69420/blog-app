const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blogs");
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
