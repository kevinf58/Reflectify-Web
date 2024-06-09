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
            bgColor="white"
            textColor="black"
            action={<a href="/upgrade">Upgrade</a>}
          />
        </li>
        <li className="ml-auto text-lg">
          <Link
            onClick={() => console.log("iuhywbgsdefw")}
            bgColor="white"
            textColor="primary"
          >
            Login
          </Link>
          {/* |<Link text="Register" /> */}
        </li>
      </ul>
    </section>
  );
};
