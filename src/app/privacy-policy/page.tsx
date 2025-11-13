import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου | Vertical Project",
  description: "Πολιτική Απορρήτου και Χρήσης Cookies του Vertical Project.",
};

const PrivacyPolicyPage = () => {
  return (
    <>
    <main className="bg-gray-50 mt-50">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Πολιτική Απορρήτου
          </h1>
          <hr className="border-[#f2e94e] border-2 mt-4 w-56 mx-auto" />
          <p className="text-gray-600 mt-4">Τελευταία ενημέρωση: 24 Μαΐου 2024</p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed text-justify">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Εισαγωγή</h2>
            <p>
              Η παρούσα Πολιτική Απορρήτου περιγράφει πώς το Vertical Project ("εμείς", "εμάς", ή "μας") συλλέγει, χρησιμοποιεί και προστατεύει τις πληροφορίες που μας παρέχετε όταν χρησιμοποιείτε τον ιστότοπό μας. Η προστασία των προσωπικών σας δεδομένων είναι σημαντική για εμάς.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Πληροφορίες που Συλλέγουμε</h2>
            <p>
              Συλλέγουμε πληροφορίες που μας παρέχετε απευθείας, όπως το όνομά σας και η διεύθυνση email σας, όταν συμπληρώνετε μια φόρμα επικοινωνίας ή εκδήλωσης ενδιαφέροντος. Επίσης, ενδέχεται να συλλέγουμε αυτόματα ορισμένες πληροφορίες όταν επισκέπτεστε τον ιστότοπό μας, όπως η διεύθυνση IP σας και πληροφορίες σχετικά με τη χρήση του ιστότοπου μέσω cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Πώς Χρησιμοποιούμε τις Πληροφορίες</h2>
            <p>
              Χρησιμοποιούμε τις πληροφορίες που συλλέγουμε για τους ακόλουθους σκοπούς:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Για να απαντήσουμε στα ερωτήματα και τα αιτήματά σας.</li>
              <li>Για να σας παρέχουμε πληροφορίες σχετικά με τα εκπαιδευτικά μας προγράμματα και τα εργαστήρια.</li>
              <li>Για να βελτιώσουμε τη λειτουργικότητα και το περιεχόμενο του ιστότοπού μας.</li>
              <li>Για να κατανοήσουμε πώς οι χρήστες αλληλεπιδρούν με τον ιστότοπό μας, με σκοπό τη βελτίωση της εμπειρίας τους.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Πολιτική Cookies</h2>
            <p>
              Ο ιστότοπός μας χρησιμοποιεί cookies για να βελτιώσει την εμπειρία σας. Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σας. Χρησιμοποιούμε:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Απαραίτητα Cookies:</strong> Αυτά είναι απαραίτητα για τη βασική λειτουργικότητα του ιστότοπου, όπως η αποθήκευση της συναίνεσής σας για τα cookies.</li>
              <li><strong>Cookies Ανάλυσης (Προαιρετικά):</strong> Χρησιμοποιούμε cookies για την ανάλυση της επισκεψιμότητας (π.χ. Google Analytics) για να κατανοήσουμε καλύτερα τις ανάγκες των χρηστών μας. Αυτά τα cookies ενεργοποιούνται μόνο αφού δώσετε τη συγκατάθεσή σας.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Τα Δικαιώματά σας</h2>
            <p>
              Έχετε το δικαίωμα να ζητήσετε πρόσβαση, διόρθωση ή διαγραφή των προσωπικών σας δεδομένων που διατηρούμε. Μπορείτε επίσης να αποσύρετε τη συγκατάθεσή σας για τη χρήση μη απαραίτητων cookies ανά πάσα στιγμή.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Επικοινωνία</h2>
            <p>
              Για οποιαδήποτε ερώτηση ή αίτημα σχετικά με την παρούσα Πολιτική Απορρήτου, παρακαλούμε επικοινωνήστε μαζί μας μέσω της <a href="/contact" className="underline hover:text-[#F2E94E] transition-colors">φόρμας επικοινωνίας</a> μας.
            </p>
          </section>
        </div>
      </div>
    </main>
    </>
  );
};

export default PrivacyPolicyPage;
