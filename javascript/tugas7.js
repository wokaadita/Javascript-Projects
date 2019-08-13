var tinggi=[150,160,170,140,170,170,180,185,175,166];

function biasa(){
 for(i=0; i<tinggi.length;i++){
   console.log(tinggi[i])
 }
}

function for_of(){
  for(let x of tinggi){
    console.log(x)
  }
}

biasa()
for_of()
