import { useState , useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [profileName,setProfileName]=useState("");
  const [profileCell,setProfileCell]=useState("");
  const [profileImage,setProfileImage]=useState("");
  const [profileEmail,setProfileEmail]=useState("");

  const profileData = async () =>{
    try {
      const res = await axios.get("https://randomuser.me/api");
      console.log(res);
      setProfileCell(res.data.results[0].cell)
      setProfileEmail(res.data.results[0].email)
      setProfileImage(res.data.results[0].picture.large);
      setProfileName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    profileData();
  },[])

  return (
    <div className="App">
      <div className='profileContainer'>
      <img src={profileImage}/>
      <h1>{profileName}</h1>
      <p>{profileEmail}</p>
      <p>{profileCell}</p>
      <button onClick={profileData}>Click for Random Profile</button>
      </div>
    </div>
  );
}

export default App;