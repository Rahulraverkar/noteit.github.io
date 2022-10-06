
// ----------------------------------global variable's---------------------------------

// let dob=localStorage.getItem('dob1').replaceAll('-' , ',');
// let dob_mil=Date.UTC(dob);
// age=(Date.now()-dob_mil)/31104000000;


let setting_key_active=0;
let bgtogal=[];
let user_login=localStorage.getItem('userlogined');
let userlogin1;
var headings=[];
var notes=[];
let favoritelist=[];
let cardopened;
let cardid=[];
let favcardid=[];
let dates=[];
let favindex=[];

let searchlistnotes;
let searchlistheads;
let searchednote=[];
let searchedhead=[];
let searchedindex=[];
let passch_check=false;


let moveto;
let movecard;
let allcard;
let allgap;
// ----------------------------------------initial functions------------------------


if(localStorage.getItem('favid')){favcardid=JSON.parse(localStorage.getItem('favid')); changefavclr();changecardclr();}
else{favoritelist=[]}





function addzero(num){
    if (num<10){
        return `0${num}`
    }
    else{return num}
}



// ---------------------------------------setting togal key----------------------------------------------

for(let i=1;i<=3;i++){
    bgtogal[i]=false;
   
    document.getElementById(`keyholder${i}`).addEventListener('click' , function(){
        if(bgtogal[i]){
        auto_change_off(i)
        bgtogal[i]=false;
    }
    
        else{
            
            auto_change_on(i)
            bgtogal[i]=true;
        }
    })
    }

// ----------------------------------remove_login_page---------------------------------


function remove_login_page(){
    document.getElementById('loginpagebg1').style.zIndex='-10';
    document.getElementById('loginpage1').style.zIndex='-10';
    document.getElementById('loginpagebg1').style.visibility='hidden';
    document.getElementById('loginpage1').style.visibility='hidden';
}





// ----------------------------------alrady loged in---------------------------------

if(localStorage.getItem('logedIn')=='yes' || localStorage.getItem('logedIn1')=='yes'){
    a=localStorage.getItem(`userlogined`);
    setUserData(a);
    remove_login_page()
}
// ----------------------------------alrady loged checkbox---------------------------------
let wantlogin=false;
let wantlogin1=false;
document.getElementById('rememberme').addEventListener('click' , function(){
    if(wantlogin){wantlogin=false;}
    else{wantlogin=true;}
})

document.getElementById('rememberme1').addEventListener('click' , function(){
    
    if(wantlogin1){wantlogin1=false;}
    else{wantlogin1=true;}
    
})



// ----------------------------------options key---------------------------------


togalbtn = true

document.getElementById('options1').addEventListener('click', function () {

    if (togalbtn) { expand(); }
    else { noexpand();  }
})



function expand() {
    togalbtn = false 
    document.getElementById('options1').style.transform = 'rotate(45deg)';
    document.getElementById('options1').style.backgroundColor = 'red';
    document.getElementById('optionout2').style.top = 'calc(100vh - 240px)';
    document.getElementById('optionout3').style.top = 'calc(100vh - 320px)';
    document.getElementById('optionout4').style.top = 'calc(100vh - 400px)';
    document.getElementById('optionout5').style.top = 'calc(100vh - 480px)';
    document.getElementById('optionout6').style.top = 'calc(100vh - 560px)';
}

function noexpand() {
    togalbtn = true
    document.getElementById('options1').style.transform = 'rotate(0deg)';
    document.getElementById('options1').style.backgroundColor = 'rgba(0, 255, 13, 1)';
    document.getElementById('optionout2').style.top = 'calc(100vh - 160px)';
    document.getElementById('optionout3').style.top = 'calc(100vh - 160px)';
    document.getElementById('optionout4').style.top = 'calc(100vh - 160px)';
    document.getElementById('optionout5').style.top = 'calc(100vh - 160px)';
    document.getElementById('optionout6').style.top = 'calc(100vh - 160px)';
}



// ----------------------------------dark mode key---------------------------------



let light = true;

document.getElementById('options4').addEventListener('click', function () {
    if (light) {
        noexpand()
        document.getElementById('opennote').style.backgroundColor='rgb(99, 99, 99)';
        document.getElementById('opennote').style.color='white';
        let optionsc = document.getElementsByClassName('optionsclass1');
        document.getElementById('options1').style.boxShadow = '0 0 8px 0 white';
        for (let x of optionsc) { x.style.backgroundColor = 'white'; };
        document.body.style.background='rgb(104, 104, 104)';
        document.getElementById('options4').style.backgroundColor = 'rgba(0, 255, 13, 1)';
        document.getElementById('maindiv').style.backgroundColor = 'rgb(104, 104, 104)';
        document.querySelector(':root').style.setProperty('--menu_color', 'rgb(0, 238, 255)');
        document.querySelector(':root').style.setProperty('--menu_hover_color', 'rgb(104, 104, 104)');
        
        light = false
    }
    else {
        noexpand()
        document.getElementById('opennote').style.backgroundColor='white';
        document.getElementById('opennote').style.color='black';
        let optionsc = document.getElementsByClassName('optionsclass1');
        for (let x of optionsc) { x.style.backgroundColor = '#00000046'; };
        document.getElementById('options4').style.backgroundColor = '#00000046';
        document.body.style.background='white';
        document.getElementById('maindiv').style.backgroundColor = 'rgb(255, 255, 255)';
        document.getElementById('options1').style.boxShadow = '0 0 8px 0 black';
        document.querySelector(':root').style.setProperty('--menu_color', 'rgb(0, 238, 255)');
        document.querySelector(':root').style.setProperty('--menu_hover_color', 'rgb(255, 255, 255)');
        document.querySelector(':root').style.setProperty('--menu_txt_color', ' rgb(0, 0, 0)');

        if(localStorage.getItem(`web_clr${user_login}`)){
            document.getElementById('maindiv').style.backgroundColor=`${localStorage.getItem(`web_clr${user_login}`)}`
            document.querySelector(':root').style.setProperty('--menu_color', `${localStorage.getItem(`menu_clr${user_login}`)}`);
            document.querySelector(':root').style.setProperty('--menu_hover_color', `${localStorage.getItem(`web_clr${user_login}`)}`);
            document.querySelector(':root').style.setProperty('--menu_txt_color', ' rgb(0, 0, 0)');
            document.body.style.background=`${localStorage.getItem(`web_clr${user_login}`)}`;

        }

        light = true
    }

})

document.getElementById('options5').addEventListener('click' , function(){
    noexpand() 
    alert_box('Feature not available for now' , 'red')
})


document.getElementById('options6').addEventListener('click' , function(){
    noexpand() 
    alert_box('Feature not available for now' , 'red')
})

// -------------------------------------------pass visible----------------------------------

let passvis=true;

document.getElementById('seepass').addEventListener('click' , function(){
    if(passvis){
    document.getElementById('seepass').innerHTML='visibility'
    document.getElementById('newpassward').setAttribute('type' , 'text');
    passvis=false;

}

else{
    document.getElementById('seepass').innerHTML='visibility_off'
    document.getElementById('newpassward').setAttribute('type' , 'password');

    passvis=true;

}


})



// ----------------------------------menu key---------------------------------

let menuin=true;

document.getElementById('menulogo').addEventListener('click' , function(){
    if(menuin){menu_out()}

    else{menu_in()}

})


function menu_out(){

    document.getElementById('menubar').style.visibility='visible';
    document.getElementById('menubar').style.right='5px';
    document.getElementById('menubar').style.opacity='1';
    document.getElementById('menulogo1').innerHTML='close';
    menuin=false;
}


function menu_in(){
    document.getElementById('menubar').style.visibility='hidden';
    document.getElementById('menubar').style.right='-205px';
        document.getElementById('menubar').style.opacity='0';
        document.getElementById('menulogo1').innerHTML='menu';
        menuin=true;
}


// ----------------------------------log out---------------------------------



document.getElementById('u5').addEventListener('click' , function(){
    document.getElementById('loginpagebg1').style.visibility='visible';
    document.getElementById('loginpagebg1').style.zIndex='4';
    document.getElementById('loginpage1').style.visibility='visible';
    document.getElementById('loginpage1').style.zIndex='4';
    wantlogin=false;
    menu_in()
    setting_div_hidden()
    localStorage.setItem('logedIn' , 'no')
    localStorage.setItem('logedIn1' , 'no')
    
    document.getElementById('about').style.visibility='hidden'
    document.getElementById('about').style.opacity='0'
    document.getElementById('about').style.left='1500px'

    location.reload(); 
})
// ----------------------------------setting key---------------------------------

document.getElementById('u2').addEventListener('click' , function(){
    document.getElementById('settingdiv').style.visibility='visible';
    document.getElementById('settingdiv').style.opacity='1';
    menu_in();
    if(true){
        document.getElementById('settingoption1').style.borderBottom='1px solid rgba(76, 63, 255, 0.767)';
        document.getElementById('settingoption1').style.boxShadow='0px 5px 10px 0 rgb(0, 17, 255)';
        document.getElementById('settingoption1').style.backgroundColor='rgba(255, 255, 255, 0.849)';
        document.getElementById(`settingpalet1`).style.opacity='1';
        document.getElementById('settingpalet1').style.left='0px';
        setting_option_key_remove(0);
    }
})

