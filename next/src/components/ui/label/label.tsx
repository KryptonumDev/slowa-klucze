import styles from './label.module.scss';
import { type Label } from '@/types/_global/Label';

export default function Label({
  placeholder,
  title,
  name,
  register,
  errors,
  disabled,
  error = 'To pole jest wymagane',
  type = 'text',
  rows,
  info,
  className = '',
  ...props
}: Label) {
  return (
    <label className={`${styles.label} ${className}`}>
      <span className={styles.title}>{title}</span>
      <div className={styles.inputWrapper}>
        {rows ? (
          <textarea
            rows={rows}
            placeholder={placeholder}
            className={errors[name] ? `${styles.errored} ${styles.input}` : `${styles.input}`}
            disabled={disabled}
            {...register}
            {...props}
          ></textarea>
        ) : (
          <input
            placeholder={placeholder}
            className={errors[name] ? `${styles.errored} ${styles.input}` : `${styles.input}`}
            type={type}
            disabled={disabled}
            {...register}
            {...props}
          ></input>
        )}
        {errors[name] && <SmallError className={styles.smallError} />}
      </div>
      {errors[name] && (
        <div>
          {' '}
          <span className={styles.error}>{error}</span>
        </div>
      )}
      {info && <span className={styles.info}>{info}</span>}
    </label>
  );
}

function SmallError({ ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      fill='none'
      viewBox='0 0 48 48'
      {...props}
    >
      <path
        stroke='#BA3131'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M24 14v12'
      ></path>
      <circle
        cx='24'
        cy='32'
        r='2'
        fill='#BA3131'
      ></circle>
      <path
        stroke='#BA3131'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14 6.676A19.908 19.908 0 0124 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24c0-3.643.974-7.058 2.676-10'
      ></path>
    </svg>
  );
}
