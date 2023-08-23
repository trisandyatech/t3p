const MOCK_ITEMS = [];

class Image {
  address;
  width = 150;
  height = 100;
  constructor(address) {
    this.address = address;
  }

  setWidth = (width) => {
    this.width = width;
  };

  getWidth = () => this.width;

  setHeight = (height) => {
    this.height = height;
  };
}

class OlxItem {
  id;
  name;
  price;
  image;
  location;
  postedDate;
  postedBy;

  constructor(name, price, image, location, postedBy, postedDate) {
    this.id = Math.random();
    this.name = name;
    this.price = price;
    this.image = new Image(image);
    this.location = location;
    this.postedBy = postedBy;
    this.postedDate = postedDate;
  }

  updatePrice = (newPrice) => {
    this.price = newPrice;
  };
}

for (let i = 0; i < 100; i++) {
  MOCK_ITEMS.push(
    new OlxItem(
      "Dell XPS " + (i + 1),
      70000,
      "https://m.media-amazon.com/images/I/51oRDX42M2L._SX300_SY300_QL70_FMwebp_.jpg",
      "Pedakallepalli",
      "Jyothi Babu Araja",
      new Date()
    )
  );
}

MOCK_ITEMS[2].updatePrice(50000);

MOCK_ITEMS[2].image.setWidth(200);
MOCK_ITEMS[2].image.setHeight(150);

console.log(MOCK_ITEMS);

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
  img.setAttribute("src", item.image.address);
  img.style.width = item.image.getWidth() + "px";
  img.style.height = item.image.height + "px";

  const price = document.createElement("p");
  price.innerHTML = item.price;

  const name = document.createElement("p");
  name.innerHTML = item.name;

  const location = document.createElement("p");
  location.innerHTML = item.location;

  anchor.append(img, price, name, location);
  return div;
}

function itemView(item, i) {
  const pageview = document.createElement("div");
  preview.classList.add("page");
  //const wrap = document.
}
