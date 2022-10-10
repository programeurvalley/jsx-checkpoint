import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto'
import FullName from './Component/Profile/FullName'
import Address from './Component/Profile/Address'

function App() {
  return (
    <>
      <div id="card" >
        <ProfilePhoto />
        <div class="items-card" >
          <FullName />
          <Address />
        </div>
      </div>
      
    </>
  );
}

export default App;
