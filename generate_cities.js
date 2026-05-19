const fs = require('fs');
const path = require('path');

const cities = [
  {
    filename: 'riyadh.html', city: 'Riyadh', cc: 'SA', lat: 24.7136, lon: 46.6753,
    intro: "Welcome to the ultimate car wash forecast for Riyadh! Located in the heart of the Arabian Peninsula, Riyadh's arid desert climate means that keeping your car clean is a constant battle against dust and occasional sudden downpours. Sandstorms can undo a fresh wash in minutes, which makes checking the weather beforehand essential. Here at CarWashForcast.com, we analyze real-time data including dust levels, wind speeds, and precipitation chances specifically for Riyadh. Whether you're driving down King Fahd Road or parked in the Diplomatic Quarter, you shouldn't waste your money on a wash if a dust storm is looming. Check our reliable Riyadh car wash score below to find the perfect day to make your vehicle shine."
  },
  {
    filename: 'dubai.html', city: 'Dubai', cc: 'AE', lat: 25.2048, lon: 55.2708,
    intro: "Planning a car wash in Dubai? Known for its stunning skyline and luxury vehicles, Dubai also features a hot desert climate where fine sand and occasional winter rains can quickly dirty your car. The mix of high humidity near the coast and dusty winds inland requires careful planning for your next car wash. Don't let a sudden shamal (sandstorm) ruin your freshly polished paint! Our Dubai car wash forecast analyzes real-time meteorological data—including sand, wind, and rain probability—to give you an accurate wash score. Keep your ride looking pristine on Sheikh Zayed Road by checking our tailored forecast before heading to the wash station."
  },
  {
    filename: 'jeddah.html', city: 'Jeddah', cc: 'SA', lat: 21.4858, lon: 39.1925,
    intro: "Welcome to the Jeddah car wash forecast! As a bustling port city on the Red Sea, Jeddah experiences a unique climate characterized by high humidity, salty sea breezes, and seasonal rains. This combination can leave a sticky, damaging residue on your vehicle's exterior if not washed correctly and at the right time. Our specialized forecast for Jeddah tracks rain probability, dust levels, and humidity to help you avoid washing your car right before a humid, dusty evening or an unexpected shower. Save time and protect your car's finish by checking our accurate wash recommendation below before you grab the soap and bucket."
  },
  {
    filename: 'cairo.html', city: 'Cairo', cc: 'EG', lat: 30.0444, lon: 31.2357,
    intro: "Should you wash your car in Cairo today? Egypt's capital is a vibrant, bustling metropolis, but its location near the Sahara Desert means airborne dust and sand are part of daily life. The Khamsin winds in spring can drop heavy dust on your vehicle in hours, making car washing a strategic chore. At CarWashForcast.com, we provide a localized forecast for Cairo that analyzes dust concentrations, wind speeds, and rare rain chances. Don't waste your money washing your car when a dust storm is just around the corner. Use our Cairo wash score to find the optimal clear-weather window to keep your car looking brand new on the bustling streets."
  },
  {
    filename: 'istanbul.html', city: 'Istanbul', cc: 'TR', lat: 41.0082, lon: 28.9784,
    intro: "Welcome to the Istanbul car wash forecast! Straddling two continents, Istanbul has a transitional Mediterranean climate with distinct seasons. Sudden rain showers, coastal humidity from the Bosphorus, and urban dust can quickly ruin a fresh car wash. Whether you are driving in the European or Asian side, timing your car wash is essential to save money and keep your vehicle clean. We analyze local Istanbul weather data—including rain probability, wind, and dust—to provide a reliable wash score. Don't get caught washing your car just hours before a rainstorm rolling in from the Black Sea. Check our daily recommendation to pick the perfect day!"
  },
  {
    filename: 'paris.html', city: 'Paris', cc: 'FR', lat: 48.8566, lon: 2.3522,
    intro: "Planning to wash your car in Paris? The City of Light has an oceanic climate, meaning frequent, unpredictable rain showers are common throughout the year. There's nothing more frustrating than spending money on a premium car wash only to have it rained on while driving down the Champs-Élysées the very next day. Our Paris car wash forecast takes the guesswork out of the equation. We process real-time precipitation, wind, and humidity data to give you an accurate wash score. Check our forecast below to find the longest dry spell this week and ensure your car stays brilliantly clean for as long as possible."
  },
  {
    filename: 'berlin.html', city: 'Berlin', cc: 'DE', lat: 52.5200, lon: 13.4050,
    intro: "Welcome to the Berlin car wash forecast! Berlin's moderate continental climate brings warm summers and cold, damp winters. With regular rain showers, winter road salt, and autumn leaves, your car is constantly exposed to elements that ruin its shine. Washing your car at the wrong time is a waste of effort and money. Our specialized Berlin forecast analyzes real-time weather data, focusing on precipitation chances and temperature drops, to give you a precise wash score. Whether you're cruising down the Autobahn or navigating city traffic, use our tool to find the optimal dry window and keep your vehicle perfectly clean."
  },
  {
    filename: 'london.html', city: 'London', cc: 'GB', lat: 51.5074, lon: -0.1278,
    intro: "Should you wash your car in London today? London's famous temperate maritime climate means rain is a year-round possibility. Getting a car wash right before a classic London drizzle is a frustrating waste of money. That's why we created this tailored forecast for London drivers. We analyze the probability of precipitation, wind speeds, and general weather conditions to calculate a precise wash score. Don't risk washing your car if the skies are about to open up. Check our real-time London car wash recommendation below to find the best dry days this week and keep your car sparkling on the rainy streets."
  },
  {
    filename: 'madrid.html', city: 'Madrid', cc: 'ES', lat: 40.4168, lon: -3.7038,
    intro: "Welcome to the Madrid car wash forecast! As a city with a Mediterranean climate transitioning into semi-arid, Madrid enjoys hot, dry summers and cool winters. While rain is less frequent than in northern Europe, Saharan dust (calima) occasionally sweeps in, covering everything in a fine layer of mud if it rains. Washing your car just before a calima event is a disaster. Our Madrid forecast tracks not only rain but also dust and wind levels to provide you with a reliable wash score. Check our daily recommendation below to make sure you wash your car on a perfectly clear, dust-free day in the Spanish capital."
  },
  {
    filename: 'new-york.html', city: 'New York', cc: 'US', lat: 40.7128, lon: -74.0060,
    intro: "Planning a car wash in New York City? The NYC metropolitan area has a humid subtropical climate, bringing everything from sudden summer thunderstorms to winter snow and road salt. The volatile weather means timing your car wash is crucial to maintaining your vehicle's paint and avoiding wasted money. Our New York car wash forecast analyzes real-time rain probability, snow risks, and wind data to generate a highly accurate wash score. Whether you're commuting through Manhattan or parked in the outer boroughs, check our 7-day forecast to find the perfect weather window and keep your car looking flawless."
  }
];

