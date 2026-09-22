import collectionDefinitions from "../../shared/category-banners.json" with { type: "json" };
// Catalog seeded from Tek Lek (https://teklek.com/) — demo inventory. Verify stock before launch.
export const products = [
  {
    id: "toy-jet-drone",
    name: "Fighter Jet RC Quadcopter Drone - Camouflage Edition",
    category: "Toys",
    price: 5490,
    oldPrice: 6990,
    image: "/api/media/5e45dd90-ceb5-4f78-a480-c303e1661de0.webp",
    media: [
      {
        type: "image",
        src: "/api/media/5e45dd90-ceb5-4f78-a480-c303e1661de0.webp",
        alt: "Fighter Jet RC Quadcopter Drone with remote and spare propellers",
      },
    ],
    color: "Camouflage blue",
    badge: "STUNT DRONE",
    rating: 4.8,
    stock: 18,
    specs: {
      Type: "RC quadcopter jet drone",
      Control: "2.4GHz remote",
      Includes: "Drone, remote, spare props, USB cable",
      Age: "8+ years",
    },
    description:
      "Fighter Jet RC Quadcopter Drone - Camouflage Edition. A stunt drone for kids and adults with ducted props, gamepad remote and spare blades in the box.",
  },
  {
    id: "toy-su35-jet",
    name: "SU-35 Fighter Remote Control Airplane",
    category: "Toys",
    price: 6990,
    oldPrice: 8490,
    image: "/api/media/256b1932-8512-4c11-9259-96216613042e.webp",
    media: [
      {
        type: "image",
        src: "/api/media/256b1932-8512-4c11-9259-96216613042e.webp",
        alt: "SU-35 Fighter 4-channel RC airplane packaging",
      },
    ],
    color: "Speed yellow",
    badge: "RC JET",
    rating: 4.7,
    stock: 14,
    specs: {
      Channels: "4-channel 2.4GHz",
      Material: "Durable EPP foam",
      Features: "6-axis gyroscope, LED lights",
      Age: "14+ years",
    },
    description:
      "SU-35 Fighter Remote Control Airplane - 4-channel 2.4GHz RC jet with durable EPP foam, gyroscope stability and LED lights for kids and adults.",
  },
  {
    id: "toy-dream-rc-car",
    name: "Mini Multi-Functional Dream Racing RC Car",
    category: "Toys",
    price: 4250,
    oldPrice: 4990,
    image: "/api/media/ca8ffc84-6cf1-4505-b5c7-a39a2e3ed71a.webp",
    media: [
      {
        type: "image",
        src: "/api/media/ca8ffc84-6cf1-4505-b5c7-a39a2e3ed71a.webp",
        alt: "Dream Racing mini RC car front view",
      },
      {
        type: "image",
        src: "/api/media/ee5a044b-4dea-47a2-9092-313debe6953f.webp",
        alt: "Dream Racing RC car with remote",
      },
      {
        type: "image",
        src: "/api/media/5bb5cf8d-9d96-4254-8f12-6840a0809004.webp",
        alt: "Dream Racing RC car angle view",
      },
      {
        type: "image",
        src: "/api/media/d848382f-45f4-4300-a86f-e5852cdb4b53.webp",
        alt: "Dream Racing RC car detail",
      },
    ],
    color: "Racing red",
    badge: "FOLLOW MODE",
    rating: 4.8,
    stock: 32,
    specs: {
      Modes: "Remote, Follow, Escape",
      Control: "Ergonomic remote",
      Model: "Dream Racing Mini Car",
      Age: "3+ years",
    },
    description:
      "Mini Multi-Functional RC Car with remote control, Follow Mode and Escape Mode. Cute sports-car design with racing stripes - safe interactive play for ages 3+.",
  },
  {
    id: "toy-monster-tractor",
    name: "4WD Off-Road Mini Toy Tractor",
    category: "Toys",
    price: 1450,
    oldPrice: 1890,
    image: "/api/media/335ac64a-28c2-49e6-a4b3-1a5d72622180.webp",
    media: [
      {
        type: "image",
        src: "/api/media/335ac64a-28c2-49e6-a4b3-1a5d72622180.webp",
        alt: "4WD off-road mini toy tractor red",
      },
      {
        type: "image",
        src: "/api/media/0923fd49-6444-4ebc-a0bb-5c3c6ea30a18.webp",
        alt: "4WD off-road mini toy tractor side view",
      },
    ],
    color: "Red",
    badge: "NO BATTERIES",
    rating: 4.6,
    stock: 55,
    specs: {
      Drive: "Friction push & go",
      Material: "High-grade ABS plastic",
      Wheels: "Heavy-duty monster wheels",
      Age: "3+ years",
      Colors: "Red, Blue, Yellow",
    },
    description:
      "4WD Off-Road Mini Toy Tractor with friction-powered heavy-duty big wheels. Push and go - no batteries needed for carpet, floor and outdoor play.",
  },
  {
    "id": "tl-smartwatchseries-11-7-in-1-combo-set",
    "name": "Smart Watch Series 11 – 7-in-1 Combo",
    "category": "Smartwatches",
    "price": 2250,
    "oldPrice": 0,
    "image": "/api/media/e06a7dfe-c3a6-454c-b089-c0996ab4da3d.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/e06a7dfe-c3a6-454c-b089-c0996ab4da3d.webp",
        "alt": "Smart Watch Series 11 – 7-in-1 Combo"
      },
      {
        "type": "image",
        "src": "/api/media/49d3f6a1-8464-4b5a-bfcc-b09f7bd299f2.webp",
        "alt": "Smart Watch Series 11 – 7-in-1 Combo"
      },
      {
        "type": "image",
        "src": "/api/media/6d9d5286-bf94-4c3c-83a8-d4c36db7e8f1.webp",
        "alt": "Smart Watch Series 11 – 7-in-1 Combo"
      }
    ],
    "color": "Default Title",
    "badge": "NEW",
    "rating": 4.5,
    "stock": 20,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "watch"
    },
    "description": "Maixinn Max Series 11 ke saath apne style ko rozana badlein! Ye Series 11 smartwatch aik 7 in 1 combo pack hai, jismein aapko aik watch aur mukhtalif straps milti hain taake aap apni marzi ke mutabiq look set kar saken. Khasoosiyat (Features): 7 in 1 Straps: Aik watch ke saath kai rangeen straps, jo har dressing ke saath suit karen. AMOLED Display: Behtareen aur saaf screen quality ke liye. Series 11 Design: Latest design jo dikhne mein behad shaandar hai. Complete Package: Fitness tracking aur smart notifications ke saath aik mukammal package. Feature Specification Display 2.1 inch AMOLED Touch Screen Compatibility Android aur iOS (Bluetooth ke zariye) Battery Life 2-4 din (normal use), standby pe zyada Health Tracking Heart Rate, Blood Oxygen (SpO2), Sleep Tracking Notifications Calls, SMS, WhatsApp, social media alerts Other Features Bluetooth Calling, Music Control, Remote Camera"
  },
  {
    "id": "tl-series-11-smartwatch-apple-logo-on-off-amoled-display-2-3-fu",
    "name": "Apple Logo Series 11 Smartwatch | 2.3\" Full Screen",
    "category": "Smartwatches",
    "price": 4250,
    "oldPrice": 5500,
    "image": "/api/media/66aea2e4-95d5-4dfd-9330-73769768af05.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/66aea2e4-95d5-4dfd-9330-73769768af05.webp",
        "alt": "Apple Logo Series 11 Smartwatch | 2.3\" Full Screen"
      },
      {
        "type": "image",
        "src": "/api/media/c2233154-c628-40ba-9761-5df1b89d09a6.webp",
        "alt": "Apple Logo Series 11 Smartwatch | 2.3\" Full Screen"
      },
      {
        "type": "image",
        "src": "/api/media/a435780b-2757-403a-a15c-af05a60bf215.webp",
        "alt": "Apple Logo Series 11 Smartwatch | 2.3\" Full Screen"
      }
    ],
    "color": "Default Title",
    "badge": "SALE",
    "rating": 4.5,
    "stock": 52,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "watch"
    },
    "description": "Series 11 Smartwatch – Premium Design & Performance Apne style aur fitness ko upgrade karein Series 11 Smartwatch ke saath. Yeh watch na sirf dikhne mein Apple Watch jaisi hai, balki iska Apple Logo startup feature ise bilkul original jaisa premium look deta hai. Key Features: Premium Display: Ismein aapko milta hai ek bada aur crystal clear AMOLED display (kuch models mein 2.3 inch tak ka full screen), jo vibrant colors aur smooth touch experience provide karta hai. Apple Logo Activation: Jab aap watch on karte hain, toh screen par Apple Logo show hota hai, jo ise ek authentic feel deta hai. Wireless Charging: Ab cables ka jhanjhat khatam! Yeh watch advanced Wireless Charging support karti hai. Fitness & Health Tracking: Heart Rate Monitor Calories Tracker Running & Sports Modes Sleep Monitoring Smart Connectivity: Bluetooth calling, notifications, aur music control directly apni kalai (wrist) se handle karein. Premium Build: Sleek metal finish aur comfortable straps ke saath, jo har occasion par suit kare. Feature Details Series Series 11 (Latest Edition) Display Size 2.09\" to 2.3\" Full Screen Screen Type AMOLED / High Res Charger Magnetic Wireless Charger Compatibility Android & iOS Logo Apple Logo on Power On/Off"
  },
  {
    "id": "tl-dt-no-1-max-smartwatch-nfc-health-tracking-stylish-circular-",
    "name": "Wear Pro DT NO.1 Max Smartwatch – NFC, Health Tracking & Stylish Circular Display",
    "category": "Smartwatches",
    "price": 4499,
    "oldPrice": 0,
    "image": "/api/media/08e91b8b-13fc-456b-9b41-beeab002ed14.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/08e91b8b-13fc-456b-9b41-beeab002ed14.webp",
        "alt": "Wear Pro DT NO.1 Max Smartwatch – NFC, Health Tracking & Stylish Circular Display"
      },
      {
        "type": "image",
        "src": "/api/media/ab506aa1-da5d-49c7-a9e1-e84d3608be44.webp",
        "alt": "Wear Pro DT NO.1 Max Smartwatch – NFC, Health Tracking & Stylish Circular Display"
      },
      {
        "type": "image",
        "src": "/api/media/388966d8-b3cf-4d0b-ba75-2f058ab621b4.webp",
        "alt": "Wear Pro DT NO.1 Max Smartwatch – NFC, Health Tracking & Stylish Circular Display"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 47,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "watch"
    },
    "description": "Elevate Your Wrist: The DT NO.1 Max Smartwatch Premium Design & Display The DT NO.1 Max features a stunning, high-definition circular display housed in a sleek zinc alloy frame. The narrow bezel design maximizes the screen-to-body ratio, providing a crisp and immersive visual experience whether you're checking the time or reading notifications. Vibrant Screen: High-resolution IPS full-color display. Customizable Style: Choose from hundreds of watch faces or upload your own photos to match your outfit or mood. Rotatable Crown: Navigate the menu smoothly with the tactile digital crown. Seamless Connectivity with NFC Equipped with a multi-function NFC chip , this smartwatch simplifies your daily routine. Access Control: Use your watch as a contactless key card for smart locks and gates. Quick Links: Program NFC shortcuts for instant app launches or digital business cards. Advanced Health & Fitness Tracking Stay on top of your wellness goals with 24/7 monitoring. The DT NO.1 Max acts as your personal health assistant, providing data-driven insights into your body. Heart Rate & SpO2: Real-time monitoring of your heart rate and blood oxygen levels. Sleep Analysis: Track your sleep cycles (deep, light, and REM) to improve your rest quality. Multi-Sport Modes: Whether you’re running, cycling, or hitting the gym, the watch tracks your calories, steps, and distance. Smart Lifestyle Features Bluetooth Calling: Integrated microphone and speaker allow you to answer and make calls directly from your wrist. AI Voice Assistant: Command your phone to set alarms or check the weather hands-free. Long Battery Life: Optimized power management ensures days of usage on a single charge. IP68 Waterproof: Built to withstand sweat, rain, and hand washing. Feature Details Display HD Circular IPS Touch Screen Connectivity Bluetooth 5.0, NFC Sensors G-sensor, Heart Rate, Blood Oxygen Battery Long-lasting Lithium Polymer Compatibility Android 4.4+ / iOS 10.0+ Charging Convenient Wireless Charging"
  },
  {
    "id": "tl-series-10-smartwatch-with-amoled-display",
    "name": "Series 10 Smart Watch – Bluetooth Calling Edition",
    "category": "Smartwatches",
    "price": 1999,
    "oldPrice": 0,
    "image": "/api/media/bb96d51b-2fde-4073-a7f1-d688ff28927b.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/bb96d51b-2fde-4073-a7f1-d688ff28927b.webp",
        "alt": "Series 10 Smart Watch – Bluetooth Calling Edition"
      },
      {
        "type": "image",
        "src": "/api/media/da9f3008-6aef-46fd-b933-67e30200feb1.webp",
        "alt": "Series 10 Smart Watch – Bluetooth Calling Edition"
      }
    ],
    "color": "Smart Watch Series 11  (1-Strap)",
    "badge": "",
    "rating": 4.7,
    "stock": 41,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "watch"
    },
    "description": "Apni lifestyle ko upgrade karein latest Series 11 Smart Watch ke sath! Ye watch na sirf stylish hai balkay features se bharpoor hai jo aapki fitness aur connectivity ka khayal rakhti hai. Key Features: • 🔋 Long-Lasting Battery: Is watch ki sab se bari khoobi iska 48 Hours ka Playtime hai, taaky aapko baar baar charge karne ki fikar na rahe. • 📞 Bluetooth Calling: Direct apni kalai (wrist) se calls receive karein aur baat karein (Calling Support included). • 💓 Health Tracking: 24/7 Heart Rate Monitor aur health tracking features ke sath apni sehat par nazar rakhein. • 🏃♂️ Sports & Fitness: Multiple Sports Modes jo aapki physical activities ko accurately track karte hain. • 🌦️ Smart Updates: Weather forecast aur notifications ab aapki watch par. • ✨ Premium Design: Sleek aur modern design jo har outfit ke sath perfect lagta hai. Sharp display aur comfortable strap ke sath. Box Mein Kya Hai? • 1 x Series 10 Smart Watch • 1 x Charging Cable • 1 x User Manual Order Karein aur behtareen tech experience ka maza uthayein!"
  },
  {
    "id": "tl-teklek-7-1-premium-smart-watch-2-20-amoled-display-bluetooth",
    "name": "Teklek 7+1 Premium Smart Watch - 2.20\" Display, Bluetooth Calling",
    "category": "Smartwatches",
    "price": 5299,
    "oldPrice": 0,
    "image": "/api/media/6fefbf62-e77e-4878-a0bf-6d83cca0c15c.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/6fefbf62-e77e-4878-a0bf-6d83cca0c15c.webp",
        "alt": "Teklek 7+1 Premium Smart Watch - 2.20\" Display, Bluetooth Calling"
      },
      {
        "type": "image",
        "src": "/api/media/ae9af267-1d61-4cc0-86f4-02f7a08162e9.webp",
        "alt": "Teklek 7+1 Premium Smart Watch - 2.20\" Display, Bluetooth Calling"
      },
      {
        "type": "image",
        "src": "/api/media/27adca6f-c334-44a4-81a8-8edceef998cf.webp",
        "alt": "Teklek 7+1 Premium Smart Watch - 2.20\" Display, Bluetooth Calling"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.8,
    "stock": 33,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "watch"
    },
    "description": "Teklek Smart Watch ke saath apni lifestyle ko upgrade karein. Yeh watch sirf ek accessory nahi, balki aapka personal assistant hai jo style aur technology ka perfect blend hai. Iske \"7+1\" combo pack ke saath aapko milte hain multiple styling options jo har mauke ke liye perfect hain. Key Features: Badi aur Saaf Display: Ismein hai 2.20-inch ki AMOLED screen , jo crystal clear colors aur behtareen brightness deti hai, chahe aap dhoop mein hon ya ghar ke andar. Seamless Connectivity: Bluetooth Calling ke zariye apne phone ko pocket se nikale bina calls attend karein aur dial karein. Health & Fitness Tracking: Ismein Health Monitoring aur ECG jaise features hain jo aapke heart rate aur physical activity par nazar rakhte hain. Saath hi, Sport Mode (Spert Mode) aapki har exercise ko track karne mein madad karta hai. Entertainment on the Go: Watch se hi apni favorite Music playlist control karein. Premium Design: Silver finish body aur leather-style brown strap ke saath yeh watch ek luxary look deti hai jo formal aur casual dono kapdo par jachti hai. Technical Specifications: Feature Details Brand Teklek Display Size 2.20 Inch Display Type AMOLED Connectivity Bluetooth (Calling & Notifications) Special Sensors ECG, Heart Rate, Step Tracker Package Includes 7 Straps + 1 Smart Watch Case"
  },
  {
    "id": "tl-oly-wear-smart-watch-luxury-gift-set-for-women",
    "name": "Oly Wear Smart Watch Luxury Gift Set for Women",
    "category": "Smartwatches",
    "price": 3855,
    "oldPrice": 0,
    "image": "/api/media/1e7b2c0d-4de7-418d-b994-07628ba9938c.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/1e7b2c0d-4de7-418d-b994-07628ba9938c.webp",
        "alt": "Oly Wear Smart Watch Luxury Gift Set for Women"
      },
      {
        "type": "image",
        "src": "/api/media/52fc5258-9e6d-46cd-92ae-12d726efab43.webp",
        "alt": "Oly Wear Smart Watch Luxury Gift Set for Women"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.7,
    "stock": 46,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Smartwatches"
    },
    "description": "Apne kisi khaas ko tohfa dain ya khud ko indulge karein is nihayat hi shandaar A58 Plus Luxury Gift Set ke saath. Yeh set na sirf technology balkay fashion ka bhi behtareen imtiaz hai. Set Mein Kya Kya Shamil Hai? A58 Plus Smart Watch: 2.02-inch ki bari aur crystal clear screen ke saath, jo rose gold finish mein nihayat haseen lagti hai. Elegant Diamond Watch: Aik classic analog watch jo sparkling stones se saji hui hai, party wear ke liye perfect hai. Jewelry Collection: Is set mein matching necklace, bracelet, ring, aur earrings shamil hain jo aapki shaksiyat ko char chand laga dain ge. Extra Strap: Rozana ke naye look ke liye aik extra stylish silicone strap bhi mojood hai. Key Features: Display: 2.02\" Big Screen jo smooth touch aur behtareen colors faraham karti hai. Design: Premium Rose Gold theme jo har dress ke saath match karti hai. Gift Ready: Yeh set aik bohat hi pyare pink luxury box mein aata hai, jo isay Birthday, Anniversary ya Wedding gift ke liye behtareen banata hai. Smart Functions: Bluetooth calling, health tracking, aur notifications alerts (Smart watch features)."
  },
  {
    "id": "tl-untitled-apr15-12-05",
    "name": "Crown H30 Ultra 2 Smart Watch – 7-in-1 Straps, Bluetooth Calling, 2.01” Big Display,",
    "category": "Smartwatches",
    "price": 2280,
    "oldPrice": 2850,
    "image": "/api/media/16d0ebe8-fb92-4425-9fba-e57d7808fa65.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/16d0ebe8-fb92-4425-9fba-e57d7808fa65.webp",
        "alt": "Crown H30 Ultra 2 Smart Watch – 7-in-1 Straps, Bluetooth Calling, 2.01” Big Display,"
      },
      {
        "type": "image",
        "src": "/api/media/c737dbb9-c35a-4dc8-99a9-5e4d8096a859.webp",
        "alt": "Crown H30 Ultra 2 Smart Watch – 7-in-1 Straps, Bluetooth Calling, 2.01” Big Display,"
      }
    ],
    "color": "Default Title",
    "badge": "SALE",
    "rating": 4.6,
    "stock": 33,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Smartwatches"
    },
    "description": "Upgrade your lifestyle with the Crown H30 Ultra 2 Smart Watch — a premium smartwatch designed for style, performance, and everyday convenience. With its 2.01-inch big HD display, this watch gives you a clear and vibrant viewing experience. Stay connected with Bluetooth calling, track your health, and switch your style anytime with 7 interchangeable straps included in the box. Perfect for daily use, fitness, and modern lifestyle. 🔥 Key Features: ✅ 7-in-1 Straps Set Different colors & styles – match your outfit every day ✅ Bluetooth Calling Direct calls from your wrist – no need to take out your phone ✅ 2.01” Big HD Display Large, bright, and smooth screen for better experience ✅ Health Monitoring Track heart rate, steps, calories & daily activity ✅ Sport Modes Multiple fitness modes for workouts & tracking ✅ Stylish Ultra Design Premium Apple Ultra style look at affordable price 📦 What’s in the Box? 1x Crown H30 Smart Watch 7x Stylish Straps 1x Charging Cable User Manual"
  },
  {
    "id": "tl-series-10-smartwatch",
    "name": "Series 10 APPLE Logo Smartwatch",
    "category": "Smartwatches",
    "price": 3850,
    "oldPrice": 0,
    "image": "/api/media/89c760e8-7ad1-41fc-a9af-f194b8b47e49.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/89c760e8-7ad1-41fc-a9af-f194b8b47e49.webp",
        "alt": "Series 10 APPLE Logo Smartwatch"
      },
      {
        "type": "image",
        "src": "/api/media/23756a40-95c6-420b-a0c9-a96c76549873.webp",
        "alt": "Series 10 APPLE Logo Smartwatch"
      },
      {
        "type": "image",
        "src": "/api/media/10f55699-38c6-4303-a73e-c0255d273057.webp",
        "alt": "Series 10 APPLE Logo Smartwatch"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.8,
    "stock": 27,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "watch"
    },
    "description": "Series 10 Smartwatch - Infinite Display Apni lifestyle ko upgrade karen is behtareen smartwatch ke sath. Ismein hai ek 2.3-inch ka Infinite Display jo aapko deta hai ek saaf aur vibrant viewing experience. AMOLED technology ke sath, colors pehle se zyada bright aur sharp nazar aate hain. Design: Premium aur stylish look jo har outfit par suit kare. Display: 2.3-inch Infinite AMOLED display. Performance: Fast aur smooth interface. Suitability: Unisex design, perfect for men and women. Feature Specification Model Series 10 Display Size 2.3 Inch Display Type AMOLED / Infinite Display Style Modern / Premium"
  },
  {
    "id": "tl-tn99-premium-smartwatch-316l-stainless-steel-build-amoled-di",
    "name": "TN99 Premium Smartwatch - 316L Stainless Steel Build, AMOLED Display, Ultra-Thin Luxury Design",
    "category": "Smartwatches",
    "price": 9500,
    "oldPrice": 0,
    "image": "/api/media/f5aa542b-b1ee-4c5a-af13-2f615116ce03.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/f5aa542b-b1ee-4c5a-af13-2f615116ce03.webp",
        "alt": "TN99 Premium Smartwatch - 316L Stainless Steel Build, AMOLED Display, Ultra-Thin Luxury Design"
      },
      {
        "type": "image",
        "src": "/api/media/3407cd8a-957d-46f6-a306-1e74c32b334b.webp",
        "alt": "TN99 Premium Smartwatch - 316L Stainless Steel Build, AMOLED Display, Ultra-Thin Luxury Design"
      }
    ],
    "color": "Gold",
    "badge": "",
    "rating": 4.8,
    "stock": 51,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Smartwatches"
    },
    "description": "Apne style ko upgrade karein TN99 Premium Smartwatch ke saath. Yeh smartwatch khas un logon ke liye banayi gayi hai jo behtareen technology aur luxury look ek saath chahte hain. Iska premium 316 Stainless Steel build ise nihayat mazboot aur classy banata hai. Khas Khususiyaat (Key Features): • AMOLED Display: Is mein hai super bright AMOLED screen jo har angle se vibrant aur clear colors dikhati hai. Dhoop mein bhi screen bilkul saaf nazar aati hai. • Premium Steel Body: 316L Stainless Steel se bani yeh watch na sirf dekhne mein premium hai balki lambe arsay tak chalne wali hai. • Ultra-Thin Design: Yeh watch bohat hi patli (super thin) aur wazan mein halki hai, jis se ise sara din pehen-na bohat aasan aur comfortable ho jata hai. • Smart & Stylish: Iska minimalist aur elegant design har tarah ke kapdon (Casual ya Formal) ke saath perfect lagta hai. • Advanced Connectivity: Is mein fitness tracking aur smart notifications ke saare modern features maujood hain taake aap har waqt connected rahein. Technical Details: • Model: TN99 • Screen: High-Resolution AMOLED • Material: 316 Stainless Steel (Rust-proof) • Build: Ultra-Slim aur Lightweight Box mein kya hai? • 1 x TN99 Smartwatch • Premium Strap • Magnetic Charging Cable • User Manual"
  },
  {
    "id": "tl-z91-pro-max-luxury-mens-smartwatch-high-res-amoled-screen-ad",
    "name": "Z91 Pro Max Luxury Men's Smartwatch – High-Res AMOLED Screen & Advanced Smart Features",
    "category": "Smartwatches",
    "price": 5450,
    "oldPrice": 0,
    "image": "/api/media/3f8a4798-d4a5-4208-a50f-57358b84825d.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/3f8a4798-d4a5-4208-a50f-57358b84825d.webp",
        "alt": "Z91 Pro Max Luxury Men's Smartwatch – High-Res AMOLED Screen & Advanced Smart Features"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.8,
    "stock": 43,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Smartwatches"
    },
    "description": "Z91 Pro Max Luxury AMOLED Smartwatch – Elevate Your Style & Smart Living Apne wristwear game ko upgrade karein Z91 Pro Max ke sath! Yeh sirf aik smartwatch nahi, balkay luxury aur advanced technology ka behtareen combo hai. Aik premium black aur gold dual-tone metal chain strap ke sath, yeh watch aap ki har outfit ko aik elite aur professional look deti hai. ✨ Key Features Vibrant AMOLED Display: Is smartwatch mein aap ko milta hai ultra-bright aur crystal-clear AMOLED display, jo outdoor sunlight mein bhi perfect visibility aur rich colors faraham karta hai. Premium Design & Build: High-quality metallic casing aur sleek gold-accented rotatable bezel ke sath iska dual-tone strap isay aik luxury mechanical watch ki look deta hai. Smart Dynamic Island: Screen par top alerts, notifications, aur live activities ko track karne ke liye modern Smart Island feature shamil hai. In-Built Finger Sensor: Quick access aur seamless interaction ke liye isme intelligent finger sensor navigation di gayi hai. Complete Health Tracking: Is watch mein built-in Sleep Monitor, Weather updates, aur unique wellness features (jaise wooden fish meditation tracking) majood hain. 💡 Why Choose Z91 Pro Max? &gt; Agar aap premium looks, solid metal body, aur top-tier display quality ka perfect balance chahte hain, to yeh watch aap ke liye perfect choice hai. Gift dene ke liye ya apne personal style ko enhance karne ke liye behtareen product."
  },
  {
    "id": "tl-wisme-series-10-mini-smartwatch-5-1-luxury-edition",
    "name": "WISME Series 10 Mini Smartwatch – 5+1 Luxury Edition",
    "category": "Smartwatches",
    "price": 4999,
    "oldPrice": 0,
    "image": "/api/media/97578e5e-a21e-4e6f-a306-e94af56972a7.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/97578e5e-a21e-4e6f-a306-e94af56972a7.webp",
        "alt": "WISME Series 10 Mini Smartwatch – 5+1 Luxury Edition"
      },
      {
        "type": "image",
        "src": "/api/media/08900e1f-bc5d-47cf-827c-f84f38d80f87.webp",
        "alt": "WISME Series 10 Mini Smartwatch – 5+1 Luxury Edition"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.5,
    "stock": 18,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Smartwatches"
    },
    "description": "This smartwatch is a beautiful blend of fashion and technology. Its peach/pinkish theme and metallic mesh strap give it an elegant, premium, and feminine look. It’s not just a watch, but a complete style statement. Product Highlights: Model: WISME Series 10 (Mini Edition) 5+1 Combo Offer: The box includes a 5+1 combo, meaning you get the watch along with a set of multiple straps or accessories, allowing you to change your style every day. Design: Comes with a lovely rose-gold metallic mesh strap that feels soft to wear and looks extremely classy. Display: Features a mini-size dial that looks perfect on smaller wrists, with an analog-style digital watch face. Series 10 Features: Part of the latest series, typically including fitness tracking, heart rate monitoring, and smart notifications. Packaging: Packed in a premium box with floral designs, making it an excellent gift option."
  },
  {
    "id": "tl-hk9-mini-wearfit-pro-smartwatch-elegant-design-pro-battery",
    "name": "HK9 Mini Wearfit pro Smartwatch - Elegant Design 7 days+ pro Battery",
    "category": "Smartwatches",
    "price": 5250,
    "oldPrice": 0,
    "image": "/api/media/87e82ecb-902a-4e0e-bf77-4dfdb1009160.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/87e82ecb-902a-4e0e-bf77-4dfdb1009160.webp",
        "alt": "HK9 Mini Wearfit pro Smartwatch - Elegant Design 7 days+ pro Battery"
      },
      {
        "type": "image",
        "src": "/api/media/22e966f4-7bb2-4ff0-ae2a-b6a14a6f7756.webp",
        "alt": "HK9 Mini Wearfit pro Smartwatch - Elegant Design 7 days+ pro Battery"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 31,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Smartwatches"
    },
    "description": "Introducing the HK9 Mini Smartwatch, where sophistication meets cutting-edge technology. Perfect for both men and women, this compact smartwatch is designed to complement your everyday style while keeping you connected and healthy. Key Features: • Compact Elegance: The HK9 Mini features a sleek and modern design with a high-resolution display, perfect for smaller wrists or those who prefer a more subtle smartwatch. • Advanced Health Tracking: Monitor your well-being with precision. The HK9 Mini tracks your heart rate, blood oxygen levels (SpO2), sleep patterns, and stress levels 24/7. • Fitness at Your Fingertips: Choose from multiple sports modes, including running, cycling, swimming, and yoga. Track your steps, calories burned, and distance in real-time. • Seamless Connectivity: Stay in the loop with Bluetooth calls, message notifications (WhatsApp, Facebook, Instagram), and app alerts right on your wrist. • Long-Lasting Battery: Enjoy days of uninterrupted use on a single charge. The efficient battery ensures you're always ready to go. • Smart Features Galore: Control your music, remotely capture photos, check the weather, and set alarms, all from your smartwatch. • Water Resistant: Designed with IP68 water resistance, the HK9 Mini can withstand sweat, rain, and splashes. • Customizable Watch Faces: Personalize your look with a variety of stylish watch faces to suit your mood and outfit. Technical Specifications: • Display: [Insert Screen Size and Type, e.g., 1.75\" AMOLED] with [Insert Resolution] • Battery: [Insert Battery Capacity, e.g., 280mAh] Lithium Polymer battery • Connectivity: Bluetooth 5.0 • Water Resistance: IP68 • Compatibility: iOS 9.0+ / Android 5.0+ Why Choose HK9 Mini? The HK9 Mini Smartwatch is the perfect blend of fashion and functionality. Whether you're a fitness enthusiast or simply looking for a more connected lifestyle, the HK9 Mini is your ideal companion. Upgrade your wristwear today and experience the future of smart living! Please note: This description is based on common features of smartwatches like the HK9 Mini. It's always a good idea to cross-check with the specific user manual or manufacturer's details for precise specifications."
  },
  {
    "id": "tl-multifunctional-solar-rechargeable-bluetooth-speaker-with-le",
    "name": "Multifunctional Solar Rechargeable Bluetooth Speaker Power Bank With LED Flashlights",
    "category": "Audio",
    "price": 3650,
    "oldPrice": 0,
    "image": "/api/media/680e9e0a-228a-4911-b40c-caecb45f4f2d.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/680e9e0a-228a-4911-b40c-caecb45f4f2d.webp",
        "alt": "Multifunctional Solar Rechargeable Bluetooth Speaker Power Bank With LED Flashlights"
      },
      {
        "type": "image",
        "src": "/api/media/2f169794-1eb7-40cb-ae86-d8b73de2e827.webp",
        "alt": "Multifunctional Solar Rechargeable Bluetooth Speaker Power Bank With LED Flashlights"
      },
      {
        "type": "image",
        "src": "/api/media/89d516a9-bcc3-4d4d-8c2f-2060f3fa9de2.webp",
        "alt": "Multifunctional Solar Rechargeable Bluetooth Speaker Power Bank With LED Flashlights"
      }
    ],
    "color": "KTS-1796",
    "badge": "NEW",
    "rating": 4.7,
    "stock": 32,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Audio"
    },
    "description": "All-in-One Portable Solar Wireless Speaker & Emergency Lamp System! Kya aap camping, outdoor adventures, ya emergency power cuts ke liye ek perfect companion dhoond rahe hain? Yeh Multifunctional Solar Bluetooth Speaker aapki sabhi zarooraton ko poora karne ke liye design kiya gaya hai. Isme aapko milta hai powerful wireless sound, tez roshni dene wali LED flashlight, aur ek external wired LED bulb. Sabse acchi baat? Yeh built-in Solar Panel se direct dhoop me charge ho jata hai, jisse aapko electricity na hone par bhi kabhi pareshani nahi hogi. Iske saath hi, emergency me aap isse apna mobile phone bhi charge kar sakte hain! Key Features Solar & USB Dual Charging: Isme built-in high-efficiency solar panel hai jo ise dhoop me kahin bhi charge kar deta hai. Saath hi aap ise standard USB cable se bhi fast charge kar sakte hain. Super Bright LED Flashlight & External Bulb: Samne ki taraf ek tez focus wali emergency torch di gayi hai. Iske alawa, box me ek external LED bulb bhi milta hai jise wire ke sath connect karke aap pure kamre ya tent me roshni kar sakte hain. Multifunctional Audio System: Yeh Bluetooth, USB drive, aur TF card (MicroSD) ko support karta hai, jisse aap apna favourite music kabhi bhi aur kahin bhi sun sakte hain. Emergency Power Bank Function: Agar safar me aapke phone ki battery khatam ho jaye, to aap iske USB output port se apna mobile aasani se charge kar sakte hain. Portable & Durable Design: Ergonomic handle ke sath aane wala yeh device uthane me behad aasan hai aur iski body rugged aur durable hai, jo outdoor use ke liye perfect hai. Box Me Kya Kya Milega? 1 x Multifunctional Solar Speaker System 1 x External LED Bulb (with connecting wire) 1 x USB Charging Cable"
  },
  {
    "id": "tl-apple-k-airpods-4pro-3rd-generation-with-magsafe-charging-ca",
    "name": "Apple K AirPods 4PRO (3rd Generation) with MagSafe Charging Case - White",
    "category": "Audio",
    "price": 2890,
    "oldPrice": 0,
    "image": "/api/media/58cc6427-e75a-46fd-b6b6-91a086e142dc.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/58cc6427-e75a-46fd-b6b6-91a086e142dc.webp",
        "alt": "Apple K AirPods 4PRO (3rd Generation) with MagSafe Charging Case - White"
      },
      {
        "type": "image",
        "src": "/api/media/2a388f64-c752-4431-92f6-75d1fe6e1757.webp",
        "alt": "Apple K AirPods 4PRO (3rd Generation) with MagSafe Charging Case - White"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.9,
    "stock": 22,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "earbuds"
    },
    "description": "📦 Product Description Experience Premium Sound Anywhere Upgrade your music and calling experience with these high-quality wireless Bluetooth earbuds . Designed for comfort and performance, these earbuds deliver crystal clear sound, deep bass, and stable connectivity . The compact charging case keeps your earbuds powered throughout the day, making them perfect for travel, workouts, and daily use. With smart touch controls , you can easily manage calls, music, and voice assistants without taking out your phone. The ergonomic design ensures a comfortable fit, while advanced noise reduction technology helps you enjoy your music without distractions. ⭐ Key Features ✔ HD Stereo Sound Quality – Clear audio with powerful bass ✔ Bluetooth Fast Connection – Quick pairing with Android & iPhone ✔ Touch Control – Play/pause music and answer calls easily ✔ Long Battery Life – Up to 20+ hours with charging case ✔ Compact Charging Case – Portable and stylish design ✔ Comfort Fit Design – Perfect for gym, travel, and daily use ✔ Noise Reduction Mic – Clear calls anytime 📱 Compatibility Compatible with Android, iPhone, Tablets, Laptops, and all Bluetooth devices"
  },
  {
    "id": "tl-audio-nice-01-tws-wireless-earphones-quad-mic-anc-touch-cont",
    "name": "Audio-Nice 01 TWS Wireless Earphones | Quad Mic ANC | Touch Control | Premium Sound Quality",
    "category": "Audio",
    "price": 2850,
    "oldPrice": 3000,
    "image": "/api/media/51e2ccd2-18d9-4781-9570-90d108a907d0.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/51e2ccd2-18d9-4781-9570-90d108a907d0.webp",
        "alt": "Audio-Nice 01 TWS Wireless Earphones | Quad Mic ANC | Touch Control | Premium Sound Quality"
      },
      {
        "type": "image",
        "src": "/api/media/8951cf56-b922-4cc4-81f9-68e662d8932b.webp",
        "alt": "Audio-Nice 01 TWS Wireless Earphones | Quad Mic ANC | Touch Control | Premium Sound Quality"
      },
      {
        "type": "image",
        "src": "/api/media/419c0afc-6b7f-48d8-95e1-c8025f696314.webp",
        "alt": "Audio-Nice 01 TWS Wireless Earphones | Quad Mic ANC | Touch Control | Premium Sound Quality"
      }
    ],
    "color": "Default Title",
    "badge": "SALE",
    "rating": 4.4,
    "stock": 38,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "earbuds"
    },
    "description": "Experience True Audio Freedom! Audio-Nice 01 TWS (True Wireless Stereo) Earphones ko design kiya gaya hai un logon ke liye jo behtareen sound quality aur modern features chahte hain. Ismein maujood Quad Mic Active Noise Cancellation (ANC) ki madad se aap shor-sharabe wale mahol mein bhi saaf aur behtareen calling ka maza le sakte hain. Key Features: Quad Mic ANC: Chaar microphones ka istemal, jo bahar ki aawaz ko kam karke aapki voice ko clear banate hain. Touch Control: Earphones par halka touch karke aap music aur calls ko aasani se control kar sakte hain. Original Sound Quality: Music ke har beat ko clear aur deep bass ke sath sunne ka tajurba. Ergonomic Design: Kaano mein fit hone ke liye comfortable aur stylish design. TWS Connectivity: Fast aur stable wireless connectivity ka maza uthayen. Technical Specifications: Brand: Audio-Nice Model: Audio Nice 01 Category: True Wireless Earphones Features: Quad Mic ANC, Touch Control"
  },
  {
    "id": "tl-444-premium-quality-wireless-neckband-50-hours-playtime-ergo",
    "name": "Gaming 444 Premium Quality Wireless Neckband – 50 Hours Playtime & Ergonomic Sports Fit",
    "category": "Audio",
    "price": 3350,
    "oldPrice": 0,
    "image": "/api/media/b83c4953-bf97-4c60-8717-5f4ed3b286f9.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/b83c4953-bf97-4c60-8717-5f4ed3b286f9.webp",
        "alt": "Gaming 444 Premium Quality Wireless Neckband – 50 Hours Playtime & Ergonomic Sports Fit"
      },
      {
        "type": "image",
        "src": "/api/media/057ffe66-0065-47b2-a200-f9cb88a0bc4a.webp",
        "alt": "Gaming 444 Premium Quality Wireless Neckband – 50 Hours Playtime & Ergonomic Sports Fit"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.5,
    "stock": 44,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "earbuds"
    },
    "description": "Apne music experience ko badlein 444 Premium Wireless Neckband ke saath! Ye neckband un logo ke liye design kiya gaya hai jo performance aur comfort dono chahte hain. Iska lightweight aur ergonomic design ise sara din pehenne ke liye perfect banata hai, chahe aap gym mein ho, travel kar rahe hon, ya office ka kaam kar rahe hon. Key Features: Extra Long Battery Life: Is neckband ki sabse badi khasiyat iska 50 hours ka working time hai. Ek baar charge karein aur kayi dino tak music aur calls ka maza lein bina battery ki fikar kiye. Premium Sound Quality: Crystal clear sound aur deep bass ke saath har beat ko mehsoos karein. Ergonomic Sports Fit: Iske earbuds mein special ear-fins diye gaye hain jo kaan mein mazbooti se tike rehte hain, workout ya jogging ke dauran girte nahi hain. Quick Connectivity: Latest Bluetooth technology ke saath ye fast aur stable connection provide karta hai. Lightweight & Flexible: Iska neckband flexible material se bana hai jo neck par bojh nahi dalta aur fold karke asani se pocket ya bag mein rakha ja sakta hai. Order Karein aur non-stop music ka maza lein!"
  },
  {
    "id": "tl-wireless-rgb-soundbar-high-bass-bluetooth-speaker-with-phone",
    "name": "Wireless RGB Soundbar – High-Bass Bluetooth Speaker with Phone Holder",
    "category": "Audio",
    "price": 3350,
    "oldPrice": 0,
    "image": "/api/media/4feb2916-0f12-412f-9c6b-3b393cee8170.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/4feb2916-0f12-412f-9c6b-3b393cee8170.webp",
        "alt": "Wireless RGB Soundbar – High-Bass Bluetooth Speaker with Phone Holder"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 46,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Audio"
    },
    "description": "Apne music aur movie experience ko upgrade karein is sleek aur powerful soundbar ke saath. Iska unique design na sirf dekhne mein premium hai balki ye aapko solid audio performance bhi deta hai. Key Features: Superior Sound Quality: Deep bass aur clear treble ke saath \"Sound Dominance\" ka maza lein. Built-in Phone Holder: Iske top par ek dedicated slot hai jahan aap apna mobile phone rakh kar hands-free videos dekh sakte hain ya music control kar sakte hain. Dynamic RGB Lighting: Front panel par vibrant RGB lights hain jo music ki vibe ke saath match karti hain. Wireless Connectivity: Latest Bluetooth technology ke saath fast aur stable connection, jo har smartphone aur tablet ke saath compatible hai. Portable & Stylish: Iska compact orange aur black design ise ghar, office, ya outdoor gatherings ke liye perfect banata hai. Easy Controls: Top par diye gaye physical buttons se volume, tracks, aur calls ko asani se manage karein. Specifications: Model: HM-858 Category: Wireless Multimedia Speaker Design: Ergonomic Soundbar with Integrated Stand Battery: Long-lasting rechargeable battery Package Includes: 1 x HM-858 Wireless Soundbar 1 x Charging Cable Abhi order karein aur apne audio experience ko next level par le jayein!"
  },
  {
    "id": "tl-gts-1887-ikaraoke-box-portable-wireless-speaker-dsp-chip-fun",
    "name": "GTS-1887 iKaraoke Box Portable Wireless Speaker – DSP Chip, Funny Sound Effects & RGB LED Lights (3…",
    "category": "Audio",
    "price": 3499,
    "oldPrice": 0,
    "image": "/api/media/d9c4a8ca-3810-41cd-a676-d6cc8da8d47e.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/d9c4a8ca-3810-41cd-a676-d6cc8da8d47e.webp",
        "alt": "GTS-1887 iKaraoke Box Portable Wireless Speaker – DSP Chip, Funny Sound Effects & RGB LED Lights (3-Inch)"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.5,
    "stock": 17,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Audio"
    },
    "description": "Apne singing talent ko showcase karein is advanced GTS-1887 iKaraoke Box ke saath. Ye ek modern aur feature-packed portable speaker hai jo khas taur par karaoke lovers ke liye banaya gaya hai. Iska compact design aur \"Zero Whistling\" technology aapko ek smooth aur professional sound experience deti hai. Main Features: • DSP Chip Technology: Isme built-in Digital Signal Processor (DSP) chip hai jo sound quality ko enhance karti hai aur noise ko kam karti hai. • Zero Whistling: Microphone use karte waqt honi waali annoying seeti ya interference ko khatam karta hai. • Funny Sound Effects: Isme entertainment ke liye mukhtalif mazahiya sound effects diye gaye hain jo party ka maza dobara kar dete hain. • Vibrant RGB Lights: Speaker ke front panel par multi-color LED lights hain jo music ki beats ke saath chalti hain. • Wireless Connectivity: Bluetooth ke zariye asani se connect karein aur apna pasandida music play karein. • High Portability: 3-inch size hone ki wajah se ye behad lightweight hai aur travels ya choti gatherings ke liye best hai. Product Specifications: • Model: GTS-1887 • Driver Size: 3-Inch • Included: Wireless/Wired Mic (as per box) aur Charging Cable. • Specialty: Love to Sing branding ke saath premium build quality."
  },
  {
    "id": "tl-metallic-edition-airpods-pro",
    "name": "Metallic Edition Airpods Pro in Metal Case",
    "category": "Audio",
    "price": 2499,
    "oldPrice": 0,
    "image": "/api/media/20890e0c-1320-4976-abe4-0deaae00067c.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/20890e0c-1320-4976-abe4-0deaae00067c.webp",
        "alt": "Metallic Edition Airpods Pro in Metal Case"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.5,
    "stock": 54,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Audio"
    },
    "description": "Apne music experience ko upgrade karein in Premium Metallic Edition Earbuds ke saath. Inka haseen aur shiny finish inhein aam earbuds se bilkul mukhtalif aur stylish banata hai. Is Product Ki Khususiyaat: Premium Metallic Design: Aik glossy aur metallic orange/copper finish jo dekhne mein nihayat hi premium aur unique lagti hai. Superior Sound Quality: Crystal clear sound aur heavy bass ke saath, taake aap apne pasandida gano aur calls ka bharpoor maza le sakein. Ergonomic Fit: Inka design kaan mein asani se fit ho jata hai, jis se aap lambay arsay tak bina kisi takleef ke music sun sakte hain. Seamless Connectivity: Latest Bluetooth technology ke saath, yeh foran aapke phone (Android ya iPhone) se connect ho jate hain. Smart Touch Controls: Music play/pause karne ya calls pick karne ke liye sirf aik touch hi kafi hai. Long Battery Life: Aik baar charge karne par aapko milta hai ghanton ka playback time, aur case ke saath charging aur bhi asaan ho jati hai. Main Features: Type: Wireless Bluetooth Earbuds Compatibility: All Bluetooth-enabled devices (iOS, Android, Windows) In the Box: 2 Earbuds, 1 Metallic Charging Case, 1 Charging Cable"
  },
  {
    "id": "tl-wireless-luminous-gaming-headphones-high-definition-sound-rg",
    "name": "Wireless Luminous Gaming Headphones – High-Definition Sound & RGB Light Effect",
    "category": "Audio",
    "price": 3899,
    "oldPrice": 4500,
    "image": "/api/media/5a51dad8-af44-478d-a4ff-0b49ce3c1195.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/5a51dad8-af44-478d-a4ff-0b49ce3c1195.webp",
        "alt": "Wireless Luminous Gaming Headphones – High-Definition Sound & RGB Light Effect"
      },
      {
        "type": "image",
        "src": "/api/media/c46d282a-ca04-45c3-ad6f-e1aa2ad014c9.webp",
        "alt": "Wireless Luminous Gaming Headphones – High-Definition Sound & RGB Light Effect"
      },
      {
        "type": "image",
        "src": "/api/media/e487c89b-48e0-47c7-b1df-73188348ec94.webp",
        "alt": "Wireless Luminous Gaming Headphones – High-Definition Sound & RGB Light Effect"
      }
    ],
    "color": "White",
    "badge": "SALE",
    "rating": 4.7,
    "stock": 34,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Audio"
    },
    "description": "Experience Sound in Style with EXCEL XL-705 Wireless Headphones! Upgrade your audio game with the all-new Excel XL-705. Ye headphones sirf awaz nahi, balkay aik style statement hain. Inka vibrant RGB luminous light effect aur premium finish inko market mein sab se alag banata hai. Key Features: • ✨ Stunning Luminous Light Effect: Unique colorful LED lights jo aapke music aur gaming experience ko mazeed cool banati hain. • 🔋 Power That Lasts: Huge battery capacity (300mAh) ke sath payein 120 hours standby aur lambay arsay tak music playback. • ⚡ Type-C Fast Interface: Modern Type-C charging port ke sath fast aur easy charging ka maza lein. • 🎵 Superior Sound Quality: Deep bass aur crisp high-definition sound jo har beat ko wazay karti hai. • 🎙️ Built-in HD Microphone: Crystal clear calls aur gaming chat ke liye high-quality mic. • ☁️ Ultra-Comfort Design: Lightweight aur soft ear cushions jo ghanton pehn-ne ke baad bhi takleef nahi hone detay. • 🌐 Stable Connectivity: Latest Bluetooth version (V5.4) for a seamless 10-meter range. Box Mein Kya Hai? 1. EXCEL XL-705 Wireless Headphones 2. Type-C Charging Cable 3. User Manual Short Ad Copy (For Social Media/WhatsApp) 🔥 NEW ARRIVAL: EXCEL XL-705 Wireless Headphones 🔥 Ab music suniye aur bhi style mein! 🎧 ✅ RGB Luminous Lights ✅ 120 Hours Standby ✅ Extra Bass & HD Sound ✅ Type-C Fast Charging"
  },
  {
    "id": "tl-kbroad-rgb-wireless-soundbar-high-bass-bluetooth-subwoofer-s",
    "name": "KBroad RGB Wireless Soundbar – High-Bass Bluetooth Subwoofer Speaker",
    "category": "Audio",
    "price": 3850,
    "oldPrice": 0,
    "image": "/api/media/882d4597-07b7-4616-8afd-de962db316c3.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/882d4597-07b7-4616-8afd-de962db316c3.webp",
        "alt": "KBroad RGB Wireless Soundbar – High-Bass Bluetooth Subwoofer Speaker"
      },
      {
        "type": "image",
        "src": "/api/media/9d0e77dc-3fcf-4b93-9541-3a4913ffb78b.webp",
        "alt": "KBroad RGB Wireless Soundbar – High-Bass Bluetooth Subwoofer Speaker"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.4,
    "stock": 47,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Audio"
    },
    "description": "Apne Audio Experience Ko Upgrade Karein! Kya aapko apne room, gaming setup, ya TV ke liye ek aisi sound chahiye jo loud bhi ho aur clear bhi? KBroad Wireless Soundbar aapko deta hai premium audio quality ke sath ek zabardast visual experience. Iska sleek design aur powerful bass aapke entertainment ko agle level par le jayega. Key Features: ⚡ Powerful Subwoofer & High Bass: Iska advanced subwoofer system aapko milti hai deep bass aur crystal-clear sound, jo movies, gaming aur music ka maza dobala kar deti hai. 🌈 Dynamic RGB Lighting: Speaker ke bottom par maujood vibrant RGB lights aapke desk ya room ko ek super-cool, modern gaming aur party vibe deti hain. 📶 Seamless Wireless Connectivity: Bluetooth ki madad se apne smartphone, tablet, laptop ya smart TV ko bina kisi tar (wires) ke jhatpat connect karein. 🔋 Long-Lasting Battery: Re-chargeable battery ke sath, taake aap bina kisi rukawat ke kahin bhi apna pasandida music enjoy kar sakein. 🎙️ Multi-Mode Support: Bluetooth ke sath sath isme USB, TF Card, aur AUX ka option bhi milta hai, taake connectivity ka koi masla na ho. Specifications: Brand: KBroad Product Type: Wireless Soundbar / Subwoofer Speaker Connectivity: Bluetooth / Wireless Design: Sleek Black Finish with Under-Glow RGB Ideal For: PC Gaming Setups, Living Rooms, Bed Rooms, and Outdoor Parties"
  },
  {
    "id": "tl-gts-2008-portable-karaoke-speaker-with-wireless-microphone",
    "name": "GTS-2008 Portable Karaoke Speaker with Wireless Microphone",
    "category": "Audio",
    "price": 2250,
    "oldPrice": 0,
    "image": "/api/media/62c3f1b9-8522-4423-9626-99523f0a9081.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/62c3f1b9-8522-4423-9626-99523f0a9081.webp",
        "alt": "GTS-2008 Portable Karaoke Speaker with Wireless Microphone"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.4,
    "stock": 43,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Audio"
    },
    "description": "Apni party ko kahin bhi le jayein is GTS-2008 Karaoke Speaker ke saath! Ye compact lekin powerful speaker un logon ke liye design kiya gaya hai jo music aur singing ke shaukeen hain. Iska \"Clean & Big Sound\" feature aapko crystal clear audio experience deta hai. Key Features: • Powerful Audio: 4-inch speaker driver jo heavy bass aur loud sound deliver karta hai. • Karaoke Ready: Saath mein ek high-quality wired microphone diya gaya hai, taaki aap apne favorite gane gaa sakein. • Portable Design: Mazboot handle ke saath isse carry karna behad aasaan hai, indoor ya outdoor dono ke liye perfect. • RGB LED Lights: Music ke saath chalti hui vibrant lights aapki mehfil mein rang bhar dengi. • Multiple Connectivity: Isme Bluetooth, USB, aur SD Card support milta hai taaki aap kisi bhi device se music play kar sakein. Box Mein Kya Hai? • 1 x GTS-2008 Karaoke Speaker • 1 x Wired Microphone • 1 x Charging Cable"
  },
  {
    "id": "tl-hollyland-lark-m2-combo",
    "name": "Hollyland Lark M2 Combo",
    "category": "Audio",
    "price": 33500,
    "oldPrice": 45000,
    "image": "/api/media/d13d619f-7daa-4f72-a06a-d2c47e9023e4.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/d13d619f-7daa-4f72-a06a-d2c47e9023e4.webp",
        "alt": "Hollyland Lark M2 Combo"
      },
      {
        "type": "image",
        "src": "/api/media/a64cfd9e-0d1f-4096-87b9-80c25419a8f2.webp",
        "alt": "Hollyland Lark M2 Combo"
      }
    ],
    "color": "Default Title",
    "badge": "SALE",
    "rating": 4.7,
    "stock": 54,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "microphone"
    },
    "description": "Professional Wireless Microphone Kit – Crystal Clear Audio Yeh premium wireless microphone system content creators, vloggers, YouTubers, interviewers aur live streamers ke liye perfect choice hai. Iska advanced wireless technology stable signal aur noise-free, crystal clear sound provide karta hai. Key Features: 🎤 High-quality audio output with low latency 📡 Strong wireless range – outdoor & indoor use ke liye ideal 🔋 Long battery life for continuous recording 🎛️ Compact & lightweight design, easy to carry 🔌 Plug & play receiver, mobile aur camera compatible 🎥 Professional cinematic sound for videos & reels Is mic ka premium build quality aur modern design isay professional use ke liye best banata hai. Floating transmitters aur receiver ka setup clean look ke sath studio-level performance deliver karta hai. Best for: Vlogging, YouTube videos, interviews, podcasts, online classes, reels & live recording."
  },
  {
    "id": "tl-lark-a1-microphone-mini-duo",
    "name": "Lark A1 Microphone Mini Duo",
    "category": "Audio",
    "price": 12500,
    "oldPrice": 0,
    "image": "/api/media/ecf52ca8-d0a3-4c41-a419-719773f917b0.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/ecf52ca8-d0a3-4c41-a419-719773f917b0.webp",
        "alt": "Lark A1 Microphone Mini Duo"
      },
      {
        "type": "image",
        "src": "/api/media/93a3410b-fd85-4ec4-866b-15ad43ec74bd.webp",
        "alt": "Lark A1 Microphone Mini Duo"
      },
      {
        "type": "image",
        "src": "/api/media/800a0dfa-627d-421e-9af3-6a2395fd2e28.webp",
        "alt": "Lark A1 Microphone Mini Duo"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.7,
    "stock": 43,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Audio"
    },
    "description": "The Hollyland LARK A1 Mini Duo is Hollyland’s most compact and stylish wireless microphone system . If you are a mobile content creator, this mic can become an essential part of your everyday setup. Product Highlights Mini Duo Design This pack includes two (2) ultra-compact transmitters that are extremely small in size and lightweight, ensuring maximum comfort and portability. Ready to Use Instantly Connects immediately straight out of the box—no extra settings, apps, or pairing required. USB-C Compatibility Designed for Android smartphones , the latest iPhone 15/16 series , and USB-C–enabled laptops . Charging on the Go Comes with an elegant white charging case that keeps the microphones safe while providing convenient recharging anytime, anywhere. Professional Audio Quality Despite its compact size, the microphone delivers crisp, clear, and professional-grade sound , making it ideal for vlogging, interviews, and online content. What’s in the Box? 2× Transmitters (Clip-on Mics) 1× USB-C Receiver 1× Charging Case for portability and power Premium Original Hollyland Packaging Who Is This Mic Best For? Vloggers – For recording videos while on the move Teachers & Trainers – Perfect for online classes and lectures Social Media Creators – Ideal for TikTok, Instagram Reels, and YouTube Shorts"
  },
  {
    "id": "tl-hollyland-lark-m2",
    "name": "Hollyland Lark M2 Type C",
    "category": "Audio",
    "price": 24999,
    "oldPrice": 0,
    "image": "/api/media/824be911-f70e-4e08-a830-859d578e7f60.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/824be911-f70e-4e08-a830-859d578e7f60.webp",
        "alt": "Hollyland Lark M2 Type C"
      },
      {
        "type": "image",
        "src": "/api/media/8531d8ec-24fd-49f2-8e3f-c9aa3fdee7f4.webp",
        "alt": "Hollyland Lark M2 Type C"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 32,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "microphone"
    },
    "description": "Professional Wireless Microphone Kit – Crystal Clear Audio Yeh premium wireless microphone system content creators, vloggers, YouTubers, interviewers aur live streamers ke liye perfect choice hai. Iska advanced wireless technology stable signal aur noise-free, crystal clear sound provide karta hai. Key Features: 🎤 High-quality audio output with low latency 📡 Strong wireless range – outdoor & indoor use ke liye ideal 🔋 Long battery life for continuous recording 🎛️ Compact & lightweight design, easy to carry 🔌 Plug & play receiver, mobile aur camera compatible 🎥 Professional cinematic sound for videos & reels Is mic ka premium build quality aur modern design isay professional use ke liye best banata hai. Floating transmitters aur receiver ka setup clean look ke sath studio-level performance deliver karta hai. Best for: Vlogging, YouTube videos, interviews, podcasts, online classes, reels & live recording."
  },
  {
    "id": "tl-lark-a1-microphone-duo",
    "name": "Lark A1 Microphone Duo",
    "category": "Audio",
    "price": 15500,
    "oldPrice": 0,
    "image": "/api/media/ee0e7adf-9efb-4345-97e1-57c0383d43d1.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/ee0e7adf-9efb-4345-97e1-57c0383d43d1.webp",
        "alt": "Lark A1 Microphone Duo"
      },
      {
        "type": "image",
        "src": "/api/media/9a7ff2b2-8b7f-499f-aa16-6b9ff2fed29c.webp",
        "alt": "Lark A1 Microphone Duo"
      },
      {
        "type": "image",
        "src": "/api/media/aaa36f9d-8d5b-4548-9d8b-fd68c56bab02.webp",
        "alt": "Lark A1 Microphone Duo"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.5,
    "stock": 50,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Audio"
    },
    "description": "Enhance your video and audio quality with the Hollyland LARK A1 , a compact yet powerful wireless microphone system designed specifically for content creators, vloggers, and streamers . Key Features Crystal-Clear Audio High-fidelity sound recording that captures your voice with exceptional clarity and a natural tone. True Plug & Play (USB-C) No extra cables or complicated setup required. Simply plug it directly into your Android smartphone or USB-C–enabled laptop and start recording instantly. Dual Microphone System (Duo) Includes two transmitters , making it perfect for interviews, podcasts, and two-person recordings . Compact & Lightweight Design Ultra-small and lightweight microphones easily clip onto your shirt without adding any noticeable weight or distraction. Portable Charging Case The included charging case not only protects your microphones but also keeps them powered while you’re on the move. Smart Noise Cancellation Effectively reduces background noise in noisy environments, ensuring your voice remains clear and focused."
  },
  {
    "id": "tl-lark-a1-microphone-combo",
    "name": "Lark A1 Microphone Combo",
    "category": "Audio",
    "price": 19999,
    "oldPrice": 0,
    "image": "/api/media/66c1bb51-281a-493e-82cd-49cf10ccb347.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/66c1bb51-281a-493e-82cd-49cf10ccb347.webp",
        "alt": "Lark A1 Microphone Combo"
      },
      {
        "type": "image",
        "src": "/api/media/d6e689ad-f3e2-48ae-9492-1841f2fd35c3.webp",
        "alt": "Lark A1 Microphone Combo"
      },
      {
        "type": "image",
        "src": "/api/media/276810cd-25d7-4074-8fd6-824db07f1f48.webp",
        "alt": "Lark A1 Microphone Combo"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 49,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "microphone"
    },
    "description": "The Hollyland LARK A1 Combo is the perfect all-in-one audio solution for users who work across multiple devices , including iPhone and Android . This powerful wireless microphone kit is designed to take your audio recording quality to the next level. Key Features of the Combo Pack Universal Compatibility (Combo Edition) The package includes both Lightning and USB-C receivers , allowing seamless use with iPhones (including iPhone 15+) and Android devices —no need to buy separate versions. Dual-Channel Recording Comes with two transmitters , enabling you to record two speakers simultaneously , making it ideal for interviews, podcasts, and collaborative content. Ultra-Compact & Lightweight Design Both the receiver and microphones are extremely small and lightweight, ensuring a comfortable, distraction-free recording experience. True Plug-and-Play Setup No apps, no Bluetooth pairing, and no complicated settings. Simply plug the receiver into your phone and start recording instantly. Long Battery Life with Smart Charging Case Includes a premium charging case that protects the microphones and provides multiple recharges, perfect for long recording sessions and travel. Product Specifications Product Name: LARK A1 Wireless Lavalier Microphone Combo Connection Options: Lightning Receiver & USB-C Receiver (both included) Ideal For: Vloggers, Mobile Journalists, Podcasters, Content Creators Audio Quality: High-definition sound with built-in noise reduction technology What’s Inside the Box? 2× Transmitters (Wireless Mic Units) Receivers (Lightning + USB-C) 1× Smart Charging Case Original Hollyland Retail Packaging"
  },
  {
    "id": "tl-2-in-1-type-c-8-pin-lightning-to-3-5mm-headphone-jack-adapte",
    "name": "2-in-1 Type-C & 8-Pin Lightning to 3.5mm Headphone Jack Adapter | Fast Charging & Audio Converter",
    "category": "Mobile Accessories",
    "price": 1250,
    "oldPrice": 0,
    "image": "/api/media/d76b470c-8957-4d5b-bb6c-7ede64787675.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/d76b470c-8957-4d5b-bb6c-7ede64787675.webp",
        "alt": "2-in-1 Type-C & 8-Pin Lightning to 3.5mm Headphone Jack Adapter | Fast Charging & Audio Converter"
      },
      {
        "type": "image",
        "src": "/api/media/9ab9a01c-7b6c-469a-8c8b-3c913a5783b9.webp",
        "alt": "2-in-1 Type-C & 8-Pin Lightning to 3.5mm Headphone Jack Adapter | Fast Charging & Audio Converter"
      },
      {
        "type": "image",
        "src": "/api/media/dee3fab2-3c0a-416a-82de-ac9a504ea049.webp",
        "alt": "2-in-1 Type-C & 8-Pin Lightning to 3.5mm Headphone Jack Adapter | Fast Charging & Audio Converter"
      }
    ],
    "color": "Lightning to 3.5MM Adapter",
    "badge": "NEW",
    "rating": 4.8,
    "stock": 51,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Mobile Accessories"
    },
    "description": "Aapke Audio aur Charging Ka One-Stop Solution! Aapke phone mein 3.5mm headphone jack nahi hai? Koi baat nahi! Yeh premium 2-in-1 audio adapter aapko ek hi waqt mein music sunne aur phone charge karne ki suvidha deta hai. Compact, durable aur stylish design ke saath yeh har safar aur daily use ke liye behtareen hai. Key Features: Dual Functionality: Ek hi waqt mein 3.5mm AUX headphone connect karein aur apna device fast charge karein. Lossless Audio Quality: High-resolution digital chip lossless sound quality aur crystal-clear calls provide karti hai. Universal Compatibility: Type-C aur Lightning/8-Pin wale smartphones, tablets aur devices ke saath fully compatible. Plug & Play: Kisi extra app ya driver ki zaroorat nahi—bas plug karein aur istemal karein. Compact & Durable: Premium finish aur strong design jo easily carry kiya ja sakta hai."
  },
  {
    "id": "tl-3-in-1-foldable-wireless-charging-stand-for-multiple-devices",
    "name": "3-in-1 Foldable Wireless Charging Stand for Multiple Devices - Compact Travel-Friendly Charging Doc…",
    "category": "Mobile Accessories",
    "price": 4000,
    "oldPrice": 0,
    "image": "/api/media/a65ed68b-7bdf-4e7e-be91-d613f40bff29.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/a65ed68b-7bdf-4e7e-be91-d613f40bff29.webp",
        "alt": "3-in-1 Foldable Wireless Charging Stand for Multiple Devices - Compact Travel-Friendly Charging Dock for iphone"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.7,
    "stock": 21,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Mobile Accessories"
    },
    "description": "Tidy Up Your Space and Power Up All Your Devices at Once Are you tired of cluttered cables on your desk or nightstand? The 3-in-1 Foldable Wireless Charging Station is the ultimate solution for powering up your essential tech ecosystem simultaneously and efficiently. This compact and versatile charging dock is designed to charge your smartphone, smartwatch, and wireless earbuds all in one place, using MagSafe-compatible fast charging technology. Key Features & Benefits: • Charge 3 Devices Simultaenously: No more hunting for multiple outlets or cables. Power up your smartphone (iPhone 12/13/14/15 or other Qi-enabled phones), Apple Watch, and AirPods/Bluetooth headsets all at once. • Fast Wireless Charging: Utilizing high-speed wireless charging coils, this station delivers efficient power to your devices, reducing charging time so you can get back to what matters. • Foldable & Travel-Friendly: The innovative foldable design allows the charging stand to collapse into a slim, pocketable form factor, making it the perfect travel companion for work or vacation. Use it flat as a pad or raised as a stand. • Magnetic Alignment (MagSafe Compatible): The smartphone charging surface features a strong magnet for perfect alignment with MagSafe-equipped phones, ensuring a stable and efficient connection even when raised. • Intelligent Safety Protection: Built-in advanced chips offer comprehensive protection against over-current, over-voltage, and short-circuiting, keeping your valuable devices and your home safe. • Stylish & Functional Design: The sleek black finish and modern, angled stand complement any home or office decor. The subtle \"Colored Lights Design\" on the base provides a stylish visual confirmation of the charging status. • Optimal Viewing Angle: The raised stand positions your phone at a comfortable viewing angle, perfect for watching videos, making FaceTime calls, or viewing notifications while charging. Specifications: • Type: 3-in-1 Foldable Wireless Charger • Compatibility: MagSafe/Qi-enabled smartphones, Apple Watch, and Bluetooth headsets with wireless charging cases. • Key Features: Charging Multiple Devices, Wireless Fast Charging, Charging Safety Protection, Colored Lights Design. • Colors Available: Black (as shown). What's in the Box: • 1 x 3-in-1 Foldable Wireless Charging Station • 1 x Fast Charging Cable • 1 x User Manual Upgrade your charging game today with the ultimate multi-device wireless charging station."
  },
  {
    "id": "tl-360-rotating-desktop-bracket-zm-0113h-universal-stand-for-ph",
    "name": "360° Rotating Desktop Bracket  Universal Stand for Phones & Tablets (4.7\"–13\")",
    "category": "Mobile Accessories",
    "price": 1199,
    "oldPrice": 0,
    "image": "/api/media/9529edb0-4814-4320-bdae-ce19fec2bc9c.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/9529edb0-4814-4320-bdae-ce19fec2bc9c.webp",
        "alt": "360° Rotating Desktop Bracket  Universal Stand for Phones & Tablets (4.7\"–13\")"
      },
      {
        "type": "image",
        "src": "/api/media/487c6de4-9f09-4011-aade-04718faca093.webp",
        "alt": "360° Rotating Desktop Bracket  Universal Stand for Phones & Tablets (4.7\"–13\")"
      },
      {
        "type": "image",
        "src": "/api/media/f4363920-27ee-49fd-99eb-a8d85df15367.webp",
        "alt": "360° Rotating Desktop Bracket  Universal Stand for Phones & Tablets (4.7\"–13\")"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 47,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Mobile Accessories"
    },
    "description": "Apne workspace ko upgrade karein ZM-0113H Desktop Bracket ke saath! Ye premium quality bracket khaas taur par un logo ke liye hai jo bari screens (Tablets/iPads) istemal karte hain. Iska 360-degree rotating base aapko har angle se behtareen view deta hai. Broad Compatibility: Ye stand 4.7 inch se lekar 13 inch tak ke sabhi smartphones aur tablets ko asani se handle kar sakta hai. 360° Rotation: Base mein rotation feature hai jis se aap screen ko kisi bhi taraf ghuma sakte hain, meetings aur video calls ke liye perfect! Superior Stability: Heavy base aur \"Craftsmanship\" design isse stable rakhta hai taake aapka device niche na gire. Multi-Purpose: Online classes, office meetings, aur movie watching ke liye sabse best tool."
  },
  {
    "id": "tl-4-in-1-retractable-fast-car-charger-for-cars",
    "name": "4-in-1 Retractable Fast Car Charger for Cars",
    "category": "Mobile Accessories",
    "price": 3150,
    "oldPrice": 0,
    "image": "/api/media/e363a6f1-f56c-493b-a95e-6d379abb0f52.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/e363a6f1-f56c-493b-a95e-6d379abb0f52.webp",
        "alt": "4-in-1 Retractable Fast Car Charger for Cars"
      },
      {
        "type": "image",
        "src": "/api/media/d617b686-4789-4ece-ada4-95687c0939b6.webp",
        "alt": "4-in-1 Retractable Fast Car Charger for Cars"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.5,
    "stock": 29,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Mobile Accessories"
    },
    "description": "Apni drive ko asaan aur gadget-friendly banayein is 4-in-1 Fast Car Charger ke saath. Yeh charger na sirf fast hai, balkay iska retractable design aapki car ke dashbaord ko cables ke khilara (mess) se saaf rakhta hai. Is Product Mein Kya Khaas Hai? 4-in-1 Functionality: Is mein Type-C aur iPhone (Lightning) ke liye built-in retractable cables hain, aur saath hi extra USB ports bhi hain taake aik waqt mein 4 devices charge ho sakein. Retractable Cables: Cables ko aap apni marzi ke mutabiq kheench kar lamba kar sakte hain aur kaam khatam hone par yeh khud-ba-khud wapis andar chali jati hain. High-Speed Charging: PD 3.0 aur Fast Charging technology ke saath, yeh aapke phone ko ba-asani aur jaldi charge karta hai. Adjustable Design: Iska head flexible hai, jisay aap apni zaroorat ke mutabiq kisi bhi angle par adjust kar sakte hain. Safe & Reliable: Over-voltage aur short-circuit protection ke saath banaya gaya hai taake aapka phone mahfooz rahe. Key Specifications: Input: 12V - 24V (Har tarah ki car aur truck ke liye munasib). Ports: Type-C, Lightning (iPhone), aur extra USB-A ports. Compatibility: Android, iPhone, Tablets, aur digar USB devices ke liye perfect. Build Quality: Mazboot aur premium finish jo lambay arsay tak saath nibhaye."
  },
  {
    "id": "tl-5-in-1-starlight-car-charger-fast-charging-usb-c-ports-with-",
    "name": "5-in-1 Starlight Car Charger – Fast Charging USB-C Ports with Built-in Car Humidifier & Diffuser",
    "category": "Mobile Accessories",
    "price": 4650,
    "oldPrice": 0,
    "image": "/api/media/db566bfe-e92e-4ff5-977b-718e786b1197.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/db566bfe-e92e-4ff5-977b-718e786b1197.webp",
        "alt": "5-in-1 Starlight Car Charger – Fast Charging USB-C Ports with Built-in Car Humidifier & Diffuser"
      },
      {
        "type": "image",
        "src": "/api/media/d3b2d5b1-3414-4a43-818d-e66dd0be7abb.webp",
        "alt": "5-in-1 Starlight Car Charger – Fast Charging USB-C Ports with Built-in Car Humidifier & Diffuser"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 19,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Mobile Accessories"
    },
    "description": "Upgrade Your Drive with the Ultimate 5-in-1 Starlight Car Charger & Humidifier! Apni gari ke safar ko mazeed aaramdeh aur luxury banayein! Yeh sirf ek aam car charger nahi hai, balki ek 5-in-1 multi-functional gadget hai jo aapki gari ka mahaul badal dega. Yeh device aapke phones ko ultra-fast speed se charge karne ke sath-sath gari ki hawa ko tar-o-taza rakhne ke liye built-in humidifier/aroma diffuser ka kaam bhi karti hai. Iske sath hi, iski khoobsurat Starlight Ambient RGB lighting aapki gari ke interior ko ek premium, futuristic look deti hai. Key Features 5-in-1 Multi-Functionality: Ek hi device mein aapko milta hai fast car charger, air humidifier, aroma diffuser, atmospheric starlight, aur advanced safety circuit protection. Dual Port Fast Charging: Isme advanced Type-C aur USB outputs diye gaye hain, jo standard chargers ke muqable aapke smartphones aur gadgets ko bohot tezi se charge karte hain. Built-in Car Humidifier & Diffuser: Gari ke andar ki khushk hawa (dry air) ko khatam karta hai. Aap isme apna pasandida essential oil ya perfume add karke poori gari ko khushbudaar bana sakte hain. Vibrant Starlight Ambient Effect: Top par bani dynamic RGB starlight aapki gari ke dashboard aur interior ko dhoodhli roshni mein chamkati hai, jo raat ke safar ko haseen banati hai. Smart Circuit Protection: Built-in fuse aur smart chip aapke expensive phones ko over-charging, over-heating, aur short-circuits se mukammal mahfooz rakhti hai."
  },
  {
    "id": "tl-apple-20w-usb-c-power-adapter-fast-charging-wall-charger-for",
    "name": "Apple 20W / 25W / 40W USB-C Power Adapter for iPhone with Cable",
    "category": "Mobile Accessories",
    "price": 2450,
    "oldPrice": 0,
    "image": "/api/media/f9c5b05b-e4d0-45cb-b02f-803519fb6216.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/f9c5b05b-e4d0-45cb-b02f-803519fb6216.webp",
        "alt": "Apple 20W / 25W / 40W USB-C Power Adapter for iPhone with Cable"
      },
      {
        "type": "image",
        "src": "/api/media/3c4a8363-2f8a-416e-9cae-0e0e1989866c.webp",
        "alt": "Apple 20W / 25W / 40W USB-C Power Adapter for iPhone with Cable"
      },
      {
        "type": "image",
        "src": "/api/media/a486a5ca-0018-4c05-bde5-209efc01bffd.webp",
        "alt": "Apple 20W / 25W / 40W USB-C Power Adapter for iPhone with Cable"
      }
    ],
    "color": "20W",
    "badge": "",
    "rating": 4.5,
    "stock": 49,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "charger"
    },
    "description": "Tez aur Reliable Charging ka Behtareen Solution! Apple ka yeh 20W / 25W / 40W USB-C Power Adapter aapke devices ko ghar par, office mein, ya safar ke dauran fast aur efficient charging faraham karta hai. Yeh adapter khaas tor par Apple ecosystem ke liye design kiya gaya hai taake aapki battery ki sehat (health) bhi barqarar rahe. Key Features: Fast Charging Support: Yeh adapter 20W ki power delivery ke saath aata hai, jo iPhone 8 aur us se naye models ko fast charge karne ki salahiyat rakhta hai (sirf 30 mins mein taqreeban 50% charge). Compact Design: Iska stylish aur chota size ise carry karne mein nihayat asaan banata hai. Universal Compatibility: Yeh kisi bhi USB-C enabled device ke saath kaam kar sakta hai, lekin behtareen performance ke liye ise iPhone 12, 13, 14, aur 15 series ke saath suggest kiya jata hai. Safety Guaranteed: Original design hone ki wajah se yeh over-heating aur short-circuit se mukammal hifazat deta hai. Specifications: Power: 20 / 25W / 40W Watts Port Type: USB-C Compatibility: iPhone Models (iPhone 8 to latest), iPad Pro, iPad Air, aur AirPods. Note: Charging cable alag se farokht ki jati hai. Behtareen results ke liye is adapter ko original USB-C to Lightning ya USB-C to USB-C cable ke saath istemal karen."
  },
  {
    "id": "tl-apple-40w-usb-c-fast-power-adapter-dual-pin-high-speed-wall-",
    "name": "Apple 40W USB-C Fast Power Adapter – Dual Pin High-Speed Wall Charger with NFC",
    "category": "Mobile Accessories",
    "price": 6000,
    "oldPrice": 0,
    "image": "/api/media/9092155d-8587-4037-9439-e6af10b9b524.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/9092155d-8587-4037-9439-e6af10b9b524.webp",
        "alt": "Apple 40W USB-C Fast Power Adapter – Dual Pin High-Speed Wall Charger with NFC"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.7,
    "stock": 50,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Mobile Accessories"
    },
    "description": "Apne devices ko karein super-fast charge! Yeh premium 40W USB-C Power Adapter aapke iPhone, iPad, aur baqi Type-C compatible devices ko nihayat tez aur safe charging faraham karta hai. Iska compact aur minimalist design ise travel-friendly banata hai taake aap kahin bhi bina kisi pareshani ke fast charging ka faida utha sakein. Key Features: 40W High-Speed Charging: Kam waqt mein zyada battery charge karein. iPhone aur iPad ki fast charging ke liye bilkul perfect hai. USB-C Port: Modern aur universal Type-C connectivity jo behtareen power delivery (PD) support karti hai. NFC Enabled: Smart connectivity aur verification ke liye box par NFC tag diya gaya hai. Premium & Compact Design: Durable build quality ke sath US dual-pin design jo pocket ya bag mein aasani se fit ho jaye. Safe & Reliable: Overheating, overvoltage, aur short-circuit se protection taake aapka qeemti mobile hamesha mahfooz rahe. Specifications: Product Type: Power Adapter / Wall Charger Output Power: 40W Interface: USB-C (Type-C) Plug Type: US Standard (2-Pin) Compatibility: iPhones, iPads, AirPods, aur tamam Android devices jo USB-C fast charging support karte hain."
  },
  {
    "id": "tl-airpods-pro-2nd-gen-with-magsafe-charging-case-active-noise-",
    "name": "Apple Bass Pro Plus+ Earbuds – Full Options, ANC Touch Control with Lightning port",
    "category": "Mobile Accessories",
    "price": 3890,
    "oldPrice": 0,
    "image": "/api/media/f6434209-5cab-4cc7-9a03-2f4e011c0e00.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/f6434209-5cab-4cc7-9a03-2f4e011c0e00.webp",
        "alt": "Apple Bass Pro Plus+ Earbuds – Full Options, ANC Touch Control with Lightning port"
      },
      {
        "type": "image",
        "src": "/api/media/db479af2-23db-432a-861c-e58e188617fe.webp",
        "alt": "Apple Bass Pro Plus+ Earbuds – Full Options, ANC Touch Control with Lightning port"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.7,
    "stock": 29,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Mobile Accessories"
    },
    "description": "Pure Sound & Powerful Bass Tele Link Gold TLG03 TWS Wireless Bass Pro Plus+ earbuds ke saath premium audio experience hasil karein. Iska advanced driver unit crisp treble aur deep bass deliver karta hai, jo aapke music, podcasts, aur calls ko ek naya level deta hai. Key Features: Active Noise Cancellation (ANC) & Touch Control: Noise control aur Easy touch operation ke zariye music switch karein aur calls answer karein bina phone ko haath lagaye. Long Battery Life: 300mAh charging case ke saath paayein 24 Hours tak ka total music play time aur up to 8 hours listening time single charge par. Fast Charging & Long Standby: Lightning charging interface ke sath sirf 60 minutes mein full charge, aur up to 3 months ka standby time. Seamless Connectivity: Bluetooth range 10+ meters tak, jo iOS aur Android dono devices ke saath perfectly compatible hai. Ergonomic & Durable Design: Lanyard cord ke sath stylish charging case jo safar mein carry karne ke liye nihayat aasan hai. Specifications: Model: TLG03 Driver: 40mm Frequency Range: 20Hz – 20kHz Battery Capacity: 300mAh (Rechargeable) Charging Time: ~60 Minutes Listening Time: ~8 Hours Compatibility: iOS / Android"
  },
  {
    "id": "tl-apple-usb-c-60w-braided-charge-cable-1m-for-iphone-ipad-macb",
    "name": "Apple USB-C/Lightning 60W Braided Charge Cable (1m) – For iPhone, iPad & MacBook",
    "category": "Mobile Accessories",
    "price": 1250,
    "oldPrice": 0,
    "image": "/api/media/123b3c59-16cb-4c0f-8f4b-e23ed9b54fc7.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/123b3c59-16cb-4c0f-8f4b-e23ed9b54fc7.webp",
        "alt": "Apple USB-C/Lightning 60W Braided Charge Cable (1m) – For iPhone, iPad & MacBook"
      },
      {
        "type": "image",
        "src": "/api/media/1e3cf21a-4143-4ddc-840b-7e3903342272.webp",
        "alt": "Apple USB-C/Lightning 60W Braided Charge Cable (1m) – For iPhone, iPad & MacBook"
      }
    ],
    "color": "Type C",
    "badge": "",
    "rating": 4.7,
    "stock": 29,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Mobile Accessories"
    },
    "description": "Upgrade your charging experience with the premium Apple USB-C 60W Charge Cable (1m). Jaisa ki image.png mein dikhaya gaya hai, yeh cable ek high-quality, durable braided design ke saath aati hai jo ulajhne (tangling) aur wear-and-tear se bachati hai. Yeh fast charging aur secure data transfer ke liye bilkul perfect hai. Key Features: 60W Fast Charging Support: Aapke devices ko bohot tezi se charge karti hai, chahe woh iPhone ho, iPad, ya MacBook. Premium Braided Design: Normal cables ke muqable zyada mazboot aur lambe samay tak chalne wali design. 1-Meter Length: Daily use, office desk, ya car mein use karne ke liye perfect aur convenient size. Universal USB-C Compatibility: iPhone 16 Pro Max ke liye specially optimized hai, aur sabhi USB-C enabled devices ke saath perfectly kaam karti hai. Specifications: Brand: Apple Compatible Connector Type: USB-C to USB-C Power Output: Up to 60W Length: 1 Meter (1m) Material: Braided Nylon Textile"
  },
  {
    "id": "tl-audionic-jionee-2-handsfree",
    "name": "Audionic Jionee 2 Handsfree",
    "category": "Mobile Accessories",
    "price": 1750,
    "oldPrice": 0,
    "image": "/api/media/f54edcbe-e56c-43bc-9266-b7c0bc736f27.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/f54edcbe-e56c-43bc-9266-b7c0bc736f27.webp",
        "alt": "Audionic Jionee 2 Handsfree"
      },
      {
        "type": "image",
        "src": "/api/media/dc0de14a-d920-4ca4-a09c-7338963e92a3.webp",
        "alt": "Audionic Jionee 2 Handsfree"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.7,
    "stock": 42,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Mobile Accessories"
    },
    "description": "Upgrade your audio experience with the Audionic Jionee 2 Handsfree. Designed for crisp sound clarity and enhanced bass performance, these in-ear wired earphones deliver outstanding sound quality whether you are listening to music, watching videos, or taking calls. Key Features: • Extra Bass Sound: Powerful audio output with deep bass for an immersive listening experience. • In-Line HD Microphone: Clear voice capture for hands-free calling and online meetings. • Universal 3.5mm Jack: Compatible with smartphones, laptops, tablets, and audio devices. • Comfortable Fit: Ergonomic design ensures a comfortable and secure fit for everyday use. • Durable Build: High-quality materials designed for daily wear and tangle-free convenience. Product Specifications: • Brand: Audionic • Model: Jionee 2 • Connection Type: 3.5mm Audio Jack • Microphone: Integrated In-line Mic • Audio Profile: Extra Bass / HD Sound"
  },
  {
    "id": "tl-auto-power-off-charging-guard-usb-c-stops-charging-at-100-ba",
    "name": "Auto Power Off Charging Guard USB-C | Stops Charging at 100% Battery | Battery Protection Adapter",
    "category": "Mobile Accessories",
    "price": 2450,
    "oldPrice": 3500,
    "image": "/api/media/9bccb12a-b29b-4b44-95c6-f86816aa3b6d.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/9bccb12a-b29b-4b44-95c6-f86816aa3b6d.webp",
        "alt": "Auto Power Off Charging Guard USB-C | Stops Charging at 100% Battery | Battery Protection Adapter"
      },
      {
        "type": "image",
        "src": "/api/media/7cd4ccb6-03b5-414f-b90b-942570f6a761.webp",
        "alt": "Auto Power Off Charging Guard USB-C | Stops Charging at 100% Battery | Battery Protection Adapter"
      }
    ],
    "color": "Default Title",
    "badge": "SALE",
    "rating": 4.9,
    "stock": 32,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Mobile Accessories"
    },
    "description": "Protect your phone battery with smart charging. The Auto Power Off Charging Guard is a smart USB-C adapter that fits between your charger and your phone. Once your phone reaches 100% charge , it automatically disconnects the charging power, helping prevent unnecessary overcharging and reducing battery stress. Its compact design makes it ideal for daily use at home, in the office, or while traveling. Key Features 🔋 Automatically stops charging when the battery reaches 100% 🛡️ Helps protect battery health from unnecessary charging ⚡ Supports fast charging (device and charger dependent) 🔌 USB Type-C interface 📱 Compatible with most USB-C Android phones, IPhones, tablets, and other USB-C devices 💼 Compact, lightweight, and easy to carry 🚫 No app or setup required – simply plug it in and use How to Use Connect the Charging Guard to your phone. Plug your charging cable into the adapter. Charging starts normally. When the battery reaches 100% , the adapter automatically disconnects the charging power. Package Includes 1 × USB-C Auto Power Off Charging Guard Note: This product is designed to automatically disconnect charging at 100% battery . Fast charging compatibility depends on your phone and charger."
  },
  {
    "id": "tl-fs09-gaming-phone-cooler-heat-dissipation-cooling-fan",
    "name": "FS09 Gaming Phone Cooler | Heat Dissipation Cooling Fan",
    "category": "Mobile Accessories",
    "price": 2599,
    "oldPrice": 0,
    "image": "/api/media/81fcdf80-a5c6-424c-a702-cb410e97cfa2.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/81fcdf80-a5c6-424c-a702-cb410e97cfa2.webp",
        "alt": "FS09 Gaming Phone Cooler | Heat Dissipation Cooling Fan"
      },
      {
        "type": "image",
        "src": "/api/media/75be602f-ec90-4fad-96bc-8d59276f8ddb.webp",
        "alt": "FS09 Gaming Phone Cooler | Heat Dissipation Cooling Fan"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 37,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Mobile Accessories"
    },
    "description": "Agar aapka phone gaming ya heavy use ke waqt garam ho jata hai, toh FS09 Phone Cooler aapka perfect solution hai. Ye device aapke phone ko seconds mein thanda kar deta hai taake aap bina kisi lag ya frame drop ke apni gaming enjoy kar sakein. Key Features: Instant Cooling Tech: Iska powerful fan aur \"Great Wind Vent\" heat ko tezi se bahar nikalta hai, jo heavy gaming (PUBG, Free Fire) ke waqt phone ko cool rakhta hai. Digital Temperature Display: Isme ek smart display diya gaya hai jo live temperature show karta hai, taake aapko pata chale ke device kitna thanda hai. Dynamic RGB Lights: Gaming vibe ko barqarar rakhne ke liye isme stylish RGB lighting effect diya gaya hai. Quiet Operation: Iska fan noise bohot kam hai, taake aapki voice chat ya game sound mein koi disturbance na ho. Lightweight & Ergonomic: Iska compact design phone ke saath lag kar heavy feel nahi hone deta aur grip ko comfortable rakhta hai. Universal Compatibility: Ye almost har smartphone ke saath easily attach ho jata hai. Specifications: Model: FS09 Technology: Advanced Heat Dissipation Lighting: Multi-color LED/RGB Power Source: USB Powered (Plug and Play) Package Includes: 1 x FS09 Phone Cooler 1 x Charging Cable Ab lag aur heat ko kahein bye-bye! Abhi order karein aur apni gaming performance boost karein."
  },
  {
    "id": "tl-c10-wireless-car-holder-wireless-charger-smart-automatic-cla",
    "name": "C10 Wireless Car Holder + Wireless Charger - Smart Automatic Clamping, 360° Rotation, Fast Charging…",
    "category": "Car Accessories",
    "price": 4250,
    "oldPrice": 0,
    "image": "/api/media/95e49c25-074c-41b6-b97a-dd6d484a4be9.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/95e49c25-074c-41b6-b97a-dd6d484a4be9.webp",
        "alt": "C10 Wireless Car Holder + Wireless Charger - Smart Automatic Clamping, 360° Rotation, Fast Charging Support"
      }
    ],
    "color": "Default Title",
    "badge": "NEW",
    "rating": 4.5,
    "stock": 40,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Car Accessories"
    },
    "description": "Apne safar ko banayein mazeed asan aur safe C10 Wireless Induction Car Holder ke saath! Yeh smart car holder apke driving experience ko behtar banane ke liye design kiya gaya hai. Iski advanced features aur stylish design ise har car ke liye aik lazmi accessory banate hain. Khasosiyaat: • Wireless Induction Charging: Apne Qi-enabled smartphone ko bina kisi cable ke charge karein (Fast charging support ke saath). • Smart Automatic Clamping: Phone ko holder ke kareeb late hi arms khud ba khud open aur close ho jate hain, aik hath se use karna asan hai. • 360° Rotation: Phone ko kisi bhi angle par set karein, portrait ya landscape mode mein. • Ultra-thin Metal Fuselage: Elegant aur durable design jo apke car ke interior se match karta hai. • Built-in Battery & Ultra Capacitor: Power cut hone par bhi holder open ho jata hai, phone nikalna asan hai. • Multiple Protection Features: Overheat, overcurrent, aur overvoltage protection ke saath safe charging. • No Abnormal Noise: Bilkul khamosh operation. • Super Compatibility: Ziyadatar smartphones aur car vents ke saath compatible. Fawaid: • Driving ke doran asani: Aik hath se phone lagana aur nikalna asan hai. • Hamesha connected rahein: Safar ke doran phone charge hota rahega. • Behtar visibility: Navigasyon aur calls ke liye behtareen view angle. • Safe charging: Apke phone ki battery ki hifazat. • Stylish design: Car ke interior ko mazeed khubsurat banata hai. Aj hi C10 Wireless Induction Car Holder order karein aur apne safar ko mazeed asan aur safe banayein!"
  },
  {
    "id": "tl-led-matrix-rgb-pixel-panel-with-bluetooth-control",
    "name": "LED Matrix RGB Pixel Panel with Bluetooth Control",
    "category": "Car Accessories",
    "price": 4449,
    "oldPrice": 5550,
    "image": "/api/media/3bf02f0a-ab80-401d-b69a-1b76ccfc4528.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/3bf02f0a-ab80-401d-b69a-1b76ccfc4528.webp",
        "alt": "LED Matrix RGB Pixel Panel with Bluetooth Control"
      },
      {
        "type": "image",
        "src": "/api/media/a06ff7e9-9fc5-4d0d-a36a-daf14e1ce830.webp",
        "alt": "LED Matrix RGB Pixel Panel with Bluetooth Control"
      },
      {
        "type": "image",
        "src": "/api/media/d6dae4fa-5b07-4997-87e1-7808776f1465.webp",
        "alt": "LED Matrix RGB Pixel Panel with Bluetooth Control"
      }
    ],
    "color": "7cm x 18cm",
    "badge": "SALE",
    "rating": 4.6,
    "stock": 35,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Car Accessories"
    },
    "description": "A flexible RGB LED panel that lets you display custom text, animations, and designs, easily controlled from your phone via Bluetooth. Available in sizes: 7×18 cm, 10×35 cm, 12×60 cm, and 20×90 cm."
  },
  {
    "id": "tl-3-in-1-foldable-magsafe-wireless-charger-portable-charging-p",
    "name": "3-in-1 Foldable MagSafe Wireless Charger – Portable Charging Pad for iPhone",
    "category": "Power Solutions",
    "price": 3850,
    "oldPrice": 0,
    "image": "/api/media/a0d16201-7410-45a3-86ea-9fbe7f879884.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/a0d16201-7410-45a3-86ea-9fbe7f879884.webp",
        "alt": "3-in-1 Foldable MagSafe Wireless Charger – Portable Charging Pad for iPhone"
      }
    ],
    "color": "Default Title",
    "badge": "NEW",
    "rating": 4.8,
    "stock": 46,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Power Solutions"
    },
    "description": "Apne Charging Experience ko Karein Simple aur Stylish! Ab aapko alag-alag cables ki zaroorat nahi. Yeh 3-in-1 MagSafe Wireless Charger aapke iPhone, Apple Watch, aur AirPods ko ek saath charge karne ke liye banaya gaya hai. Iska foldable design ise market ka sabse compact aur versatile charger banata hai. Main Features: • 3-Device Simultaneous Charging: Ek hi waqt mein apne Phone, Watch aur Earbuds ko charge karein. • MagSafe Compatible: Powerful magnets jo aapke iPhone ko perfect alignment mein rakhte hain taaki fast aur secure charging mil sake. • Foldable & Portable Design: Ise aap aasaani se fold karke apni pocket ya bag mein rakh sakte hain. Travel ke liye yeh best option hai. • Multi-Mode Use: Ise aap flat rakh kar charging pad ki tarah use karein ya fold karke triangle stand bana lein taaki charging ke waqt video dekhi ja sake. • Premium Quality & Safety: High-grade silicone material se bana hai jo soft touch hai aur isme over-charge protection aur heat control ka system bhi hai. • Clean & Minimal Look: Desk par uljhi hui wires se jaan chhurayein aur ek neat setup banayein. Product Specifications: • Type: MagSafe Wireless Charger (Foldable) • Compatibility: iPhone (MagSafe series), Apple Watch (All series), AirPods (Wireless charging case models) • Color: Elegant White • Port: USB-C Input Box Mein Kya Hai? 1. 3-in-1 MagSafe Foldable Charger 2. USB-C Charging Cable 3. User Manual"
  },
  {
    "id": "tl-iphone-next-gen-20-000mah-pocket-power-bank-fast-sleek-and-p",
    "name": "iphone Next-Gen 20,000mAh Pocket Power Bank: Fast, Sleek, and Powerful",
    "category": "Power Solutions",
    "price": 4250,
    "oldPrice": 0,
    "image": "/api/media/5bc77545-4225-4ce4-bd01-b79b38d1d9e2.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/5bc77545-4225-4ce4-bd01-b79b38d1d9e2.webp",
        "alt": "iphone Next-Gen 20,000mAh Pocket Power Bank: Fast, Sleek, and Powerful"
      },
      {
        "type": "image",
        "src": "/api/media/81feb9d2-dafa-4c19-ba93-7750d80ef949.webp",
        "alt": "iphone Next-Gen 20,000mAh Pocket Power Bank: Fast, Sleek, and Powerful"
      }
    ],
    "color": "iphone Lightning Cable 20w",
    "badge": "",
    "rating": 4.7,
    "stock": 26,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Power Solutions"
    },
    "description": "Stay Powered, Anywhere, Anytime! Ye ultra-compact power bank apke devices ko din bhar charged rakhne ke liye design kiya gaya hai. Iska sleek aur pocket-friendly size ise travel aur daily use ke liye perfect banata hai. Key Features: • Massive Capacity: 20,000mAh ki badi battery jo apke phone ko multiple times full charge kar sakti hai. • Dual Fast Charging: Do mukhtalif models mein available (20W aur 22.5W) taake apko mile super-fast charging speed. • Smart LED Display: Front pe mojood digital screen apko exact battery percentage (100% tak) dikhati hai, taake guess-work ki zaroorat na rahe. • Premium Design: Matte finish aur rounded edges ke sath aik elegant look. Ismein aik convenient lanyard (strap) bhi hai taake girne ka khatra na ho. • Universal Compatibility: iPhone, Android phones, tablets, aur TWS earbuds ke sath mukammal taur par compatible."
  },
  {
    "id": "tl-joway-10000mah-pd20w-22-5w-fast-charging-power-bank-slim-lig",
    "name": "JOWAY 10000mAh PD20W & 22.5W Fast Charging Power Bank – Slim & Lightweight Portable Charger",
    "category": "Power Solutions",
    "price": 3700,
    "oldPrice": 0,
    "image": "/api/media/e766f4ea-ec2d-4954-b976-019bb5ecf744.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/e766f4ea-ec2d-4954-b976-019bb5ecf744.webp",
        "alt": "JOWAY 10000mAh PD20W & 22.5W Fast Charging Power Bank – Slim & Lightweight Portable Charger"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.7,
    "stock": 39,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Power Bank"
    },
    "description": "Apne devices ko karein super-fast charge, kahin bhi! Yeh JOWAY (Model JP310) power bank un logo ke liye design kiya gaya hai jo performance ke saath elegant design dhoondte hain. Iska slim body aur high-speed charging capabilities ise aapka best travel partner banati hain. Product Highlights: 10,000mAh Battery Capacity: Ek bada power backup jo aapke smartphone ko kai baar charge karne ke liye kafi hai. Dual Fast Charging: Yeh PD20W (Power Delivery) aur 22.5W super-fast charging dono ko support karta hai, taaki aapka phone kam se kam waqt mein full charge ho jaye. Multi-Port Design: Ismein USB-A aur USB-C (Type-C) ports diye gaye hain, jisse aap ek saath multiple devices charge kar sakte hain. Compact & Portable: Iska sleek aur slim design aapki jeb (pocket) ya bag mein aaram se fit ho jata hai. Safety First: Over-charge, over-heat, aur short-circuit protection ke saath aata hai taaki aapka device hamesha safe rahe. Technical Specifications: Brand: JOWAY Model: JP310 Capacity: 10000mAh Output: PD 20W (USB-C) / 22.5W (USB-A) Design: Silver/White premium finish with LED indicators"
  },
  {
    "id": "tl-k05-anti-static-power-socket-extension-box-3-power-outlets-6",
    "name": "K05 Anti-Static Power Socket Extension Box – 3 Power Outlets & 6 USB Ports (3.4A Auto-Max, 200CM Co…",
    "category": "Power Solutions",
    "price": 3450,
    "oldPrice": 0,
    "image": "/api/media/f7d3e75e-e4fe-496e-af82-9186931fda38.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/f7d3e75e-e4fe-496e-af82-9186931fda38.webp",
        "alt": "K05 Anti-Static Power Socket Extension Box – 3 Power Outlets & 6 USB Ports (3.4A Auto-Max, 200CM Cord)"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.4,
    "stock": 44,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Power Solutions"
    },
    "description": "Upgrade Your Power Management Tired of cluttered desks and running out of charging slots? The K05 Anti-Static Power Socket is the ultimate all-in-one charging station designed to power your entire workspace safely and efficiently. Featuring a sleek, premium design, it effortlessly combines traditional AC outlets with high-speed USB ports to handle all your electronic essentials. ### Key Features Massive Charging Capacity: Equipped with 3 heavy-duty AC power sockets and 6 intelligent USB ports, allowing you to power up to 9 devices simultaneously. Smart Auto-Max USB Charging: Delivering a combined 3.4A output, the smart USB ports automatically detect and optimize charging speeds for smartphones, tablets, power banks, and other gadgets. Anti-Static & Surge Protection: Built with advanced safety mechanisms, including an anti-static design and heat-resistant components, to safeguard your sensitive electronics from power spikes and shorts. Extended Reach: Comes with a durable, heavy-duty 200CM (2-meter) power cord to easily reach distant wall outlets. Master Power Switch: A single, responsive power button lets you cut power to all connected devices instantly, saving energy with a single click. ### Specifications Model: K05 AC Outlets: 3 Power Sockets USB Ports: 6 USB (Auto-Max 3.4A) Cable Length: 200 CM Compatibility: Universal sockets accommodating multiple plug types"
  },
  {
    "id": "tl-movespeed-5000mah-magnetic-wireless-power-bank",
    "name": "MOVESPEED 5000mAh Magnetic Wireless Power Bank",
    "category": "Power Solutions",
    "price": 4299,
    "oldPrice": 5500,
    "image": "/api/media/8b569b51-4bd1-4a0a-8da5-4700fbe9cb84.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/8b569b51-4bd1-4a0a-8da5-4700fbe9cb84.webp",
        "alt": "MOVESPEED 5000mAh Magnetic Wireless Power Bank"
      }
    ],
    "color": "Default Title",
    "badge": "SALE",
    "rating": 4.8,
    "stock": 36,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Power Bank"
    },
    "description": "Apne phone ko charge karein bina kisi extra cable ke jhanjhat ke! Yeh MOVESPEED Magnetic Wireless Charger ek perfect combination hai style aur performance ka. Iska slim design isse \"Small Magnetic Card\" jitna portable banata hai, taaki aap ise kahin bhi aasani se le ja sakein. Key Features: Magnetic Snap & Charge: MagSafe compatible design jo aapke phone ke piche mazbooti se chipak jata hai aur instant wireless charging shuru kar deta hai. 5000mAh Capacity: Daily use ke liye ek ideal capacity jo aapke smartphone ko emergency mein ya pure din backup dene ke liye kaafi hai. 20W Super Fast Charge: Sirf wireless hi nahi, yeh 20W ki speed se fast charging support karta hai taaki aapka waqt bache. Built-in Lanyard/Cable: Ismein ek convenient strap diya gaya hai jise aap pakadne ke liye ya charging cable ki tarah istemal kar sakte hain. Ultra-Slim & Lightweight: Itna patla ki aap ise phone ke piche laga kar bhi phone aaram se chala sakte hain. Specifications: Brand: MOVESPEED Battery Capacity: 5000mAh Charging Speed: 20W PD Fast Charge Color: Multi Compatibility: Sabhi Qi-enabled wireless charging phones aur MagSafe-supported iPhones ke liye perfect."
  },
  {
    "id": "tl-movespeed-capsule-power-bank",
    "name": "MOVESPEED Capsule Power Bank 5000mah",
    "category": "Power Solutions",
    "price": 3150,
    "oldPrice": 0,
    "image": "/api/media/4ec89f0e-527a-4a59-9a8a-a5e2fae13734.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/4ec89f0e-527a-4a59-9a8a-a5e2fae13734.webp",
        "alt": "MOVESPEED Capsule Power Bank 5000mah"
      },
      {
        "type": "image",
        "src": "/api/media/0e3b1a18-4049-4635-a05d-994eb2c89217.webp",
        "alt": "MOVESPEED Capsule Power Bank 5000mah"
      },
      {
        "type": "image",
        "src": "/api/media/68bf2075-7c7d-41fc-b3c6-ca4fd7862551.webp",
        "alt": "MOVESPEED Capsule Power Bank 5000mah"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 16,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Power Bank"
    },
    "description": "MOVESPEED Capsule Power Bank (移速能量胶囊移动电源). Model: YSPBL05-20E. Battery Capacity: 5000mAh (jo ek average smartphone ko takreeban ek baar full charge karne ke liye kaafi hai). Design: Gradient purple color (Starry Purple) ke saath ek capsule shape design, jo pakadne mein asan aur dikhne mein premium hai. Feature Details Battery Type 21700 Lithium-ion cell (yeh cells apni high density aur durability ke liye jane jate hain). Input (Type-C) $5\\text{V}=2.5\\text{A}$ , $9\\text{V}=2\\text{A}$ , $12\\text{V}=1.5\\text{A}$ (Fast recharging support). Output (Type-C) $5\\text{V}=3\\text{A}$ , $9\\text{V}=2.22\\text{A}$ , $12\\text{V}=1.67\\text{A}$ (Max 20W Fast Charging). Weight Takreeban 119 grams (bohot halka). Dimensions $126 \\times 29 \\times 29\\text{ mm}$ ."
  },
  {
    "id": "tl-nornss-ns-27-removable-design-20000mah-power-bank-22-5w-fast",
    "name": "NORNSS NS-27 Removable Design 20000mAh Power Bank (22.5W Fast Charging)",
    "category": "Power Solutions",
    "price": 3699,
    "oldPrice": 4000,
    "image": "/api/media/11e12217-8f54-4294-ad5f-ed652f2b7a9a.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/11e12217-8f54-4294-ad5f-ed652f2b7a9a.webp",
        "alt": "NORNSS NS-27 Removable Design 20000mAh Power Bank (22.5W Fast Charging)"
      },
      {
        "type": "image",
        "src": "/api/media/7e35e611-3755-492d-9812-4a4ec6ee8b06.webp",
        "alt": "NORNSS NS-27 Removable Design 20000mAh Power Bank (22.5W Fast Charging)"
      },
      {
        "type": "image",
        "src": "/api/media/346e0021-a98b-40b1-ac45-243489a71d41.webp",
        "alt": "NORNSS NS-27 Removable Design 20000mAh Power Bank (22.5W Fast Charging)"
      }
    ],
    "color": "Default Title",
    "badge": "SALE",
    "rating": 4.4,
    "stock": 28,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Power Bank"
    },
    "description": "Yeh NORNSS brand ka NS-27 model power bank hai, jo apni mukhtalif aur stylish \"Removable Design\" ki wajah se jana jata hai. Iski ahem khusoosiyaat darj-e-zail hain: Capacity: Is power bank ki capacity 20,000mAh hai. Fast Charging: Yeh device 22.5W ki quick charge support karti hai. Technology: Is mein PD (Power Delivery) aur Qualcomm Quick Charge 3.0 ki technology shamil hai. Design: Isay \"New detachable self-wired\" power bank kaha gaya hai, jiska matlab hai ke is mein cables attach karne ya manage karne ka nizam mojood hai. Key Features: Packing par mazeed High Capacity , USB Charge , aur Charge Ready jaisi khusoosiyaat darj hain."
  },
  {
    "id": "tl-nornss-ns-96-10000mah-removable-design-power-bank-22-5w-fast",
    "name": "NORNSS NS-96 10000mAh Removable Design Power Bank (22.5W Fast Charging)",
    "category": "Power Solutions",
    "price": 2950,
    "oldPrice": 3500,
    "image": "/api/media/9eba26df-6d16-44dc-97b3-51b2f451ba47.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/9eba26df-6d16-44dc-97b3-51b2f451ba47.webp",
        "alt": "NORNSS NS-96 10000mAh Removable Design Power Bank (22.5W Fast Charging)"
      },
      {
        "type": "image",
        "src": "/api/media/7e53f38b-515d-440d-a5e0-e2b0a875ea59.webp",
        "alt": "NORNSS NS-96 10000mAh Removable Design Power Bank (22.5W Fast Charging)"
      },
      {
        "type": "image",
        "src": "/api/media/13a79268-529d-4eca-b2bc-ef5c527668b5.webp",
        "alt": "NORNSS NS-96 10000mAh Removable Design Power Bank (22.5W Fast Charging)"
      }
    ],
    "color": "Default Title",
    "badge": "SALE",
    "rating": 4.9,
    "stock": 21,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Power Bank"
    },
    "description": "Yeh model halka-phulka aur rozmarra ke istemal ke liye munasib hai: Capacity: Iski capacity 10,000mAh hai, jo portable aur safar ke liye asaan hai. Fast Charging: Yeh bhi 22.5W ki fast charging ki salahiyat rakhta hai. Technology: Yeh device PD aur Qualcomm Quick Charge 3.0 technology ko support karti hai. Design: Yeh \"Removable\" aur \"New detachable self-wired\" design ke sath aata hai, jismein cables sath judi hoti hain. Features: Yeh high capacity aur USB charge jaisi khusoosiyaat ke sath ata hai."
  },
  {
    "id": "tl-24-smart-led-google-tv-full-hd-ultra-slim-display-with-wi-fi",
    "name": "24” Smart LED Google TV – Full HD, Ultra Slim Display with Wi-Fi & Built-in Apps",
    "category": "Home Decor",
    "price": 19900,
    "oldPrice": 0,
    "image": "/api/media/95021bd4-fc3e-49b4-b12b-069c8e2df7f1.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/95021bd4-fc3e-49b4-b12b-069c8e2df7f1.webp",
        "alt": "24” Smart LED Google TV – Full HD, Ultra Slim Display with Wi-Fi & Built-in Apps"
      },
      {
        "type": "image",
        "src": "/api/media/a6381367-9b9a-4d7b-b473-d746c704799a.webp",
        "alt": "24” Smart LED Google TV – Full HD, Ultra Slim Display with Wi-Fi & Built-in Apps"
      }
    ],
    "color": "Default Title",
    "badge": "NEW",
    "rating": 4.7,
    "stock": 29,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Home Decor"
    },
    "description": "Ghar par behtareen entertainment ka mazaa lein is 24-inch Smart LED Google TV ke sath. Iska sleek aur ultra-slim design aap ke kamray ki khoobsurti ko barhata hai, jabke HD resolution aap ko har scene mein clear aur vibrant picture quality deta hai. Built-in Wi-Fi aur Google TV platform ke zariye aap apne pasandida shows, movies, aur videos ba-asani stream kar sakte hain. Smart Google TV Interface: YouTube, Netflix, aur doosri tamam streaming apps tak aasaan rasai. Vibrant Display: Crisp colors aur high contrast ke sath Full HD picture clarity. Connectivity Options: Multiple HDMI aur USB ports taake aap gaming consoles ya external devices asani se connect kar sakein. Modern Design: Slim bezel-less look jo har interior ke sath fit baithta hai. Easy Setup: Table stand ke sath available"
  },
  {
    "id": "tl-3d-hologram-fan-led-display-fan-with-stand-teklek",
    "name": "3D Hologram Fan LED Display Fan with Stand (TEKLEK)",
    "category": "Home Decor",
    "price": 14500,
    "oldPrice": 0,
    "image": "/api/media/c3bb070b-170a-4b25-943f-57d6c27e96dd.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/c3bb070b-170a-4b25-943f-57d6c27e96dd.webp",
        "alt": "3D Hologram Fan LED Display Fan with Stand (TEKLEK)"
      },
      {
        "type": "image",
        "src": "/api/media/1cbf973d-73d6-49ff-b981-e823ac50507b.webp",
        "alt": "3D Hologram Fan LED Display Fan with Stand (TEKLEK)"
      }
    ],
    "color": "Without Stand",
    "badge": "",
    "rating": 4.6,
    "stock": 50,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Home Decor"
    },
    "description": "Elevate your retail displays, trade shows, and business advertising with the 3D Hologram LED Fan. Designed to project floating high-definition 3D visuals, this holographic display fan captures immediate attention and transforms standard advertising into an interactive experience. Equipped with high-brightness LED lights and a high-speed rotating blade system, it generates crisp, vibrant, and floating 3D text, logos, or animations with smooth visual output. The package comes complete with a sturdy, adjustable floor tripod stand, allowing you to set up your dynamic visual presentation anywhere effortlessly. Key Features: 3D Visual Effect: Creates floating holographic imagery and text (such as custom branding/logos) in mid-air. Heavy-Duty Tripod Stand: Included floor-standing tripod ensures stable placement at optimal eye level for crowds and foot traffic. Ultra-Bright LEDs: Delivers high contrast, clear visibility, and vivid color output even in well-lit retail or event environments. Versatile Commercial Use: Ideal for shop fronts, product launches, exhibition booths, restaurants, and event stage setups. Plug & Play Setup: Easy to assemble, mount, and operate for seamless daily advertising. Package Includes: 1 x 3D Hologram Fan Unit 1 x Adjustable Floor Tripod Stand Power Adapter & Mounting Hardware"
  },
  {
    "id": "tl-led-neon-rgb-magic-smart-strip-light-rgb-ic-flexible-neon-ro",
    "name": "LED Neon RGB-Magic Smart Strip Light – RGB-IC Flexible Neon Rope Light with Mobile App, Music Sync…",
    "category": "Home Decor",
    "price": 4450,
    "oldPrice": 0,
    "image": "/api/media/954dde44-3a76-4490-8f79-57c9b5e7faa9.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/954dde44-3a76-4490-8f79-57c9b5e7faa9.webp",
        "alt": "LED Neon RGB-Magic Smart Strip Light – RGB-IC Flexible Neon Rope Light with Mobile App, Music Sync & Remote Control"
      },
      {
        "type": "image",
        "src": "/api/media/4eb2148e-e4ff-4776-8a94-922b3e6bf226.webp",
        "alt": "LED Neon RGB-Magic Smart Strip Light – RGB-IC Flexible Neon Rope Light with Mobile App, Music Sync & Remote Control"
      },
      {
        "type": "image",
        "src": "/api/media/dc5afd15-75b7-4f07-8efa-f72d41e20516.webp",
        "alt": "LED Neon RGB-Magic Smart Strip Light – RGB-IC Flexible Neon Rope Light with Mobile App, Music Sync & Remote Control"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.4,
    "stock": 47,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Home Decor"
    },
    "description": "Apne kamre, gaming setup, ya living room ko aik jaduwi aur modern look dain! image.png mein dikhayi gayi LED-Neon-RGB-Magic Strip Light aam LED lights se bilkul mukhtalif hai. Yeh advanced RGB-IC technology ke sath aati hai, jis ka matlab hai ke yeh aik hi waqt mein mukhtalif rang (rainbow effect) dikha sakti hai. Yeh flexible neon rope light nihayat soft aur smooth roshni deti hai, jis se aap apni marzi ke designs, shapes (jaise moon, star, ya tree) asaani se bana sakte hain. Key Features (Khususiyaat): RGB-IC Multi-Color Magic: Aik hi strip par aik sath kayi rang chalaen aur behtareen dynamic lighting effects ka maza lain. Light Follows Sound (Music Sync): Is mein built-in mic hai jo aapke gaano ya gaming sound ke mutabiq lights ko dance karwata hai. Dual Control (App + Remote): Aap ise Mobile APP ke zariye ya phir pack mein maujood Infrared Remote se asaani se control kar sakte hain. Custom Colors & DIY Shapes: Apni marzi ke colors select karein aur flexible neon design ki wajah se koi bhi creative shape banayein. Smart Timing Mode: Timer set karein taake lights aapke sone ya jagne ke waqt ke mutabiq khud-ba-khud on/off ho jaien. Box Mein Kya Shamil Hai? 1 x LED Neon RGB-Magic Strip Light 1 x Infrared Remote Controller User Manual / Connection Guides"
  },
  {
    "id": "tl-sign-led-galaxy-light-projector-with-remote-control-cosmic-s",
    "name": "SIGN LED Galaxy Light & MP3 Player & Projector with Remote Control | Cosmic Starry Night Light & Am…",
    "category": "Home Decor",
    "price": 3250,
    "oldPrice": 0,
    "image": "/api/media/18a8fef1-3e13-4705-a7c5-6dfbb9fc41c7.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/18a8fef1-3e13-4705-a7c5-6dfbb9fc41c7.webp",
        "alt": "SIGN LED Galaxy Light & MP3 Player & Projector with Remote Control | Cosmic Starry Night Light & Ambience Lamp for Bedroom, Party & Relaxat…"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.5,
    "stock": 27,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Home Decor"
    },
    "description": "Transform Your Space Into A Cosmic Wonder Apne kamre ko ek behtareen aur relaxing galaxy mein badlein! SIGN LED Galaxy Light Projector aapke ghar mein hi real starry night aur deep-space nebula clouds ka experience lekar aata hai. Chahe aapko din bhar ki thakan ke baad relax karna ho, bacchon ke liye ek soothing nightlight chahiye ho, ya fir apni weekend parties ka mahool badalna ho—yeh projector har mauqe ke liye perfect hai. Key Features: Multi-Functional Lighting Modes: Isme nightlight, ambience lighting, aur party lights ke multiple options maujood hain jo aapke mood ke hisab se set ho jaate hain. Dedicated Remote Control: Baithay ya letay huay aasani se settings change karein. Remote se aap lasers, LED modes, brightness, fade effects ( ⁠Fade 1⁠ / ⁠Fade 2⁠ ), aur timer ( ⁠1H⁠ / ⁠2H⁠ ) ko control kar sakte hain. Built-in Music Mode: Yeh projector sound-activation feature ke sath aata hai, jahan lights aapki favorite music ya beats ke sath sync ho kar dancematics create karti hain. Crystal Dome Projection: Iska premium 360° crystal dome wide coverage deta hai, jisse poori deewar aur chat par ek shaandar aur crisp galaxy effect phailta hai. Smart Timer Options: ⁠1 Hour⁠ aur ⁠2 Hour⁠ ke auto-off timer ke sath, aap bina kisi fikar ke so sakte hain—yeh khud hi off ho jayega. Specifications: Brand / Model: SIGN LED Galaxy Light Input Ports: USB Playback, TF Card Slot, Type-C Power Input Control Panel: On-device buttons for quick navigation (Volume, Mode, Tracks) Certifications: RoHS & CE Certified (Safe and High Quality) What’s In The Box? 1 x SIGN LED Galaxy Light Projector 1 x Smart Remote Control 1 x USB Power Cable 1 x User Manual"
  },
  {
    "id": "tl-teklek-programmable-led-board",
    "name": "Teklek Programmable LED Board",
    "category": "Home Decor",
    "price": 10500,
    "oldPrice": 0,
    "image": "/api/media/aee1ceb2-7128-4737-be72-fa0a72353bf3.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/aee1ceb2-7128-4737-be72-fa0a72353bf3.webp",
        "alt": "Teklek Programmable LED Board"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.7,
    "stock": 15,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Home Decor"
    },
    "description": "This is an excellent solution to increase the visibility of your business or shop. The bright red LED display is clearly visible from a distance and effectively attracts customers’ attention. Product Features: Dimensions: 3 feet in length and 8 inches in height, making it ideal for commercial use. Bright Red LEDs: Equipped with high-quality red LEDs that remain clear and visible both day and night. Professional Look: A sleek and slim design that looks attractive on any shopfront or office wall. Durable Build: Designed for long-lasting performance. Best For: Retail shops and showrooms Restaurants and cafés (for displaying special deals) Offices and reception areas Event announcements"
  },
  {
    "id": "tl-teklek-rgb-programmable-led-display",
    "name": "Teklek RGB Programmable LED Display",
    "category": "Home Decor",
    "price": 19800,
    "oldPrice": 0,
    "image": "/api/media/505fc9ab-6f5d-4626-8f41-403e207344b7.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/505fc9ab-6f5d-4626-8f41-403e207344b7.webp",
        "alt": "Teklek RGB Programmable LED Display"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 30,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Home Decor"
    },
    "description": "Give your shop or business a modern and vibrant look with this high-tech RGB (multi-color) LED scroll display. Unlike single-color displays, it supports multiple colors, making it far more attractive and eye-catching. Key Specifications: Vibrant RGB Colors: Uses multi-color (RGB) LEDs that make text and animations colorful, dynamic, and visually appealing. Perfect Size: Dimensions are 8 inches (height) × 3 feet (length), ideal for clear visibility from a distance. Professional Finish: With a clean white background and subtle shadow effect, it delivers a premium look on any wall or display board. High Visibility: Bright enough to keep text sharp and clear even in daylight. Best Use Cases: Brand Promotion: Display your brand name, “Teklek,” in vibrant colors to attract attention. Special Offers: Perfect for announcing sales, discounts, and new products. Day & Night Performance: At night, its brightness makes your shop stand out and look more prominent."
  },
  {
    "id": "tl-usb-dynamic-water-pattern-light",
    "name": "USB Dynamic Romantic Water Pattern Light",
    "category": "Home Decor",
    "price": 2299,
    "oldPrice": 0,
    "image": "/api/media/7615c3fc-3a52-4786-a72a-0518141561c5.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/7615c3fc-3a52-4786-a72a-0518141561c5.webp",
        "alt": "USB Dynamic Romantic Water Pattern Light"
      },
      {
        "type": "image",
        "src": "/api/media/15514262-4f7f-4fd9-b852-3d69ef9e4e3a.webp",
        "alt": "USB Dynamic Romantic Water Pattern Light"
      },
      {
        "type": "image",
        "src": "/api/media/24679cae-c568-4cc4-ae58-99f196750f8f.webp",
        "alt": "USB Dynamic Romantic Water Pattern Light"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.5,
    "stock": 35,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Home Decor"
    },
    "description": "This light is not just a lamp, but a piece of art that creates a beautiful water ripple effect on your walls, giving the feeling of flowing waves. It can be used as décor for a bedside table, living room, or children’s room. Product Features: Dynamic Water Ripple Effect: Its unique design creates the illusion of moving water waves, making it perfect for relaxation and mental calm. Color-Changing Light: Features multiple color options, allowing you to set the atmosphere according to your mood. Adjustable Brightness: Comes with 3 light intensity levels, so you can easily adjust the brightness. Rechargeable & Portable: Built-in battery provides 3–5 hours of use on a single charge. Smart Control: Equipped with a touch switch for easy on/off control and quick setting changes. USB Charging: Can be conveniently charged using any USB port or adapter."
  },
  {
    "id": "tl-sup-game-box-400-in-1-handheld-retro-video-game-console",
    "name": "Game Box Handheld Retro Video Game Console",
    "category": "Toys",
    "price": 2250,
    "oldPrice": 0,
    "image": "/api/media/1916f9d2-36ed-40e2-8c74-b4a1d25c7b5d.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/1916f9d2-36ed-40e2-8c74-b4a1d25c7b5d.webp",
        "alt": "Game Box Handheld Retro Video Game Console"
      },
      {
        "type": "image",
        "src": "/api/media/9addc042-1b2e-42fe-85df-9a0f20f50eaf.webp",
        "alt": "Game Box Handheld Retro Video Game Console"
      }
    ],
    "color": "Sup Game Box",
    "badge": "NEW",
    "rating": 4.6,
    "stock": 17,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Toys"
    },
    "description": "Bring Back Your Childhood Nostalgia! Discover the ultimate gaming blast from the past with the Sup Game Box 400-in-1 Handheld Retro Gaming Console. Compact, portable, and pre-loaded with hundreds of classic games, this mini handheld console brings endless fun for kids and nostalgia lovers alike. Key Features: 400 Built-in Classic Games: Enjoy a massive library of 8-bit retro games including adventure, puzzle, racing, action, and arcade favorites with no extra cards or downloads needed. Compact & Portable: Ultra-lightweight and compact design makes it easy to carry in your pocket or bag—perfect for travel, road trips, or quick breaks. TV Output Supported: Connect directly to your TV using the included AV cable to enjoy gaming on a larger screen with family and friends. Rechargeable Battery: Comes with a high-capacity lithium rechargeable battery and USB charging cable for hours of uninterrupted gameplay. Vibrant Color Display: Features a clear, high-definition screen that delivers vivid color output and crisp graphics. What’s Included in the Box: 1 × Sup Game Box Handheld Console 1 × Rechargeable Battery 1 × USB Charging Cable 1 × AV Cable for TV Connection 1 × User Manual"
  },
  {
    "id": "tl-kids-hover-soccer-ball-indoor-air-power-floating-football-wi",
    "name": "Kids Hover Soccer Ball – Indoor Air Power Floating Football with LED Lights",
    "category": "Toys",
    "price": 1450,
    "oldPrice": 0,
    "image": "/api/media/0ef28883-3b21-4f4b-9115-1266328132d8.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/0ef28883-3b21-4f4b-9115-1266328132d8.webp",
        "alt": "Kids Hover Soccer Ball – Indoor Air Power Floating Football with LED Lights"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.9,
    "stock": 26,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Toys"
    },
    "description": "Bring the Stadium Home with the Ultimate Hover Soccer Ball! Ab rainy days ya garmi me bahar jaane ki zaroorat nahi! Yeh Hover Soccer Ball aapke ghar ke floors ko ek safe aur exciting football field me badal deta hai. Apne unique air-cushion glide technology ke saath, yeh smooth floors par makhhan ki tarah float karta hai, jisse bachhe ghar ke andar bina kisi nuksan ke football ka maza le sakte hain. Key Features: Air Cushion Technology: Iske andar ka powerful fan air cushion generate karta hai, jisse yeh tiles, wooden floor, ya low-pile carpet par smoothly glide karta hai. Safe Foam Bumper Protection: Ball ke corners par high-quality soft foam ki layer di gayi hai, jo aapke ghar ke furniture aur walls ko scratches aur damage se bilkul mahfooz (safe) rakhti hai. Bachon ke paon me bhi chot nahi lagti. Magical LED Lights: Khel ko mazeed exciting banane ke liye isme vibrant flashing LED lights features hain, jo raat ke andhere me bhi khelne ka maza double kar dete hain. Interactive & Educational: Yeh bachon ki physical activity, body coordination, aur team spirit ko behtar banane ke liye ek perfect indoor toy hai. Specifications: Recommended Age: 3+ Years Usage: Indoor Fun (Perfect for living rooms, hallways, or playrooms) Design: Durable, lightweight, and impact-resistant soccer disc design."
  },
  {
    "id": "tl-2-in-1-smart-lcd-drawing-pencil-box-8-5-inch-portable-lcd-wr",
    "name": "2-in-1 Smart LCD Drawing Pencil Box &  8.5-Inch Portable LCD Writing Tablet",
    "category": "Toys",
    "price": 1000,
    "oldPrice": 0,
    "image": "/api/media/b2e77ea3-2327-4032-9246-676221c55afc.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/b2e77ea3-2327-4032-9246-676221c55afc.webp",
        "alt": "2-in-1 Smart LCD Drawing Pencil Box &  8.5-Inch Portable LCD Writing Tablet"
      },
      {
        "type": "image",
        "src": "/api/media/ab2f764c-87c9-4599-b936-976d8bf8f4e9.webp",
        "alt": "2-in-1 Smart LCD Drawing Pencil Box &  8.5-Inch Portable LCD Writing Tablet"
      }
    ],
    "color": "8.5-Inch Portable LCD Writing Tablet",
    "badge": "",
    "rating": 4.5,
    "stock": 50,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Toys"
    },
    "description": "Apne bacchon ki creativity aur organization ko aik sath upgrade karein! Yeh innovative pencil box sirf stationery rakhne ke liye nahi, balkay is ke upar aik smart LCD writing screen bhi bani hui hai. Bacche is par math problems solve kar sakte hain, drawing bana sakte hain, ya notes likh sakte hain—woh bhi bina kisi kaghaz (paper) ya ink ke waste ke. Dual-Function Design: Aik taraf spacious pencil box aur doosri taraf smart LCD drawing tablet. Eye-Protection Screen: Screen bacchon ki aankhon ke liye bilkul safe hai aur clear, bright drawings deti hai. One-Click Erase: Aik button dabane se puri screen saaf ho jati hai, jise baar baar use kiya ja sakta hai. Eco-Friendly & Mess-Free: Koi pen, ink, ya pencil kachra nahi—aik dam saaf aur suthra tareeqah seekhne ka. Durable & Portable: Mazboot material se bana hai jo bacchon ke rozmarrah ke use ke liye perfect hai. Yeh 8.5-inch ka digital LCD writing tablet bacchon ki drawing, writing, aur barhon ke to-do lists ya memo pads ke liye aik behtareen gadget hai. Yeh paperless tablet environment-friendly hai aur bacchon ko ghanton tak creative activities mein busy rakhta hai. Lightweight aur portable design ki wajah se ise travel ke dauran bhi aaram se sath rakha ja sakta hai. Multi-Purpose Use: Drawing, sketching, to-do lists, daily memos, aur learning pad ke liye perfect. 8.5\" Clear Display: Bacchon ke hath ke mutabiq perfect size jo bright aur smooth writing experience deta hai. Lock & Erase Feature: Is mein lock button diya gaya hai taake aap ka data ghalti se delete na ho, aur aik smart single-click erase button hai. Safe & Drop-Resistant: Yeh tablet drop-resistant aur environmentally friendly material se banaya gaya hai. Perfect Gift: School jaane wale bacchon ke liye seekhne aur khailne ka aik behtareen aur modern tohfa."
  },
  {
    "id": "tl-2-4g-wireless-game-stick-console-4k-ultra-hd-tv-retro-gaming",
    "name": "2.4G Wireless Game Stick Console - 4K Ultra HD TV Retro Gaming Stick with 2 Controllers⁠",
    "category": "Toys",
    "price": 4850,
    "oldPrice": 0,
    "image": "/api/media/551fd9e4-25cd-433c-902e-57eb27030f33.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/551fd9e4-25cd-433c-902e-57eb27030f33.webp",
        "alt": "2.4G Wireless Game Stick Console - 4K Ultra HD TV Retro Gaming Stick with 2 Controllers⁠"
      },
      {
        "type": "image",
        "src": "/api/media/f9e02592-83f6-499b-9fd1-efbf4e270b71.webp",
        "alt": "2.4G Wireless Game Stick Console - 4K Ultra HD TV Retro Gaming Stick with 2 Controllers⁠"
      },
      {
        "type": "image",
        "src": "/api/media/3d9dbf9b-b67e-4f6d-9c79-604a33ada2b0.webp",
        "alt": "2.4G Wireless Game Stick Console - 4K Ultra HD TV Retro Gaming Stick with 2 Controllers⁠"
      }
    ],
    "color": "Lite Black",
    "badge": "",
    "rating": 4.9,
    "stock": 23,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Toys"
    },
    "description": "Apne TV ko aik mukammal retro gaming console banayein! Is 2.4G Wireless Game Stick ke sath classic games ka maza lein. Yeh Plug & Play console HDMI connectivity aur dual wireless controllers ke sath aata hai taake aap baghair kisi wires ke hassle ke gaming enjoy kar sakein. Key Features (Features Ki Details) 🎮 2.4G Wireless Controllers: Bina kisi lag ya taar ke aasaani se khelein. Dual controllers ke sath friends aur family ke sath multiplayer games enjoy karein. 📺 HD / 4K HDMI Output: Apne TV, Monitor ya Projector se direct connect karein aur crisp display quality ka maza lein. ⚡ Plug & Play: Kisi mushkil setup ki zaroorat nahi! Bas TV ke HDMI port mein lagayein aur khelna shuru karein. 🕹️ Classic & Retro Games Support: Hazaron retro aur arcade games ka maza ek hi chote se stick console mein. 🕹️ Ergonomic Double Rocker Design: 3D rockers aur anti-skid design ke sath behtareen grip aur high sensitivity control. Box Package Includes: 1 x 2.4G Wireless Game Stick 2 x Wireless Gamepad Controllers 1 x HDMI Cable / Extension 1 x Power / USB Cable 1 x User Manual"
  },
  {
    "id": "tl-premium-25-36-64-pcs-magnetic-building-blocks-set-intelligen",
    "name": "Premium 25-36-64 PCS Magnetic Building Blocks Set – Intelligent Construction Toy for Kids Brain Dev…",
    "category": "Toys",
    "price": 1500,
    "oldPrice": 0,
    "image": "/api/media/6d9aab75-0dde-4bbe-b6ef-7e96c6400262.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/6d9aab75-0dde-4bbe-b6ef-7e96c6400262.webp",
        "alt": "Premium 25-36-64 PCS Magnetic Building Blocks Set – Intelligent Construction Toy for Kids Brain Development (Ages 3+)"
      },
      {
        "type": "image",
        "src": "/api/media/7846b3da-8b63-4934-aa0d-ccaa700a5aa0.webp",
        "alt": "Premium 25-36-64 PCS Magnetic Building Blocks Set – Intelligent Construction Toy for Kids Brain Development (Ages 3+)"
      },
      {
        "type": "image",
        "src": "/api/media/d3d64fc3-d9bf-48d5-8249-49ec12843dbd.webp",
        "alt": "Premium 25-36-64 PCS Magnetic Building Blocks Set – Intelligent Construction Toy for Kids Brain Development (Ages 3+)"
      }
    ],
    "color": "25 pcs",
    "badge": "",
    "rating": 4.4,
    "stock": 53,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Toys"
    },
    "description": "Unlock your child's creativity with our 25-36-64 piece Premium Magnetic Building Blocks Set! Designed specifically for early childhood development, this starter kit is the perfect introduction to the world of magnetic construction. ### Key Features: * **Brain Development Toy:** Helps improve hand-eye coordination, fine motor skills, and spatial awareness in growing toddlers. * **Safe & Durable:** Made from high-quality, non-toxic ABS plastic with smooth edges, ensuring safe play for little hands. * **Strong Magnetic Connection:** Features premium-grade magnets that easily snap together to build stable 2D and 3D shapes. * **Perfect Starter Kit:** The 25-piece set includes essential magnetic rods and spheres, ideal for children aged 3 and above. ### Specifications: * **Piece Count:** 25-36-64 Pieces * **Age Group:** 3+ Years * **Box Includes:** Colorful Magnetic Bars, Spheres, and an Idea Guide."
  },
  {
    "id": "tl-the-climbing-rc-wall-climbing-car-series-2-4g-remote-control",
    "name": "The Climbing RC Wall Climbing Car Series – 2.4G Remote Control Gravity Defying Wall Racing Car with…",
    "category": "Toys",
    "price": 3890,
    "oldPrice": 0,
    "image": "/api/media/7356be67-7053-47da-9180-65c45e875469.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/7356be67-7053-47da-9180-65c45e875469.webp",
        "alt": "The Climbing RC Wall Climbing Car Series – 2.4G Remote Control Gravity Defying Wall Racing Car with LED Lights & USB Quick Charging (Blue)"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 19,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Toys"
    },
    "description": "Defy gravity with The Climbing RC Wall Car! Yeh aik advanced remote control car hai jo na sirf farsh (floor) par chalti hai, balkay special vacuum technology ki madad se deewaron (walls) aur chhat (ceilings) par bhi aasani se daurti hai. Apne behtareen features aur sleek blue design ke sath, yeh bacchon aur RC car lovers ke liye aik perfect tohfa hai. Key Features Gravity-Defying Technology: Is car mein aik special vacuum mechanism hai jo isay vertical deewaron, sheeshe (glass windows), aur chhat par bina gire chalne ki salahiyat deta hai. Dual Modes: Yeh car do modes ke sath aati hai—Wall Mode (deewaron ke liye) aur Floor Mode (aam zameen par chalane ke liye). 2.4GHz Remote Control System: Long-distance remote control jo bina kisi interference ke smooth aur responsive handling deta hai. Intelligent LED Lights: Chalti hui gaari ke sath bright aur brilliant LED lights chalti hain, jo andhere mein racing ka maza dobala kar deti hain. USB Quick Charging: Battery khatam hone par bar-bar sell badalne ki zaroorat nahi. Is mein built-in rechargeable battery hai jo USB cable se tezi se charge ho jaati hai. Safe & Durable Design: Behtareen aur lightweight material se bani hai jo deewar se girne par bhi gaari ko mahfooz rakhta hai. Age 8+ ke bacchon ke liye bilkul perfect hai. Box Specifications Brand/Series: The Climbing R/C (Climb Wall Car Series) Frequency: 2.4GHz System Control Type: I/R Long Distance Remote Control Charging: Built-in USB Quick Charging Recommended Age: 8 Years+ Package Includes: 1 x Wall Climbing RC Car (Blue) 1 x 2.4GHz Remote Controller 1 x USB Charging Cable 1 x User Manual"
  },
  {
    "id": "tl-premium-pink-diy-dollhouse-play-set-for-girls-ages-6-model-n",
    "name": "Premium Pink DIY Dollhouse Play Set for Girls (Ages 6+) – Model NO. 462-05",
    "category": "Toys",
    "price": 3999,
    "oldPrice": 0,
    "image": "/api/media/86d2d306-96aa-4967-8c61-917fc3ff69fb.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/86d2d306-96aa-4967-8c61-917fc3ff69fb.webp",
        "alt": "Premium Pink DIY Dollhouse Play Set for Girls (Ages 6+) – Model NO. 462-05"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.8,
    "stock": 33,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Toys"
    },
    "description": "Apni chhoti shehzadi ke liye liyen ek behtareen aur creative tohfa! House Yeah \"Happy Childhood\" Dollhouse Play Set (Model: NO. 462-05) bacchon ki imagnation aur creativity ko barhanay ke liye design kiya gaya hai. Yeh khubsurat pink-themed, multi-story dollhouse bacchon ko ghanton tak apni hi dunya me magan rakhne aur naye naye role-play scenarios banane ka mauqa deta hai. Key Features Premium & Detailed Design: Is set me khubsurat ghori, balconies, bed, furniture, aur outdoor fencing shaamil hain jo is dollhouse ko nihayat realistic aur attractive banate hain. Skill Development: Yeh toy bacchon ki hands-on ability, creativity & imagination, color perception, aur visual exercises ko behtar banane me madad karta hai. Safe & Durable: 6 saal ya us se bari umar ke bacchon ke liye perfect hai. Iska material aur edges bacchon ke khelne ke liye bilkul safe hain. Perfect Gift Item: Birthdays ho ya koi aur khaas mauqa, yeh dollhouse playset larkioun ke liye ek perfect gift choice hai. Specifications Brand: House Yeah Series: Happy Childhood Model No: 462-05 Age Group: 6+ Years (Ages Children use) Color: Vibrant Pink & Pastel Themes SEO Tags / Keywords Pink Dollhouse for Girls, House Yeah Dollhouse, Kids Pretend Play Toy, DIY Doll House Set, Happy Childhood Toy Box, Girls Gift Item."
  },
  {
    "id": "tl-3d-pen-for-kids-rechargeable-heat-free-3d-drawing",
    "name": "3D Pen for Kids | Rechargeable & Heat-Free 3D Drawing",
    "category": "Toys",
    "price": 2999,
    "oldPrice": 0,
    "image": "/api/media/c4b0a08a-a3a4-4f8d-966a-e895e238644a.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/c4b0a08a-a3a4-4f8d-966a-e895e238644a.webp",
        "alt": "3D Pen for Kids | Rechargeable & Heat-Free 3D Drawing"
      },
      {
        "type": "image",
        "src": "/api/media/e466fa2a-e285-441f-9157-cd486547a51e.webp",
        "alt": "3D Pen for Kids | Rechargeable & Heat-Free 3D Drawing"
      },
      {
        "type": "image",
        "src": "/api/media/200dfb37-63fb-48da-8f11-345dbfeb6831.webp",
        "alt": "3D Pen for Kids | Rechargeable & Heat-Free 3D Drawing"
      }
    ],
    "color": "Tuosiqi",
    "badge": "",
    "rating": 4.6,
    "stock": 48,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Toys"
    },
    "description": "Unleash Your Child's Creativity Safely! Apne bacchon ki imagination ko reality mein badlein is Tuosiqi 3D Drawing Pen ke sath! Yeh pen specially chote bacchon (3+ years) ke liye design kiya gaya hai taa ke wo apni pasand ki 3D shapes aur characters bana sakein, wo bhi mukammal safety ke sath. Key Features & Benefits: 100% Child Safe (No Hot Parts): Is pen ka sab se bada feature iski safety hai. \"Low Heat Plastic\" aur \"No Hot Parts\" design ki wajah se parents ko bacchon ke haath jalne ka koi darr nahi hota. Wireless & Portable: Isme \"Built-In Battery\" majood hai, jis ki wajah se bacche bina kisi ulajhti hui wires ke easily draw kar sakte hain. Easy USB Charging: Box ke andar USB charger support hai, jise aap easily kahin bhi charge kar sakte hain. Perfect for Ages 3+: Yeh 3D pen specially toddlers aur young kids ke chhote hathon aur motor skills ko dhyan mein rakh kar banaya gaya hai. Boosts Creativity: Bacchon ki mental growth aur artistic skills ko improve karne ke liye ek behtareen educational toy aur gift hai. Why Buy This For Your Kids? Agar aap chahte hain ke aapke bacche screens (mobile/TV) se door rahein aur kuch creative physical activity karein, toh yeh 3D pen ek perfect choice hai. Yeh safe hai, easy to use hai, aur ghanton ki fun activity guarantee karta hai!"
  },
  {
    "id": "tl-hs-express-electric-train-set-with-tracks-13-pieces-battery-",
    "name": "HS Express Electric Train Set with Tracks (13 Pieces) – Battery Operated Toy Train for Kids",
    "category": "Toys",
    "price": 1650,
    "oldPrice": 0,
    "image": "/api/media/9e745752-04a5-4cb7-975a-fa1d6efde491.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/9e745752-04a5-4cb7-975a-fa1d6efde491.webp",
        "alt": "HS Express Electric Train Set with Tracks (13 Pieces) – Battery Operated Toy Train for Kids"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.9,
    "stock": 24,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Toys"
    },
    "description": "Aapke bachon ke liye ek behtareen aur exciting khilona! Ye HS Express Battery-Operated Train Set bachon ko real railway adventure ka ahsaas dilata hai. Iska realistic design aur high-quality build ise bache aur parents dono ke liye ek perfect choice banata hai. Key Features Complete Set: Total 13 pieces shamil hain (Locomotive Engine, Boxcar, Passenger Carriage, aur Tracks). Battery Operated: Aasan aur bina kisi jhanjhat ke chalne wala battery mechanism. Realistic Design: Detailed train design jo asli train ki tarah dikhti hai. Durable & Safe: Bachon ke khelne ke liye mahfooz aur paipand plastic material se bana hai. Easy Assembly: Tracks ko aapas mein jodna bohot aasan hai, jisse bache khud bhi set kar sakte hain. Package Includes 10 x Railway Tracks 1 x Locomotive Engine 1 x Boxcar 1 x Passenger Car Railway Specifications Brand: HS Toys (19026B) Type: Battery Operated Train Toy Recommended Age: 3+ Years Total Pieces: 13 Pcs"
  },
  {
    "id": "tl-kids-princess-beauty-makeup-accessory-set-complete-pretend-p",
    "name": "Kids Princess Beauty Makeup & Accessory Set – Complete Pretend Play Cosmetic Kit for Girls",
    "category": "Toys",
    "price": 3899,
    "oldPrice": 0,
    "image": "/api/media/266e7476-7b89-4aa4-90b1-712cf9ad16da.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/266e7476-7b89-4aa4-90b1-712cf9ad16da.webp",
        "alt": "Kids Princess Beauty Makeup & Accessory Set – Complete Pretend Play Cosmetic Kit for Girls"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.5,
    "stock": 39,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Toys"
    },
    "description": "Apni choti shahzadi ko ek pyara sa makeover experience dein! Is Princess Beauty Makeup Set mein wo sab kuch hai jo bacchon ke creative khel aur pretend play ko mazeedar banata hai. Princess theme par mabni ye complete kit bacchon ke liye bilkul safe aur entertaining hai. Key Features: Complete Beauty Kit: Is set mein eye shadow, manicure items, nails stickers, hair accessories, aur cute rings shamil hain jo bacchon ke shauk ko poora karte hain. Princess Theme Design: Box par bani pyari princess characters bacchon ko bohot pasand aati hain aur unhein pretend play ke liye attract karti hain. Safe & Fun for Kids: Ye kit bacchon ke role-play, creative thinking, aur fine motor skills ko behtar banane ke liye behtareen hai. Perfect Gift Option: Birthday, eid, ya kisi bhi khaas mauqe par choti bacchon ko gift karne ke liye ye ek ideal product hai. Box Mein Kya Shamil Hai? Eye Shadow Palette Manicure & Nail Stickers Cute Hair Clips & Rubber Bands Rings & Artificial Nails Set Bacchon ki creativity ko boost karein aur unhein is cute beauty treasure chest ke sath apna style dikhane ka mauqa dein!"
  },
  {
    "id": "tl-crazy-jumping-car-remote-control-toy-with-music-led-lights-f",
    "name": "Crazy Jumping Car Remote Control Toy with Music & LED Lights for Kids",
    "category": "Toys",
    "price": 3500,
    "oldPrice": 0,
    "image": "/api/media/3d5943e0-7f21-4d4b-b09d-1d14824ae649.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/3d5943e0-7f21-4d4b-b09d-1d14824ae649.webp",
        "alt": "Crazy Jumping Car Remote Control Toy with Music & LED Lights for Kids"
      },
      {
        "type": "image",
        "src": "/api/media/615b4599-5f67-40df-88c1-7d52369fdd8c.webp",
        "alt": "Crazy Jumping Car Remote Control Toy with Music & LED Lights for Kids"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.5,
    "stock": 34,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Toys"
    },
    "description": "Is fun-filled remote control Crazy Jumping Car ke saath bacchon ke playtime ko banayein aur bhi exciting! Yeh unique toy car na sirf aage-piche chalti hai balki dhamaakedar stunts, jumping actions, aur dance moves bhi karti hai. Integrated music aur bright LED flashing lights ke saath yeh bacchon ko ghanton tak busy aur entertain rakhti hai. Dynamic Stunts & Jumping Action: Car unique angle par tilt ho kar jumps aur stunt moves perform karti hai. Music & Flashing LED Lights: Built-in music aur bright head-lights jo bacchon ka dhyan foran kheenchte hain. Easy-to-Use Remote Control: Simple aur responsive remote design jise chote bacche bhi aasani se operate kar sakte hain. Durable Build Quality: High-grade, non-toxic plastic se bani hui hai jo rough play aur bumps ko aaram se bardasht karti hai. Ideal Gift for Kids: 3 saal aur us se bari umar ke bacchon ke liye birthday ya kisi bhi occasion par dene ke liye behtareen gift. Product Specifications: Recommended Age: 3+ Years Functions: Forward, Backward, Stunt Jumping, Music, LED Lighting Package Includes: 1 x Crazy Jumping Car, 1 x Remote Controller"
  },
  {
    "id": "tl-cyber-truck-high-speed-racing-rc-car-with-remote-controller-",
    "name": "Cyber Truck High-Speed Racing RC Car with Remote Controller & EV Power station",
    "category": "Toys",
    "price": 3500,
    "oldPrice": 0,
    "image": "/api/media/a5acdeb0-7cf1-4cf5-a57d-3e37c150ce01.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/a5acdeb0-7cf1-4cf5-a57d-3e37c150ce01.webp",
        "alt": "Cyber Truck High-Speed Racing RC Car with Remote Controller & EV Power station"
      },
      {
        "type": "image",
        "src": "/api/media/44f53775-81e5-4708-bdcb-f018b6506d3d.webp",
        "alt": "Cyber Truck High-Speed Racing RC Car with Remote Controller & EV Power station"
      },
      {
        "type": "image",
        "src": "/api/media/2149125a-6291-47f3-89df-d73fe903522c.webp",
        "alt": "Cyber Truck High-Speed Racing RC Car with Remote Controller & EV Power station"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.4,
    "stock": 48,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Toys"
    },
    "description": "Apne Bachon Ke Liye Ultimate Racing Experience! Bring home the thrill of futuristic racing with the LX Toys 1:20 Scale RC Cyber Truck. Yeh high-speed remote control car apne unique geometric design, cool mint green color, aur solid build quality ke saath bache aur car enthusiasts dono ke liye ek perfect choice hai. Ghar ke andar chalana ho ya smooth surfaces par race karni ho, yeh RC car behtareen speed aur control deliver karti hai. Key Features: Futuristic Cyber Design: Trendy aur modern aerodynamic body design jo dikhne mein behad attractive aur unique hai. 4-Channel Full Control: 4-channel remote control system ke saath car ko Forward, Backward, Left, aur Right aasaani se navigate karein. 1:20 Scale Realism: Perfect size jo handle karne mein aasaan hai aur details par poora focus karti hai. Strong Power & High Speed: Robust internal motor ke saath design kiya gaya hai taaki aapko miley real racing thrill aur strong performance. Kid-Friendly Remote: Simple aur responsive 27 MHz wireless remote control jo chote bachon ke liye bhi chalana aasaan banata hai. Perfect Gift: Ages 3 and above ke bachon ke liye birthday ya kisi bhi event ka ek shandar aur exciting tohfa. Specifications: Brand: LX Toys Scale: 1:20 Frequency: 27 MHz Channels: 4 Channels Recommended Age: 3 Years and above Box Includes: 1 x RC Cyber Truck, 1 x Remote Controller"
  },
  {
    "id": "tl-lavalier-microphone-extension-handle-with-high-density-foam-",
    "name": "Lavalier Microphone Extension Handle with High-Density Foam Windscreen⁠",
    "category": "Vlogging Setup",
    "price": 1950,
    "oldPrice": 0,
    "image": "/api/media/ccd8b56e-7166-4d6a-9b5c-1085810c0a39.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/ccd8b56e-7166-4d6a-9b5c-1085810c0a39.webp",
        "alt": "Lavalier Microphone Extension Handle with High-Density Foam Windscreen⁠"
      }
    ],
    "color": "Default Title",
    "badge": "NEW",
    "rating": 4.8,
    "stock": 38,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Vlogging Setup"
    },
    "description": "Lavalier Accessories Set – Upgrade Your Interview Setup! Turn your lavalier/clip-on microphone into a professional handheld interview mic with the BLÚK'S BX-117 adapter kit. Designed for content creators, journalists, vloggers, and interviewers who need a clean, professional look on camera. Key Features: 🎙️ Professional Interview Look: Instantly transforms small lavalier mics into a sturdy handheld microphone. 🛡️ High-Density Foam Windscreen: Reduces background noise, wind interference, and plosives (P/B sounds) for crystal-clear audio recording. ⚡ Quick & Easy Installation: Simple 3-step setup—just clip your lavalier mic onto the adapter handle and slide on the foam cover. 💪 Durable ABS Material: Lightweight yet tough, built to resist wear, scratches, and everyday studio/field use. 🖐️ Ergonomic Grip: Comfortable long-handle design that feels natural and light in hand during extended interviews. 📱 Wide Compatibility: Works seamlessly with most standard lavalier clip-on microphones and recording devices. Specifications: Model: BX-117 Brand: BLÚK'S Material: Premium ABS Plastic + High-Density Sponge Color: Black Handle with High-Visibility Green Box Branding Package Includes: 1x Handheld Extension Handle, 1x High-Density Windscreen Cover"
  },
  {
    "id": "tl-osmo-action-6-ultra-4k-camera-standard-pack",
    "name": "Osmo Action 6 Ultra 8K Camera - Standard Pack",
    "category": "Vlogging Setup",
    "price": 130000,
    "oldPrice": 0,
    "image": "/api/media/766b74d9-8136-4d52-9240-85f86b5f4bb9.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/766b74d9-8136-4d52-9240-85f86b5f4bb9.webp",
        "alt": "Osmo Action 6 Ultra 8K Camera - Standard Pack"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.7,
    "stock": 18,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Vlogging Setup"
    },
    "description": "The All-Terrain Masterpiece – Push Your Limits with Osmo Action 6 Overview: Take your vlogging and action videography to the next level. The Osmo Action 6 Standard Combo is engineered to perform in the toughest conditions—from freezing sub-zero temperatures to deep underwater adventures. With a premium rugged design and an ultra-wide field of view, it captures every intense moment with cinematic perfection. Key Features & What's in the Box: Next-Gen Core Unit: Lightweight, ultra-durable action camera body with dual screens for easy framing. Max Endurance Battery: Long-lasting power designed to withstand extreme cold and extended shooting sessions. Advanced Quick-Release Mount: Switch between different setups instantly with rock-solid stability. Curved Adhesive Base: Perfect for helmets, bikes, or dashboards to get that perfect point-of-view (POV) shot. 💡 Tip: Agar aap YouTube vlogs ke liye title search kar rahe hain, ya store par lagane ke liye mazeed features add karne hain, toh mujhe zaroor batayein!"
  },
  {
    "id": "tl-pk-460-led-soft-ring-light-with-tripod-stand-3-phone-holders",
    "name": "PK-460 LED Soft Ring Light With Tripod Stand, 3 Phone Holders & Remote Control (Complete Studio Set…",
    "category": "Vlogging Setup",
    "price": 5950,
    "oldPrice": 0,
    "image": "/api/media/88dc6cb7-4bdd-4fef-a69d-7195ae88740e.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/88dc6cb7-4bdd-4fef-a69d-7195ae88740e.webp",
        "alt": "PK-460 LED Soft Ring Light With Tripod Stand, 3 Phone Holders & Remote Control (Complete Studio Setup)"
      },
      {
        "type": "image",
        "src": "/api/media/9b6f3f1b-3e34-45e9-b6d2-f2162fbd1afe.webp",
        "alt": "PK-460 LED Soft Ring Light With Tripod Stand, 3 Phone Holders & Remote Control (Complete Studio Setup)"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.7,
    "stock": 38,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Vlogging Setup"
    },
    "description": "Apni videos aur photos ko dein professional look — Complete Setup ke sath! Agar aap ek YouTuber, TikToker, vlogger hain ya online business ke liye premium product photography karte hain, toh yeh PK-460 LED Soft Ring Light aapke liye perfect choice hai. Is complete combo me aapko ring light ke sath mazboot Tripod Stand bhi milta hai, taake aap jahan chahein asaani se apna studio set kar sakein. ✨ Key Features (Ahem Khusoosiyat): Model: PK-460 LED Soft Ring Light Heavy-Duty Tripod Stand: Sath me diya gaya adjustable stand jo perfect height aur behtareen stability provide karta hai. 3 Phone Holders: Isme ek saath 3 mobile phones lagane ki sahulat maujood hai, taake aap multiple angles ya mukhtalif platforms par ek sath live ya record kar sakein. Stepless Dimming: Light ki brightness aur tones ko aap apni zaroorat ke mutabiq kam ya zyada kar sakte hain. Soft Light & Free Spin: Aankhon ko chundhyane se bachaney wali soft lighting aur 360-degree rotation setup. Remote Control: Distant control ke liye sath me wireless remote diya gaya hai taake baar baar camera ke paas aaye bina lighting adjust ki ja sake. 🎬 Best For: YouTube Videos & Vlogging TikTok & Instagram Reels Professional E-commerce Product Shoots Live Streaming & Makeup Tutorials 📦 Package Includes (Box Me Kya Kya Shamil Hai): 1 x PK-460 LED Ring Light 1 x Adjustable Tripod Stand 3 x Flexible Mobile Holders 1 x Remote Control"
  },
  {
    "id": "tl-plokama-vm-80-pro-wireless-lavalier-microphone-set-with-char",
    "name": "Plokama VM-80 Pro Wireless Lavalier Microphone Set with Charging Case",
    "category": "Vlogging Setup",
    "price": 6500,
    "oldPrice": 0,
    "image": "/api/media/a48cb02f-9e36-44d3-91b6-66e58e78929b.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/a48cb02f-9e36-44d3-91b6-66e58e78929b.webp",
        "alt": "Plokama VM-80 Pro Wireless Lavalier Microphone Set with Charging Case"
      },
      {
        "type": "image",
        "src": "/api/media/9ed97dbe-dcfe-4dcc-99ec-4f773cc0b3a7.webp",
        "alt": "Plokama VM-80 Pro Wireless Lavalier Microphone Set with Charging Case"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.8,
    "stock": 15,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Vlogging Setup"
    },
    "description": "Plokama VM-80 Pro Wireless Lavalier Microphone System Upgrade your audio quality with the Plokama VM-80 Pro Wireless Lavalier Microphone set. Engineered for content creators, vloggers, live streamers, and interviewers, this dual-microphone system delivers crystal-clear sound with advanced Active Noise Cancellation (ANC). Active Noise Cancellation (ANC): Filters out background noise to ensure crisp, professional broadcast-quality audio in any environment. Smart Charging Case: Features a real-time digital LED display showing battery percentage and connection status. Dual Microphone Setup (MIC*2): Allows two-person recording simultaneously, ideal for interviews, podcasts, and video collaborations. Universal Compatibility: Includes 3.5mm TRRS, Type-C, and Lightning connector cables for seamless setup with smartphones, cameras, tablets, and laptops. Magnetic & Clip-On Design: Compact, lightweight transmitters with secure clip and magnet attachment options for hassle-free wearable positioning. Extended Battery Life: Provides up to 7 hours of working time per charge, supported by a 650mAh charging case. 360° Omnidirectional Pickup: Captures clear sound from every direction up to a 25-meter transmission range. Specifications: Model: VM-80 Pro Frequency Range: 2.4G Transmission Distance: 25m Microphone Battery: 80mAh (Each) Charging Case Battery: 650mAh Working Time: Approx. 7 Hours Charging Port: Type-C"
  },
  {
    "id": "tl-plokama-vm-20-wireless-lavalier-microphone-2-4g-dual-mic-sys",
    "name": "Plokama Wireless Lavalier Microphone - 2.4G Dual Mic System for Vlogging,",
    "category": "Vlogging Setup",
    "price": 2500,
    "oldPrice": 0,
    "image": "/api/media/a106a3be-5641-44c5-89b2-7a1667108e4c.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/a106a3be-5641-44c5-89b2-7a1667108e4c.webp",
        "alt": "Plokama Wireless Lavalier Microphone - 2.4G Dual Mic System for Vlogging,"
      },
      {
        "type": "image",
        "src": "/api/media/71ba202e-a8f5-40b3-aaa9-0d5eca9db218.webp",
        "alt": "Plokama Wireless Lavalier Microphone - 2.4G Dual Mic System for Vlogging,"
      },
      {
        "type": "image",
        "src": "/api/media/15c71648-4b08-4e69-99db-bc78bcaafa31.webp",
        "alt": "Plokama Wireless Lavalier Microphone - 2.4G Dual Mic System for Vlogging,"
      }
    ],
    "color": "VM-10 Single Mic",
    "badge": "",
    "rating": 4.9,
    "stock": 36,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "microphone"
    },
    "description": "Apne content ki audio quality ko Plokama VM-20 ke saath next level par le jayein. Yeh ek professional-grade Wireless Lavalier Microphone hai jo content creators, vloggers, aur journalists ke liye design kiya gaya hai. Key Features: Dual Microphone System: Ismein One-to-Two support hai, yaani aap ek saath do log baat kar sakte hain, jo interviews ke liye best hai. 2.4G Wireless Technology: Bina kisi delay ya interruption ke saaf awaaz milti hai. Universal Compatibility: Ismein Type-C connector ke saath-saath ek Lightning Adapter bhi diya gaya hai, taaki aap ise Android aur iPhone dono par use kar sakein. Wind Protection: Dono mics ke saath premium Furry Windshields (mufflers) aate hain jo bahar ki hawa ka shor (noise) khatam kar dete hain. Multi-Purpose Use: Yeh Live Shows, Interviews, aur Vlog Short Videos ke liye bilkul perfect hai. Technical Specifications: Feature Details Brand Plokama Model VM-20 Frequency 2.4G Wireless Support One-To-Two (Dual Mic) Connectors USB Type-C + Lightning Adapter"
  },
  {
    "id": "tl-plokama-wm-60-remote-lavalier-microphone-handheld-stick",
    "name": "PLOKAMA WM-60 Remote Lavalier Microphone & Handheld Stick",
    "category": "Vlogging Setup",
    "price": 5450,
    "oldPrice": 0,
    "image": "/api/media/2af8231a-bc99-4b86-b365-7294e28fc17e.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/2af8231a-bc99-4b86-b365-7294e28fc17e.webp",
        "alt": "PLOKAMA WM-60 Remote Lavalier Microphone & Handheld Stick"
      },
      {
        "type": "image",
        "src": "/api/media/50bb62e6-863f-4af5-9c60-853d2f3ed7fd.webp",
        "alt": "PLOKAMA WM-60 Remote Lavalier Microphone & Handheld Stick"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.8,
    "stock": 33,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Vlogging Setup"
    },
    "description": "Elevate your content creation with the PLOKAMA WM-60 Wireless Lavalier Microphone Set. Designed for versatility and high-performance audio, this 2.4G wireless mic system seamlessly transitions between a discrete lapel microphone and a full-sized handheld stick—making it the ultimate tool for vloggers, interviewers, and live streamers. Dual-Mode Functionality: Easily convert your compact lapel transmitter into a handheld microphone using the included stick adapter. 2.4G Wireless Transmission: Enjoy stable, low-latency audio recording up to 25 meters away without signal dropouts. 15-Hour Extended Battery Life: Built to handle long recording sessions, live broadcasts, and full-day shoots. Plug-and-Play Receiver: Type-C interface connects directly to your smartphone with pass-through charging support. Real-Time Monitoring: Features a 3.5mm headphone jack for live audio monitoring while recording. Noise Reduction & Wind Protection: Includes premium windproof cotton covers to ensure crisp, clear voice capture outdoors. What's in the Box: 2x Wireless Microphone Transmitters 2x Handheld Stick Adapters 1x Type-C Receiver Windproof Cotton Covers Charging Cable"
  },
  {
    "id": "tl-professional-2-4g-wireless-lavalier-microphone-with-digital-",
    "name": "Professional 2.4G Wireless Lavalier Microphone with Digital LED Charging Case",
    "category": "Vlogging Setup",
    "price": 4850,
    "oldPrice": 0,
    "image": "/api/media/6ab0a676-0c47-4fdd-8018-47e124465f07.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/6ab0a676-0c47-4fdd-8018-47e124465f07.webp",
        "alt": "Professional 2.4G Wireless Lavalier Microphone with Digital LED Charging Case"
      },
      {
        "type": "image",
        "src": "/api/media/6dcb393a-3c80-47b2-b0d6-a70472a51e08.webp",
        "alt": "Professional 2.4G Wireless Lavalier Microphone with Digital LED Charging Case"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.7,
    "stock": 30,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "microphone"
    },
    "description": "Agar aap travel karte hain aur vlogging karte hain, toh yeh Digital Charging Case wala microphone aapke liye best hai. Yeh compact hai aur hamesha charge rehta hai. Smart Charging Case: Iske case par LED Digital Display hai jo aapko battery percentage dikhata hai, taaki recording ke beech mic band na ho. Modern Design: Round shape ke stylish mics jo kapdo par asani se clip ho jate hain. High-End Stability: 2.4G wireless technology ensure karti hai ki aapki voice bina kisi rukawat ke record ho. Easy to Carry: Chota aur light-weight design jo aapki pocket mein bhi aa jaye."
  },
  {
    "id": "tl-ulanzi-mt-44-extendable-vlog-tripod-selfie-stick",
    "name": "Ulanzi MT-44 Extendable Vlog Tripod & Selfie Stick",
    "category": "Vlogging Setup",
    "price": 5950,
    "oldPrice": 0,
    "image": "/api/media/ad78f09f-178e-4615-9b52-f558211096f5.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/ad78f09f-178e-4615-9b52-f558211096f5.webp",
        "alt": "Ulanzi MT-44 Extendable Vlog Tripod & Selfie Stick"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.9,
    "stock": 32,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Vlogging Setup"
    },
    "description": "2-in-1 Phone & Camera Mount: Integrated foldable phone holder with standard 1/4\" screw for DSLR, mirrorless, and action cameras. 360° Panoramic Ball Head: Easily switch between vertical (portrait) and horizontal (landscape) modes for vlogging, reels, and live streaming. Extendable Length: 4-section telescopic rod extends up to 109 cm (43 inches) for high-angle shots and wide selfies. Cold Shoe Mount: Built-in cold shoe on the phone clamp to easily attach an external microphone or LED fill light. Stable & Lightweight: Sturdy tripod legs with anti-slip silicone pads ensure rock-solid stability on any surface. 📝 Detailed Product Description Elevate your content creation with the Ulanzi MT-44 Extendable Vlog Tripod, the ultimate all-in-one solution for vloggers, YouTubers, content creators, and photographers. Whether you're shooting TikTok reels, recording travel vlogs, hosting live streams, or capturing mobile photography, the MT-44 offers maximum versatility in a compact design. Key Features: Hidden 2-in-1 Phone Clip Design: Features an innovative quick-switch phone holder hidden directly inside the top mounting plate—no extra accessories needed. It securely holds smartphones ranging from 6 cm to 8.5 cm wide, while the top standard 1/4\" thread accommodates light cameras and accessories. 360° Rotatable Ball Head: Adjust your shooting angle with complete precision. The smooth ball head allows full 360-degree rotation and 90-degree tilt, letting you seamlessly pivot between portrait for TikTok/Instagram and landscape for YouTube. Multi-Stage Extension: Works as a compact desktop tripod or expands up to 109 cm (43 inches) as a long selfie stick for capturing wider landscapes and group shots. Cold Shoe Mount for Accessories: Built directly into the phone clamp, allowing you to attach video lights or microphones to level up your video production quality instantly. Durable & Portable: Crafted from high-strength ABS material with reinforced legs, making it extremely portable yet strong enough to handle daily creative use."
  },
  {
    "id": "tl-plokama-150cm-360-camera-smartphone-tripod-stand",
    "name": "Plokama 150CM 360° Camera & Smartphone Tripod Stand",
    "category": "Mounts & Stands",
    "price": 4500,
    "oldPrice": 0,
    "image": "/api/media/e3fdac28-4e29-4343-8466-5edf2da87667.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/e3fdac28-4e29-4343-8466-5edf2da87667.webp",
        "alt": "Plokama 150CM 360° Camera & Smartphone Tripod Stand"
      }
    ],
    "color": "Default Title",
    "badge": "NEW",
    "rating": 4.9,
    "stock": 18,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Mounts & Stands"
    },
    "description": "Lightweight Aluminum Body, Adjustable Central Shaft with Wireless Remote Control & Mobile Holder for Vlogging, Photography & Video Recording (Model: PK-990S) Apni photography aur videography ko agle level par le jaane ke liye Plokama PK-990S Tripod ek perfect choice hai. Chahe aap ek professional creator hon ya vlogging ke shaukeen, yeh tripod aapko har angle se stable aur perfect shots capture karne mein madad karta hai. Yeh cameras, camcorders aur smartphones sabhi ke liye fully compatible hai. Key Features 360° Rotation & 90° Vertical Shot: Iske smooth pan-head ki madad se aap asaani se \\bm{360^\\circ} panoramic views aur \\bm{90^\\circ} vertical (portrait) shots le sakte hain, jo Instagram Reels aur TikTok ke liye best hain. Adjustable Height (Up to 150CM): Tripod ki height ko aap apni zaroorat ke mutabiq adjust kar sakte hain. Iska Adjustable Central Shaft aapko extra height aur stability deta hai. Premium ABS+ Material: Yeh tripod high-quality ABS+ aur lightweight aluminum se bana hai, jo isse mazboot (durable) aur carry karne mein behad aasan (portable) banata hai. Wireless Remote Control: Box ke sath aane wale Bluetooth remote self-timer se aap door khade hokar bhi bina kisi jhanjhat ke pictures aur videos click kar sakte hain. Quick & Easy Setup: Iska quick-release mechanism aur portable storage design travel ke dauran aapka kaafi waqt bachata hai. Specifications Model: PK-990S Maximum Height: 150 CM (Approx. 5 Feet) Material: Premium ABS+ & Aluminum Alloy Compatibility: DSLR Cameras, Camcorders, Action Cameras, and All Smartphones In the Box: 1 x Tripod, 1 x Smartphone Holder, 1 x Wireless Remote, 1 x Carrying Bag"
  },
  {
    "id": "tl-plokama-dt-80-heavy-duty-tabletop-lifting-bracket-height-adj",
    "name": "Plokama DT-80 Heavy-Duty Tabletop Lifting Bracket Height-Adjustable Phone & Stand",
    "category": "Mounts & Stands",
    "price": 2750,
    "oldPrice": 0,
    "image": "/api/media/ef426d83-718d-4be7-856a-1bbce71ca805.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/ef426d83-718d-4be7-856a-1bbce71ca805.webp",
        "alt": "Plokama DT-80 Heavy-Duty Tabletop Lifting Bracket Height-Adjustable Phone & Stand"
      },
      {
        "type": "image",
        "src": "/api/media/87db6eed-ba95-44a8-a6f4-2cf9b771a447.webp",
        "alt": "Plokama DT-80 Heavy-Duty Tabletop Lifting Bracket Height-Adjustable Phone & Stand"
      },
      {
        "type": "image",
        "src": "/api/media/018f38fb-e2dd-462a-96f6-7730f25489e7.webp",
        "alt": "Plokama DT-80 Heavy-Duty Tabletop Lifting Bracket Height-Adjustable Phone & Stand"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.5,
    "stock": 32,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Mounts & Stands"
    },
    "description": "Ditch the neck strain and reclaim your hands. Elevate your screen to the perfect ergonomic height for effortless multi-tasking, streaming, and video calls. Product Description Constantly looking down at your phone is a recipe for neck fatigue and poor posture. Meet the Plokama DT-80 Tabletop Lifting Bracket —the ultimate workspace upgrade designed to bring your device right to eye level. Whether you are following a recipe in the kitchen, hosting a Zoom meeting, streaming your favorite content, or recording hands-free video, this premium stand keeps your screen exactly where you need it. Crafted with an ultra-steady, weighted base, the Plokama DT-80 eliminates the frustrating wobbles common with cheap stands. It features a fluid, step-less telescoping neck that effortlessly adjusts from $22\\text{cm}$ to $37\\text{cm}$ , allowing you to instantly customize your viewing setup. Combined with a fully articulating $360^{\\circ}$ ball joint, you can switch from portrait to landscape mode in a single, smooth motion. Stop propping your phone up against coffee mugs or books—give your device the secure, premium home it deserves. ✅ Key Features Fully Adjustable Height ( $22\\text{--}37\\text{cm}$ ): Smoothly extend or lower the telescoping arm to match your direct line of sight, promoting perfect posture and reducing cervical spine fatigue. $360^{\\circ}$ Rotatable & $180^{\\circ}$ Tilt Head: Find your perfect viewing angle. The omnidirectional ball joint allows for seamless rotation to landscape or portrait mode with effortless angle customization. Ultra-Steady Weighted Base: Engineered with an anti-skid, heavy-duty foundation to ensure your premium smartphone or tablet remains completely stable without tipping or shaking. Universal Hands-Free Bracket: Secure, rubber-padded grip pads tightly hold your device without scratching the finish, accommodating almost all modern smartphones and small tablets. Clean Workspace Aesthetic: Sleek matte black finish and minimalist silhouette complement any modern office desk, bedside table, or kitchen counter. 📦 Specifications Model: Plokama DT-80 Material: Premium High-Density ABS & Reinforced Metal Core Alloy Height Range: Adjustable from $22\\text{cm}$ to $37\\text{cm}$ ( $8.6\"\\text{ to }14.5\"$ ) Adjustability: $360^{\\circ}$ Horizontal Rotation, $180^{\\circ}$ Vertical Tilt Compatibility: Universal fit for smartphones ( $4.7\"\\text{ to }7\"$ ) and small tablets Color: Matte Professional Black 💡 Why Customers Love It Protects Your Posture: No more slouching or \"text neck.\" Elevating your screen protects your neck and shoulders during long hours of device usage. Perfect for Content Creators: The absolute best desktop tool for recording TikToks, streaming live on Instagram, or participating in crystal-clear virtual meetings. Zero-Sli…"
  },
  {
    "id": "tl-plokama-pk-996-professional-mobile-camera-tripod-stand-with-",
    "name": "PLOKAMA PK-996 Professional Mobile & Camera Tripod Stand with Remote Control and Carrying Bag",
    "category": "Mounts & Stands",
    "price": 4299,
    "oldPrice": 0,
    "image": "/api/media/df50b638-c673-4f56-a218-9c77019309c1.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/df50b638-c673-4f56-a218-9c77019309c1.webp",
        "alt": "PLOKAMA PK-996 Professional Mobile & Camera Tripod Stand with Remote Control and Carrying Bag"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 23,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Mounts & Stands"
    },
    "description": "Premium Quality & Durability: PLOKAMA PK-996 ek majboot aur versatile tripod hai, jo high-quality materials se bana hai taaki yeh lambe samay tak apka saath de sake. Iska stable design photography aur videography ke liye perfect hai. • Aasan Setup aur Adjustable Height: Is tripod mein multi-stage leg locks hain, jinse aap iski height ko jaldi aur aasani se adjust kar sakte hain. Jab puri tarah band ho, toh yeh \"Ultra HAB\" (Highly Adjust-able) mode mein compact ho jaata hai. • 360° Rotating Smartphone Mount: Iske top par ek Adjustable Mobile Holder laga hai, jo 360-degree rotation ko support karta hai, taaki aap asani se landscape (horizontal) ya portrait (vertical) shots le saken. • Wireless Remote Shutter Shamil: Iske saath ek Bluetooth Wireless Remote milta hai, jo apko door se (up to 10 meters) photos aur videos capture karne ki suvidha deta hai. Yeh selfie lene aur group photos ke liye best hai. • Lightweight aur Portable: Apne compact design ke kaaran, yeh portable hai aur \"With Bag\" feature ki wajah se carry karne mein bahut aasan hai. Aap ise apni travels, hiking, aur outdoor shoots par aasani se le ja sakte hain. • Versatile Compatibility: Yeh tripod \"Multiple Device Usage\" ke liye design kiya gaya hai. Iska phone holder zyada tar smartphones ko support karta hai, aur iska universal mount professional cameras ke liye bhi use ho sakta hai. Package Includes: • 1 x PLOKAMA PK-996 Tripod Stand • 1 x Universal Mobile Holder (built-in) • 1 x Wireless Remote Control • 1 x Premium Carrying Bag • 1 x Original Retail Packaging Box Specifications: • Model: PK-996 • Brand: PLOKAMA • Max Height: [Specific Height Mention in Inches/cm] • Closed Length: [Specific Closed Length Mention in Inches/cm] • Weight: [Weight of Tripod] • Color: Black with Orange accents • Material: Aluminum Alloy / Heavy-duty Plastic Kiske Liye Perfect Hai? Content Creators, Vloggers, Instagram Reel Makers, YouTube creators, aur un sabhi logon ke liye jo professional stability ke saath photos aur videos banana chahte hain. Is tripod ke saath \"Enjoy the Fun of Technology.\""
  },
  {
    "id": "tl-premium-one-touch-automatic-lock-mobile-holder-for-bikes-mot",
    "name": "Premium One-Touch Automatic Lock Mobile Holder for Bikes & Motorcycles",
    "category": "Mounts & Stands",
    "price": 1499,
    "oldPrice": 0,
    "image": "/api/media/2bba57d7-a439-4fc9-bf08-fadaa59c4127.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/2bba57d7-a439-4fc9-bf08-fadaa59c4127.webp",
        "alt": "Premium One-Touch Automatic Lock Mobile Holder for Bikes & Motorcycles"
      },
      {
        "type": "image",
        "src": "/api/media/e261f01b-fcaf-4ab5-8d78-cbf826554f94.webp",
        "alt": "Premium One-Touch Automatic Lock Mobile Holder for Bikes & Motorcycles"
      }
    ],
    "color": "XY-089",
    "badge": "",
    "rating": 4.6,
    "stock": 20,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Mounts & Stands"
    },
    "description": "Upgrade your ride with the ultimate hands-free convenience! Chahe aap bike chala rahay hon, heavy bike ya scooter, yeh heavy-duty phone holder aap ke safar ko safe aur aasan banata hai. Iska advanced One-Touch Automatic Lock mechanism aap ke phone ko har tarah ke jhatkon (bumps) se mehfooz rakhta hai. Key Features: One-Touch Auto Lock: Phone ko holder par rakhty hi side arms automatically lock ho jaty hain. One-hand operation ke liye behtareen hai. 360° Rotation: Aap apne phone ko portrait (vertical) ya landscape (horizontal) view par aasani se adjust kar sakty hain taakay Google Maps dekhne mein aasani ho. Super Stable & Anti-Shake: Heavy bumps aur rough roads par bhi phone bilkul nahi hilta. Safe aur shockproof design. Universal Compatibility: Tamam standard smartphones (iPhone, Samsung, Xiaomi, Infinix, etc.) ke liye perfect fit hai. Two Specialized Variants: XY-088 (Bicycle/Scooter): Handlebar par majbooti se fix hone wala mount. XY-089 (Motorcycle): Side mirror ke stand ke sath attach hone wala specialized bracket mount. Specifications: Model: XY-088 (Handlebar Mount) / XY-089 (Mirror Mount) Material: Premium High-Quality ABS & Metal Base Color: Sleek Black Rotation: 360 Degree Universal Ball Joint"
  },
  {
    "id": "tl-banda-c500-2-4g-wireless-keyboard-mouse-combo-built-in-table",
    "name": "Banda C500 2.4G Wireless Keyboard & Mouse Combo – Built-in Tablet & Mobile Stand Slot",
    "category": "PC & Laptop",
    "price": 4000,
    "oldPrice": 0,
    "image": "/api/media/640800ac-dff6-4999-be3a-2a8a5cc8299a.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/640800ac-dff6-4999-be3a-2a8a5cc8299a.webp",
        "alt": "Banda C500 2.4G Wireless Keyboard & Mouse Combo – Built-in Tablet & Mobile Stand Slot"
      }
    ],
    "color": "Default Title",
    "badge": "NEW",
    "rating": 4.8,
    "stock": 29,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "PC & Laptop"
    },
    "description": "Up-grade your workspace with the Banda C500 Wireless Keyboard & Mouse Set! Designed for productivity, comfort, and style, this combo features a unique integrated slot to hold your tablet or smartphone at the perfect viewing angle while you type. Whether you are working from home, studying, or managing your online store, the reliable 2.4GHz wireless connectivity ensures a fast, lag-free connection. ✨ Key Features: Integrated Phone & Tablet Holder: Built-in groove to securely dock your smartphone or iPad for seamless multi-device work. 2.4G Wireless Connectivity: Enjoy a clean, cord-free setup with a stable wireless range up to 10 meters. Ergonomic & Stylish Design: Smooth round keycaps with quiet, comfortable typing experience and a matching precision mouse. Plug & Play Setup: Simple USB receiver connection with no extra drivers required. Wide Compatibility: Works seamlessly with Windows, macOS, Android, and iOS devices. ⚙️ Product Specifications: Brand: Banda Model: C500 Color: Aesthetic pink Connection Type: 2.4GHz Wireless Package Includes: 1x Wireless Keyboard, 1x Wireless Mouse, 1x USB Receiver"
  },
  {
    "id": "tl-4-port-usb-3-0-high-speed-hub",
    "name": "4-Port USB 3.0 High-Speed Hub",
    "category": "PC & Laptop",
    "price": 1450,
    "oldPrice": 0,
    "image": "/api/media/259a7ad6-118e-4ac4-a35a-76b7e9ae64fd.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/259a7ad6-118e-4ac4-a35a-76b7e9ae64fd.webp",
        "alt": "4-Port USB 3.0 High-Speed Hub"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.9,
    "stock": 49,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "PC & Laptop"
    },
    "description": "4-Port USB 3.0 High-Speed Extension Hub – Slim & Compact Apne laptop ya computer ke ports ko asani se expand karein is high-performance 4-Port USB 3.0 Hub ke sath! Yeh compact aur durable hub aapko ek hi waqt mein multiple devices attach karne ki saholat deta hai. Key Features: SuperSpeed Data Transfer: USB 3.0 technology ke sath 5 Gbps tak ki tez tareen data transfer speed hasil karein. 4-in-1 Connectivity: Ek sath 4 USB devices (keyboard, mouse, USB drive, external hard drive, wagaira) connect karein. LED Power Indicator: Built-in LED light jo connection status show karti hai. Compact & Portable: 30cm dur-cable ke sath slim design, jo office, home aur travel ke liye perfect hai. Device Protection: Built-in fuse protection aap ki devices ko power surges se safe rakhti hai. Universal Compatibility: USB 3.0 ke sath saath Backward Compatible hai USB 2.0 aur 1.1 ke sath bhi. DC 5V Power Jack: Additional power supply ke liye dedicated power jack."
  },
  {
    "id": "tl-gaming-combo-rgb-mechanical-feel-keyboard-aur-gaming-mouse",
    "name": "Gaming Combo: RGB Mechanical Feel Keyboard Aur Gaming Mouse",
    "category": "PC & Laptop",
    "price": 3250,
    "oldPrice": 0,
    "image": "/api/media/d8b30673-ce8b-4cc0-bca0-f2f797f82642.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/d8b30673-ce8b-4cc0-bca0-f2f797f82642.webp",
        "alt": "Gaming Combo: RGB Mechanical Feel Keyboard Aur Gaming Mouse"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.5,
    "stock": 48,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "PC & Laptop"
    },
    "description": "Apne gaming setup ko upgrade karein iss behtareen Gaming Keyboard aur Mouse combo ke saath! Yeh set un logon ke liye design kiya gaya hai jo performance aur style dono chahte hain. Khasosiyaat (Features): Mechanical Feel: Keyboard ko iss tarah banaya gaya hai ke yeh aap ko mechanical switches jaisa 'tactile' feel aur sound de, jo typing aur gaming dono mein madadgar hai. RGB Backlighting: Keyboard aur mouse dono mein multi-color RGB lights hain, jo aap ke desk setup ko aik naya aur cool look dete hain. Soldier Design: Keyboard par aik stylish soldier/commando ki tasveer bani hui hai, jo iss ki unique aur aggressive design ko wazeh karti hai. Responsive Mouse: Combo mein maujood gaming mouse tez aur accurate hai, jis se aap apne games mein behtar control hasil kar sakte hain. Sturdy Build: Yeh durable materials se bana hai taake lambay arsay tak chalay aur intense gaming sessions ka maza de sake. Easy Installation: Bas plug karein aur khelein (Plug and Play), kisi extra software ki zaroorat nahi. Chahe aap aik beginner gamer hon ya professional, yeh mechanical feel keyboard aur mouse combo aap ke gaming experience ko behtar banayega. Abhi order karein aur jeet ki taraf barhein!"
  },
  {
    "id": "tl-hp-k1600-wired-usb-keyboard",
    "name": "HP K1600 Wired USB Keyboard",
    "category": "PC & Laptop",
    "price": 2500,
    "oldPrice": 0,
    "image": "/api/media/dd5d7937-fe58-452f-a86b-0db45b7ff853.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/dd5d7937-fe58-452f-a86b-0db45b7ff853.webp",
        "alt": "HP K1600 Wired USB Keyboard"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 27,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "PC & Laptop"
    },
    "description": "HP K1600 Wired Keyboard aapke daily computing, office work, aur study requirements ke liye ek highly reliable aur comfortable choice hai. Iska sleek design, smooth typing feel, aur durable keys aapki overall productivity ko enhance karte hain. Key Features Plug & Play USB Connectivity: Kisi extra software ya driver ki zaroorat nahi—bus USB port me lagayein aur istemaal karein. Full-Size Standard Layout: Clear English (EN) layout ke saath fast aur accurate typing experience. 3 LED Indicator Lights: Caps Lock, Num Lock, aur Scroll Lock ke liye dedicated status lights. Adjustable Tilt Legs: Comfortable typing angle set karne ke liye built-in height adjustment legs. Durable & Sturdy Build: High-quality printing aur spill-resistant body daily home aur office use ke liye best hai. Universal Compatibility: Windows, macOS, aur Linux sabhi operating systems ke saath smoothly kaam karta hai."
  },
  {
    "id": "tl-laptop-cooler-pad-heavy-duty-cooling-stand",
    "name": "Laptop Cooler Pad – Heavy Duty Cooling Stand",
    "category": "PC & Laptop",
    "price": 3450,
    "oldPrice": 0,
    "image": "/api/media/323b73b6-1bbb-4881-8097-643c22a25440.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/323b73b6-1bbb-4881-8097-643c22a25440.webp",
        "alt": "Laptop Cooler Pad – Heavy Duty Cooling Stand"
      },
      {
        "type": "image",
        "src": "/api/media/2eca918e-2c15-417a-b1d0-6a1b39b703ff.webp",
        "alt": "Laptop Cooler Pad – Heavy Duty Cooling Stand"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 15,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "PC & Laptop"
    },
    "description": "Keep your laptop cool, perform at your best, and work comfortably with the Mikuso NCP-235 Shun-1 Cooler Pad! Designed for heavy usage, gaming, and daily office tasks, this laptop cooling stand provides maximum airflow while maintaining an ergonomic setup to protect your posture. 🌟 Key Features: Powerful 160mm Blue LED Fan: High-speed, low-noise cooling fan ensures rapid heat dissipation and optimal airflow to keep your device running smoothly. Ergonomic Height Adjustment: Features 4-gear height adjustment levels so you can set the perfect viewing and typing angle, reducing neck and back strain. Heavy-Duty & Anti-Deformation Build: Crafted with a durable metal mesh surface that withstands daily wear while providing stable support for laptops up to 17 inches. Dual USB Ports: Convenient dual-USB setup allows you to pass through power without sacrificing a USB port on your laptop. Removable Anti-Slip Brackets: Keeps your laptop securely in place, even at steep incline angles. Silent Operation: Designed for minimal noise so you can focus on your work or gaming without distraction."
  },
  {
    "id": "tl-prime-usb-powered-2-0-multimedia-speakers",
    "name": "Prime USB Powered 2.0 Multimedia Speakers",
    "category": "PC & Laptop",
    "price": 1950,
    "oldPrice": 0,
    "image": "/api/media/0a3a24f8-43ad-4b12-b8f6-7a509cce08b9.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/0a3a24f8-43ad-4b12-b8f6-7a509cce08b9.webp",
        "alt": "Prime USB Powered 2.0 Multimedia Speakers"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 34,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "PC & Laptop"
    },
    "description": "FT-165 Prime USB Multimedia Speakers ke sath behtar audio quality ka tajurba karein. Yeh mini speakers PC, laptop, mobile, aur MP3/MP4 players ke liye perfect hain. Unka compact design table par kam jagah leta hai aur clear stereo sound provide karta hai. Key Features: USB Powered Convenience: Kisi extra power adapter ki zaroorat nahi, sirf USB port se connect karein aur plug-and-play enjoy karein. 2.0 Channel Stereo Sound: Clean aur crisp sound output ke liye 2.0-inch drive units. Compact & Stylish Design: Modern look aur space-saving size jo aapke desk set-up ko behtar banata hai. Universal Compatibility: USB, PC/Mac, Mobile Phones, iPods, aur MP3/MP4 players ke sath ba-asani connect hota hai. Specifications: Model: FT-165 Power Input: USB Port Drive Unit: 2.0 Inch Speaker Type: 2.0 Channel Multimedia Speakers Design: Compact & Portable"
  },
  {
    "id": "tl-alfa-high-speed-wireless-n-usb-wi-fi-adapter",
    "name": "Alfa High-Speed Wireless-N USB Wi-Fi Adapter",
    "category": "PC & Laptop",
    "price": 1250,
    "oldPrice": 0,
    "image": "/api/media/01119cc1-9357-460b-97f5-bc096fd71b98.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/01119cc1-9357-460b-97f5-bc096fd71b98.webp",
        "alt": "Alfa High-Speed Wireless-N USB Wi-Fi Adapter"
      },
      {
        "type": "image",
        "src": "/api/media/c49787bf-54c9-4b17-8d98-dca8f75d81b8.webp",
        "alt": "Alfa High-Speed Wireless-N USB Wi-Fi Adapter"
      }
    ],
    "color": "Mini",
    "badge": "",
    "rating": 4.4,
    "stock": 36,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "PC & Laptop"
    },
    "description": "Apne PC, Laptop ya TV Receiver ko fast aur reliable Wi-Fi connectivity ke sath upgrade karein! Alfa Wireless-N USB Adapters aapko seamless internet browsing, online streaming aur video calls ke liye behtareen signal range aur stability provide karte hain. Sleek, compact Pico Nano design (portability ke liye) aur High-Gain External Antenna model (stronger signal strength aur wider coverage ke liye) ke options ke sath, ye adapters daily connectivity ke liye ideal hain. Key Features: High-Speed Wireless Performance: 150Mbps tak ki fast Wireless-N speeds enjoy karein. Dual Design Options: Pico/Nano Model: Ultra-compact design jo PC/Laptop ke USB port mein discreetly fit ho jata hai. Antenna Model: External high-gain antenna better signal reception aur long-range coverage ke liye. Plug & Play Compatibility: Windows (XP / 7 / 8 / 10 / 11) aur macOS devices ke sath fully compatible. Multi-Device Support: Laptops, Desktop PCs, Satellite Receivers, TV Boxes aur DVRs ke sath working capability. Soft AP Mode: Apne PC ko Wi-Fi Hotspot mein convert karein aur doosri devices ke sath internet share karein. Advanced Security: WEP, WPA/WPA2, aur WPA-PSK/WPA2-PSK encryption ke sath aapka network hamesha secure rahe. Package Includes: 1x Alfa Wireless-N USB Wi-Fi Adapter (Choose Pico or Antenna Variant)"
  },
  {
    "id": "tl-itech-4k-uhd-hdmi-cable-2-0v-1-5-3-5-meters-high-speed-premi",
    "name": "iTech 4K UHD HDMI Cable 2.0v (1.5-3-5 Meters) – High-Speed Premium HDTV Cable",
    "category": "PC & Laptop",
    "price": 1450,
    "oldPrice": 0,
    "image": "/api/media/535cee94-000b-4d5d-9e0f-5c6af76218dd.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/535cee94-000b-4d5d-9e0f-5c6af76218dd.webp",
        "alt": "iTech 4K UHD HDMI Cable 2.0v (1.5-3-5 Meters) – High-Speed Premium HDTV Cable"
      }
    ],
    "color": "1.5M",
    "badge": "",
    "rating": 4.6,
    "stock": 41,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "PC & Laptop"
    },
    "description": "4K Ultra HD Support: High-resolution visuals, vibrant colors, aur crystal-clear display ke liye perfect. HDMI Version 2.0v: High-speed data transfer ensure karta hai bina kisi lag ya frame drop ke. 1.5-3-5 Meters Length: Extra length jo gaming consoles, TVs, laptops, aur projectors ke sath flexible connection de. Durable & Premium Build: Strong casing aur rust-resistant connectors jo long-lasting performance dein. 📄 Detailed Product Description Elevate your home entertainment and display experience with the iTech 4K UHD HDTV Cable ( 1.5-3-5m). Designed for modern high-definition devices, this premium HDMI 2.0v cable delivers crisp 4K visual clarity and immersive audio performance. Whether you're streaming 4K movies, gaming on a high-refresh-rate display, or connecting your laptop to a projector for a professional presentation, the iTech HDMI cable ensures stable signal transmission without lag or distortion. With a generous 1.5-3-5 -meter length, you get full flexibility for home theater and workspace setups."
  },
  {
    "id": "tl-hp-gaming-mouse-m160-rgb-lighting-4-buttons-optical-sensor-1",
    "name": "HP Gaming Mouse m160 – RGB Lighting, 4 Buttons, Optical Sensor (1000/1600 DPI)",
    "category": "PC & Laptop",
    "price": 1500,
    "oldPrice": 0,
    "image": "/api/media/2cd34783-05db-46ca-b091-09e24932de23.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/2cd34783-05db-46ca-b091-09e24932de23.webp",
        "alt": "HP Gaming Mouse m160 – RGB Lighting, 4 Buttons, Optical Sensor (1000/1600 DPI)"
      },
      {
        "type": "image",
        "src": "/api/media/dba52bad-eebe-494c-83f1-b95405ac5af3.webp",
        "alt": "HP Gaming Mouse m160 – RGB Lighting, 4 Buttons, Optical Sensor (1000/1600 DPI)"
      }
    ],
    "color": "Wireless",
    "badge": "",
    "rating": 4.4,
    "stock": 19,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "PC & Laptop"
    },
    "description": "Upgrade your gaming setup and boost your productivity with the HP Gaming Mouse m160. Designed for precision, comfort, and style, this wired mouse features dynamic RGB lighting and an ergonomic grip, making it an ideal choice for both casual gamers and everyday desktop users. Key Features: Precise Optical Sensor: Enjoy smooth, accurate tracking on a variety of surfaces. Adjustable DPI Settings: Easily switch between 1000 and 1600 DPI to match your game or workflow sensitivity requirements. Vibrant RGB Backlighting: Features multi-color LED illumination that brings your desk setup to life. 4-Button Control: Optimized button layout for easy navigation and responsive actions during gameplay. Ergonomic Design: Built for long gaming sessions with a comfortable, non-slip grip that minimizes hand fatigue. Plug & Play USB: Simple USB connection with no additional software or driver installation needed :"
  },
  {
    "id": "tl-thermal-mobile-printer-pos-app-tutorial-video",
    "name": "Thermal Mobile Printer + Android POS App + Tutorial Video",
    "category": "POS Package",
    "price": 9500,
    "oldPrice": 0,
    "image": "/api/media/fbd56bbb-677e-4304-bf18-9308b1a2dc28.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/fbd56bbb-677e-4304-bf18-9308b1a2dc28.webp",
        "alt": "Thermal Mobile Printer + Android POS App + Tutorial Video"
      },
      {
        "type": "image",
        "src": "/api/media/ca9414bc-73f7-4979-a1bc-56379e61792b.webp",
        "alt": "Thermal Mobile Printer + Android POS App + Tutorial Video"
      },
      {
        "type": "image",
        "src": "/api/media/a5784ee2-d9cf-4c2d-a69f-495ffb8786e2.webp",
        "alt": "Thermal Mobile Printer + Android POS App + Tutorial Video"
      }
    ],
    "color": "Media lnk Black",
    "badge": "NEW",
    "rating": 4.7,
    "stock": 23,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "POS Package"
    },
    "description": "Apne business ki billing ko asaan aur professional banayein Complete POS Package ke sath. Is package mein woh tamam cheezen shamil hain jo aap ko apni shop ya business mein digital billing shuru karne ke liye chahiye. Package ke andar Thermal Mobile Printer , POS Billing App , aur Step-by-Step Tutorial Video shamil hai, jis ki madad se aap asani se app install kar sakte hain, printer connect kar sakte hain aur bina kisi mushkil ke billing shuru kar sakte hain. Yeh package grocery stores, medical stores, garments shops, cosmetic shops, mobile shops, bakeries, restaurants aur har chhote ya bare business ke liye behtareen choice hai. Package Includes: ✅ Thermal Mobile Printer ✅ POS Billing App ✅ Complete Tutorial Video ✅ Easy Setup Guide ✅ Fast & Professional Billing Solution Agar aap apne business ko modern banana chahte hain aur customer ko professional receipt dena chahte hain, to yeh Complete POS Package aap ke liye perfect solution hai."
  },
  {
    "id": "tl-58mm-thermal-paper-rolls-pack-of-10",
    "name": "58mm Thermal Paper Rolls (Pack of 10)",
    "category": "POS Package",
    "price": 1500,
    "oldPrice": 0,
    "image": "/api/media/03844b40-0c98-4bc6-971b-31d236b8303c.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/03844b40-0c98-4bc6-971b-31d236b8303c.webp",
        "alt": "58mm Thermal Paper Rolls (Pack of 10)"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.8,
    "stock": 31,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "POS Package"
    },
    "description": "Thermal Printer Paper Rolls (Pack of 10) Keep your business billing smooth, fast, and professional with this Pack of 10 High-Quality Thermal Paper Rolls. Engineered for crisp, smudge-free printing, these rolls require no ink or ribbons—delivering clean and easily readable receipts every single time. Designed for high durability and smooth feeding, they are the perfect choice for everyday retail operations, billing terminals, and thermal printers. Key Features: Complete Value Pack: Includes 10 premium thermal paper rolls ready for daily commercial use. (Set of 10) Crisp & Clear Output: High-sensitivity thermal coating ensures deep black, sharp text and clear barcode printing. Printer-Friendly & Dust-Free: Smooth paper texture prevents jams and minimizes wear and tear on your thermal printer head. Universal Compatibility: Works seamlessly with standard POS systems, card swipe machines, handheld billing terminals, and desktop thermal receipt printers. 100% Inkless Printing: Utilizes direct thermal printing technology—no ink, toner, or ribbon needed. Ideal For: Retail stores, supermarkets, and boutiques Restaurants, cafes, and food counters POS terminals & card swipe machines Online order dispatch & shipping receipts"
  },
  {
    "id": "tl-premium-usb-to-dc-power-boost-cable-5v-to-9v-12v-step-up-con",
    "name": "Premium USB to DC Power Boost Cable (5V to 9V / 12V Step-Up Converter) – 1A Output For Wi-Fi Router…",
    "category": "Gadgets",
    "price": 999,
    "oldPrice": 0,
    "image": "/api/media/1ee766ca-056e-45a2-9df6-c0c157171200.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/1ee766ca-056e-45a2-9df6-c0c157171200.webp",
        "alt": "Premium USB to DC Power Boost Cable (5V to 9V / 12V Step-Up Converter) – 1A Output For Wi-Fi Routers, PTZ Cameras & LED Lights"
      },
      {
        "type": "image",
        "src": "/api/media/0671ec34-7ad6-4a75-844d-98b2c85d1d0f.webp",
        "alt": "Premium USB to DC Power Boost Cable (5V to 9V / 12V Step-Up Converter) – 1A Output For Wi-Fi Routers, PTZ Cameras & LED Lights"
      },
      {
        "type": "image",
        "src": "/api/media/eb6a94fb-9a7f-4265-9420-21a9ceb7f765.webp",
        "alt": "Premium USB to DC Power Boost Cable (5V to 9V / 12V Step-Up Converter) – 1A Output For Wi-Fi Routers, PTZ Cameras & LED Lights"
      }
    ],
    "color": "Default Title",
    "badge": "NEW",
    "rating": 4.7,
    "stock": 25,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Gadgets"
    },
    "description": "Load Shedding Main Internet Aur Security Ko Rakhein Hamesha On! Yeh USB to DC Power Boost Cable aik advance step-up converter hai jo aapke standard 5V USB power bank ya charger ki bijli ko 9V ya 12V DC mein convert karta hai. Is cable ki madad se aap light janay ki soorat mein bhi power bank use kar k apna Wi-Fi Router ya PTZ Camera asani se chala sakte hain. Khusoosiyat: Smart Voltage Step-Up: 5V input ko behtareen tareeqay se 9V aur 12V output mein tabdeel karta hai. 1A Stable Current: Aapke devices ko milti hai lagatar aur safe 1A ki power supply. LED Indicator Light: Cable ke andar intelligent chip aur display LED mojood hai jo connectivity status show karti hai. Mazboot Aur Durable Build: High-quality material se bani flexible wire jo lambay arsay tak kharab nahi hoti. Multi-Device Support: Wi-Fi Routers, Modems, PTZ/CCTV Cameras, aur chotay LED lamps ke liye aik perfect aur lazmi accessory. 📦 Specifications: Product Type: USB to DC Male Connector (Step-up Cable) Input Voltage: 5V USB Output Voltage: 9V / 12V DC Max Output Current: 1A Interface Pin Size: Standard DC Jack (Compatible with most routers & cameras)"
  },
  {
    "id": "tl-memo-magnetic-mobile-phone-coolers-series-cx08-cx12-cx15-cx1",
    "name": "MEMO Magnetic Mobile Phone Coolers Series (CX07, CX08, CX12, CX15, CX16) – Instant Cooling & RGB Ga…",
    "category": "Gadgets",
    "price": 2999,
    "oldPrice": 0,
    "image": "/api/media/93ecc03c-7e20-487c-8eaa-cc94485be9f6.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/93ecc03c-7e20-487c-8eaa-cc94485be9f6.webp",
        "alt": "MEMO Magnetic Mobile Phone Coolers Series (CX07, CX08, CX12, CX15, CX16) – Instant Cooling & RGB Gaming Fan for All Smartphones"
      },
      {
        "type": "image",
        "src": "/api/media/c4d3257a-1ec7-4fb7-b524-69b04b53688e.webp",
        "alt": "MEMO Magnetic Mobile Phone Coolers Series (CX07, CX08, CX12, CX15, CX16) – Instant Cooling & RGB Gaming Fan for All Smartphones"
      }
    ],
    "color": "Memo CX 08",
    "badge": "",
    "rating": 4.7,
    "stock": 19,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Gadgets"
    },
    "description": "Aap ke image mein maujood tamam MEMO Magnetic Mobile Coolers ke liye aik behtareen title aur description niche di gayi hai, jise aap e-commerce (Daraz, website) ya social media par istemaal kar sakte hain: Description Apne phone ko garam hone se bachayein aur gaming performance ko behtareen banayein! Agar aap heavy gaming (PUBG, Free Fire, Call of Duty) karte hain ya lambe samay tak video streaming karte hain, to MEMO ki ye premium Magnetic Phone Coolers series aap ke liye perfect solution hai. Ye coolers aap ke phone ke temperature ko chand seconds mein low kar dete hain taake aap ko mile smooth aur lag-free performance. Key Features & Models Included: MEMO CX07 (2-in-1 Orange/Black Edition) : Yeh model Magnetic aur Back-clip (Clamp) donon options ke sath aata hai, jo ise har tarah ke phone ke liye perfect banata hai. Isme \"Rampage Cooling\" technology hai jo instant freeze karti hai, silent operation (kam shor) hai, aur iska cover khol kar aap fan ko aasaani se saaf bhi kar sakte hain. MEMO CX15 (Black Edition): Ultra-sleek design aur powerful magnetic grip ke sath, jo broad-area cooling faraham karta hai. Iska mesmerizing RGB light setup aapke gaming environment ko mazeed cool banata hai. MEMO CX16 (Blue Edition - 15W Power): \"Freezer Instantly\" technology ke sath aata hai. Iska 15W ka high-power cooling system extreme heat ko bhi foran control kar leta hai, aur is par maujood digital temperature display aap ko live cooling status dikhata hai. MEMO CX08 (Yellow/Premium Edition): Semi-conductor dual cooling mechanical design ke sath aata hai jo magnetic attachment ke sath-gardan (clip-on) option ko bhi support karta hai. Extreme performance dene ke liye isme advanced thermal management di gayi hai. MEMO CX12 (Yellow Cyberpunk Style - 15W Power): Ye futuristic gold/yellow design cooler 15W ki tezi se phone ko freeze kar deta hai. Isme stylish protective cover aur lag-free gaming ke liye silent operations maujood hain. Ye Coolers Kyun Khareedein? Instant Freeze Technology: Kuch hi seconds mein phone ka temperature drop kar dete hain. Strong Magnetic Grip: iPhone (MagSafe compatible) aur tamam Android phones ke sath ba-asani chipak jate hain (Android ke liye magnetic sticker box mein shamil hota hai). RGB Gaming Lights: Gaming setup ko mazeed attractive banane ke liye colorful RGB lights. No More Lagging: Overheating ki wajah se hone wale frame drops aur battery drain ko mukammal khatam karta hai. Aaj hi apna pasandeda MEMO model select karein aur non-stop gaming ka maza lein!"
  },
  {
    "id": "tl-speedx-mx3-2-4g-wireless-air-fly-mouse-mini-keyboard-with-mo",
    "name": "SpeedX MX3 2.4G Wireless Air Fly Mouse & Mini Keyboard with Motion Sensor & IR Learning – Black",
    "category": "Gadgets",
    "price": 1450,
    "oldPrice": 0,
    "image": "/api/media/a31343ec-faa5-44f8-aaae-b6bc3c448768.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/a31343ec-faa5-44f8-aaae-b6bc3c448768.webp",
        "alt": "SpeedX MX3 2.4G Wireless Air Fly Mouse & Mini Keyboard with Motion Sensor & IR Learning – Black"
      },
      {
        "type": "image",
        "src": "/api/media/c5e5c421-7bd8-4962-8158-b281b6a257ef.webp",
        "alt": "SpeedX MX3 2.4G Wireless Air Fly Mouse & Mini Keyboard with Motion Sensor & IR Learning – Black"
      }
    ],
    "color": "Wireless Air Remote Mouse with Gyroscope and Voice Control",
    "badge": "",
    "rating": 4.8,
    "stock": 22,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Gadgets"
    },
    "description": "Control your Smart TV, Android TV Box, PC, or Projector effortlessly with the SpeedX MX3 Air Fly Mouse. Featuring an integrated 2.4GHz wireless connection, motion-sensing Air Mouse functionality, a mini keyboard, and IR learning capabilities, this all-in-one remote makes browsing, gaming, and typing smoother than ever. Key Features: Air Mouse with Motion Sensor: Move your hand to control the cursor on screen with high accuracy and precision. 2.4G Wireless Connectivity: Plug-and-play USB receiver ensures a strong, stable connection up to 10 meters without lag. Built-in Mini Keyboard: Easily search for movies, type passwords, or browse the web without hassle. IR Learning (5 Keys): Program essential buttons from your existing TV remote for ultimate convenience. Motion Sensing Game Support: Enjoy interactive motion-sensing games right on your TV screen. Wide Compatibility: Compatible with Android TV Boxes, Smart TVs, Windows PCs, Linux, Mac OS, and Projectors. ⚙️ Specifications: Model: SpeedX MX3 Connection Type: 2.4GHz Wireless (USB Receiver included) Operating Distance: Up to 10 Meters Color: Black Sensors: 3-Gyro + 3-G-Sensor System Support: Android, Windows, Mac OS, Linux 📦 Package Includes: 1 x SpeedX MX3 Air Fly Mouse 1 x USB Wireless Receiver 1 x User Manual"
  },
  {
    "id": "tl-cosmic-3d-moon-crystal-ball-led-night-light",
    "name": "Cosmic 3D Moon Crystal Ball LED Night Light",
    "category": "Gadgets",
    "price": 1490,
    "oldPrice": 0,
    "image": "/api/media/c5f2fd2c-4314-409d-b4e7-12d533664495.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/c5f2fd2c-4314-409d-b4e7-12d533664495.webp",
        "alt": "Cosmic 3D Moon Crystal Ball LED Night Light"
      },
      {
        "type": "image",
        "src": "/api/media/fb7b934d-02a6-4a91-8998-3415a58243c9.webp",
        "alt": "Cosmic 3D Moon Crystal Ball LED Night Light"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.4,
    "stock": 42,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Gadgets"
    },
    "description": "Bring the Magic of the Cosmos Into Your Room Transform any space into a peaceful oasis with this stunning 3D Moon Crystal Ball Night Light. Featuring a highly detailed, laser-engraved 3D moon interior, this optically clear glass sphere glows beautifully when placed on its premium wooden LED base. It's the perfect blend of modern technology and elegant home decor. Key Features Exquisite 3D Laser Engraving: Advanced internal engraving technology captures the realistic texture and crater details of the moon inside a flawless crystal sphere. Warm, Cozy Illumination: The energy-efficient LED light source embedded in the natural wood base casts a soft, comforting glow—ideal as a bedside night light, desk lamp, or mood lighting. Premium Build Quality: Made from high-quality, durable crystal glass and paired with a finely finished, eco-friendly wooden base. Convenient USB Plug & Play: Features a neat, durable braided USB power cord that easily connects to adapters, power banks, or laptops. The Perfect Gift: Packaged in an attractive retail box, making it an excellent gift choice for birthdays, anniversaries, holidays, or astronomy enthusiasts. Product Specifications Product Type: 3D Crystal Ball Night Light Design: Realistic Moon Theme (Other celestial designs available on retail box) Base Material: Natural Solid Wood with Integrated LED Power Source: USB Powered (Braided Cable Included) Application: Bedroom, Living Room, Office Desk, Nursery, Photography Prop"
  },
  {
    "id": "tl-360-smart-e27-light-bulb-security-camera-wireless-wifi-outdo",
    "name": "360° Smart E27 Light Bulb Security Camera – Wireless WiFi Outdoor & Indoor Surveillance Camera with…",
    "category": "Gadgets",
    "price": 3850,
    "oldPrice": 0,
    "image": "/api/media/3af9179d-d7d4-4c94-9ad7-ac42f4c6fee6.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/3af9179d-d7d4-4c94-9ad7-ac42f4c6fee6.webp",
        "alt": "360° Smart E27 Light Bulb Security Camera – Wireless WiFi Outdoor & Indoor Surveillance Camera with Night Vision, 2-Way Audio & Motion Dete…"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.6,
    "stock": 40,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Gadgets"
    },
    "description": "Easy Installation (Plug & Play): Standard E27 light bulb socket mein direct fit ho jata hai. Kisi extra wiring ya complicated setup ki zaroorat nahi. 360° Full View Coverage: Panoramic rotation ke sath ghar, office ya dukan ke har kone par nazar rakhein. Full HD & Night Vision: Ultra-clear HD resolution aur advance infrared night vision ke sath din ho ya raat, har detail saf dikhai deti hai. 2-Way Audio: Built-in microphone aur speaker ki madad se app ke zariye kisi se bhi live baat karein. Motion Detection & Alerts: Real-time motion tracking alert seedha aapke smartphone par bhejta hai taake aap hamesha updated rahein. Wireless WiFi Connection: Mobile app se kahin se bhi live streaming dekhein aur camera ko remotely control karein. 📌 Full Product Description Ghar aur dukan ki hifazat ko banayein aur bhi aasan Smart E27 Light Bulb Security Camera ke sath. Yeh camera ek aam bulb holder (E27) mein lag jata hai, jisse aapko kisi qism ki extra wiring ya electrician ki zaroorat nahi parti. Iska 360-degree rotation aapko poore kamre ka full coverage deta hai. Mobile app ke zariye aap duniya ke kisi bhi kone se live camera feed dekh sakte hain, camera ko rotate kar sakte hain aur 2-way audio ke zariye baat bhi kar sakte hain. Raat ke andhere mein behtareen clarity ke liye isme advanced Night Vision feature diya gaya hai. Product Specifications: Socket Type: E27 Standard Light Socket Connectivity: WiFi Wireless Audio: 2-Way Audio (Microphone + Speaker) Vision: Day & Night Vision (Infrared + LED lights) Coverage: 360° Full View / Pan & Tilt Compatibility: Android & iOS App support"
  },
  {
    "id": "tl-tenda-a9-universal-range-extender-300mbps-wi-fi-signal-boost",
    "name": "Tenda A9 Universal Range Extender – 300Mbps Wi-Fi Signal Booster & Repeater",
    "category": "Gadgets",
    "price": 5950,
    "oldPrice": 0,
    "image": "/api/media/ec7ce71f-a046-4df2-a17c-0b18f3c38b2f.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/ec7ce71f-a046-4df2-a17c-0b18f3c38b2f.webp",
        "alt": "Tenda A9 Universal Range Extender – 300Mbps Wi-Fi Signal Booster & Repeater"
      }
    ],
    "color": "Default Title",
    "badge": "NEW",
    "rating": 4.7,
    "stock": 25,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Gadgets"
    },
    "description": "Boost your home or office Wi-Fi network effortlessly with the Tenda A9 Wireless N300 Universal Range Extender. Designed to eliminate Wi-Fi dead zones, this powerful repeater extends your existing network coverage, ensuring fast, stable, and seamless internet access in every room. Key Features High-Speed N300 Performance: Delivers wireless speeds up to 300Mbps, perfect for HD video streaming, online gaming, and smooth browsing. Enhanced Signal Coverage: Equipped with 2 external 3dBi antennas to boost signal strength and extend coverage across long distances. One-Button Setup (WPS): Easily expand your Wi-Fi coverage within seconds by simply pressing the WPS button on your router and extender. Smart Signal Indicator: Features an intuitive LED light that helps you find the optimal location for maximum Wi-Fi coverage. Universal Compatibility: Compatible with all standard 802.11 b/g/n Wi-Fi routers, access points, and Internet Service Provider (ISP) gateways. Seamless Roaming: Automatically connects your devices to the strongest Wi-Fi signal as you move around your home or office."
  },
  {
    "id": "tl-rechargeable-motion-sensor-smart-night-light-magnetic-wirele",
    "name": "Rechargeable Motion Sensor Smart Night Light - Magnetic Wireless LED Wall Lamp for Bedroom, Stairs…",
    "category": "Gadgets",
    "price": 2399,
    "oldPrice": 0,
    "image": "/api/media/d6450438-21f9-4987-9eb3-508357607606.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/d6450438-21f9-4987-9eb3-508357607606.webp",
        "alt": "Rechargeable Motion Sensor Smart Night Light - Magnetic Wireless LED Wall Lamp for Bedroom, Stairs & Wardrobe"
      },
      {
        "type": "image",
        "src": "/api/media/8198f2f7-a933-421c-81e6-4d5ba8a1691f.webp",
        "alt": "Rechargeable Motion Sensor Smart Night Light - Magnetic Wireless LED Wall Lamp for Bedroom, Stairs & Wardrobe"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.7,
    "stock": 50,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Gadgets"
    },
    "description": "Apne ghar ko smart banayen is Smart Motion Sensor Night Light ke saath. Ye light sirf tab chalti hai jab ise andhere mein motion (harqat) mehsoos hoti hai, jo ise energy-efficient aur istemal mein nihayat asaan banata hai. Key Features: • Smart Motion Sensor: Is mein advanced PIR motion sensor laga hua hai jo 3-5 meters ki doori se harqat ko detect kar leta hai aur 20-25 seconds baad khud bakhud band ho jata hai. • 3 Working Modes: Is mein teen settings di gayi hain: 1. ON: Musalsal roshni ke liye. 2. OFF: Mukammal band rakhne ke liye. 3. AUTO: Motion sensor activate karne ke liye (sirf andhere mein kaam karta hai). • USB Rechargeable: Ab baar baar batteries badalne ki zaroorat nahi! Ise kisi bhi USB cable (Type-C/Micro) se asani se charge kiya ja sakta hai. • Easy Installation: Is ke saath Magnetic Plates milti hain. Aap ise kisi bhi deewar ya surface par baghair kisi drill ya screws ke chipka sakte hain. • Sleek & Compact Design: Iska modern aur chota design har tarah ke ghar ke dcor ke saath fit baithta hai. Kahan Istemal Karein? • Almari (Wardrobe): Kapre dhoondne ke liye behtareen. • Sidhiyan (Stairs): Raat ko girne se bachne ke liye. • Washroom/Kitchen: Raat ke waqt halki roshni ke liye. • Kids Room: Bachon ke kamre mein night lamp ke taur par. Package Mein Kya Hai? • 1 x Smart Night Light • 2 x Magnetic Adhesive Plates • 1 x USB Charging Cable Quick Tip: Behtareen results ke liye light ko aisi jagah lagayen jahan raat ko guzarne par motion sensor asani se aapko detect kar sakay."
  },
  {
    "id": "tl-high-speed-handheld-fan-infinite-variable-speed-digital-batt",
    "name": "High-Speed Rechargeable Handheld Fan",
    "category": "Gadgets",
    "price": 1450,
    "oldPrice": 0,
    "image": "/api/media/411a88c1-be00-4dba-a8ea-31e60fc41a3e.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/411a88c1-be00-4dba-a8ea-31e60fc41a3e.webp",
        "alt": "High-Speed Rechargeable Handheld Fan"
      },
      {
        "type": "image",
        "src": "/api/media/32b1ccb3-2e96-4944-842a-395a99152667.webp",
        "alt": "High-Speed Rechargeable Handheld Fan"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.8,
    "stock": 49,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Gadgets"
    },
    "description": "Is garmi mein thandak ka maza kahin bhi lein! M11 Handheld Fan sirf aik fan nahi, balkay style aur performance ka behtareen combination hai jo aapko har jagah fresh rakhta hai. Key Features: • 🌀 Infinite Variable Speed: Is fan mein normal fans ki tarah sirf 2 ya 3 button nahi hain. Aap apni marzi ke mutabiq speed ko kam ya zyada kar sakte hain (Infinite control). • 🔢 Digital LED Display: Fan par maujood smart digital display aapko real-time battery percentage aur speed level batata hai, taaky aapko charging ka hamesha pata ho. • 🔋 Rechargeable & Powerful: Long battery life ke sath aane wala ye fan aik baar charge karne par ghanto tak chalta hai. Type-C charging support ke sath. • 🌬️ Strong Airflow: Iska modern turbine design choty size ke bawajood bohat tez hawa deta hai. • 🎒 Sleek & Portable: Compact design ki wajah se aap isay ba-asani apne bag ya pocket mein rakh sakte hain. Travel aur outdoor ke liye best hai. • 💎 Premium Build: Metallic finish aur ergonomic grip isay pakadne mein comfortable aur dikhne mein stylish banati hai. Box Mein Kya Hai? • 1 x M11 Handheld Fan • 1 x Charging Cable • 1 x User Manual Order Karein aur garmi ko bhool jayein!"
  },
  {
    "id": "tl-plokama-live-p11-p19-p24-led-fill-light-panel-professional-p",
    "name": "Plokama LIVE Professional Photography Videography LED Lights",
    "category": "Gadgets",
    "price": 3850,
    "oldPrice": 0,
    "image": "/api/media/6abd1e60-0ba0-4ad5-bee7-5aa825be7df2.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/6abd1e60-0ba0-4ad5-bee7-5aa825be7df2.webp",
        "alt": "Plokama LIVE Professional Photography Videography LED Lights"
      },
      {
        "type": "image",
        "src": "/api/media/838aeb9b-2ab1-469d-a1b8-e8743742e374.webp",
        "alt": "Plokama LIVE Professional Photography Videography LED Lights"
      },
      {
        "type": "image",
        "src": "/api/media/bee35797-a244-477f-990f-e26b4bcb8106.webp",
        "alt": "Plokama LIVE Professional Photography Videography LED Lights"
      }
    ],
    "color": "LIVE P-11 without stand",
    "badge": "",
    "rating": 4.4,
    "stock": 25,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "Gadgets"
    },
    "description": "Apne content creation aur photography ko agle level par le jayen Plokama LIVE-P-- LED Fill Light ke saath. Yeh light khas taur par un logo ke liye banayi gayi hai jo professional lighting chahte hain bina kisi mushkil ke. Key Features (Khasusiyaat): Model: LIVE-P--- Professional Series. Adjustable Brightness & Color: Ismein aapko milti hai adjustable color temperature (Warm white se Cool white tak) taake aap har mahol ke hisab se light set kar saken. Remote Control: Sath diye gaye wireless remote se aap dur khade hokar bhi light ki intensity aur mode badal sakte hain. Sleek & Slim Design: Iska slim panel design na sirf dekhne mein modern hai balki ise carry karna aur set karna bhi bohot asan hai. Multipurpose Use: Best hai YouTube videos, TikTok, Makeup tutorials, Zoom meetings, aur professional photoshoot ke liye. Eye Protection: Iski diffusion technology tez roshni ko naram (soft) banati hai taake aankhon par zor na parre. Technical Specs: Brand: Plokama Power: High-quality LED beads jo kam bijli kharch karte hain. Angle Adjustment: Iska stand mount 180° tak tilt ho sakta hai taake aap har angle se roshni dal saken. Box Mein Kya Hai? 1 x Plokama LIVE-P--- LED Panel 1 x Wireless Remote Control 1 x Power Adapter/Cable"
  },
  {
    "id": "tl-mini-portable-led-baby-projector",
    "name": "Mini Portable LED Baby Projector",
    "category": "Gadgets",
    "price": 6999,
    "oldPrice": 0,
    "image": "/api/media/fc19f7aa-1864-4413-915f-96798b1de1ea.webp",
    "media": [
      {
        "type": "image",
        "src": "/api/media/fc19f7aa-1864-4413-915f-96798b1de1ea.webp",
        "alt": "Mini Portable LED Baby Projector"
      }
    ],
    "color": "Default Title",
    "badge": "",
    "rating": 4.5,
    "stock": 20,
    "specs": {
      "Source": "Tek Lek",
      "Vendor": "Tek Lek",
      "Type": "projector"
    },
    "description": "Apna Cinema Kahin Bhi Le Jayein! Kya aap apne smartphone ya laptop ki choti screen se pareshan hain? Ab waqt hai bade parde ka! Ye Compact & Portable Mini Projector aapke kamre ko ek shandaar home theater mein badal dega. Key Features: Pocket-Sized Portability: Iska size itna chota hai ke ye aapki hatheli (palm) par aa jata hai. Aap isse asani se bag mein rakh kar safar, camping, ya doston ke ghar le ja sakte hain. Big Screen Experience: Chote size ke bawajood, ye aapko ek badi aur saaf screen ka maza deta hai. Movie nights aur gaming ke liye best hai. Multi-Device Connectivity: Ismein HDMI, USB, aur AV ports hain. Aap isse Laptop, Gaming Console (PS5/Xbox), TV Stick, ya USB drive ke sath asani se connect kar sakte hain. Built-in Speaker: Alag se speaker lagane ki zaroorat nahi, ismein apna damdaar sound system maujood hai. Eye Protection: Iski LED light technology aapki aankhon par bojh nahi dalti, jo bacho ke liye cartoons dekhne ka ek safe zariya hai. Feature Details Color Classic Yellow & White Combo Input Ports HDMI, USB, AV, Micro SD Power Source Power Adapter (Included) / Power Bank Support Included in Box Projector, Remote Control, AV Cable, Power Adapter, User Manual"
  }
];
const promotions = collectionDefinitions.map(({ category, image, eyebrow, title, description, cta }) => ({
  eyebrow, title, description, cta,
  image,
  href: `/shop?category=${encodeURIComponent(category)}`,
}));
export const initialBanners = [
  ...["desktop", "mobile"].flatMap((target) =>
    promotions.map((p, i) => ({
      ...p,
      id: target + "-" + i,
      target,
      placement: "main",
      active: true,
    })),
  ),
  {
    ...promotions[1],
    id: "side-toys",
    placement: "side-top",
    target: "desktop",
    active: true,
  },
  {
    ...promotions[0],
    id: "side-watch",
    placement: "side-bottom",
    target: "desktop",
    active: true,
  },
];
