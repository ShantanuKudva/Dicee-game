var random=Math.random()*6;
var random2=Math.random()*6;

random1=Math.floor(random)+1;
random2=Math.floor(random2)+1;

var image1=document.querySelector(".img1");
var image2=document.querySelector(".img2")
var heading=document.querySelector("h1")

if(random1===1){
  image1.setAttribute("src", "images/dice1.png");
}else if(random1===2){
    image1.setAttribute("src", "images/dice2.png");
}else if(random1===3){
    image1.setAttribute("src", "images/dice3.png");
}else if(random1===4){
    image1.setAttribute("src", "images/dice4.png");
}else if(random1===5){
    image1.setAttribute("src", "images/dice5.png");
}else{
    image1.setAttribute("src", "images/dice6.png");
}

if(random2===1){
    image2.setAttribute("src", "images/dice1.png");
  }else if(random2===2){
      image2.setAttribute("src", "images/dice2.png");
  }else if(random2===3){
      image1.setAttribute("src", "images/dice3.png");
  }else if(random2===4){
      image2.setAttribute("src", "images/dice4.png");
  }else if(random2===5){
      image2.setAttribute("src", "images/dice5.png");
  }else{
      image2.setAttribute("src", "images/dice6.png");
  }

  if(random1===random2){
    heading.innerHTML="Draw";
  }else if(random1>random2){
    heading.innerHTML="Player 1 Wins";
  }else if(random1<random2){
    heading.innerHTML="Player 2 Wins";
  }