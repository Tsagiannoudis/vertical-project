"use client";
import Link from "next/link";
import { Tabs, Tab } from "@heroui/tabs";
import { trainings } from "../../data/trainingCards"; // Import the trainings data

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

export default function CourseTab({ trainingSlug }: { trainingSlug: string }) {
  const training = trainings.find((t) => t.slug === trainingSlug);

  if (!training || !training.locations || training.locations.length === 0) {
    return null; // Or render a message indicating no locations
  }

  return (
    <Tabs
      aria-label="Course Locations"
      variant="solid"
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
      {training.locations.map((location, index) => (
        <Tab key={location.city} title={location.city}>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-gray-700">
              {/* Στήλη 1: Πληροφορίες */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-10">
                  Πληροφορίες Διεξαγωγής
                </h3>
                <p>
                  Το εκπαιδευτικό στη {location.city} πραγματοποιείται στο
                  στούντιο {location.studio}, {location.address}.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Διεύθυνση:</strong> {location.address}
                  </li>
                  <li>
                    <strong>Ημέρες και ώρα:</strong>
                    <div className="mt-2 space-y-2 pl-2">
                      {location.dates.map((date, dateIndex) => (
                        <div key={dateIndex} className="flex items-center">
                          <CalendarIcon /> <span>{date}</span>
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
                {location.facebookEventUrl && (
                  <Link
                    href={location.facebookEventUrl}
                    className="inline-block bg-[#F2E94E] text-black font-semibold py-3 px-8 rounded-ss-2xl rounded-br-2xl hover:bg-[#b9b788] transition-colors duration-300 w-fit mt-10"
                  >
                    Πληροφορίες & Εγγραφές
                  </Link>
                )}
              </div>
              {/* Στήλη 2: Χάρτης */}
              <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
                {location.mapUrl && (
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Χάρτης για τη διεύθυνση στην ${location.city}`}
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </Tab>
      ))}
    </Tabs>
  );
}
