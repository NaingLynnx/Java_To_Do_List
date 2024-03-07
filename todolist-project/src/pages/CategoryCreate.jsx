import axios from "axios";
import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";

const CategoryCreate = () => {
  const Navigate=useNavigate();
  const [inputData,setInputData]=useState(
    {
      name:"",
      image:"",
    }
  );
  const categoryInputHandler =(e) =>{
    const categoryName=e.target.value;
    setInputData(
      {
        ...inputData,
        name:categoryName,
      }
    )
    console.log(inputData.name)
  }
  const imageInputHandler =(e) =>{
    const categoryImage=e.target.value;
    setInputData(
      {
        ...inputData,
        image:categoryImage,
      }
    )
    console.log(inputData.image)
  }


  const addHandler = (e) => {
    e.preventDefault();
    console.log(e);
  if(!inputData.image || !inputData.name){
    alert("Please fill out all required fields")
  }
  const apiUrl='http://localhost:8080/categories'
  
  axios.post(apiUrl,{name: inputData.name,imageUrl:inputData.image})
  .then((value)=>console.log(value))
  Navigate('/')
  
  };

  const backHandler = () => {
    Navigate("/");
  };
  return (
    <>
      <form className="m-auto w-80 mt-12" onSubmit={addHandler}>
      <div>
        <IoArrowBackOutline onClick={backHandler} />
        <h2 className="text-3xl">Add Category</h2>
      </div>
        <div>
          <label className="text-lg font-medium">Name</label>
          <div className="mt-2">
            <input
              className="bg-gray-100 w-80 h-12 rounded-lg mb-2 p-2"
              type="text"
              placeholder="Enter your name"
              required
              onChange={categoryInputHandler}
             
            />
          </div>
        </div>
        <div>
          <label className="text-lg font-medium">ImageUrl</label>
          <div className="mt-2">
            <input
              className="bg-gray-100 w-80 h-12 rounded-lg mb-7 p-2"
              name="imageUrl"
              id="imageUrl"
              type="text"
              placeholder="Enter your imageUrl"
              required
              onChange={imageInputHandler}
            />
          </div>
        </div>
        <button className="bg-violet-500 w-80 h-11 rounded-md" type="submit">
          Create Category
        </button>
      </form>
    </>
  );
};

export default CategoryCreate;
