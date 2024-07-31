import { PaginationRange } from "./PaginationRange";
import "./Pagination.scss"

function Pagination({totalPage, page, limit, siblings, onPageChange}) {
    let array = PaginationRange(totalPage, page, limit, siblings);
    
    return (
        <ul className="pagination_ul">
            <li className="pagination-item" onClick={()=> onPageChange("&laquo;")} ><span className="pagination-link">&laquo;</span></li>
            <li className="pagination-item" onClick={()=> onPageChange("&lsaquo;")}><span  className="pagination-link">&lsaquo;</span></li>
            {array.map(value => value === page ? (<li key={Math.random()} className="pagination-item active" onClick={()=> onPageChange(value)}><span  className="pagination-link">{value}</span></li>)
            :  (<li key={Math.random()} className="pagination-item" onClick={()=> onPageChange(value)}><span className="pagination-link">{value}</span></li>)
        )}
            <li className="pagination-item" onClick={()=> onPageChange("&rsaquo;")}><span  className="pagination-link">&rsaquo;</span></li>
            <li className="pagination-item" onClick={()=> onPageChange("&raquo;")}><span  className="pagination-link">&raquo;</span></li>
        </ul>
    )
}

export default Pagination