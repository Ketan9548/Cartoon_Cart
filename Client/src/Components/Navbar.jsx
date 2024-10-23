
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-300 h-14 flex justify-between">
        <div className="text-black flex flex-row font-bold text-3xl ml-3 mt-2">
          <p className="mr-5">Cartoon</p>
          <p>|</p>
          <p className="ml-5">
            <NavLink to="/">Home</NavLink>
          </p>
        </div>
        <div className="flex flex-row mt-2">
          <p className="m-1 hover:m-2">
            <NavLink to="/doraemon">
              {" "}
              <img
                className="border-2 border-black h-8 rounded-xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6NqyGxfwP5S0uNoVsD5QxcaQeKjSROvQ1T4nTcuMOfgdgfiyT2_SGPBHY0hEPIukF24&usqp=CAU"
                alt="doraemon"
              />
            </NavLink>
          </p>
          <p className="m-1 hover:m-2">
            <NavLink to="/Ben_10">
              <img
                className="border-2 border-black h-8 rounded-xl"
                src="https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdj1ixrriGfd4u8oT5a-_3fBIDlhQhtOTKkE2_dJ4XsSi8cO8D9NCLe1jPctW-6C5_El3JQLMAA-Q2xHMkQG00fJDSXgD7ykhVvrz6NluGTp.png?r=af2"
                alt="Ben10"
              />
            </NavLink>
          </p>
          <p className="m-1 hover:m-2">
            <NavLink to="/Naruto">
              <img
                className="border-2 border-black h-8 rounded-xl"
                src="https://e7.pngegg.com/pngimages/807/861/png-clipart-naruto-logo-naruto-logo-comics-and-fantasy-naruto-thumbnail.png"
                alt="Ben10"
              />
            </NavLink>
          </p>
          <p className="m-1 hover:m-2">
            <NavLink to="/Tom_Jerry">
              <img
                className="border-2 border-black h-8 rounded-xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbBiIH8BMf0EpGN1Ez-3LzUbntkOhyNTxCw&s"
                alt="Ben10"
              />
            </NavLink>
          </p>
        </div>
        <div className="flex gap-5">
          <h3 className="font-bold">User</h3>
          <NavLink to="/registration">
            <p className="">Registration</p>
          </NavLink>
          <NavLink to="/login">
            <p>Login</p>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
