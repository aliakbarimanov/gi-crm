import React, { useEffect, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import LimitRange from "../../components/LimitRange";
import { Link } from "react-router-dom";
import "../task/Task.scss";

const BASE_URL = "http://localhost:8085/edupo";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [results, setResults] = useState(0);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(0);

  const handlePageChange = (value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/api/v1/task?page=${page - 1}&size=${limit}`);
        if (!response.ok) throw new Error("Something went wrong with fetching tasks");
        
        const data = await response.json();
        setResults(data.totalElements); 
        setTasks(data.content); 

        setFirst((page - 1) * limit + 1);
        setLast(Math.min(page * limit, data.totalElements));
      } catch (error) {
        console.log("There was an error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, [page, limit]);

  return (
    <section className="task">
      <div className="container">
        <div className="column">
          <div className="headText">
            <h1>Task List</h1>
            <Link to="/newTask">
              <button>New Task</button>
            </Link>
          </div>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
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
                  {tasks.map((task) => (
                    <tr key={task.id}>
                      <td>{task.taskSubject}</td>
                      <td>{task.taskType}</td>
                      <td className="bg">{task.dueDate}</td>
                      <td>{task.note}</td>
                      <td className="bg">{task.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <hr />
        <div className="pagination">
          <div className="pagination_details">
            <p>
              Showing <b>{first}</b> to <b>{last}</b> of <b>{results}</b> results
            </p>
          </div>
          <div className="pagination_movements">
            <LimitRange onLimitChange={setLimit} limit={limit} />
            <Pagination
              page={page}
              limit={limit}
              totalPage={Math.ceil(results / limit)}
              siblings={1}
              onPageChange={handlePageChange}
              
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
