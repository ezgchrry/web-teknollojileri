new Vue({
  el: "#app",
  data: {
    form: {
      adsoyad: "",
      email: "",
      telefon: "",
      cinsiyet: "",
      ilgi: [],
      mesaj: "",
      sehir: ""
    },
    hata: ""
  },
  methods: {
    gonderForm() {
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      const telefonPattern = /^[0-9]{10,11}$/;

      if (!this.form.adsoyad || !this.form.email || !this.form.telefon || !this.form.cinsiyet || !this.form.sehir) {
        this.hata = "Lütfen tüm zorunlu alanları doldurun.";
        return;
      }
      if (!emailPattern.test(this.form.email)) {
        this.hata = "Geçerli bir e-posta adresi girin.";
        return;
      }
      if (!telefonPattern.test(this.form.telefon)) {
        this.hata = "Telefon numarası sadece rakamlardan oluşmalı (10-11 hane).";
        return;
      }

      // Tüm verileri localStorage'a at
      localStorage.setItem("iletisimFormu", JSON.stringify(this.form));
      window.location.href = "sonuc.html";
    },
    temizleForm() {
      this.form = {
        adsoyad: "",
        email: "",
        telefon: "",
        cinsiyet: "",
        ilgi: [],
        mesaj: "",
        sehir: ""
      };
      this.hata = "";
    }
  }
});
