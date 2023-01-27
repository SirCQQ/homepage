import Link from 'next/link';

export const NavLink = ({ icon, href, text }) => {
  return (
    <li className="flex m-1 hover:bg-red">
      {icon}
      <Link href={href} className="mx-1">
        {text}
      </Link>
    </li>
  );
};
