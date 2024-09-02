import React, { useRef } from "react";

function SignupForm() {
  let selectStateRef = useRef();
  let msgLabelRef = useRef();
  let firstNameRef = useRef();
  let LastNameRef = useRef();
  let maleRBRef = useRef();
  let femaleRBRef = useRef();
  let selectedGender;
  let salutation;
  let maritalStatus;

  let onClickAccount = () => {
    if (selectedGender == "male") {
      salutation = "Mr.";
    } else {
        if(maritalStatus == "single"){
            salutation = "Miss.";
        }else{
            salutation = "Mrs.";
        }
    }
    msgLabelRef.current.innerHTML = `${salutation} ${firstNameRef.current.value} ${LastNameRef.current.value} from ${selectStateRef.current.value} your Account has been created successfully`;
  };

  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input ref={firstNameRef}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input ref={LastNameRef}></input>
        </div>
        <div>
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            ref={maleRBRef}
            onChange={() => {
              if (maleRBRef.current.checked == true) {
                selectedGender = "male";
              }
            }}
          ></input>
          <label className="innerLabel">Male</label>
          <input
            type="radio"
            name="gender"
            ref={femaleRBRef}
            onChange={() => {
              if (femaleRBRef.current.checked == true) {
                selectedGender = "female";
              }
            }}
          ></input>
          <label className="innerLabel">Female</label>
        </div>
        <div>
          <label>Marital Status</label>
          <input type="radio" name="ms"
           onChange={(eventobj)=>{
          console.log(eventobj);
          if(eventobj.target.checked == true){
         maritalStatus = "single";
          }
          }}></input>
          <label className="innerLabel">Single</label>
          <input type="radio" name="ms"
          onChange={(eo)=>{
            console.log(eo);
            if(eo.target.checked ==true){
            maritalStatus = "married";
            }
          }}
          ></input>
          <label className="innerLabel">Married</label>
        </div>
        <div>
          <label>State</label>
          <select ref={selectStateRef}>
            <option>Select State</option>
            <option>Telangana</option>
            <option>Andhra Pradesh</option>
            <option>Karnataka</option>
            <option>Delhi</option>
            <option>Kerala</option>
          </select>
        </div>
        <div>
          <label>Email</label>
          <input></input>
        </div>
        <div>
          <label>Password</label>
          <input></input>
        </div>
        <div>
          <label>Mobile No.</label>
          <input></input>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              onClickAccount();
            }}
          >
            Submit
          </button>
        </div>
        <label ref={msgLabelRef} style={{ width: "500px" }}></label>
      </form>
    </div>
  );
}

export default SignupForm;
