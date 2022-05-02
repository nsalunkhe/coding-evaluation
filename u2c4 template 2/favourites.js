// write js code here corresponding to favourites.html
var matchArr=JSON.parse(localStorage.getItem("favourites")) ||[]
displaydata(matchArr)
function displaydata(data)
{
data.forEach(function(el)
{
    var tr=document.createElement("tr")
    var matchno=document.createElement("th")
    matchno.innerText=el.MatchNumber
    var teamA=document.createElement("th")
    teamA.innerText=el.TeamA
    var teamB=document.createElement("th")
    teamB.innerText=el.TeamB
    var date=document.createElement("th")
    date.innerText=el.Date
    var venue=document.createElement("th")
    venue.innerText=el.Venue
    var  remove= document.createElement("th")
  remove.innerText="Delete"
  remove.style.color="green"
  remove.style.cursor="pointer"
 remove.addEventListener("click",function()
 {
     deleteitem(el)
 })
tr.append(matchno,teamA,teamB,date,venue)


function deleteitem(elem,index)
   {
    matchArr.splice(index,1)
  }
},1)
}

