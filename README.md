# 🐒 MunQueue — MUN Committee Queue Manager

**MunQueue** (a play on *Monkey 🐒*) is a simple, minimalistic web app built for **Model United Nations conferences**.
It helps the **Executive Board (EB)** manage speaker queues during debates like **Special Speaker’s List (SSL)** or **Moderated Caucuses**, eliminating the chaos of “me me me!” moments.

---

## 🚀 Features

* **Host Room System:**
  The EB creates a room (with a unique code) that delegates can join instantly — no signups or logins needed.

* **Delegate View:**
  Delegates enter the room using the code, select their **country/portfolio**, and click **“Enter Queue”** to be recognized.

* **Real-Time Queue Updates:**
  Both the EB and delegates can see the live queue update instantly (thanks to **Socket.io**).

* **Host Controls:**

  * Call next speaker
  * Remove or reorder delegates
  * Reset queue
  * End room

* **Fast & Lightweight:**
  Optimized for mobile browsers and college Wi-Fi speeds.

---

## 🛠️ Tech Stack

| Layer       | Technology                 |
| ----------- | -------------------------- |
| Frontend    | React + Vite + TailwindCSS |
| Backend     | Node.js + Express          |
| Real-Time   | Socket.io                  |
| Build Tools | ESBuild / Vite             |
| Language    | TypeScript                 |

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/MunQueueManager.git
cd MunQueueManager
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run in Development Mode

```bash
npm run dev
```

Then open:
👉 [http://localhost:5173](http://localhost:5173)

### 4️⃣ Build for Production

```bash
npm run build
```

### 5️⃣ Run Production Server

```bash
npm start
```

---

## 📱 Usage Flow

### 👨‍🏫 Executive Board (Host)

1. Create a new room → share the room code.
2. Watch the queue update in real time.
3. Use “Call Next”, “Reorder”, or “Reset” to manage the flow.

### 🧑‍🎓 Delegate

1. Enter room code provided by EB.
2. Choose your **country/portfolio**.
3. Tap **“Enter Queue”** to request recognition.
4. Watch the live queue and wait for your turn.

---

## 🌐 Deployment

You can deploy easily using:

* [Render](https://render.com/)
* [Railway](https://railway.app/)
* [Vercel](https://vercel.com/)
* [Replit](https://replit.com/)

Just ensure your production command is:

```bash
npm run build && npm start
```

---

## 👨‍💻 Developer

**Author:** Vishruth Tiwari
📧 *Reach out for MUN tech collabs or improvements!*

---

## 🧩 Future Ideas

* Add per-committee customization (UNGA, UNSC, etc.)
* Integrate timers for speeches
* Add voting and motion management
* Host dashboard with analytics

---

### License

MIT © Vishruth Tiwari
