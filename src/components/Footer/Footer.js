import { BiCopyright } from 'react-icons/bi';

import './footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>COPYRIGHT</p>
      <BiCopyright className='footer-icon' />
      <p>2022</p>
    </div>
  );
};

export default Footer;
