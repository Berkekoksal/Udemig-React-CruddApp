# Vite

- Web projeleri için hızlı bir geliştirme ve build aracı sağşlayan bir bundler'dır.

- Hızlı proje oluşturma ve geliştirme deneyimi ile öne çıkar.

## Özellikler

1. Create React App ile karşılaştırdığımız zaman gereksiz olarak nitelendirebileceğimiz herhangi bir paket veya dosyayı indirmez , bu sayede çok daha hızlı bir kurulumu vardır.

2. HMR: Projedeki değişiklikleri hızlıca tarayıcıya yansıtarak anlık güncellemeler sağlar. HMR , sadece değişen modüller güncellenir ve tarayıcıda yeniden yüklenir.

3. Sadece geliştirme sürecimizi daha performanslı hale getirir.

4. Build aşaması da daha hızlıdır.

# Json-Server

- Sahte bir api oluşturmak amacıyla kullanılan bir js kütüphanesi.

- db.json dosyasında oluşturulan json verisinin baz alarak sadece sizin localinizde çalışan sahte bir api oluşturur.

- GET , POST , PUT , PATCH , DELETE methodlarıyla istek atılabilir ve gerçekleşen değişimler db.json dosyasını günceller.

- JSON serverı gerçek bir projede backend hazır olana kadar frontendi ilerletmek amacıyla API'ın sahtesini oluşturmak amacıyla veya kendimizi geliştirmek isteyeceğimiz projelerin backend ihtiyacını karşılaması için kullanabiliriz.

- JSON-server kullandığımız projeleri json-server sadece localde çalıştığından dolayı yayınlayamayız.

# AXIOS

- Axios, js'de http istekleri yapmak için kullanılan kütüphanedir.

- js'deki fetch methodunun daha gelişmiş bir versiyonudur.

# Axios'un Sağladığı Avantajlar

- Gelen isteğin datasını otomatik olarak json'dan js'e çevirir.

- Gönderilecek isteğin bodysi'ni otomatik olarak js'den json'a çevirir.

- Nesne formatındaki parametreleri işleyebilir.

- İsteklere zaman aşımı eklenebilir.

- Projeye göre özelleştirebiliyoruz (baseURL).

* GET

```js
fetch("http://localhost:3000/posts")
  .then((res) => res.json)
  .then((data) => console.log("fetch", data));
```

```js
axios
  .get("http://localhost:3000/posts")
  .then((res) => console.log("axios", res));
```

- POST

```js
fetch("http://localhost:3000/contact", {
  method: "POST",
  body: JSON.stringfy(newContact),
}).catch((err) => console.log(err));
```

```js
axios
  .post("http://localhost:3000/contact", newContact)
  .cath((err) => console.log(err));
```

- DELETE

```js
fetch(`http://localhost:3000/contact/${id}`) {
  method: "DELETE",
}.catch((err) => console.log(err));
```

```js
axios
  .delete(`http://localhost:3000/contact/${id}`)
  .cath((err) => console.log(err));
```

# CRUD

## Create - Read - Update - Delete
