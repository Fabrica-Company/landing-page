import React, { useState } from 'react';
import { ContactPageProps } from '../types';
import { WEB3FORMS_ACCESS_KEY } from '../constants';
import { useLanguage } from '../LanguageContext';
import { PROJECT_TYPE_IDS, ProjectTypeId } from '../translations';
import { ArrowLeftIcon, CheckCircleIcon, MailIcon, MapPinIcon } from './icons';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  setCurrentPage,
}) => {
  const { company, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'local' as ProjectTypeId,
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) nextErrors.name = t.contact.errors.nameRequired;
    if (!formData.email.trim()) {
      nextErrors.email = t.contact.errors.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = t.contact.errors.emailInvalid;
    }
    if (!formData.message.trim()) {
      nextErrors.message = t.contact.errors.messageRequired;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
    if (errors.form) {
      setErrors((current) => ({ ...current, form: undefined }));
    }
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      setStatus('error');
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error');
      setErrors({
        form: t.contact.errors.missingKey,
      });
      return;
    }

    setStatus('loading');
    setErrors({});

    const projectTypeLabel =
      t.contact.projectTypes[formData.projectType] ?? formData.projectType;

    const payload = new FormData();
    payload.append('access_key', WEB3FORMS_ACCESS_KEY);
    payload.append(
      'subject',
      `${t.contact.subjectPrefix} ${formData.name}`
    );
    payload.append('from_name', company.name);
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('company', formData.company);
    payload.append('project_type', projectTypeLabel);
    payload.append('message', formData.message);
    payload.append('replyto', formData.email);
    payload.append('botcheck', '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });
      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: 'local',
          message: '',
        });
      } else {
        setStatus('error');
        setErrors({
          form: result.message || t.contact.errors.formGeneric,
        });
      }
    } catch {
      setStatus('error');
      setErrors({
        form: t.contact.errors.network,
      });
    }
  };

  const fieldBase =
    'w-full px-4 py-3 rounded-lg border text-text-primary dark:text-dark-text-primary placeholder-text-placeholder dark:placeholder-dark-text-placeholder transition-colors duration-200 ease-in-out';
  const fieldNormal =
    'bg-input-bg dark:bg-dark-input-bg border-input-border dark:border-dark-input-border';
  const fieldFocus =
    'focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue focus:ring-opacity-50';
  const fieldError = 'border-accent-red dark:border-dark-accent-red';

  return (
    <div className="space-y-8">
      <button
        type="button"
        onClick={() => setCurrentPage('home')}
        className="animated-item anim-fadeInUp group inline-flex items-center text-sm font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
      >
        <ArrowLeftIcon
          className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"
          aria-hidden
        />
        {t.ui.backToHome}
      </button>

      <div className="animated-item anim-fadeInUp anim-delay-100 p-6 sm:p-8 md:p-10 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h2 className="flex items-center text-sm font-medium tracking-wide text-text-secondary dark:text-dark-text-secondary">
            <span className="inline-block w-1.5 h-1.5 mr-2 rounded-full bg-text-secondary dark:bg-dark-text-secondary" />
            {t.ui.contactEyebrow}
          </h2>
          <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent-blue/20 text-accent-blue">
            <CheckCircleIcon className="w-3 h-3 mr-1" aria-hidden />
            {t.ui.takingProjects}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary mb-2">
          {company.contactPageTitle}
        </h1>
        <p className="text-md text-text-secondary dark:text-dark-text-secondary mb-6">
          {company.contactPageSubtitle}
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 pb-8 mb-8 border-b border-border dark:border-dark-border text-sm text-text-secondary dark:text-dark-text-secondary">
          <a
            href={`mailto:${company.email}`}
            className="inline-flex items-center gap-2 hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
          >
            <MailIcon className="w-4 h-4 shrink-0" aria-hidden />
            {company.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPinIcon className="w-4 h-4 shrink-0" aria-hidden />
            {company.location}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="sr-only">
                {t.contact.labels.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contact.placeholders.name}
                className={`${fieldBase} ${
                  errors.name ? fieldError : fieldNormal
                } ${fieldFocus}`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-accent-red">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                {t.contact.labels.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contact.placeholders.email}
                className={`${fieldBase} ${
                  errors.email ? fieldError : fieldNormal
                } ${fieldFocus}`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-accent-red">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="company" className="sr-only">
                {t.contact.labels.company}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={t.contact.placeholders.company}
                className={`${fieldBase} ${fieldNormal} ${fieldFocus}`}
              />
            </div>

            <div>
              <label htmlFor="projectType" className="sr-only">
                {t.contact.labels.projectType}
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`${fieldBase} ${fieldNormal} ${fieldFocus}`}
              >
                {PROJECT_TYPE_IDS.map((id) => (
                  <option key={id} value={id}>
                    {t.contact.projectTypes[id]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              {t.contact.labels.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contact.placeholders.message}
              className={`${fieldBase} ${
                errors.message ? fieldError : fieldNormal
              } ${fieldFocus}`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-accent-red">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-6 py-3 rounded-lg font-medium bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors duration-200 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? t.contact.sending : t.contact.send}
          </button>

          {status === 'success' && (
            <p className="text-sm text-accent-blue">{t.contact.success}</p>
          )}
          {status === 'error' && errors.form && (
            <p className="text-sm text-accent-red">{errors.form}</p>
          )}
          {status === 'error' && !errors.form && (
            <p className="text-sm text-accent-red">
              {t.contact.errors.fixFields}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
