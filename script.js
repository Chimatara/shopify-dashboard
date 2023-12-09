const closePlan = document.querySelector(".select-plan");
const closeMenu = document.querySelector(".close-menu");
const showPlans = document.querySelector(".toggle-on");
const plans = document.querySelector(".plans");
const checks = document.querySelectorAll(".checks ");
const info = document.querySelectorAll(".info");
const planInformation = document.querySelectorAll(".plan-information");
const options = document.querySelectorAll(".options");
const user = document.querySelector(".user");
const userMenu = document.querySelector(".user-menu");
const notificationBar = document.querySelector("#notification-bell");
const showNotification = document.querySelector(".user-notification");
const allMenu = document.getElementById("userMenu");
const checkbox = document.querySelectorAll(".myCheckbox");
const customCheckbox = document.querySelectorAll(".custom-checkbox");
const icons = document.getElementById("icons");
const label = document.querySelectorAll("label");

const svgString =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const url = "data:image/svg+xml;base64," + btoa(svgString);

const svgString2 =
  '<svg class="hide-check" id="svg2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const url2 = "data:image/svg+xml;base64," + btoa(svgString2);

const svgString3 =
  '<svg class="hide-check" id="svg3" width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <ellipse opacity="0.6" cx="7.00008" cy="7.00004" rx="7.00008" ry="7.00004" transform="matrix(0.526082 -0.850434 0.850437 0.526077 2.36414 14.2701)" fill="#1C181D" stroke="#1C181D" stroke-width="1.45835" stroke-linecap="round" stroke-linejoin="round"/> <g opacity="0.6"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7757 7.89535C12.0109 7.83993 12.2465 7.98566 12.3019 8.22085L13.5318 13.4402C13.5872 13.6754 13.4415 13.9109 13.2063 13.9663L10.5966 14.5813C10.3614 14.6367 10.1258 14.491 10.0704 14.2558C10.015 14.0206 10.1607 13.785 10.3959 13.7296L12.5798 13.215L11.4502 8.42154C11.3948 8.18635 11.5406 7.95077 11.7757 7.89535Z" fill="white"/> </g> </svg>';
const url3 = "data:image/svg+xml;base64," + btoa(svgString3);

const svgString4 =
  '<svg class="hide-check" id="svg4" width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#303030"></circle><path d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z" fill="#fff"></path></svg>';
const url4 = "data:image/svg+xml;base64," + btoa(svgString4);

const backgroundImages = [url, url2, url3, url4];

closeMenu.addEventListener("click", () => {
  closePlan.style.visibility = "hidden";
});

showPlans.addEventListener("click", () => {
  showPlans.classList.toggle("toggle-active");
  plans.classList.toggle("active");

  const expanded = icons.attributes["aria-expanded"].value === "true";

  if (expanded) {
    icons.ariaExpanded = "false";
  } else {
    icons.ariaExpanded = "true";
  }
});

checks.forEach((check, index) => {
  check.addEventListener("click", () => {
    planInformation.forEach((info) => {
      info.classList.remove("active");
    });
    planInformation[index].classList.add("active");

    options.forEach((option) => {
      option.classList.remove("options-active");
    });
    options[index].classList.add("options-active");

    label[index].style.fontWeight = 600;
  });
});

function userNotification() {
  user.addEventListener("click", (event) => {
    const isExpanded = user.attributes["aria-expanded"].value === "true";

    showNotification.classList.remove("active");
    userMenu.classList.toggle("active");

    if (isExpanded) {
      user.ariaExpanded = "false";
    } else {
      user.ariaExpanded = "true";
    }
    event.stopPropagation();
  });

  notificationBar.addEventListener("click", (event) => {
    const isExpanded =
      notificationBar.attributes["aria-expanded"].value === "true";

    userMenu.classList.remove("active");
    showNotification.classList.toggle("active");

    if (isExpanded) {
      notificationBar.ariaExpanded = "false";
    } else {
      notificationBar.ariaExpanded = "true";
    }

    event.stopPropagation();
  });

  document.body.addEventListener("click", () => {
    userMenu.classList.remove("active");
    showNotification.classList.remove("active");
  });

  userMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  showNotification.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}
userNotification();

function changeBackgroundImage() {
  let currentIndex = 0;
  let intervalId;
  let currentCheckedIndex = -1;

  function updateBackgroundChange() {
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    if (currentCheckedIndex !== -1) {
      customCheckbox[
        currentCheckedIndex
      ].style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
    }

    if (currentIndex === backgroundImages.length - 1) {
      clearInterval(intervalId);
    }
    updateProgressBar();
  }

  function startInterval() {
    clearInterval(intervalId);
    updateBackgroundChange();
    intervalId = setInterval(updateBackgroundChange, 200);
  }

  function updateProgressBar() {
    const checkedItems = Array.from(checkbox).filter(
      (item) => item.checked
    ).length;
    const totalItems = checkbox.length;
    const progress = checkedItems / totalItems;

    const progressBar = document.querySelector(".progress-bar");
    const progressText = document.querySelector(".progress p");

    progressBar.style.width = `${progress * 100}%`;
    progressText.textContent = `${checkedItems} / ${totalItems} completed`;
  }

  checkbox.forEach((checkItem, index) => {
    checkItem.addEventListener("click", () => {
      if (!checkItem.checked) {
        customCheckbox[index].style.backgroundImage = "";
        clearInterval(intervalId);
        currentCheckedIndex = -1;
      } else {
        currentCheckedIndex = index;
        startInterval();
      }
      updateProgressBar();
    });
  });
}

changeBackgroundImage();
