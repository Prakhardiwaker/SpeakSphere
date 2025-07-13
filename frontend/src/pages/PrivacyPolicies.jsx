import React from "react";
import { useNavigate } from "react-router";
import {
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  TwitterIcon,
  BellIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import useAuthUser from "../hooks/useAuthUser";

function PrivacyPolicies() {
  const { authUser } = useAuthUser();
  const navigate = useNavigate();

  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-base-100 p-6 sm:p-12 text-base-content space-y-12"
      data-theme="forest"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Terms of Service */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-center">
            📜 Terms of Service
          </h1>
          <div className="bg-base-200 rounded-xl p-6 shadow-md space-y-4">
            <p>
              Welcome to our Language Exchange Platform! 🎉 This app is built
              for language lovers, learners, and explorers of different
              cultures. We're here to help you connect, speak, and grow — all
              while having a good time.
            </p>
            <p>
              By using this app, you agree not to be mean, creepy, or spammy.
              Respect others, use your words kindly, and remember that behind
              every avatar is a real human (most of the time 😄).
            </p>
            <p>
              We reserve the right to update these terms — but we'll always try
              to keep things fair, fun, and drama-free.
            </p>
          </div>
        </motion.div>

        {/* Privacy Policy */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold text-center">🔐 Privacy Policy</h2>
          <div className="bg-base-200 rounded-xl p-6 shadow-md space-y-4">
            <p>
              Your privacy matters! We know video chatting and messaging require
              trust, so here's the deal: your data is stored securely, and we
              don't sell it to third parties. Period.
            </p>
            <p>
              All messages and video chats are kept confidential. We only
              collect what's needed to make the platform work well (and maybe
              get a little better over time).
            </p>
            <p>
              If you ever want your account or data removed, just reach out.
              We're here to support your learning — not haunt your digital past.
              👻
            </p>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              isAuthenticated && isOnboarded ? navigate("/") : navigate(-1)
            }
            className="btn btn-primary shadow-md"
          >
            {isAuthenticated && isOnboarded
              ? "🏠 Back to Home"
              : "🚀 Back to Onboarding"}
          </motion.button>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h2 className="text-3xl font-bold text-center">🛠️ Built With Love</h2>
          <div className="bg-base-200 rounded-xl p-6 shadow-md space-y-4">
            <p>This platform was lovingly crafted using the MERN stack:</p>
            <ul className="list-disc list-inside">
              <li>
                <strong>MongoDB</strong> – For storing all those language
                profiles 🌍
              </li>
              <li>
                <strong>Express.js</strong> – For keeping the server-side nice
                and smooth 🚦
              </li>
              <li>
                <strong>React</strong> – To make everything snappy and
                interactive ⚡
              </li>
              <li>
                <strong>Node.js</strong> – The backend engine that keeps it all
                running 🔧
              </li>
            </ul>
            <p>We also use:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Tailwind CSS for styling 🌈</li>
              <li>React Router for navigation 🧭</li>
              <li>React Query for smooth data handling 🔄</li>
              <li>Stream for live video chat and messaging 📹</li>
              <li>Framer Motion for cool animations 🎞️</li>
            </ul>
          </div>
        </motion.div>

        {/* Developer Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center">
            👨‍💻 About the Developer
          </h2>
          <div className="bg-base-200 rounded-xl p-6 shadow-md space-y-4">
            <p>
              Hi there! I'm <strong>Prakhar Diwaker</strong>, an engineering
              student who loves building cool projects and exploring the world
              of web development. This project was born from a mix of curiosity,
              a passion for languages, and the desire to connect people globally
              🌐.
            </p>
            <p>
              I'm always learning, experimenting, and open to feedback. If you'd
              like to connect, collaborate, or just geek out about code and
              languages — feel free to reach out!
            </p>
            <div className="flex flex-wrap gap-4 items-center mt-4">
              <a
                href="https://www.linkedin.com/in/prakhar-diwaker-261271122/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 btn btn-outline btn-sm"
              >
                <LinkedinIcon className="size-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/Prakhardiwaker"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 btn btn-outline btn-sm"
              >
                <GithubIcon className="size-4" /> GitHub
              </a>
              <a
                href="mailto:prakhardiwaker@gmail.com"
                className="flex items-center gap-2 btn btn-outline btn-sm"
              >
                <MailIcon className="size-4" /> Email
              </a>
              <a
                href="https://x.com/DiwakerPrakhar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 btn btn-outline btn-sm"
              >
                <TwitterIcon className="size-4" /> X / Twitter
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default PrivacyPolicies;
