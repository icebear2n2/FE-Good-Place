import { Routes, Route } from "react-router-dom";
import Template from "../template/Template";
import Place from "../components/Place";
import Places from "../components/Places";
import { useState } from "react";

const MyRoutes = () => {
  const [myPlaces, setMyPlaces] = useState([]); // Initialize as an empty array

  return (
    <Routes>
      <Route element={<Template />}>
        <Route
          path="/"
          element={<Place places={myPlaces} setMyPlaces={setMyPlaces} />}
        />
        <Route path="/place" element={<Places places={myPlaces} />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
