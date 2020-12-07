const dropbtn = document.getElementById('dropbtn');

dropbtn.onclick = function (event) {
    const dropdown = document.getElementById('dropdown-content');
    console.log(dropdown.classList);
    dropdown.classList.toggle('show');
};
