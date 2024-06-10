import { Link } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import cart from "../../../assets/icon/cart.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to={""}>Home</Link>
      </li>
      <li>
        <Link to={""}>Contact Us</Link>
      </li>
      <li>
        <Link to={""}>Dashboard</Link>
      </li>
      <li>
        <Link to={""}>our menu</Link>
      </li>
      <li>
        <Link to={""}>Our shop</Link>
      </li>
      <li>
        <Link to={""}>
          <div>
            <img className="w-10" src={cart} alt="" />
          </div>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="md:fixed  w-screen bg-white md:bg-black md:bg-opacity-50 md:text-white z-10 mx-auto">
        <Container>
          {" "}
          <div className="">
            <div className="navbar  font-inter">
              <div className="navbar-start">
                <div className="dropdown ">
                  {/* Drop down */}
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost  lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content text-black uppercase  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box "
                  >
                    {navLinks}
                    <div className="lg:hidden flex">
                      <button className="btn ">Button</button>
                    </div>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-cinzel">MASCARA SIZZLE</p>
                  <p className="text-2xl tracking-[9.12px] font-cinzel">
                    Restaurant
                  </p>
                </div>
              </div>

              <div className="navbar-center hidden lg:flex align-middle">
                <ul className="menu menu-horizontal uppercase ">{navLinks}</ul>
              </div>
              <div className=" hidden lg:flex">
                <button className="btn  ">SIGN OUT</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
