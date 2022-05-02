// write js code here corresponding to matches.html
var match=JSON.parse(localStorage.getItem("schedule"))

displaydata(match)

var matchArr=JSON.parse(localStorage.getItem("favourites"))||[]
function displaydata(data)
{
data.forEach(function(el){
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
    var favourite=document.createElement("th")
  favourite.innerText="favourite"
  favourite.style.color="green"
  favourite.style.cursor="pointer"

  favourite.addEventListener("click" ,function(){
      myfavourites (el)

  })
  tr.append(matchno,teamA,teamB,date,venue,favourite)
})
}
function myfavourites(el)
{
    matchArr.push(el)
    localStorage.setItem("favourites",JSON.stringify(matchArr))
}