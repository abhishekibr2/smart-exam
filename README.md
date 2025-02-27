# Smart Exam

Smart Exam is an advanced online examination platform built with Next.js, Node.js, TypeScript, Ant Design, GitHub Actions, and Kubernetes. It allows administrators to create exams, manage student plans, and provide detailed results. Students can purchase exam plans, take exams, and access a free practice area with a wide range of questions.

## 🚀 Features

- **Admin Panel:** Create, manage, and monitor exams.
- **Student Dashboard:** Purchase plans, take exams, and view results.
- **Practice Area:** Free access to practice questions.
- **Secure Authentication:** Role-based access for admin and students.
- **Real-time Results:** Instant feedback after exam submission.
- **Responsive Design:** Optimized for desktop and mobile devices.

## 🛠️ Tech Stack

- **Frontend:** Next.js, Ant Design, TypeScript
- **Backend:** Node.js
- **Version Control:** Git, GitHub
- **CI/CD:** GitHub Actions
- **Deployment:** Kubernetes

## 📦 Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/smart-exam.git
   cd smart-exam
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Environment Variables:**
   Create a `.env` file and add necessary environment variables:
   ```env
   NEXT_PUBLIC_API_URL=your_api_url
   DB_CONNECTION_STRING=your_database_connection
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application:**
   ```bash
   npm run dev
   ```

## ⚙️ Deployment with Kubernetes

1. **Build Docker Image:**
   ```bash
   docker build -t smart-exam .
   ```

2. **Push to Container Registry:**
   ```bash
   docker tag smart-exam your_registry/smart-exam
   docker push your_registry/smart-exam
   ```

3. **Apply Kubernetes Configuration:**
   ```bash
   kubectl apply -f k8s/deployment.yaml
   kubectl apply -f k8s/service.yaml
   ```

## ✅ Running Tests

```bash
npm run test
```

## 🤝 Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request.

## 📄 License

This project is licensed under the MIT License.

---

**Developed by Binary Data Private Limited**

