"use strict";

// Movies
const moviesArr = [
  {
    title: "The King's Daughter",
    year: 2022,
    ticketPrice: 300,
    posterURL:
      "https://c8.alamy.com/comp/2HBWP9P/poster-the-kings-daughter-2022-gravitas-ventures-photo-credit-gravitas-ventures-the-hollywood-archive-2HBWP9P.jpg",
  },
  {
    title: "English Vinglish ",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://static-koimoi.akamaized.net/wp-content/new-galleries/2012/06/Sridevi-English-Vinglish-Movie-Poster-1.jpg",
  },
  {
    title: "CAPTAIN AMERICA",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://i.pinimg.com/236x/7f/d2/84/7fd284a6c1f35f86119bb0fafb7b734b--captain-america--steve-rogers.jpg",
  },
  {
    title: "Scream",
    year: 2022,
    ticketPrice: 300,
    posterURL:
      "https://www.aniblogshere.com/wp-content/uploads/2022/02/IMG_20220218_032619-680x1024.jpg",
  },
  {
    title: "A Fairy After All",
    year: 2022,
    ticketPrice: 300,
    posterURL:
      "https://www.naijaprey.com/wp-content/uploads/2022/02/A-Fairy-Tale-After-All.jpg",
  },
  {
    title: "The Lost City ",
    year: 2022,
    ticketPrice: 300,
    posterURL:
      "https://www.scrolldroll.com/wp-content/uploads/2022/02/the-lost-city-hollywood-movies-releasing-in-march-2022.jpg",
  },
  {
    title: "Star Girl",
    year: 2022,
    ticketPrice: 300,
    posterURL: "https://picfiles.alphacoders.com/395/395677.jpg",
  },
  {
    title: "Deja Vu",
    year: 2022,
    ticketPrice: 320,
    posterURL:
      "https://www.torrentbd.com/posters/6CfRAB1gviZFhyWsK8IMDQYY15097330.jpg",
  },
  {
    title: "Sita Ramam",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/OpZt68x1USWw4IwH49M14gYY20850406.jpg",
  },
  {
    title: "Dobaaraa",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/1srBZRpeJ0pbW4fT7ktiVwYY14042066.jpg",
  },
  {
    title: "Uri",
    year: 2019,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/0IhNmMvXLhghUAj2sZgMZQYY8291224.jpg",
  },
  {
    title: "Cobra",
    year: 2022,
    ticketPrice: 380,
    posterURL:
      "https://www.torrentbd.com/posters/jfFZ6X2ACbpykVVsoXZhgAYY9466814.jpg",
  },
  {
    title: "Jurassic World",
    year: 2022,
    ticketPrice: 330,
    posterURL:
      "https://www.torrentbd.com/posters/8EZ9vIAm4IpAZUdLuho9gwYY8041270.jpg",
  },
  {
    title: "The Vanished",
    year: 2018,
    ticketPrice: 300,
    posterURL:
      "https://www.torrentbd.com/posters/AbDZEU9nBJZBwBWpgRprZwYY6955298.jpg",
  },
  {
    title: "Dark Knight Rises",
    year: 2012,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/flp1AIyyTSW6EoXFZp39jAYY1345836.jpg",
  },
  {
    title: "Avatar",
    year: 2009,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/gR1COWvmGG37Qz2I4V7TSgYY0499549.jpg",
  },
  {
    title: "Vesper",
    year: 2022,
    ticketPrice: 320,
    posterURL:
      "https://www.torrentbd.com/posters/Zk9u9CpJkmAEZOyu3ZAq8wYY20225374.jpg",
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    ticketPrice: 370,
    posterURL:
      "https://www.torrentbd.com/posters/VDZUEqOdFDjt7rKw91WhRQYY4154796.jpg",
  },
  {
    title: "Radhe Shyam",
    year: 2022,
    ticketPrice: 340,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BZDQ5YjAxMmYtOGM3Zi00MWU2LWJmOTMtZjhhYjkyNGQ1NjE3XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
  },
  {
    title: "House of the Dragon",
    year: 2022,
    ticketPrice: 380,
    posterURL:
      "https://www.torrentbd.com/posters/oUw3f9JJagihLRybyY7P5wYY11198330.jpg",
  },
  {
    title: "Attorney Woo",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/aDUZ4745QpjXfgquTzQ5AwYY20869502.jpg",
  },
  {
    title: "The Sandman",
    year: 2022,
    ticketPrice: 370,
    posterURL:
      "https://www.torrentbd.com/posters/BD8VXOgCq4d4P2vBeiG3qAYY1751634.jpg",
  },
  {
    title: "Game of Thrones",
    year: 2011,
    ticketPrice: 380,
    posterURL:
      "https://www.torrentbd.com/posters/eCEzQi8tgNq6bLUUS6GvPQYY0944947.jpg",
  },
  {
    title: "Devil in Ohio",
    year: 2022,
    ticketPrice: 320,
    posterURL:
      "https://www.torrentbd.com/posters/1rN7pJD60NRmxH2TPGEwQQYY15432016.jpg",
  },
  {
    title: "Flower of Evil",
    year: 2020,
    ticketPrice: 300,
    posterURL:
      "https://www.torrentbd.com/posters/IbnZZQxZZg9RIjknkdCxIgYY11691684.jpg",
  },
  {
    title: "Rubikon",
    year: 2022,
    ticketPrice: 300,
    posterURL:
      "https://www.torrentbd.com/posters/TniRZHKO0nZv09JCa8RLZQYY13829262.jpg",
  },
  {
    title: "Into the Deep",
    year: 2022,
    ticketPrice: 320,
    posterURL:
      "https://www.torrentbd.com/posters/zZnz5m2SkIqmwjuRjgwMCAYY11005128.jpg",
  },
  {
    title: "Take the Night",
    year: 2022,
    ticketPrice: 330,
    posterURL:
      "https://www.torrentbd.com/posters/Ci0Z2AARW9I8CPIn6jev4wYY10680838.jpg",
  },
  {
    title: "Monstrous",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNmJhZDJkMGEtYzQxMC00MDA0LTk4NWItMjljNDRjNTJmNjY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    title: "Triple Threat",
    year: 2022,
    ticketPrice: 330,
    posterURL:
      "https://www.joblo.com/wp-content/uploads/2019/03/triple-threat-1.jpg",
  },
  {
    title: "Cadaver",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/uSjfX4CobqC3o0LZ7FDNiQYY11102262.jpg",
  },
  {
    title: "Pil's Adventures",
    year: 2021,
    ticketPrice: 310,
    posterURL:
      "https://www.torrentbd.com/posters/RMg470prsaRlrM6OzzLonQYY15091284.jpg",
  },
  {
    title: "The Art of Passion",
    year: 2022,
    ticketPrice: 330,
    posterURL:
      "https://www.torrentbd.com/posters/kJ8XyJDdxZZ6Pe0kqGmwfAYY19380876.jpg",
  },
  {
    title: "Prey",
    year: 2022,
    ticketPrice: 380,
    posterURL:
      "https://www.torrentbd.com/posters/DegyyZ5ZNP7LoOiVvnoN1AYY11866324.jpg",
  },
  {
    title: "Luck",
    year: 2022,
    ticketPrice: 340,
    posterURL:
      "https://www.torrentbd.com/posters/5qzrfqkStIP3flwZ4ihYGQYY7214954.jpg",
  },
  {
    title: "Carter",
    year: 2022,
    ticketPrice: 330,
    posterURL:
      "https://www.torrentbd.com/posters/6TxRWSmE3HIDvnGZ0pS1ZAYY21237030.jpg",
  },
  {
    title: "Carma",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/CjLfdksflPNI4aqNFf5SFAYY14992864.jpg",
  },
  {
    title: "Do Rerrge",
    year: 2022,
    ticketPrice: 340,
    posterURL:
      "https://www.digitaltrends.com/wp-content/uploads/2022/08/akIjKJDHcVN4bzifcEarKVPNpoa.jpg?p=1#038;p=1.jpg",
  },
  {
    title: "The Princess",
    year: 2022,
    ticketPrice: 330,
    posterURL:
      "https://www.torrentbd.com/posters/ARNOJg3bwASSfJ7cCveoKAYY13406136.jpg",
  },
  {
    title: "Doctor Strange",
    year: 2022,
    ticketPrice: 300,
    posterURL:
      "https://www.scrolldroll.com/wp-content/uploads/2022/04/Doctor-strange-Hollywood-movies-releasing-in-may-2022.webp",
  },
  {
    title: "Anchor",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/VGEM3CadFzZPTbGwUDVIrwYY19245482.jpg",
  },
  {
    title: "The Witch: Part 2",
    year: 2022,
    ticketPrice: 350,
    posterURL:
      "https://www.torrentbd.com/posters/boHrz7AZFY4N6SQknw2ZdQYY13721828.jpg",
  },
  {
    title: "Vikram",
    year: 2022,
    ticketPrice: 380,
    posterURL:
      "https://www.torrentbd.com/posters/idJqYus6zjdGAoERtKkLAAYY9179430.jpg",
  },
  {
    title: "HACKER",
    year: 2022,
    ticketPrice: 330,
    posterURL:
      "https://qqcdnpictest.mxplay.com/pic/ab50a1e87b15628c8a38e8ed1df0d4a7/en/2x3/320x480/ba7540a0a0677b006edfb27afcd1b196_1280x1920.webp",
  },
];

