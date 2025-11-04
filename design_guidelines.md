# WoofWise - Dog Breed Detector Design Guidelines

## Design Approach
**Reference-Based Approach**: Clean, friendly pet-tech aesthetic inspired by modern AI applications with warm, approachable design language. The interface prioritizes simplicity and ease-of-use for non-technical users who want quick breed identification.

## Core Design Elements

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Weights**: 400 (regular), 600 (semi-bold), 700 (bold)
- **Hierarchy**:
  - H1: 2.5rem, color #222, bold - main headline
  - H2: 1.5rem, color #333 - results section headers
  - H3: 2rem, color #c08c5c - breed name display
  - Body: 1.1rem, color #555 - supporting text
  - Small text: 0.9rem, color #999 - helper text

### Color Palette
- **Background**: #fcfaf5 (warm beige)
- **Primary Action**: #c08c5c (warm brown)
- **Card Background**: #ffffff (pure white)
- **Text Primary**: #222 - #333
- **Text Secondary**: #555
- **Text Tertiary**: #999
- **Borders**: #ddd - #eee
- **Error State**: red

### Layout System
- **Spacing Units**: Use 1rem (16px) base with multiples (1rem, 1.5rem, 2rem)
- **Container**: max-width 500px for main detector, centered with flexbox
- **Padding**: 20px global body padding, 2rem internal component padding
- **Border Radius**: 12px for cards, 8px for upload area, 30px for buttons

## Component Library

### Main Detector Card
- White background with subtle shadow (0 4px 20px rgba(0,0,0,0.05))
- 1px solid border (#eee)
- 12px border radius
- 2rem internal padding

### Upload Area
- 2px dashed border (#ddd), transitions to #c08c5c on hover
- 8px border radius
- Minimum height 150px
- Flexbox centered content
- Background hover state: #fdfdfa
- Cursor pointer

### Image Preview
- Max-width 100%, max-height 200px
- 8px border radius
- 1rem top margin
- Hidden by default, shown when image uploaded

### Primary Button
- Full width within container
- Background: #c08c5c, white text
- 14px vertical padding, 30px border radius
- Font size 1.1rem, weight 600
- Hover: opacity 0.9
- Disabled state: #ccc background, not-allowed cursor

### Loading Spinner
- 40px × 40px circular spinner
- 4px border, top border #c08c5c
- Linear spin animation (1s)
- Centered with auto margins

### Results Display
- 1.5rem top margin
- Centered text alignment
- Hierarchical typography for confidence percentage and breed name

## Functional States
- **Default**: Upload area with dashed border, empty state
- **Image Selected**: Preview visible, upload area shows image
- **Loading**: Spinner visible, button disabled with "Analyzing..." text
- **Results**: Confidence percentage and breed name displayed prominently
- **Error**: Red text error message

## Future Expansion Sections
The design should accommodate these additional sections:
- **Paws & Ponder**: Educational content section
- **Hear From Our Happy Users**: Testimonials/reviews section
- **FAQ**: Frequently asked questions accordion
- **Navigation Bar**: Top navigation with branding
- **Footer**: Contact and additional information

## Images
**Hero Section**: No large hero image in the core detector. The focus is on the functional upload and detection interface. Future sections may include:
- Dog photography in testimonials (authentic user photos)
- Breed information cards with representative images
- Educational content illustrations

## Animations
Minimal, purposeful animations only:
- Upload area hover transition (0.2s ease)
- Button hover opacity change (0.2s ease)
- Loading spinner rotation (1s linear infinite)

## Accessibility
- Semantic HTML structure (main, h1-h3, labels)
- Hidden file input with accessible label
- Alt text on preview images
- Clear loading and disabled states
- High contrast text ratios

## Mobile Responsiveness
- Viewport meta tag for proper scaling
- 20px body padding for mobile breathing room
- Flexible max-width container (500px max, 100% width)
- Touch-friendly button sizing (14px padding)
- Responsive font sizing maintaining readability