# 🍽️ TheMeal - Yemek Tarifi Keşif Uygulaması

React ile geliştirilmiş modern ve responsive yemek tarifi keşif uygulaması. Binlerce tarife göz atın, favorilerinizi kaydedin ve sezgisel arama deneyimiyle farklı mutfakları keşfedin.


## 🌐 Canlı Demo

**[Uygulamayı İncele →](https://mealv1.netlify.app/)**

## ✨ Özellikler

- 🔍 **Gerçek Zamanlı Arama** - Yazarken anında sonuç ve otomatik tamamlama önerileri
- ❤️ **Favori Sistemi** - Sevdiğiniz tarifleri localStorage ile kalıcı olarak kaydedin
- 🌙 **Karanlık/Aydınlık Mod** - Yumuşak geçişlerle tema değiştirme
- 📱 **Tamamen Responsive** - Mobil, tablet ve masaüstü için optimize edilmiş
- 🗂️ **Kategori Gezintisi** - Tarifleri kategorilere göre keşfedin (Vejetaryen, Deniz Ürünleri, Tatlılar vb.)
- 🎨 **Akıcı Animasyonlar** - Hover efektleri ve geçişlerle cilalı kullanıcı arayüzü
- 🌍 **Uluslararası Tarifler** - Dünya mutfaklarından yemekleri keşfedin

## 🛠️ Kullanılan Teknolojiler

- **React 18** - Modern React ve Hooks
- **React Router v6** - İstemci tarafı yönlendirme
- **Context API** - Global state yönetimi
- **Bootstrap 5** - Responsive UI framework
- **Bootstrap Icons** - İkon kütüphanesi
- **TheMealDB API** - Tarif veri kaynağı
- **Vite** - Hızlı build aracı ve geliştirme sunucusu

## 📦 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v14 veya üzeri)
- npm veya yarn

### Adımlar

1. **Repoyu klonlayın**
```bash
git clone https://github.com/Erdem-Baran/meal-api-project.git
cd meal-api-project/meal-project-github
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

4. **Tarayıcınızda açın**
```
http://localhost:5173
```

5. **Production için build alın**
```bash
npm run build
```

## 📁 Proje Yapısı
```
meal-project-github/
├── src/
│   ├── components/         # Yeniden kullanılabilir bileşenler
│   │   ├── FavoriteButton.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Loading.jsx
│   │   └── Search.jsx
│   ├── contexts/          # React Context provider'lar
│   │   ├── Favorites.jsx
│   │   └── ThemeContext.jsx
│   ├── layout/            # Layout bileşenleri
│   │   └── MainLayout.jsx
│   ├── pages/             # Sayfa bileşenleri
│   │   ├── CategoryMeals.jsx
│   │   ├── FavoritesPage.jsx
│   │   ├── Home.jsx
│   │   ├── Meal.jsx
│   │   ├── MealDetails.jsx
│   │   ├── SearchResults.jsx
│   │   └── Vegetarian.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── vite.config.js
```

## 🎯 Öğrenme Çıktıları

Bu projeyi geliştirirken şunları öğrendim ve uyguladım:

- ✅ **İleri Seviye React Hooks** - useState, useEffect, useContext, useRef
- ✅ **React Router v6** - Dinamik routing, nested routes, URL parametreleri
- ✅ **Context API** - Redux olmadan global state yönetimi
- ✅ **API Entegrasyonu** - Dış veri kaynağından veri çekme ve işleme
- ✅ **localStorage** - Kullanıcı tercihlerini kalıcı hale getirme
- ✅ **Debouncing** - Arama performansını optimize etme
- ✅ **Responsive Tasarım** - Bootstrap ile mobile-first yaklaşım
- ✅ **Component Composition** - Yeniden kullanılabilir UI bileşenleri oluşturma


## 🙏 Teşekkürler

- **API:** [TheMealDB](https://www.themealdb.com/) - Ücretsiz tarif API'si
- **İkonlar:** [Bootstrap Icons](https://icons.getbootstrap.com/)
- **UI Framework:** [Bootstrap 5](https://getbootstrap.com/)

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - öğrenme amaçlı kullanımda özgürsünüz.

## 👤 Geliştirici

**Erdem Baran**

- GitHub: [@Erdem-Baran](https://github.com/Erdem-Baran)
- LinkedIn: [Profilim](https://www.linkedin.com/in/erdem-baran/)


---

⭐ Bu projeyi faydalı bulduysanız, lütfen yıldız verin!
