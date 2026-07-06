import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
          <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div >
                {/* logo */}
                <h1 className="text-2xl font-bold curser-pointer">Placement Portal</h1>
            </div>
            <ul className="flex gap-8 font-medium">
                <Link to="/" className="cursor-pointern hover:text-yellow-300 transition">Home</Link>
                <Link to="/companies" className="cursor-pointern hover:text-yellow-300 transition">Companies</Link>
                <Link to="/student" className="cursor-pointern hover:text-yellow-300 transition">Students</Link>
                <Link to="/about" className="cursor-pointern hover:text-yellow-300 transition">About</Link>
                <Link to="/contact" className="cursor-pointern hover:text-yellow-300 transition">Contact</Link>
            </ul>
            <div className="flex gap-4">
                <Link to='/login'><button className="px-4 py-2 border border-white rounded-lg hover:text-yellow-600 transition">Login</button></Link>
                <button className="px-4 py-2 border border-white rounded-lg hover:text-yellow-600 transition">Register</button>
            </div>
            </div>
          </nav>
        </>
    )
}

export default Navbar;