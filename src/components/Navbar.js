const Navbar = () => {
    return ( 
        <div className="flex p-5">
            <div className="flex-none ">
                dribbble
            </div>
            <div className="flex-auto px-5">
                <a href='/' className="px-5">Inspiration</a>
                <a href='/' className="px-5">Find Work</a>
                <a href='/' className="px-5">Learn Design</a>
                <a href='/' className="px-5">Go pro</a>
                <a href='/' className="px-5">Design files</a>
                <a href='/' className="px-5">Hire Designers</a>
            </div>
            <div>
                <span className="mx-4">Sign in</span>
                <button className="text-white px-3 py-2 bg-pink-600 rounded-md">Share my work</button>
            </div>
        </div>
     );
}
 
export default Navbar;