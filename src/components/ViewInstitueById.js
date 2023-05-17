import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function InstituteById() {
  const params = useParams();
  const [Name, setName] = useState("");
  


  console.log("params", params.id);

  useEffect(() => {
    const fetchInstitute = async () => {
      const response = await axios
        .get(
          `http://65.2.30.68:8000/getInstituteById?institute_id=${params.id}`
        )
        .then((res) => {
          console.log("res", res);
          setName(res.data.data.InstituteName);
          console.log("Name", Name);
        });
    };
    fetchInstitute();
  }, []);


  return (
    <div className="flex flex-col justify-center p-10  items-center">
      <div class="font-bold text-3xl mb-2">{Name}</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
      <button className="flex w-full justify-center rounded-md bg-indigo-600 px-5 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <a href="/principal-creation">
        Create Principal
        </a>
      </button>
    </div>
  );
}
