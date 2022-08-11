export const NavLink = ({ icon, href, text }) => {
  return (
    <li className='flex m-1 hover:bg-red'>
      {icon}
      <a href={href} className='mx-1'>
        {text}
      </a>
    </li>
  );
};
