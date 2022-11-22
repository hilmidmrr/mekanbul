const anaSayfa=function(req, res) {
    res.render('anasayfa',{ 
    //buraları çift tırnakta yaz, json ile ilgili olunca çift tırnak olacakmış
      "baslik": "Anasayfa",
      "sayfaBaslik":{
        "siteAd":"MekanBul",
        "slogan":"Civardaki Mekanları Keşfet!"
      },
      "mekanlar":[
        {
          "ad":"Starbucks",
          "puan":"3",
          "adres":"Centrum Garden AVM",
          "imkanlar":["Dünya Kahveleri","Kurabiyeler"],
          "mesafe":"10 km"
        },
        {
          "ad":"Taş Kafe",
          "puan":"4",
          "adres":"SDÜ Batı Kampüsü",
          "imkanlar":["Çorba","Kahvaltı"],
          "mesafe":"1 km"
        }
      ]
    }
    );
  }
  
  const mekanBilgisi=function(req, res) {
    res.render('mekanbilgisi', 
      { 
        'baslik': 'Mekan Bilgisi',
        "mekanBaslik":"Starbucks",
        "mekanDetay":{
          "ad":"Starbucks",
          "puan":"3",
          "adres":"Centrum Garden AVM",
          "saatler":[
          {
            "gunler":"Pazartesi-Cuma",
            "acilis":"07:00",
            "kapanis":"23:00",
            "kapali":false
          },
          {
            "gunler":"Cumartesi-Pazar",
            "acilis":"09:00",
            "kapanis":"22:00",
            "kapali":false
          }
        ],
        "imkanlar":["Dünya Kahveleri","Kurabiyeler"],
          "koordinatlar":{
            "enlem":"37.7",
            "boylam":"30.5"
          },
          "yorumlar":[
            {
              "yorumYapan":"Hilmi İhsan Demir",
              "yorumMetni":"Güzeldi",
              "yorumTarihi":"20 Ekim 2022",
              "puan":"4"
            },
            {
              "yorumYapan":"Asım Sinan Yüksel",
              "yorumMetni":"İdare eder.",
              "yorumTarihi":"20 Ekim 2022",
              "puan":"3"
            }
          ]
        }
      });
  }
  
  const yorumEkle=function(req, res) {
    res.render('yorumekle', { 'title': 'Yorum Ekle' });
  }
  
  //modules.export içine yazılan dış dunyaya acılır
  module.exports={
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
  };