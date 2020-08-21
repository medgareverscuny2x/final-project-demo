const toggleNav = () => {
  const nav = document.getElementById("topnav");
  if (nav.className === "navigation") {
    nav.className += " responsive";
  } else {
    nav.className = "navigation";
  }

  console.log("clicked nav");
};
