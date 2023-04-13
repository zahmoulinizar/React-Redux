import React from 'react';
import img from '../322950454_5499389240190737_178477298977994144_n.jpg'

function ProfilePhoto() {
  return (
    <div>
      <img src= {img} alt="profile" style={{width:'400px', borderRadius:'15px'}} />
    </div>
  );
}

export default ProfilePhoto;
