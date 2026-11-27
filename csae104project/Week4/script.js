// 2-second splash screen
setTimeout(() => {
  const splash = document.getElementById("splashScreen");
  if (splash) splash.classList.add("hidden");
}, 2000);

// Live search filter across notice cards
const noticeSearch = document.getElementById("noticeSearch");
const noticeCards = Array.from(document.querySelectorAll(".notices .notice"));

if (noticeSearch) {
  noticeSearch.addEventListener("input", () => {
    const query = noticeSearch.value.trim().toLowerCase();
    noticeCards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? "" : "none";
    });
  });
}

// Log in / Create Account modal
const authModal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const backHomeBtn = document.getElementById("backHomeBtn");
const showLoginTab = document.getElementById("showLoginTab");
const showCreateTab = document.getElementById("showCreateTab");
const loginForm = document.getElementById("loginForm");
const createForm = document.getElementById("createForm");

function openLogin() {
  showLoginTab.classList.add("active");
  showCreateTab.classList.remove("active");
  loginForm.style.display = "flex";
  createForm.style.display = "none";
  authModal.classList.add("open");
}

function openCreate() {
  showCreateTab.classList.add("active");
  showLoginTab.classList.remove("active");
  createForm.style.display = "flex";
  loginForm.style.display = "none";
  authModal.classList.add("open");
}

function closeModal() {
  authModal.classList.remove("open");
}

loginBtn.addEventListener("click", openLogin);
registerBtn.addEventListener("click", openCreate);
showLoginTab.addEventListener("click", openLogin);
showCreateTab.addEventListener("click", openCreate);
backHomeBtn.addEventListener("click", closeModal);

authModal.addEventListener("click", (event) => {
  if (event.target === authModal) closeModal();
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Logged in!");
  loginForm.reset();
  closeModal();
});

createForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Account created!");
  createForm.reset();
  openLogin();
});