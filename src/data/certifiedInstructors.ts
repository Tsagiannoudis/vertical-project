export interface CertifiedInstructor {
  id: number;
  name: string;
  imageUrl: string;
  certifications: string[];
  location: string;
  slug: string;
  bio: string;
  fullBio?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
  };
  contactEmail?: string;
}

export const certifiedInstructors: CertifiedInstructor[] = [
  {
    id: 1,
    name: "Τσιακίρη Ελένη",
    imageUrl: "/certifiedInstructors/tsiakiri-eleni.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Θεσσαλονίκη",
    slug: "tsiakiri-eleni",
    bio: "",
    fullBio:
      "Εχω μεγαλώσει μέσα από τη κίνηση. Με πολυ αγάπη και σεβασμό στο σώμα, μου αρέσει μέσα από διαφορετικές τεχνικές να ανακαλύπτω που μπορεί να φτάσει το σώμα και πως μπορούν όλα τα είδη να συνδυαστούν. Μέσα από το χορό μαθαίνω τη σύνδεση της κάθε κίνησης με την επόμενη και ανακαλύπτω καινούργιους τρόπους να τα συνδεω. Η γιόγκα είναι ένα είδος που με βοηθάει να ακούω το σώμα μου και να νιώθω την κάθε κίνηση. Μου αρέσουν οι ροές στα μαθήματα γιογκας και η βασική μου προτεραιότητα είναι να συνδέσουμε το νου μας με το σώμα μας αφήνοντας όλες τις σκέψεις έξω από την αίθουσα.",
    socialMedia: {
      facebook: "https://www.facebook.com/eleni.tsiakiri.37",
      instagram: "https://www.instagram.com/elenitsiakiri/",
    },
    contactEmail: "elenitsiak4@gmail.com",
  },
  {
    id: 2,
    name: "Μπακιρτζή Ελένη",
    imageUrl: "/certifiedInstructors/bakirtzi-eleni.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Θεσσαλονίκη",
    slug: "mpakirtzi-eleni",
    bio: "",
    fullBio:
      "Η Ελένη είναι Τοπογράφος Μηχανικός με βαθιά σύνδεση με τη φύση και τη σωματική άσκηση. Η ενασχόλησή της με τη yoga ξεκίνησε πριν από σχεδόν είκοσι χρόνια και εξελίχθηκε σε βασικό κομμάτι της καθημερινότητάς της. Τα τελευταία επτά χρόνια ανακάλυψε την aerial yoga, μια πρακτική που την κέρδισε αμέσως και την οδήγησε σε ακόμη βαθύτερη εξερεύνηση της κίνησης και της ευθυγράμμισης του σώματος. Σήμερα συνεχίζει την προσωπική της πρακτική με αφοσίωση, ενώ παράλληλα διδάσκει vinyasa και aerial yoga. Πιστεύει ότι η yoga είναι ένα ταξίδι συνεχούς αυτοβελτίωσης και εσωτερικής ισορροπίας, ενώ η aerial yoga αποτελεί για εκείνη μια ανεξάντλητη πηγή χαράς και ελευθερίας. Στόχος της είναι να καλλιεργεί συνέπεια και επίγνωση στην πρακτική, δίχως προσκόλληση στο αποτέλεσμα, προσφέροντας στους μαθητές της έναν ασφαλή και υποστηρικτικό χώρο για εξερεύνηση και ανάπτυξη.",
    socialMedia: {
      facebook: "https://www.facebook.com/ebakirtzi",
      instagram: "https://www.instagram.com/ebakirtzi",
    },
    contactEmail: "ebakirtzi@gmail.com",
  },
  {
    id: 3,
    name: "Ιωσήφ Θενια",
    imageUrl: "/certifiedInstructors/iosif-thenia.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Θεσσαλονίκη",
    slug: "iosif-thenia",
    bio: "",
    fullBio:
      "Η επαφή μου με την aerial yoga ξεκίνησε πριν 3 χρόνια και συνεχίζει μέσα από τις πρακτικές και τα εκπαιδευτικά να εξελίσσεται. Αγαπάω την σύνδεση της yoga με τα εναέρια ακροβατικά και έχω βρει μέσα σε αυτό ενα δημιουργικό τρόπο να εκφράζομαι. Δημιουργώ μαθήματα που συνδυάζουν κίνηση, ρυθμο, τεχνική και ελευθερία. Στόχος μου είναι να προσφέρω μια εμπειρία που ενώνει τεχνική, ασφάλεια και καλλιτεχνική έκφραση, όπου κάθε ασκούμενος μπορεί να εξελιχθεί να δυναμώσει το σώμα αλλά και το πνεύμα και να ανακαλύψει την χαρά της κίνησης.",
    socialMedia: {
      facebook: "https://www.facebook.com/theniaiosif",
      instagram: "https://www.instagram.com/theniaiosif",
    },
    contactEmail: "theniaiosif@gmail.com",
  },
  {
    id: 4,
    name: "Καλαμάρα Μαρία",
    imageUrl: "/certifiedInstructors/kalamara-maria.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Θεσσαλονίκη",
    slug: "kalamara-maria",
    bio: "",
    fullBio:
      "Η τέχνη της κίνησης υπήρξε πάντα κομμάτι της ζωής μου. Σπούδασα στο Τμήμα Θεάτρου της Σχολής Καλών Τεχνών και μέσα από αυτή τη διαδρομή ανακάλυψα τη δύναμη που έχει το σώμα να εκφράζει, να συνδέει και να θεραπεύει. Η γιόγκα ήρθε ως φυσική συνέχεια, ανοίγοντας για μένα ένα μονοπάτι που ξεκίνησε με τις 200ωρες Yoga Teacher Training και συνεχίζει να με οδηγεί βαθύτερα στην αυτογνωσία, την ισορροπία και την παρουσία. Η αιώρηση μέσω της aerial yoga, μου δίδαξε την τόλμη, τον ρυθμό, την ελευθερία που σου προσφέρει η αιώρα αλλά και την εμπιστοσύνη στον εαυτό. Για αυτο και στόχος μου είναι να εμπνέω τους ανθρώπους να συνδέονται βαθύτερα με τον εαυτό τους, να αγκαλιάζουν την ελευθερία της έκφρασης και να βιώνουν την ελαφρότητα και τη μεταμορφωτική δύναμη που προσφέρει η aerial yoga .",
    socialMedia: {
      facebook: "#",
      instagram: "https://www.instagram.com/maria_kalamara/",
    },
    contactEmail: "maria.kalam98@yahoo.com",
  },
  {
    id: 5,
    name: "Σαλμάνη Αικατερίνη",
    imageUrl: "/certifiedInstructors/salmani-katerina.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Θεσσαλονίκη",
    slug: "salmani-aikaterini",
    bio: "",
    fullBio:
      "Σκοπός μου είναι να βοηθήσω αυτούς που θέλουν να φροντίσουν την ψυχή και το σώμα τους, ώστε να απολαμβάνουν την καθημερινότητα τους νιώθοντας ευεξία.",
    socialMedia: {
      facebook: "https://www.facebook.com/profile.php?id=100014527351537",
      instagram: "https://www.instagram.com/katerina.salmani/",
    },
    contactEmail: "katerinaki.sal90@gmail.com",
  },
  {
    id: 6,
    name: "Μπατγίδου Ελένη",
    imageUrl: "/certifiedInstructors/batgidou-eleni.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Ρίζια Έβρου",
    slug: "batgidou-eleni",
    bio: "",
    fullBio:
      "Ασχολούμαι με την Aerial Yoga από το 2019, μια πρακτική που αγάπησα από τα πρώτα μου μαθήματα στη Θεσσαλονίκη. Σήμερα βρίσκομαι στην Ορεστιάδα και συνεχίζω με την ίδια αφοσίωση, έχοντας ολοκληρώσει την εκπαίδευσή μου ως aerial yoga teacher το 2025. Αυτό που με κερδίζει στην Aerial Yoga είναι ο συνδυασμός δύναμης, ροής και εσωτερικής σύνδεσης· κάθε μάθημα γίνεται ευκαιρία να ανακαλύπτεις τις δυνατότητές, να ενδυναμώνει το σώμα και να ηρεμείς μέσα από την αιώρηση.",
    socialMedia: {
      facebook: "https://www.facebook.com/lena.ba.503",
      instagram: "https://www.instagram.com/lena_la_bat",
    },
    contactEmail: "lenalabatgidou@gmail.com",
  },
  {
    id: 7,
    name: "Γεωργιάδου Ήρα",
    imageUrl: "/certifiedInstructors/georgiadou-ira.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Θεσσαλονίκη",
    slug: "georgiadou-hra",
    bio: "",
    fullBio:
      "Ονομάζομαι Ήρα Γεωργιάδου ήρθα σε επαφή με την aerial πριν 5 χρόνια και από τότε την αγάπησα,θεωρώ ότι σε κάνει να πιστεύεις στον εαυτό σου ,να ξεπερνάς τους φόβους σου και να νιώθεις ανάταση ψυχής.Παρακολούθησα μαθήματα σαν ασκούμενη,σεμινάρια και τελείωσα το εκπαιδευτικό των 60h .Είναι ένα ταξίδι που ξεκίνησε και με παρέσυρε, ανυπομονώ με την διδασκαλία μου να παρασύρω και άλλους σε αυτό το μαγικό ταξίδι. Facebook:Ηρα Γεωργιάδου.",
    socialMedia: {
      facebook: "https://www.facebook.com/hraa.georgiadou.5",
      instagram: "https://www.instagram.com/hrageorgiadou/",
    },
    contactEmail: "hraageorgiadou@hotmail.com",
  },
  {
    id: 8,
    name: "Μποκοΐτση Χριστίνα",
    imageUrl: "/certifiedInstructors/mpokoitsi-christina.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Θεσσαλονίκη",
    slug: "mpokoitsi-christina",
    bio: "",
    fullBio:
      "Ονομάζομαι Χριστίνα Μποκοΐτση και αγαπώ τη φυσική άσκηση και τη διαρκή εξέλιξη μέσα από νέες εμπειρίες. Παρακολούθησα σεμινάριο aerial yoga αποκτώντας βασικές γνώσεις και εξοικείωση με τη μέθοδο.Σπουδάζω Sports Coaching and Physical Education στο Μητροπολιτικό Κολλέγιο Θεσσαλονίκης όπου εμβαθύνω στην προπονητική, την κίνηση και τη λειτουργία του σώματος. Στόχος μου είναι να συνεχίσω να αναπτύσσω τις δεξιότητές μου σε διαφορετικά είδη άσκησης και να διευρύνω την εμπειρία μου στον χώρο της φυσικής αγωγής.",
    socialMedia: {
      facebook: "https://www.facebook.com/xristina.boko",
      instagram: "https://www.instagram.com/christina.mpokoitsi/",
    },
    contactEmail: "christinampokoitse@gmail.com",
  },
  {
    id: 9,
    name: "Προβιδά Ειρήνη",
    imageUrl: "/certifiedInstructors/unknown-photo.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Θεσσαλονίκη",
    slug: "provida-eirini",
    bio: "",
    fullBio: "",
    socialMedia: {
      facebook: "#",
      instagram: "#",
    },
    contactEmail: "providaeirini@gmail.com",
  },
  {
    id: 10,
    name: "Μαρτάκου Αναστασία",
    imageUrl: "/certifiedInstructors/unknown-photo.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Θεσσαλονίκη",
    slug: "martakou-anastasia",
    bio: "",
    fullBio: "",
    socialMedia: {
      facebook: "#",
      instagram: "#",
    },
    contactEmail: "anastasia.mart@hotmail.com",
  },
  {
    id: 11,
    name: "Χαραλαμπιδου Ευθυμια",
    imageUrl: "/certifiedInstructors/charalampidou-efthymia.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Θεσσαλονίκη",
    slug: "charalampidou-efthymia",
    bio: "",
    fullBio:
      "Η αγάπη μου για την κίνηση και την εξερεύνηση των δυνατοτήτων του σώματος με οδήγησε στον κόσμο της Aerial Yoga. Έχοντας ολοκληρώσει την εκπαίδευσή μου, συνεχίζω να εξελίσσομαι, να ανακαλύπτω και να μοιράζομαι την ομορφιά αυτής της πρακτικής, συνδυάζοντας δύναμη, ισορροπία και ελευθερία.",
    socialMedia: {
      facebook: "#",
      instagram: "#",
    },
    contactEmail: "efichar@gmail.com",
  },
  {
    id: 12,
    name: "Μιχαηλούδη Βάσω",
    imageUrl: "/certifiedInstructors/michailoudi-vasiliki.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Θεσσαλονίκη",
    slug: "michailoudi-vasiliki",
    bio: "",
    fullBio:
      "Είμαι νοσηλεύτρια στην ειδική αγωγή και ασχολούμαι με την aerial yoga από το 2023.\n Ήταν κάτι που το ξεκίνησα δοκιμαστικά και στην πορεία κατάλαβα ότι μου ταιριάζει και ήθελα να το εντάξω περισσότερο και πιο ενεργά στην καθημερινότητά μου. Για εμένα η aerial yoga, πέρα από γυμναστική, είναι ένας τρόπος έκφρασης, εκτόνωσης και ηρεμίας. Στόχος μου, είναι τόσο η θεραπευτική προσέγγιση όσο και η απελευθέρωση και ηρεμία της ψυχής, σε συνδυασμό με την κίνηση, την ενδυνάμωση και την έκφραση του σώματος.",
    socialMedia: {
      facebook: "#",
      instagram: "#",
    },
    contactEmail: "vacoula.michailoudi.9@gmail.com",
  },
  {
    id: 13,
    name: "Καράτζια Ανασταία",
    imageUrl: "/certifiedInstructors/karatzia-anastasia.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Θεσσαλονίκη",
    slug: "karatzia-anastasia",
    bio: "",
    fullBio:
      "Η Αναστασία είναι ηλεκτρολόγος μηχανικός και εργάζεται στον χώρο της πληροφορικής.\n Η γνωριμία της με την aerial yoga πριν από πέντε χρόνια αποτέλεσε την αρχή ενός ξεχωριστού ταξιδιού, μέσα από το οποίο ανακάλυψε τη χαρά της κίνησης, την ελευθερία της έκφρασης και τη δύναμη της προσωπικής εξέλιξης.\n Η aerial yoga της έμαθε να εμπιστεύεται περισσότερο τον εαυτό της συνειδητοποιώντας πως με υπομονή, επιμονή και πίστη στις δυνατότητές μας μπορούμε να καταφέρουμε περισσότερα απ’ όσα φανταζόμαστε.\n Σήμερα, θέλει να μοιραστεί αυτή την αγάπη για την aerial yoga και να εμπνεύσει κι άλλους ανθρώπους να ανακαλύψουν τη δική τους δύναμη μέσα από την κίνηση",
    socialMedia: {
      facebook: "#",
      instagram: "#",
    },
    contactEmail: "anastasiakara92@gmail.com",
  },
  {
    id: 14,
    name: "Τοπολίγκα Βασιλική",
    imageUrl: "/certifiedInstructors/vasiliki-topoligka.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Θεσσαλονίκη",
    slug: "vasiliki-topoligka",
    bio: "",
    fullBio:
      "Η aerial yoga μπήκε στη ζωή μου και πολύ γρήγορα έγινε η αγαπημένη μου στιγμή της ημέρας.\n Μέσα από την κίνηση, τη συγκέντρωση και την αίσθηση της αιώρησης, ανακαλύπτω κάθε φορά μια διαφορετική ισορροπία ανάμεσα στη σωματική άσκηση, τη δημιουργικότητα και την ελευθερία της πρακτικής.\n Παρακολούθησα το εκπαιδευτικό πρόγραμμα των 60h και συνεχίζω να εξελίσσομαι μέσα από τη δική μου προσωπική πρακτική, διατηρώντας την ίδια διάθεση για εξερεύνηση που είχα από την πρώτη μέρα.\n Μέσα από τη διδασκαλία, θα ήθελα να δημιουργήσω έναν χώρο όπου ο καθένας θα μπορεί να ανακαλύψει τη χαρά της κίνησης, να αποσυνδεθεί από την καθημερινότητα και να απολαύσει τη δική του μοναδική εμπειρία στην αιώρα.",
    socialMedia: {
      facebook: "#",
      instagram: "#",
    },
    contactEmail: "vasilikitop8@gmail.com",
  },
  {
    id: 15,
    name: "Καλαντζή Χριστίνα",
    imageUrl: "/certifiedInstructors/kalantzi-xristina.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Θεσσαλονίκη",
    slug: "kalantzi-xristina",
    bio: "",
    fullBio:
      "Είμαι διατροφολόγος και πιστοποιημένη δασκάλα Hatha Yoga (200h), με αγάπη για την κίνηση, το σώμα και την ολιστική προσέγγιση της ευεξίας.\n Ασχολούμαι με τις εναέριες τέχνες από το 2022, έναν χώρο μέσα από τον οποίο ανακάλυψα νέους τρόπους έκφρασης, δημιουργικότητας και σύνδεσης με το σώμα.\n Το 2026 ολοκλήρωσα την εκπαίδευσή μου στην Aerial Yoga, διευρύνοντας ακόμη περισσότερο τη σχέση μου με την κίνηση και την πρακτική της yoga.\n Μέσα από την κίνηση, την αναπνοή και τη συνειδητή διατροφή, στόχος μου είναι να δημιουργώ έναν χώρο όπου κάθε άνθρωπος μπορεί να εξερευνήσει το σώμα του, να ανακαλύψει τις δυνατότητές του και να βρει τη δική του ισορροπία.",
    socialMedia: {
      facebook: "#",
      instagram: "#",
    },
    contactEmail: "christinakalantzi95@gmail.com",
  },
  {
    id: 16,
    name: "Νίκου Κωνσταντίνα",
    imageUrl: "/certifiedInstructors/konstantina-nikou.webp",
    certifications: ["Aerial Yoga Certified Teacher"],
    location: "Θεσσαλονίκη",
    slug: "nikou-konstantina",
    bio: "",
    fullBio:
      "Πρώτη φορά ήρθα σε επαφή το 2023 με την aerial yoga και την αγάπησα.\n Η aerial Yoga με βοήθησε να δυναμώσω και να αποκτήσω αυτοπεποίθηση. Μέσα από τη συνεχή πρακτική και τη συμμετοχή μου σε σεμινάρια, κατανόησα σε βάθος την τεχνική και την ασφάλεια των κινήσεων και θέλησα να εξειδικευτω πάνω σε αυτό.\n Η εκπαίδευση και μου έδωσε όλα τα απαραίτητα εφόδια για να μπορώ πλέον να μοιραστώ αυτή την εμπειρία με άλλους και με έκανε να αγαπήσω τα εναέρια ακόμα περισσότερο",
    socialMedia: {
      facebook: "#",
      instagram: "#",
    },
    contactEmail: "konstantina.nikou.123@gmail.com",
  },
];
