import Button from '../button/Button';
import styles from './checkbox.module.scss';
import { type Props } from './checkbox.types';

export default function Checkbox({ disabled, text, name, register, errors, error = 'To pole jest wymagane' }: Props) {
  return (
    <label className={styles.checkbox}>
      <div className={styles.checkboxWrapper}>
        <div className={styles.icon}>
          <input
            type='checkbox'
            {...register}
          />
          <CheckboxTickIcon />
        </div>
        {text ? (
          <p dangerouslySetInnerHTML={{ __html: text }} />
        ) : (
          <p>
            <strong>Akceptuję</strong>{' '}
            <Button
              href='/polityka-prywatnosci'
              svg={true}
              disabled={disabled}
              theme='borderless'
            >
              Politykę Prywatności
            </Button>
          </p>
        )}
      </div>
      {error && <>{errors[name] && <span className={styles.error}>{error}</span>}</>}
    </label>
  );
}

const CheckboxTickIcon = () => (
  <svg
    width={20}
    height={16}
    viewBox='0 0 20 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1 9.4 6.143 15 19 1'
      stroke='#000'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
