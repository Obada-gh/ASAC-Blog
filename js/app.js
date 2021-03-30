'use strict'
function Person(name, title, sub,con,day,month,year) {
    this.name = name;
    this.title = title;
    this.sub = sub;
    this.day = day;
    this.month = month;
    this.year = year;
    this.con = con;
    Person.all.push(this); 
  };
  Person.all=[];
  Person.prototype.addls = function() {
    localStorage.setItem('info',JSON.stringify(Person.all));
  }
  /////////////////////////////////////////////////////////////////////////
  let form = document.getElementById('form');
  let resultid = document.getElementById('re');
  let nameid = document.getElementById('n1');
  let titleid = document.getElementById('t1');
  let subid = document.getElementById('s1');
  let conid = document.getElementById('c1');
  let dayid = document.getElementById('ch1');
  let monthid = document.getElementById('ch2');
  let yearid = document.getElementById('ch3');
  let img = document.createElement("img");
  img.src = "./img/asac_ltuc.jpg";
  let src = document.getElementById("x");
  let randomNum = Math.floor(Math.random() * 556);
  
 

  
  /////////////////////////////////////////////////////////////////////////////
  form.addEventListener("submit", myFunction);

function myFunction(e) {
    e.preventDefault()
    let nameV=nameid.value
    let titleV=titleid.value
    let subV=subid.value
    let conV=conid.value
    let dayV=dayid.value
    let monthV=monthid.value
    let yearV=yearid.value
    let user = new Person(nameV,titleV,subV,conV,dayV,monthV,yearV)
    user.addls();
    console.log(nameV+titleV+subV+conV+dayV+monthV+yearV);
    let userh = JSON.parse(localStorage.getItem('info'));
    resultid.innerHTML = 
   `Artificial Intelligence basics<br>
   Author:${userh[0].name}<br>
   ${src.appendChild(img)}<br>
   
   Likes:${randomNum}<br>
    Date:${userh[0].day}-
    ${userh[0].month}-
    ${userh[0].year}<br>
    ${userh[0].con}
    `
    
    
    // Date:${userh[1].name}-
    // ${userh[1].name}-
    // ${userh[1].name}<br>
    // ${userh[1].name}<br>
    // ${userh[1].name}<br>`;
    
    
    

};




