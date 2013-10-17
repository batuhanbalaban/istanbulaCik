istanbulaCik
============

İstanbul'a Çık! İstanbul Açık Olacak...

Geçtiğin yollardan tekerlekli sandalye ile geçmek istesen geçebilir miydin? Hiç düşündün mü?

Gelişmemiş bir ülkede yaşıyoruz. Çünkü bizden öncekiler üzerlerine düşeni yapmamış. Mesela bu kaldırım çok yüksek ben buradan inemem dememiş, bu kapıdan nasıl geçeceğiz dememiş... Bu duraktan otobüse nasıl bineceğiz dememiş...

Şimdi bizde, bizden öncekiler gibi olup arkamızdan kulağımızı çınlatmasınlar diye en azından kendi sokağımızı takip edelim...

Bu proje insanların sokaklarda daha rahat olabilmesi için bir araç olabilmeyi hedeflemektedir.

Daha fazla bilgi için docs klasöründeki notları okuyabilirsiniz.

Geliştiriciler için src klasöründe ayrıca readme vardır.

Projenin lokale çekilmesi ve çalışır duruma getirilmesi için yapılması gerekenler

0- Github uygulamasını windows'a kurun. http://windows.github.com/ 

1- Projenin lokale klonlanması;
https://github.com/serdarb/istanbulacik adresinde bulunan proje sayfasında, Fork tusuna basılarak projenin lokalimize gelmesi sağlanır. Bilgisayarımızdaki GitHub programında proje ekranda belirir. Clone tusuna basılır.

2- http://nodejs.org/ adresinden nodejs platformu bilgisayara kurulur.

3-Lokalimizde klonladığımız istanbulaCik projesini açın, sağ üst köşede bulunan tools and options menüsünde 'open a shell here' butonu seçin. açılan commanline'a "node -v" konutunu yazarak nodejs platformunun başarıyla yüklendiğini kontrol edebilirsiniz.

4- https://gist.github.com/serdarb/5102848#file-download-and-install-mongodb-as-windows-service-powershell-script   adresindeki powershell çalıştırılarak MongoDB kurulmalı (zaman alabilir)

5- ücüncü maddede belirtildiği şekilde command prompt açılır, ve projenin bulunduğu klasörde 
istanbulaCik\src\client\web adresine gidilir. bu adresteyken "npm install" komutu çalıştırılır. böylece paketler kurulmuş olur.

6-web klasöründe açyığımız command prompt'da "node .\app.js" komutu çalıştırdığımızda hata almadan uygulamanın çalıştığını anlıyoruz.

7-uygulamayı adres çubuğuna http://localhost:3000/ yazarak görüntüleyebiliriz.
