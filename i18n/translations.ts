export type Language = "lv" | "ru" | "en";

// Helper type to ensure type safety if needed, but for now we'll use loose typing for nested objects
export type TranslationKey = string;

export const translations = {
  lv: {
    nav: {
      about: "PAR MUMS",
      team: "KOMANDA",
      services: "PAKALPOJUMI",
      shop: "VEIKALS",
      blog: "BLOGS",
      contacts: "KONTAKTI",
      subtitle: "EVENT AGENCY"
    },
    blog: {
      title: "BLOGS",
      loading: "Ielādē...",
      empty: "Nav bloga ierakstu",
      readMore: "Lasīt vairāk",
      backToList: "Atpakaļ uz blogu",
      notFound: "Ieraksts nav atrasts"
    },
    shop: {
      title: "MERČENDAIZINGS",
      subtitle: "Stils, kas runā bez vārdiem. Iegādājies mūsu ekskluzīvo atribūtiku un dāvanu kartes.",
      add: "PIEVIENOT GROZAM",
      empty: "Pašlaik nav pieejamu produktu",
      all: "VISI",
      search: "Meklēt…",
      from: "No",
      outOfStock: "Nav noliktavā",
      selectOption: "Izvēlēties opciju",
      backToShop: "Atpakaļ uz veikalu",
      qty: "Daudzums",
      products: {
        tshirt: { name: "D.O.M. T-Krekls", desc: "Augstas kvalitātes kokvilnas krekls ar minimālistisku logo dizainu." },
        hoodie: { name: "D.O.M. Hūdijs", desc: "Premium klases hūdijs vēsajiem vasaras vakariem." },
        gift50: { name: "Dāvanu karte €50", desc: "Dāvana neaizmirstamam pasākumam vai bāra apmeklējumam." },
        gift100: { name: "Dāvanu karte €100", desc: "Ekskluzīva dāvana īpašiem mirkļiem." }
      },
      cart: {
        title: "IEPIRKUMU GROZS",
        empty: "Jūsu grozs ir tukšs",
        total: "Kopā",
        checkout: "NOFORMĒT PIRKUMU"
      }
    },
    checkout: {
      title: "Checkout",
      billing: "Norēķinu informācija",
      firstName: "Vārds",
      lastName: "Uzvārds",
      email: "E-pasts",
      phone: "Tālrunis",
      address: "Adrese",
      city: "Pilsēta",
      country: "Valsts",
      placeOrder: "APSTIPRINĀT PASŪTĪJUMU",
      processing: "Apstrādā...",
      summary: "Pasūtījuma kopsavilkums",
      note: "Pēc pasūtījuma apstiprināšanas nosūtīsim maksājuma apstiprinājumu uz jūsu e-pastu ar bankas pārskaitījuma datiem.",
      paymentMethod: "Maksājuma veids",
      bankTransfer: "Bankas pārskaitījums",
      bankTransferHelp:
        "Saņemsiet rekvizītus e-pastā pēc pasūtījuma. Maksājums notiek ar pārskaitījumu uz norādīto kontu.",
      cardPayment: "Maksāt ar karti (Stripe)",
      stripeSecureHelp:
        "Pēc pasūtījuma apstiprināšanas tiksiet novirzīti uz drošu WooCommerce maksājumu lapu (shop.domeventagency.com), kur varēsiet norēķināties ar karti, Apple Pay vai Google Pay.",
      stripeOrderCreated:
        "Pasūtījums izveidots. Aizpildiet maksājumu zemāk — karte vai maks, kas piedāvāts jūsu ierīcē.",
      stripeUnavailable:
        "Maksājums ar karti WooCommerce veikalā nav ieslēgts. Izvēlieties bankas pārskaitījumu vai sazinieties ar mums.",
      placeOrderAndPay: "APSTIPRINĀT UN MAKSĀT",
      thankYou: {
        verifying: "Pārbaudām maksājumu…",
        invalidLink: "Nederīga saite. Ja esat maksājuši, pārbaudiet e-pastu vai sazinieties ar mums.",
        notFound: "Pasūtījumu nevarēja atrast.",
        loadError: "Neizdevās ielādēt pasūtījuma statusu. Mēģiniet vēlreiz.",
        pendingTitle: "Gaida maksājumu",
        pendingBody: "Maksājums vēl nav apstiprināts. Ja tikko maksājāt ar karti, uzgaidiet un atsvaidziniet lapu.",
        refresh: "ATSVAIDZINĀT",
        errorTitle: "Kļūda",
      },
      bankDetails: "Bankas rekvizīti",
      proceedToPayment: "Turpināt uz maksājumu",
      accountHolder: "Konta nosaukums",
      iban: "IBAN",
      bankName: "Banka",
      amount: "Summa",
      paymentPurpose: "Maksājuma mērķis",
      success: {
        title: "Pasūtījums pieņemts!",
        body: "Paldies par jūsu pasūtījumu. Mēs ar jums sazināsimies tuvākajā laikā.",
        order: "Pasūtījums",
        back: "Atpakaļ uz sākumu",
      },
      successCard: {
        title: "Maksājums saņemts!",
        body: "Paldies! Jūsu maksājums ir apstrādāts. Mēs ar jums sazināsimies tuvākajā laikā.",
        order: "Pasūtījums",
        back: "Atpakaļ uz sākumu",
      },
    },
    hero: {
      title: "D.O.M. EVENT AGENCY",
      subtitle: "WE ARE NOT FOR EVERYONE, WE ARE FOR YOU",
      cta: "LEVEL UP MY EVENT",
      scroll: "SCROLL"
    },
    about: {
      title: "Mēs saliekam pasākumus",
      titleAccent: "pa gabaliņam.",
      description: "Aģentūra, kas piepilda laiku, pasākumus un vietas ar dzīvību, stilu un jēgu. Mēs radām pasākumus, kuros viss darbojas nevainojami — no koncepcijas un autoru kokteiļiem līdz mūzikai un servisam.",
      learnMore: "UZZINĀT VAIRĀK PAR MUMS",
      contactUs: "SAZINIES UN UZZINI VAIRĀK",
      points: {
        1: { title: "Profesionālisms un projekta vadība", text: "Mēs strukturējam procesu no iniciēšanas līdz pēcanalīzei. Budžets un termiņi tiek pārvaldīti kā vienots veselums, cienot klienta laiku un resursus." },
        2: { title: "Dziļas nozares kompetences", text: "Mēs pārzinām dažādu formātu specifiku un protam pielāgot koncepciju auditorijai, norises vietai un mērķiem." },
        3: { title: "Radošums kā sistēmas princips", text: "Koncepcijas un scenāriji dzimst dialogā starp klienta ideju un mūsu pieredzi, lai ikviens mirklis būtu jēgpilns." },
        4: { title: "Individuāla pieeja kā standarts", text: "Mēs sākam ar jūsu iedvesmu, uzklausām, precizējam uzdevumus un izstrādājam ceļa karti, kur katrai detaļai ir savs mērķis." },
        5: { title: "Fokuss uz detaļām", text: "Telpas dizains, gaisma, multimediji, noformējums un serviss darbojas kā vienots mehānisms." },
        6: { title: "Drošība, kvalitāte un reglaments", text: "Mēs ievērojam normas un principus, sniedzot klientam un viesiem pilnīgu mieru un pārliecību." }
      }
    },
    builder: {
      title: "SALIEC SAVU PASĀKUMU PATS",
      yourEvent: "Jūsu pasākums",
      emptyState: "Izvēlieties pakalpojumus no saraksta, lai sāktu plānošanu.",
      submit: "PIETEIKT PASĀKUMU",
      modal: {
        title: "Pieteikt pasākumu",
        desc: "Aizpildiet kontaktformu, un mēs ar Jums sazināsimies, lai apspriestu detaļas.",
        name: "Vārds, Uzvārds",
        email: "E-pasts",
        phone: "Tālrunis",
        services: "Izvēlētie pakalpojumi:",
        submitBtn: "NOSŪTĪT",
        success: "Pieteikums nosūtīts!",
        successDesc: "Mēs ar Jums sazināsimies tuvākajā laikā.",
        error: "Kļūda",
        errorDesc: "Neizdevās nosūtīt pieteikumu. Lūdzu, mēģiniet vēlreiz.",
        fillRequired: "Lūdzu, aizpildiet obligātos laukus."
      },
      services: {
        drinks: { title: "Dzērieni", desc: "Autoru kokteiļi, bezalkoholiskās alternatīvas un pasākuma stilam pielāgota bāra karte." },
        food: { title: "Furšets un ēdināšana", desc: "Garšu ceļvedis, premium produkti un sezonālie akcenti." },
        decor: { title: "Dekorācijas un atmosfēra", desc: "Letes noformējums, gaisma un interjera detaļas." },
        music: { title: "Pasākuma mūzika un skanējums", desc: "Plejlistes atlase, dzīvās mūzikas akcenti un formātam atbilstošs skaņas fons." },
        logistics: { title: "Loģistika un serviss", desc: "Bārmeņi, pavāri, viesmīļi, laika plānošana un koordinācija." }
      }
    },
    services: {
      catering: {
        title: "CATERING",
        desc: "Pārvērš modulāro koncepciju vienotā bāra kultūras scenārijā, kur dzērieni, ēdienkarte un atmosfēra darbojas kā nedalāms veselums.",
        list1: "Autoru kokteiļi un bāra karte",
        list2: "Garšu ceļvedis un premium produkti",
        list3: "Dekorācijas un atmosfēra",
        howTitle: "Kā mēs to darām?",
        how1: "Modulāra pieeja: Katrs elements — dzērieni, ēdienkarte, dekors un skanējums — tiek veidots kā atsevišķs modulis.",
        how2: "Pielāgojamība: Moduļus var kombinēt un adaptēt atbilstoši datumam, formātam un budžetam, saglabājot vienotu stilu.",
        how3: "Kvalitātes garantija: Nodrošinām privātumu, kvalitāti un pieredzi visos posmos.",
        advTitle: "Pieejas priekšrocības",
        adv1: "Individuāli kokteiļi, kas izstrādāti tieši pasākuma koncepcijai.",
        adv2: "Stingra sastāvdaļu kvalitātes kontrole.",
        adv3: "Saskaņots servisa stils un vienota atmosfēra.",
        adv4: "Elastība: iespēja paplašināt vai saīsināt moduļus, nezaudējot pamatideju.",
        more: "UZZINĀT VAIRĀK",
        close: "AIZVĒRT",
        add: "PIEVIENOT"
      },
      music: {
        title: "DJ / MUSIC",
        desc: "DJ/MUSIC pārvērš pasākuma skanējumu par estētisku un emocionālu ceļojumu. Mēs ne tikai atskaņojam mūziku, bet radām skaņas dizainu, kas definē vakara atmosfēru un ritmu.",
        list1: "Vinila estētika: Ekskluzīvs skanējums no vinila platēm, piešķirot pasākumam īpašu siltumu, vizuālu šarmu un autentiskumu.",
        list2: "Žanru eklektika: Speak-easy, fashion, jazz, funk, soul un disco kokteilis, kas pielāgots izsmalcinātai publikai.",
        list3: "Digitālā dinamika: Moderni mūzikas kodi un ritmi, kas nodrošina enerģiju un deju grīdas lādiņu.",
        list4: "Dzīvās uzstāšanās: Mākslinieku un mūziķu piesaiste, radot unikālu dzīvā izpildījuma un dīdžeja seta simbiozi.",
        list5: "Tehniskais izpildījums: Profesionāla apskaņošana, mūsdienīgs aprīkojums un gaismas scenāriji, kas pastiprina mūzikas ietekmi.",
        howTitle: "Kā mēs to darām?",
        how1: "Muzikālais modulis: Katrs skanējuma elements — no fona mūzikas līdz kulminācijas setam — tiek veidots kā pārdomāts modulis.",
        how2: "Atmosfēras kontrole: Mūzika tiek adaptēta vakara dinamikai, nemanāmi pārejot no intīmām sarunām uz enerģisku deju ritmu.",
        how3: "Kvalitātes standarts: Atlasām tikai kvalitatīvu materiālu, izvairoties no klišejām.",
        advTitle: "Pieejas priekšrocības",
        adv1: "Unikāls skanējums: Muzikālais paraksts, kas izceļ pasākumu starp citiem.",
        adv2: "Vizuālā un audio harmonija: Vinila atskaņotāji kā stila elements.",
        adv3: "Pieredzējuši rezidenti: Dīdžeji ar starptautisku pieredzi.",
        adv4: "Pielāgojamība: Satura modulis, kas viegli integrējas jebkurā pasākuma plānā.",
        more: "UZZINĀT VAIRĀK",
        close: "AIZVĒRT",
        add: "PIEVIENOT"
      },
      design: {
        title: "DESIGN & WEB",
        desc: "Dizains un vizuālā identitāte pārvērš idejas redzamā un taustāmā realitātē. Mēs radām vizuālos kodus, kas kļūst par stila pamatu.",
        list1: "Zīmola identitāte un Web dizains",
        list2: "Pasākumu grafika un digitālais saturs",
        list3: "Merčendaizings un atribūtika",
        howTitle: "Kā mēs to darām?",
        how1: "Vizuālais modulis: Katrs dizaina elements tiek veidots kā daļa no kopējās puzles.",
        how2: "Satura un formas simbioze: Nodrošinām, lai dizains pildītu savu funkciju un sasniegtu mērķauditoriju.",
        how3: "Dinamisks radošums: Sekojam līdzi aktuālākajām dizaina un tehnoloģiju tendencēm.",
        advTitle: "Pieejas priekšrocības",
        adv1: "Stilistiskā viengabalainība visos materiālos.",
        adv2: "Uz detaļām vērsts dizains: minimālisms un augstvērtīga estētika.",
        adv3: "Tehniskā izcilība un adaptivitāte.",
        adv4: "Individuāls raksturs, kas netop pēc šablona.",
        more: "UZZINĀT VAIRĀK",
        close: "AIZVĒRT",
        add: "PIEVIENOT"
      },
      decor: {
        title: "SOUND & DECOR",
        desc: "Skaņa un dekorēšana pārvērš fizisko telpu dzīvā stāstā. Mēs apvienojam akustisko izcilību ar vizuālo estētiku.",
        list1: "Akustiskie risinājumi un gaismas arhitektūra",
        list2: "Telpas zonēšana, floristika un akcenti",
        list3: "Multimediju integrācija",
        howTitle: "Kā mēs to darām?",
        how1: "Atmosfēras modulis: Skaņa un dekors tiek apvienoti vienotā koncepcijā.",
        how2: "Imersīva vide: Radām telpas, kurās viesi jūtas iesaistīti un iedvesmoti.",
        how3: "Tehniskā precizitāte: No vadu noslēpšanas līdz akustiskajiem aprēķiniem.",
        advTitle: "Pieejas priekšrocības",
        adv1: "Sajūtu sinerģija: Harmonija starp redzamo un dzirdamo.",
        adv2: "Dabiskums un stils: Dodam priekšroku dabiskām faktūrām un minimālismam.",
        adv3: "Individuāla skatuves māksla: Unikāla scenogrāfija.",
        adv4: "Pielāgojamība jebkurai videi.",
        more: "UZZINĀT VAIRĀK",
        close: "AIZVĒRT",
        add: "PIEVIENOT"
      },
      consulting: {
        title: "CONSULTING",
        desc: "Konsultācijas un risinājumi pārvērš jūsu uzņēmuma vīziju reālā tirgus konkurētspējā. Ieviešam sistēmas, kas paceļ kultūru jaunā līmenī.",
        list1: "Procesu audits, sakārtošana un stratēģija",
        list2: "Miksoloģijas un servisa standarti",
        list3: "Komandas apmācība un zīmola dinamika",
        howTitle: "Kā mēs to darām?",
        how1: "Diagnostikas modulis: Esošās situācijas izpēte.",
        how2: "Sistēmas izveide: Ceļa karte, kurā katrs risinājums vērsts uz izaugsmi.",
        how3: "Vērtību simbioze: Strādājam ciešā saiknē ar klientu.",
        advTitle: "Pieejas priekšrocības",
        adv1: "Ekspertu zināšanas: Reāla pieredze starptautiskajā nozarē.",
        adv2: "Mērķtiecīga izaugsme un rezultāts.",
        adv3: "Mūsdienīgi rīki un HoReCa tendences.",
        adv4: "Individuāls fokuss uz iestādes specifiku.",
        more: "UZZINĀT VAIRĀK",
        close: "AIZVĒRT",
        add: "PIEVIENOT"
      }
    },
    gallery: {
      title: "SAJŪTU GALERIJA",
      moments: "MIRKĻI",
      art: "MĀKSLA",
      taste: "GARŠA",
      spark: "DZIRKSTELE",
      emotions: "EMOCIJAS",
      energy: "ENERĢIJA"
    },
    team: {
      title: "MŪSU KOMANDA",
      subtitle: "Mēs esam profesionāļu komanda, kas apvieno pieredzi, radošumu un aizrautību, lai radītu neaizmirstamus pasākumus.",
      desc: "Mēs esam profesionāļu komanda, kas apvieno pieredzi, radošumu un aizrautību, lai radītu neaizmirstamus pasākumus.",
      members: {
        deniss: { role: "Pasākumu organizators", bio: "Pasākumu organizators ar plašu pieredzi.", fullBio: "Pasākumu organizators ar plašu pieredzi." },
        anastasija: { role: "Vizuālās reklāmas dizaina speciāliste", bio: "Mana pieeja jebkuram darbam sakņojas dizaina, mākslas un cilvēka psiholoģijas mijiedarbībā.", fullBio: "Mana pieeja jebkuram darbam sakņojas dizaina, mākslas un cilvēka psiholoģijas mijiedarbībā. Es ticu, ka veiksmīga pasākuma vai zīmola pamatā ir ne tikai estētika, bet arī spēja radīt emocionālu saikni ar cilvēku. Mana profesionālā pieredze ietver gan lokālus, gan starptautiskus projektus." },
        olegs: { role: "Tehniskais direktors", bio: "Apvieno tehnisko precizitāti ar patiesu viesmīlību. Pasākuma izdošanās slēpjas detaļās.", fullBio: "Mana pieeja darbam apvieno tehnisko precizitāti ar patiesu viesmīlību. Uzskatu, ka pasākuma izdošanās slēpjas detaļās – nevainojamā tehniskajā izpildījumā, kas paliek nemanāms, un personīgā attieksmē, ko sajūt ikviens viesis. Kolektīvā mani raksturo kā 'uzmanību ekstraverts!'." },
        andris: { role: "Art-Direktors", bio: "Dīdžejs, promoters un mūzikas pasākumu koordinators.", fullBio: "Dīdžejs, promoters un mūzikas pasākumu koordinators. Rezidējošais dīdžejs un ballīšu organizators Latvijā un Kiprā. Atskaņoju speak-easy, modes un deju mūziku gan vinila plašu, gan digitālā formātā." },
        laura: { role: "Content Creator", bio: "Veidoju reklāmas un vizuālo saturu, piedalos ideju attīstīšanā un man patīk būt radošajā procesā.", fullBio: "Veidoju reklāmas un vizuālo saturu, piedalos ideju attīstīšanā un man patīk būt radošajā procesā - no komunikācijas līdz organizēšanai. Man saturs ir par mijiedarbību starp cilvēkiem, idejām un zīmoliem. Cilvēki man ir galvenā vērtība." },
        vladislavs: { role: "Miksologs", bio: "Pieredzējis miksologs un ražošanas vadītājs ar vairāk nekā 8 gadu pieredzi.", fullBio: "Vladislavs Saveljevs ir pieredzējis miksologs un ražošanas vadītājs ar vairāk nekā 8 gadu pieredzi augstas noslodzes bāros Latvijā un Vācijā. Viņš apvieno radošu pieeju dzērieniem ar precīzu kvalitātes kontroli un izcilu viesu apkalpošanu." }
      }
    },
    certificates: {
      title: "SERTIFIKĀTI"
    },
    partners: {
      title: "SADARBĪBAS PARTNERI"
    },
    footer: {
      title: "Mēs neesam visiem,\nmēs esam Jums.",
      desc: "Sazinieties ar mums, lai apspriestu jūsu nākamo pasākumu. Mēs radām pieredzi, kas paliek atmiņā.",
      details: {
        title: "REKVIZĪTI",
        name: "SIA ''PROBAR''",
        reg: "Reģ. Nr. LV40203160448",
        address: "Rīga, Dzirnavu 70-6a, LV-1050, Latvia",
        bank: "AS “SWEDBANK”, HABALV22 LV36HABA0551045355405"
      },
      copyright: "© 2026 D.O.M. Event Agency",
      designed: ""
    }
  },
  ru: {
    nav: {
      about: "О НАС",
      team: "КОМАНДА",
      services: "УСЛУГИ",
      shop: "МАГАЗИН",
      blog: "БЛОГ",
      contacts: "КОНТАКТЫ",
      subtitle: "EVENT AGENCY"
    },
    blog: {
      title: "БЛОГ",
      loading: "Загрузка...",
      empty: "Нет записей в блоге",
      readMore: "Читать далее",
      backToList: "Назад к блогу",
      notFound: "Запись не найдена"
    },
    shop: {
      title: "МЕРЧАНДАЙЗИНГ",
      subtitle: "Стиль, который говорит без слов. Приобретайте нашу эксклюзивную атрибутику и подарочные карты.",
      add: "ДОБАВИТЬ В КОРЗИНУ",
      empty: "В настоящее время нет доступных продуктов",
      all: "ВСЕ",
      search: "Поиск…",
      from: "от",
      outOfStock: "Нет в наличии",
      selectOption: "Выберите вариант",
      backToShop: "Назад в магазин",
      qty: "Кол-во",
      products: {
        tshirt: { name: "��утболка D.O.M.", desc: "Футболка из высококачественного хлопка с минималистичным логотипом." },
        hoodie: { name: "Худи D.O.M.", desc: "Худи премиум-класса для прохладных летних вечеров." },
        gift50: { name: "Подарочная карта €50", desc: "Подарок для незабываемого мероприятия или посещения бара." },
        gift100: { name: "Подарочная карта €100", desc: "Эксклюзивный подарок для особых моментов." }
      },
      cart: {
        title: "КОРЗИНА",
        empty: "Ваша корзина пуста",
        total: "Итого",
        checkout: "ОФОРМИТЬ ЗАКАЗ"
      }
    },
    checkout: {
      title: "Оформление заказа",
      billing: "Платёжные данные",
      firstName: "Имя",
      lastName: "Фамилия",
      email: "Эл. почта",
      phone: "Телефон",
      address: "Адрес",
      city: "Город",
      country: "Страна",
      placeOrder: "ОФОРМИТЬ ЗАКАЗ",
      processing: "Обработка...",
      summary: "Сводка заказа",
      note: "После подтверждения заказа мы отправим подтверждение оплаты на вашу электронную почту с реквизитами для банковского перевода.",
      paymentMethod: "Способ оплаты",
      bankTransfer: "Банковский перевод",
      bankTransferHelp:
        "После оформления заказа мы отправим реквизиты на электронную почту. Оплата банковским переводом.",
      cardPayment: "Картой (Stripe)",
      stripeSecureHelp:
        "После подтверждения заказа вы перейдёте на защищённую страницу оплаты WooCommerce (shop.domeventagency.com), где можно оплатить картой, Apple Pay или Google Pay.",
      stripeOrderCreated:
        "Заказ создан. Заполните оплату ниже — карта или кошелёк, доступный на вашем устройстве.",
      stripeUnavailable:
        "Оплата картой в WooCommerce не включена. Выберите банковский перевод или свяжитесь с нами.",
      placeOrderAndPay: "ПОДТВЕРДИТЬ И ОПЛАТИТЬ",
      thankYou: {
        verifying: "Проверяем оплату…",
        invalidLink: "Недействительная ссылка. Если вы оплатили, проверьте почту или свяжитесь с нами.",
        notFound: "Заказ не найден.",
        loadError: "Не удалось загрузить статус заказа. Попробуйте снова.",
        pendingTitle: "Ожидается оплата",
        pendingBody: "Оплата ещё не подтверждена. Если вы только что оплатили картой, подождите и обновите страницу.",
        refresh: "ОБНОВИТЬ",
        errorTitle: "Ошибка",
      },
      bankDetails: "Банковские реквизиты",
      proceedToPayment: "Перейти к оплате",
      accountHolder: "Получатель",
      iban: "IBAN",
      bankName: "Банк",
      amount: "Сумма",
      paymentPurpose: "Назначение платежа",
      success: {
        title: "Заказ принят!",
        body: "Спасибо за ваш заказ. Мы свяжемся с вами в ближайшее время.",
        order: "Заказ",
        back: "Вернуться на главную",
      },
      successCard: {
        title: "Оплата получена!",
        body: "Спасибо! Платёж обработан. Мы свяжемся с вами в ближайшее время.",
        order: "Заказ",
        back: "Вернуться на главную",
      },
    },
    hero: {
      title: "D.O.M. EVENT AGENCY",
      subtitle: "МЫ НЕ ДЛЯ ВСЕХ, МЫ ДЛЯ ВАС",
      cta: "ПОВЫСИТЬ УРОВЕНЬ СОБЫТИЯ",
      scroll: "SCROLL"
    },
    about: {
      title: "Мы собираем мероприятия",
      titleAccent: "по кусочкам.",
      description: "Агентство, которое наполняет время, события и пространства жизнью, стилем и смыслом. Мы создаем мероприятия, где все работает безупречно — от концепции и авторских коктейлей до музыки и сервиса.",
      learnMore: "УЗНАТЬ БОЛЬШЕ О НАС",
      contactUs: "СВЯЖИТЕСЬ И УЗНАЙТЕ БОЛЬШЕ",
      points: {
        1: { title: "Профессионализм и управление проектами", text: "Мы структурируем процесс от инициации до постанализа. Бюджет и сроки управляются как единое целое, уважая время и ресурсы клиента." },
        2: { title: "Глубокие отраслевые компетенции", text: "Мы знаем специфику различных форматов и умеем адаптировать концепцию под аудиторию, место проведения и цели." },
        3: { title: "Творчество как системный принцип", text: "Концепции и сценарии рождаются в диалоге между идеей клиента и нашим опытом, чтобы каждый момент был наполнен смыслом." },
        4: { title: "Индивидуальный подход как стандарт", text: "Мы начинаем с вашего вдохновения, выслушиваем, уточняем задачи и разрабатываем дорожную карту, где каждая деталь имеет свою цель." },
        5: { title: "Фокус на деталях", text: "Дизайн пространства, свет, мультимедиа, оформление и сервис работают как единый механизм." },
        6: { title: "Безопасность, качество и регламент", text: "Мы соблюдаем нормы и принципы, обеспечивая клиенту и гостям полное спокойствие и уверенность." }
      }
    },
    builder: {
      title: "СОБЕРИ СВОЕ МЕРОПРИЯТИЕ САМ",
      yourEvent: "Ваше мероприятие",
      emptyState: "Выберите услуги из списка, чтобы начать планирование.",
      submit: "ЗАКАЗАТЬ МЕРОПРИЯТИЕ",
      modal: {
        title: "Заказать мероприятие",
        desc: "Заполните контактную форму, и мы свяжемся с Вами, чтобы обсудить детали.",
        name: "Имя, Фамилия",
        email: "Эл. почта",
        phone: "Телефон",
        services: "Выбранные услуги:",
        submitBtn: "ОТПРАВИТЬ",
        success: "Заявка отправлена!",
        successDesc: "Мы свяжемся с Вами в ближайшее время.",
        error: "Ошибка",
        errorDesc: "Не удалось отправить заявку. Пожалуйста, попробуйте ещё раз.",
        fillRequired: "Пожалуйста, заполните обязательные поля."
      },
      services: {
        drinks: { title: "Напитки", desc: "Авторские коктейли, безалкогольные альтернативы и карта бара, адаптированная под стиль мероприятия." },
        food: { title: "Фуршет и питание", desc: "Путеводитель по вкусам, премиальные продукты и сезонные акценты." },
        decor: { title: "Декорации и атмосфера", desc: "Оформление стойки, свет и детали интерьера." },
        music: { title: "Музыка и звучание", desc: "Подбор плейлиста, акценты живой музыки и звуковой фон, соответствующий формату." },
        logistics: { title: "Логистика и сервис", desc: "Бармены, повара, официанты, планирование времени и координация." }
      }
    },
    services: {
      catering: {
        title: "CATERING",
        desc: "Превращает модульную концепцию в единый сценарий барной культуры, где напитки, меню и атмосфера работают как неделимое целое.",
        list1: "Авторские коктейли и карта бара",
        list2: "Путеводитель по вкусам и премиальные продукты",
        list3: "Декорации и атмосфера",
        howTitle: "Как мы это делаем?",
        how1: "Модульный подход: Каждый элемент — напитки, меню, декор и звучание — создается как отдельный модуль.",
        how2: "Адаптивность: Модули можно комбинировать и адаптировать в соответствии с датой, форматом и бюджетом, сохраняя единый стиль.",
        how3: "Гарантия качества: Обеспечиваем приватность, качество и опыт на всех этапах.",
        advTitle: "Преимущества подхода",
        adv1: "Индивидуальные коктейли, разработанные специально под концепцию мероприятия.",
        adv2: "Строгий контроль качества ингредиентов.",
        adv3: "Согласованный стиль сервиса и единая атмосфера.",
        adv4: "Гибкость: возможность расширять или сокращать модули, не теряя основной идеи.",
        more: "УЗНАТЬ БОЛЬШЕ",
        close: "ЗАКРЫТЬ",
        add: "ДОБАВИТЬ"
      },
      music: {
        title: "DJ / MUSIC",
        desc: "DJ/MUSIC превращает звучание мероприятия в эстетическое и эмоциональное путешествие. Мы не просто играем музыку, мы создаем звуковой дизайн, который определяет ат��осферу и ритм вечера.",
        list1: "Эстетика винила: Эксклюзивное звучание с виниловых пластинок, придающее мероприятию особое тепло, визуальный шарм и аутентичность.",
        list2: "Жанровая эклектика: Коктейль из speak-easy, fashion, jazz, funk, soul и disco, адаптированный для изысканной публики.",
        list3: "Цифровая динамика: Современные музыкальные коды и ритмы, обеспечивающие энергию и заряд танцпола.",
        list4: "Живые выступления: Привлечение артистов и музыкантов, создающее уникальный симбиоз живого исполнения и диджей-сета.",
        list5: "Техническое исполнение: Профессиональное озвучивание, современное оборудование и световые сценарии, усиливающие влияние музыки.",
        howTitle: "Как мы это делаем?",
        how1: "Музыкальный модуль: Каждый элемент звучания — от фоновой музыки до кульминационного сета — создается как продуманный модуль.",
        how2: "Контроль атмосферы: Музыка адаптируется к динамике вечера, незаметно переходя от интимных разговоров к энергичному танцевальному ритму.",
        how3: "Стандарт качества: Отбираем только качественный материал, избегая клише.",
        advTitle: "Преимущества подхода",
        adv1: "Уникальное звучание: Музыкальная подпись, выделяющая мероприятие среди других.",
        adv2: "Визуальная и аудио гармония: Виниловы�� проигрыватели как элемент стиля.",
        adv3: "Опытные резиденты: Диджеи с международным опытом.",
        adv4: "Адаптивность: Модуль контента, который легко интегрируется в любой план мероприятия.",
        more: "УЗНАТЬ БОЛЬШЕ",
        close: "ЗАКРЫТЬ",
        add: "ДОБАВИТЬ"
      },
      design: {
        title: "DESIGN & WEB",
        desc: "Дизайн и визуальная идентичность превращают идеи в видимую и осязаемую реальность. Мы создаем визуальные коды, которые становятся основой стиля.",
        list1: "Идентичность бренда и веб-дизайн",
        list2: "Графика мероприятий и цифровой контент",
        list3: "Мерчандайзинг и атрибутика",
        howTitle: "Как мы это делаем?",
        how1: "Визуальный модуль: Каждый элемент дизайна создается как часть общей мозаики.",
        how2: "Симбиоз содержания и формы: Обеспечиваем, чтобы дизайн выполнял свою функцию и достигал целевой аудитории.",
        how3: "Динамичное творчество: Следим за актуальными тенденциями дизайна и технологий.",
        advTitle: "Преимущества подхода",
        adv1: "Стилистическая целостность во всех материалах.",
        adv2: "Дизайн, ориентированный на детали: минимализм и высокая эстетика.",
        adv3: "Техническое совершенство и адаптивность.",
        adv4: "Индивидуальный характер, который не создается по шаблону.",
        more: "УЗНАТЬ БОЛЬШЕ",
        close: "ЗАКРЫТЬ",
        add: "ДОБАВИТЬ"
      },
      decor: {
        title: "SOUND & DECOR",
        desc: "Звук и декорирование превращают физическое пространство в живую историю. Мы объединяем акустическое совершенство с визуальной эстетикой.",
        list1: "Акустические решения и архитектура света",
        list2: "Зонирование пространства, флористика и акценты",
        list3: "Мультимедийная интеграция",
        howTitle: "Как мы это делаем?",
        how1: "Модуль атмосферы: Звук и декор объединяются в единую концепцию.",
        how2: "Иммерсивная среда: Создаем пространства, где гости чувствуют себя вовлеченными и вдохновленными.",
        how3: "Техническая точность: От сокрытия проводов до акустических расчетов.",
        advTitle: "Преимущества подхода",
        adv1: "Синергия чувств: Гармония между видимым и слышимым.",
        adv2: "Естественность и стиль: Отдаем предпочтение натуральным фактурам и минимализму.",
        adv3: "Индивидуальная сценография: Уникальная сценография.",
        adv4: "Адаптируемость к любой среде.",
        more: "УЗНАТЬ БОЛЬШЕ",
        close: "ЗАКРЫТЬ",
        add: "ДОБАВИТЬ"
      },
      consulting: {
        title: "CONSULTING",
        desc: "Консультации и решения превращают видение вашей компании в реальную конкурентоспособность на рынке. Внедряем системы, которые поднимают культуру на новый уровень.",
        list1: "Аудит процессов, упорядочивание и стратегия",
        list2: "Стандарты миксологии и сервиса",
        list3: "Обучение команды и динамика бренда",
        howTitle: "Как мы это делаем?",
        how1: "Модуль диагностики: Изучение существующей ситуации.",
        how2: "Создание системы: Дорожная карта, где каждое решение направлено на рост.",
        how3: "Симбиоз ценностей: Работаем в тесной связке с клиентом.",
        advTitle: "Преимущества подхода",
        adv1: "Экспертные знания: Реальный опыт в международной отрасли.",
        adv2: "Целенаправленный рост и результат.",
        adv3: "Современные инструменты и тенденции HoReCa.",
        adv4: "Индивидуальный фокус на специфику заведения.",
        more: "УЗНАТЬ БОЛЬШЕ",
        close: "ЗАКРЫТЬ",
        add: "ДОБАВИТЬ"
      }
    },
    gallery: {
      title: "ГАЛЕРЕЯ ЧУВСТВ",
      moments: "МОМЕНТЫ",
      art: "ИСКУССТВО",
      taste: "ВКУС",
      spark: "ИСКРА",
      emotions: "ЭМОЦИИ",
      energy: "ЭНЕРГИЯ"
    },
    team: {
      title: "НАША КОМАНДА",
      subtitle: "Мы — команда профессионалов, объединяющая опыт, творчество и страсть для создания незабываемых мероприя��ий.",
      desc: "Мы — команда профессионалов, объединяющая опыт, творчество и страсть для создания незабываемых мероприятий.",
      members: {
        deniss: { role: "Организатор мероприятий", bio: "Организатор мероприятий с большим опытом.", fullBio: "Организатор мероприятий с большим опытом." },
        anastasija: { role: "Специалист по визуальному рекламному дизайну", bio: "Мой подход к любой работе коренится во взаимодействии дизайна, искусства и психологии человека.", fullBio: "Мой подход к любой работе коренится во взаимодействии дизайна, искусства и психологии человека. Я верю, что в основе успешного мероприятия или бренда лежит не только эстетика, но и способность создать эмоциональную связь с человеком. Мой профессиональный опыт включает как локальные, так и международные проекты." },
        olegs: { role: "Технический директор", bio: "Объединяет техническую точность с истинным гостеприимством. Успех мероприятия кроется в деталях.", fullBio: "Мой подход к работе объединяет техническую точность с истинным гостеприимством. Считаю, что успех мероприятия кроется в деталях – безупречном техническом исполнении, которое остается незаметным, и личном отношении, которое чувствует каждый гость. В коллективе меня характеризуют как 'внимание, экстраверт!'." },
        andris: { role: "Арт-директор", bio: "Диджей, промоутер и координатор музыкальных мероприятий.", fullBio: "Диджей, промоутер и координатор музыкальных мероприятий. Резидент-диджей и организатор вечеринок в Латвии и на Кипре. Играю speak-easy, fashion и танцевальную музыку как на виниле, так и в цифровом формате." },
        laura: { role: "Контент-креатор", bio: "Создаю рекламный и визуальный контент, участвую в развитии идей, и мне нравится быть в творческом процессе.", fullBio: "Создаю рекламный и визуальный контент, участвую в развитии идей, и мне нравится быть в творческом процессе - от коммуникации до организации. Для меня контент — это о взаимодействии между людьми, идеями и брендами. Люди для меня — главная ценность." },
        vladislavs: { role: "Миксолог", bio: "Опытный миксолог и руководитель производства с более чем 8-летним опытом.", fullBio: "Владислав Савельев — опытный миксолог и руководитель производства с более чем 8-летним опытом в барах с высокой нагрузкой в Латвии и Германии. Он объединяет творческий подход к напиткам с точным контролем качества и отличным обслуживанием гостей." }
      }
    },
    certificates: {
      title: "СЕРТИФИКАТЫ"
    },
    partners: {
      title: "ПАРТНЕРЫ ПО СОТРУДНИЧЕСТВУ"
    },
    footer: {
      title: "Мы не для всех,\nмы для Вас.",
      desc: "Свяжитесь с нами, чтобы обсудить ваше следующее мероприятие. Мы создаем опыт, который остается в памяти.",
      details: {
        title: "РЕКВИЗИТЫ",
        name: "SIA ''PROBAR''",
        reg: "Рег. № LV40203160448",
        address: "Рига, Дзирнаву 70-6a, LV-1050, Латвия",
        bank: "AS “SWEDBANK”, HABALV22 LV36HABA0551045355405"
      },
      copyright: "© 2026 D.O.M. Event Agency",
      designed: ""
    }
  },
  en: {
    nav: {
      about: "ABOUT US",
      team: "TEAM",
      services: "SERVICES",
      shop: "SHOP",
      blog: "BLOG",
      contacts: "CONTACTS",
      subtitle: "EVENT AGENCY"
    },
    blog: {
      title: "BLOG",
      loading: "Loading...",
      empty: "No blog posts yet",
      readMore: "Read more",
      backToList: "Back to blog",
      notFound: "Post not found"
    },
    shop: {
      title: "MERCHANDISE",
      subtitle: "Style that speaks without words. Purchase our exclusive attributes and gift cards.",
      add: "ADD TO CART",
      empty: "No products currently available",
      all: "ALL",
      search: "Search…",
      from: "From",
      outOfStock: "Out of stock",
      selectOption: "Select option",
      backToShop: "Back to shop",
      qty: "Qty",
      products: {
        tshirt: { name: "D.O.M. T-Shirt", desc: "High-quality cotton t-shirt with minimalist logo design." },
        hoodie: { name: "D.O.M. Hoodie", desc: "Premium class hoodie for cool summer evenings." },
        gift50: { name: "Gift Card €50", desc: "A gift for an unforgettable event or bar visit." },
        gift100: { name: "Gift Card €100", desc: "Exclusive gift for special moments." }
      },
      cart: {
        title: "SHOPPING CART",
        empty: "Your cart is empty",
        total: "Total",
        checkout: "CHECKOUT"
      }
    },
    checkout: {
      title: "Checkout",
      billing: "Billing details",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone",
      address: "Address",
      city: "City",
      country: "Country",
      placeOrder: "PLACE ORDER",
      processing: "Processing...",
      summary: "Order summary",
      note: "After placing your order, we will send a payment confirmation to your email with bank transfer details.",
      paymentMethod: "Payment method",
      bankTransfer: "Bank transfer",
      bankTransferHelp:
        "After you place the order, we email you the transfer details. You pay via bank transfer.",
      cardPayment: "Card (Stripe)",
      stripeSecureHelp:
        "After you confirm the order, you will be redirected to the secure WooCommerce payment page (shop.domeventagency.com) to pay by card, Apple Pay, or Google Pay.",
      stripeOrderCreated:
        "Order created. Complete payment below — card or wallet offered for your device.",
      stripeUnavailable:
        "Card payment is not enabled in WooCommerce. Choose bank transfer or contact us.",
      placeOrderAndPay: "CONFIRM & PAY",
      thankYou: {
        verifying: "Verifying payment…",
        invalidLink: "Invalid link. If you paid, check your email or contact us.",
        notFound: "Order could not be found.",
        loadError: "Could not load order status. Please try again.",
        pendingTitle: "Awaiting payment",
        pendingBody: "Payment is not confirmed yet. If you just paid by card, wait a moment and refresh.",
        refresh: "REFRESH",
        errorTitle: "Error",
      },
      bankDetails: "Bank details",
      proceedToPayment: "Proceed to payment",
      accountHolder: "Account name",
      iban: "IBAN",
      bankName: "Bank",
      amount: "Amount",
      paymentPurpose: "Payment reference",
      success: {
        title: "Order placed!",
        body: "Thank you for your order. We will contact you shortly.",
        order: "Order",
        back: "Back to Home",
      },
      successCard: {
        title: "Payment received!",
        body: "Thank you! Your payment was processed. We will contact you shortly.",
        order: "Order",
        back: "Back to Home",
      },
    },
    hero: {
      title: "D.O.M. EVENT AGENCY",
      subtitle: "WE ARE NOT FOR EVERYONE, WE ARE FOR YOU",
      cta: "LEVEL UP MY EVENT",
      scroll: "SCROLL"
    },
    about: {
      title: "We assemble events",
      titleAccent: "piece by piece.",
      description: "An agency that fills time, events, and places with life, style, and meaning. We create events where everything works flawlessly — from concept and signature cocktails to music and service.",
      learnMore: "LEARN MORE ABOUT US",
      contactUs: "GET IN TOUCH AND LEARN MORE",
      points: {
        1: { title: "Professionalism and Project Management", text: "We structure the process from initiation to post-analysis. Budget and deadlines are managed as a unified whole, respecting the client's time and resources." },
        2: { title: "Deep Industry Competence", text: "We understand the specifics of various formats and know how to adapt the concept to the audience, venue, and goals." },
        3: { title: "Creativity as a System Principle", text: "Concepts and scenarios are born in dialogue between the client's idea and our experience, so that every moment is meaningful." },
        4: { title: "Individual Approach as Standard", text: "We start with your inspiration, listen, clarify tasks, and develop a roadmap where every detail has its purpose." },
        5: { title: "Focus on Details", text: "Space design, lighting, multimedia, decoration, and service work as a unified mechanism." },
        6: { title: "Safety, Quality, and Regulation", text: "We adhere to norms and principles, providing the client and guests with complete peace of mind and confidence." }
      }
    },
    builder: {
      title: "BUILD YOUR OWN EVENT",
      yourEvent: "Your Event",
      emptyState: "Select services from the list to start planning.",
      submit: "BOOK EVENT",
      modal: {
        title: "Book Event",
        desc: "Fill out the contact form, and we will contact you to discuss details.",
        name: "Name, Surname",
        email: "E-mail",
        phone: "Phone",
        services: "Selected Services:",
        submitBtn: "SEND",
        success: "Request sent!",
        successDesc: "We will contact you shortly.",
        error: "Error",
        errorDesc: "Failed to send request. Please try again.",
        fillRequired: "Please fill in the required fields."
      },
      services: {
        drinks: { title: "Drinks", desc: "Signature cocktails, non-alcoholic alternatives, and a bar menu adapted to the event style." },
        food: { title: "Buffet and Catering", desc: "A guide to flavors, premium products, and seasonal accents." },
        decor: { title: "Decorations and Atmosphere", desc: "Counter design, lighting, and interior details." },
        music: { title: "Event Music and Sound", desc: "Playlist selection, live music accents, and background sound appropriate for the format." },
        logistics: { title: "Logistics and Service", desc: "Bartenders, chefs, waiters, time planning, and coordination." }
      }
    },
    services: {
      catering: {
        title: "CATERING",
        desc: "Turns a modular concept into a unified bar culture scenario where drinks, menu, and atmosphere work as an indivisible whole.",
        list1: "Signature cocktails and bar menu",
        list2: "Flavor guide and premium products",
        list3: "Decorations and atmosphere",
        howTitle: "How we do it?",
        how1: "Modular approach: Each element — drinks, menu, decor, and sound — is created as a separate module.",
        how2: "Adaptability: Modules can be combined and adapted according to date, format, and budget, maintaining a unified style.",
        how3: "Quality guarantee: We ensure privacy, quality, and experience at all stages.",
        advTitle: "Advantages of the approach",
        adv1: "Individual cocktails designed specifically for the event concept.",
        adv2: "Strict quality control of ingredients.",
        adv3: "Coordinated service style and unified atmosphere.",
        adv4: "Flexibility: the ability to expand or shorten modules without losing the main idea.",
        more: "LEARN MORE",
        close: "CLOSE",
        add: "ADD"
      },
      music: {
        title: "DJ / MUSIC",
        desc: "DJ/MUSIC transforms the sound of an event into an aesthetic and emotional journey. We don't just play music; we create sound design that defines the evening's atmosphere and rhythm.",
        list1: "Vinyl aesthetics: Exclusive sound from vinyl records, giving the event special warmth, visual charm, and authenticity.",
        list2: "Genre eclecticism: A cocktail of speak-easy, fashion, jazz, funk, soul, and disco, adapted for a sophisticated audience.",
        list3: "Digital dynamics: Modern music codes and rhythms ensuring energy and dance floor charge.",
        list4: "Live performances: Engaging artists and musicians, creating a unique symbiosis of live performance and DJ set.",
        list5: "Technical execution: Professional sound engineering, modern equipment, and light scenarios that reinforce the music's impact.",
        howTitle: "How we do it?",
        how1: "Musical module: Each sound element — from background music to the climax set — is created as a thoughtful module.",
        how2: "Atmosphere control: Music adapts to the evening's dynamics, seamlessly transitioning from intimate conversations to energetic dance rhythms.",
        how3: "Quality standard: We select only quality material, avoiding clichés.",
        advTitle: "Advantages of the approach",
        adv1: "Unique sound: A musical signature that distinguishes the event from others.",
        adv2: "Visual and audio harmony: Turntables as a style element.",
        adv3: "Experienced residents: DJs with international experience.",
        adv4: "Adaptability: A content module that easily integrates into any event plan.",
        more: "LEARN MORE",
        close: "CLOSE",
        add: "ADD"
      },
      design: {
        title: "DESIGN & WEB",
        desc: "Design and visual identity turn ideas into visible and tangible reality. We create visual codes that become the foundation of style.",
        list1: "Brand identity and Web design",
        list2: "Event graphics and digital content",
        list3: "Merchandising and attributes",
        howTitle: "How we do it?",
        how1: "Visual module: Each design element is created as part of a complete puzzle.",
        how2: "Symbiosis of content and form: We ensure that design fulfills its function and reaches the target audience.",
        how3: "Dynamic creativity: We follow the latest design and technology trends.",
        advTitle: "Advantages of the approach",
        adv1: "Stylistic integrity across all materials.",
        adv2: "Detail-oriented design: minimalism and high-end aesthetics.",
        adv3: "Technical excellence and adaptability.",
        adv4: "Individual character not created by a template.",
        more: "LEARN MORE",
        close: "CLOSE",
        add: "ADD"
      },
      decor: {
        title: "SOUND & DECOR",
        desc: "Sound and decoration turn physical space into a living story. We combine acoustic excellence with visual aesthetics.",
        list1: "Acoustic solutions and light architecture",
        list2: "Space zoning, floristics, and accents",
        list3: "Multimedia integration",
        howTitle: "How we do it?",
        how1: "Atmosphere module: Sound and decor are combined into a unified concept.",
        how2: "Immersive environment: We create spaces where guests feel involved and inspired.",
        how3: "Technical precision: From hiding wires to acoustic calculations.",
        advTitle: "Advantages of the approach",
        adv1: "Sensory synergy: Harmony between the visible and audible.",
        adv2: "Naturalness and style: We prefer natural textures and minimalism.",
        adv3: "Individual scenography: Unique scenography.",
        adv4: "Adaptability to any environment.",
        more: "LEARN MORE",
        close: "CLOSE",
        add: "ADD"
      },
      consulting: {
        title: "CONSULTING",
        desc: "Consulting and solutions turn your company's vision into real market competitiveness. We implement systems that take culture to a new level.",
        list1: "Process audit, organization, and strategy",
        list2: "Mixology and service standards",
        list3: "Team training and brand dynamics",
        howTitle: "How we do it?",
        how1: "Diagnostic module: Study of the current situation.",
        how2: "System creation: A roadmap where every solution is aimed at growth.",
        how3: "Symbiosis of values: We work closely with the client.",
        advTitle: "Advantages of the approach",
        adv1: "Expert knowledge: Real experience in the international industry.",
        adv2: "Targeted growth and result.",
        adv3: "Modern tools and HoReCa trends.",
        adv4: "Individual focus on the establishment's specifics.",
        more: "LEARN MORE",
        close: "CLOSE",
        add: "ADD"
      }
    },
    gallery: {
      title: "SENSORY GALLERY",
      moments: "MOMENTS",
      art: "ART",
      taste: "TASTE",
      spark: "SPARK",
      emotions: "EMOTIONS",
      energy: "ENERGY"
    },
    team: {
      title: "OUR TEAM",
      subtitle: "We are a team of professionals combining experience, creativity, and passion to create unforgettable events.",
      desc: "We are a team of professionals combining experience, creativity, and passion to create unforgettable events.",
      members: {
        deniss: { role: "Event Organizer", bio: "Event organizer with extensive experience.", fullBio: "Event organizer with extensive experience." },
        anastasija: { role: "Visual Advertising Design Specialist", bio: "My approach to any work is rooted in the interaction of design, art, and human psychology.", fullBio: "My approach to any work is rooted in the interaction of design, art, and human psychology. I believe that a successful event or brand is based not only on aesthetics but also on the ability to create an emotional connection with people. My professional experience includes both local and international projects." },
        olegs: { role: "Technical Director", bio: "Combines technical precision with genuine hospitality. The success of an event lies in the details.", fullBio: "My approach to work combines technical precision with genuine hospitality. I believe that the success of an event lies in the details – flawless technical execution that remains invisible, and a personal attitude felt by every guest. In the collective, I am characterized as 'attention, extravert!'." },
        andris: { role: "Art Director", bio: "DJ, promoter, and music event coordinator.", fullBio: "DJ, promoter, and music event coordinator. Resident DJ and party organizer in Latvia and Cyprus. I play speak-easy, fashion, and dance music both on vinyl and in digital format." },
        laura: { role: "Content Creator", bio: "I create advertising and visual content, participate in developing ideas, and I like being in the creative process.", fullBio: "I create advertising and visual content, participate in developing ideas, and I like being in the creative process - from communication to organization. For me, content is about interaction between people, ideas, and brands. People are my main value." },
        vladislavs: { role: "Mixologist", bio: "Experienced mixologist and production manager with over 8 years of experience.", fullBio: "Vladislavs Saveljevs is an experienced mixologist and production manager with over 8 years of experience in high-volume bars in Latvia and Germany. He combines a creative approach to drinks with precise quality control and excellent guest service." }
      }
    },
    certificates: {
      title: "CERTIFICATES"
    },
    partners: {
      title: "COOPERATION PARTNERS"
    },
    footer: {
      title: "We are not for everyone,\nwe are for You.",
      desc: "Contact us to discuss your next event. We create experiences that remain in memory.",
      details: {
        title: "REQUISITES",
        name: "SIA ''PROBAR''",
        reg: "Reg. No. LV40203160448",
        address: "Riga, Dzirnavu 70-6a, LV-1050, Latvia",
        bank: "AS “SWEDBANK”, HABALV22 LV36HABA0551045355405"
      },
      copyright: "© 2026 D.O.M. Event Agency",
      designed: ""
    }
  }
};
