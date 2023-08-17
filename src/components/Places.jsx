import React from "react";

const Places = ({ places }) => {
  if (!Array.isArray(places)) {
    return <div>No places to display.</div>;
  }

  return (
    <div>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Places;
