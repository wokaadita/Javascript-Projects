var x=170
var y=190
var z=150

if (x>z){
  if (x>y){
    console.log("X adalah siswa dengan badan tertinggi")
  }else{
    console.log("X adalah siswa dengan badan tertinggi kedua")
  }
}else{
  if (x<z){
    if(x<y){
      console.log("X adalah siswa dengan badan terpendek")
    }else{
      console.log("X adalah siswa dengan badan terpendek kedua")
    }
  }
}

if(y>z){
  if (y>x){
    console.log("Y adalah siswa dengan badan tertinggi")
  }else{
    console.log("Y adalah siswa dengan badan tertinggi kedua")
  }
}else{
  if(y<z){
    if(y<x){
      console.log("Y adalah siswa dengan badan terpendek")
    }else{
      console.log("Y adalah siswa dengan badan terpedek kedua")
    }
  }
}

if (z>x){
  if(z>y){
    console.log("Z adalah siswa dengan badan tertinggi")
  }else{
    console.log("Z adalah siswa dengan badan tertinggi kedua")
  }
}else{
  if (z<y){
    if (z<x) {
    console.log("Z adalah siswa dengan badan terpendek")
  }else{
    console.log("Z adalah siswa dengan badan terpendek kedua")
  }
 }
}
