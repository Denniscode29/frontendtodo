import { Link } from "react-router-dom"; 


function Navbar() {
  return (
    <div className="navbar shadow-sm px-60 flex justify-between" style={{ backgroundColor: '#4DA8DA' }}>
      <a className="btn btn-ghost text-xl text-white flex items-center space-x-2">
        <img src="book.jpg" alt="" className="w-8 h-8" /> 
        <span>TODOU</span>
      </a>
      <div className="flex space-x-5 text-white">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/contact">Contact</Link></div>
      </div>
      <div className="flex items-center space-x-6 rtl:space-x-reverse">
        <Link to="/login"><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-
        lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button></Link>
        <Link to="/register"><button type="button" className="text-blue-800 bg-gradient-to-r from-white via-white to-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white-500/50 dark:shadow-lg dark:shadow-white-800/80 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center me-2 mb-2">Register</button></Link>
      </div>

    </div>
  );
}

export default Navbar;
