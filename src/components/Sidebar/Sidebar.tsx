import { FC } from 'react';
import './Sidebar.scss';

export const Siderbar: FC = (): JSX.Element => {
  const socialLinks = [
    'images/facebook.png',
    'images/twitter.png',
    'images/instagram.png',
  ];
  return(
    <aside className="sidebar">
      <ul className="social-links">
        {socialLinks.map(src => {
          return(
            <li className="social-links__item">
              <a
                href="/#" 
                className="social-links__item-link"
              >
                <img 
                  src={src} 
                  alt={src}
                  className="social-links__item-link-img" 
                />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}