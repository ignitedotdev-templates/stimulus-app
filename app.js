document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.href;

  const pathname = document.getElementById("pathname");

  pathname.innerHTML = currentPath;
});
