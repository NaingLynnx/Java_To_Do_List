import axios from "axios";
import React, { useState,useEffect } from "react";

const TaskCreate = () => {
  const [categoryOption, setCategoryOption] = useState([]);
  
  const [taskData, setTaskData] = useState({
    label: "",
    startDate: "",
    endDate: "",
    repeateType: "",
    category: {
      id: "",
    },
  });

  const taskLabelInputHandler = (e) => {
    const taskLabel=e.target.value;
    setTaskData({
      ...taskData,
      label:taskLabel,
    })

  };
  const taskCategoryInputHandler = (e) => {
    const taskCategory = e.target.value;
    setTaskData({
        ...taskData,
        category: {
            id: taskCategory
        }
    });
};
  const taskEndHandler =(e)=>{
    const inputEndTime=e.target.value;

    setTaskData({
      ...taskData,
      endDate:inputEndTime
    })
  };
  const taskStartHandler =(e)=>{
    const inputStartTime=e.target.value;
    setTaskData({
      ...taskData,
      startDate:inputStartTime
    })
  };
  const repeatHandler=(e)=>{
    const inputRepeat=e.target.value;
    setTaskData({
      ...taskData,
      repeateType:inputRepeat
    })
  };
  // const submitHandler=(e)=>{
  //   e.preventDefault();
  //   if(
  //     !taskData.label ||
  //     !taskData.startDate||
  //     !taskData.endDate||
  //     !taskData.repeateType
  //   )
  //   {
  //     alert("Please fill out all required fields")
  //   }

  //   const apiUrl ="http://localhost:8080/tasks";

  //   axios
  //   .post(apiUrl,{
  //     label:taskData.label,
  //     startDate:taskData.startDate,
  //     endDate:taskData.endDate,
  //     repeateType:taskData.repeateType,
  //     category:{
  //       id:taskData.category.id
  //     }
  //   })
  //   .then(()=>{
  //     window.location.reload();
  //   })
  //   axios.get(apiUrl).then((res) => console.log(res.data));

  // }
  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      !taskData.label ||
      !taskData.startDate ||
      !taskData.endDate ||
      !taskData.repeateType
    ) {
      alert("Please fill out all required fields");
      return;
    }
  
    const apiUrl = "http://localhost:8080/tasks";
  
    try {
      // Make the POST request to create a new task
      await axios.post(apiUrl, {
        label: taskData.label,
        startDate: taskData.startDate,
        endDate: taskData.endDate,
        repeateType: taskData.repeateType,
        category: {
          id: taskData.category.id,
        },
      });
  
      const res = await axios.get(apiUrl);
      updateTasks(res.data); // First call with the updated tasks
      console.log("Updated tasks:", res.data);
  
      // Fetch the updated tasks after the new task is created
    
      updateTasks(res.data);
      console.log("Updated tasks:", res.data);
  
      // Reload the page if needed
      // window.location.reload();
    } catch (error) {
      console.error("Error creating new task:", error);
    }
  };
  const categoryapiUrl = "http://localhost:8080/categories";
  useEffect(() => {
      axios
          .get(categoryapiUrl)
          .then((res) => {
              
              setCategoryOption(res.data);
          })
          .catch((error) => console.error.apply(error));
  }, []);



  return (
    <>
    <form action="" onSubmit={submitHandler}>
      <div className="m-auto w-80 mt-12">
        
          <div>
            <label className="text-lg font-medium">Label</label>
            <div className="mt-2">
              <input
                className="bg-gray-100 w-80 h-12 rounded-lg mb-2 p-2"
                type="text"
                placeholder="Create Instagram post"
                required
                onChange={taskLabelInputHandler}
              />
            </div>
          </div>
          <div>
            <label className="text-lg font-medium">Start Time</label>
            <div className="mt-2">
              <input
                className="bg-gray-100 w-80 h-12 rounded-lg mb-7 p-2"
                type="time"
                onChange={taskStartHandler}
              />
            </div>
          </div>
          <div>
            <label className="text-lg font-medium">End Time</label>
            <div className="mt-2">
              <input
                className="bg-gray-100 w-80 h-12 rounded-lg mb-7 p-2"
                type="time"
                onChange={taskEndHandler}
              />
            </div>
          </div>
          <div>
                        <label className="block mb-4" htmlFor="">
                            Category
                        </label>
                        <select
                            className="bg-[#F2F2F2] p-3 rounded-lg mb-4 w-full"
                            name="categoryData"
                            id="categoryData"
                            onChange={taskCategoryInputHandler}
                        >
                            {Array.isArray(categoryOption) &&
                                categoryOption.map((option, index) => {
                                    return (
                                        (
                                            <option
                                                key={index}
                                                value={option.id}
                                            >
                                                {option.name}
                                            </option>
                                        )
                                    );
                                })}
                        </select>
                    </div>
          <div>
            <label className="text-lg font-medium">Repeat</label>
            <div className="mt-2">
              <select className="bg-gray-100 w-80 h-12 rounded-lg mb-7 p-2" onChange={repeatHandler}>
                <option value="Everyday">Everyday</option>
                <option value="EveryWeek">EveryWeek</option>
                <option value="EveryMonth">EveryMonth</option>
              </select>
            </div>
          </div>
          <button className="bg-violet-500 w-80 h-11 rounded-md">
            Create Task
          </button>
      
      </div>
      </form>
    </>
  );
};

export default TaskCreate;
