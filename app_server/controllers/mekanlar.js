var express = require('express');
var router = express.Router();

const anaSayfa = function(req, res, next) {
    res.render("anasayfa", {
        'baslik' : "Ansayfa",
        'sayfaBaslik' :{
        'siteAd' : 'Mekanbul',
        'slogan' : 'Civardaki Mekanları Keşfet!'
        },
        'mekanlar':[
            {
                'ad' : 'Starbucks',
                'adres' : 'Centrium Garden AVM',
                'puan' : '4',
                'imkanlar' : ['Dünya Kahveleri','Kekler','Pastalar'],
                'mesafe' : '10km'
            }
            ,
            {
                'ad' : 'Gloria Jeans',
                'adres' : 'SDÜ Doğu Kampüsü',
                'puan' : '3',
                'imkanlar' : ['Kahve','Çay','Pasta'],
                'mesafe' : '5km'
            }           
        ]
    } 
    );
};
const mekanBilgisi = function(req, res, next) {
    res.render('mekanbilgisi', {
        'baslik' : 'Mekan Bilgisi',
        'mekanBaslik' : 'Starbucks',
        'mekanDetay' : {
            'ad' : 'Starbucks',
            'adres' : 'Centrium Garden AVM',
            'puan' : '4',
            'imkanlar' : ['Dünya Kahveleri','Kekler','Pastalar'],
            'koordinatlar' : {
                'enlem' : '37.7',
                'boylam' : '30.5'
            },
            'saatler' : [
                {   
                    'gunler' : 'Pazartesi-Cuma',
                    'acilis' : '9.00',
                    'kapanis': '23.00',
                    'kapali' : false
                },
                {
                    'gunler' : 'Cumartesi-Pazar',
                    'acilis' : '10.00',
                    'kapanis': '22.00',
                    'kapali' : false
                }
            ],
            'yorumlar' : [
                {
                    'yorumYapan' : 'Hilmi İhsan Demir',
                    'puan' : '4',
                    'tarih' : '20 Ekim 2022',
                    'yorumMetni' : 'Kahveler gayet güzeldi.'
                }
            ]
        }
    }
    );
}
const yorumEkle = (req, res, next) => {
    res.render("yorumekle", { title: "Yorum ekle" });
};

module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle,
};