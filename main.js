window.addEventListener("DOMContentLoaded", function() {

    //get the form element dfined in your form HTML above

    var form = document.getElementById("my-form");

    var status = document.getElementById("status");

    // Success and Error functions for after the forme is submitted

    function success (){
        form.reset();
        status.classList.add('success')
        status.innerHTML = "Thanks!";
    }

    function error (){
        form.reset();
        status.classList.add('error')
        status.innerHTML = "Oops ! There was a problem.";
    }

    //Handle the form submission event
    
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
    });

    //help function for sending an ajax request 

    function ajax(method, url, data, success, error){
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== XMLHttpRequest.Done) return;
            if (xhr.status === 200) {
    success(xhr.response, xhr.reposnseType);
            
    } else {
        error(xhr.status, xhr.reposnse, xhr.reposnseType);

    }

         


    };
    xhr.send(data);
    }