# 📘 **Tap-n-Pay**

**Tap-n-Pay** is a digital wallet and banking application that allows users to send money, top up funds, withdraw funds and track transactions in real time.

---

### **Website Link**

- **URL**: https://akinola-kehinde-tap-n-pay.netlify.app/

## 🚀 **Features**

- 🔐 **Authentication**\
  Simple form-based authentication using react hook form and zod. Password strength calculated using zxcvbn.
  OTP was also implemented and a code must be inputed before the time runs out. failure to type in a code will require the user to hit the resend button.

- **Transaction history**\
  A searchable transaction history that displays details from a mock data\

- 💾 **Persistent User Details**\
  User information persists after authentication using **Session Storage**. It is a banking app and the idea is to ensure that authentication will be required again if the app is opened in another tab.

- ⚛️ **Modern UI Structure**\
  Built with React 19, TypeScript, and tailwind css for clean and scalable
  styling.

## ⚙️ **Installation & Setup**

### 1️⃣ Clone Repository

```bash
git clone https://github.com/adetomiwa-esq/akinola-kehinde-tap-n-pay.git
cd akinola-kehinde-tap-n-pay
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

### 4️⃣ Build for Production

```bash
npm run build
```

## 🛠️ **Tech Stack**

### **Frontend**

- **React 19.2.0**
- **TypeScript**
- **Tailwind css**
- **React form**
- **zod**
- **zxcvbn**

🔗 **Why I chose this stack**

React, Tailwind CSS, and TypeScript complement each other by providing:

- A structured component model (React). Also makes it easy to port to a similar component model like vue.
- Fast and consistent styling (Tailwind)
- Strong type safety and scalability (TypeScript)
  Together, they create a modern, efficient, and maintainable frontend stack suitable for a financial application where reliability and user experience are critical.

## **No state management tool**

Redux was not included as this application does not involve complex shared state that spans across multiple unrelated components. it would have been unnecessary and would add no real value to this project.

## ⚠️ Challenges Faced

The login design does not include a link to the sign up page and so I added it.
It also took sometime to deside on the data structure to work with for the transactions. I had to work with something that will let me display the transactions just as it is on the design.

🔁 Porting This Project from React to Vue.js
This project is currently built with React + TypeScript, using concepts such as component-based architecture, routing, lazy loading, and feature separation. These same concepts exist in Vue 3, making the transition very possible.

--zod for the form validation works perfectly when used with vee-validate or directly in forms. It also helps that the validation is reusable
-- RouterLink will replace NavLink for validation
-- assets folder will remain the same
-- all the components are directly reusable in vue. (.vue wiil be used for file extensions instead of .tsx)
-- pinia will replace redux if redux is used but there was no need to use redux in this project.
-- react hooks will be replaced by ref(), watch, onMounted and props will be replaced by defineProps()
-- vue also uses views instead of pages and nested folders map to nested routes
-- vue router is also very similar to react router with just the slight difference of component as opposed to element: <Login /> in react.
-- an advantage of this project also

---

## 📁 **Folder Structure**

    src/
     ├── assets/
     ├── components/
     │    ├── LazyLoader.tsx
     │    ├── MockData.tsx
     │    ├── Navigation.tsx
     │
     ├── features/
     │    |── SidebarSlice.ts
     │    ├── store.ts
     │
     ├── pages/
     │    ├── History/
     │    ├── Home
     |    |── ProfileSettings
     |    |── Register
     │    └── Login
     |          |──otp/
     |          |── password/
     |          |── Login.tsx
     |
     ├── router/
     ├──validation/
     ├──index.css
     ├── App.tsx
     |── main.tsx
     ├── public/

```



------------------------------------------------------------------------

## 🔧 **Environment Variables**

(None)



------------------------------------------------------------------------

## 👤 **Author**

**Akinola Kehinde (Adetomiwa-esq)**\
GitHub: https://github.com/Adetomiwa-esq
```
