function openClassInfo() {
  window.open(
    "InfoPopUp.html",
    "_blank",
    "toolbar=no, location=yes, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=yes, width=350, height=550"
  );
}

function openTicketInfo() {
  window.open(
    "InfoPopUp.html#ticketInfo",
    "_blank",
    "toolbar=no, location=yes, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=yes, width=350, height=550"
  );
}

function clearBox(b) {
  const box = document.getElementById(b);
  if (box.value == "DD/MM/YYYY") {
    box.value = "";
  }
}

function noRetDate() {
  const ckBox = document.getElementById("cbox");
  const retArea = document.getElementById("ret");
  if (ckBox.checked == true) {
    retArea.value = "N/A";
    retArea.disabled = true;
  } else {
    retArea.value = "DD/MM/YYYY";
    retArea.disabled = false;
  }
}

function validateDate() {
  const depDate = document.getElementById("dep").value;
  const retDate = document.getElementById("ret").value;

  if (depDate == "" || depDate == "DD/MM/YYYY") {
    alert("No departure date entered");
    return false;
  }

  if (checkDate(depDate) == false) {
    return false;
  }

  if (retDate == "" || retDate == "DD/MM/YYYY") {
    alert("No return date entered");
    return false;
  }

  if (retDate != "N/A") {
    return checkDate(retDate);
  }
}

function checkDate(d) {
  // Regular expression used to check if date is in correct format
  const pattern = new RegExp("[0-3][0-9]/(0|1)[0-9]/(20)[0-9]{2}");
  if (d.match(pattern)) {
    let date_array = d.split("/");
    let day = date_array[0];
    let month = date_array[1] - 1;
    let year = date_array[2];

    realDate = new Date();

    userDate = new Date(year, month, day, 18, 0, 0, 0);

    if (year != userDate.getFullYear()) {
      alert("Year is not valid!");
      return false;
    }

    if (month != userDate.getMonth()) {
      alert("Month is not valid!");
      return false;
    }

    if (day != userDate.getDate()) {
      alert("Day is not valid!");
      return false;
    }

    if (userDate.valueOf() < realDate.valueOf()) {
      alert(
        "Flights must be on or after " +
          realDate.toLocaleDateString() +
          "." +
          "\n" +
          "Same day flights must be booked before 6pm."
      );
      return false;
    }
  } else {
    alert("Date format is not valid!" + "\n" + "Must be in form DD/MM/YYYY");
    return false;
  }
}
// for contact us
function validateForm() {
  const subject = document.getElementById("sub").value;
  const email = document.getElementById("from").value;
  const message = document.getElementById("msg").value;

  if (subject == "") {
    alert("No subject entered.");
    return false;
  }

  if (email == "" || email.indexOf("@") == -1) {
    alert("No valid email entered.");
    return false;
  }

  if (message == "") {
    alert("No message entered.");
    return false;
  }
}

//for experience slide show

let myIndex = 0;
carousel();

function carousel() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > slides.length) {
    myIndex = 1;
  }
  slides[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

//flights and fares scrip

if (document.images) {
  img1 = new Image();
  img1.src = "images/seatmapFirst.gif";
  img2 = new Image();
  img2.src = "images/seatmapBus.gif";
  img3 = new Image();
  img3.src = "images/seatmapEco.gif";
}

function writeText(txt) {
  document.getElementById("desc").innerHTML = txt;
}

function changeMap(source) {
  document.getElementById("planeClass").src = source;
}

function changeClass(cls) {
  document.getElementById("flightClass").value = cls;
}

//My account

function validateReg() {
  var firstname = document.getElementById("fir").value;
  var familyname = document.getElementById("fam").value;
  var email = document.getElementById("from").value;
  var confirmemail = document.getElementById("from1").value;
  var password = document.getElementById("pass").value;
  var confirmpassword = document.getElementById("pass2").value;

  if (firstname == "") {
    alert("No details entered.");
    return false;
  }
  if (familyname == "") {
    alert("No details entered.");
    return false;
  }

  if (email == "" || email.indexOf("@") == -1) {
    alert("No valid email entered.");
    return false;
  }

  if (confirmemail == "" || email.indexOf("@") == -1) {
    alert("No valid email entered.");
    return false;
  }
  if (password == "") {
    alert("Password not entered.");
    return false;
  }
  if (confirmpassword == "" || confirmpassword != password) {
    alert("Password not the same.");
    return false;
  }
}
function validateSign() {
  var username = document.getElementById("use").value;
  var password2 = document.getElementById("ssap").value;

  if (username == "") {
    alert("No details entered.");
    return false;
  }
  if (password2 == "") {
    alert("No details entered.");
    return false;
  }
}
