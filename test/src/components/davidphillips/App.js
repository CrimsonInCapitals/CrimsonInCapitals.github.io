import './App.css';
import { FP, H1,H2,H3,H4,H5,P1, P2, P3, Quote, Statment } from './components/TextStyles.js';
import { Card} from './components/card.jsx';
import { CardButton, Section, VL } from './components/Elements.js';
import { MessagingPage } from './Pages/Messaging.js';
import { Icon } from './components/Icons.js';
import { HeaderMenu } from './components/Menus.js';
import { Route,Routes } from 'react-router';
import { FourZeroFour } from './Pages/404.js';
import { getStyle } from './Objects/ClassManager.js';
import { layerProps } from './Objects/brand.js';
import { useInternalContext } from './context/links.js';
import { useModeContext } from './context/brandLayers.js';
import { useCookiesContext } from './context/Cookies.js';
import { Button } from './components/Buttons.js';
import { CookieRequest } from './components/cookieRequest.js';
import { Footer } from './components/footer.js';

function App() {
  const pages = useInternalContext()
  const {Mode,setMode} = useModeContext()
  const {cookieHandler,setCookieHandler}=useCookiesContext()
  return (
    <Section layer='Two' id='Body'style={{background: Mode.Layers.Two.Background}}  >
      <g>
      <HeaderMenu/>
      </g>
    <CookieRequest/>
      <Routes>
        {pages.map(({to,component})=><Route path={to} key={to}element={component}/>)}
        <Route path='*' element={<FourZeroFour/>}/>
      </Routes>
      <Footer/>
        
    </Section>
    
  );
}

export default App;
