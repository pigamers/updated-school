import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function PrincipalCreation() {
    const params = useParams();
    const navigate = useNavigate()

    const [data, setData] = useState({
        email: "",
        name: "",
        profilePhoto: "",
        address: "",
        city: "",
        Additional: "",
        zipCode: "",
        state: "",
        country: "",
        phone: "",
        institutionId: params.id,
        gender: "",
        dob: "",
        eContactName: "",
        eContactNum: "",
        eContactRela: "",
      });

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("data.logo", data.logo);
        axios
          .post("http://65.2.30.68:8000/insertPrincipal", {
            "email": "",
            "name": "",
            "profilePhoto": "",
            "address": "",
            "city": "",
            "Additional": "",
            "zipCode": "",
            "state": "",
            "country": "",
            "phone": "",
            "institutionId": params.id,
            "gender": "",
            "dob": "",
            "eContactName": "",
            "eContactNum": "",
            "eContactRela": "",
          })
          .then((res) => {
            console.log(res);
            // localStorage.setItem("token", res.data.token);
            navigate("/");
          })
          .catch((err) => console.log(err));
      };

    return(
        <div className="flex flex-col justify-center p-10  items-center">
        <h1 class="font-bold text-3xl mt-2">Create Principal </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
            </div>
            <div className="mt-2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* Last Name */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
            </div>
            <div className="mt-2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                onChange={handleInput}
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* Gender */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
            </div>
            <div className=" flex flex-row justify-center space-x-20 mt-2">
              <input
                onChange={handleInput}
                type="radio"
                name="gender"
                value="male"
                className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                onChange={handleInput}
                value="female"
                className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />{" "}
              Female
              <input
                type="radio"
                onChange={handleInput}
                name="gender"
                value="others"
                className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />{" "}
              Others
            </div>
          </div>
          {/* Dob */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date Of Birth
              </label>
            </div>
            <div className="flex justify-center mt-2">
              <input
                type="date"
                onChange={handleInput}
                name="dob"
                value="dob"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                onChange={handleInput}
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* Phone Number */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
            </div>
            <div className="mt-2">
              <input
                id="phone"
                onChange={handleInput}
                name="phone"
                type="tel"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* Address */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={handleInput}
                id="address"
                name="address"
                type="text"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* ID */}

          {/* Year */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="year"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Year
              </label>
            </div>
            <div className="mt-2">
              <input
                id="year"
                onChange={handleInput}
                name="year"
                type="text"
                required
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="userName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
            </div>
            <div className="mt-2">
              <input
                id="userName"
                onChange={handleInput}
                name="userName"
                type="text"
                required
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* Password */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                onChange={handleInput}
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    )
}