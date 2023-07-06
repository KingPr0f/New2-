function submitValue () {

    let first = document.querySelector(".fname").value;
    let last = document.querySelector(".lname").value;
    let res = document.getElementById ("result");
      let mySkills = document.getElementsByName("Team");
      
      let selected = [];
      for (let i=0; i < mySkills.length; i++){
        if(mySkills[i].checked){
          selected.push(mySkills[i].value);
        }
      }
    
     if(first.length===0) {
       alert ("First Name is not Entered");
     }
     
     res.innerHTML = `Hello I am ${first} ${last}<br> My Team is : ${selected}<br> Thank You`;
    }