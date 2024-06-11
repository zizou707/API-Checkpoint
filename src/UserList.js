import axios from 'axios';
import React, { useEffect, useState } from 'react'


function UserList() {
    const [listOfUSer,setListOfUser]=useState();

  useEffect(()=>{
    const fetchData=async()=>{
      try{ const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res.data);
      setListOfUser(res.data)}
        catch(err){console.log(err)}
      }
    fetchData()},[])
  

  
  
  return (
    <div className='users'>
      {listOfUSer && listOfUSer.map((m,i)=>(
        <div className="user">
          <h3 key={m.id}>UserName : {m.username}</h3>
          <p className="email">Email : {m.email}</p>
          <ul className='address'>
             <li className="street">street : {m.address.street}</li>
             <li className="suite">suite : {m.address.suite}</li>
             <li className="city">city : {m.address.city}</li>
             <li className="zipcode">zipcode : {m.address.zipcode}</li>
             <li className="geo">geo : <span>
                                        lat : {m.address.geo.lat}
                                       </span> <br/>
                                       <span>
                                        lng : {m.address.geo.lng}
                                       </span> 
             </li>
          </ul>
           <p>Phone : {m.phone}</p> 
           <p>Website : {m.website}</p>
           <p>Company :<ul>
                         <li>Name : {m.company.name}</li>
                         <li>CatchPhrase : {m.company.catchPhrase}</li>
                         <li>bs : {m.company.bs}</li>
                     </ul>
          </p>

        </div>
        ))}
    </div>
  );
}

export default UserList