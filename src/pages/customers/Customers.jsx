import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./Customers.scss";
import Pagination from "../../components/pagination/Pagination";
import { PaginationRange } from "../../components/pagination/PaginationRange";
import LimitRange from "../../components/LimitRange";
import { Link } from "react-router-dom";

// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://fakestoreapi.com/users";
let totalPage;
let pageNo;

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

    function handlePageChange(value){
      if(value === "&laquo;" || value === "... "){
        setPage(1);
      } else if(value === "&lsaquo;"){
        if(page !== 1) setPage(page -1);
      } else if(value === "&raquo;" || value === " ..."){
        setPage(totalPage);
      } else if(value === "&rsaquo;"){
        if(page !== totalPage) setPage(page + 1)
      } else {
        setPage(value);
      }
    }
  

    useEffect(function(){
      async function fetchCustomers(){

        try {
          setIsLoading(true);
          const response = await fetch(`${BASE_URL}`);
          if (!response.ok) throw new Error('Something went wrong with Fetching Customers');
          const data = await response.json();
          console.log(data);
          
          setResults(data?.length);
          totalPage = Math.ceil(data?.length / limit);
          if(page <= totalPage) pageNo = page;
          else{
            setPage(totalPage);
            pageNo = page;
          }
          let searched = search.trim().length > 0 ? data.slice().filter((customers) => customers.name.trim().toLowerCase().replaceAll(" ", "").includes(search.trim().toLowerCase().replaceAll(" ", ""))) : data.slice();
          
          let sorted = sort === "From A to Z" ? searched.slice().sort((a, b) => a.name.localeCompare(b.name))
          : sort === "From Z to A" ? searched.slice().sort((a, b) => b.name.localeCompare(a.name))
          : sort === "From Expensive to Cheap" ? searched.slice().sort((a, b) => b.price - a.price)
          : sort === "From Cheap to Expensive" ? searched.slice().sort((a, b) => a.price - b.price)
          : searched.slice();
          
          let staged = stages === "Lead" ? sorted.slice().filter((customers) => customers.stages == "Lead")
          : stages === "Contacted" ? sorted.slice().filter((customers) => customers.stages == "Contacted")
          : stages === "Qualified" ? sorted.slice().filter((customers) => customers.stages == "Qualified")
          : stages === "Postponed" ? sorted.slice().filter((customers) => customers.stages == "Postponed")
          : stages === "Won" ? sorted.slice().filter((customers) => customers.stages == "Won")
          : stages === "Lost" ? sorted.slice().filter((customers) => customers.stages == "Lost")
                    : sorted.slice();

        let display = [];
        for(let i = (page - 1) * limit; i < (page *limit) && staged[i]; i++){
          display.push(staged[i]);
          if((i + 1).toString().endsWith(0)) setLast(i+1);
          if((i + 1).toString().endsWith(1)){
            setFirst(i+1);
          } 
        } 

        setCustomers(display);
        } catch (error) {
          alert('There was an error loading data...');
          // alert(error.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchCustomers();
    }, [search, sort, stages, page, limit]);


  return (
    <div className="customers">
      <header>
        <h1>Customers</h1>
        <Link to='/newCustomer'><button>+ New Customer</button></Link>
      </header>
      <hr />
      <div className="filtering">
        <form>
          <div className="sort_search">
          <select name="sort" id="sort" onChange={(e) => setSort(e.target.value)}>
            <option>Sort by</option>
            <option >From A to Z</option>
            <option >From Z to A</option>
            <option >From Cheap to Expensive</option>
            <option >From Expensive to Cheap</option>
          </select>
          <div className="search_item">
            <input type="text" placeholder="Search by Name" className="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className="search_icon"><CiSearch className="react-icons" /></div>
          </div>
          </div>

          <select name="stages" id="stages" onChange={(e) => setStages(e.target.value)}>
            <option>Stages</option>
            <option>Lead</option>
            <option>Contacted</option>
            <option>Qualified</option>
            <option>Postponed</option>
            <option >Won</option>
            <option >Lost</option>
          </select>
        </form>
      </div>





{isLoading ? <h1>Loading...</h1> : (
  <>
        <main>
  <table className="customers_table">
          <thead>
            <tr>
              <th className="customer_id">ID</th>
              <th className="name">Name</th>
              <th className="stages">Stages</th>
              <th className="phone_number">Phone Number</th>
              <th className="email">Email</th>
              <th className="status">Status</th>
              <th className="gender">Gender</th>
              <th className="products">Password</th>
              <th className="price">Price</th>
            </tr>
          </thead>
          <tbody>
            {customers?.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name.firstname}</td>
                <td><div className="stages_item"><span 
                style={customer.address.street === "Lead" ? {backgroundColor: "#fef3c7", color: "#ba8252", borderColor: "#ba8252"} 
                : customer.address.street === "Contacted" ? {backgroundColor: "#f3f4f6", color: "#4c535f", borderColor: "#4c535f"}
                : customer.address.street === "Qualified" ? {backgroundColor: "#dbeafe", color: "#415fbd", borderColor: "#415fbd"}
                : customer.address.street === "Postponed" ? {backgroundColor: "#fce7f3", color: "#bc5b83", borderColor: "#bc5b83"}
                : customer.address.street === "Won" ? {backgroundColor: "#d1fae5", color: "#589d86", borderColor: "#589d86"}
                : customer.address.street === "Lost" ? {backgroundColor: "#fee1e1", color: "#b85858", borderColor: "#b85858"} : null}
                >{customer.address.street}</span></div></td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td className="status_item"><span style={customer.address.city === "student" ? {backgroundColor: "#f87171"} : {backgroundColor: "#22d3ee"}}></span>{customer.address.city}</td>
                <td>{customer.name.lastname}</td>
                <td>{customer.password}</td>
                <td>{customer.address.geolocation.long}</td>
              </tr>
            ))} 
          </tbody>
        </table>
      </main>
      <hr />
      <div className="pagination">
        <div className="pagination_details"><p>Showing <b>{first}</b> to <b>{last}</b> of <b>{results}</b> result</p></div>
        <div className="pagination_movements">
        <LimitRange onLimitChange={setLimit} limit={limit} />
        <Pagination page={pageNo} limit={limit} totalPage={totalPage} siblings={1} onPageChange={handlePageChange} />
        </div>
      </div></>
)}
    </div>
  );
}

export default Customers;