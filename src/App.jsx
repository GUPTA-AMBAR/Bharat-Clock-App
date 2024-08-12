import './App.css'
import ClockHeading from './ClockHeading'
import ClockSlogan from './ClockSlogan'
import CurrenTime from './CurrentTime'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
return  (
  <center className='heading'>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <CurrenTime></CurrenTime>

 </center>
);

};

export default App; 
