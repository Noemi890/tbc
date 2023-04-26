const NavBar = () => {
  return (
    <div className="navbar p-0 bg-base-100 sticky top-0 z-10 drop-shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#">Intro</a>
            </li>
            <li tabIndex={0}>
              <a href="#" className="justify-between">
                Projects
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Cohort Manager 2.0</a>
                </li>
                <li>
                  <a>RolePlay</a>
                </li>
                <li>
                  <a>PlayNation</a>
                </li>
                <li>
                  <a>Chat-App</a>
                </li>
                <li>
                  <a>OrderDash</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contacts</a>
            </li>
          </ul>
        </div>
        <a
          className="btn btn-ghost normal-case text-xl"
          href="https://www.linkedin.com/in/noemi-caggiano-19b924a4/"
          rel="noreferrer"
          target="_blank"
        >
          Noemi's Portfolio
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Intro</a>
          </li>
          <li tabIndex={0}>
            <a>
              Projects
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Cohort Manager 2.0</a>
              </li>
              <li>
                <a>RolePlay</a>
              </li>
              <li>
                <a>PlayNation</a>
              </li>
              <li>
                <a>Chat-App</a>
              </li>
              <li>
                <a>OrderDash</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Contacts</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
        <input type="checkbox" className="toggle"/>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
