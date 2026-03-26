export type TeamMember = {
  id: string;
  name: { tr: string; en: string };
  title: { tr: string; en: string };
  email: string;
  phone: string;
  image: string;
  bio: { tr: string; en: string };
  expertise: { tr: string[]; en: string[] };
  linkedin?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: 'onursal-baskan',
    name: { tr: 'Ad Soyad', en: 'First Last' },
    title: { tr: 'Onursal Başkan', en: 'Honorary Chairman' },
    email: 'onursalbaskan@kadaminsaat.com',
    phone: '0 (216) 314 12 94',
    image: '/team/onursal-baskan.jpg',
    bio: {
      tr: 'KADAM İnşaat\'ın kuruluşundan bu yana şirketin vizyon ve değerlerine yön veren Onursal Başkanımız, inşaat sektöründe onlarca yıllık deneyimiyle sektöre önemli katkılar sağlamıştır. Güçlü liderlik anlayışı ve sektör bilgisiyle şirketin bugünkü başarılı konumuna ulaşmasında kilit rol oynamıştır.',
      en: 'Our Honorary Chairman has shaped the company\'s vision and values since its founding, contributing significantly to the construction sector with decades of experience. His strong leadership and industry knowledge have played a key role in the company\'s current success.',
    },
    expertise: {
      tr: ['Stratejik Liderlik', 'Sektör Deneyimi', 'Kurumsal Yönetim', 'İş Geliştirme'],
      en: ['Strategic Leadership', 'Industry Experience', 'Corporate Governance', 'Business Development'],
    },
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'kurucu',
    name: { tr: 'Ad Soyad', en: 'First Last' },
    title: { tr: 'Kurucu', en: 'Founder' },
    email: 'kurucu@kadaminsaat.com',
    phone: '0 (553) 409 63 19',
    image: '/team/kurucu.jpg',
    bio: {
      tr: 'KADAM İnşaat\'ı temelden inşa eden Kurucumuz, şirketin her aşamasında aktif rol almıştır. Modern mimari ve mühendislik alanındaki derin bilgisi ile kalite odaklı yaklaşımı, KADAM\'ı sektörün güvenilir markalarından biri haline getirmiştir.',
      en: 'Our Founder built KADAM İnşaat from the ground up, taking an active role at every stage of the company. His deep knowledge in modern architecture and engineering, combined with a quality-focused approach, has made KADAM one of the trusted brands in the sector.',
    },
    expertise: {
      tr: ['Proje Yönetimi', 'İnşaat Mühendisliği', 'Mimari Tasarım', 'İş Geliştirme'],
      en: ['Project Management', 'Construction Engineering', 'Architectural Design', 'Business Development'],
    },
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'tasarim-direktoru',
    name: { tr: 'Ad Soyad', en: 'First Last' },
    title: { tr: 'Tasarım Ofisi Direktörü', en: 'Design Office Director' },
    email: 'tasarim@kadaminsaat.com',
    phone: '0 (216) 314 12 94',
    image: '/team/tasarim-direktoru.jpg',
    bio: {
      tr: 'Tasarım Ofisi Direktörümüz, estetik ve işlevselliği bir araya getiren özgün mimari projeler geliştirmektedir. Modern tasarım anlayışı ve yaratıcı vizyonuyla KADAM projelerine özgün bir kimlik kazandırmakta, her mekanı kullanıcıların hayatına değer katacak şekilde tasarlamaktadır.',
      en: 'Our Design Office Director develops unique architectural projects that combine aesthetics and functionality. With a modern design approach and creative vision, she gives KADAM projects a unique identity, designing every space to add value to users\' lives.',
    },
    expertise: {
      tr: ['İç Mimarlık', 'Konsept Tasarım', 'Kentsel Tasarım', 'Sürdürülebilir Mimari'],
      en: ['Interior Architecture', 'Concept Design', 'Urban Design', 'Sustainable Architecture'],
    },
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'teknik-direktoru',
    name: { tr: 'Ad Soyad', en: 'First Last' },
    title: { tr: 'Teknik Ofis Direktörü', en: 'Technical Office Director' },
    email: 'teknik@kadaminsaat.com',
    phone: '0 (216) 314 12 94',
    image: '/team/teknik-direktoru.jpg',
    bio: {
      tr: 'Teknik Ofis Direktörümüz, yapısal mühendislik ve teknik süreçlerin yönetiminde uzmanlaşmış deneyimli bir profesyoneldir. Tüm projelerin teknik standartlara ve yönetmeliklere uygunluğunu sağlarken, inovatif mühendislik çözümleriyle projelerin kalitesini ve güvenliğini güvence altına almaktadır.',
      en: 'Our Technical Office Director is an experienced professional specialized in structural engineering and technical process management. He ensures all projects comply with technical standards and regulations, while guaranteeing project quality and safety with innovative engineering solutions.',
    },
    expertise: {
      tr: ['Yapısal Mühendislik', 'Teknik Denetim', 'Zemin Etüdü', 'Deprem Mühendisliği'],
      en: ['Structural Engineering', 'Technical Supervision', 'Geotechnical Survey', 'Earthquake Engineering'],
    },
    linkedin: 'https://linkedin.com',
  },
];
