  document.addEventListener("DOMContentLoaded", () => {
    async function getSunsetForMountain(lat, lng) {
        let response = await fetch(
          `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
        );
        let data = await response.json();
        return data;
      }
    // Select");
    mountainsArray.forEach(m => mountainsSelect.appendChild(new Option(m.name)));
    mountainsSelect.addEventListener("change", async e => {
        const selectedIndex = mountainsSelect.selectedIndex;
        if(selectedIndex){ //not help which 0 therefore falsey
            const m = mountainsArray[selectedIndex - 1];
            
            const coords = m.coords.lat.toFixed(3) + 
                    ", " + 
                    m.coords.lng.toFixed(3);

            results.innerHTML = "<h1>" + m.name + "</h1>" + `                
                Elevation:   <b>${m.elevation}</b><br>
                Effort:      <b>${m.effort   }</b><br>
                Coordinates: <b>(${coords})</b><br>
                <br>
                ${m.desc}
                <br><br>
            `; 
            //add img image here? how?
            if(m.img){
                const i = document.createElement("img");
                i.alt = "Mountain Image";
                i.src = "data/images/" + m.img;
                results.appendChild(i);
            }
            let data=await getSunsetForMountain (m.coords.lat, m.coords.lng)
            results.innerHTML += data.results.sunrise
            results.innerHTML += " - "
            results.innerHTML += data.results.sunset 
        }
    });//end change
});//end load

// ARRAY  NA I0 I1 ...
// SELECT H0 M1 M2 ...
// SINDEX  0  1  3 ...