import { FC } from 'react';
import './Thumbnails.scss';

export const Thumbnails: FC = (): JSX.Element => {
  const thumns = [
    'images/thumb1.png',
    'images/thumb2.png',
    'images/thumb3.png',
  ]
  return(
    <section>
      <ul className="thumbs">
        {thumns.map(src => {
          return(
            <li className="thumbs__item">
              <img 
                src={src} 
                alt={src}
                className="thumbs__item-link"
              />
            </li>
          )
        })}
      </ul>     
    </section>
  );
}