var mongoose=require("mongoose"); //mongoose import edildi
var Mekan=mongoose.model("mekan");

const cevapOlustur=function(res,status,content){
    res.status(status).json(content); //ekranda ne basacağını gösterir
}

const yorumEkle=function(req,res){
    cevapOlustur(res,200,{"durum":"basarili"});
}
const yorumGetir = function (req, res) {
    if (req.params && req.params.mekanid && req.params.yorumid) {
      Mekan.findById(req.params.mekanid)
        .select("ad yorumlar")
        .exec(function (hata, mekan) {
          var cevap, yorum;
          if (!mekan) {
            cevapOlustur(res, 404, {
              "hata": "Böyle bir mekan yok!",
            });   
            return;
          } else if (hata) {
            cevapOlustur( res, 400, hata);
            return;
          }
          if (mekan.yorumlar && mekan.yorumlar.length > 0) {
            yorum = mekan.yorumlar.id (req.params.yorumid);
            if (!yorum) {
              cevapOlustur( res, 404, {
                "hata": "Böyle bir yorum yok!",
              });
            }
            else {
              cevap = {
                mekan: {
                  ad: mekan.ad,
                  id: req.params.mekanid,
                },
                yorum: yorum,
              };
              cevapOlustur(res,200,cevap);
            }
          } else {
            cevapOlustur(res, 404, {
              "hata" : "Hiç yorum yok",
            });
          }
        });
    } else {
      cevapOlustur(res, 404, {
        "hata" : "Bulunamadı. mekanid ve yorumid mutlaka girilmeli.",
      });
    }
  };
const yorumGuncelle=function(req,res){
    cevapOlustur(res,200,{"durum":"basarili"});
}
const yorumSil=function(req,res){
    cevapOlustur(res,200,{"durum":"basarili"});
}

module.exports={
    yorumEkle,
    yorumGetir,
    yorumGuncelle,
    yorumSil
}