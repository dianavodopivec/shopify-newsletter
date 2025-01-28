document.addEventListener("DOMContentLoaded", () => {
    const $newsletter__modal = document.querySelector(".custom-newsletter")
    const $newsletter__close = document.querySelector("customNewsletter__close")
  
    setTimeout(() => {
        $newsletter__modal.classList.add("visible");
    }, 500); 
  
    $newsletter__close.addEventListener("click", () => {
      $newsletter__modal.classList.remove("visible");
    });
});
  