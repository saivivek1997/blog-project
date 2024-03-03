import React from "react";
import "./Post.css"; // Import the CSS file
import { getFormattedDate } from "../utils/helpers";
import { Col } from "react-bootstrap";

const Post = ({
  title,
  description,
  content_html,
  photo_url,
  created_at,
  content_text,
}) => {
  return (
    <Col sm={12} md={6} xl={4} xxl={3}>
      <div className="post">
        <img src={photo_url} alt={title} className="post-image" />
        <div className="post-content">
          <h1>{title}</h1>
          <p>{description.slice(0, 24)}</p>
          <h3>{getFormattedDate(created_at)}</h3>
          <p>{content_text.slice(0, 300)}</p>
          {/* Render HTML content safely */}
          {/* <div dangerouslySetInnerHTML={{ __html: content_html }} /> */}
        </div>
      </div>
    </Col>
  );
};

export default Post;
