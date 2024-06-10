import { Link } from "../common/Link";
import { Button } from "../common/Button";

//TODO: conditionally render Upgrade or Upgraded
//TODO: conditionally render login/register or user settings dropdown

export const PrimaryNavBar = () => {
  return (
    <section className="w-screen bg-primary px-7 py-3 font-header font-bold text-white opacity-95 shadow-md">
      <ul className="flex items-center">
        <li>
          <img
            alt=""
            src="/assets/icons/website-icons/website-icon.png"
            className="w-8"
          ></img>
        </li>
        <li className="ml-1 mr-7 text-3xl">CulinaryCrafts</li>
        <li>
          <Button
            bgColor="bg-white"
            hoverTextColor="hover:text-white"
            borderColor="border-white"
            onClick={() => console.log("Button")}
          />
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
