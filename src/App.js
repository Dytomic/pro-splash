import './App.css';
import pcBackground from './images/bg.png';
import mobileBackground from './images/bg-mobile.png';
import discordIcon from './images/discord.png'
import fbIcon from './images/fb.png'
import instaIcon from './images/insta.png'

function App() {
  let LINK_INSTA = 'https://www.instagram.com/pirateraids.online'
  let LINK_DISCORD = 'https://discord.gg/cmw8ZRzBrg'
  let LINK_FB = 'https://www.facebook.com/pirateraids.online'

  return (
    <div>
      <div className='landscape' style={{ height: '100vh', width: '100vw', backgroundImage: `url(${pcBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }} >
        <a href={LINK_INSTA}>
          <img alt='' style={{ position: 'absolute', top: '68.09%', left: '38.53%', height: '5%', width: '2.8%' }} src={instaIcon} />
        </a>

        <a href={LINK_DISCORD}>
          <img alt='' style={{ position: 'absolute', top: '68.09%', left: '48.53%', height: '5%', width: '2.8%' }} src={discordIcon} />
        </a>

        <a href={LINK_FB}>
          <img alt='' style={{ position: 'absolute', top: '68.09%', left: '58.53%', height: '5%', width: '2.8%' }} src={fbIcon} />
        </a>
      </div>

      <div className='portrait' style={{ height: '100vh', width: '100vw', backgroundImage: `url(${mobileBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }} >
        <a href={LINK_INSTA}>
          <img alt='' style={{ position: 'absolute', top: '69.3%', left: '15.8%', height: '4.68%', width: '8.33%' }} src={instaIcon} />
        </a>

        <a href={LINK_DISCORD}>
          <img alt='' style={{ position: 'absolute', top: '69.37%', left: '45.83%', height: '4.68%', width: '8.33%' }} src={discordIcon} />
        </a>

        <a href={LINK_FB}>
          <img alt='' style={{ position: 'absolute', top: '69.5%', left: '76%', height: '4.68%', width: '8.33%' }} src={fbIcon} />
        </a>
      </div>
    </div>
  );
}

export default App;
