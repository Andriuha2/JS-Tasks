document.getElementById("btn").addEventListener("click", () => {
  
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((users) => {
        
        // elements
        const login = document.createElement("h3");
        const avatar = document.createElement("h3");
        const container = document.createElement("div");

        //  styles
        container.style.display = "flex";
        container.style.justifyContent = "space-between";
        container.style.margin = "auto";
        container.style.text = "black";
        container.style.backgroundColor = "white";
        container.style.borderRadius = "6px solid black";
        container.style.borderBottom = "3px solid white";
        container.style.padding = "1rem 0";

        // content
        login.textContent = users.login;
        avatar.textContent = users.avatar_url;

        // append
        container.append(login, avatar);
        const output = document.getElementById("output");
        output.append(container);
      });
    });
});


const ENDPOINT = "https://api.github.com/users";
