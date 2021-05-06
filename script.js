song_1="";
song_2="";
song_name_element=document.getElementById("song_name");
function preload(){
    song_1=loadSound("DarkSide.mp3");
    song_2=loadSound("Sorry.mp3")
}
function showhelp(){
    
    p_1 =  document.getElementById("p_1");
    p_1.innerHTML="<span>To play the song Sorry get your left wrist <br>in front of the webcam and to play the song<br> Darkside get your right wrist in front of the webcam </span>";
}
function disablehelp(){
    p_1.innerHTML="Help";
}
function setup(){
    video=createCapture(VIDEO);
    video.hide();
    canvas=createCanvas(500,350);
    canvas.center();
}
function draw(){
     image(video,0,0,500,400)
}
function play_1(){
    song_name_element.innerHTML="The Current Playing Song Is";
    song_2.stop();
    song_1.stop();
song_2.play();
song_name_element.innerHTML+=" Sorry";
}
function play(){
    song_name_element.innerHTML="The Current Playing Song Is";
    song_1.stop();
    song_2.stop();
    song_1.play();
    song_name_element.innerHTML+=" DarkSide";
    }
