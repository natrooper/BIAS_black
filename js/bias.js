document.write("Everything has Bias");

var pollers = new Array();
//initializing 2d array to represent both tables
var stats = new Array(2);

stats[0] = new Array(5);
stats[1] = new Array(5);

for(let i=0;i<stats.length;i++){
        for(let j=0;j<stats[0].length;j++){
                stats[i][j] = {likes:0, dislikes:0, total:0};
        }
}

//initializing table variables
var FBL = document.getElementById("FBL");
FBL.innerHTML=stats[0][0].likes;
var FWL = document.getElementById("FWL");
FWL.innerHTML=stats[0][1].likes;
var FHL = document.getElementById("FHL");
FHL.innerHTML=stats[0][2].likes;
var FAL = document.getElementById("FAL");
FAL.innerHTML=stats[0][3].likes;
var FOL = document.getElementById("FOL");
FOL.innerHTML=stats[0][4].likes;
var MBL = document.getElementById("MBL");
MBL.innerHTML=stats[1][0].likes;
var MWL = document.getElementById("MWL");
MWL.innerHTML=stats[1][1].likes;
var MHL = document.getElementById("MHL");
MHL.innerHTML=stats[1][2].likes;
var MAL = document.getElementById("MAL");
MAL.innerHTML=stats[1][3].likes;
var MOL = document.getElementById("MOL");
MOL.innerHTML=stats[1][4].likes;
var BLT = document.getElementById("BLT");
BLT.innerHTML=Number(FBL.innerHTML) + Number(MBL.innerHTML);
var WLT = document.getElementById("WLT");
WLT.innerHTML=Number(FWL.innerHTML) + Number(MWL.innerHTML);
var HLT = document.getElementById("HLT");
HLT.innerHTML=Number(FHL.innerHTML) + Number(MHL.innerHTML);
var ALT = document.getElementById("ALT");
ALT.innerHTML=Number(FAL.innerHTML) + Number(MAL.innerHTML);
var OLT = document.getElementById("OLT");
OLT.innerHTML=Number(FOL.innerHTML) + Number(MOL.innerHTML);
var FLT = document.getElementById("FLT");
FLT.innerHTML=0;//Number(FBL.innerHTML) + Number(FWL.innerHTML) + Number(FHL.innerHTML) + Number(FAL.innerHTML) + Number(FOL.innerHTML);
var MLT = document.getElementById("MLT");
MLT.innerHTML=Number(MBL.innerHTML) + Number(MWL.innerHTML) + Number(MHL.innerHTML) + Number(MAL.innerHTML) + Number(MOL.innerHTML);

var FBD = document.getElementById("FBD");
FBD.innerHTML=stats[0][0].dislikes;
var FWD = document.getElementById("FWD");
FWD.innerHTML=stats[0][1].dislikes;
var FHD = document.getElementById("FHD");
FHD.innerHTML=stats[0][2].dislikes;
var FAD = document.getElementById("FAD");
FAD.innerHTML=stats[0][3].dislikes;
var FOD = document.getElementById("FOD");
FOD.innerHTML=stats[0][4].dislikes;
var MBD = document.getElementById("MBD");
MBD.innerHTML=stats[1][0].dislikes;
var MWD = document.getElementById("MWD");
MWD.innerHTML=stats[1][1].dislikes;
var MHD = document.getElementById("MHD");
MHD.innerHTML=stats[1][2].dislikes;
var MAD = document.getElementById("MAD");
MAD.innerHTML=stats[1][3].dislikes;
var MOD = document.getElementById("MOD");
MOD.innerHTML=stats[1][4].dislikes;
var BDT = document.getElementById("BDT");
BDT.innerHTML=Number(FBD.innerHTML) + Number(MBD.innerHTML);
var WDT = document.getElementById("WDT");
WDT.innerHTML=Number(FWD.innerHTML) + Number(MWD.innerHTML);
var HDT = document.getElementById("HDT");
HDT.innerHTML=Number(FHD.innerHTML) + Number(MHD.innerHTML);
var ADT = document.getElementById("ADT");
ADT.innerHTML=Number(FAD.innerHTML) + Number(MAD.innerHTML);
var ODT = document.getElementById("ODT");
ODT.innerHTML=Number(FOD.innerHTML) + Number(MOD.innerHTML);
var FDT = document.getElementById("FDT");
FDT.innerHTML=Number(FBD.innerHTML) + Number(FWD.innerHTML) + Number(FHD.innerHTML) + Number(FAD.innerHTML) + Number(FOD.innerHTML);
var MDT = document.getElementById("MDT");
MDT.innerHTML=Number(MBD.innerHTML) + Number(MWD.innerHTML) + Number(MHD.innerHTML) + Number(MAD.innerHTML) + Number(MOD.innerHTML);


