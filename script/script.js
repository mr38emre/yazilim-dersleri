function openNav() {
  document.getElementById("YanMenu").style.width = "100%";
  document.getElementById("soz").style.display = "none";
}

function closeNav() {
  document.getElementById("YanMenu").style.width = "0";
  document.getElementById("soz").style.display = "block";
}

var sozler = [
  "Bir şeyin standart olması, onu her uygulamada kullanacaksınız anlamına gelmiyor. (XML gibi.)",

  "Açık kodlu proje, köpek balığına benzer. Hareket etmelidir, yoksa ölür! -Ruby geliştiricisi Yukihiro Matsumoto",

  "İyi bir BT mimarisi çoğunlukla anlaşmazlıkların anlaşmasıdır. İyisi ve kötüsü de anlaşmazlık içerir fakat kötü mimariler, nasıl olacağına dair anlaşmadan mahrumdur. -ObjectWatch yöneticisi Roger Sessions",

  "Her şeyi optimize ederseniz, hep mutsuz olacaksınız. -Büyük adam, Donal Knuth",

  "Bilgisayar biliminde sadece iki zor şey var: ön belleği geçersiz hâle getirmek (cache invalidation) ve bir şeylere isim vermek. -Phil Karlton",

  "Bilgisayarlar faydasızdır. Onlar size sadece cevapları verebilir. Pablo Picasso",

  "Ada programlama dili bir mimarın eseridir, bir bilgisayar bilimcisinin değil. - Jean Icbiah, Ada’nın mucidi",

  "Otoyolda son sürat ilerleyen yedekleme kasetleriyle dolu bir kamyonun bantgenişliğini küçümsemeyin. Andrew Tanenbaum",

  "Sembolik mantık gerçek dünyaya uygulanamaz. Marvin Minsky",

  "Dijital verinin kopyalanmasını engellemek suyun kendisini kuru hale getirmeye çalışmak gibi bir şey. Bruce Schneier",

  "Şüpheye kapıldığınızda kaba kuvvet kullanın. Ken Thompson",

  "Odaklanmak, 1000 iyi fikre hayır diyebilmektir. -Steve Jobs",

  "Kod yalan söylemez, yorumlar bazen söyler. -Ron Jeffries",

  "Tasarım, nasıl başarısız olacağınızı seçmektir. -Ron Fein",

  "Programcılar, geleceği düşündükleri için sürekli olarak işleri gereğinden fazla karmaşıklaştırmaktadırlar. Geleceği boşverin. Bugün için programlayın. -David Heinemeier Hansson",

  "İnsanlar, yazılımın ürün olmadığını, ürün üretmek için kullanıldığını anlayacaklar. -Linus Torvalds",

  "Kod, espiri gibidir. Açıklamak zorundaysanız kötüdür. -Cory House",

  "Kötü yönetim yazılım maliyetini diğer tüm faktörlerden daha hızlı arttırır. -Barry Boehm",

  "Servislerinizi birbirinden bağımsız olarak ayağa kaldıramıyorsanız mikroservis değillerdir. -Daniel Bryant",

  "Basitlik, güvenilirlik için önkoşuldur. -Edsger W. Dijkstra",

  "Kodunuzda NE yerine NEDEN'e odaklanmak sizi daha iyi bir geliştirici yapar. -Jordi Boggiano",

  "Kullanıcıları, sistemin zaten bildiği bir bilgiyi vermeye zorlamayın. -Rick Lemons",

  "Konuşmak bedava, bana kodu göster! -Linus Torvalds",

  "Ben sadece icat ederim. Sonra insanların gelip icadıma ihtiyaç duymasını beklerim. -R. Buckminster Fuller",

  "Eğer fikrinizi yazıya dökemiyorsanız, onu kodlayamazsınız. -Peter Halpern",

  "İlerlemenin sırrı başlamaktır. -Mark Twain",

  "Eğer gerçekler teorinize uymuyorsa gerçekliği değiştirin. -Albert Einstein",

  "Merak duygusunun zorunlu eğitimden sağ çıkması mucize. -Albert Einstein",

  "Aynı şeyi sürekli tekrarlayıp farklı sonuç beklemek deliliktir. -Albert Einstein",

  "Asla yanlış yapmamış insan, yeni hiç birşey denememiştir. -Albert Einstein",

  "Mantık sizi A noktasından B noktasına götürür. Hayal gücü her yere. -Albert Einstein",

  "Hızlı, İyi, Ucuz. Sadece ikisini seçebilirsin. -Bilinmiyor",

  "Mücadele yoksa ilerleme de yoktur. -Frederick Douglass",

  "Bir projeyi daha hızlı bitirmenin en iyi yolu, erkenden başlamaktır. -Jim Highsmith",

  "En iyi performans arttırımı, çalışmayan durumdan çalışır duruma getirmektir. -John Ousterhout",

  "Tüm büyük programlama felaketleri çok fazla fikri alıp tek bir yere koymaktan kaynaklanmıştır. Gordon Bell",

  "Daha az kod yazmak, esnek kalmanın güzel bir yoludur. -Pragmatic Programmer",

  "Performansın anahtarı zarafettir. Binlerce özel durum gerçekleştirimi değildir. -Jon Bentley. Doug MvIlroy",

  "Neden hiçbir zaman DOĞRU yapmak için vaktimiz yok da, YENİDEN yapmak için vaktimiz var? -Bilinmiyor",

  "Üretken bir programcının işe alınabilir olmasını beklemek, ilk bulunan programcının üretken olmasını beklemekten iyidir. -Bjarne Stroustrup",

  "Tasarımda mükemmellik, ekleyecek bir şey kalmadığında değil, çıkaracak bir şey kalmadığında yakalanır. -Antonie de Saint-Exupery",

  "Gizemli bir cinayetin sırlarını çözmek iyidir. Fakat kodun sırlarını çözmek zorunda kalmamalısınız. Kodun kolaylıkla anlaşılabilir olması gerekir. -Steve McConnell",

  "Yazılımcı; kahveyi koda çeviren organizma. -Bilinmiyor",

  "Bazen Pazartesi günü tüm gün yatmak, haftanın kalanını Pazartesi yazılan kodu debug etmeye harcamaktan iyidir. -Dan Salomon",

  "Gereksinim veya tasarım olmadan programlama, boş bir dosyaya bug eklemekten başka bir şey değildir. -Louis Srygley",

  "Acı çekmeden öğrenemeyiz. -Aristotle",

  "Mükemmel fikirleri çalmak konusunda her zaman yüzsüz davrandık. -Steve Jobs",

  "Ancak ikisi de donmuşsa suda yürümek ve şartnameden yazılım geliştirmek kolaydır. -Edward V Berard",

  "Debug sırasında, acemiler hata giderici kod eklerler; uzmanlar ise kusurlu olan kodu çıkarırlar. -Richard Pattis",

  "Programlamadaki ilerleyişi yazılan kod satırı sayısıyla ölçmek, uçak inşasındaki ilerleyişi ağırlıkla ölçmeye benzer. -Bill Gates",

  "İyi bir yazılımcı, tek yön bir yoldan karşıya geçerken iki yöne de bakandır. -Bilinmiyor",

  "Yazılım, yapmasını söylediğiniz işi yapar, yapmasını istediğinizi değil. -Bilinmiyor",

  "Beta Latince'de Hala çalışmıyor demektir. -Bilinmiyor",

  "Önce meseleyi çözün. Sonra kodu yazın. -John Johnson",

  "Benim makinemde çalışıyor. -Bilinmiyor",

  "İnternetten bulunan kodu canlıdaki koda yapıştırmak, yolda bulunan sakızı çiğnemek gibidir. Bilinmiyor",

  "Bilgi güçtür. -Francis Bacon",

  "Okulumun eğitimimi engellemesine asla izin vermedim. -Mark Twain",

  "Sorunun kaynağını düzeltin, semptomunu değil. -Steve Maguire"
];
var soz = document.getElementById("soz");
var rasgele = 0;

var sozbul = function() {
  rasgele = Math.floor(Math.random() * sozler.length);
  soz.innerHTML = sozler[rasgele];
};

sozbul();

function notifyMe() {
        if (!Notification) {
            alert('Lütfen Chrome, Firefox, Opera, Internet Explorer veya Spartan\'ın güncel bir versiyonunu kullanınız...');
            return;
        }

        if (Notification.permission !== "granted")
            Notification.requestPermission();

        var notification = new Notification('Hoşgeldiniz!', {
            icon: 'http://www.karayeltasarim.com/Resim/Upload/miniworld635620976047761956.png',
            body: "Bizimle iletişime geçmek için tıklayın!",
        });


        notification.onclick = function () {
            window.open("http://www.karayeltasarim.com/tr/iletisim.html");
        }
    }

    window.onload = notifyMe;