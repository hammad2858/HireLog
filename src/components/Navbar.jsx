import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="glass-nav sticky top-0 z-50 px-6 py-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-3 group">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <span className="text-white font-bold text-lg">H</span>
        </div>
        <span className="text-2xl font-bold gradient-text">HireLog</span>
      </Link>
      
      <div className="flex items-center space-x-4">
        <Link 
          to="/" 
          className="text-white hover:text-purple-200 transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-white/10"
        >
          Dashboard
        </Link>
        <Link 
          to="/add" 
          className="btn-primary flex items-center space-x-2"
        >
          <span className="text-lg">+</span>
          <span>Add Job</span>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
