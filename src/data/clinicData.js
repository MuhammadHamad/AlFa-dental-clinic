export const clinicData = {
  clinicName: "AlFa Dental Clinic",
  clinicNameUrdu: "الفا ڈینٹل کلینک",
  tagline: "Premier Advanced Dental Care & Esthetics in Peshawar",
  taglineUrdu: "پشاور میں جدید ترین اور معیاری ڈینٹل کیئر",
  primaryColor: "#0A192F",
  secondaryColor: "#172A45",
  accentTeal: "#00A8B5",
  accentCyan: "#00C2CB",
  accentGold: "#D4AF37",
  
  doctor: {
    name: "Dr. Aleena Usman",
    titles: "BDS (Dental Surgeon & Cosmetic Specialist)",
    distinction: "Gold Medalist & Senior Consultant",
    experience: "8+ Years Clinical Mastery",
    bio: "Dr. Aleena Usman is an esteemed Dental Surgeon and Cosmetic Dentistry Specialist at AlFa Dental Clinic, Peshawar. Renowned for her gentle chairside manner, precision endodontic procedures, and radiant smile makeovers, she applies international sterilization protocols and state-of-the-art clinical techniques for every patient.",
    specialties: [
      "Cosmetic Smile Design",
      "Painless Endodontics (RCT)",
      "Dental Implantology",
      "Laser Teeth Whitening",
      "Crowns & Porcelain Veneers"
    ],
    credentials: [
      "BDS - Bachelor of Dental Surgery",
      "Certified in Aesthetic Dentistry",
      "Member Pakistan Medical & Dental Council (PMDC)",
      "Specialist in Root Canal Therapy & Prosthetic Rehab"
    ]
  },
  
  location: {
    facility: "Mohmand Medical Complex",
    floor: "C-7, 3rd Floor",
    address: "C-7, 3rd Floor, Mohmand Medical Complex, Dabgari Gardens, Peshawar",
    city: "Peshawar",
    googleMapsUrl: "https://www.google.com/maps?vet=10CAAQoqAOahcKEwiwnMCA95yWAxUAAAAAHQAAAAAQCw..i&sca_esv=2eb98f85ab0c7a38&udm=1&pvq=Cg0vZy8xMXJ6ZGdxOGhrIhkKE2Jlc3QgZGVudGFsIGNsaW5pY3MQAhgD&lqi=ChxiZXN0IGRlbnRhbCBjbGluaWNzIHBlc2hhd2FyIgOoAQFI8cOsx_m3gIAIWjIQABABEAIYARgCGAMiHGJlc3QgZGVudGFsIGNsaW5pY3MgcGVzaGF3YXIqBggDEAEQApIBDWRlbnRhbF9jbGluaWOaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTlVkVkEzVG5KUlJSQUL6AQUIrwEQNA&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=pk&sa=X&geocode=KYnqh9RKF9k4Me5EGrw488sn&daddr=C-7,+3rd+Floor,+Mohmand+Medical+Complex,+Dabgari+Gardens,+Peshawar",
    embeddedMapQuery: "AlFa+Dental+Clinic,+C-7,+3rd+Floor,+Mohmand+Medical+Complex,+Dabgari+Gardens,+Peshawar",
    coordinates: "34.0084, 71.5583"
  },
  
  contact: {
    phone: "+92 317 6262644",
    phoneLandline: "+92 91 7158555",
    whatsapp: "923176262644",
    email: "info@alfadental.pk",
    emergency: "+92 317 6262644"
  },
  
  timing: {
    weekdays: "Mon - Sat: 10:00 AM - 9:00 PM",
    sunday: "Sunday: Emergency Appointments Only",
    statusText: "Open Now",
    hoursToday: "10:00 AM - 09:00 PM"
  },
  
  portals: [
    { name: "Marham", url: "https://www.marham.pk/online-consultation/dentist/peshawar/dr-aleena-usman", icon: "CalendarCheck" },
    { name: "oladoc", url: "https://oladoc.com/pakistan/peshawar/dentist", icon: "ExternalLink" },
    { name: "InstaCare", url: "https://instacare.pk/dentists/peshawar/alfa-dental-clinic", icon: "ShieldCheck" }
  ],
  
  trustMilestones: [
    { number: "10,000+", label: "Happy Patient Smiles", labelUrdu: "صحت مند مسکراہٹیں", icon: "Smile" },
    { number: "100%", label: "Autoclave Sterilization", labelUrdu: "جرثومہ سے پاک آلات", icon: "ShieldCheck" },
    { number: "8+ Yrs", label: "Clinical Excellence", labelUrdu: "طبی تجربہ", icon: "Award" },
    { number: "4.9 / 5", label: "Patient Rating", labelUrdu: "مریضوں کا اعتماد", icon: "Star" }
  ],

  services: [
    {
      id: "rct",
      title: "Painless Root Canal (RCT)",
      category: "Endodontics",
      startingPrice: 8000,
      priceFormatted: "PKR 8,000 - 15,000",
      recoveryTime: "1 - 3 Days",
      iconName: "Zap",
      description: "Advanced single-sitting or multi-sitting root canal treatment eliminating deep decay and saving your natural tooth with painless rotary endodontics.",
      features: [
        "Rotary Endodontics Technology",
        "Painless Anesthesia Protocol",
        "Biocompatible Gutta-Percha Filling",
        "Single & Double Sitting Options"
      ]
    },
    {
      id: "implants",
      title: "Dental Implants & Restoration",
      category: "Implantology",
      startingPrice: 35000,
      priceFormatted: "PKR 35,000 - 65,000",
      recoveryTime: "3 - 7 Days",
      iconName: "Shield",
      description: "Permanent titanium dental implants that act as natural roots for crowns or bridges, restoring full chewing function and facial aesthetics.",
      features: [
        "Grade-4 Titanium Implants",
        "Computer-Guided Placement",
        "Lifetime Structural Warranty",
        "Natural Crown Matching"
      ]
    },
    {
      id: "whitening",
      title: "Laser Teeth Whitening",
      category: "Cosmetic",
      startingPrice: 7500,
      priceFormatted: "PKR 7,500 - 14,000",
      recoveryTime: "Instant / 24 Hours",
      iconName: "Sparkles",
      description: "In-office LED laser whitening procedure lightening stains by up to 6-8 shades safely without enamel damage or long-term sensitivity.",
      features: [
        "Light-Activated Gel Formula",
        "Safe Enamel Protection",
        "45-Minute Quick Session",
        "Long-lasting Brightness"
      ]
    },
    {
      id: "braces",
      title: "Orthodontics & Clear Aligners",
      category: "Orthodontics",
      startingPrice: 45000,
      priceFormatted: "PKR 45,000 - 95,000",
      recoveryTime: "Continuous Progress",
      iconName: "Grid",
      description: "Correct crooked teeth, overbites, and spacing issues using conventional ceramic/metal braces or transparent invisible aligners.",
      features: [
        "3D Digital Teeth Scanning",
        "Invisible Clear Aligners Option",
        "Low-Profile Ceramic Braces",
        "Flexible Monthly Installments"
      ]
    },
    {
      id: "veneers",
      title: "Porcelain Veneers & Hollywood Smile",
      category: "Cosmetic",
      startingPrice: 12000,
      priceFormatted: "PKR 12,000 - 25,000 / tooth",
      recoveryTime: "2 - 4 Days",
      iconName: "Sun",
      description: "Ultra-thin custom porcelain laminates sculpted to reshape teeth, hide discoloration, and create a flawless red-carpet smile.",
      features: [
        "Ultra-thin E-max Porcelain",
        "Stain-Resistant Surface",
        "Custom Digital Smile Design",
        "Minimal Tooth Shaving"
      ]
    },
    {
      id: "scaling",
      title: "Ultrasonic Scaling & Polish",
      category: "Preventive",
      startingPrice: 3000,
      priceFormatted: "PKR 3,000 - 6,000",
      recoveryTime: "Immediate",
      iconName: "Activity",
      description: "Thorough removal of plaque, tartar, and coffee/tobacco stains using gentle ultrasonic scrollers followed by fluoride polishing.",
      features: [
        "Ultrasonic Tartar Removal",
        "Stain Air-Polishing",
        "Gums Health Inspection",
        "Enamel Fluoride Coating"
      ]
    },
    {
      id: "crowns",
      title: "Zirconia & Ceramic Crowns",
      category: "Restorative",
      startingPrice: 8500,
      priceFormatted: "PKR 8,500 - 18,000",
      recoveryTime: "2 - 3 Days",
      iconName: "Maximize",
      description: "High-strength tooth-colored Zirconia caps designed to reinforce weakened teeth post-root canal or cover fractured enamel seamlessly.",
      features: [
        "CAD/CAM Precision Milled",
        "Metal-Free Bio-Zirconia",
        "Perfect Shade & Contour Match",
        "10+ Year Durability"
      ]
    },
    {
      id: "pediatric",
      title: "Pediatric & Family Dentistry",
      category: "Preventive",
      startingPrice: 2500,
      priceFormatted: "PKR 2,500 - 5,000",
      recoveryTime: "Immediate",
      iconName: "Heart",
      description: "Child-friendly dental care including cavity sealants, fluoride treatments, and painless fillings delivered in a relaxing setting.",
      features: [
        "Gentle Child-Friendly Approach",
        "Fissure Sealants & Fluoride",
        "Early Orthodontic Screening",
        "Preventive Oral Care Education"
      ]
    }
  ]
};
