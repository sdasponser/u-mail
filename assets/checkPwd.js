document.getElementById("login").addEventListener("submit", function(e)
{
    e.preventDefault();
    const pwd = document.getElementById("pwd").value.toUpperCase();

    if(pwd==="W3ST1S8E57")
    {
        window.location.href = "./4e4f204348454154494e47.html";
    }
    else
    {
        window.location.href = "./error.html";
    }
});