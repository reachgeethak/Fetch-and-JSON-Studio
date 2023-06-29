// TODO: add code here
window.addEventListener("load", function(){
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
        response.json().then(function(astronauts){
            let id = document.getElementById("container");
            for(let i = 0; i < astronauts.length; i++){
                id.innerHTML += `
                <div class="astronaut">
   <div class="bio">
      <h3>${astronauts[i].firstName} ${astronauts[i].lastName}</h3>
      <ul>
         <li>Hours in space: ${astronauts[i].hoursInSpace}</li>
         <li>Active:${astronauts[i].active}/li>
         <li>Skills:${astronauts[i].skills.join(" , ")}</li>
      </ul>
   </div>
   <img class="avatar" src="${astronauts[i].picture}">
</div>
                `
            }
        })
    })
})