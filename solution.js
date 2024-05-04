function task1() {
  document.getElementById("task1").innerHTML =
    "The content is modified by JavaScript";

  document.getElementById("task1").style.color = "#00ffff";
}

function task2() {
  var toggle = document.getElementById("toggles");
  var output = document.getElementById("task2");

  if (toggle.checked == true) {
    output.innerHTML = "😊<br>Checked";
  } else {
    output.innerHTML = "😒<br>Not Checked";
  }
}

function task3() {
  var toggle = document.getElementById("avatar");
  var output = document.getElementById("task3");

  if (toggle.checked == true) {
    output.src = "/images/male.png";
  } else {
    output.src = "/images/female.png";
  }
}

function task4(target) {
  var letter = "0123456789ABCDEF";
  var color = "#";

  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }

  document.getElementById(target).style.backgroundColor = color;
}
var count = 0;
function task6() {
  count += 1;
  var myelement = document.getElementById("task6");

  myelement.classList.add("blur-anim-disappear");

  setTimeout(function () {
    myelement.classList.remove("blur-anim-disappear");
    myelement.innerHTML = count;
    myelement.classList.add("blur-anim-appear");
  }, 290);

  myelement.classList.remove("blur-anim-appear");
}

function task7() {
  var city = document.getElementById("city");
  var selectedCity = city.options[city.selectedIndex].value;
  var target = document.getElementById("city-desc");

  switch (selectedCity) {
    case "karachi":
      target.innerHTML =
        "Pakistan's largest city and economic hub, situated on the southern coast. Known for its bustling streets, vibrant culture, and diverse population. It has a significant port, making it a vital center for trade and commerce";
      break;

    case "lahore":
      target.innerHTML =
        "Often referred to as the cultural capital of Pakistan, Lahore is a city rich in history, art, and cuisine. It's famous for its Mughal-era architecture, including the stunning Badshahi Mosque and Lahore Fort. Lahore is also known for its lively bazaars and delicious food.";
      break;

    case "islamabad":
      target.innerHTML =
        "The capital city of Pakistan, known for its modern infrastructure, greenery, and scenic beauty. It's a planned city, with wide roads, parks, and a picturesque backdrop of the Margalla Hills. Islamabad houses the country's government institutions, diplomatic missions, and embassies.";
      break;

    case "peshawar":
      target.innerHTML =
        "The capital of Khyber Pakhtunkhwa province, located near the border with Afghanistan. Peshawar is one of the oldest cities in South Asia, with a rich history dating back to ancient times. It's known for its bustling bazaars, rich cultural heritage, and as a gateway to the historic Khyber Pass.";
      break;

    case "quetta":
      target.innerHTML =
        "The provincial capital of Balochistan, Quetta is situated in a valley surrounded by mountains. It serves as an important regional hub for trade and transportation. Quetta is known for its fruit orchards, particularly apples, and for its unique blend of Pashtun and Baloch cultures.";
      break;

    case "":
      target.innerHTML = "Select a city to see description";

    default:
      break;
  }
}
