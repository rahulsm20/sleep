const Navbar = () => {
  return (
    <div className="navbar sticky top-0 left-0 z-10 gap-5 h-20 p-5">
      <a className="text-white hover:text-blue-400" href='/'>
        <h4 className="text-l">Home</h4>
      </a>
      <a className="text-white hover:text-blue-400" href='/'>
        <h4 className="text-l">Dashboard</h4>
      </a>
    </div>
  );
};

export default Navbar;