const templatePath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(templatePath, 'utf-8');

cities.forEach(city => {
  let cityHtml = indexHtml;

  // Replace Title
  cityHtml = cityHtml.replace(
    /<title>.*?<\/title>/,
    `<title>Car Wash Forecast ${city.city} — Best Time to Wash Your Car</title>`
  );

  // Replace meta descriptions
  cityHtml = cityHtml.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="Check the real-time car wash forecast for ${city.city}. Find out the exact probability of rain, dust, and wind to know the best day to wash your car in ${city.city}." />`
  );

  // Replace meta keywords
  cityHtml = cityHtml.replace(
    /<meta name="keywords" content=".*?" \/>/,
    `<meta name="keywords" content="car wash forecast ${city.city}, should I wash my car today ${city.city}, car wash weather ${city.city}, best day to wash car ${city.city}" />`
  );

  // Replace Canonical
  cityHtml = cityHtml.replace(
    /<link rel="canonical" href="https:\/\/carwashforcast\.com\/" \/>/,
    `<link rel="canonical" href="https://carwashforcast.com/${city.filename.replace('.html', '')}" />`
  );

  // Replace OG tags
  cityHtml = cityHtml.replace(
    /<meta property="og:url" content="https:\/\/carwashforcast\.com\/" \/>/,
    `<meta property="og:url" content="https://carwashforcast.com/${city.filename.replace('.html', '')}" />`
  );
  cityHtml = cityHtml.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="Car Wash Forecast ${city.city} — Should I Wash My Car Today?" />`
  );
  cityHtml = cityHtml.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="Check if today is the right time to wash your car in ${city.city}. Real-time rain and dust analysis tailored for your city." />`
  );

  // Replace Twitter tags
  cityHtml = cityHtml.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="Car Wash Forecast ${city.city} — Should I Wash My Car Today?" />`
  );
  cityHtml = cityHtml.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="Free real-time car wash weather forecast for ${city.city}. Avoid wasting money washing before rain!" />`
  );

  // Inject Intro Paragraph
  const introHtml = `
      <section style="max-width:800px; margin:var(--space-8) auto 0 auto; padding:0 var(--space-4);">
        <div class="glass-card" style="padding:var(--space-6); border-radius:var(--radius-xl);">
          <h1 style="font-size:var(--text-xl); margin-bottom:var(--space-4);" data-i18n="hero_title">Car Wash Forecast for ${city.city}</h1>
          <p style="opacity:0.9; line-height: 1.8; font-size:var(--text-base);" data-i18n="hero_intro_${city.city.toLowerCase().replace(/ /g, '_')}">
            ${city.intro}
          </p>
        </div>
      </section>
  `;
  cityHtml = cityHtml.replace(
    /<main>/,
    `<main>\n${introHtml}`
  );

  // Replace the initialization logic to hardcode the location
  // We want to replace `detectLocation();` with `loadDataForLocation(lat, lon, "city", "cc");`
  cityHtml = cityHtml.replace(
    /detectLocation\(\);/,
    `loadDataForLocation(${city.lat}, ${city.lon}, "${city.city}", "${city.cc}");`
  );

  // Default Arabic for specific cities
  if (['riyadh.html', 'dubai.html', 'jeddah.html', 'cairo.html'].includes(city.filename)) {
    cityHtml = cityHtml.replace(
      /let defaultCityLang = null;/,
      `let defaultCityLang = 'ar';`
    );
  }

  fs.writeFileSync(path.join(__dirname, city.filename), cityHtml, 'utf-8');
  console.log(`Generated ${city.filename}`);
});
