document.getElementById('toggleMenu').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebarMenu');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    } else {
        sidebar.classList.add('active');
    }
});

document.getElementById('closeMenu').addEventListener('click', function () {
    document.getElementById('sidebarMenu').classList.remove('active');
});

var menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
        var submenu = document.getElementById(item.getAttribute('data-toggle'));
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    });
});

document.getElementById('logoutButton').addEventListener('click', function () {
    var logoutModal = new bootstrap.Modal(document.getElementById('confirmLogoutModal'));
    logoutModal.show();
});

document.getElementById('confirmLogout').addEventListener('click', function () {
    window.location.href = '/logout';
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2500);
});



document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2500);
});


