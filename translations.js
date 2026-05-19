const i18n = {
      ar: {
        app_name: "توقعات غسيل السيارة", tagline: "هل أغسل سيارتي اليوم؟",
        verdict_yes: "اغسل سيارتك الآن! ✅", verdict_wait: "انتظر قليلاً ⏳", verdict_no: "لا تغسل الآن ⛔", verdict_caution: "قد تغسل، لكن انتبه 🟡",
        score_label: "درجة الغسيل", best_day_label: "أفضل يوم للغسيل هذا الأسبوع:", best_day_suffix: "— يتبعه {n} أيام صافية",
        survival_label: "ساعات النظافة المتوقعة:", rain_label: "خطر المطر", wind_label: "سرعة الرياح", dust_label: "مستوى الغبار", humidity_label: "الرطوبة",
        loading: "نحلل الطقس فوق {city}...", location_detecting: "جارٍ تحديد موقعك...", location_change: "تغيير الموقع", share_btn: "شارك النتيجة",
        low: "منخفض", medium: "متوسط", high: "مرتفع", extreme: "شديد",
        tip_saudi_shamal: "⚠️ تحقق من تنبيهات رياح الشمال قبل الغسيل", tip_saudi_morning: "☀️ الغسيل الصباحي أفضل — يجف قبل غبار المساء",
        tip_uk_salt: "🧂 ملح الطريق يتلف الطلاء — اغسل بعد كل تساقط للثلوج", tip_india_monsoon: "🌧️ موسم الرياح الموسمية — اغسل بعد توقف المطر",
        tip_uae_humidity: "💧 الرطوبة العالية في المساء قد تترك بقع ماء — اغسل صباحاً", tip_kuwait_summer: "☀️ تجنب الغسيل في شمس الظهيرة الحارقة", tip_de_winter: "❄️ Straßen salz beschädigt den Lack — nach Schnee waschen",
        days: ["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
        how_title: "كيف يعمل الموقع؟", how_desc: "نحلل بيانات الطقس الفورية — المطر والرياح والغبار والرطوبة — لنعطيك توصية دقيقة لأفضل وقت لغسيل سيارتك وتوفير وقتك ومالك. خوارزمياتنا تقارن نماذج هطول الأمطار المحلية مع توقعات الغبار لضمان عدم إفساد غسيلك بعاصفة مفاجئة.",
        blog_title: "نصائح العناية بالسيارة",
        article_1_title: "أفضل وقت لغسل سيارتك بناءً على الطقس",
        article_1_body: "<p style='margin-bottom:1em;'>اختيار أفضل وقت لغسل سيارتك لا يقتصر على إيجاد يوم مشمس. في الواقع، غسل سيارتك في أشعة الشمس المباشرة والقوية يمكن أن يتسبب في جفاف الماء والصابون بسرعة، مما يترك بقع ماء عنيدة. الطقس المثالي لغسيل السيارات هو يوم غائم مع درجات حرارة معتدلة ورياح هادئة.</p><p style='margin-bottom:1em;'>الرياح هي عدو خفي للغسيل الطازج. يمكن ليوم عاصف أن ينفخ الغبار وحبوب اللقاح مباشرة على سيارتك المبللة، مما يفسد عملك الشاق على الفور.</p><p>باستخدام درجة الغسيل الخاصة بنا، يمكنك العثور على النافذة المثالية لضمان بقاء سيارتك نظيفة لفترة أطول.</p>",
        article_2_title: "كم مرة يجب أن تغسل سيارتك؟",
        article_2_body: "<p style='margin-bottom:1em;'>كقاعدة عامة، يوصي الخبراء بغسل سيارتك كل أسبوعين. هذا التكرار كافٍ عادةً لإزالة الأوساخ وفضلات الطيور قبل أن تتلف الطلاء. ومع ذلك، تتغير هذه القاعدة بشكل كبير حسب بيئتك.</p><p style='margin-bottom:1em;'>إذا كنت تعيش في منطقة ذات طقس شتوي قاسي، يمكن لملح الطرق أن يسبب الصدأ. في هذه الظروف، قد تحتاج إلى غسل سيارتك أسبوعيًا. وبالمثل في المناطق الساحلية، يمكن أن يكون الملح مسببًا للتآكل.</p><p>على العكس، إذا كنت تركن في مرآب، فقد تمتد الفترة إلى شهر. التشميع المنتظم يسهل التنظيف.</p>",
        article_3_title: "هل المطر ينظف سيارتك؟ الحقيقة",
        article_3_body: "<p style='margin-bottom:1em;'>من المفاهيم الخاطئة أن العاصفة الممطرة تعمل كغسيل مجاني. هطول الأمطار يغسل بعض الغبار السطحي، لكنه يترك سيارتك أكثر اتساخًا. مياه الأمطار تجمع الملوثات والغبار والضباب الدخاني.</p><p style='margin-bottom:1em;'>عندما تجف المياه القذرة، تترك طبقة من الأوساخ وبقع الماء. علاوة على ذلك، القيادة في المطر تثير رذاذ الطريق الزيتي من السيارات.</p><p>للحفاظ على سيارتك، انتظر فترة من الأيام الجافة لمنح سيارتك غسيلًا يدويًا أو خذها إلى منشأة احترافية.</p>",
        partner_title: "أعلن عن مغسلة سياراتك",
        partner_subtitle: "كن شريكًا معنا واعرض عملك أمام السائقين المحليين عندما يبحثون عن الوقت المناسب لغسل سياراتهم.",
        pkg_basic_title: "أساسي", pkg_basic_price: "$29", pkg_per_month: "/شهر",
        pkg_pro_badge: "الأكثر شعبية", pkg_pro_title: "احترافي", pkg_pro_price: "$79",
        pkg_featured_title: "مميز", pkg_featured_price: "$199",
        pkg_feature_1: "قائمة الدليل المحلي", pkg_feature_2: "موضع قياسي",
        pkg_feature_3: "موضع أولوية", pkg_feature_4: "رابط لموقعك",
        pkg_feature_5: "بانر الصفحة الرئيسية", pkg_feature_6: "راعي حصري للمدينة", pkg_feature_7: "لوحة تحليلات",
        partner_cta: "إرسال استفسار",
        featured_partners_title: "شركاء مميزون",
        privacy_title: "سياسة الخصوصية",
        privacy_body: "نحن نحترم خصوصيتك. نستخدم موقع جهازك فقط لتوفير توقعات طقس دقيقة. لا نقوم بتخزين أو مشاركة موقعك الدقيق مع أي طرف ثالث. باستخدامك الخدمة، توافق على استخدام بيانات الموقع للأداء وشبكات الإعلانات.",
        footer_about: "عن الموقع", footer_privacy: "الخصوصية", clean_hours: "ساعة نظيفة", rain_risk: "خطر المطر",
        dust_warning: "⚠️ تحذير: مستوى غبار شديد — لا تغسل حتى يتحسن الطقس",
        no_window: "⛔ لا يوجد يوم مناسب للغسيل هذا الأسبوع",
        share_x: "إكس (تويتر)", share_wa: "واتساب", products_title: "منتجات العناية بالسيارات الموصى بها",
        prod_shampoo: "شامبو غسيل السيارات", prod_shampoo_desc: "رغوة ممتازة لغسيل بدون خدوش.",
        prod_towels: "مناشف مايكروفايبر", prod_towels_desc: "مناشف فائقة النعومة لتجفيف بدون خطوط.",
        prod_wax: "ملمع وشمع للسيارات", prod_wax_desc: "حماية طويلة الأمد ولمعان عالي.",
        prod_washer: "آلة غسيل بالضغط", prod_washer_desc: "تزيل الأوساخ بسهولة وسرعة.",
        prod_interior: "منظف داخلي", prod_interior_desc: "حافظ على لوحة القيادة والمقاعد نظيفة.",
        prod_wheel: "منظف الإطارات", prod_wheel_desc: "يذيب غبار الفرامل لجنوط لامعة.",
        buy_on_amazon: "شراء من أمازون", share_text_template: "نتيجة غسيل سيارتي اليوم [SCORE]/100 🚗✨ تحقق من نتيجتك على carwashforcast.com #غسيل_سيارات #طقس",
        subscribe_btn: "الحصول على درجة الغسيل اليومية", subscribe_success: "تم الاشتراك! 🔔", log_wash_btn: "سجل هذا الغسيل 💦",
        history_title: "سجل الغسيل", history_empty: "لم يتم تسجيل أي غسيل بعد.", history_reminder: "لقد مرت 14 يومًا منذ آخر غسيل لك! 🚗"
      },
      en: {
        app_name: "Car Wash Forecast", tagline: "Should I wash my car today?",
        verdict_yes: "Wash Your Car Now! ✅", verdict_wait: "Wait a Bit ⏳", verdict_no: "Don't Bother ⛔", verdict_caution: "Maybe, Check First 🟡",
        score_label: "Wash Score", best_day_label: "Best day to wash this week:", best_day_suffix: "— followed by {n} clear days",
        survival_label: "Estimated clean window:", rain_label: "Rain Risk", wind_label: "Wind Speed", dust_label: "Dust Level", humidity_label: "Humidity",
        loading: "Analyzing skies over {city}...", location_detecting: "Detecting your location...", location_change: "Change location", share_btn: "Share Result",
        low: "Low", medium: "Medium", high: "High", extreme: "Extreme",
        tip_saudi_shamal: "⚠️ Check Shamal wind alerts before washing", tip_saudi_morning: "☀️ Morning wash is best — dries before evening dust",
        tip_uk_salt: "🧂 Road salt damages paint — wash after every snowfall", tip_india_monsoon: "🌧️ Monsoon season — wash after rain stops, not before",
        tip_uae_humidity: "💧 High evening humidity can cause water spots — wash in the morning", tip_kuwait_summer: "☀️ Avoid washing in direct midday sun to prevent spots", tip_de_winter: "❄️ Road salt damages paint — wash after snowfall",
        days: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
        how_title: "How does it work?", how_desc: "We analyze real-time weather data — rain probability, wind speed, dust levels, and humidity — to give you a precise recommendation for the best time to wash your car and save your money. Our smart algorithm cross-references hyper-local precipitation models with airborne particulate forecasts to ensure your fresh wash isn't ruined by a sudden storm or dust cloud. We take the guesswork out of car maintenance.",
        blog_title: "Car Care Insights",
        article_1_title: "Best time to wash your car based on weather",
        article_1_body: "<p style='margin-bottom:1em;'>Choosing the best time to wash your car isn't just about finding a sunny day. In fact, washing your car in direct, intense sunlight can cause soap and water to dry too quickly, leaving stubborn water spots and potentially damaging your clear coat. The ideal weather for a car wash is an overcast day with mild temperatures and low wind.</p><p style='margin-bottom:1em;'>Wind is a silent enemy of a fresh car wash. A breezy day can blow dust, pollen, and debris directly onto your wet car, instantly ruining your hard work. Always check the wind speed before breaking out the soap.</p><p>By using our wash score, you can find the perfect multi-day window of clear, calm, and mild weather to ensure your car stays cleaner, longer.</p>",
        article_2_title: "How often should you wash your car?",
        article_2_body: "<p style='margin-bottom:1em;'>As a general rule of thumb, experts recommend washing your car every two weeks. This frequency is usually sufficient to remove dirt, bird droppings, tree sap, and road grime before they have a chance to degrade your paint's clear coat. However, this rule changes drastically depending on your environment.</p><p style='margin-bottom:1em;'>If you live in an area with heavy winter weather, road salt can quickly cause rust and corrosion. In these conditions, you may need to wash your car weekly, paying special attention to the undercarriage. Similarly, if you live in a coastal area, salt from the ocean air can also be corrosive.</p><p>Conversely, if you park in a garage, live in a mild climate, and don't commute daily, you might be able to stretch the time to a month. Regular waxing also adds a protective layer.</p>",
        article_3_title: "Does rain clean your car? The truth",
        article_3_body: "<p style='margin-bottom:1em;'>It's a common misconception that a heavy rainstorm acts as a free car wash. While a downpour might rinse away some loose surface dust, it actually leaves your car dirtier in the long run. Rainwater is not pure; as it falls through the atmosphere, it collects pollutants, dust, and smog.</p><p style='margin-bottom:1em;'>When this dirty rainwater hits your car and eventually dries, it leaves behind a layer of grime and mineral deposits known as water spots. These spots can be incredibly difficult to remove and can even etch into your paint if left in the hot sun. Furthermore, driving in the rain kicks up oily, dirty road spray.</p><p>If you want to keep your car looking its best, wait for a stretch of dry, clear days to give your vehicle a proper hand wash or take it to a professional facility.</p>",
        partner_title: "Advertise Your Car Wash",
        partner_subtitle: "Partner with us and get your business in front of local drivers exactly when they are looking to wash their cars.",
        pkg_basic_title: "Basic", pkg_basic_price: "$29", pkg_per_month: "/mo",
        pkg_pro_badge: "MOST POPULAR", pkg_pro_title: "Pro", pkg_pro_price: "$79",
        pkg_featured_title: "Featured", pkg_featured_price: "$199",
        pkg_feature_1: "Local Directory Listing", pkg_feature_2: "Standard Placement",
        pkg_feature_3: "Priority Placement", pkg_feature_4: "Link to your website",
        pkg_feature_5: "Homepage Banner", pkg_feature_6: "Exclusive City Sponsor", pkg_feature_7: "Analytics Dashboard",
        partner_cta: "Send Inquiry",
        featured_partners_title: "Featured Partners",
        privacy_title: "Privacy Policy",
        privacy_body: "We respect your privacy. carwashforcast.com uses your device's location solely to provide accurate weather forecasts for your area. We do not store, track, or share your exact location data with any third parties. By using this service, you consent to our use of location data for functionality and our partner networks for personalized advertisements.",
        footer_about: "About", footer_privacy: "Privacy", clean_hours: "clean", rain_risk: "Rain risk",
        dust_warning: "⚠️ Extreme dust warning — avoid washing your car until conditions improve",
        no_window: "⛔ No good wash window this week — check back later",
        share_x: "X (Twitter)", share_wa: "WhatsApp", products_title: "Recommended Car Care Products",
        prod_shampoo: "Car Wash Shampoo", prod_shampoo_desc: "Premium suds for a scratch-free wash.",
        prod_towels: "Microfiber Towels", prod_towels_desc: "Ultra-soft towels for streak-free drying.",
        prod_wax: "Car Wax Polish", prod_wax_desc: "Long-lasting protection and high gloss shine.",
        prod_washer: "Pressure Washer", prod_washer_desc: "Effortlessly blast away dirt and grime.",
        prod_interior: "Interior Cleaner", prod_interior_desc: "Keep your dashboard and seats spotless.",
        prod_wheel: "Wheel Cleaner", prod_wheel_desc: "Dissolve brake dust for shiny rims.",
        buy_on_amazon: "Buy on Amazon", share_text_template: "My Car Wash Score today is [SCORE]/100 🚗✨ Check yours at carwashforcast.com #CarWash #Weather",
        subscribe_btn: "Get Daily Wash Score", subscribe_success: "You're subscribed! 🔔", log_wash_btn: "Log This Wash 💦",
        history_title: "Wash History", history_empty: "No washes logged yet.", history_reminder: "It's been 14 days since your last wash! 🚗"
      }
    };
    i18n.fr = { ...i18n.en, app_name: "Prévision Lavage Auto", tagline: "Dois-je laver ma voiture aujourd'hui?", verdict_yes: "Lavez maintenant! ✅", verdict_wait: "Attendez ⏳", verdict_no: "Ne vous donnez pas la peine ⛔", score_label: "Score de lavage", how_title: "Comment ça marche ?", blog_title: "Conseils d'entretien automobile", partner_title: "Faites la promotion de votre station", privacy_title: "Politique de confidentialité",
      how_desc: "Nous analysons les données météorologiques en temps réel — probabilité de pluie, vitesse du vent, niveaux de poussière et humidité — pour vous donner une recommandation précise sur le meilleur moment pour laver votre voiture.",
      article_1_title: "Le meilleur moment pour laver votre voiture", article_1_body: "<p style='margin-bottom:1em;'>Laver votre voiture sous un soleil direct peut faire sécher l'eau et le savon trop rapidement, laissant des taches d'eau tenaces. La météo idéale est une journée couverte avec peu de vent.</p><p style='margin-bottom:1em;'>Le vent est un ennemi silencieux. Une journée venteuse peut souffler de la poussière directement sur votre voiture mouillée.</p><p>En utilisant notre score, vous pouvez trouver la période idéale pour garder votre voiture propre.</p>",
      article_2_title: "À quelle fréquence faut-il laver sa voiture ?", article_2_body: "<p style='margin-bottom:1em;'>En règle générale, il est recommandé de laver sa voiture toutes les deux semaines. Cela suffit pour éliminer la saleté avant qu'elle ne dégrade la peinture.</p><p style='margin-bottom:1em;'>Cependant, cela dépend de votre environnement. Le sel de déneigement peut provoquer de la rouille, nécessitant des lavages hebdomadaires.</p><p>Si votre voiture est dans un garage, vous pouvez espacer les lavages à un mois.</p>",
      article_3_title: "La pluie lave-t-elle votre voiture ?", article_3_body: "<p style='margin-bottom:1em;'>C'est une idée fausse. L'eau de pluie n'est pas pure : elle recueille les polluants atmosphériques.</p><p style='margin-bottom:1em;'>Lorsqu'elle sèche, elle laisse une couche de crasse. Conduire sous la pluie projette aussi de l'eau sale.</p><p>Attendez des jours secs pour offrir un vrai lavage à votre voiture.</p>",
      partner_subtitle: "Associez-vous à nous et présentez votre entreprise aux conducteurs locaux.", pkg_basic_title: "Basique", pkg_basic_price: "29 €", pkg_per_month: "/mois",
      pkg_pro_badge: "POPULAIRE", pkg_pro_title: "Pro", pkg_pro_price: "79 €", pkg_featured_title: "En vedette", pkg_featured_price: "199 €",
      pkg_feature_1: "Annuaire local", pkg_feature_2: "Placement standard", pkg_feature_3: "Placement prioritaire", pkg_feature_4: "Lien vers votre site",
      pkg_feature_5: "Bannière", pkg_feature_6: "Sponsor de la ville", pkg_feature_7: "Tableau de bord", partner_cta: "Demander", featured_partners_title: "Partenaires en vedette",
      privacy_body: "Nous respectons votre vie privée. Nous n'utilisons votre localisation que pour la météo. Aucune donnée n'est partagée.",
      share_x: "X (Twitter)", share_wa: "WhatsApp", products_title: "Produits d'Entretien Automobile Recommandés",
      prod_shampoo: "Shampoing Auto", prod_shampoo_desc: "Mousse premium pour un lavage sans rayures.",
      prod_towels: "Serviettes en Microfibre", prod_towels_desc: "Serviettes ultra-douces pour un séchage sans traces.",
      prod_wax: "Cire de Polish", prod_wax_desc: "Protection longue durée et brillance intense.",
      prod_washer: "Nettoyeur Haute Pression", prod_washer_desc: "Éliminez la saleté et la crasse sans effort.",
      prod_interior: "Nettoyant Intérieur", prod_interior_desc: "Gardez votre tableau de bord et vos sièges impeccables.",
      prod_wheel: "Nettoyant Jantes", prod_wheel_desc: "Dissout la poussière de frein pour des jantes brillantes.",
      buy_on_amazon: "Acheter sur Amazon", share_text_template: "Mon score de lavage auto aujourd'hui est [SCORE]/100 🚗✨ Vérifiez le vôtre sur carwashforcast.com #LavageAuto #Météo",
      subscribe_btn: "Recevoir le Score Quotidien", subscribe_success: "Vous êtes abonné ! 🔔", log_wash_btn: "Enregistrer ce Lavage 💦",
      history_title: "Historique de Lavage", history_empty: "Aucun lavage enregistré pour le moment.", history_reminder: "Cela fait 14 jours depuis votre dernier lavage ! 🚗"
    };
    i18n.es = { ...i18n.en, app_name: "Pronóstico Lavado Auto", tagline: "¿Debo lavar mi coche hoy?", verdict_yes: "¡Lava ahora! ✅", verdict_wait: "Espera ⏳", verdict_no: "No te molestes ⛔", score_label: "Puntuación de lavado", how_title: "¿Cómo funciona?", blog_title: "Consejos para cuidar su coche", partner_title: "Anuncie su autolavado", privacy_title: "Política de Privacidad",
      how_desc: "Analizamos datos meteorológicos en tiempo real para brindarle una recomendación precisa sobre el mejor momento para lavar su automóvil.",
      article_1_title: "El mejor momento para lavar su coche", article_1_body: "<p style='margin-bottom:1em;'>Lavar su automóvil bajo luz solar directa puede dejar manchas de agua obstinadas. El clima ideal es un día nublado con poco viento.</p><p style='margin-bottom:1em;'>El viento puede arrojar polvo sobre su coche mojado, arruinando su trabajo.</p><p>Al usar nuestra puntuación, puede encontrar la ventana perfecta.</p>",
      article_2_title: "¿Con qué frecuencia debe lavar su coche?", article_2_body: "<p style='margin-bottom:1em;'>Los expertos recomiendan lavarlo cada dos semanas. Esto suele ser suficiente para eliminar la suciedad antes de que dañen la pintura.</p><p style='margin-bottom:1em;'>Si vive en un clima invernal, la sal de la carretera puede requerir un lavado semanal.</p><p>Si aparca en un garaje, podría extender el tiempo a un mes.</p>",
      article_3_title: "¿La lluvia limpia su coche?", article_3_body: "<p style='margin-bottom:1em;'>Es un error común. El agua de lluvia no es pura; recoge contaminantes y polvo.</p><p style='margin-bottom:1em;'>Cuando se seca, deja una capa de mugre. Además, conducir bajo la lluvia levanta agua sucia.</p><p>Espere a tener días secos para darle un lavado adecuado.</p>",
      partner_subtitle: "Asóciese con nosotros y muestre su negocio a los conductores locales.", pkg_basic_title: "Básico", pkg_basic_price: "29 €", pkg_per_month: "/mes",
      pkg_pro_badge: "POPULAR", pkg_pro_title: "Pro", pkg_pro_price: "79 €", pkg_featured_title: "Destacado", pkg_featured_price: "199 €",
      pkg_feature_1: "Directorio local", pkg_feature_2: "Ubicación estándar", pkg_feature_3: "Ubicación prioritaria", pkg_feature_4: "Enlace a su sitio web",
      pkg_feature_5: "Banner", pkg_feature_6: "Patrocinador exclusivo", pkg_feature_7: "Panel de análisis", partner_cta: "Consultar", featured_partners_title: "Socios destacados",
      privacy_body: "Respetamos su privacidad. Utilizamos su ubicación únicamente para pronósticos. No compartimos sus datos con terceros.",
      share_x: "X (Twitter)", share_wa: "WhatsApp", products_title: "Productos Recomendados para el Cuidado del Coche",
      prod_shampoo: "Champú para Coches", prod_shampoo_desc: "Espuma premium para un lavado sin rasguños.",
      prod_towels: "Toallas de Microfibra", prod_towels_desc: "Toallas ultrasuaves para un secado sin marcas.",
      prod_wax: "Cera Pulidora", prod_wax_desc: "Protección duradera y brillo intenso.",
      prod_washer: "Hidrolimpiadora", prod_washer_desc: "Elimina la suciedad y la mugre sin esfuerzo.",
      prod_interior: "Limpiador de Interiores", prod_interior_desc: "Mantén tu salpicadero y asientos impecables.",
      prod_wheel: "Limpiallantas", prod_wheel_desc: "Disuelve el polvo de frenos para llantas brillantes.",
      buy_on_amazon: "Comprar en Amazon", share_text_template: "Mi puntuación de lavado hoy es [SCORE]/100 🚗✨ Comprueba la tuya en carwashforcast.com #LavadoAuto #Clima",
      subscribe_btn: "Recibir Puntuación Diaria", subscribe_success: "¡Te has suscrito! 🔔", log_wash_btn: "Registrar este Lavado 💦",
      history_title: "Historial de Lavado", history_empty: "Aún no hay lavados registrados.", history_reminder: "¡Han pasado 14 días desde tu último lavado! 🚗"
    };
    i18n.de = { ...i18n.en, app_name: "Autowäsche Vorhersage", tagline: "Soll ich mein Auto heute waschen?", verdict_yes: "Auto jetzt waschen! ✅", verdict_wait: "Noch etwas warten ⏳", verdict_no: "Nicht der Mühe wert ⛔", score_label: "Waschbewertung", how_title: "Wie funktioniert es?", blog_title: "Autopflege-Tipps", partner_title: "Werben Sie für Ihre Autowäsche", privacy_title: "Datenschutzerklärung",
      how_desc: "Wir analysieren Echtzeit-Wetterdaten, um Ihnen eine genaue Empfehlung für den besten Zeitpunkt zum Autowaschen zu geben.",
      article_1_title: "Die beste Zeit zum Autowaschen", article_1_body: "<p style='margin-bottom:1em;'>Das Waschen bei starker Sonneneinstrahlung kann Wasserflecken hinterlassen. Das ideale Wetter ist ein bedeckter Tag mit wenig Wind.</p><p style='margin-bottom:1em;'>Ein windiger Tag kann Staub direkt auf das nasse Auto blasen.</p><p>Mit unserem Wasch-Score finden Sie das perfekte Zeitfenster.</p>",
      article_2_title: "Wie oft sollten Sie Ihr Auto waschen?", article_2_body: "<p style='margin-bottom:1em;'>Experten empfehlen alle zwei Wochen. Dies reicht normalerweise aus, um Schmutz zu entfernen, bevor der Lack angegriffen wird.</p><p style='margin-bottom:1em;'>In Regionen mit Winterwetter kann Streusalz eine wöchentliche Wäsche erfordern.</p><p>Wenn Sie Ihr Auto in einer Garage parken, können Sie den Abstand auf einen Monat ausdehnen.</p>",
      article_3_title: "Reinigt Regen Ihr Auto?", article_3_body: "<p style='margin-bottom:1em;'>Ein häufiger Irrglaube. Regenwasser ist nicht rein; es sammelt Schadstoffe und Staub.</p><p style='margin-bottom:1em;'>Wenn dieses schmutzige Regenwasser trocknet, hinterlässt es Schmutzschichten.</p><p>Warten Sie auf trockene Tage für eine richtige Handwäsche.</p>",
      partner_subtitle: "Arbeiten Sie mit uns zusammen und präsentieren Sie Ihr Unternehmen lokalen Fahrern.", pkg_basic_title: "Basis", pkg_basic_price: "29 €", pkg_per_month: "/Monat",
      pkg_pro_badge: "BELIEBTEST", pkg_pro_title: "Pro", pkg_pro_price: "79 €", pkg_featured_title: "Empfohlen", pkg_featured_price: "199 €",
      pkg_feature_1: "Lokales Verzeichnis", pkg_feature_2: "Standardplatzierung", pkg_feature_3: "Vorrangige Platzierung", pkg_feature_4: "Link zur Website",
      pkg_feature_5: "Homepage-Banner", pkg_feature_6: "Stadtsponsor", pkg_feature_7: "Analyse-Dashboard", partner_cta: "Anfragen", featured_partners_title: "Ausgewählte Partner",
      privacy_body: "Wir respektieren Ihre Privatsphäre. Wir nutzen Ihren Standort ausschließlich für Wetterdaten. Daten werden nicht geteilt.",
      share_x: "X (Twitter)", share_wa: "WhatsApp", products_title: "Empfohlene Autopflegeprodukte",
      prod_shampoo: "Autoshampoo", prod_shampoo_desc: "Premium-Schaum für eine kratzfreie Wäsche.",
      prod_towels: "Mikrofasertücher", prod_towels_desc: "Ultraweiche Tücher für streifenfreies Trocknen.",
      prod_wax: "Autowachs-Politur", prod_wax_desc: "Langanhaltender Schutz und Hochglanz.",
      prod_washer: "Hochdruckreiniger", prod_washer_desc: "Müheloses Entfernen von Schmutz und Dreck.",
      prod_interior: "Innenraumreiniger", prod_interior_desc: "Halten Sie Armaturenbrett und Sitze makellos.",
      prod_wheel: "Felgenreiniger", prod_wheel_desc: "Löst Bremsstaub für glänzende Felgen.",
      buy_on_amazon: "Bei Amazon kaufen", share_text_template: "Mein Autowaschergebnis heute ist [SCORE]/100 🚗✨ Prüfe deins auf carwashforcast.com #Autowäsche #Wetter",
      subscribe_btn: "Tägliche Waschbewertung erhalten", subscribe_success: "Du bist abonniert! 🔔", log_wash_btn: "Diese Wäsche protokollieren 💦",
      history_title: "Waschhistorie", history_empty: "Noch keine Wäschen protokolliert.", history_reminder: "Es ist 14 Tage her seit deiner letzten Wäsche! 🚗"
    };
    i18n.tr = { ...i18n.en, app_name: "Araç Yıkama Tahmini", tagline: "Arabamı bugün yıkamalı mıyım?", verdict_yes: "Şimdi Yıkayın! ✅", verdict_wait: "Biraz Bekleyin ⏳", verdict_no: "Zahmet Etmeyin ⛔", score_label: "Yıkama Puanı", how_title: "Nasıl çalışır?", blog_title: "Araç Bakım İpuçları", partner_title: "Oto Yıkamanızı Tanıtın", privacy_title: "Gizlilik Politikası",
      how_desc: "Gerçek zamanlı hava durumu verilerini analiz ederek aracınızı yıkamak için en iyi zamanı belirleriz.",
      article_1_title: "Hava durumuna göre araba yıkamak için en iyi zaman", article_1_body: "<p style='margin-bottom:1em;'>Aracınızı yoğun güneş ışığında yıkamak inatçı su lekelerine yol açabilir. İdeal hava, bulutlu ve rüzgarsız bir gündür.</p><p style='margin-bottom:1em;'>Rüzgarlı bir gün, tozu doğrudan ıslak arabanıza üfleyebilir.</p><p>Puanımızı kullanarak mükemmel zaman aralığını bulabilirsiniz.</p>",
      article_2_title: "Arabanızı ne sıklıkla yıkamalısınız?", article_2_body: "<p style='margin-bottom:1em;'>Uzmanlar iki haftada bir yıkamanızı önerir. Bu, kirin boyaya zarar vermeden temizlenmesi için yeterlidir.</p><p style='margin-bottom:1em;'>Kış şartlarında yol tuzu haftalık yıkama gerektirebilir.</p><p>Arabanızı bir garaja park ediyorsanız bu süreyi bir aya çıkarabilirsiniz.</p>",
      article_3_title: "Yağmur arabanızı temizler mi?", article_3_body: "<p style='margin-bottom:1em;'>Bu yaygın bir yanılgıdır. Yağmur suyu saf değildir; kirleticileri ve tozu toplar.</p><p style='margin-bottom:1em;'>Kuruduğunda ardında bir kir tabakası bırakır.</p><p>Araç temizliği için kurak günlerin geçmesini bekleyin.</p>",
      partner_subtitle: "Bizimle ortak olun ve işletmenizi yerel sürücülerin önüne çıkarın.", pkg_basic_title: "Temel", pkg_basic_price: "29 ₺", pkg_per_month: "/ay",
      pkg_pro_badge: "POPÜLER", pkg_pro_title: "Pro", pkg_pro_price: "79 ₺", pkg_featured_title: "Öne Çıkan", pkg_featured_price: "199 ₺",
      pkg_feature_1: "Yerel Dizin", pkg_feature_2: "Standart Yerleşim", pkg_feature_3: "Öncelikli Yerleşim", pkg_feature_4: "Web sitesi bağlantısı",
      pkg_feature_5: "Ana Sayfa Afişi", pkg_feature_6: "Özel Sponsor", pkg_feature_7: "Analitik Paneli", partner_cta: "İletişime Geç", featured_partners_title: "Öne Çıkan Ortaklar",
      privacy_body: "Gizliliğinize saygı duyuyoruz. Konumunuzu yalnızca hava durumu için kullanırız. Verilerinizi kimseyle paylaşmayız.",
      share_x: "X (Twitter)", share_wa: "WhatsApp", products_title: "Önerilen Araç Bakım Ürünleri",
      prod_shampoo: "Araç Yıkama Şampuanı", prod_shampoo_desc: "Çiziksiz bir yıkama için premium köpük.",
      prod_towels: "Mikrofiber Havlular", prod_towels_desc: "Lekesiz kurulama için ultra yumuşak havlular.",
      prod_wax: "Araç Cilası", prod_wax_desc: "Uzun ömürlü koruma ve yüksek parlaklık.",
      prod_washer: "Basınçlı Yıkama Makinesi", prod_washer_desc: "Kir ve çamuru zahmetsizce temizler.",
      prod_interior: "İç Temizleyici", prod_interior_desc: "Ön panelinizi ve koltuklarınızı tertemiz tutar.",
      prod_wheel: "Jant Temizleyici", prod_wheel_desc: "Parlak jantlar için fren tozunu çözer.",
      buy_on_amazon: "Amazon'dan Satın Al", share_text_template: "Bugünkü araba yıkama skorum [SCORE]/100 🚗✨ Seninkini kontrol et carwashforcast.com #ArabaYıkama #Hava",
      subscribe_btn: "Günlük Yıkama Puanını Al", subscribe_success: "Abone oldunuz! 🔔", log_wash_btn: "Bu Yıkamayı Kaydet 💦",
      history_title: "Yıkama Geçmişi", history_empty: "Henüz kayıtlı yıkama yok.", history_reminder: "Son yıkamanızdan bu yana 14 gün geçti! 🚗"
    };

let manualLangSelection = null;
let currentLang = 'en';
let isRTL = false;

function detectInitialLanguage(defaultCityLang) {
  if (manualLangSelection) return manualLangSelection;
  if (defaultCityLang) return defaultCityLang;
  let browserLang = navigator.language.split('-')[0];
  if (['ar', 'en', 'fr', 'de', 'es', 'tr'].includes(browserLang)) return browserLang;
  return 'en';
}

function applyTranslations() {
  isRTL = currentLang === 'ar';
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang] && i18n[currentLang][key]) {
      el.innerHTML = i18n[currentLang][key];
    }
  });
  if (i18n[currentLang].app_name) {
    document.title = i18n[currentLang].app_name + ' — ' + i18n[currentLang].tagline;
  }
}

function changeLanguage(lang) {
  manualLangSelection = lang;
  currentLang = lang;
  applyTranslations();
  if (typeof weatherData !== 'undefined' && weatherData) {
    if (typeof renderAll === 'function') renderAll(weatherData, typeof airData !== 'undefined' ? airData : null);
  }
}
