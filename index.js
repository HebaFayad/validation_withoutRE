// Display error message
function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

// Validate form 
function validateForm() {
    //values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var age = document.contactForm.age.value;
    var url=document.contactForm.url.value;
    var password=document.contactForm.password.value;
    var gender=document.contactForm.gender.value;
    
    
	// Error variables
    var nameErr = emailErr = mobileErr = ageErr = genderErr=urlErr = pssErr = true;

    // Validate name
    let arrName;
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        //var regex = /^[a-zA-Z\s]+$/; 

        for(i=0;i<name.length;i++){
            if(isNaN(name[i])){

            }else{
                arrName=false;

            }
        }
        if(arrName==false){
            console.log('your name contain a number');
            printError("nameErr", "your name should not contain a number");
        }else{
            console.log(name)
        }
    }


    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // let arr=[];
        // for(let i=0;i<email.length;i++){
        //     if(email[i]=='@'){
        //         arr.push(email[i]);
        //     }else{console.log("Error");}
        // };
        // console.log(arr.length);

        // if(arr.length == 1) {
        //    // printError("emailErr", "Please enter a valid email address");
        //     console.log('only one @');
        //     emailErr = false;
        //     arrEamail=email.split('@');
        //     console.log(arrEamail);


        // } else{
        //     console.log('more than ona @')
            
        // }
        if (email.indexOf("@") == -1) {
            printError("emailErr", "Please enter a valid email address with @");
          
        }
        let parts = email.split("@");
        let dot = parts[1].indexOf(".");
      //  let len = parts[1].length;
        let dotSplits = parts[1].split(".");
        let dotCount = dotSplits.length - 1;
        if (dot == -1 || dot < 2 || dotCount > 2) {
            printError("emailErr", "Please enter a valid email with dot");
        }
        for (let i = 0; i < dotSplits.length; i++) {
            if (dotSplits[i].length == 0) {
                printError("emailErr", "Please enter a valid email with dot and 'com' ");

            }
        }
    }

    // Validate password
    console.log(password);
    let long=false;
    let number = false;
    let sympol = false;
    let captial = false;
    let small = false;
    if(password.length>=8){
        long=true;}

        for (let i = 0; i < password.length; i++) {
            let charCode = password.charCodeAt(i);
            if((charCode > 32 && charCode < 48)){
                sympol = true;
               
            }
            if((charCode > 47 && charCode < 58)){
                number = true;
            }
            if((charCode > 64 && charCode < 91)){
                captial= true;
            }
            if((charCode> 96 && charCode < 123)){
                small = true;
            }}
           

 

  if((captial==true)&&(small==true)&&(number==true)&&(sympol==true)&&(long==true))
  {
      alert("correct password");
  }
             
  else{
    printError("passErr", "Incorrect PassWord( contain at least A-Z and a-z and 0-9 and !@#$)");
  } 
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        
        if(mobile.length==9) {
         if((mobile[0]==7)&&(mobile[1]==0)||(mobile[1]==7)||mobile[1]==1){
            console.log(mobile);
            mobileErr=false;
            
        }
    }else{
        printError("mobileErr", "the number should be 9 digit and srart with (77-71-700)");
    }
    }

    // validate URL
    if (url==""){
        console.log('Error empty url')
        printError("urlErr", "Please enter your URL");
    }else{
        if(url[0]=='h'&&url[1]=='t'&&url[2]=='t'&&url[3]=='p'&&url[4]=='s'&&url[5]==':'&&url[6]=='/'&&url[7]=='/'){
            console.log(url)
        }else{
            printError("urlErr", "missing one charecter ==>https://");
        }
    }


    

    // Validate Age
    if(age == "") {
        printError("ageErr", "Please enter your Age");
    } else {
        switch(true){
            case age>0 && age<7:
            console.log('baby')
            break;
            case age>6 && age<19:
                console.log('Teen')
                break;
                case age>18 && age<40:
                    console.log('Adult')
                    break; 
                    case age>39:
                        console.log('old')
                        break;                           


        }

    }



    

// select from checkbox
 
//Gender

    console.log(gender);
     
    
   
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || ageErr||urlErr || passErr) == true) {
       return false;
    } else {
        // PoPup alert
        var pop =mobile+ "Your Info has been Sent: \n" + "\n POOR  " +name + "\n We Have a complete access to you account and device ^^"
        alert(pop);
    }
};

// let arr2=[];
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => arr2.push(json.title))
//   //console.log(arr2)
