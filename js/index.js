const navigation = document.querySelector(".nav");
const searchBar = document.querySelector(".header-search");
// signature p io alagna kofa mihegny width
const signature = document.querySelector(".signature");

// fonction mampy swich bouton < io
let switchIndex;
function toogleSwitch() {
  let width = 4;

  if (!switchIndex) {
    document.documentElement.style.setProperty("--widthChange", width + "%");
    switchIndex = true;
    return;
  }

  width = 17;
  document.documentElement.style.setProperty("--widthChange", width + "%");
  switchIndex = false;
}

// bouton swicht de header
btn_fleche.addEventListener("click", () => {
  btn_fleche.classList.toggle("fleche-active");
  searchBar.classList.toggle("header-search-active");
  signature.classList.toggle("signature-active");
  toogleSwitch();
});

// evenement click au moment du click de l'input
search.addEventListener("click", () => {
  search.classList.add("input-active");
});
// evenement blur est au moment ou on quite l'input !! Damien Bryndokx
search.addEventListener("blur", () => {
  search.classList.remove("input-active");
});

// ====================== drop down boutton===============
// premier drop down
const arrow1Down = document.querySelector(".arrow1");
const blocLinks = document.querySelector(".bloc-links");
const btn1Drop = document.getElementById("btnDropDown");

let toggleIndex;
let indexOfToggle;

btn1Drop.addEventListener("click", (e) => {
  toggleDropDown(toggleIndex, blocLinks, arrow1Down, e.target.id);
});

// fonction atao rehefa voa click
function toggleDropDown(index, boutton, icone, target) {
  if (!index) {
    boutton.style.height = `${boutton.scrollHeight}px`;
    icone.classList.toggle("arrow-active");
    index = true;
    // condition manavaka fa toogleIndex na tsia no activena!
    if (target == "btnDrop" || target == "span2") {
      indexOfToggle = index;
    } else {
      toggleIndex = index;
    }
    return;
  }

  boutton.style.height = 0;
  index = false;
  // condition : premier drop no ampiasaina na drop faharoa mitov @ le ambony io
  if (target == "btnDrop" || target == "span2") {
    indexOfToggle = index;
  } else {
    toggleIndex = index;
  }
  icone.classList.toggle("arrow-active");
}

// second drop down
const divLinks = document.getElementById("bloc_links");
const arrow2Down = document.querySelector(".arrow2");

btnDrop.addEventListener("click", (e) => {
  toggleDropDown(indexOfToggle, divLinks, arrow2Down, e.target.id);
});

// ======================================== partie sponsor =============

const sponsor = document.getElementById("btnSponsor");
const sponsorBloc = document.querySelector(".sponsor");
const blocVoyage = document.querySelector(".voyage-bloc");

sponsor.addEventListener("click", () => {
  sponsorBloc.classList.add("visible");
  blocVoyage.style.display = "none";
});

// ======================= carrousel hotel et voiture====
const imagesHotel = document.getElementById("carouselTB");
const imagesvoiture = document.getElementById("carouselLR");
/*

let i = 0;
function changeImage() {
  imagesHotel.style.background = `url(${arrayOfImageHotel[i]}) center / cover no-repeat`;
  if (i < arrayOfImageHotel.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changeImage, 2000);
}
changeImage();
*/
let position = 1;
// creation image on peut le faire dans html
const createImage = (first, last, clas, balise) => {
  for (let i = first; i <= last; i++) {
    const div = document.createElement("div");
    div.style.background = `url(./sary/${i}.jpg) center / cover no-repeat`;
    //Tsy atao avy @ js chemin ny sary fa avy @ html
    div.className = clas;
    balise.appendChild(div);
  }
};

createImage(3, 7, "photo", imagesHotel);

function changeImage() {
  if (position <= -4) {
    position = 0;
    imagesHotel.style.transform = `translateY(${position * 100}%)`;
    imagesHotel.style.transition = "all 2s ease-in-out;";
  } else {
    position--;
    imagesHotel.style.transform = `translateY(${position * 100}%)`;
    imagesHotel.style.transition = "transform 2s ease-in-out";
  }
  setTimeout(changeImage, 3000);
}

createImage(59, 63, "sary", imagesvoiture);

let widthBegins = 1;
const changeImage2 = () => {
  if (widthBegins <= -4) {
    widthBegins = 0;
    imagesvoiture.style.transform = `translateX(${widthBegins * 20}%)`;
    imagesvoiture.style.transition = "all 1.5s ease-in-out;";
  } else {
    widthBegins--;
    imagesvoiture.style.transform = `translateX(${widthBegins * 20}%)`;
    imagesvoiture.style.transition = "transform 1.5s ease-in-out";
  }
  setTimeout(changeImage2, 2500);
};
// des que windows charge lance animation
window.onload = changeImage();
window.onload = changeImage2();
