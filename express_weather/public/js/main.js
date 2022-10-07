const submitbtn = document.getElementById("submitbtn");
const city = document.getElementById("city");
const cityname = document.getElementById("cityname");
const temp = document.getElementById("temp_real");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");

const getinfo = async (event) => {
  //   alert("hello");

  event.preventDefault();
  let cityval = city.value;
  if (cityval == "") {
    cityname.innerText = `plz write the name before search`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=a34df139e3277661f1e8309043f860da`;
      const res = await fetch(url);
      const data = await res.json();
      const arrdata = [data];
      cityname.innerText = `${arrdata[0].name} ,${arrdata[0].sys.country}`;
      temp.innerText = arrdata[0].main.temp;
      const tempmood = arrdata[0].weather[0].main;

      //condition--
      //   if (tempmood == "Sunny") {
      //     temp_status.innerText =
      //       "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      //   } else if (tempmood == "Clouds") {
      //     temp_status.innerText =
      //       "<i class='fas fa-cloud' style='color:#dfe4ea;'></i>";
      //   } else if (tempmood == "Rainy") {
      //     temp_status.innerText =
      //       "<i class='fas fa-rain style='color:#a4b0be;'></i>";
      //   } else {
      //     temp_status.innerText =
      //       "<i class='fas fa-cloud' style='color:#44c3de;'></i>";
      //   }

      datahide.classList.remove("data_hide");
    } catch (error) {
      cityname.innerText = `plz enter the city name properly`;
      datahide.classList.add("data_hide");
    }
  }
};
submitbtn.addEventListener("click", getinfo);
