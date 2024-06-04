// Função para o botão "Diverse Library"
document.querySelector('#Library').addEventListener('click', function() {
    window.scrollTo({top: 1300, behavior: 'smooth'});
});

// Função para o botão "Exclusive Content"
document.querySelector('#Exclusive').addEventListener('click', function() {
    window.scrollTo({top: 1570, behavior: 'smooth'});
});

// Função para o botão "Streaming Quality"
document.querySelector('#Quality').addEventListener('click', function() {
    window.scrollTo({top: 1840, behavior: 'smooth'});
});

// Função para o botão "Multi-Platform"
document.querySelector('#Multi-Platform').addEventListener('click', function() {
    window.scrollTo({top: 2110, behavior: 'smooth'});
});

document.querySelector('#GetAccount').addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});

    const loginLink = document.querySelector('#singup');
    loginLink.classList.add('blink');

    setTimeout(function() {
        loginLink.classList.remove('blink');
    }, 1500); // 
});


document.querySelector('#AFKINT').addEventListener('click', function() {
    window.scrollTo({top: 700, behavior: 'smooth'});
});


// Função para o botão "Sign up"
document.querySelector('#singup').addEventListener('click', function() {
   
    

});

// Função para o botão "Login"
document.querySelector('#Login').addEventListener('click', function() {
    window.location.href ="#";
});

// Função para o link "My Github"
document.querySelector('#github-link').addEventListener('click', function() {
    window.location.href ="https://github.com/johnpaz01";
});

// Verifica se o dispositivo é móvel
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Redireciona se for um dispositivo móvel
if (isMobileDevice()) {
    window.location.href = "../Error.html";
}

