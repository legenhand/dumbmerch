function TableCategory() {
    const categoryList = [{
        name: "Mouse"
    },{
        name: "Keyboard"
    }];
    let count = 0;
    return (
        <div className="container-fluid bg-black p-5" style={{
            height: "88vh"
        }}>
            <table className="table table-dark table-hover table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    categoryList.map((data,index)=>{
                        count += 1;
                        return <tr key={index}>
                            <td>{count}</td>
                            <td>{data.name}</td>
                            <td><button type="button" className="btn btn-success w-25 bg-success me-3 my-2">
                                Edit
                            </button>
                                <button type="button" className="btn btn-danger bg-danger w-25 my-2">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>

            </table>
        </div>
    );
}

export default TableCategory;