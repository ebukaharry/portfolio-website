const btn = document.querySelector('.btn-toggle');
const bulb = document.getElementById('bulb');

btn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    if(document.body.classList !== 'light-theme'){
        bulb.innerHTML = "💡";
    }
    else {
        bulb.innerHTML = "💡";
    }
   
    
});