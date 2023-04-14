
import './App.css';
import Nabvar from './Components/Nabvar';
import HaderBanar from './Components/HaderBanar/HaderBanar';
import TransactionProcess from './Components/TransactionProcess/TransactionProcess';
import RewardSection from './Components/RewardSection/RewardSection';
import DiffrentBrandSection from './Components/DiffrentBrandSection/DiffrentBrandSection';
import ServiceSction from './Components/ServiceSction';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="">
     <Nabvar></Nabvar>
     <HaderBanar></HaderBanar>
     <TransactionProcess></TransactionProcess>
     <RewardSection></RewardSection>
     <DiffrentBrandSection></DiffrentBrandSection>
     <ServiceSction></ServiceSction>
     <Footer></Footer>
    </div>
  );
}

export default App;
