Lux is a business management platform built for resellers, inspired by tools I wished I had back in high school. It helps small resellers track inventory, finances, and sales, all while providing AI-powered business assistance in a clean, desktop-first design.

⚙️ Tech Stack

Frontend: Next.js, React, TypeScript, TailwindCSS

Backend: Appwrite

AI Integration: OpenAI + LangChain for chatbot insights

Auth & Sessions: Appwrite

🔋 Features

Dashboard Overview – Key business metrics at a glance

Inventory Management – Add products, track stock, and sales

Financial Tracking – Revenue, expenses, and profit reports

AI Chat System – Real-time reseller assistance with insights

Responsive Design – Optimized for desktop

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Appwrite account and project
- OpenAI API key

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd lux-mvp
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
   NEXT_APPWRITE_KEY=your_admin_key
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
lux-mvp/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (root)/            # Protected main routes
│   │   └── api/               # API endpoints
│   ├── components/             # Reusable UI components
│   │   ├── ui/                # Base UI components
│   │   └── ...                # Feature components
│   ├── context/                # React context providers
│   ├── hooks/                  # Custom React hooks
│   └── lib/                    # Utility functions and configurations
├── public/                     # Static assets
├── types/                      # TypeScript type definitions
└── lib/                        # Core library functions
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

