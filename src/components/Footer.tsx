import { useState } from "react";
import {Send, Mail, Phone, MapPin, CheckCircle} from 'lucide-react';

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Nome e obrigatório";
    if (!form.email.trim()) newErrors.email = "Email e obrigatório";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email inválido";
    if (!form.message.trim()) newErrors.message = "Mensagem e obrigatória";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <footer id="contact" className="bg-blue-950 border-t border-blue-800/40">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-white font-bold text-3xl mb-3">Entre em Contato</h2>
            <p className="text-blue-300/80 mb-8 leading-relaxed">
              Tem alguma dúvida ou precisa de suporte? Nossa equipe está pronta para ajudar você.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-blue-600/20 border border-blue-600/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-blue-400 text-xs uppercase tracking-wider">Email</p>
                  <p className="text-white font-medium">contato@BlifShop.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-blue-600/20 border border-blue-600/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-blue-400 text-xs uppercase tracking-wider">Telefone</p>
                  <p className="text-white font-medium">(11) 9 4277-4667</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-blue-600/20 border border-blue-600/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-blue-400 text-xs uppercase tracking-wider">Endereco</p>
                  <p className="text-white font-medium">Av. Pedro Vicente, 1000 - Sao Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-blue-900/30 border border-blue-800/30 rounded-3xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle size={36} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Mensagem Enviada!</h3>
                  <p className="text-blue-300">Entraremos em contato em até 24 horas.</p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-blue-400 hover:text-blue-300 text-sm underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contato">
                <h3 className="text-white font-bold text-xl mb-6">Enviar Mensagem</h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-blue-300 text-sm font-medium mb-1.5">
                      Nome completo <span className="text-blue-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      className={`w-full bg-blue-950/60 border rounded-xl px-4 py-3 text-white placeholder-blue-500 text-sm outline-none transition-colors focus:border-blue-500 ${
                        errors.name ? "border-red-500" : "border-blue-700/40"
                      }`}
                      placeholder="Seu nome"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-required="true"
                    />
                    {errors.name ? (
                      <p id="name-error" className="text-red-400 text-xs mt-1" role="alert">{errors.name}</p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-blue-300 text-sm font-medium mb-1.5">
                      Email <span className="text-blue-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      className={`w-full bg-blue-950/60 border rounded-xl px-4 py-3 text-white placeholder-blue-500 text-sm outline-none transition-colors focus:border-blue-500 ${
                        errors.email ? "border-red-500" : "border-blue-700/40"
                      }`}
                      placeholder="seu@email.com"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-required="true"
                    />
                    {errors.email ? (
                      <p id="email-error" className="text-red-400 text-xs mt-1" role="alert">{errors.email}</p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-blue-300 text-sm font-medium mb-1.5">
                      Mensagem <span className="text-blue-400" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      className={`w-full bg-blue-950/60 border rounded-xl px-4 py-3 text-white placeholder-blue-500 text-sm outline-none transition-colors resize-none focus:border-blue-500 ${
                        errors.message ? "border-red-500" : "border-blue-700/40"
                      }`}
                      placeholder="Como podemos ajudar?"
                      aria-describedby={errors.message ? "message-error" : undefined}
                      aria-required="true"
                    />
                    {errors.message ? (
                      <p id="message-error" className="text-red-400 text-xs mt-1" role="alert">{errors.message}</p>
                    ) : null}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-5 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <Send size={18} aria-hidden="true" />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-blue-800/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-400 text-sm">
            &copy; {new Date().getFullYear()} BlifShop. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded">
              Política de Privacidade
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded">
              Termos de Uso
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded">
              Trocas e Devoluções
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