// display movies
function displayMovies() {
  const moviesElement = document.querySelector(".movies");

  for (let i = 0; i < moviesArr.length; i++) {
    // console.log(moviesArr[i]);
    const movieElement = document.createElement("div");
    movieElement.classList.add(
      "movie",
      "card",
      "p-0",
      "col",
      "shadow",
      "border-0",
      "rounded-3"
    );
    movieElement.innerHTML = `
         <div class="movie-poster">
              <img
                src="${moviesArr[i].posterURL}"
                class="card-img-top w-100"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title fw-bold">${moviesArr[i].title} (${moviesArr[i].year})</h5>
              <h5 class="text-danger fw-bold">${moviesArr[i].ticketPrice} ৳</h5>

              <button class="btn btn-dark fw-bold book-ticket">
                Book Ticket
              </button>
            </div>
    `;
    moviesElement.append(movieElement);
  }
}
displayMovies();

// display modal
function displayModal() {
  const bookTicekets = document.querySelectorAll(".book-ticket");
  const modalWindow = document.querySelector(".modal-window");

  for (let i = 0; i < bookTicekets.length; i++) {
    bookTicekets[i].addEventListener("click", function () {
      for (let j = 0; j < moviesArr.length; j++) {
        if (i === j) {
          const title = moviesArr[j].title;
          const year = moviesArr[j].year;
          const price = moviesArr[j].ticketPrice;
          const vat = (price * 7) / 100;
          const subtotal = price + vat;

          // showing modal window
          modalWindow.style.opacity = 1;
          modalWindow.style.visibility = "visible";

          modalWindow.innerHTML = `
          <span class="close-btn">❌</span>
          <h2 class="fw-bold mt-3">${title} (${year})</h2>
          <h5><strong>Price:</strong> ${price} ৳</h5>
          <h5><strong>VAT:</strong> ${vat} ৳</h5>
          <h3><strong>Subtotal:</strong> ${subtotal} ৳</h3>
          <button class="btn btn-danger fw-bold mt-4 buy-now">Buy Now</button>
          `;

          //Purchase Modal
          const buyNowBtn = document.querySelector(".buy-now");
          buyNowBtn.addEventListener("click", function () {
            modalWindow.style.opacity = 1;
            modalWindow.style.visibility = "visible";

            modalWindow.innerHTML = `
          <h3 class="fw-bold mt-3 text-success">${title} (${year}) Movie Ticket Successfully Purchase</h3>
          <h5><strong>Ticket Cost:</strong> ${price} ৳</h5>
          <h5><strong>Standered VAT:</strong> ${vat} ৳</h5>
          <h3><strong>Subtotal:</strong><span class="text-danger"> ${subtotal} ৳</h3>
          <h3><strong>Payment:</strong><span class="text-success"> ${subtotal} ৳ (Complete)</h3>
          <button class="btn btn-warning fw-bold mt-4 print-ticket">Print Ticket🖨</button>
          `;
            //Ticket Print Modal Close
            const printTicket = document.querySelector(".print-ticket");
            printTicket.addEventListener("click", function () {
              modalWindow.style.opacity = 0;
              modalWindow.style.visibility = "hidden";
            });
          });
          // hiding the modal
          const closeBtn = document.querySelector(".close-btn");

          closeBtn.addEventListener("click", function () {
            modalWindow.style.opacity = 0;
            modalWindow.style.visibility = "hidden";
          });
        }
      }
    });
  }
}

displayModal();
