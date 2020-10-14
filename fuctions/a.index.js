const alertList =document.querySelector('.alert-List');

const alertsNear =document.querySelector('#UserSounding');
const allAlers =document.querySelector('#allAlers');  //order by Date

const DisplayT =document.querySelector('#provinceAlerts');

//const media =document.querySelector('img');

db.collection('Alerts').get().then(snapshot => {
    setUIAlerts(snapshot.docs);
    //console.log(snapshot.docs);
});

const setUIAlerts = (data) => {
    let html='';
    data.forEach(doc => {
        const alert=doc.data();
        var datepost =alert.dayPosted;
        //datepost= datepost.getMonth();
        const li=`
         <div class="a-card">
         <div class="a-info">
         <span class="a-date">${datepost}</span>
           <h3>${alert.name}</h3>
           <p>${alert.description}</p>
           <span class="location">${alert.location}</span>
         </div>
         <div class="a-stats"></div>
         <div class="a-media">
           <img src="crime.jpg" alt="">
         </div>
     </div> <br>
        `;
        html +=li;
    });
    alertList.innerHTML=html;
};

//var ViewUserProvince  ;

    auth.onAuthStateChanged(user => {
      
      if(user){
          
          
        db.collection('Users').doc(user.uid).get().then(doc=>{
                ViewUserProvince= doc.data().province;
                
                console.log(ViewUserProvince);
   
            alertsNear.addEventListener('click',(e)=>{
            e.preventDefault();
           // db.collection('Alerts').get().then(snapshot => {
           db.collection('Alerts').where('location','==',ViewUserProvince).get().then(snapshot => {
                  setUIAlerts(snapshot.docs);
                  //console.log(snapshot.docs);  array-contains
            });
   
              //  DisplayT.innerHTML=ViewUserProvince;
          });
        });
                
  } 
  
});

