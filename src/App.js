import ProfilePhoto from './components/ProfilePhoto'
import FullName from './components/FullName'
import './App.css';
import Address from './components/Address';

function App() {
  return (
    <div className="App">
      <h1>My Profile</h1>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
      
      
    </div>
  );
}

export default App;

