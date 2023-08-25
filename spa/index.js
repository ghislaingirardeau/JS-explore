const pages = {
  home: "<h2>Home page</h2><div>Welcome to my spa</div>",
  about: "<h2>About page</h2><div>Find information here</div>",
};

function loadContent(key) {
  let getContent;
  switch (key) {
    case "home":
      getContent = pages.home;
      break;

    case "about":
      getContent = pages.about;
      break;
  }
  return (document.getElementById("content").innerHTML = getContent);
}

const navHome = document.getElementById("navHome");
const navAbout = document.getElementById("navAbout");

navHome.addEventListener("click", () => {
  loadContent("home");
});

navAbout.addEventListener("click", () => {
  loadContent("about");
});

console.log(window.location.href);

if (window.location.href == "http://127.0.0.1:5500/api") {
}
