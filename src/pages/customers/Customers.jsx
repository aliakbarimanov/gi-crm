import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./Customers.scss";
import Pagination from "../../components/pagination/Pagination";
import { PaginationRange } from "../../components/pagination/PaginationRange";
import LimitRange from "../../components/LimitRange";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:8085/edupo";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [stages, setStages] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [results, setResults] = useState(0);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(0);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/api/v1/customers`);
        if (!response.ok) throw new Error("Something went wrong with Fetching Customers");
        
        const data = await response.json();
        setResults(data.length);
        
        const filteredData = applyFilters(data);
        const displayedCustomers = paginateData(filteredData);
        
        setCustomers(displayedCustomers);
      } catch (error) {
        console.log("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCustomers();
  }, [search, sort, stages, page, limit]);

  const applyFilters = (data) => {
    const searched = search.trim()
      ? data.filter(customer => customer.name.toLowerCase().includes(search.toLowerCase()))
      : data;

    const sorted = sortData(searched);
    return filterByStage(sorted);
  };

  const sortData = (data) => {
    switch (sort) {
      case "From A to Z":
        return data.sort((a, b) => a.name.localeCompare(b.name));
      case "From Z to A":
        return data.sort((a, b) => b.name.localeCompare(a.name));
      case "From Cheap to Expensive":
        return data.sort((a, b) => a.price - b.price);
      case "From Expensive to Cheap":
        return data.sort((a, b) => b.price - a.price);
      default:
        return data;
    }
  };

  const filterByStage = (data) => {
    if (!stages) return data;
    return data.filter(customer => customer.stage === stages);
  };

  const paginateData = (data) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    setFirst(startIndex + 1);
    setLast(endIndex > results ? results : endIndex);
    return data.slice(startIndex, endIndex);
  };

  const handlePageChange = (value) => {
    setPage(prevPage => {
      if (value === "&laquo;" || value === "... ") return 1;
      if (value === "&lsaquo;") return Math.max(prevPage - 1, 1);
      if (value === "&raquo;" || value === " ...") return Math.ceil(results / limit);
      return value;
    });
  };

  return (
    <div className="customers">
      <header>
        <h1>Customers</h1>
        <Link to="/newCustomer">
          <button>+ New Customer</button>
        </Link>
      </header>
      <hr />
      <div className="filtering">
        <form>
          <div className="sort_search">
            <select name="sort" id="sort" onChange={(e) => setSort(e.target.value)}>
              <option>Sort by</option>
              <option>From A to Z</option>
              <option>From Z to A</option>
              <option>From Cheap to Expensive</option>
              <option>From Expensive to Cheap</option>
            </select>
            <div className="search_item">
              <input
                type="text"
                placeholder="Search by Name"
                className="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="search_icon">
                <CiSearch className="react-icons" />
              </div>
            </div>
          </div>
          <select name="stages" id="stages" onChange={(e) => setStages(e.target.value)}>
            <option>Stages</option>
            <option>Lead</option>
            <option>Contacted</option>
            <option>Qualified</option>
            <option>Postponed</option>
            <option>Won</option>
            <option>Lost</option>
          </select>
        </form>
      </div>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <main>
            <table className="customers_table">
              <thead>
                <tr>
                  <th className="customer_id">No:</th>
                  <th className="name">Name</th>
                  <th className="stages">Stages</th>
                  <th className="phone_number">Phone Number</th>
                  <th className="email">Email</th>
                  <th className="gender">Gender</th>
                  <th className="status">Status</th>
                  <th className="course">Course</th>
                  <th className="probability">Probability</th>
                  <th className="next_step">Next Step</th>
                  <th className="price">Price</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr key={customer.id}>
                    <td>{index + 1}</td>
                    <td>{customer.name}</td>
                    <td>
                      <div className="stages_item">
                        <span className={`stage ${customer.stage.toLowerCase()}`}>
                          {customer.stage}
                        </span>
                      </div>
                    </td>
                    <td>{customer.mobileNumber}</td>
                    <td>{customer.email}</td>
                    <td className="status_item">
                      <span
                        style={{
                          backgroundColor: customer.gender === "male" ? "#f87171" : "#22d3ee",
                        }}
                      ></span>
                      {customer.gender}
                    </td>
                    <td>{customer.status}</td>
                    <td>{customer.course}</td>
                    <td>{customer.probability}</td>
                    <td>{customer.nextStep}</td>
                    <td>{customer.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
          <hr />
          <div className="pagination">
            <div className="pagination_details">
              <p>
                Showing <b>{first}</b> to <b>{last}</b> of <b>{results}</b> result(s)
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
        </>
      )}
    </div>
  );
}

export default Customers;
