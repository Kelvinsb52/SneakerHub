git
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
# 🚀 Lux MVP - The Reseller's Friend

**Lux** is a comprehensive business management platform designed specifically for resellers, helping them track inventory, manage finances, and make informed business decisions with AI-powered insights.

## ✨ Features

### 🏪 **Inventory Management**

- Track total items in stock
- Monitor sold items
- Calculate inventory value
- Add new items with pricing information

### 💰 **Financial Dashboard**

- Real-time revenue tracking
- Expense management
- Profit calculation
- Interactive financial charts and analytics
- Visual representation of business performance

### 🤖 **AI-Powered Chat Assistant**

- Built-in chat interface for business queries
- Powered by OpenAI GPT-3.5-turbo
- Stream-based responses for real-time interaction
- Context-aware conversations with memory

### 🔐 **User Authentication**

- Secure sign-up and sign-in system
- User session management
- Protected routes and data access

## 🛠️ Tech Stack

### **Frontend**

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Chart.js** - Interactive data visualization
- **React Hook Form** - Form management with validation

### **Backend & Services**

- **Appwrite** - Backend-as-a-Service for authentication and database
- **OpenAI API** - AI-powered chat functionality
- **LangChain** - LLM integration and conversation management

### **UI Components**

- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Custom Design System** - Elegant typography with Italiana and Julius Sans One fonts

## 🚀 Getting Started

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

## 🎯 Core Features Breakdown

### **Dashboard Overview**

The main dashboard provides a comprehensive view of your business:

- Welcome header with personalized greeting
- Financial performance charts
- Quick access to inventory and financial summaries
- AI chat assistant for business insights

### **Inventory Tracking**

- Add new items with name and purchase price
- Track total inventory count
- Monitor sold items
- Calculate current inventory value

### **Financial Management**

- Revenue tracking and analysis
- Expense monitoring
- Profit calculation
- Interactive line charts for trend analysis

### **AI Chat System**

- Real-time streaming responses
- Context-aware conversations
- Business-focused assistance
- Secure API integration

## 🔒 Security Features

- **Authentication**: Secure user sessions with Appwrite
- **Protected Routes**: Role-based access control
- **API Security**: Server-side validation and sanitization
- **Session Management**: Secure cookie handling

## 🎨 Design Philosophy

Lux features a sophisticated design system with:

- **Typography**: Elegant font combinations (Italiana, Julius Sans One, Inter, IBM Plex Serif)
- **Color Scheme**: Professional and modern aesthetic
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Accessibility**: WCAG compliant components

## 🚧 Development Status

This is an MVP (Minimum Viable Product) with core functionality implemented:

- ✅ User authentication system
- ✅ Basic inventory management
- ✅ Financial dashboard
- ✅ AI chat integration
- ✅ Responsive UI components

**Planned Enhancements:**

- Advanced inventory analytics
- Multi-currency support
- Export and reporting features
- Mobile app development
- Advanced AI business insights

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for resellers who want to scale their business intelligently.**

_Lux - The Reseller's Friend_
