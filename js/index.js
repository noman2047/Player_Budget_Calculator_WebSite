function perPlayer(totalplayer){
  document.getElementById('perPlayer').addEventListener('keyup',function(item){
    const perPlayerRate=item.target.value;
    const totalResult=perPlayerRate * totalplayer;
    document.getElementById('calculat').addEventListener('click',function(){
      document.getElementById('totalRate').innerText=totalResult;
    })
  })
}

const players=[];
function addToPlayer(player){
  if( player.disabled = true){
    player.style.background = 'grey';

  }
  const eachPlayer = player.parentNode.parentNode.children[0].innerText;

  players.push(eachPlayer); 
  const totalPlayer=players.length;
  if(totalPlayer>5){
    alert("You Already 5 Players Selected.")
  }
  else{
    document.getElementById('count').innerText=totalPlayer;
    const playerNames=document.getElementById('playerName');
    const li=document.createElement('li');
    li.innerText=eachPlayer;
    playerNames.appendChild(li)
    perPlayer(totalPlayer);

  }
}

