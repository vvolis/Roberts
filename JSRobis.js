window.onload = function()
{   $("#vldDate").hide();
    $("#vldMail").hide();
    $("#vldVarduzv").hide();
    //-----------------Fona kustibas dala-----------------
        function parallax()
    {
      var paralax_2 = document.getElementById('paralax_2');
      var paralax_3 = document.getElementById('paralax_3');

      paralax_2.style.top = -(window.pageYOffset /4)+100+'px';
      paralax_3.style.top = -(window.pageYOffset /1.5)+200+'px';
    }
    
    window.addEventListener('scroll', parallax, false);

    
    
    //-----------------Fona slepsanas dala-----------------
    function Slepejs(obj) 
    {
        if(!obj.bools)
        {
            $(obj.slepjamais).hide();
            obj.bools=true;
        }
        else 
        {
            $(obj.slepjamais).show();
            obj.bools=false;
        }
    };
    
    var slep1Btn ={elem: document.getElementById('Slep1Robi'),slepjamais: "#paralax_1",bools: true};
    var slep2Btn ={elem: document.getElementById('Slep2Robi'),slepjamais: "#paralax_2",bools: true};
    var slep3Btn ={elem: document.getElementById('Slep3Robi'),slepjamais: "#paralax_3",bools: true};
    
    slep1Btn.elem.onclick =function(){Slepejs(slep1Btn);};
    slep2Btn.elem.onclick =function(){Slepejs(slep2Btn);};
    slep3Btn.elem.onclick =function(){Slepejs(slep3Btn);};
   
   
   
    //--------------------------VALIDATORI----------------------------
    var RobertizetBtn = document.getElementById('Robertize');
    
    function isValidEmailAddress(emailAddress) 
    {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(emailAddress);
    };
    
    function Validate()
    {

        var strD = document.getElementById('Diena').value;
        var strM = document.getElementById('Menesis').value;
        var strY = document.getElementById('Gads').value;
        
        var dBool = true;
        var mBool = true;
        var yBool = true;
        
        var validate1 = false;
        var validate2 = false; 
        
        if(isNaN(strD)||strD<1||strD>31) dBool = false;
        if(isNaN(strM)||strM<1||strM>12) mBool = false;
        if(isNaN(strY)||strY<1900||strY>2014) yBool = false;
        
        var report = "Wrong: ";
        
        if(!dBool) report+="Day ";
        if(!mBool) report+="Month ";
        if(!yBool) report+="Year ";
        
        if(!dBool || !mBool || !yBool)
        {
            $("#vldDate").show();
            $("#vldDate").text(report);
            
        } else {
            $("#vldDate").hide();
            validate1 = true;
        }
        
        var strMail = document.getElementById('Mail').value;
        if (isValidEmailAddress(strMail)) $("#vldMail").hide();
        else $("#vldMail").show();
        
        var strName = document.getElementById('Vards').value;
        var strSurName = document.getElementById('Uzvards').value;
        
        if (strName==="" || strSurName==="") $("#vldVarduzv").show();
        else{
            $("#vldVarduzv").hide();
            validate2 = true;
        }
            
            
    
     //----------------Veiksmes Gadījumā pievienojam apakšu------------------
     if(strD==="18" && strM==="12" && strY==="1994" && strName.toLowerCase()==="roberts" && strSurName.toLowerCase()==="ģinguls")
     {
        var apaksa = document.getElementById("apaksa");
        apaksa.innerHTML='<h4>LAI DZĪVO ROBERTS</h4><p>Apsveicam ar nonākšanu Robetru pulkā! Jūsu e-pasts pievienots\n\
         Robertu kluba meilu listei!</p>'; 
        document.getElementById("MailForm").submit();    
      
     }
     else if (validate1===true && validate2 ===true)
     {
        var apaksa = document.getElementById("apaksa");
        apaksa.innerHTML='<h4>LAI DZĪVO ROBERTS</h4><p>Diemžēl tu neesi Roberts Ģingulis, līdz ar to tev pieeja šim klubam\n\
        ir liegta</p>'; 
     }
         

    };
    
    RobertizetBtn.onclick = function(){Validate();};
        
};
