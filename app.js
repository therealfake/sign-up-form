const form = document.getElementById('sign-up')

const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');
const errorMsg = document.getElementById('pass-error');

/**
 * Checks if p1 is the same as p2.
 * @param {String} p1       password 1
 * @param {String} p2       password 2
 */
function checkPassword(p1, p2) {
    return p1 == p2;
}

form.addEventListener('submit', (e) => {
    if (!checkPassword(pass1.value, pass2.value)){
        e.preventDefault();
        errorMsg.textContent = 'Passwords Don\'t Match';
    }
});
