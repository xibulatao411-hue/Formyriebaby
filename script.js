
document.addEventListener("DOMContentLoaded", () => {
  const correctPassword = "11242005";

  const login = document.getElementById("login");
  const question = document.getElementById("question");
  const success = document.getElementById("success");

  const loginForm = document.getElementById("loginForm");
  const passwordInput = document.getElementById("password");
  const error = document.getElementById("error");

  const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");
  const heartsContainer = document.getElementById("hearts");

  // Check the password
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (passwordInput.value === correctPassword) {
      login.classList.add("hidden");
      question.classList.remove("hidden");
      error.textContent = "";

      createHearts(18);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      error.textContent = "Wrong password, my love. Try again. 💚";
      passwordInput.value = "";
      passwordInput.focus();
    }
  });

  // Make the No button move away
  function moveNoButton() {
    const rect = noButton.getBoundingClientRect();

    const maxX = Math.max(0, window.innerWidth - rect.width - 16);
    const maxY = Math.max(0, window.innerHeight - rect.height - 16);

    noButton.style.position = "fixed";
    noButton.style.left =
      `${8 + Math.random() * Math.max(0, maxX - 8)}px`;
    noButton.style.top =
      `${8 + Math.random() * Math.max(0, maxY - 8)}px`;
    noButton.style.zIndex = "10";
  }

  noButton.addEventListener("pointerenter", moveNoButton);

  noButton.addEventListener("click", (event) => {
    event.preventDefault();
    moveNoButton();
  });

  noButton.addEventListener("touchstart", (event) => {
    event.preventDefault();
    moveNoButton();
  }, { passive: false });

  // Show the love letter
  yesButton.addEventListener("click", () => {
    question.classList.add("hidden");
    success.classList.remove("hidden");

    noButton.style.position = "";
    noButton.style.left = "";
    noButton.style.top = "";

    createHearts(40);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Create floating green hearts
  function createHearts(amount) {
    for (let i = 0; i < amount; i++) {
      const heart = document.createElement("span");

      heart.className = "floating-heart";
      heart.textContent = Math.random() > 0.5 ? "💚" : "♡";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.fontSize = `${14 + Math.random() * 20}px`;
      heart.style.animationDuration = `${5 + Math.random() * 6}s`;
      heart.style.animationDelay = `${Math.random() * 2}s`;

      heartsContainer.appendChild(heart);

      heart.addEventListener("animationend", () => {
        heart.remove();
      });
    }
  }

  // Start the background animation
  createHearts(15);
});