var submit_bt = document.getElementById("submit_bt");
submit_bt.onclick = submitButtonClicked

// poll input radio
function submitButtonClicked(){

        var poll =  document.getElementsByClassName("poll-radio");
        var row;
        var col;
  
        temp_person = new Person();

        if(poll[2].checked == true){
                temp_person.gender = "Female";
                col = 0;
        }
        else if(poll[3].checked == true ){
                temp_person.gender = "Male";
                col = 1;
        }
        else {
                temp_person.gender = null;
        }

        if(poll[4].checked ==true){
                temp_person.race= "Black";
                row = 0;
        }
        else if(poll[5].checked == true){
                temp_person.race = "White";
                row = 1;
        }
        else if(poll[6].checked==true){
                temp_person.race = "Hispanic";
                row = 2;
        }
        else if(poll[7].checked==true){
                temp_person.race = "Asian";
                row = 3;
        }
        else if(poll[8].checked==true){
                temp_person.race = "Other";
                row = 4;
        }
        else {
                temp_person.race = null;
        }

        if(poll[0].checked == true ){
                temp_person.opinion = "Like";
                stats[col][row].likes++;
                stats[col][row].total++;

        }
    
        else if (poll[1].checked == true ){
                temp_person.opinion = "Dislike";
                stats[col][row].dislikes++;
                stats[col][row].total++;

        }
        else {
                temp_person.opinion = null;
        }


        for(let i=0 ; i< poll.length; i++){
            poll[i].checked =false;
        }

        pollers.push(temp_person);

        updateStats();
        console.log(stats);

}

