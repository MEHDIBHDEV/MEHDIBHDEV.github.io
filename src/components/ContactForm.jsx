import React, { useMemo, useState } from "react";
import site from "../data/site.js";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

// Validation email simple
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((value || "").trim());
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot anti-spam (champ caché côté client uniquement)
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  // Clé Web3Forms (depuis .env.local)
  const web3forms = useMemo(
    () => ({
      accessKey:
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY",
    }),
    []
  );

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setWebsite("");
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // Honeypot : si rempli, on bloque
    if (website) {
      setStatus({
        type: "error",
        message: "Une erreur est survenue. Veuillez réessayer.",
      });
      return;
    }

    // Validations
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({
        type: "error",
        message: "Merci de remplir tous les champs requis.",
      });
      return;
    }
    if (!isValidEmail(trimmedEmail)) {
      setStatus({
        type: "error",
        message: "Veuillez saisir une adresse email valide.",
      });
      return;
    }

    if (
      !web3forms.accessKey ||
      web3forms.accessKey === "YOUR_WEB3FORMS_ACCESS_KEY"
    ) {
      setStatus({
        type: "error",
        message:
          "Configuration Web3Forms manquante. Ajoutez VITE_WEB3FORMS_ACCESS_KEY dans .env.local.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const payload = {
        access_key: web3forms.accessKey,
        subject: "Nouveau message depuis le portfolio",
        from_name: trimmedName,
        reply_to: trimmedEmail,
        message: trimmedMessage,
        // ❌ NE PAS envoyer de champ botcheck à Web3Forms
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          message:
            "Merci pour votre message ! Je vous répondrai au plus vite.",
        });
        resetForm();
      } else {
        throw new Error(data.message || "L’envoi a échoué.");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      setStatus({
        type: "error",
        message: "L’envoi a échoué. Réessayez plus tard.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card p-6">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Colonne gauche : intro + liens */}
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Contact</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            N&apos;hésitez pas à me joindre sur les réseaux ou via le
            formulaire.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener"
              className="btn-secondary justify-center"
              aria-label="GitHub"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener"
              className="btn-secondary justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={`mailto:${site.identity.email}`}
              className="btn-secondary justify-center"
              aria-label="Email"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href={`tel:${site.identity.phone.replace(/\s+/g, "")}`}
              className="btn-secondary justify-center"
              aria-label="Téléphone"
            >
              <Phone size={16} /> Tél
            </a>
          </div>
        </div>

        {/* Colonne droite : formulaire */}
        <form className="space-y-4" onSubmit={onSubmit} noValidate>
          {/* Honeypot anti-spam (caché, NON envoyé) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website" className="sr-only">
              Site web
            </label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              // pas de name="botcheck" ici pour éviter l’envoi au backend
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-zinc-300/60 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:focus:ring-violet-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              className="w-full rounded-lg border border-zinc-300/60 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:focus:ring-violet-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-zinc-300/60 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:focus:ring-violet-500"
            ></textarea>
          </div>

          {/* Zone d'état */}
          <div className="min-h-[1.5rem]" aria-live="polite">
            {status.type === "success" ? (
              <p
                className="text-sm text-emerald-600 dark:text-emerald-400"
                role="status"
              >
                {status.message}
              </p>
            ) : null}
            {status.type === "error" ? (
              <p
                className="text-sm text-red-600 dark:text-red-400"
                role="alert"
              >
                {status.message}
              </p>
            ) : null}
          </div>

          <div className="flex justify-end">
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Envoi…" : "Envoyer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
