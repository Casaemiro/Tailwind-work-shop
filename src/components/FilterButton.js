const FilterButton = () => {
    return ( 
        <div className='flex justify-between px-3 py-3'>
            <select className="border p-2 bg-white rounded-md">
                <option>Category</option>
                <option>Category</option>
            </select>


            <select className="border p-2 bg-white rounded-md">
                <option>Filter</option>
                <option>Category</option>
            </select>
        </div>
     );
}
 
export default FilterButton;