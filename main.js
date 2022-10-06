// Buy ticket button----------------------------------------------
const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(
    ".js-modal-container"
);

// Hàm hiển thị modal mua vé (them class open vào modal)
function showBuyTicket() {
    modal.classList.add("open");
}

// Hàm ẩn modal mua vé (an class open cua modal)
function hideBuyTicket() {
    modal.classList.remove("open");
}

// Lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener("click", showBuyTicket);
}

// Nghe hanh vi click vao button close
modalClose.addEventListener("click", hideBuyTicket);
modal.addEventListener("click", hideBuyTicket);
modalContainer.addEventListener("click", function (event) {
    event.stopPropagation();
});

//end buy ticket---------------------------------------

// Dong mo menu
var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
    
}

// tu dong dong mo menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function() {
        header.style.height = null;
    }
}
