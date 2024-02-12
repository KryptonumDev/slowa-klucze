'use client';

import dayjs from 'dayjs';
import { useState, type MouseEvent } from 'react';
import { useForm } from 'react-hook-form';
import { type FormData } from './contactFormSection.types';
import styles from './contactFormSection.module.scss';
import { type Cta } from '@/types/_global/Cta';
import Label from '@/components/ui/label/label';
import { regex } from '@/global/constants';
import Checkbox from '@/components/ui/checkbox/checkbox';
import Button from '@/components/ui/button/Button';
import Calendar from '@/components/ui/calendar/calendar';
import { Failed, Success } from '@/types/_ui/Icons';

export default function Form({ formCta, Loader }: { formCta: Cta; Loader: JSX.Element }) {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });
  const [selectedTab, setSelectedTab] = useState('contact');
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [submitProcessing, setSubmitProcessing] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState<boolean | 'success' | 'failed'>(false);

  const onSubmit = (data: FormData) => {
    if (selectedTab == 'videoCall') {
      data.date = selectedDate;
      setSubmitProcessing(true);
      fetch('/api/videoContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((response) => response.json() as Promise<{ success: boolean }>)
        .then((response) => {
          if (response.success) {
            setSubmitProcessing(false);
            setIsEmailSent('success');
            reset();
          } else {
            setSubmitProcessing(false);
            setIsEmailSent('failed');
          }
        })
        .catch(() => {
          setIsEmailSent('failed');
          setSubmitProcessing(false);
        });
    } else {
      setSubmitProcessing(true);
      fetch('/api/mailContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((response) => response.json() as Promise<{ success: boolean }>)
        .then((response) => {
          if (response.success) {
            setSubmitProcessing(false);
            setIsEmailSent('success');
            reset();
          } else {
            setSubmitProcessing(false);
            setIsEmailSent('failed');
          }
        })
        .catch(() => {
          setSubmitProcessing(false);
          setIsEmailSent('failed');
        });
    }
  };

  const handleTabClick = (e: MouseEvent<HTMLButtonElement>, tab: string) => {
    e.preventDefault();
    if (tab != 'videoCall') {
      setSelectedTab(tab);
    }
  };

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsEmailSent(false);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit) as React.FormEventHandler<HTMLFormElement>}
    >
      {submitProcessing && (
        <div className={styles.loader}>
          <span>Ładowanie</span>
          {Loader}
        </div>
      )}
      <div className={styles.tabs}>
        <button
          className={selectedTab == 'contact' ? `${styles.contact} ${styles.active}` : styles.contact}
          onClick={(event) => handleTabClick(event, 'contact')}
          disabled={selectedTab == 'contact'}
        >
          Formularz kontaktowy
        </button>
        <button
          className={selectedTab == 'contact' ? `${styles.contactSmall} ${styles.active}` : styles.contactSmall}
          onClick={(event) => handleTabClick(event, 'contact')}
          disabled={selectedTab == 'contact'}
        >
          Formularz
        </button>
        <a
          className={selectedTab == 'videoCall' ? `${styles.videoCall} ${styles.active}` : styles.videoCall}
          href='https://calendly.com/slowa-klucze/30min'
        >
          Wideorozmowa
        </a>
      </div>
      {selectedTab == 'contact' && isEmailSent == false && (
        <>
          <Label
            name='email'
            type='email'
            title='Podaj adres e-mail, na który wyślę odpowiedź!'
            register={register('email', { required: true, pattern: regex.email })}
            errors={errors}
            className={styles.label}
            disabled={submitProcessing}
          />
          <Label
            name='description'
            type='textarea'
            title='Co mogę dla Ciebie napisać?'
            register={register('description', { required: true })}
            errors={errors}
            rows={5}
            className={styles.label}
            disabled={submitProcessing}
          />
          <Checkbox
            errors={errors}
            name='legal'
            register={register('legal', { required: true })}
            disabled={submitProcessing}
          />
          <Button
            theme='secondary'
            data={formCta}
            svg={false}
            className={styles.formButton}
            disabled={submitProcessing}
          />
        </>
      )}
      {selectedTab == 'videoCall' && isEmailSent == false && (
        <>
          <Calendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <Label
            name='email'
            type='email'
            title='Adres e-mail'
            register={register('email', { required: true, pattern: regex.email })}
            errors={errors}
            className={styles.label}
            info='Link do spotkania przyjdzie na podany adres mail.'
            disabled={submitProcessing}
          />
          <Checkbox
            errors={errors}
            name='legal'
            register={register('legal', { required: true })}
            disabled={submitProcessing}
          />
          <Button
            theme='secondary'
            data={formCta}
            svg={false}
            className={styles.button}
            disabled={submitProcessing}
          />
        </>
      )}
      {isEmailSent == 'failed' && (
        <div className={styles.state}>
          <Failed />
          <h3>
            Coś poszło <strong className={styles.failed}>nie tak</strong>!
          </h3>
          <p>Niestety, ale Twoja wiadomość nie została wysłana.</p>
          <Button
            data={{ text: 'Spróbuj ponownie', href: '', theme: 'secondary' }}
            svg={false}
            onClick={(event: MouseEvent<HTMLButtonElement>) => handleButtonClick(event)}
          />
        </div>
      )}
      {isEmailSent == 'success' && (
        <div className={styles.state}>
          <Success />
          <h3>
            Dzięki za <strong className={styles.success}>zapisanie się</strong> na spotkanie!
          </h3>
          <p>Bardzo dziękuje za kontakt!</p>
          <Button
            data={{ text: 'Wypełnij ponownie', href: '', theme: 'secondary' }}
            svg={false}
            onClick={(event: MouseEvent<HTMLButtonElement>) => handleButtonClick(event)}
          />
        </div>
      )}
    </form>
  );
}
