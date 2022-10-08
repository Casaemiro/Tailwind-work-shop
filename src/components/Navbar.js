const Navbar = () => {
    return ( 
        <div className="flex p-5">
            <div className="flex-none flex items-center">
                <div className=''>
                    dribbble
                </div>
                
            </div>
            <div className="flex flex-auto md:gap-8 sm:gap-1 items-center md:text-sm sm:text-xs pl-5">
                <a href='/' className="">Inspiration</a>
                <a href='/' className="">Find Work</a>
                <a href='/' className="">Learn Design</a>
                <a href='/' className="">Go pro</a>
                <a href='/' className="">Design file</a>
                <a href='/' className="">Hire Designer</a>
            </div>
            <div>
                <span className="mx-4">Sign in</span>
                <button className="text-white px-3 py-2 bg-pink-600 rounded-md">Share my work</button>
            </div>
        </div>
     );
}
 
export default Navbar;