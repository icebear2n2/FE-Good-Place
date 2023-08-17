import React, { useState } from "react";
import { Alert, Input, Spinner } from "reactstrap";
import { myAxios } from "../network/api";
import { useNavigate } from "react-router-dom";

const Place = ({ setMyPlaces }) => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const response = await myAxios("/api/v1/client?query=" + query, "GET");
    setStatus(response.status);
    console.log(response.body);

    if (response.status === "success") {
      const placesArray = response.body.documents; // Extract the 'documents' array
      setMyPlaces(placesArray); // Update the parent component's state
      navigate("/place");
    }
  };

  return (
    <>
      {status === "loading" && <Spinner />}
      {status === "success" && <Alert>성공</Alert>}
      {status === "error" && <Alert color="danger">실패</Alert>}
      <form onSubmit={onSubmitHandler}>
        <Input placeholder="name" onChange={(e) => setQuery(e.target.value)} />
        <Input type="submit" />
      </form>
    </>
  );
};

export default Place;
