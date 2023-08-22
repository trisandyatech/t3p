const MOCK_ITEMS = [
  {
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 5,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
  },
  {
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 10,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
  },
  {
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 20,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
  },
  {
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 30,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
  },
  {
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 40,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
  },
  {
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 50,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
  },
  {
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 60,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
  },
  {
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 70,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
  },
  {
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 80,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
  },
  {
    image: "https://placehold.it/280X150",
    name: "IPhone 11 Pro Ultra Max",
    price: 90,
    location: "Pedakallepalli, Mopidevi",
    postedDate: "20-08-2023",
  },
];

function addItems(event) {
  const root = document.getElementById("items");
  MOCK_ITEMS.forEach(function (item, i) {
    const div = createItem(item, i);
    root.appendChild(div);
  });
}

function createItem(item, i) {
  const div = document.createElement("div");
  div.classList.add("list");

  const anchor = document.createElement("a");
  anchor.setAttribute("href", `/item.html?id=${i}`);

  div.appendChild(anchor);

  const img = document.createElement("img");
  img.setAttribute("src", item.image);

  const price = document.createElement("p");
  price.innerHTML = item.price;

  const name = document.createElement("p");
  name.innerHTML = item.name;

  const location = document.createElement("p");
  location.innerHTML = item.location;

  anchor.append(img, price, name, location);
  return div;
}
