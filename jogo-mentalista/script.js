var numeroSecreto = parseInt(Math.random() * 500)+1 ;
var tentativa = 0;
var resposta = prompt('Deseja iniciar, digite yes');
if(resposta == 'yes'){
  while(chute != nuemroSecreto){
    tentativa = tentativa + 1;
    var chute = prompt('Digite um numero entre 1 e 1000');
    if(chute == numeroSecreto){
      alert('Acertou! Jogo terminou em ' + tentativa + ' tentativas');
    }else if(chute > numeroSecreto){
      alert('Errou... o numero secreto é menor');
    }else if(chute < numeroSecreto){
      alert('Errou... o numero secreto é maior');
    }
  }
}else{
  alert('Ok! Podemos jogar outra hora.');
}



