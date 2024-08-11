import React from "react";
import { useEffect, useState } from "react";
// import Pagination from "../../components/pagination/Pagination";
// import LimitRange from "../../components/LimitRange";
// import { Link } from "react-router-dom";

import "../task/Task.scss";

// const BASE_URL = "http://localhost:3001";
let totalPage;
let pageNo;

const Tasks = () => {
  // const [tasks, setTasks] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [results, setResults] = useState(0);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(0);

  // useEffect(function(){
  //     async function fetchTasks(){
  //       try {
  //         setIsLoading(true);
  //         const response = await fetch(`${BASE_URL}/tasks`);
  //         if (!response.ok) throw new Error('Something went wrong with Fetching Tasks');
  //         const data = await response.json();
  //         setResults(data?.length);
  //         totalPage = Math.ceil(data?.length / limit);
  //         if(page <= totalPage) pageNo = page;
  //         else{
  //           setPage(totalPage);
  //           pageNo = page;
  //         }
  //       let display = [];
  //       for(let i = (page - 1) * limit; i < (page *limit) && staged[i]; i++){
  //         display.push(staged[i]);
  //         if((i + 1).toString().endsWith(0)) setLast(i+1);
  //         if((i + 1).toString().endsWith(1)){
  //           setFirst(i+1);
  //         }
  //       }

  //       setTasks(display);
  //       } catch (error) {
  //         alert('There was an error loading data...');
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }
  //     fetchTasks();
  //   });

  return (
    <section className="task">
      <div className="container">
        <div className="column">
          <div className="headText">
            <h1>Task List</h1>
            <button>Add New Task</button>
          </div>
          {/* {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <> */}
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th className="subject">Task Subject</th>
                  <th className="task_type">Task Type</th>
                  <th className="due">Due Date/Time</th>
                  <th className="note">Note</th>
                  <th className="status">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* {tasks?.map((task) => ( */}
                <tr>
                  <td>Subject Name</td>
                  <td>Agreement Tune-Up</td>
                  <td className="bg">2/22/22</td>
                  <td>any note</td>
                  <td className="bg">Open</td>
                </tr>
                {/* ))} */}
              </tbody>
            </table>
          </div>
          {/* </>
          )} */}
        </div>
        <hr />
        {/* <div className="pagination">
          <div className="pagination_details">
            <p>
              Showing <b>{first}</b> to <b>{last}</b> of <b>{results}</b> result
            </p>
          </div>
          <div className="pagination_movements">
            <LimitRange onLimitChange={setLimit} limit={limit} />
            <Pagination
              page={pageNo}
              limit={limit}
              totalPage={totalPage}
              siblings={1}
              onPageChange={handlePageChange}
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Tasks;
