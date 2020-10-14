
const closePopup =document.querySelector('#updateBtn');
//    REAPET POPUP CALLER COZ IF its one,, its  doesnt other
const openPopup1 =document.querySelector('.callPopUp1');
const openPopup2 =document.querySelector('.callPopUp2');
const openPopup3 =document.querySelector('.callPopUp3');
const openPopup4 =document.querySelector('.callPopUp4');
const openPopup5 =document.querySelector('.callPopUp5');

const UpdateThis =document.querySelector('#edit');

//=============close pop up=======================================================
openPopup1.addEventListener('click',(e)=>{
    e.preventDefault();

    document.querySelector('.popUp').style.display="flex";
});

openPopup2.addEventListener('click',(e)=>{
  e.preventDefault();
  document.querySelector('.popUp').style.display="flex";
    closePopup.addEventListener('click',(e)=>{
            e.preventDefault();
                if(UpdateThis.value !=""){
                            var userID =db.collection('Users').doc(user.uid).get().then(doc=>{});
                            
                            db.collection('User').where(userID).update({
                            last_name : UpdateThis.value,
                            /*last_name :  signUp['last-name'].value,
                            province :  signUp['province'].value,
                            contact :  signUp['phone-no'].value,
                            gender :   signUp['gender-type'].value,*/
                    });
                }else{
                    document.querySelector('.popUp').style.display="none";   
                }
    });
});


openPopup3.addEventListener('click',(e)=>{
  e.preventDefault();

  document.querySelector('.popUp').style.display="flex";
});


openPopup4.addEventListener('click',(e)=>{
  e.preventDefault();

  document.querySelector('.popUp').style.display="flex";
  if (condition) {
    
  }
});

openPopup5.addEventListener('click',(e)=>{
  e.preventDefault();

  document.querySelector('.popUp').style.display="flex";
});

//=============close pop up=======================================================
closePopup.addEventListener('click',(e)=>{
  e.preventDefault();

  document.querySelector('.popUp').style.display="none";
});
/*  closePopup.addEventListener('click',(e)=>{
  e.preventDefault();

  document.querySelector('.popUp').style.display="none";
});       alertGeoLocation
*/




//==  End close pop up=======================================================


