const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

//sort this array in an alphabetical order ignoring articles

const sortedBands = bands.sort((a, b) =>
  stripArticle(a) > stripArticle(b) ? 1 : -1
);
function stripArticle(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}

document.querySelector("#bands").innerHTML = sortedBands
  .map((band) => `<li>${band}</li>`)
  .join("");
