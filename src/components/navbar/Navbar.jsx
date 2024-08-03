import Login from "./Login";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white px-24 py-3 lg:py-5 border-b border-cyan-200 z-50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="relative">
          <div className="absolute rounded-full w-16 h-16 bg-cyan-300 z-[-1] -left-6 -top-2.5"></div>
          <h1 className="text-[#6c63ff] text-4xl font-bold">ERPInova</h1>
        </div>

        <div className="flex items-center gap-4">
          <ul className="flex gap-2 text-base">
            <li>
              <a
                href="#about"
                className="font-semibold hover:text-white hover:bg-cyan-400 hover:rounded-md p-2"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="font-semibold hover:text-white hover:bg-cyan-400 hover:rounded-md p-2"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-semibold hover:text-white hover:bg-cyan-400 hover:rounded-md p-2"
              >
                Contact
              </a>
            </li>
          </ul>

          <Login />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
