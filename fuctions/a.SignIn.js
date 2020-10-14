const signIn = document.querySelector('#signin-form');

signIn.addEventListener('submit',(e) => {
    e.preventDefault();
//get input variable 
    

    const email = signIn['user-email'].value;
    const pass= signIn['user-password'].value; 
    auth.signInWithEmailAndPassword(email,pass).then(cred=>{
       // console.log(cred.user);
        //document.location.href="index.html";
        document.getElementById("pgLoader").style.display="flex";
        auth.onAuthStateChanged(user=>{
            if(user){
            
            signIn.reset();
            window.location='index.html';
            }
        });
       
       

    })
    .catch(()=>{
        document.getElementById("pgLoader").style.display="none";

    }) 
});


/*
    var
months = [
"January"
,
"February"
,
"March"
,
"April"
,
"May"
,
"June"
,
"July"
,
"August"
,
"September"
,
"October"
,
"November"
,
"December"
];
*/
