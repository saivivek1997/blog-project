import React, { useState, useEffect } from "react";
import "./Blog.css";
import useFetch from "../hooks/useFetch";
import { toast } from "react-toastify";
import { Row } from "react-bootstrap";
import Error from "./Error";
import Post from "./Post";

const URL = "https://api.slingacademy.com/v1/sample-data/blog-posts?";
const Blog = () => {
  const [page, setPage] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false); // New state to track loading more data

  const {
    data: blogPostsData,
    isLoading,
    error,
  } = useFetch(`${URL}&offset=${page}&limit=10`, page);

  async function handleScroll() {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >
          document.documentElement.scrollHeight &&
        !isLoading &&
        !isLoadingMore // Check if data is not currently loading and not already loading more
      ) {
        setIsLoadingMore(true); // Set isLoadingMore to true to prevent multiple calls while waiting for the new data
        setPage((prevPage) => prevPage + 10);
        toast.success("Loading More data...", {
          autoClose: 900, // Set autoClose to 2000 milliseconds (2 seconds)
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, isLoadingMore]);

  useEffect(() => {
    // Reset isLoadingMore state when data loading completes
    if (!isLoading) {
      setIsLoadingMore(false);
    }
  }, [isLoading]); // Added isLoading to the dependencies to ensure useEffect is re-run when isLoading changes

  return (
    <div className="blog-container">
      {isLoading && <h1>Loading...</h1>}
      {/* {error && <Error error={error} />} */}
      <Row>
        {blogPostsData?.map((post, index) => (
          <Post {...post} key={post.id} />
        ))}
      </Row>
      {isLoadingMore && <p>Loading more data...</p>}
    </div>
  );
};

export default Blog;
