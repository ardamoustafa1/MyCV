# Arda Moustafa Portfolio

React ve Vite ile yeniden tasarlanmış kişisel portföy/CV sitesi.

## Öne Çıkanlar

- React tabanlı tek sayfa portföy deneyimi
- Framer Motion ile kontrollü giriş animasyonları
- Canvas tabanlı neural/network hero arka planı
- Türkçe/İngilizce dil geçişi
- CV PDF indirme bağlantısı
- GitHub, LinkedIn, email ve Formspree iletişim formu
- Netlify için `dist` build ve SPA redirect desteği

## Kurulum

```bash
npm install
npm run dev
```

Yerel geliştirme adresi:

```text
http://localhost:5173/
```

## Production Build

```bash
npm run build
```

Build çıktısı `dist/` klasörüne oluşturulur.

## Proje Yapısı

```text
MyCV-main/
├── public/
│   ├── ArdaMoustafa_CV_TR.pdf
│   ├── favicon.png
│   ├── profilephoto.jpg
│   └── _redirects
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── netlify.toml
```

## Netlify

`netlify.toml` build komutu ve yayın klasörü için hazırdır:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

## İçerik Kaynakları

Site içeriği CV PDF'i, mevcut eski site içeriği ve public GitHub/LinkedIn profil bilgileri esas alınarak güncellenmiştir.
