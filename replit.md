# WoofWise - Dog Breed Detector

## Overview
WoofWise is a comprehensive dog breed detection landing page that uses AI to identify dog breeds from uploaded photos. The application features a full marketing website with educational content, testimonials, and an FAQ section, all centered around the core AI-powered breed detection tool.

## Recent Changes
- **2025-11-04**: Full landing page implementation
  - Expanded from simple detector to complete landing page
  - Created sticky navigation with smooth scroll functionality
  - Added Paws & Ponder blog section with 3 AI-generated article images
  - Implemented Testimonials section with user reviews and star ratings
  - Built FAQ accordion with common questions
  - Created comprehensive footer with navigation, legal, and social links
  - Integrated all sections into cohesive single-page application
  - Successfully tested end-to-end with all sections and detector functionality working

## Project Architecture

### Frontend Stack
- React with TypeScript
- Tailwind CSS for styling
- Wouter for routing
- @gradio/client for Hugging Face API integration
- Shadcn UI components (Button, Card, Avatar, Accordion)
- Lucide React icons and React Icons (social media)

### Design System
- **Color Palette**: Warm beige background (#fcfaf5) with brown (#c08c5c) primary color
- **Typography**: Poppins font family (weights: 400, 600, 700)
- **Layout**: Single-page application with smooth scroll navigation
- **Components**: Card-based layouts, sticky header, responsive grid systems

### Page Sections
1. **Navigation Header**: Sticky navigation with logo, menu links (Blog, Reviews, FAQ), and Get Started CTA
2. **Detector Section**: Main hero with AI breed identification tool
3. **Paws & Ponder**: Blog-style section with 3 article cards and AI-generated images
4. **Testimonials**: User reviews with avatars, names, and 5-star ratings
5. **FAQ**: Accordion component with frequently asked questions
6. **Footer**: Branding, navigation, legal links, and social media icons

### API Integration
- **Service**: Hugging Face Gradio API
- **Model**: SuryaKathyakeyaBoddi/dog-breed-ai
- **Endpoint**: /predict
- **Response Format**: Array with "Predicted Breed" and "Decision Score" fields

## Features (Complete)
1. ✅ Sticky navigation with smooth scroll to sections
2. ✅ Image upload with drag-and-drop interface
3. ✅ Live image preview
4. ✅ Real-time breed identification via Hugging Face API
5. ✅ Confidence percentage display with decision score
6. ✅ Loading states with spinner
7. ✅ Error handling
8. ✅ Blog section with AI-generated images and article cards
9. ✅ User testimonials with avatars and star ratings
10. ✅ FAQ accordion with expandable answers
11. ✅ Comprehensive footer with social links
12. ✅ Fully responsive design for mobile and desktop

## Technical Implementation

### Components
- `Navigation.tsx`: Sticky header with smooth scroll navigation
- `DetectorSection.tsx`: Core AI breed identification functionality
- `PawsPonder.tsx`: Blog article cards with generated images
- `Testimonials.tsx`: User reviews with ratings
- `FAQ.tsx`: Accordion-based Q&A section
- `Footer.tsx`: Site footer with links and social icons

### Generated Assets
- 3 AI-generated blog images (golden retriever, forest trail, puppy cuddle)
- Stored in `attached_assets/generated_images/`
- Imported using @assets alias

### Navigation Behavior
- Smooth scroll to section IDs (#home, #blog, #reviews, #faq)
- Implemented using element.scrollIntoView({ behavior: 'smooth' })
- Works from both header navigation and footer links

## User Preferences
- Clean, friendly interface for non-technical users
- Fast, simple breed identification workflow
- Mobile-responsive design
- Educational content about dog breeds
- Social proof through testimonials
- Comprehensive FAQ for user questions

## Testing
- End-to-end tests covering all sections and navigation
- API integration tested with real Hugging Face model
- Smooth scroll navigation verified across all links
- All interactive elements tested (accordion, upload, buttons)
