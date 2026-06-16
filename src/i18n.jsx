import { createContext, useContext, useState } from "react";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      evidence: "Impact",
      work: "Work",
      stack: "Stack",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Software Engineer · Backend Systems",
      title_part1: "Engineering reliable ",
      title_part2: "backend systems.",
      subtitle: "I specialize in designing and scaling backend architectures, APIs, and data-intensive applications focusing on performance, security, and operational clarity.",
      view_work: "View Work",
      download_cv: "Download Resume"
    },
    about: {
      kicker: "About Me",
      title: "Engineering Philosophy",
      subtitle: "Beyond code: Architecture, reliability, and delivery discipline.",
      text_lead: "Hi, I'm Arda. I don't just write code; I design <strong class='text-primary'>production-grade systems</strong> that solve real-world problems.",
      text: "As a Computer Engineering student at Istinye University, I bridge academic discipline with the industry's demand for speed and quality. My goal is to build architectures that are not just functional, but <strong>scalable, secure, and maintainable</strong>.",
      highlight1_title: "Backend Focused",
      highlight1_desc: "Data-intensive applications and API design.",
      highlight2_title: "Architectural Principles",
      highlight2_desc: "SOLID, Clean Architecture, and Event-Driven systems."
    },
    evidence: {
      kicker: "Impact",
      title: "Measurable Outcomes",
      subtitle: "Engineering discipline demonstrated through metrics, performance, and architectural rigour.",
      label1: "Public Repositories",
      desc1: "Open-source contributions and portfolio projects.",
      label2: "GitHub Followers",
      desc2: "Public technical visibility and community engagement.",
      label3: "p95 Latency Target",
      desc3: "Performance benchmark for hot-path services.",
      label4: "API Response Time",
      desc4: "Improvement achieved via async services and pooling.",
      label5: "Security Architecture",
      desc5: "Implementation of JWT, TOTP, and HMAC.",
      label6: "CI/CD Stages",
      desc6: "Comprehensive testing, migration, and automated rollback."
    },
    work: {
      kicker: "Selected Work",
      title: "Technical Case Studies",
      subtitle: "Deep dives into the architecture, challenges, and solutions of production-ready systems.",
      arch_decisions: "Architecture Decisions",
      view_repo: "View Source Repository",
      cases: {
        marketpulse: {
          role: "Fintech Pricing Engine",
          summary: "A high-performance monorepo that ingests real-time market data from 8 providers into an investor application, admin panel, and FastAPI pricing engine.",
          problem: "Financial data aggregation requires strict latency constraints, data consistency, and robust rate-limiting while handling hot-path traffic securely.",
          arch1: "Designed a real-time pricing engine handling 10,000+ requests per day with p95 latency under 800ms; resolved hot-path traffic management with Redis writethrough cache and priority-aware aggregation.",
          arch2: "Built a fintech-grade security layer with JWT rotation, 2FA, HMAC validation, and append-only audit logs, establishing a SOC 2 compliant auditable infrastructure.",
          arch3: "Automated zero-downtime AWS ECS/ALB deployment via Terraform with a 13-stage CI/CD pipeline including k6 load testing, Playwright E2E, Alembic migration, and automated rollback.",
          result1: "p95 < 800ms latency",
          result2: "10k+ requests/day",
          result3: "AWS ECS Deployment"
        },
        systemforge: {
          role: "System Design Platform",
          summary: "An architecture generation platform that translates product requirements into verifiable ADRs, threat models, and architectural exports.",
          problem: "Standard LLM tools struggle to produce consistent, parseable, and team-usable technical artifacts without hallucination.",
          arch1: "Developed an LLM-powered platform that transforms product requirements into production-ready system designs using an artifact-first/schema-first approach; built structural templates ensuring clean LLM output consistency.",
          arch2: "Created an asynchronous event-driven dual infrastructure using Redis Streams + Outbox patterns; built a scalable worker topology for generation, export, and WebSocket real-time notifications.",
          arch3: "Elevated system to production quality with ADR and Threat Model documentation; reduced all deployments to a single command with Docker Compose + CI pipeline.",
          result1: "Fault-tolerant LLM orchestration",
          result2: "Event-driven workflow",
          result3: "Dockerized deployment"
        },
        teamflow: {
          role: "Enterprise Orchestration",
          summary: "An event-driven, multi-tenant platform tailored for enterprise team operations, focusing on observability and security.",
          problem: "Enterprise task management demands strict delivery guarantees, state replayability, auditing, SSO integration, and tenant isolation.",
          arch1: "Built an event-driven architecture using CQRS + Transactional Outbox patterns; ensured guaranteed delivery and state replay with Dead Letter Queue, retry policy, and Time Travel mechanisms.",
          arch2: "Established an enterprise security layer with KeyCloak SSO/SCIM, multi-tenant isolation, DLP, and SOC 2 audit log integration; deployed Slack and WhatsApp real-time billing automation.",
          arch3: "Promoted the Kubernetes/Helm GitOps pipeline to production with Argo Rollouts canary deployment, OpenTelemetry distributed tracing, and Pact contract testing; achieved full observability across the system.",
          result1: "GitOps pipeline",
          result2: "Canary deployments",
          result3: "Time-travel debugging"
        },
        fincoach: {
          role: "Behavioral Finance Engine",
          summary: "A recommendation platform processing personal finance data using in-browser models and an offline-first security layer.",
          problem: "Personalized financial advice requires sensitive user data, creating severe trust and regulatory risks if processed server-side.",
          arch1: "Developed a Federated Learning model running on the client side without sending user data to the server; integrated with an OCR-based transaction system supporting CSV formats from 6 Turkish banks, preserving data privacy with differential privacy + FedAvg.",
          arch2: "Built a financial recommendation engine operating on real data with a multi-agent AI system (CFO, Investor, Psychologist, Arbitrator) using Markowitz Efficient Frontier and Monte Carlo simulations.",
          arch3: "Established an enterprise-grade security layer with WebCrypto AES-GCM 256-bit offline encryption, IndexedDB + Service Worker offline-first architecture, and JWT rate-limited API; standardized LLM security by enforcing SSRF protection and prompt injection policies.",
          result1: "Browser-side ML",
          result2: "Offline-first data model",
          result3: "Supabase RLS access"
        }
      }
    },
    stack: {
      kicker: "Technical Depth",
      title: "System Architecture",
      subtitle: "Tools and technologies organized by their role in the systems I build.",
      group1: "Languages & Frontend",
      group2: "Backend Systems",
      group3: "Data Layer",
      group4: "Cloud & Delivery"
    },
    contact: {
      kicker: "Contact",
      title: "Let's Connect",
      subtitle: "Reach out for backend systems, robust APIs, or architectural discussions.",
      location_label: "Location",
      location_value: "Istanbul, Turkey",
      placeholder_name: "Name",
      placeholder_email: "Email",
      placeholder_subject: "Subject",
      placeholder_message: "Message",
      send_message: "Send Message"
    },
    footer: {
      resume: "Resume"
    }
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      evidence: "Etki",
      work: "Projeler",
      stack: "Yetenekler",
      contact: "İletişim"
    },
    hero: {
      eyebrow: "Yazılım Mühendisi · Arka Uç Sistemler",
      title_part1: "Güvenilir arka uç sistemleri ",
      title_part2: "tasarlıyorum.",
      subtitle: "Performans, güvenlik ve operasyonel netlik odaklı arka uç mimarileri, API'ler ve veri yoğunluklu uygulamalar tasarlama ve ölçeklendirme konusunda uzmanım.",
      view_work: "Projeleri Gör",
      download_cv: "CV İndir"
    },
    about: {
      kicker: "Hakkımda",
      title: "Mühendislik Felsefesi",
      subtitle: "Kodun ötesinde: Mimari, güvenilirlik ve teslimat disiplini.",
      text_lead: "Merhaba, ben Arda. Sadece kod yazmıyorum; gerçek dünya problemlerini çözen <strong class='text-primary'>üretim standartlarında sistemler</strong> tasarlıyorum.",
      text: "İstinye Üniversitesi Bilgisayar Mühendisliği öğrencisi olarak, akademik disiplini sektörün hız ve kalite talepleriyle birleştiriyorum. Amacım sadece çalışan değil, aynı zamanda <strong>ölçeklenebilir, güvenli ve sürdürülebilir</strong> mimariler inşa etmek.",
      highlight1_title: "Arka Uç Odaklı",
      highlight1_desc: "Veri yoğun uygulamalar ve API tasarımı.",
      highlight2_title: "Mimari Prensipler",
      highlight2_desc: "SOLID, Clean Architecture ve Olay Güdümlü (Event-Driven) sistemler."
    },
    evidence: {
      kicker: "Etki",
      title: "Ölçülebilir Sonuçlar",
      subtitle: "Metrikler, performans ve mimari titizlikle kanıtlanmış mühendislik disiplini.",
      label1: "Açık Kaynak Repoları",
      desc1: "Açık kaynak katkıları ve portföy projeleri.",
      label2: "GitHub Takipçisi",
      desc2: "Halka açık teknik görünürlük ve topluluk etkileşimi.",
      label3: "p95 Gecikme Hedefi",
      desc3: "Kritik servisler için performans kriteri.",
      label4: "API Yanıt Süresi",
      desc4: "Asenkron servisler ve havuzlama ile sağlanan iyileşme.",
      label5: "Güvenlik Mimarisi",
      desc5: "JWT, TOTP ve HMAC uygulaması.",
      label6: "CI/CD Aşaması",
      desc6: "Kapsamlı test, migrasyon ve otomatik geri alma."
    },
    work: {
      kicker: "Seçilmiş Projeler",
      title: "Teknik Vaka Çalışmaları",
      subtitle: "Üretime hazır sistemlerin mimarisine, zorluklarına ve çözümlerine derinlemesine bir bakış.",
      arch_decisions: "Mimari Kararlar",
      view_repo: "Kaynak Kodunu İncele",
      cases: {
        marketpulse: {
          role: "Fintek Fiyatlandırma Motoru",
          summary: "8 farklı sağlayıcıdan gerçek zamanlı piyasa verilerini alıp bir yatırımcı uygulamasına, yönetim paneline ve FastAPI tabanlı fiyatlandırma motoruna aktaran yüksek performanslı monorepo projesi.",
          problem: "Finansal veri entegrasyonu, sıcak-hat (hot-path) trafiğini güvenli bir şekilde yönetirken katı gecikme sınırları, veri tutarlılığı ve güçlü hız sınırlamaları gerektirir.",
          arch1: "Günde 10.000+ isteği karşılayan ve p95 gecikmesi 800ms'nin altında olan gerçek zamanlı fiyatlandırma motoru tasarlandı; Redis write-through önbellek ve öncelik farkındalıklı (priority-aware) veri birleştirme ile hot-path trafik yönetimi çözüldü.",
          arch2: "JWT rotasyonu, 2FA, HMAC doğrulaması ve sadece eklenebilir (append-only) denetim günlükleri ile fintek düzeyinde güvenlik katmanı oluşturularak SOC 2 uyumlu, denetlenebilir bir altyapı sağlandı.",
          arch3: "k6 yük testi, Playwright E2E, Alembic migrasyonu ve otomatik geri alma adımlarını içeren 13 aşamalı CI/CD ardışık düzeniyle, Terraform üzerinden sıfır kesintili (zero-downtime) AWS ECS/ALB dağıtımı otomatikleştirildi.",
          result1: "p95 < 800ms gecikme",
          result2: "Günde 10bin+ istek",
          result3: "AWS ECS Dağıtımı"
        },
        systemforge: {
          role: "Sistem Tasarım Platformu",
          summary: "Ürün gereksinimlerini doğrulanabilir Mimari Karar Kayıtlarına (ADR), tehdit modellerine ve mimari şemalara dönüştüren mimari üretim platformu.",
          problem: "Standart LLM araçları halüsinasyon olmadan tutarlı, ayrıştırılabilir ve ekiplerin kullanabileceği teknik dokümanlar üretmekte zorlanırlar.",
          arch1: "Ürün gereksinimlerini, şema öncelikli (schema-first) bir yaklaşımla üretime hazır sistem tasarımlarına dönüştüren LLM destekli bir platform geliştirildi; LLM çıktılarının tutarlılığını sağlamak için yapısal şablonlar oluşturuldu.",
          arch2: "Redis Streams + Outbox tasarım kalıpları kullanılarak asenkron olay güdümlü (event-driven) ikili bir altyapı oluşturuldu; doküman üretimi, dışa aktarım ve eşzamanlı WebSocket bildirimleri için ölçeklenebilir bir worker topolojisi inşa edildi.",
          arch3: "ADR ve Tehdit Modeli dokümantasyonu ile sistem üretim kalitesine (production quality) yükseltildi; tüm dağıtım süreçleri Docker Compose + CI hattı ile tek komuta indirgendi.",
          result1: "Hata tolere eden LLM orkestrasyonu",
          result2: "Olay güdümlü iş akışı",
          result3: "Docker tabanlı dağıtım"
        },
        teamflow: {
          role: "Kurumsal Orkestrasyon Platformu",
          summary: "Gözlemlenebilirlik ve güvenliğe odaklanan, kurumsal ekip operasyonları için özel olarak tasarlanmış olay güdümlü (event-driven), çok kiracılı (multi-tenant) bir platform.",
          problem: "Kurumsal görev yönetimi; kesin teslimat garantisi, durumun tekrar oynatılabilirliği (state replayability), denetim kaydı, SSO entegrasyonu ve kiracı izolasyonu (tenant isolation) gerektirir.",
          arch1: "CQRS + Transactional Outbox tasarım kalıpları kullanılarak olay güdümlü bir mimari oluşturuldu; Dead Letter Queue (DLQ), yeniden deneme (retry) politikası ve 'Time Travel' mekanizmaları ile garantili teslimat ve state replay (durum tekrarı) sağlandı.",
          arch2: "KeyCloak SSO/SCIM, multi-tenant izolasyonu, Veri Kaybını Önleme (DLP) ve SOC 2 denetim günlüğü entegrasyonu ile kurumsal güvenlik katmanı kuruldu; gerçek zamanlı Slack ve WhatsApp faturalandırma otomasyonu devreye alındı.",
          arch3: "Argo Rollouts (Canary Deployment), OpenTelemetry dağıtık izleme ve Pact sözleşme testi (contract testing) ile Kubernetes/Helm GitOps hattı üretim ortamına taşındı; sistem genelinde tam gözlemlenebilirlik (full observability) elde edildi.",
          result1: "GitOps hattı",
          result2: "Canary dağıtımları",
          result3: "Time-travel hata ayıklama"
        },
        fincoach: {
          role: "Davranışsal Finans Motoru",
          summary: "Kişisel finans verilerini tarayıcı içi modeller (in-browser) ve çevrimdışı öncelikli (offline-first) güvenlik katmanıyla işleyen finansal tavsiye platformu.",
          problem: "Kişiselleştirilmiş finansal tavsiyeler hassas kullanıcı verileri gerektirdiğinden, bunların sunucu tarafında işlenmesi ciddi güvenlik ve mevzuat riskleri oluşturur.",
          arch1: "Kullanıcı verilerini sunucuya göndermeden tamamen istemci (client) tarafında çalışan bir Birleştirilmiş Öğrenme (Federated Learning) modeli geliştirildi; 6 Türk bankasının CSV formatını destekleyen OCR tabanlı işlem sistemi entegre edilerek Diferansiyel Gizlilik + FedAvg algoritmasıyla veri gizliliği korundu.",
          arch2: "Markowitz Etkin Sınır (Efficient Frontier) teorisi ve Monte Carlo simülasyonları kullanılarak çok etmenli (multi-agent) yapay zeka sistemiyle (CFO, Yatırımcı, Psikolog, Hakem) gerçek veriler üzerinde çalışan bir finansal öneri motoru inşa edildi.",
          arch3: "WebCrypto AES-GCM 256-bit çevrimdışı şifreleme, IndexedDB + Service Worker ile çevrimdışı öncelikli mimari ve JWT destekli hız sınırlamalı API kullanılarak kurumsal düzeyde güvenlik katmanı kuruldu; SSRF koruması ve komut enjeksiyonu (prompt injection) politikaları zorunlu kılınarak LLM güvenliği standartlaştırıldı.",
          result1: "Tarayıcı tarafı ML",
          result2: "Çevrimdışı veri modeli",
          result3: "Supabase RLS erişimi"
        }
      }
    },
    stack: {
      kicker: "Teknik Derinlik",
      title: "Sistem Mimarisi",
      subtitle: "Geliştirdiğim sistemlerdeki rollerine göre düzenlenmiş araçlar ve teknolojiler.",
      group1: "Diller & Ön Yüz",
      group2: "Arka Uç Sistemler",
      group3: "Veri Katmanı",
      group4: "Bulut & Dağıtım"
    },
    contact: {
      kicker: "İletişim",
      title: "İletişime Geçelim",
      subtitle: "Arka uç sistemler, güçlü API'ler veya mimari tartışmalar için ulaşın.",
      location_label: "Konum",
      location_value: "İstanbul, Türkiye",
      placeholder_name: "İsim",
      placeholder_email: "E-posta",
      placeholder_subject: "Konu",
      placeholder_message: "Mesaj",
      send_message: "Mesaj Gönder"
    },
    footer: {
      resume: "Özgeçmiş"
    }
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const t = (path) => {
    const keys = path.split(".");
    let current = translations[lang];
    for (const key of keys) {
      if (current[key] === undefined) {
        return path;
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
