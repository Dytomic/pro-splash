import { useState, useEffect } from 'react';

import pcBackground from './images/bg.png';
import mobileBackground from './images/bg-mobile.png';

import instaRegular from './images/insta_regular.png'
import instaEffect from './images/insta_effect.png'

import discordRegular from './images/discord_regular.png'
import discordEffect from './images/discord_effect.png'

import fbRegular from './images/fb_regular.png'
import fbEffect from './images/fb_effect.png'

import './App.css';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { width, height } = useWindowDimensions();

  let LINK_INSTA = 'https://www.instagram.com/pirateraids.online'
  let LINK_DISCORD = 'https://discord.gg/cmw8ZRzBrg'
  let LINK_FB = 'https://www.facebook.com/pirateraids.online'

  return (
    <div>
      <div className='landscape' style={{ height: '100vh', width: '100vw', backgroundImage: `url(${pcBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }} >
        <a href={LINK_INSTA}>
          <img alt='' style={{ position: 'absolute', top: '66.4%', left: '36.89%', height: '8.98%', width: '5.05%' }} src={instaRegular} onMouseOver={e => e.target.src = instaEffect} onMouseLeave={e => e.target.src = instaRegular} />
        </a>

        <a href={LINK_DISCORD}>
          <img alt='' style={{ position: 'absolute', top: '66.4%', left: '47.43%', height: '8.98%', width: '5.05%' }} src={discordRegular} onMouseOver={e => e.target.src = discordEffect} onMouseLeave={e => e.target.src = discordRegular} />
        </a>

        <a href={LINK_FB}>
          <img alt='' style={{ position: 'absolute', top: '66.4%', left: '57.54%', height: '8.98%', width: '5.05%' }} src={fbRegular} onMouseOver={e => e.target.src = fbEffect} onMouseLeave={e => e.target.src = fbRegular} />
        </a>
      </div>

      <div className='portrait' style={{ height: `${height}px`, width: `${width}px`, backgroundImage: `url(${mobileBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: `${width}px ${height}px` }} >
        <a href={LINK_INSTA}>
          <img alt='' style={{ position: 'absolute', top: `${0.8859 * height}px`, left: `${0.0861 * width}px`, height: `${0.0898 * height}px`, width: `${0.1597 * width}px` }} src={instaEffect} />
        </a>

        <a href={LINK_DISCORD}>
          <img alt='' style={{ position: 'absolute', top: `${0.8859 * height}px`, left: `${0.418 * width}px`, height: `${0.0898 * height}px`, width: `${0.1597 * width}px` }} src={discordEffect} />
        </a>

        <a href={LINK_FB}>
          <img alt='' style={{ position: 'absolute', top: `${0.8859 * height}px`, left: `${0.7527 * width}px`, height: `${0.0898 * height}px`, width: `${0.1597 * width}px` }} src={fbEffect} />
        </a>
      </div>
    </div>
  );
}

export default App;
