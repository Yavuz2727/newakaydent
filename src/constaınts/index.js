const CardHuzmet = [
  { name: "Ağız ve Çene Cerrahisi", number: 1 },
  { name: "Diş İmplantları", number: 2 },
  { name: "Periodontal Hastalıklar", number: 3 },
  { name: "Çocuk Diş Hekimliği", number: 4 },
];
const CardAcıklama = [
  {
    name: "Ağız ve Çene Cerrahisi",
    text: "Oral ve maksillofasiyal cerrahi olarak da isimlendirilen ağız, diş ve çene cerrahisi, yüksek eğitimli bir diş cerrahı tarafından gerçekleştirilen operasyonlardır. Yüz, çene ve ağızla ilgili hastalıkların tedavisi, yaralanmaların veya kusurların düzeltilmesi bu birimde yapılan işlemlerdir.",
    router: "/AgızVeCene",
  },
  {
    name: "Diş İmplantları",
    text: "İmplant eksik dişlerin tedavisinde kullanılan ve çene kemiğinin içine yerleştirilen titanyumdan yapılmış vidalardır. Bu vidaların üzerine diş protezi yerleştirilir. İmplant tedavisinin diğer tedavilere avantajı komşu dişlere zarar verilmez. Yani komşu dişlerin kesilmesi gerekmez",
    router: "/DısImplant",
  },
  {
    name: "Periodontal Hastalıklar",
    text: "Periodontal hastalıklar dişeti ve dişleri destekleyen diğer dokuları etkileyen iltihabi hastalıklardır. Erişkinlerde diş kayıplarının %70'inden periodontal hastalıklar sorumludur. Bu hastalıklar erken dönemde teşhis edildiklerinde kolay ve başarılı bir şekilde tedavi edilebilirler.",
    router: "/PerıOdental",
  },
  {
    name: "Çocuk Diş Hekimliği",
    text: "0-13 yaş arası çocukların süt ve kalıcı dişlerinin sağlıklı bir şekilde korunmasıyla ve bu dişlerde genetik, travmatik, çürük gibi nedenlerle oluşabilecek sorunların tedavisiyle ilgilenen ana bilim dalıdır.",
    router: "/CocukDıs",
  },
];
const Vizyon = [
  {
    text: "***Hasta odaklı bir yaklaşımla, en güvenilir ve kaliteli diş sağlığı hizmetlerini sunarak, hastalarımızın gülüşlerini güzelleştirmek ve sağlıklarını korumak.***",
    number: 4,
  },
  {
    text: "***Alanında öncü bir diş kliniği olmak ve en son teknolojileri kullanarak, hastalarımızın ağız ve diş sağlığına dair tüm ihtiyaçlarını karşılamak.***",
    number: 5,
  },
  {
    text: "***Hastalarımızın memnuniyeti ve güveni her zaman en önemli önceliğimizdir.Deneyimli ve uzman ekibimizle her zaman en iyi hizmeti sunmak için profesyonelliği benimseriz.Etik değerlere uygun, şeffaf ve dürüst bir hizmet sunmak önceliğimizdir.Sağlık sektöründeki gelişmeleri takip ederek, ekip üyelerinin bilgi ve becerilerini sürekli olarak güncellemeye önem veririz.***",
    number: 6,
  },
];

export const constants = {
  CardHuzmet,
  CardAcıklama,
  Vizyon,
};