document.getElementById('setting_close').addEventListener('click' , function(){
    setting_div_hidden();

})

function setting_div_hidden(){
    document.getElementById('settingdiv').style.visibility='hidden';
    document.getElementById('settingdiv').style.opacity='0';
}
// ----------------------------------setting option key---------------------------------
setting_option_key()

function setting_option_key(){

    let keyno=document.getElementsByClassName('settingoption');
    
    for (let i=0;i<3;i++){keyno[i].addEventListener('click' , function(){setting_key_active=i;
    if(setting_key_active==0){
        document.getElementById('settingoption1').style.borderBottom='1px solid rgba(76, 63, 255, 0.767)';
        document.getElementById('settingoption1').style.boxShadow='0px 5px 10px 0 rgb(0, 17, 255)';
        document.getElementById('settingoption1').style.backgroundColor='rgba(255, 255, 255, 0.849)';
        document.getElementById(`settingpalet${i+1}`).style.opacity='1';
        document.getElementById('settingpalet1').style.left='0px';

        setting_option_key_remove(0);
    }
    else if(setting_key_active==1){
        document.getElementById('settingoption2').style.borderBottom='1px solid rgba(76, 63, 255, 0.767)';
        document.getElementById('settingoption2').style.boxShadow='0px 5px 10px 0 rgb(0, 17, 255)';
        document.getElementById('settingoption2').style.backgroundColor='rgba(255, 255, 255, 0.849)';
        document.getElementById(`settingpalet${i+1}`).style.opacity='1';
        document.getElementById('settingpalet2').style.left='0px';

        setting_option_key_remove(1);
    }
    else{
        document.getElementById('settingoption3').style.borderBottom='1px solid rgba(76, 63, 255, 0.767)';
        document.getElementById('settingoption3').style.boxShadow='0px 5px 10px 0 rgb(0, 17, 255)';
        document.getElementById('settingoption3').style.backgroundColor='rgba(255, 255, 255, 0.849)';
        document.getElementById(`settingpalet${i+1}`).style.opacity='1';
        document.getElementById('settingpalet3').style.left='0px';

        setting_option_key_remove(2);
    }


})}
}




function setting_option_key_remove(num){
    for(let i=0;i<3;i++){
    if(i==num){continue;}   
    document.getElementById(`settingoption${i+1}`).style.borderBottom='';
    document.getElementById(`settingoption${i+1}`).style.boxShadow='';
    document.getElementById(`settingoption${i+1}`).style.backgroundColor='';
    document.getElementById(`settingpalet${i+1}`).style.opacity='0';
    document.getElementById(`settingpalet${i+1}`).style.left='100px';
    
    
}
}



// ----------------------------------setting content edit---------------------------------


// document.getElementById(`editbtn6`).addEventListener('click' , function(){

// })


for(let i=1;i<=5;i++){
    


    if(i==4){continue;}
document.getElementById(`editbtn${i}`).addEventListener('click' , function(){
    let now_login=localStorage.getItem('userlogined');
    let num=i;
           document.getElementById('blurbg').style.visibility='visible';
           document.getElementById('passcheck').style.visibility='visible';
           document.getElementById('passbtne').innerHTML=`<div class="psbtn" id="passbtn${i}">Continue</div>`;
           document.getElementById(`passbtn${i}`).addEventListener('click' , function(){
               if(document.getElementById('passin').value==localStorage.getItem(`passward${now_login}`)){

                edit(i); 
            }
            else{
                document.getElementById('invcre').style.visibility='visible';
                document.getElementById('passin').value='';

                setTimeout(function(){
                document.getElementById('invcre').style.visibility='hidden';

                },3000)
            }
                
               
        })
    })
}

document.getElementById(`passbtn2`).addEventListener('click' , function(){
    document.getElementById('blurbg').style.visibility='hidden';
    document.getElementById('passcheck').style.visibility='hidden';
    document.getElementById('blurbg2').style.visibility='hidden';
    document.getElementById('invcre').style.visibility='hidden';

})


document.getElementById(`edbtn2`).addEventListener('click' , function(){
    document.getElementById('blurbg').style.visibility='hidden';
    document.getElementById('blurbg2').style.visibility='hidden';
    document.getElementById('editbox1').style.visibility='hidden';
})
// -----------------------------------------edit function------------------------

let name_check_1=false;
let lastname_check_1=false;
let email_check_1=false;
let dob_check_1=false;



function edit(num){
    let now_login=localStorage.getItem('userlogined');
    document.getElementById('passin').value='';

    document.getElementById('edbtnt').innerHTML=`<div class="psbtn" id="edbtn${num}">Edit</div>`;
    if(num==3){ document.getElementById('edbody').innerHTML=`<input type='date' id="contentin" class="txtenter"
    max="2013-01-01" value="1997-10-29">`}

    
    else{document.getElementById('edbody').innerHTML=`<input type="text" spellcheck="false" id="contentin"></input>`}
    

     if(num==1) {document.getElementById('edname').innerHTML=`Enter Name`}
        if(num==2) {document.getElementById('edname').innerHTML=`Enter Last Name`}
        if(num==3) {document.getElementById('edname').innerHTML=`Date Of Birth`}
        if(num==5) {document.getElementById('edname').innerHTML=`Enter email`}


    document.getElementById('passcheck').style.visibility='hidden';
    document.getElementById('editbox1').style.visibility='visible';
    document.getElementById(`edbtn${num}`).addEventListener('click' , function(){
       

        if(num==1) {check_alfa('contentin' , 2);}
        if(num==2) {check_alfa('contentin' , 3);}
        if(num==3) {}
        if(num==5) {check_mail('contentin');}

        
       if(num==1 && name_check_1) {localStorage.setItem( `name${user}`, `${document.getElementById('contentin').value}`),alert_box(`Name Edited Successfully`,'rgb(21, 255, 0)')}
       if(num==2 && lastname_check_1) {localStorage.setItem( `lastname${user}`, `${document.getElementById('contentin').value}`),alert_box(`Last Name Edited Successfully`,'rgb(21, 255, 0)')}
       if(num==3) {localStorage.setItem( `dob${user}`, `${document.getElementById('contentin').value}`),alert_box(`Date of Birth Edited Successfully`,'rgb(21, 255, 0)')}
       if(num==5 && email_check_1) {localStorage.setItem( `email${user}`, `${document.getElementById('contentin').value}`),alert_box(`Email Edited Successfully`,'rgb(21, 255, 0)')}
       setUserData(now_login);
       document.getElementById('editbox1').style.visibility='hidden';
       document.getElementById('blurbg').style.visibility='hidden';
       document.getElementById('contentin').value='';


    })

}


// ------------------------------check pass------------------------


// ----------------------------------login page---------------------------------
let logintogal=true;

document.getElementById('pagehead1').addEventListener('click' , function(){

    if(logintogal){
        login_div_out();
        logintogal=false;
    }


    else{
        logintogal=true;
        login_div_in();}
    })
    

function login_div_out(){
    document.getElementById('page2').style.visibility='hidden';    
    document.getElementById('page1').style.height='300px';
    document.getElementById('page1').style.backgroundColor='rgba(230, 230, 230,0.8)';

}
function login_div_in(){
    document.getElementById('page2').style.visibility='visible';    
    document.getElementById('page1').style.height='50px';
    document.getElementById('page1').style.backgroundColor='white';
}



// ----------------------------------register page---------------------------------


let registertogal=true;

document.getElementById('pagehead2').addEventListener('click' , function(){

    if(registertogal){
    document.getElementById('page1').style.visibility='hidden';    
    document.getElementById('page2').style.height='500px';
    document.getElementById('page2').style.backgroundColor='rgba(230, 230, 230,0.8)';

    registertogal=false;

}
    else{
    document.getElementById('page1').style.visibility='visible';    
    document.getElementById('page2').style.height='50px';
    document.getElementById('page2').style.backgroundColor='white';

    registertogal=true;}
})


// ----------------------------------register mathod---------------------------------

let name_check=false;
let lastname_check=false;
let mail_check=false;
let dob_check=false;
let pass_check=false;


document.getElementById('regbtn').addEventListener('click' , function(){
    check_alfa('nametxt')
    check_alfa('lastnametxt')
    check_mail('emailid')
    check_pass('newpassward')
    check_dob('dateofbirth')
    register('nametxt' , 'lastnametxt', 'emailid', 'newpassward','dateofbirth')
    

})


// -------------------------------------name alfa check logic-----------------------------------------


