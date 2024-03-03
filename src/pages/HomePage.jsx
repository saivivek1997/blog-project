import React from "react";
import { useFormData } from "../context/formDataProvider";
import Blog from "../components/Blog";
import Container from "react-bootstrap/Container";
import "./HomePage.css";

function HomePage() {
  const { formData } = useFormData();

  const email =
    formData.email || JSON.parse(localStorage.getItem("userDetails"))?.email
      ? JSON.parse(localStorage.getItem("userDetails")).email
      : null;

  return (
    <div>
      <h1 className="glow">Hiii {email}</h1>
      <Container>
        <Blog />
      </Container>
    </div>
  );
}
export default HomePage;
