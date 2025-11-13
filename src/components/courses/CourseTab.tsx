"use client";
import Link from "next/link";

import { Tabs, Tab } from "@heroui/tabs";

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
      clipRule="evenodd"
    />
  </svg>
);

export default function CourseTab() {
  return (
    <Tabs
      aria-label="Course Locations" // Προσθέτουμε ένα κατάλληλο aria-label για προσβασιμότητα
      variant="solid" // Αλλάζουμε την παραλλαγή σε "solid" για εμφάνιση τύπου "pill"
      radius="full"
      classNames={{
        tabList: "p-1 bg-gray-200", 
        cursor: "bg-[#F2E94E] shadow",
        tab: "py-3 h-auto", 
        tabContent:
          "text-gray-500 group-data-[selected=true]:text-black font-semibold",
        panel: "p-6 bg-white rounded-2xl mt-6 shadow-md",
      }}
    >

      <Tab key="thessaloniki" title="Θεσσαλονίκη">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-gray-700">
            {/* Στήλη 1: Πληροφορίες */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-10">
                Πληροφορίες Διεξαγωγής
              </h3>
              <p>
                Το εκπαιδευτικό στη Θεσσαλονίκη πραγματοποιείται στο στούντιο
                Αιώρησις, περιοχή Ανάληψη.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Διεύθυνση:</strong> Αρτέμιδος 42, 54644
                </li>
                <li>
                  <strong>Ημέρες και ώρα:</strong>
                  <div className="mt-2 space-y-2 pl-2">
                    <div className="flex items-center">
                      <CalendarIcon /> <span>18-19/10/2025 09:30-17:00</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon /> <span>01-02/11/2025 09:30-17:00</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon /> <span>08-09/11/2025 09:30-17:00</span>
                    </div>
                  </div>
                </li>
              </ul>
              <Link
                href="https://www.facebook.com/events/717545281280052/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22external_search_engine%22%7D%2C%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D]%2C%22ref_notif_type%22%3Anull%7D&locale=el_GR"
                className="inline-block bg-[#F2E94E] text-black font-semibold py-3 px-8 rounded-ss-2xl rounded-br-2xl hover:bg-[#b9b788] transition-colors duration-300 w-fit mt-10"
              >
                Πληροφορίες & Εγγραφές
              </Link>
            </div>
            {/* Στήλη 2: Χάρτης */}
            <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.0584604262363!2d22.962340199999996!3d40.606533799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8399b4833d3db%3A0x8d159095d7982cea!2sAiorisis!5e0!3m2!1sel!2sgr!4v1763071615771!5m2!1sel!2sgr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Χάρτης για τη διεύθυνση στη Θεσσαλονίκη"
              ></iframe>
            </div>
          </div>
        </div>
      </Tab>

      <Tab key="athens" title="Αθήνα">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-gray-700">
            {/* Στήλη 1: Πληροφορίες */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-10">
                Πληροφορίες Διεξαγωγής
              </h3>
              <p>
                Το εκπαιδευτικό στη Αθήνα πραγματοποιείται στο στούντιο
                Swan Athens, περιοχή Καλλιμάρμαρο.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Διεύθυνση:</strong> Υμηττού 219, 11632
                </li>
                <li>
                  <strong>Ημέρες και ώρα:</strong>
                  <div className="mt-2 space-y-2 pl-2">
                    <div className="flex items-center">
                      <CalendarIcon /> <span>31/01-01/02/2026 09:30-17:00</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon /> <span>07-08/02/2026 09:30-17:00</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon /> <span>14-15/02/2026 09:30-17:00</span>
                    </div>
                  </div>
                </li>
              </ul>
              <Link
                href="https://www.facebook.com/events/1342596247278525?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22user_timeline%22%7D%2C%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D]%2C%22ref_notif_type%22%3Anull%7D&locale=el_GR"
                className="inline-block bg-[#F2E94E] text-black font-semibold py-3 px-8 rounded-ss-2xl rounded-br-2xl hover:bg-[#b9b788] transition-colors duration-300 w-fit mt-10"
              >
                Πληροφορίες & Εγγραφές
              </Link>
            </div>
            {/* Στήλη 2: Χάρτης */}
            <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.6149745786684!2d23.73953927812815!3d37.96277520130459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd7ba7b560bb%3A0x1402609b5f2b49bc!2sSWAN%20Athens%20-%20Shine%20in%20Grace!5e0!3m2!1sel!2sgr!4v1763071683593!5m2!1sel!2sgr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Χάρτης για τη διεύθυνση στην Αθήνα"
              ></iframe>
            </div>
          </div>
        </div>
      </Tab>

    </Tabs>
  );
}
