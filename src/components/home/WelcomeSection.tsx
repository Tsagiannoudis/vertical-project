const WelcomeSection = () => {
  return (
    <section className="w-full mx-auto p-4 sm:p-8 bg-[#F3F3F3]">
      <div className="container mx-auto text-black">
        <h1 className="text-4xl mt-6 mb-16 font-bold text-center">
          Καλώς ήρθατε στο Vertical Project
        </h1>

        <div className="max-w-4xl mb-10 mx-auto space-y-4">
          <p className="text-lg">Εδώ που η εκπαίδευση συναντά την έμπνευση.</p>
          <p className="text-lg">
            Είτε είστε εκπαιδευτικός που θέλει να εξελιχθεί, μαθητής που αναζητά
            πρακτικές γνώσεις, ή απλά κάποιος με πάθος για μάθηση — μόλις
            βρήκατε τον χώρο σας.
          </p>
          <p className="text-lg">
            Στο Vertical Project, φέρνουμε κοντά έμπειρους εκπαιδευτές,
            διαδραστικά workshops και μια ζωντανή κοινότητα μαθητών και
            δασκάλων.
          </p>
          <p className="text-lg">
            Στόχος μας είναι να δημιουργούμε εμπειρίες που ξεπερνούν τη θεωρία —
            εστιάζοντας σε δεξιότητες του πραγματικού κόσμου, τη συνεργασία και
            τη συνεχή εξέλιξη.
          </p>
          <p className="text-lg font-semibold">
            Εξερευνήστε. Μάθετε. Αναπτυχθείτε.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
