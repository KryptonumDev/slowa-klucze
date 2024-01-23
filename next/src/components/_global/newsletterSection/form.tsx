'use client';

import { useForm } from 'react-hook-form';
import { useState, type MouseEvent } from 'react';
import styles from './newsletterSection.module.scss';
import { type Cta } from '@/types/_global/Cta';
import Label from '@/components/ui/label/label';
import Checkbox from '@/components/ui/checkbox/checkbox';
import Button from '@/components/ui/button/Button';
import { regex } from '@/global/constants';
import { Failed, Success } from '@/types/_ui/Icons';

export default function Form({ data: { formCta, JsxDescription } }: { data: { formCta: Cta; JsxDescription } }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const [submitProcessing, setSubmitProcessing] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState<boolean | 'success' | 'failed'>(false);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsEmailSent(false);
  };

  const onSubmit = (data) => {
    setSubmitProcessing(true);
    fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json() as Promise<{ success: boolean }>)
      .then((response) => {
        if (response.success) {
          setIsEmailSent('success');
          setSubmitProcessing(false);
          reset();
        } else {
          setIsEmailSent('failed');
          setSubmitProcessing(false);
        }
      })
      .catch(() => {
        setIsEmailSent('failed');
        setSubmitProcessing(false);
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit) as React.FormEventHandler<HTMLFormElement>}
      className={styles.form}
    >
      {isEmailSent == false && (
        <>
          {JsxDescription}
          <Label
            errors={errors}
            title='E-mail'
            name='email'
            register={register('email', { required: true, pattern: regex.email })}
            type='email'
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
            disabled={submitProcessing}
          />
        </>
      )}
      {isEmailSent == 'failed' && (
        <div className={styles.state}>
          <Failed />
          <h3>
            Ups, coś poszło <strong className={styles.failed}>nie tak</strong>...
          </h3>
          <p>Zdaje się, że są chwilowe zakłócenia na linii – wierzę, że tym razem się uda! </p>
          <Button
            data={{ text: 'Próbuję jeszcze raz!', href: '', theme: 'secondary' }}
            svg={false}
            onClick={(event: MouseEvent<HTMLButtonElement>) => handleButtonClick(event)}
          />
        </div>
      )}
      {isEmailSent == 'success' && (
        <div className={styles.state}>
          <Success />
          <h3>
            Dzięki wielkie za <strong className={styles.success}>zapisanie się</strong>!
          </h3>
          <p>Super, że z ze mną jesteś i mnie wspierasz!</p>
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
