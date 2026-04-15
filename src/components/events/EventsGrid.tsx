import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { events } from '@/data/events';
import { trainings } from '@/data/trainingCards'; // Χρησιμοποιούμε το trainingCards.ts που περιέχει τα trainings

interface BlogItem {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
  description: string;
  link: string;
  type: 'Workshop' | 'Training';
}

// Helper to parse dates
const monthMap: { [key: string]: number } = {
  'Ιανουαρίου': 0, 'Φεβρουαρίου': 1, 'Μαρτίου': 2, 'Απριλίου': 3, 'Μαΐου': 4, 'Ιουνίου': 5,
  'Ιουλίου': 6, 'Αυγούστου': 7, 'Σεπτεμβρίου': 8, 'Οκτωβρίου': 9, 'Νοεμβρίου': 10, 'Δεκεμβρίου': 11
};

const parseDate = (dateString: string): Date | null => {
  if (!dateString || dateString.includes('Δείτε')) return null;

  // parsing "DD/MM/YYYY" format from trainings
  const slashParts = dateString.split('/');
  if (slashParts.length >= 3) {
    const day = parseInt(slashParts[0].split('-')[0], 10); 
    const month = parseInt(slashParts[1], 10) - 1;
    const year = parseInt(slashParts[2].split(' ')[0], 10); 
    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      return new Date(year, month, day);
    }
  }

  // Try parsing "DD MMMM YYYY" format from events
  const spaceParts = dateString.split(' ');
  if (spaceParts.length === 3) {
    const day = parseInt(spaceParts[0], 10);
    const month = monthMap[spaceParts[1]];
    const year = parseInt(spaceParts[2], 10);
    if (!isNaN(day) && month !== undefined && !isNaN(year)) {
      return new Date(year, month, day);
    }
  }
  
  return null; 
};


const EventsGrid = () => {
  // 1. Μετατροπή των Events σε κοινή μορφή BlogItem
  const normalizedEvents: BlogItem[] = events.map((event) => ({
    id: `event-${event.id}`,
    title: event.title,
    image: event.image,
    date: event.date, // Π.χ. "08 Νοεμβρίου 2025"
    location: event.location,
    description: event.shortDescription,
    link: `/events/${event.slug}`, // Τα events οδηγούν σε /events/
    type: 'Workshop',
  }));

  // 2. Μετατροπή των Trainings, δημιουργώντας μια κάρτα για κάθε τοποθεσία.
  const normalizedTrainings: BlogItem[] = trainings.flatMap((training) => {
    if (!training.locations || training.locations.length === 0) {
      return []; // Skip trainings without locations
    }

    // Δημιουργούμε μια κάρτα για κάθε τοποθεσία
    return training.locations.map((location, index) => {
      // Use the first date of this location for display and sorting
      const displayDate = location.dates.length > 0
        ? location.dates[0].split(' ')[0] // e.g., "03/07/2026" or "31/01-01/02/2026"
        : 'Δείτε τις ημερομηνίες';
        
      return {
        id: `training-${training.id}-${location.city}-${index}`, 
        title: training.title,
        image: training.image,
        date: displayDate,
        location: location.city, // The specific city for this card
        description: training.shortDescription,
        link: `/courses/${training.slug}?city=${encodeURIComponent(location.city)}-${index}`,
        type: 'Training',
      };
    });
  });

  // 3. Συνδυασμός των λιστών
  const allItems = [...normalizedEvents, ...normalizedTrainings];

  allItems.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);

    if (!dateA && !dateB) return 0; // both have invalid dates
    if (!dateA) return 1;  // put items without a valid date at the end
    if (!dateB) return -1; // put items without a valid date at the end

    return dateB.getTime() - dateA.getTime(); // Sort descending
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
              {/* Εικόνα */}
              <div className="relative h-64 w-full overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Badge Τύπου (Workshop/Training) */}
                <div className="absolute top-4 right-4 bg-[#F2E94E] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                  {item.type}
                </div>
              </div>

              {/* Περιεχόμενο */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Μεταδεδομένα (Ημερομηνία / Τοποθεσία) */}
                <div className="diplay-block items-center text-[13px] text-black mb-6 space-x-4">
                  <div className="flex items-center">
                    <span className="mr-1">📅</span>
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center truncate">
                    <span className="mr-1">📍</span>
                    <span className="truncate max-w-[300px]">{item.location}</span>
                  </div>
                </div>

                {/* Τίτλος */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Περιγραφή */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {item.description}
                </p>

                {/* Κουμπί */}
                <Link href={item.link} className="mt-auto">
                  <button className="text-black font-semibold text-sm border-b-2 border-[#F2E94E] hover:bg-[#F2E94E] transition-all duration-300 pb-0.5 px-1">
                    ΠΕΡΙΣΣΟΤΕΡΑ
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;