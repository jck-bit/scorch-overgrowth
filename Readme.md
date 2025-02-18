# Scorch Overgrowth - AI-Powered Web Browser

A sophisticated web browser implementation that combines advanced search capabilities with AI-powered analysis using Deepseek-R1 and Tavily API.

## 🔍 Technical Overview

### Core Architecture

The browser functions as an AI-augmented search interface that combines web search capabilities with Deepseek-R1's language model for enhanced results. Here's how it works:

#### Search Flow

1. When a user inputs a query, two parallel processes occur:

   - Web search through Tavily API to gather relevant web content
   - Deepseek-R1 processes the query to understand context and intent

2. The search results are then:
   - Aggregated and filtered for relevance
   - Processed by Deepseek-R1 to provide reasoning and analysis
   - Streamed back to the user in real-time using Server-Sent Events (SSE)

#### Key Technical Components

1. **Edge Runtime Processing**

   - Uses Next.js Edge Runtime for optimal performance
   - Handles streaming responses with low latency
   - Manages concurrent API calls efficiently

2. **AI Integration**

   - Deepseek-R1 provides:
     - Query understanding
     - Content synthesis
     - Contextual analysis
     - Natural language responses

3. **Search Enhancement**
   - Tavily API integration for:
     - Real-time web search
     - Content aggregation
     - Source verification
     - Metadata extraction
     - Web search through Tavily API to gather relevant web content
     - Deepseek-R1 processes the query to understand context and intent

2. The search results are then:
   - Aggregated and filtered for relevance
   - Processed by Deepseek-R1 to provide reasoning and analysis
   - Streamed back to the user in real-time using Server-Sent Events (SSE)

#### Key Technical Components

1. **Edge Runtime Processing**

   - Uses Next.js Edge Runtime for optimal performance
   - Handles streaming responses with low latency
   - Manages concurrent API calls efficiently

2. **AI Integration**

   - Deepseek-R1 provides:
     - Query understanding
     - Content synthesis
     - Contextual analysis
     - Natural language responses

3. **Search Enhancement**
   - Tavily API integration for:
     - Real-time web search
     - Content aggregation
     - Source verification
     - Metadata extraction

## 🚀 Features

- **AI-Powered Search & Analysis**

  - Real-time web content aggregation via Tavily API
  - Intelligent content analysis using Deepseek-R1
  - Streaming responses for immediate feedback
  - Context-aware response generation

- **Advanced UI/UX**

  - Responsive design with Tailwind CSS
  - Real-time content updates
  - Markdown support with syntax highlighting
  - Loading states and animations

## 🛠 Technical Stack

- **Frontend**: Next.js 14, React, TailwindCSS
- **Backend**: Edge Runtime, Streaming API
- **AI Integration**: Deepseek-R1
- **Search Engine**: Tavily API


## 📋 Prerequisites

- Node.js 18+ and npm
- Deepseek API key
- Tavily API key

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/jck-bit/scorch-overgrowth
cd scorch-overgrowth
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── chat/
│   │   │   └── route.ts        # Deepseek API endpoint
│   │   └── tavily/
│   │       └── route.ts        # Tavily API endpoint
│   ├── components/
│   │   ├── ImageUpload.tsx     # Image upload component
│   │   └── SignInWithGoogle.tsx # Google auth component
│   ├── lib/
│   │   ├── contexts/
│   │   │   └── AuthContext.tsx # Authentication context
│   │   ├── firebase/
│   │   │   ├── firebase.ts     # Firebase configuration
│   │   │   └── firebaseUtils.ts # Firebase utility functions
│   │   └── hooks/
│   │       └── useAuth.ts      # Authentication hook
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                # Main application page
```

## 🔒 Authentication

The project uses Firebase Authentication with Google Sign-in. To implement authentication:

1. Configure Firebase in your project
2. Use the `SignInWithGoogle` component
3. Access auth state with the `useAuth` hook:

```typescript
const { user, signInWithGoogle, signOut } = useAuth();
```

## 🔍 Search and Analysis Flow

1. User submits query
2. Tavily API searches and aggregates web content
3. Content is processed by Deepseek-R1
4. Results are streamed back to the UI
5. Sources and reasoning are displayed with collapsible sections

## 🎨 Styling

The project uses Tailwind CSS with custom configurations:

- Custom color scheme
- Responsive design
- Dark theme
- Custom fonts (Michroma, Space Mono, Orbitron)

## 🚀 Deployment

The application is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Create a new project on Vercel
3. Connect your repository
4. Configure environment variables
5. Deploy

## 📝 API Documentation

### Deepseek API

```typescript
POST / api / chat;
Body: {
  messages: Array<{ role: string; content: string }>;
}
```

### Tavily API

```typescript
POST /api/tavily
Body: {
  query: string,
  includeImages?: boolean,
  includeImageDescriptions?: boolean
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Deepseek-R1 for AI capabilities
- Tavily for search functionality
- Firebase for authentication and storage
- Vercel for hosting and deployment

## 🚀 Features

- **AI-Powered Search & Analysis**

  - Real-time web content aggregation via Tavily API
  - Intelligent content analysis using Deepseek-R1
  - Streaming responses for immediate feedback
  - Context-aware response generation

- **Advanced UI/UX**

  - Responsive design with Tailwind CSS
  - Real-time content updates
  - Markdown support with syntax highlighting
  - Dark theme with custom styling
  - Image upload capabilities
  - Loading states and animations

- **Authentication**
  - Google Sign-in integration
  - Firebase Authentication
  - Protected routes

## 🛠 Technical Stack

- **Frontend**: Next.js 14, React, TailwindCSS
- **Backend**: Edge Runtime, Streaming API
- **AI Integration**: Deepseek-R1
- **Search Engine**: Tavily API
- **Authentication**: Firebase
- **Database**: Firestore
- **Storage**: Firebase Storage

## 📋 Prerequisites

- Node.js 18+ and npm
- Firebase account
- Deepseek API key
- Tavily API key

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:
