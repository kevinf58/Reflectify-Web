import { Link } from "../common/Link";

//TODO: conditionally render Upgrade or Upgraded
//TODO: conditionally render login/register or user settings dropdown

export const PrimaryNavBar = () => {
  return (
    <section className="w-screen bg-primary py-3 pr-7 font-bold text-white opacity-95 shadow-lg md:py-2 md:pr-5">
      <ul className="flex items-center">
        <li>
          <img
            alt=""
            src="/assets/icons/website-icon.png"
            className="mx-7 w-9 md:mx-5 md:w-8"
          />
        </li>
        <li className="font-title text-3xl md:text-2xl">
          Reflectify
        </li>
        <li className="ml-auto text-lg">
          <Link
            onClick={() => console.log("login")}
            bgColor="before:bg-white"
            textColor="hover:text-primary"
          >
            Login
          </Link>
          |
          <Link
            onClick={() => console.log("register")}
            bgColor="before:bg-white"
            textColor="hover:text-primary"
          >
            Register
          </Link>
        </li>
      </ul>
    </section>
  );
};