function updateStats(){

        //tables
        FBL.innerHTML=stats[0][0].likes;
        FWL.innerHTML=stats[0][1].likes;
        FHL.innerHTML=stats[0][2].likes;
        FAL.innerHTML=stats[0][3].likes;
        FOL.innerHTML=stats[0][4].likes;
        MBL.innerHTML=stats[1][0].likes;
        MWL.innerHTML=stats[1][1].likes;
        MHL.innerHTML=stats[1][2].likes;
        MAL.innerHTML=stats[1][3].likes;
        MOL.innerHTML=stats[1][4].likes;
        BLT.innerHTML=Number(FBL.innerHTML) + Number(MBL.innerHTML);
        WLT.innerHTML=Number(FWL.innerHTML) + Number(MWL.innerHTML);
        HLT.innerHTML=Number(FHL.innerHTML) + Number(MHL.innerHTML);
        ALT.innerHTML=Number(FAL.innerHTML) + Number(MAL.innerHTML);
        OLT.innerHTML=Number(FOL.innerHTML) + Number(MOL.innerHTML);
        FLT.innerHTML=stats[0][0].likes + stats[0][1].likes + stats[0][2].likes + stats[0][3].likes + stats[0][4].likes;
        MLT.innerHTML=Number(MBL.innerHTML) + Number(MWL.innerHTML) + Number(MHL.innerHTML) + Number(MAL.innerHTML) + Number(MOL.innerHTML);

        FBD.innerHTML=stats[0][0].dislikes;
        FWD.innerHTML=stats[0][1].dislikes;
        FHD.innerHTML=stats[0][2].dislikes;
        FAD.innerHTML=stats[0][3].dislikes;
        FOD.innerHTML=stats[0][4].dislikes;
        MBD.innerHTML=stats[1][0].dislikes;
        MWD.innerHTML=stats[1][1].dislikes;
        MHD.innerHTML=stats[1][2].dislikes;
        MAD.innerHTML=stats[1][3].dislikes;
        MOD.innerHTML=stats[1][4].dislikes;
        BDT.innerHTML=Number(FBD.innerHTML) + Number(MBD.innerHTML);
        WDT.innerHTML=Number(FWD.innerHTML) + Number(MWD.innerHTML);
        HDT.innerHTML=Number(FHD.innerHTML) + Number(MHD.innerHTML);
        ADT.innerHTML=Number(FAD.innerHTML) + Number(MAD.innerHTML);
        ODT.innerHTML=Number(FOD.innerHTML) + Number(MOD.innerHTML);
        FDT.innerHTML=Number(FBD.innerHTML) + Number(FWD.innerHTML) + Number(FHD.innerHTML) + Number(FAD.innerHTML) + Number(FOD.innerHTML);
        MDT.innerHTML=Number(MBD.innerHTML) + Number(MWD.innerHTML) + Number(MHD.innerHTML) + Number(MAD.innerHTML) + Number(MOD.innerHTML);


        //GENDER BIAS
        MLTnum = Number(MLT.innerHTML);
        MDTnum = Number(MDT.innerHTML);
        FLTnum = Number(FLT.innerHTML);
        FDTnum = Number(FDT.innerHTML);
        MTnum = MLTnum + MDTnum;
        FTnum = FLTnum + FDTnum;
        
        ratioM = MLTnum/MTnum;
        ratioF = FLTnum/FTnum;

        avgGenderRatio = (ratioM + ratioF)/2;

        diffRatioM = Math.abs(ratioM-avgGenderRatio);
        diffRatioF = Math.abs(ratioF-avgGenderRatio);

        genderBias = (diffRatioM + diffRatioF)/2*100;        
        
        // if((MLTnum/MTnum) > (FLTnum/FTnum)){
        //         genderBias=(1 - ((FLTnum/FTnum)/(MLTnum/MTnum)))*100;
        // }else if((MLTnum/MTnum) < (FLTnum/FTnum)){
        //         genderBias=(1 - ((MLTnum/MTnum)/(FLTnum/FTnum))*100);
        // }else{
        //         genderBias=0;
        // }

        genderProgressElem = document.getElementById("genderProgress");
        genderProgressElem.style.width = genderBias+"%";
        genderProgressElem.innerHTML = genderBias+ "%";
        
        if(genderBias <= 25){
                genderProgressElem.style.backgroundColor= "#FFA16C";
        }
        else if(genderBias <= 50){
                genderProgressElem.style.backgroundColor= "#FF8641";
        }
        else if(genderBias <=75){
                genderProgressElem.style.backgroundColor= "#FF6813";

        }
        else{
                genderProgressElem.style.backgroundColor= "#FF5C00";

        }

        //likes and dislikes
        likes = document.getElementById("likes");
        likes.innerHTML = MLTnum + FLTnum;
        dislikes = document.getElementById("dislikes");
        dislikes.innerHTML = MDTnum + FDTnum;

        //RACIAL BIAS
        BLTnum = Number(BLT.innerHTML);
        WLTnum = Number(WLT.innerHTML);
        HLTnum = Number(HLT.innerHTML);
        ALTnum = Number(ALT.innerHTML);
        OLTnum = Number(OLT.innerHTML);

        BTnum = BLTnum + Number(BDT.innerHTML);
        WTnum = WLTnum + Number(WDT.innerHTML);
        HTnum = HLTnum + Number(HDT.innerHTML);
        ATnum = ALTnum + Number(ADT.innerHTML);
        OTnum = OLTnum + Number(ODT.innerHTML);

        ratioB = BLTnum/BTnum;
        ratioW = WLTnum/WTnum;
        ratioH = HLTnum/HTnum;
        ratioA = ALTnum/ATnum;
        ratioO = OLTnum/OTnum;

        avgRaceRatio = (ratioB + ratioW + ratioH + ratioA + ratioO)/5;
        //ratios = [ratioB,ratioW,ratioH,ratioA,ratioO];

        diffRatioB = Math.abs(ratioB-avgRaceRatio);
        diffRatioW = Math.abs(ratioW-avgRaceRatio);
        diffRatioH = Math.abs(ratioH-avgRaceRatio);
        diffRatioA = Math.abs(ratioA-avgRaceRatio);
        diffRatioO = Math.abs(ratioO-avgRaceRatio);

        racialBias = (diffRatioB + diffRatioW + diffRatioH + diffRatioA + diffRatioO)/5*100;
                
        // min = ratioB;
        // for(let i=0; i<5; i++){
        //         if(ratios[i] < min){
        //                 min = ratios[i];
        //         }
        // }

        // result = min/avgRatio;
        // racialBias = (1-result)*100;

        racialProgressElem = document.getElementById("raceProgress");
        racialProgressElem.style.width = racialBias+"%";
        racialProgressElem.innerHTML = racialBias+ "%";
        //console.log(racialBias);


        if(racialBias <= 25){
                racialProgressElem.style.backgroundColor= "#FFA16C";
        }
        else if(racialBias <= 50){
                racialProgressElem.style.backgroundColor= "#FF8641";
        }
        else if(racialBias <=75){
                racialProgressElem.style.backgroundColor= "#FF6813";

        }
        else{
                racialProgressElem.style.backgroundColor= "#FF5C00";

        }


        console.log(genderBias);
        console.log(racialBias);
        console.log();
        console.log();
        console.log();

}
