var listaFilmesSeries = [
  {
    titulo: "Vingadores: Guerra infinita",
    imagem: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rkHe0BfOo1f5N2q6rxgdYac7Zf6.jpg",
  },
  
  {
    titulo: "Matrix",
    imagem: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lDqMDI3xpbB9UQRyeXfei0MXhqb.jpg",
  },
  
  {
    titulo: "Jornada nas Estrelas: O Filme",
    imagem: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bHgbWah5GVryVCjI21Gpsxb8FnM.jpg",
  },
  
  {
    titulo: "Star Trek: Sem Fronteiras",
    imagem: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zC2lEQjA4X814UnvekmdkM5hXmk.jpg",
  },
  
  {
    titulo: "DragonBall Super",
    imagem: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qEUrbXJ2qt4Rg84Btlx4STOhgte.jpg"
  },
  
  {
    titulo: "Lucifer",
    imagem: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg",
  },
  
  {
    titulo: "Os Cavaleiros do Zodiaco",
    imagem: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lGuI2iBUowwfG0pjJi7rEviZ5xs.jpg",
  },
  
  {
    titulo: "Star Trek: Discovery",
    imagem: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zh7GLsorxecv0D8d7QAVkQUe1ju.jpg",
  },
  
];

for(var i=0; i < listaFilmesSeries.length; i++){
    document.write("<div>");
    document.write("<img src=" + listaFilmesSeries[i].imagem + " alt='" + listaFilmesSeries[i].titulo + "'>");
    document.write("<p>" + listaFilmesSeries[i].titulo + "</p>");
    document.write("</div>");
}
