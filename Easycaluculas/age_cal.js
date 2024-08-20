const months=[31,28,31,30,31,30,31,31,30,31,30,31];
let cudate,cury,curmon;
function agecal(){   //function to calculate Age
   
    let currentdate= new Date();
    let currentyear= currentdate.getFullYear();
    let currentmonth= currentdate.getMonth()+1;
    let currdate=currentdate.getDate();
    let birthdate= new Date(document.getElementById('date-input').value);
    let birthdetails={
        years:birthdate.getFullYear(),
        month: birthdate.getMonth()+1,
         date : birthdate.getDate(),
    };
           leap(currentyear)
           if(birthdetails.years>currentyear || birthdetails.years==currentyear){
            alert("You are Not Born!");}
            else{
                 cury= currentyear-birthdetails.years;
            }
            if(birthdetails.month<=currentmonth ){
                   curmon= currentmonth-birthdetails.month;
            }
            else{
                birthdetails.years--;
                 curmon= 12+ currentmonth-birthdetails.month;
            }
            if(currdate>=birthdetails.date){
            cudate= currdate-birthdetails.date;
            }
            else{
                curmon--;
                let days= months[currentmonth-2];
              cudate= days+ currdate-birthdetails.date;  
            if(curmon<0){
                curmon=11;
                cury--;
            }          }
            display(cury,curmon,cudate);
           }
           function display(byear,bmonth,bdays){
            document.getElementById('years').textContent=byear;
            document.getElementById('months').textContent=bmonth;
            document.getElementById('days').textContent=bdays;
           }

function leap(year){
if( year%4==0||(year%100==0 && year%400==0)){
    months[1]=29;
}
else{
    months[1]=28;
}
}