function check_alfa(alfa,no=1){

        let namein=document.getElementById(alfa).value;
        let notall=/[^a-zA-Z]/g;
        let incl=namein.match(notall);
        if(incl!=null || namein.length<1){
            alert_box('Enter proper Name/Lastname' , 'rgba(255, 0, 0, .7)')
            document.getElementById(alfa).style.border='1px solid red';
            backnormal(alfa);
            incl=null;
            if(alfa=='nametxt' && no==1){name_check=false;}
            if(alfa=='lastnametxt' && no==1){lastname_check=false;}
            if(alfa=='contentin' && no==2){name_check_1=false;}
            if(alfa=='contentin' && no==3){lastname_check_1=false;}

            
        }
       else{if(alfa=='nametxt' && no==1){name_check=true;}
       if(alfa=='lastnametxt' && no==1){lastname_check=true;}
       if(alfa=='contentin' && no==2){name_check_1=true;}
       if(alfa=='contentin' && no==3){lastname_check_1=true;}
    } 
}

// -------------------------------------mail id check logic-----------------------------------------


function check_mail(mail){
    let alredyRegister=false;
    for(let i=1;i<=localStorage.getItem('userCount');i++){
     if((document.getElementById(mail).value).toLowerCase()==localStorage.getItem(`email${i}`)){alredyRegister=true;break;}


    }
    let namein1=document.getElementById(mail).value;
    let notall1=/[@.]/g;
    let arr=namein1.match(notall1);
    let setv=new Set(arr)
    let incl1=Array.from(setv)
    if(incl1==null || incl1.length!=2 || namein1.length<5 || alredyRegister){
        if(alredyRegister){alert_box('Email id alrady present' , 'rgba(255, 0, 0, .7)');}
        else{alert_box('Enter proper email' , 'rgba(255, 0, 0, .7)');}
        document.getElementById(mail).style.border='1px solid red'
        incl1=null
        backnormal(mail)

        if(mail=='contentin' ){email_check_1=false;}
        if(mail==`emailid`){mail_check=false;}
    }
    else{if(mail==`emailid`){mail_check=true};
    if(mail=='contentin' ){email_check_1=true;}
    

}
    
}

// -------------------------------passward checkers-----------------------------



