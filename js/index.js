//checking Validation it is Number Or Not
function isItNumber(numberOrNot){
  if(isNaN(numberOrNot)){
    alert("Please Enter Number.");
  }
  else{
    return numberOrNot;
  }

}
//Total player,manager and coach result
function perPlayer(totalplayer){
  document.getElementById('perPlayer').addEventListener('keyup',function(item){
    const perPlayerRate=item.target.value;
    const validationCheck=isItNumber(perPlayerRate);
    const totalPlayerCost=validationCheck * totalplayer;
    document.getElementById('calculat').addEventListener('click',function(){
      document.getElementById('totalRate').innerText=totalPlayerCost;
    })
  })
  document.getElementById('coach').addEventListener('keyup',function (item){
    const coachBilleni=document.getElementById('coach');
    const perPlayerRate=item.target.value;
    if(isNaN(perPlayerRate)){
      alert("It is Not A Number");
      coachBilleni.value="";
    }
    else{
      coachBilleni.value=coachBill;
    }
  })
  
  document.getElementById('manager').addEventListener('keyup',function (item){
    const managerBilleni=document.getElementById('manager');
    const perPlayerRate=item.target.value;
    if(isNaN(perPlayerRate)){
      alert("It is Not A Number");
      managerBilleni.value="";
    }
    else{
      managerBilleni.value=perPlayerRate;
    }
  })
}

document.getElementById('calculateTotal').addEventListener('click',function(){
  const getCoachValue=document.getElementById('coach');
  const getmanagerValue=document.getElementById('manager');
  const getplayerValue=document.getElementById('totalRate');

  const getCoachValuefloat=parseFloat(getCoachValue.value);
  const getmanagerValuefloat=parseFloat(getmanagerValue.value);
  const getplayerValuefloat=parseFloat(getplayerValue.innerText);
  const totalResult=getCoachValuefloat+getmanagerValuefloat+getplayerValuefloat;
  const updatedata=document.getElementById('update');
  updatedata.innerText=totalResult;

})

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

