import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-300 w-full h-full">
        <nav className="flex flex-col md:flex-row justify-between items-center p-4 space-y-4 md:space-y-0">
          {/* Logo and Home Link */}
          <div className="flex items-center text-black font-bold text-2xl md:text-3xl space-x-3 md:space-x-0">
            <p className="mr-2">Cartoon</p>
            <p className="hidden md:block">|</p>
            <NavLink to="/" className="text-lg md:text-xl">Home</NavLink>
          </div>

          {/* Icon Links */}
          <div className="flex justify-center space-x-4">
            <NavLink to="/doraemon">
              <img
                className="border-2 border-black h-12 md:h-10 rounded-xl transition duration-200 hover:scale-105"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6NqyGxfwP5S0uNoVsD5QxcaQeKjSROvQ1T4nTcuMOfgdgfiyT2_SGPBHY0hEPIukF24&usqp=CAU"
                alt="Doraemon"
              />
            </NavLink>
            <NavLink to="/Ben_10">
              <img
                className="border-2 border-black h-12 md:h-10 rounded-xl transition duration-200 hover:scale-105"
                src="https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdj1ixrriGfd4u8oT5a-_3fBIDlhQhtOTKkE2_dJ4XsSi8cO8D9NCLe1jPctW-6C5_El3JQLMAA-Q2xHMkQG00fJDSXgD7ykhVvrz6NluGTp.png?r=af2"
                alt="Ben 10"
              />
            </NavLink>
            <NavLink to="/Naruto">
              <img
                className="border-2 border-black h-12 md:h-10 rounded-xl transition duration-200 hover:scale-105"
                src="https://e7.pngegg.com/pngimages/807/861/png-clipart-naruto-logo-naruto-logo-comics-and-fantasy-naruto-thumbnail.png"
                alt="Naruto"
              />
            </NavLink>
            <NavLink to="/Tom_Jerry">
              <img
                className="border-2 border-black h-12 md:h-10 rounded-xl transition duration-200 hover:scale-105"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbBiIH8BMf0EpGN1Ez-3LzUbntkOhyNTxCw&s"
                alt="Tom & Jerry"
              />
            </NavLink>
          </div>

          {/* User Links */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5">
            <h3 className="font-bold text-lg">User</h3>
            <NavLink to="/registration">
              <p className="hover:underline">Registration</p>
            </NavLink>
            <NavLink to="/login">
              <p className="hover:underline">Login</p>
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