function check_pass(pass){
    let namein1=document.getElementById(pass).value;
    let notall1=/[a-z]/g;
    let notall2=/[A-Z]/g;
    let notall3=/[0-9]/g;
    let notall4=/[)!(@*#&$^%?><.=+_)]/g;
    let incl1=namein1.match(notall1);
    let incl2=namein1.match(notall2);
    let incl3=namein1.match(notall3);
    let incl4=namein1.match(notall4);
    if(incl1==null || incl2==null || incl3==null  || incl4==null  || namein1.length<8 ){
        alert_box('Passward example Rahul@123' , 'rgba(255, 0, 0, .7)')
        document.getElementById(pass).style.border='1px solid red'
        incl1=null
        incl2=null
        incl3=null
        incl4=null
        backnormal(pass)
        pass_check=false;
    }
    else{if(pass=='newpassward'){pass_check=true};
    if(pass=='newpassch1'){changepassfunc();}

    }

    
}


// -------------------------------DOB checkers-----------------------------

function check_dob(dob){
    let namein1=document.getElementById(dob).value;
    if(namein1==null || namein1==''){
        alert_box('Enter proper DOB' , 'rgba(255, 0, 0, .7)')
        document.getElementById(dob).style.border='1px solid red';
        backnormal(dob);
        dob_check=false;
    }
    else{dob_check=true;}
}



// -------------------------------back normal function for checkers-----------------------------



function backnormal(id1){
    setTimeout(function(){
    document.getElementById(id1).style.border='1px solid black';
    } , 3000);


}


// -------------------------------register-----------------------------


function register(name , lastname, email, passward,dateofbirth){

    if(name_check && lastname_check && dob_check && pass_check && mail_check){userCount();
        document.getElementById('loder').style.width='200px';
        document.getElementById('regtxt').style.display='none';
        setTimeout(function(){document.getElementById('tick').style.display='flex';} , 1400)
        
    };
    setTimeout(function(){
    if(name_check && lastname_check && dob_check && pass_check && mail_check){
        
        let userNo=localStorage.getItem('userCount');
        localStorage.setItem(`name${userNo}` , document.getElementById(name).value)
        localStorage.setItem(`lastname${userNo}` , document.getElementById(lastname).value)
        localStorage.setItem(`email${userNo}` , (document.getElementById(email).value).toLowerCase())
        localStorage.setItem(`passward${userNo}` , document.getElementById(passward).value)
        localStorage.setItem(`dob${userNo}` , document.getElementById(dateofbirth).value)
        



        document.getElementById(name).value=''
        document.getElementById(lastname).value=''
        document.getElementById(email).value=''
        document.getElementById(passward).value=''
        document.getElementById(dateofbirth).value=''





        if(wantlogin){localStorage.setItem('logedIn' , 'yes')}
        
        
        setUserData(userNo);

        setTimeout(function(){
            remove_login_page()
            document.getElementById('loder').style.width='0px';
             document.getElementById('regtxt').style.display='flex';
             document.getElementById('tick').style.display='none';
            

        },1000);
    }
} , 1000);

}


// -----------------------------------------set user data-------------------------------------






function setUserData(user){
    localStorage.setItem('userlogined' , user)
    userlogin1=user;

    

    if((localStorage.getItem(`oldid${user}`)==null)){localStorage.setItem(`oldid${user}` , `0`)}
    if((localStorage.getItem(`cardid${user}`))){cardid=JSON.parse((localStorage.getItem(`cardid${user}`)))}





    
    if(localStorage.getItem(`heading${user}`)){
        headings=JSON.parse(localStorage.getItem(`heading${user}`));
        notes=JSON.parse(localStorage.getItem(`note${user}`));
    
    }
    else{
        headings=[];
        notes=[];
    }

    document.getElementById('maindivin').innerHTML=''
    addnote2(2)
    let name=localStorage.getItem(`name${user}`);
    let lastname=localStorage.getItem(`lastname${user}`);
    let email=localStorage.getItem(`email${user}`);
    let passward=localStorage.getItem(`passward${user}`);
    let dob=localStorage.getItem(`dob${user}`);
    document.getElementById('username').innerHTML=name;
    document.getElementById('usersurname').innerHTML=lastname;
    document.getElementById('dob6').innerHTML=dob;
    document.getElementById('gmail').innerHTML=email;
    default_color()
    web_bg_color(user , localStorage.getItem(`web_clr${user}`))
    if(localStorage.getItem(`menu_clr${user}`)){menu_bg_color(user , localStorage.getItem(`menu_clr${user}`))}
    else{menu_bg_color(user , '#00eeff')};
    if(localStorage.getItem(`bgpic${user}`)){if(localStorage.getItem(`bgpic${user}`)=='on'){auto_change_on(1);}else{auto_change_off(1)}}
    else{localStorage.setItem(`bgpic${user}` , 'off') ; auto_change_off(1)}

    let dob_1=localStorage.getItem(`dob${user}`).replaceAll('-' , ',');
    let dob_mil=new Date(dob_1).getTime();
    let age=((Date.now()-dob_mil)/31104000000).toFixed(2);
    localStorage.setItem(`age${user}` , `${age}`)
    document.getElementById('age').innerHTML=`${age}`
    if(localStorage.getItem(`dates${userlogin1}`)){
        dates=JSON.parse(`${localStorage.getItem(`dates${userlogin1}`)}`);
    }
  

}


// -------------------------------user count-----------------------------

function userCount(){
    if(localStorage.userCount){localStorage.userCount=Number(localStorage.userCount)+1}
    else {localStorage.userCount=1;}
}

// -------------------------------login btn-----------------------------

document.getElementById('loginbtn').addEventListener('click' , function(){
    logIn('loginid' , "passward")
})






// -------------------------------login mathod-----------------------------

function logIn(lin,pass_in){
    let userlogin=0;
for(let i=1;i<=localStorage.getItem('userCount');i++){
    if((document.getElementById(lin).value).toLowerCase()==localStorage.getItem(`email${i}`)){userlogin=i;break;}
}
    
    if(userlogin==0){
        document.getElementById(lin).value='';
        document.getElementById(pass_in).value='';
        document.getElementById(lin).style.border='1px solid red';
        document.getElementById(pass_in).style.border='1px solid red';
        document.getElementById('loginnote').style.visibility='visible';
        remove_invalid()
        backnormal(lin);
        backnormal(pass_in);
    }    
    
    

    if(document.getElementById(pass_in).value==localStorage.getItem(`passward${userlogin}`)){
        setUserData(userlogin);
        if(wantlogin1){localStorage.setItem('logedIn1' , 'yes')};
        remove_login_page()
    }
    else{

        document.getElementById(lin).value='';
        document.getElementById(pass_in).value='';
        document.getElementById(lin).style.border='1px solid red';
        document.getElementById(pass_in).style.border='1px solid red';
        document.getElementById('loginnote').style.visibility='visible';
        remove_invalid()
        backnormal(lin);
        backnormal(pass_in);
    }
}

function remove_invalid(){
    setTimeout(
    function(){document.getElementById('loginnote').style.visibility='hidden'} , 3000);

}


// -------------------------------------apply btn---------------------------------------



document.getElementById('genapply').addEventListener('click' , function(){
    let userno=localStorage.getItem(`userlogined`)
    web_bg_color(userno,  document.getElementById('webcolor').value)
    menu_bg_color(userno,  document.getElementById('menucolor').value)
    alert_box('Setting Saved','yellow')
})

// ----------------------------------------menu color change---------------------------------

function menu_bg_color(userno,chooseColor1){
    if(localStorage.getItem(`menu_clr${userno}`)){
        localStorage.setItem(`menu_clr${userno}` , `${chooseColor1}`);
        let savedcolor=localStorage.getItem(`menu_clr${userno}`);
        document.getElementById('menucolor').value=`${savedcolor}`
        document.querySelector(':root').style.setProperty('--menu_color' , `${savedcolor}`)
        
    }
    else{
        let chooseColor=document.getElementById('menucolor').value;
        localStorage.setItem(`menu_clr${userno}` , `${chooseColor}`);
        document.querySelector(':root').style.setProperty('--menu_color' , `${chooseColor1}`)
        

    }
}


// ---------------------------------------------web bg color-------------------------------





function web_bg_color(userno,chooseColor1){
    if(localStorage.getItem(`web_clr${userno}`)){
        localStorage.setItem(`web_clr${userno}` , `${chooseColor1}`);
        let savedcolor=localStorage.getItem(`web_clr${userno}`);
        document.getElementById('webcolor').value=`${savedcolor}`
        document.getElementById('maindiv').style.backgroundColor=`${savedcolor}`
        document.body.style.backgroundColor=`${savedcolor}`
        document.querySelector(':root').style.setProperty('--menu_hover_color' , `${savedcolor}`)
        
    }
    else{
        let chooseColor=document.getElementById('webcolor').value;
        localStorage.setItem(`web_clr${userno}` , `${chooseColor}`);
        document.getElementById('maindiv').style.backgroundColor=`${chooseColor}`
        document.body.style.backgroundColor=`${chooseColor}`
        document.querySelector(':root').style.setProperty('--menu_hover_color' , `${chooseColor}`)
        

    }
}


// ---------------------------------default color-----------------------------------------
function default_color(){
    document.getElementById('webcolor').value='#ffffff';
    document.getElementById('menucolor').value='#00eeff';
    
}


// ---------------------------------default key-----------------------------------------

document.getElementById('defaulset').addEventListener('click' , function(){
    confirm_box('Are you sure?',1)
    
})

function default_key(){

    document.getElementById('blurbg').style.visibility='visible';
           document.getElementById('passcheck').style.visibility='visible';
           document.getElementById('passbtne').innerHTML=`<div class="psbtn" id="passbtn${10}">Continue</div>`;
           document.getElementById(`passbtn${10}`).addEventListener('click' , function(){
               if(document.getElementById('passin').value==localStorage.getItem(`passward${user_login}`)){

                let userno=localStorage.getItem('userlogined')
                document.getElementById('webcolor').value='#ffffff';
                document.getElementById('menucolor').value='#00eeff';
                web_bg_color(userno,'#ffffff')
                menu_bg_color(userno,'#00eeff')
                auto_change_off(1)
                document.getElementById('blurbg').style.visibility='hidden';
                document.getElementById('passcheck').style.visibility='hidden';
                document.getElementById('passin').value='';
                alert_box('Default Setting Done','rgb(0, 255, 21)')
            }
            else{
                document.getElementById('invcre').style.visibility='visible';
                document.getElementById('passin').value='';

                setTimeout(function(){
                document.getElementById('invcre').style.visibility='hidden';

                },3000)
            }
                
               
        })
    
}



// ----------------------------------auto color change----------------------------


function auto_change_on(on){
    if(on==1){
        user=localStorage.getItem('userlogined');
        document.getElementById(`keycircle${on}`).style.left='25px';
        document.getElementById(`keycircle${on}`).style.backgroundColor='blue';
        document.getElementById(`keyline${on}`).style.backgroundColor='blue';
        document.getElementById('webclrdiv').style.opacity='.5';
        document.getElementById('webclrdiv').style.zIndex='0';
        document.getElementById('maindiv').style.backgroundImage='url(https://source.unsplash.com/user/wsanter)';
        document.getElementById('maindiv').style.backgroundSize='cover';
        document.body.style.backgroundColor='white';
        localStorage.setItem(`bgpic${user}` , 'on');
        bgtogal[1]=true;
    }

    if(on==2){
        user=localStorage.getItem('userlogined');
        document.getElementById(`keycircle${on}`).style.left='25px';
        document.getElementById(`keycircle${on}`).style.backgroundColor='blue';
        document.getElementById(`keyline${on}`).style.backgroundColor='blue';
       
        
        bgtogal[2]=true;
    }

    if(on==3){
        user=localStorage.getItem('userlogined');
        document.getElementById(`keycircle${on}`).style.left='25px';
        document.getElementById(`keycircle${on}`).style.backgroundColor='blue';
        document.getElementById(`keyline${on}`).style.backgroundColor='blue';
      
        
        bgtogal[3]=true;
    }

}


function auto_change_off(off){
    if(off==1){
        document.getElementById(`keycircle${off}`).style.left='0px';
        document.getElementById(`keycircle${off}`).style.backgroundColor='gray';
        document.getElementById(`keyline${off}`).style.backgroundColor='gray';
        user=localStorage.getItem('userlogined');
        document.getElementById('webclrdiv').style.opacity='1';
        document.getElementById('webclrdiv').style.zIndex='2';
        document.getElementById('maindiv').style.backgroundImage='';
        web_bg_color(user , localStorage.getItem(`web_clr${user}`))
        localStorage.setItem(`bgpic${user}` , 'off');
        bgtogal[1]=false;

    }


    if(off==2){
        document.getElementById(`keycircle${off}`).style.left='0px';
        document.getElementById(`keycircle${off}`).style.backgroundColor='gray';
        document.getElementById(`keyline${off}`).style.backgroundColor='gray';
        user=localStorage.getItem('userlogined');
    
        bgtogal[2]=false;

    }


    if(off==3){
        document.getElementById(`keycircle${off}`).style.left='0px';
        document.getElementById(`keycircle${off}`).style.backgroundColor='gray';
        document.getElementById(`keyline${off}`).style.backgroundColor='gray';
        user=localStorage.getItem('userlogined');
        
        
       
        bgtogal[3]=false;

    }
}

// -------------------------card blur-------------------------------------------------




function blurthecard(){
    for(let i=0;i<headings.length; i++){
        document.getElementById(`noteblr${i}`).style.filter='blur(5px)';
        
}

}


function removetheblur(){
    for(let i=0;i<headings.length; i++){
        document.getElementById(`noteblr${i}`).style.filter='blur(0px)';
        
}

}
// ------------------------------------apply btn security-----------------------

document.getElementById('applybtnpt3').addEventListener('click' , function(){
    
        let now_login=localStorage.getItem('userlogined');
        
               document.getElementById('blurbg').style.visibility='visible';
               document.getElementById('passcheck').style.visibility='visible';
               document.getElementById('passbtne').innerHTML=`<div class="psbtn" id="passbtnapply">Continue</div>`;
               document.getElementById(`passbtnapply`).addEventListener('click' , function(){
                   if(document.getElementById('passin').value==localStorage.getItem(`passward${now_login}`)){
                    document.getElementById('passin').value='';
                    if(bgtogal[2]){localStorage.setItem(`blurcard${user}` , 'on');blurthecard();}
                    else{localStorage.setItem(`blurcard${user}` , 'off');removetheblur();}
                    if(bgtogal[3]){localStorage.setItem(`blurcardcont${user}` , 'on');}
                    else{localStorage.setItem(`blurcardcont${user}` , 'off')}
                    blurarea()
                    alert_box('Setting Saved','yellow')
                    document.getElementById('blurbg').style.visibility='hidden';
                    document.getElementById('blurbg2').style.visibility='hidden';
                    document.getElementById('passcheck').style.visibility='hidden';
                }
                else{
                    document.getElementById('invcre').style.visibility='visible';
                    document.getElementById('passin').value='';
    
                    setTimeout(function(){
                    document.getElementById('invcre').style.visibility='hidden';
    
                    },3000)
                }
                    
                   
            })
        })
   

// -------------------------------------alert box---------------------------------
function alert_box(txt,color){

    document.getElementById('alertcancelbtn').addEventListener('click' , function(){document.getElementById('alertbox').style.left=`-500px`});
    document.getElementById('alerttxt').innerHTML=`${txt}`;
    document.getElementById('alertbox').style.backgroundColor=`${color}`;
    document.getElementById('alertbox').style.left=`5px`;
    setTimeout(function(){
    document.getElementById('alertbox').style.left=`-500px`

    },5000);
}

// -------------------------------------confirm box---------------------------------

function confirm_box(txt,cnfID){

    document.getElementById('confermtxt').innerHTML=`${txt}`;
    document.getElementById('confermbox').style.visibility='visible';
    document.getElementById('yesbtn').addEventListener('click' , function(){
        if(cnfID==1){default_key()}
        if(cnfID==2){carddlt()}

        document.getElementById('confermbox').style.visibility='hidden'

    })

    document.getElementById('nobtn').addEventListener('click' , function(){
        document.getElementById('confermbox').style.visibility='hidden'

    })
}




// --------------------------------add note-----------------------------------------


document.getElementById('addnotebox').addEventListener('click' , function(){
  
    document.getElementById('uptxt').style.visibility='visible';
    document.getElementById('uptxt').style.height='500px';    

}) 


document.getElementById('options2').addEventListener('click' , function(){
    noexpand() 
    document.getElementById('uptxt').style.visibility='visible';
    document.getElementById('uptxt').style.height='500px';
})

document.getElementById('addclose').addEventListener('click' , function(){
    document.getElementById('uptxt').style.height='0px';
    document.getElementById('uptxt').style.visibility='hidden';

})
document.getElementById('btnad').addEventListener('click' , function(){
   
    let headingin=document.getElementById('addheadingtxt').value;
    let notein=document.getElementById('addcontenttxt').value;
    alert_box('Note Add Successfully','rgb(21, 255, 0)')

   
    if(headingin!='' && notein!=''){
    
    let today=new Date();
    let month=today.getMonth()+1
    let year=today.getFullYear()
    let date=today.getDate()

    let hours=addzero(today.getHours());
    let minute=addzero(today.getMinutes());
    let sec=addzero(today.getSeconds());

    let currentDate=`${date}/${month}/${year} || ${hours}:${minute}:${sec}`;
    let currentDate1=currentDate.toString();
    dates.push(currentDate1)
    let dates1=JSON.stringify(dates)
    localStorage.setItem(`dates${userlogin1}`,`${dates1}`)

   



    addnote1(headingin,notein);


   
    let oldid=localStorage.getItem(`oldid${userlogin1}`)
    let cdid=parseInt(oldid)+1;
    cardid.push(cdid)
    let cdidjson=JSON.stringify(cardid);
    localStorage.setItem(`cardid${userlogin1}` , `${cdidjson}`)
    localStorage.setItem(`oldid${userlogin1}` , `${cdid}`)


    document.getElementById('addheadingtxt').value='';
    document.getElementById('addcontenttxt').value='';
    document.getElementById('uptxt').style.height='0px';
    document.getElementById('uptxt').style.visibility='hidden';}
    else{
        if(headingin==''){alert_box('Please add heading','red')}
        else{alert_box('Please add note','red')};
    }
    

})







function addnote1(heading,note){
    let now_login=localStorage.getItem('userlogined');
    headings.push(heading);
    notes.push(note);
    let headToSave=JSON.stringify(headings);
    let noteToSave=JSON.stringify(notes);
    localStorage.setItem(`heading${now_login}` , `${headToSave}`);
    localStorage.setItem(`note${now_login}` , `${noteToSave}`);
    addnote2(1);
}


function addnote2(no){
    let now_login=localStorage.getItem('userlogined');

    if(localStorage.getItem(`heading${now_login}`)){
    let heads=localStorage.getItem(`heading${now_login}`)
    let notes1=localStorage.getItem(`note${now_login}`)
    let headarr=JSON.parse(heads)
    let notearr=JSON.parse(notes1)
    headings=headarr;
    notes=notearr;
    let HTML=document.getElementById('maindivin').innerHTML;
    
    
    for(let i=0;i<headarr.length;i++){
    

    document.getElementById('maindivin').innerHTML=`${HTML}`+`
    <div class="card cardid${cardid[i]}" id='card${i}' draggable="true">
    
    <div class="cardno"><div class="noteno">${i+1}</div></div>
    <div class="cardhead">${headarr[i]}</div>
    <div class="cardcontent" id='noteblr${i}'>${notearr[i]}</div>
    <div class="cardbtn"><div class="notebtn" id='notebtn${i}${now_login}'>open</div></div>
    </div>
    <div id='centergap${i}' class='centergap'>
    <div id='centergapin${i}' class='centergapin'></div>
    <div id='centergapin${i+10000000}' class='centergapin'></div>
    </div>
     `
     
     ;if(no==2){HTML=document.getElementById('maindivin').innerHTML};

    if(i>5){document.getElementById('maindivin').style.overflowX ='scroll'}
     else{document.getElementById('maindivin').style.overflowX ='hidden'}


    


    
}


dragstarting()
cardmoving()
openbtn();
changecardclr();
if(localStorage.getItem(`blurcard${user_login}`)){
    if(localStorage.getItem(`blurcard${user_login}`)==`on`){blurthecard();auto_change_on(2);}
    else{removetheblur();auto_change_off(2);}
}
}
else{document.getElementById('maindivin').innerHTML=''}

}


// ----------------------------------------------------read more-------open btn-----------------------

if(localStorage.getItem(`blurcardcont${user_login}`)){
    if(localStorage.getItem(`blurcardcont${user_login}`)=='on'){auto_change_on(3)}
}





document.getElementById('cansbtn').addEventListener('click' , function(){
    document.getElementById('opennote1').style.display='none';
    document.getElementById('blurbg1').style.visibility='hidden'

})


// ---------------------------------open btn------------------------------------------------




function openbtn(){
    for(let i=0;i<headings.length;i++){
        
        let now_login=localStorage.getItem('userlogined');
        

    document.getElementById(`notebtn${i}${now_login}`).addEventListener('click' , function(){
        cardopened=i;
        let user=localStorage.getItem('userlogined')
        if(localStorage.getItem(`blurcardcont${user}`)){
            if(localStorage.getItem(`blurcardcont${user}`)=='on'){blurarea() }
        }
        else{
            document.getElementById('cont').style.filter='blur(0px)';

        }

        document.getElementById('opennote1').style.display='flex';
        document.getElementById('dates').innerHTML=`${dates[i]}`;
        document.getElementById('hedbox1').innerHTML=`${headings[i]}`;
        document.getElementById('numbox').innerHTML=`${i+1}`;
        document.getElementById('cont').innerHTML=`${notes[i]}`;
        document.getElementById('blurbg1').style.visibility='visible'
        changefavclr();
        
            
    })
}}

// -------------------------------------delete note-----------------------------------------------





document.getElementById('opennoteoption1').addEventListener('click' , function(){confirm_box('If delete cant restore again ',2)})
function carddlt(){
    if(cardopened!=null){
    if(favcardid.includes(cardid[cardopened])){
        let index1=favcardid.indexOf(cardid[cardopened]);
        favcardid.splice(index1 , 1);
        let favoritelist1=JSON.stringify(favcardid)
        localStorage.setItem('favid' , favoritelist1)
    }



    


    
    document.getElementById('blurbg1').style.visibility='hidden'
    let now_login=localStorage.getItem('userlogined');
    console.log(1);
    headings.splice((cardopened),1);
    notes.splice((cardopened),1);
    dates.splice((cardopened),1);
    cardid.splice((cardopened),1);
    
    let headToSave=JSON.stringify(headings);
    let noteToSave=JSON.stringify(notes);
    let cardidjs=JSON.stringify(cardid);
    let datesjs=JSON.stringify(dates);
    localStorage.setItem(`cardid${now_login}` , `${cardidjs}`);

    localStorage.setItem(`heading${now_login}` , `${headToSave}`);
    localStorage.setItem(`note${now_login}` , `${noteToSave}`);
    localStorage.setItem(`dates${now_login}` , `${datesjs}`);
    document.getElementById('maindivin').innerHTML='';
    document.getElementById('opennote1').style.display='none';
    addnote2(2);
    alert_box('Note Removed Successfully','rgb(217, 255, 0)')
    cardopened=null;}

}




// ---------------------------------------edit box-----------------------------------------------------


document.getElementById('opennoteoption2').addEventListener('click' , function(){
    edit1(cardopened)

}) 

function edit1(no){
    
    document.getElementById('opennote1').style.display='none';
    document.getElementById('edittxt').style.visibility='visible';
    document.getElementById('edittxt').style.height='500px'; 
    document.getElementById('editheadingtxt').value=headings[no];
    document.getElementById('editcontenttxt').value=notes[no];
    document.getElementById('editbtnad').addEventListener('click' , editnow) ;
}

document.getElementById('editclose').addEventListener('click' , function(){
    document.getElementById('edittxt').style.height='0px';
    document.getElementById('edittxt').style.visibility='hidden';
    document.getElementById('blurbg1').style.visibility='hidden'
    document.getElementById('editbtnad').removeEventListener('click' ,editnow) ;
    

})



function editnow(){
    let no=cardopened;
    let now_login=localStorage.getItem('userlogined');
    document.getElementById('blurbg1').style.visibility='hidden'
    document.getElementById('edittxt').style.height='0px'; 
        document.getElementById('edittxt').style.visibility='hidden';
        headings[no]=document.getElementById('editheadingtxt').value;
        notes[no]=document.getElementById('editcontenttxt').value;
        
        let headToSave=JSON.stringify(headings);
    let noteToSave=JSON.stringify(notes);
    localStorage.setItem(`heading${now_login}` , `${headToSave}`);
    localStorage.setItem(`note${now_login}` , `${noteToSave}`);
    document.getElementById('editheadingtxt').value='';
    document.getElementById('editcontenttxt').value='';
    document.getElementById('maindivin').innerHTML='';
    alert_box('Note Edited Successfully','rgb(21, 255, 0)')
    addnote2(2);
}



// ---------------------------------------favorite-----------------------------------------------------





document.getElementById('opennoteoption3').addEventListener('click' ,function(){
    
    if(favcardid.includes(cardid[cardopened])){
        let index1=favcardid.indexOf(cardid[cardopened]);
        favcardid.splice(index1 , 1);
        changefavclr();
        changecardclr();
    }



    else{
    favcardid.push(cardid[cardopened]);
    let favidsave=JSON.stringify(favcardid);
    localStorage.setItem('favid' , favidsave);
    changefavclr();
    changecardclr();
    }
} ) 


function changefavclr(){
    if(favcardid.includes(cardid[cardopened])) {document.getElementById('opennoteoption3').style.backgroundColor='rgb(255, 0, 0)';}
    else{document.getElementById('opennoteoption3').style.backgroundColor='rgb(38, 0, 255)';}
}

function changecardclr(){
    let favsave=JSON.stringify(favcardid);
    localStorage.setItem('favid' , favsave);
    for(let i=0;i<headings.length;i++){
    if(favcardid.includes(cardid[i])){document.getElementById(`card${i}`).style.background='linear-gradient(to bottom ,rgba(173, 0, 0, 0.9),rgba(255, 44, 44, 0.9)) '}
    else{document.getElementById(`card${i}`).style.background='linear-gradient(to bottom ,rgba(0, 55, 173,.9),rgba(44, 135, 255,.9)) '}
    }
}


// ---------------------------------------open pass---------------------------------------

function blurarea(){
    document.getElementById('cont').style.filter='blur(5px)';
    let now_login=localStorage.getItem('userlogined');
        
               document.getElementById('blurbg').style.visibility='visible';
               document.getElementById('blurbg2').style.visibility='visible';
               document.getElementById('passcheck').style.visibility='visible';
               document.getElementById('passbtne').innerHTML=`<div class="psbtn" id="passbtnblur">Continue</div>`;
               document.getElementById(`passbtnblur`).addEventListener('click' , function(){
                   if(document.getElementById('passin').value==localStorage.getItem(`passward${now_login}`)){
    
                     document.getElementById('passin').value='';
                    
                     document.getElementById('cont').style.filter='blur(0px)';
                    
                    
                    
                    document.getElementById('blurbg2').style.visibility='hidden';
                    document.getElementById('blurbg').style.visibility='hidden';
                    document.getElementById('passcheck').style.visibility='hidden';
                }
                else{
                    document.getElementById('invcre').style.visibility='visible';
                    document.getElementById('passin').value='';
    
                    setTimeout(function(){
                    document.getElementById('invcre').style.visibility='hidden';
    
                    },3000)
                }
                    
                   
            })
        }

// --------------------------------------------------search box-------------------------------------------


let searchl=true;

document.getElementById('serch').addEventListener('click' , function(){
    if(searchl){
        document.getElementById('searchbox').style.visibility='visible';
        document.getElementById('searchbox').style.height='550px';
        document.getElementById('searchlogo1').innerHTML='cancel';
        document.getElementById('searchlogo1').style.color='red';
        favindex=cardid;
        searchlistnotes=notes;
        searchlistheads=headings;
        addnotesearch(4)
        searchl=false;
    }

    else{
        document.getElementById('searchcards').innerHTML=''
        document.getElementById('searchbox').style.visibility='hidden';
        document.getElementById('searchbox').style.height='0px';
        document.getElementById('searchlogo1').innerHTML='search';
        document.getElementById('searchlogo1').style.color='black';
        document.getElementById('maindivin').innerHTML='';
        document.getElementById('searchtxt').value='';
        document.getElementById('category').innerHTML='Select Category';
        document.getElementById('filterapplyed').innerHTML='Filter';

        searchlistnotes=notes;
        searchlistheads=headings;
        addnote2(2)
        searchl=true;
    }

})




let cattogal=true;
document.getElementById('category').addEventListener('click' , function(){

    if(cattogal){
        opendraw();
        cattogal=false;
    }

    else{
        closedraw();
        cattogal=true;

    }

})


document.getElementById('cat2').addEventListener('click' , function(){

    if(cattogal){
        opendraw();
        cattogal=false;
    }

    else{
        closedraw();
        cattogal=true;

    }

})




function opendraw(){
    document.getElementById('searchcatbox').style.visibility='visible';
    document.getElementById('searchcatbox').style.height='100px';
    document.getElementById('expandlogo').innerHTML='expand_less';
}

function closedraw(){
     document.getElementById('searchcatbox').style.visibility='hidden';
        document.getElementById('searchcatbox').style.height='0px';
        document.getElementById('expandlogo').innerHTML='expand_more';
}

// ---------------------------------------catagory-----------------------------------------


document.getElementById('catbox1').addEventListener('click' , function(){
    
    closedraw();
    cattogal=true;
    document.getElementById('category').innerHTML='Notes';

})


document.getElementById('catbox2').addEventListener('click' , function(){
    closedraw();
    cattogal=true;
    document.getElementById('category').innerHTML='Headings';

})


document.getElementById('catbox3').addEventListener('click' , function(){
    closedraw();
    cattogal=true;
    document.getElementById('category').innerHTML='Notes';
    alert_box('Feature not available for now' , 'red')

})





// --------------------------------------add note search------------------------------------------




function addnotesearch(no,str=1){
    
    document.getElementById('searchcards').innerHTML='';
    let now_login=localStorage.getItem('userlogined'); 
    let HTML=document.getElementById('searchcards').innerHTML;

    
   
    
    if(no==1){
    
    for(let i=0;i<searchlistheads.length;i++){
        let searchno;
        if(str==1){searchno=i;}
        if(str==2){searchno=searchedindex[i];}
    document.getElementById('searchcards').innerHTML=`${HTML}`+`
    
    
    <div class="cardsearch" id='card${favindex[i]}'>
    <div class="cardno"><div class="noteno">${favindex[i]+1}</div></div>
    <div class="cardhead">${searchlistheads[i]}</div>
    <div class="cardcontent" id='noteblr${i}'>${searchlistnotes[i]}</div>
    <div class="cardbtn"><div class="notebtn" id='notebtn${searchno}${now_login}'>open</div></div>
    </div>
    
    `;
    HTML=document.getElementById('searchcards').innerHTML;
}}

if(no==2){
    
    for(let i=searchlistheads.length-1;i>=0;i--){
        let searchno;
        if(str==1){searchno=i;}
        if(str==2){searchno=searchedindex[i];}
    document.getElementById('searchcards').innerHTML=`${HTML}`+`
    <div class="cardsearch" id='card${favindex[i]}' >
    <div class="cardno"><div class="noteno">${favindex[i]+1}</div></div>
    <div class="cardhead">${searchlistheads[i]}</div>
    <div class="cardcontent" id='noteblr${i}'>${searchlistnotes[i]}</div>
    <div class="cardbtn"><div class="notebtn" id='notebtn${searchno}${now_login}'>open</div></div>
    </div>
    
    `;HTML=document.getElementById('searchcards').innerHTML;
}}


if(no==3){
    
    for(let i=0;i<searchlistheads.length;i++){
    document.getElementById('searchcards').innerHTML=`${HTML}`+`
    
    <div class="cardsearch" id='card${favindex[i]}' >
    <div class="cardno"><div class="noteno">${favindex[i]+1}</div></div>
    <div class="cardhead">${searchlistheads[i]}</div>
    <div class="cardcontent" id='noteblr${i}'>${searchlistnotes[i]}</div>
    <div class="cardbtn"><div class="notebtn" id='notebtn${favindex[i]}${now_login}'>open</div></div>
    </div>
    
    `;HTML=document.getElementById('searchcards').innerHTML;
}}

if(no==4){
    
    for(let i=0;i<searchlistheads.length;i++){
        let searchno;
        if(str==1){searchno=i;}
        
    document.getElementById('searchcards').innerHTML=`${HTML}`+`
    
    
    <div class="cardsearch cardid${cardid[i]}" id='card${i}'>
    <div class="cardno"><div class="noteno">${i+1}</div></div>
    <div class="cardhead">${searchlistheads[i]}</div>
    <div class="cardcontent" id='noteblr${i}'>${searchlistnotes[i]}</div>
    <div class="cardbtn"><div class="notebtn" id='notebtn${searchno}${now_login}'>open</div></div>
    </div>
    
    `;
    HTML=document.getElementById('searchcards').innerHTML;
}}


openbtn();
changecardclr();
if(localStorage.getItem(`blurcard${user_login}`)){
    if(localStorage.getItem(`blurcard${user_login}`)==`on`){blurthecard();auto_change_on(2);}
    else{removetheblur();auto_change_off(2);}
}
}


// ------------------------------------------filtertogal--------------------------------------------------


let filtertogal=true;
document.getElementById('filter').addEventListener('click' , function(){

    if(filtertogal){
        document.getElementById('filterbox').style.visibility='visible';
        document.getElementById('filterbox').style.height='200px';
        filtertogal=false;
    }

    else{
        document.getElementById('filterbox').style.visibility='hidden';
        document.getElementById('filterbox').style.height='0px';
        filtertogal=true;

    }

})



document.getElementById('filterbox1').addEventListener('click' , function(){

    document.getElementById('filterbox').style.height='0px';
    filtertogal=true;
    document.getElementById('filterapplyed').innerHTML='Newest First';
    let cardid1=[];
    for(let i=0;i<cardid.length;i++){cardid1.push(cardid[i])}
    cardid1.sort(function (a, b) {
        return a - b;
    });
       
    searchlistnotes=[]
    searchlistheads=[]
    let indexfav=[];
    for(let i=0;i<headings.length;i++){
        if(cardid.includes(cardid1[i])){
            let index1=cardid.indexOf(cardid1[i]);
            searchlistnotes.push(notes[index1]);
            searchlistheads.push(headings[index1]); 
            indexfav.push(index1);     

        }}
 
    
    favindex=indexfav
    addnotesearch(2)
})
    


document.getElementById('filterbox2').addEventListener('click' , function(){

    document.getElementById('filterbox').style.height='0px';
    filtertogal=true;
    document.getElementById('filterapplyed').innerHTML='Oldest First';
    

    let cardid1=[];
    for(let i=0;i<cardid.length;i++){cardid1.push(cardid[i])}
    cardid1.sort(function (a, b) {
        return a - b;
    });
    
    searchlistnotes=[];
    searchlistheads=[];
    let indexfav=[];
    for(let i=0;i<headings.length;i++){
        if(cardid.includes(cardid1[i])){
            let index1=cardid.indexOf(cardid1[i]);
            searchlistnotes.push(notes[index1]);
            searchlistheads.push(headings[index1]);     
            indexfav.push(index1);     
        }}

    

    favindex=indexfav
    addnotesearch(1)
})
    


document.getElementById('filterbox3').addEventListener('click' , function(){

    document.getElementById('filterbox').style.height='0px';
    filtertogal=true;
    document.getElementById('filterapplyed').innerHTML='Favorite';
    
    let favnotes=[];
    let favheads=[];
    let indexfav=[];
    for(let i=0;i<cardid.length;i++){
        if(favcardid.includes(cardid[i])){
            favnotes.push(notes[i])
            favheads.push(headings[i])
            indexfav.push(i)
        }
    }
    
    searchlistnotes=favnotes;
    searchlistheads=favheads;
    favindex=indexfav
    addnotesearch(3)
})

function clearvar(){
    searchedhead=[];
    searchednote=[];
    searchedindex=[];
}








document.getElementById('search2').addEventListener('click' ,function(){


   
let catselected=document.getElementById('category').innerHTML;
let filterselected=document.getElementById('filterapplyed').innerHTML;
let searchboxcont=document.getElementById('searchtxt').value;
let favfilt=document.getElementById('filterapplyed').innerHTML;


if(catselected=='Select Category'){
    document.getElementById('searchcat').style.borderBottom='1px solid red'
}
setTimeout(
    function(){
        document.getElementById('searchcat').style.borderBottom='1px solid black'
    },2000
)




if(catselected=='Notes'  && favfilt!='Favorite'){
    clearvar()
    for(let i=0; i<headings.length;i++){
        let nts=notes[i].toLowerCase()
        let hts=searchboxcont.toLowerCase()
        if(nts.includes(hts)){
            searchedhead.push(headings[i]);
            searchednote.push(notes[i]);
            favindex=[]
            favindex.push(i);
        }
    }
    searchlistnotes=searchednote;
    searchlistheads=searchedhead;
    if(filterselected=='Newest First' ){addnotesearch(1,2)}
    if(filterselected=='Filter' ){addnotesearch(1,2)}
    if(filterselected=='Oldest First'){addnotesearch(2,2)}
    

}

if(catselected=='Headings' && favfilt!='Favorite'){
    clearvar()
    for(let i=0; i<headings.length;i++){
        let nts=headings[i].toLowerCase()
        let hts=searchboxcont.toLowerCase()
        if(nts.includes(hts)){
            searchedhead.push(headings[i]);
            searchednote.push(notes[i]);
            favindex=[]
            favindex.push(i);
        }
    }
    searchlistnotes=searchednote;
    searchlistheads=searchedhead;
    if(filterselected=='Newest First'){addnotesearch(1,2)}
    if(filterselected=='Filter' ){addnotesearch(1,2)}
    if(filterselected=='Oldest First'){addnotesearch(2,2)}
    

}

if(favfilt=='Favorite'){
    clearvar()
    let favnotelist=[]
    let favheadlist=[]
    for(let i=0;i<favcardid.length;i++){
        let index1=cardid.indexOf(favcardid[i]);
        favnotelist.push(notes[index1])
        favheadlist.push(headings[index1])
    }

    
    for(let i=0;i<favnotelist.length;i++){
       
        if(catselected=='Notes'){
        let nts=favnotelist[i].toLowerCase()
        let hts=searchboxcont.toLowerCase()
        if(nts.includes(hts)){
        searchedhead.push(favheadlist[i]);
        searchednote.push(favnotelist[i]);
        favindex=[]
        favindex.push(notes.indexOf(favnotelist[i]));}}

        if(catselected=='Headings'){
        let nts1=favheadlist[i].toLowerCase()
        let hts1=searchboxcont.toLowerCase()
        if(nts1.includes(hts1)){
            searchedhead.push(favheadlist[i]);
            searchednote.push(favnotelist[i]);
            searchedindex.push(headings.indexOf(favheadlist[i]));}}
    
    
    
    };


    searchlistnotes=searchednote;
    searchlistheads=searchedhead;
    addnotesearch(1,2)
    
}


})



// -------------------------------------pass change-------------------------------
document.getElementById('changepassclik').addEventListener('click' , function(){

    let now_login=localStorage.getItem('userlogined');
        
    document.getElementById('blurbg').style.visibility='visible';
    document.getElementById('passcheck').style.visibility='visible';
    document.getElementById('passbtne').innerHTML=`<div class="psbtn" id="passchange">Continue</div>`;
    document.getElementById(`passchange`).addEventListener('click' , function(){
        if(document.getElementById('passin').value==localStorage.getItem(`passward${now_login}`)){

          document.getElementById('passin').value='';
         
         document.getElementById('passchbox').style.display='flex';

         document.getElementById('blurbg').style.visibility='hidden';
         document.getElementById('passcheck').style.visibility='hidden';
     }
     else{
         document.getElementById('invcre').style.visibility='visible';
         document.getElementById('passin').value='';

         setTimeout(function(){
         document.getElementById('invcre').style.visibility='hidden';

         },3000)
     }
         
        
 })
}


)



let seepass1=true;

document.getElementById('seepass1').addEventListener('click' , function(){
    
    if(seepass1){
    document.getElementById('seepass1').innerHTML='visibility';
    document.getElementById('newpassch1').setAttribute('type' , 'text');
    seepass1=false
    }

    else{
        document.getElementById('seepass1').innerHTML='visibility_off';
        document.getElementById('newpassch1').setAttribute('type' , 'password');

        seepass1=true
        }

})





document.getElementById('changepassbtn1').addEventListener('click' , function(){
    document.getElementById('passchbox').style.display='none';
    
})

document.getElementById('changepassbtn2').addEventListener('click' , function(){
    check_pass('newpassch1');})
    


function changepassfunc(){

    
        if(document.getElementById('newpassch1').value==document.getElementById('newpassch2').value){
            localStorage.setItem(`passward${user_login}` , `${document.getElementById('newpassch1').value}`)
         document.getElementById('passchbox').style.display='none';
         document.getElementById('newpassch1').value='';
         document.getElementById('newpassch2').value='';
         alert_box('Password Changed Successfully','rgba(0, 255, 21,1)')
        

        }
        else{document.getElementById('shownote').style.visibility='visible';
                setTimeout(function(){document.getElementById('shownote').style.visibility='hidden'} , 3000);
    }
    
    
}



// ---------------------------------------------------drag n drop--------------------------------------




function dragstarting(){
let nubc;
allcard=document.querySelectorAll('.card');
allgap=document.querySelectorAll('.centergap');


document.getElementById('maindivout').addEventListener('dragover' , function(e){e.preventDefault()})



allcard.forEach(element => {
    element.addEventListener('dragstart' , function(){

        numc=movecard;

    allcard.forEach(element => {
        element.style.transform='scale(.9)';
        
        })
    
    allgap.forEach(element => {
        element.style.transform='scaleX(2.5)';
        })
    });

   


    element.addEventListener('dragend' , function(){
        allcard.forEach(element => {
            element.style.transform='scale(1)'
        });
        
        


        allgap.forEach(element => {
            element.style.minWidth='10px';
            
            })

            if(numc>moveto){
            let moveitemhead=headings[numc];
            headings.splice(moveto+1,0,moveitemhead);
            headings.splice(numc+1,1);
            
            
            let moveitemnote=notes[numc];
            let moveitemcardid=cardid[numc];
            let moveitemdates=dates[numc];
            notes.splice(moveto+1,0,moveitemnote);
            notes.splice(numc+1,1);
                
            cardid.splice(moveto+1,0,moveitemcardid);
            cardid.splice(numc+1,1);
            
            dates.splice(moveto+1,0,moveitemdates);
            dates.splice(numc+1,1);
        }



            if(numc<moveto){
                let moveitemhead=headings[numc];
                let moveitemcardid=cardid[numc];
                let moveitemdates=dates[numc];
                headings.splice(moveto+1,0,moveitemhead);
                headings.splice(numc,1);
                
                
                let moveitemnote=notes[numc];
    
                notes.splice(moveto+1,0,moveitemnote);
                notes.splice(numc,1);
            
                cardid.splice(moveto+1,0,moveitemcardid);
                cardid.splice(numc,1);
                
                dates.splice(moveto+1,0,moveitemdates);
                dates.splice(numc,1);
            
            }




            let headerj=JSON.stringify(headings)
            let notesj=JSON.stringify(notes)
            let notesidj=JSON.stringify(cardid)
            let datesj=JSON.stringify(dates)
            
            localStorage.setItem(`heading${userlogin1}` , headerj)
            localStorage.setItem(`note${userlogin1}` , notesj)
            localStorage.setItem(`cardid${userlogin1}` , notesidj)
            localStorage.setItem(`dates${userlogin1}` , datesj)
            document.getElementById('maindivin').innerHTML='';
            addnote2(2);
            
        
    })
    
});
}


function cardmoving(){


for (let i = 0; i<headings.length; i++) {
    
document.getElementById(`centergap${i}`).addEventListener('dragenter' ,function(){
document.getElementById(`centergapin${i}`).style.display='flex';
document.getElementById(`centergapin${i+10000000}`).style.display='flex';
moveto=i;



} )


document.getElementById(`centergap${i}`).addEventListener('dragleave' ,function(){
    document.getElementById(`centergapin${i}`).style.display='none';
    document.getElementById(`centergapin${i+10000000}`).style.display='none';




})


}


for (let i = 0; i<headings.length; i++) {

document.getElementById(`card${i}`).addEventListener('mouseenter' , function(){
    movecard=i;
    
})


}}

// -----------------------------------------------about----------------------------------

let aboutpage=1;


document.getElementById('u3').addEventListener('click',function(){
    aboutpage=1
    document.getElementById('about').style.visibility='visible'
    document.getElementById('about').style.opacity='1'
    document.getElementById('about').style.left='0px'
    aboutcont()
    menu_in()

})

document.getElementById('forwardbtn').addEventListener('click',function(){
    aboutpage=aboutpage-1;
    aboutcont()


})



document.getElementById('backarrow').addEventListener('click',function(){
    aboutpage=aboutpage+1;
    aboutcont()


})


document.getElementById('pageselect1').addEventListener('click',function(){
    aboutpage=1;
    aboutcont()


})

document.getElementById('pageselect2').addEventListener('click',function(){
    aboutpage=2;
    aboutcont()


})

document.getElementById('pageselect3').addEventListener('click',function(){
    aboutpage=3;
    aboutcont()


})

document.getElementById('u4').addEventListener('click',function(){
    document.getElementById('about').style.visibility='visible'
    document.getElementById('about').style.opacity='1'
    document.getElementById('about').style.left='0px'
    aboutpage=2;
    menu_in()
    aboutcont()


})




function aboutcont(){
    if(aboutpage==1){
        document.getElementById('aboutin1').innerHTML='About Project';
        document.getElementById('aboutin2').innerHTML=`Note-It is a Note taking website where you can store your school, college or any other data that you want to note down. You can Add note delete them and also edit them. You can mark important notes as favorite and find them easily. This is a Malty user website design that can handle more than one user and store every user data separately.<p style="color:red"> *data is stored in crome local storage there is no backend server so please do not store any important information, this project is only for showcasing creativity and skills not for use*.</p> This website has following features:-
        <br><br>
        1)	Malty user design<br>
        2)	Add infinite number of notes<br>
        3)	Edit/delete notes<br>
        4)	Mark notes as favorite<br>
        5)	Our advance search option to find notes easily<br>
        6)	Change background color from settings<br>
        7)	Change menu color<br>
        8)	Auto background wallpaper change option<br>
        9)	Advance security option<br>
        10)	Simple design<br>
        11)	Easy to use<br>
        

        `

        document.getElementById('about2').style.backgroundImage=`url('https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')`
        document.getElementById('pageselect1').style.backgroundColor='#0400ff';
        document.getElementById('pageselect2').style.backgroundColor='white';
        document.getElementById('pageselect3').style.backgroundColor='white';
    }




    if(aboutpage==2){
        document.getElementById('aboutin1').innerHTML='About Developer';

        document.getElementById('aboutin2').innerHTML=`This project is made by Rahul Dhananjay Raverkar. I am Experienced Web Developer with Strong engineering background in Electrical. I have 6 month working experiance in Tata consultancy services(TCS)(still working). <p style="color:red"> *data is stored in crome local storage there is no backend server so please do not store any important information, this project is only for showcasing creativity and skills not for use*.</p> <div id='socialbar'><div id='socialbar1'></div><div id='socialbar2'><div id='socialbar11'><i class="material-icons">mail</i></div>raverkar1997@gmail.com</div></div>`
        

    document.getElementById('about2').style.backgroundImage='url(https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'

    document.getElementById('pageselect1').style.backgroundColor='white';
    document.getElementById('pageselect2').style.backgroundColor='#0400ff';
    document.getElementById('pageselect3').style.backgroundColor='white';
    document.getElementById('socialbar1').addEventListener('click' , function(){
        
        window.open('https://www.linkedin.com/in/rahul-raverkar-33763422b/', '_blank').focus();
    })
    

    }



    if(aboutpage==3){
        document.getElementById('aboutin1').innerHTML='Technology Used';
        

        document.getElementById('aboutin2').innerHTML=`
        
        <div class='progbox'>
        <div class='progname'>HTML</div>
        <div class='progdetail'>The structure of Web page described in HTML (HyperText Markup Language).<br>And the version used is HTML 5. HTML5 is a new version of HTML with new functionalities with markup language with Internet technologies. </div>
        </div>
        
        <div class='progbox'>
        <div class='progdetail'>All designing and styling of the web pages are done using Cascading Style Sheets(CSS).CSS is a cornerstone technology of the World Wide Web.  </div>
        <div class='progname'>CSS</div>
        </div>

        <div class='progbox'>
        <div class='progname'>JavaScript</div>
        <div class='progdetail'>Javascript is used to createct this web page dynamic and interactive. Because JavaScript is the most powerfull and effecting for web pages as well as compatible to all the browser. Also I want project creation with pure JS so I choose JavaScript. </div>
        </div>
        `
        
        document.getElementById('about2').style.backgroundImage='url(https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80)'
        
        
        document.getElementById('pageselect1').style.backgroundColor='white';
        document.getElementById('pageselect2').style.backgroundColor='white';
        document.getElementById('pageselect3').style.backgroundColor='#0400ff';

    }





    if(aboutpage==0){aboutpage=3;aboutcont()}
    if(aboutpage==4){aboutpage=1;aboutcont()}
}




// ------------------------------------home button---------------------------

document.getElementById(`u1`).addEventListener('click',function(){
    document.getElementById('about').style.visibility='hidden'
    document.getElementById('about').style.opacity='0'
    document.getElementById('about').style.left='1500px'

    menu_in()
})
// -----------------------------------------------star option------------------------------------



document.getElementById('options3').addEventListener('click' , function(){
    noexpand()
    document.getElementById('searchbox').style.visibility='visible';
    document.getElementById('searchbox').style.height='550px';
    document.getElementById('searchlogo1').innerHTML='cancel';
    document.getElementById('searchlogo1').style.color='red';
    document.getElementById('filterbox').style.height='0px';
    searchl=false;

    filtertogal=true;
    document.getElementById('filterapplyed').innerHTML='Favorite';
    
    let favnotes=[];
    let favheads=[];
    let indexfav=[];
    for(let i=0;i<cardid.length;i++){
        if(favcardid.includes(cardid[i])){
            favnotes.push(notes[i])
            favheads.push(headings[i])
            indexfav.push(i)
        }
    }
    
    searchlistnotes=favnotes;
    searchlistheads=favheads;
    favindex=indexfav
    addnotesearch(3)
})
