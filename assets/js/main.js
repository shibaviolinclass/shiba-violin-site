const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const gallery = document.querySelector("[data-gallery]");

if (gallery) {
  const mainImage = gallery.querySelector("[data-gallery-main-image]");
  const mainCaption = gallery.querySelector("[data-gallery-main-caption]");
  const thumbnails = gallery.querySelectorAll("[data-gallery-thumb]");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const thumbnailImage = thumbnail.querySelector("img");
      const thumbnailCaption = thumbnail.querySelector("span");

      if (!mainImage || !mainCaption || !thumbnailImage || !thumbnailCaption) {
        return;
      }

      const currentMain = {
        src: mainImage.getAttribute("src") || "",
        alt: mainImage.getAttribute("alt") || "",
        caption: mainCaption.textContent || "",
      };

      mainImage.setAttribute("src", thumbnailImage.getAttribute("src") || "");
      mainImage.setAttribute("alt", thumbnailImage.getAttribute("alt") || "");
      mainCaption.textContent = thumbnailCaption.textContent || "";

      thumbnailImage.setAttribute("src", currentMain.src);
      thumbnailImage.setAttribute("alt", currentMain.alt);
      thumbnailCaption.textContent = currentMain.caption;
    });
  });
}
