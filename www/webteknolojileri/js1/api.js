// API olmadan örnek veri simülasyonu

const ornekVeri = [
  {
    trackName: "Şımarık",
    artistName: "Tarkan",
    artworkUrl100: "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/b4/f6/2a/b4f62a8a-10b1-b86d-eed4-004628517d08/source/100x100bb.jpg",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/98/e3/7d/98e37d8a-214b-4867-0730-cf46b6d46003/mzaf_14210117937741755246.plus.aac.p.m4a"
  }
];

const liste = document.getElementById("muzik-listesi");

ornekVeri.forEach(sarki => {
  const div = document.createElement("div");
  div.className = "col-md-4 mb-4";

  div.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${sarki.artworkUrl100}" class="card-img-top" alt="${sarki.trackName}">
      <div class="card-body">
        <h5 class="card-title">${sarki.trackName}</h5>
        <p class="card-text">Sanatçı: ${sarki.artistName}</p>
        <audio controls class="w-100">
          <source src="${sarki.previewUrl}" type="audio/mpeg">
          Tarayıcınız bu ses öğesini desteklemiyor.
        </audio>
      </div>
    </div>
  `;
  liste.appendChild(div);
});
