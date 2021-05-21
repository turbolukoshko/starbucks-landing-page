import { FC } from 'react';
import './Main.scss';

export const Main: FC = (): JSX.Element => {
  return(
    <main className="main">
      <div className="content">
        <h2 className="title">
          It's not just Coffee
          <p className="title__info">It's <span className="title__info-keyword">Starbucks</span></p>
        </h2>
        <p>
          People think the Starbucks coffee is high quality, good taste, 
          and innovative in terms various selections of specialty coffee like 
          Frappuchino and Chai Latte. Customized cups with customers' names on, comfortable 
          and joyful environment to relax and hangout with friends also generate lots of 
          positive remarks.
        </p>
        <a href="/#" className="title__link">Learn more</a>
      </div>
      <div className="main__img">
        <img src="images/img1.png" alt="starbucks" />
      </div>
    </main>
  );
}
