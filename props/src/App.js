import Props from './components/props';
import Mobiles from './components/mobiles';

function App() {
  return (
    <>
   <h3 className='c1'> Mobiles</h3>
   <Mobiles name='samsung' price='25,000'/>
   <Mobiles name='telephone' price='20,000'/>
   <Mobiles name='oneplus' price='19,000'/>
   <Mobiles name='A30s' price='14,000'/>
   <Mobiles name='apple' price='100,000'/>
 <Props/>
  </>
  )
}

export default App;
