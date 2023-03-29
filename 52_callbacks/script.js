function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function() {
        console.log("Loaded script with src: " + src);
        callback(null, src);
    }
    script.onerror = function() {
        console.log("Error loading script with SRC : " + src);
        callback(new Error("Src got some error"));
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    alert("Hello bahia");
}

function gm() {
    alert("gm");
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", hello);