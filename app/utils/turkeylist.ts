export function getFlagEmoji(location: string): string {
    const cleanLocation = location.trim().toLowerCase();
  
    const district = istanbulDistricts.find((district) =>
      cleanLocation.includes(district.name.toLowerCase())
    );
  
    return district?.flagEmoji || "";
  }
  
  export const istanbulDistricts = [
    { name: "Adalar", code: "IST-01", phoneCode: "+90",     flagEmoji: "🇹🇷",    },
    { name: "Arnavutköy", code: "IST-02", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Ataşehir", code: "IST-03", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Avcılar", code: "IST-04", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Bağcılar", code: "IST-05", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Bahçelievler", code: "IST-06", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Bakırköy", code: "IST-07", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Başakşehir", code: "IST-08", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Bayrampaşa", code: "IST-09", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Beşiktaş", code: "IST-10", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Beykoz", code: "IST-11", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Beylikdüzü", code: "IST-12", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Beyoğlu", code: "IST-13", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Büyükçekmece", code: "IST-14", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Çatalca", code: "IST-15", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Çekmeköy", code: "IST-16", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Esenler", code: "IST-17", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Esenyurt", code: "IST-18", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Eyüpsultan", code: "IST-19", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Fatih", code: "IST-20", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Gaziosmanpaşa", code: "IST-21", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Güngören", code: "IST-22", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Kadıköy", code: "IST-23", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Kağıthane", code: "IST-24", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Kartal", code: "IST-25", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Küçükçekmece", code: "IST-26", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Maltepe", code: "IST-27", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Pendik", code: "IST-28", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Sancaktepe", code: "IST-29", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Sarıyer", code: "IST-30", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Silivri", code: "IST-31", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Sultanbeyli", code: "IST-32", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Sultangazi", code: "IST-33", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Şile", code: "IST-34", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Şişli", code: "IST-35", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Tuzla", code: "IST-36", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Ümraniye", code: "IST-37", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Üsküdar", code: "IST-38", phoneCode: "+90", flagEmoji: "🇹🇷" },
    { name: "Zeytinburnu", code: "IST-39", phoneCode: "+90", flagEmoji: "🇹🇷" },
  ];
  