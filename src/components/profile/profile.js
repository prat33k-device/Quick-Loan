import React,{useState} from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import './profile.css';
import axios from 'axios';


function Profile(){
   const [user,setUser] = useState({fname:"",email:"",bankname:"",ctc:""})
   const [imgurl,setimgurl] = useState("https://picsum.photos/50/50");
   const [selectedFile,setData] = useState(null);
   const [monthlyslipList,setMonthlySlip] = useState([{monthlyslip:""}])
   // console.log(monthlyslipList);



   function handleChange(event){
      console.log("change monthly slip");
       setData(event.target.files[0]);
        console.log(event.target.files[0]);
        console.log("monthly slip Changed");
   }

   function handleTextChange(event){
         const {name,value} = event.target;
         setUser(prevValue=>{
            return{...prevValue,
            [name] : [value]
           }
         })
   }

   async function handleSubmit(e){
         e.preventDefault();
         const fd = new FormData();
         fd.append('file',selectedFile); 
        await axios.post("http://localhost:4000/upload",fd)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
   }

   function handleSlipAdd(){
      setMonthlySlip([...monthlyslipList,{monthlyslip:""}])
   }

   function handleSlipRemove(index){
      const list = [...monthlyslipList];
      list.splice(index,1);
      setMonthlySlip(list);
   }


   function handleSlipChange(e,index){
      const {name,value} = e.target;
      const list = [...monthlyslipList];
      list[index][name] = value;
      setMonthlySlip(list)
   }
   


    return (<div id='profile'>
        <div id='profile_box'>
        <div>
           <span id='edit-profile'>Edit Profile</span>
           <div id='image-box'>
           <label for="profile_photo">
           <img id="profile_dp" src={imgurl} alt="Profile Image" ></img></label>
           <input id='profile_photo' style={{display:"none"}} type="file" accept='image/*' onChange={handleChange}></input>
           <PhotoCameraIcon id="edit-image-button"/>
           </div>
           <div id='profile-form'>
                <div id='first-column'>
                       <div>
                        <label for="fullname">Full Name</label>
                        <input type="text" className="profile_button" name='fname' value={user.fname} onChange={handleTextChange}/>
                        </div>
                        <div>
                        <label for="email">Email</label>
                        <input type="text" className="profile_button" name='email' value={user.email} onChange={handleTextChange}/>
                        </div>
                        <div>
                        <label for="bankname">Bank Name</label>
                        <input type="text" className="profile_button" name='bankname' value={user.bankname} onChange={handleTextChange}/>
                        </div>
                        <div>
                        <label for="ctc">CTC</label>
                        <input type="text" className="profile_button" name='ctc' value={user.ctc} onChange={handleTextChange}/>
                        </div>
                        <label for="selectedFile">Aadhar Card</label>
                        <div className='upload_file_left'>
                          <input id='selectedFile' type="file" accept='image/*' onChange={handleChange}></input>
                        </div>
                        <label for="selectedFile">PAN Card</label>
                        <div className='upload_file_left'>   
                          <input id='selectedFile' type="file" accept='image/*' onChange={handleChange}></input>
                        </div>
                </div>
                <hr/>
                <div id='second-column'>
                    <span id='monthy-heading'>Monthly Slips</span>
                    <hr id='monthly-hr'></hr>
                  {monthlyslipList.map((singleList,index)=>(
                     
                     <div key={index} id='monthly-slip'>
                  <div id='upload-box'>
                    <div className='upload_file_right'>
                        <label for="selectedFile" style={{display:"none"}} onClick={handleChange}></label>
                        <input id='selectedFile' name='monthlyslip' type="file" accept='image/*' value={singleList.monthlyslip} onChange={(e) => {handleSlipChange(e,index);handleChange()}}></input> 
                    </div>
                    <div id='upload-box_2'>
                    {monthlyslipList.length -1 === index && <div><button onClick={handleSlipAdd}><AddCircleOutlineIcon /></button></div>}
                    {monthlyslipList.length>1 && <div><button onClick={()=>handleSlipRemove(index)}><RemoveIcon/></button></div>}
                    
                    </div>
                 </div>
                 </div>
                  ))}
                </div>
           </div>
           </div>
           <div><button id='save-button' type='submit' onClick={handleSubmit}>Save</button></div>
        </div>
    </div>)
}
export default Profile;