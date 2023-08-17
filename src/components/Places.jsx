import React, { useState } from "react";

import axios from "axios";

const Places = ({ places }) => {
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (selectedPlace) => {
    const index = selectedPlaces.findIndex(
      (place) => place.id === selectedPlace.id,
    );

    if (index !== -1) {
      setSelectedPlaces(
        selectedPlaces.filter((place) => place.id !== selectedPlace.id),
      );
    } else {
      setSelectedPlaces([...selectedPlaces, selectedPlace]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const selectedPlacesData = JSON.stringify(selectedPlaces);
      const params = new URLSearchParams();
      params.append("selectedPlacesData", selectedPlacesData);

      const response = await axios.post(
        "http://localhost:8080" +
          `/api/v1/client/submit-selected-places?${params.toString()}`,
        {},
        { headers: { "Content-Type": "application/json" } },
      );

      if (response.status === 200) {
        setSuccessMessage("Selected places submitted successfully.");
        console.log(successMessage);
      }
    } catch (error) {
      setErrorMessage("Failed to submit selected places.");
      console.log(errorMessage);
    }
  };

  return (
    <div>
      {/*{successMessage && <div>{successMessage}</div>}*/}
      {/*{errorMessage && <div>{errorMessage}</div>}*/}
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>address_name</th>
              <th>category_group_code</th>
              <th>category_group_name</th>
              <th>category_name</th>
              <th>distance</th>
              <th>id</th>
              <th>place_url</th>
              <th>road_address_name</th>
              <th>x</th>
              <th>y</th>
            </tr>
          </thead>
          <tbody>
            {places.map((place, index) => (
              <tr key={index}>
                <td>{place.address_name}</td>
                <td>{place.category_group_code}</td>
                <td>{place.category_group_name}</td>
                <td>{place.category_name}</td>
                <td>{place.distance}</td>
                <td>{place.id}</td>
                <td>{place.place_url}</td>
                <td>{place.road_address_name}</td>
                <td>{place.x}</td>
                <td>{place.y}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => {
                      handleCheckboxChange(place);
                      console.log(place);
                    }}
                    checked={selectedPlaces.some(
                      (selectedPlace) => selectedPlace.id === place.id,
                    )}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit">Submit Selected Places</button>
      </form>
    </div>
  );
};

export default Places;
