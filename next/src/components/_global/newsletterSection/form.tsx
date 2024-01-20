'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './newsletterSection.module.scss';
import { type Cta } from '@/types/_global/Cta';
import Label from '@/components/ui/label/label';
import Checkbox from '@/components/ui/checkbox/checkbox';
import Button from '@/components/ui/button/Button';
import { regex } from '@/global/constants';

export default function Form({ data: { formCta } }: { data: { formCta: Cta } }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const [submitProcessing, setSubmitProcessing] = useState(false);

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
          setSubmitProcessing(false);
          reset();
        } else {
          setSubmitProcessing(false);
        }
      })
      .catch(() => {
        setSubmitProcessing(false);
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit) as React.FormEventHandler<HTMLFormElement>}
      className={styles.form}
    >
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
    </form>
  );
}
