function LimitRange({onLimitChange, limit}) {
    return (
        <select onChange={(e) => onLimitChange(e.target.value)} value={limit} style={{height: "100%", width: "50px", border: "1px solid #cbcdce", outline: "none"}}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
    )
}

export default LimitRange
