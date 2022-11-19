let fetchDiv = document.querySelector(".fetch");
const f = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((val) =>
    val.forEach((e) => {
      fetchDiv.innerHTML += `
    <div class="fetch__div-inner">
    <h1 class="fetch__div__inner-title">id: ${e.id}</h1>
    <p class="fetch__div__inner-name">Name: ${e.name}</p>
    <p class="fetch__div__inner-username">username: ${e.username}</p>
    <p class="fetch__div__inner-email">email: ${e.email}</p>
    <p class="fetch__div__inner-address">adress:    </p>{
        <br> <p class="fetch__div__inner-street">street: ${e.address.street}</p>
        <p class="fetch__div__inner-suite">suite: ${e.address.suite}</p>
        <p class="fetch__div__inner-city">city: ${e.address.city}</p>
        <p class="fetch__div__inner-zipcode">zipcode: ${e.address.zipcode}</p>
        <p class="fetch__div__inner-geo">geo: {
            lat: ${e.address.geo.lat}
            lng: ${e.address.geo.lng}
        }
    </p>
    }
    <p class="fetch__div__inner-phone">phone: ${e.phone}</p>
    <p class="fetch__div__inner-website">website: ${e.website}</p>
    <p class="fetch__div__inner-company">company:   {
        <br>
            <p class="fetch__div__inner-company-name">website: ${e.company.name}</p>
            <p class="fetch__div__inner-company-catchPhrase">catchPhrase: ${e.company.catchPhrase}</p>
            <p class="fetch__div__inner-company-bs">bs: ${e.company.bs}</p>

    }
        </p>
    </div>
    `;
    })
  );
