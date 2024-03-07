import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgMenuLeft } from "react-icons/cg";
import { CiSquarePlus } from "react-icons/ci";
import c1 from "../assets/react.svg";
import { CiSquareCheck } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const Home = () => {
  const [task, setTasks] = useState([]);
  const Navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  
  const apiUrl = "http://localhost:8080/categories";
  useEffect(() => {
      axios
          .get(apiUrl)
          .then((res) => {
            setCategories(res.data)
              console.log("****")
              console.log(res.data)
              
          })
          .catch((error) => console.error.apply(error));
  }, []);

  const newHandler =  (event) => {
    event.preventDefault();
  
    // Perform any form submission logic here
  
    try {
      // Assuming you are updating the tasks after form submission, for example, fetching updated tasks from the server
      const res = axios.get(taskApi);
     const settasks= setTasks(res.data);
      console.log("Updated tasks:", settasks.data);
  
      // After updating the tasks, navigate to the "/TaskCreate" route
      Navigate("/TaskCreate");
    } catch (error) {
      console.error("Error fetching updated tasks:", error);
    }
  };

  const taskApi = "http://localhost:8080/tasks";
  useEffect(() => {
    axios
      .get(taskApi)
      .then((res) => {
        console.log("-----------------", res);
        console.log("................", res.data);
        setTasks(res.data);
      })
      .catch((error) => console.error.apply(error));
  }, []);

  return (
    <>
      <form className="m-5" onSubmit={newHandler}>
        <div className="flex justify-between mb-9">
          <CgMenuLeft size={30} />
          <div className="flex gap-4">
            <CiSearch size={30} />
            <IoIosNotificationsOutline size={30} />
          </div>
        </div>

        <div className="mb-7">
          <h1 className="font-medium text-xl mb-1">Hey there, Vally</h1>
          <p>Organize your plans for the day</p>
        </div>

        <div className="flex align-middle">
          <h2 className="font-medium text-lg mb-5">Categories</h2>
          <Link to="/categoryCreate">
            <CiSquarePlus className="pl-2" size={30} />
          </Link>
        </div>
        <div className="overflow-auto">
          <div className="flex justify-left mb-6">
            {Array.isArray(categories) && categories.map((category) => (
              <div className="pl-3" key={category.id}>
                <div className="bg-gray-300 items-center rounded-xl">
                  <img
                    src={category.imageUrl}
                    alt="category"
                    className="text-center m-auto p-2 w-14  h-1w-14"
                  />
                </div>
                <p className="text-center font-medium">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-5">Today's Tasks</h3>
          {Array.isArray(task) &&
            task.map((taskItem) => (
              <div className="mb-10" key={taskItem.id}>
                <div className="bg-gray-200 w-80 h-20 rounded-xl">
                  <div className="flex gap-3 items-center align-middle p-4">
                    <CiSquareCheck
                      className="text-violet-500 stroke-1"
                      size={30}
                    />
                    <div>
                      <h2 className="font-medium">{taskItem.label}</h2>
                      <p>8am - 9am</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          <button className="bg-violet-500 w-80 h-11 rounded-md" type="submit">
            + Add a new task
          </button>
        </div>
      </form>
    </>
  );
};

export default Home;
