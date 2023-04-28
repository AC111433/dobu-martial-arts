import { Link } from "@remix-run/react";
import NavBar from "./NavBarLink";
type NavbarLinkProps = {
  children: React.ReactNode;
  url: string;
};

const NavBarLink = ({ children, url }: NavbarLinkProps) => {
  return (
    <Link
      to={url}
      className="mt-1 block rounded px-2 py-1 font-semibold text-white hover:bg-slate-800"
    >
      {children}
    </Link>
  );
};
export default NavBarLink;
