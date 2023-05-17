import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";
export default function InstituteView() {
  const [imgUrl, setimgUrl] = useState(null);
  const [institutes, setInstitutes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://65.2.30.68:8000/getAllInstitute"
        );
        setInstitutes(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (institute) => {
    navigate("institute/" + institute.institute_id);
    console.log("Clicked institute:", institute);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-xl text-center my-4">Institutes</h1>
      <div className="flex flex-wrap justify-center">
        {institutes.map((institute) => (
          <div
            key={institute.institute_id}
            className="bg-blue-100 border-2 border-blue-300 m-2 p-4 rounded-md shadow-md w-64 max-w-md cursor-pointer hover:bg-blue-200"
            onClick={() => handleClick(institute)}
          >
            <h2 className="text-md font-bold">{institute.InstituteName}</h2>
            <img
              src={institute.InstituteLogo}
              alt={`Logo of ${institute.InstituteLogo}`}
              className="mb-2"
            />
            <p>
              Created at: {new Date(institute.createdAt).toLocaleDateString()}
            </p>
            <p>
              Updated at: {new Date(institute.updatedAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
