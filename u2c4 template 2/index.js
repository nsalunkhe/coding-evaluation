// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", myfunction)
var match=JSON.parse(localStorage.getItem("schedule"))||[]

function myfunction()
{
  event.preventDefault();
  var matchobj={
      MatchNumber:masaiForm.matchNum.value,
      TeamA:masaiForm.teamA.value,
      TeamB:masaiForm.teamB.value,
      Date:masaiForm.date.value,
      Venue:masaiForm.venue.value
  }
  match.push(matchobj)
  localStorage.setItem("schedule",JSON.stringify(match))
  window.location.href="matches.html"
}
