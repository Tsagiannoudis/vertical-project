# Vertical Project

This is a web application built with Next.js, React, and TypeScript.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine (version 20.x or newer is recommended).

### Installation

1.  Clone the repository to your local machine.
2.  Navigate into the project directory:
    ```bash
    cd vertical-project
    ```
3.  Install the required dependencies using npm:
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run the following command. The `--turbopack` flag is used for faster development.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result. The page will auto-update as you edit the files.

## Available Scripts

In the project directory, you can run the following scripts:

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts a production server.
-   `npm run lint`: Runs the ESLint linter to check for code quality issues.

## Folder Structure

Here is an overview of the key directories and files in this project:

```
.
├── src/
│   ├── app/                # Main application pages and routing (App Router)
│   │   ├── api/            # API routes
│   │   ├── aboutUs/        # About Us page
│   │   ├── courses/        # Courses pages (list and detail)
│   │   ├── workshops/      # Workshops pages (list and detail)
│   │   └── ...             # Other pages (contact, privacy, etc.)
│   │
│   ├── components/         # Reusable React components
│   │   ├── aboutUs/        # Components specific to the About Us feature
│   │   ├── courses/        # Components specific to the Courses feature
│   │   └── ...             # Other feature-specific and general components
│   │
│   ├── data/               # Static data files (e.g., for courses, instructors)
│   │   ├── certifiedInstructors.ts
│   │   ├── teamMembers.ts
│   │   ├── trainingCards.ts
│   │   └── workshops.ts
│   │
│   └── globals.css         # Global CSS styles
│
├── public/                 # Static assets (images, icons, etc.)
│
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── next.config.mjs         # Next.js configuration
```

### Courses
   **Pages**:
    -   `src/app/courses/page.tsx`: The main landing page that displays all available courses.
    -   `src/app/courses/[slug]/page.tsx`: The detail page for a single course, dynamically routed by a unique slug.
   **UI Components**:
    -   `src/components/courses/HeroSectionCourses.tsx`: The hero (top banner) section for the courses page.
    -   `src/components/courses/TrainingHeaderCards.tsx`: Renders header cards above the main course listings.
    -   `src/components/courses/TrainingsCards.tsx`: Displays individual course information in a card format.
    -   `src/components/courses/CourseTab.tsx`: A tabbed view for detailed course information, such as location and a map.
   **Data Source**:
    -   `src/data/trainingCards.ts`: Contains the structured data for all available courses.

### Workshops
   **Pages**:
    -   `src/app/workshops/page.tsx`: The main landing page for all workshops.
    -   `src/app/workshops/[slug]/page.tsx`: The detail page for a single workshop, dynamically routed.
   **UI Components**:
    -   `src/components/workshops/HeroSectionWorkshops.tsx`: The hero section for the workshops page.
    -   `src/components/workshops/WorkshopsList.tsx`: The component responsible for rendering the list of workshops.
    -   `src/components/workshops/ComingSoonSection.tsx`: A placeholder section for upcoming workshops.
   **Data Source**:
    -   `src/data/workshops.ts`: Contains the structured data for all workshops.

### About Us & Instructors
   **Pages**:
    -   `src/app/aboutUs/page.tsx`: The main "About Us" page.
    -   `src/app/certified-instructors/page.tsx`: The main page listing all certified instructors.
    -   `src/app/certified-instructors/[slug]/page.tsx`: The detailed profile page for a single instructor.
   **UI Components**:
    -   `src/components/aboutUs/HeroSectionAbout.tsx`: The hero section for the "About Us" page.
    -   `src/components/aboutUs/MissionSection.tsx`: A component describing the organization's mission.
    -   `src/components/aboutUs/TeamSection.tsx`: A component to introduce team members.
    -   `src/components/aboutUs/HistorySection.tsx`: A component detailing the organization's history.
    -   `src/components/aboutUs/CallToActionCourses.tsx`: A call-to-action banner that directs users to the courses page.
    -   `src/components/aboutUs/CertifiedInstructorsSection.tsx`: A section on the "About Us" page to feature certified instructors.
    -   `src/components/aboutUs/certifiedInstructors/CertifiedInstructors.tsx`: The main layout component for the certified instructors list.
   **Data Sources**:
    -   `src/data/certifiedInstructors.ts`: Contains data for the certified instructors.
    -   `src/data/teamMembers.ts`: Contains data for the team members.

### Contact
   **Pages**:
    -   `src/app/contact/page.tsx`: The main "Contact" page.
   **UI Components**:
    -   `src/components/contact/HeroSectionContact.tsx`: The hero section for the "Contact" page.
    -   `src/components/contact/FormContact.tsx`: Contact Form.
    -   `src/components/contact/ConctaWithUs.tsx`: Title, paragraph and details with social.

### Extra Components
    -   `src/components/extraComponents/ComingSoonSection.tsx`: coming soon section page.
    -   `src/components/extraComponents/ScrollToTopButton.tsx`: button for scrolling to top.
    -   `src/components/extraComponents/ShareButtons.tsx`: 



## Technologies Used

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI**: [React](https://react.dev/)
-   **Linting**: [ESLint](https://eslint.org/)

## Deployment

The easiest way to deploy this Next.js application is to use the [Vercel Platform](https://vercel.com/new), created by the makers of Next.js. Refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.