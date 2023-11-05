
import { MDBContainer, MDBRow, MDBCol, MDBCard,  MDBCardBody, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from "react";
import Axios from "axios";


function EditProfile() {
  
    const [firstName, setFirstName] = useState("");


    const handleEditProfile = (e) => {
        e.preventDefault();
        console.log("handleEditProfile called");


        const formData = new FormData();


        formData.append("firstname", firstName);


       
        Axios.put(`http://localhost:3009/profile/`, formData, {
      
    })
      .then((response) => {
        console.log(response.data);
        // navigate("/profile");
      })
      .catch((error) => {
        console.log("error - value already exists");
      });

  };


    


  return (


<form id="edit">
{/* onSubmit={handleEditProfile} */}
<div className="form-group" style={{display:'flex'}}>
<MDBCard  style={{margin:'50px', width: '200px', justifyContent: 'center', border:'2px solid green'}}>

<h5 style={{fontWeight:'bold'}}>Basic Info</h5>


                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    // className="form-control"
                    // id="firstName"
                    // value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                    // required
                  />


                   <MDBBtn type="submit">
                  Save
                </MDBBtn>               
                 
{/* 


 <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    // className="form-control"
                    // id="lastName"
                    // value={lastName}
                    // onChange={(e) => setLastName(e.target.value)}
                    // required
                  />
                  <label htmlFor="country">Country:</label>
                  <input
                    type="text"
                    // className="form-control"
                    // id="country"
                    // value={country}
                    // onChange={(e) => setCountry(e.target.value)}
                    // required
                  />

                  <label htmlFor="stateprovince">State/Province/Territory:</label>
                  <input
                    type="text"
                    // className="form-control"
                    // id="stateprovince"
                    // value={stateprovince}
                    // onChange={(e) => setStateProvince(e.target.value)}
                    // required
                  />


                  <label htmlFor="city">City:</label>
                  <input
                    type="text"
                    // className="form-control"
                    // id="city"
                    // value={city}
                    // onChange={(e) => setCity(e.target.value)}
                    // required
                  />


                  <label htmlFor="summary">About: </label>
                  <textarea
                    style={{ height: '150px' }}
                    type="text"
                    // className="form-control"
                    // id="summary"
                    // value={summary}
                    // onChange={(e) => {
                    //   if (e.target.value.length <= 500) {
                    //     setSummary(e.target.value);
                    //   }
                    // }}
                    // maxLength={500}
                    // required
                  /> */}

</MDBCard>
</div>
</form>


  )
}

export default EditProfile;