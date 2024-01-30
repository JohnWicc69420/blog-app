"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/features/postsSlice";

export default function Post() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    img: null,
  });

  const [message, setMessage] = useState("");
  const [blogIdCounter, setBlogIdCounter] = useState(1);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "img" ? files[0] : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addPost({ ...formData, id: blogIdCounter }));

    setBlogIdCounter(blogIdCounter + 1);

    setFormData({
      title: "",
      desc: "",
      img: null,
    });

    setMessage("Blog published, check it out in My Blogs!");

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <>
      <div
        className="flex screenSize flex-col pt-8 
      dark:text-[#ddd] bg-[#fff] dark:bg-[#0f172a] px-4 md:px-20 xl:px-40 2xl:px-60 items-center"
      >
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-6 w-full"
        >
          <input
            className=" dark:bg-[#0f172a] text-4xl font-medium h-full outline-none"
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
          />

          <label
            htmlFor="img"
            className="bg-blue-500 hover:bg-blue-700 text-[#eee] w-[150px] justify-center font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer"
          >
            Add Image
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={handleInputChange}
              className="hidden"
            />
          </label>

          <textarea
            className=" dark:bg-[#0f172a] p-3 h-full text-2xl outline-none"
            id="desc"
            name="desc"
            value={formData.desc}
            placeholder="Description"
            onChange={handleInputChange}
          ></textarea>

          <button
            type="submit"
            className=" bg-[#33762D] px-5 py-3 rounded-full text-[#fff] font-semibold text-2xl"
          >
            Publish
          </button>
        </form>
        {message && (
          <div
            className={`${
              message ? "alert" : ""
            } text-center mt-8 text-[#fff] py-2 px-6 transition-opacity
             rounded-full dark:bg-gray-100/[0.3] bg-gray-400/[0.9] w-fit`}
          >
            {message}
          </div>
        )}
      </div>
    </>
  );
}
