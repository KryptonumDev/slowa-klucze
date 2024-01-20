import Button from '../button/Button';
import styles from './checkbox.module.scss';
import { type Props } from './checkbox.types';

export default function Checkbox({ disabled, text, name, register, errors, error = 'to pole jest wymagane' }: Props) {
  return (
    <label className={styles.checkbox}>
      <div className={styles.checkboxWrapper}>
        <input
          type='checkbox'
          {...register}
        />
        {text ? (
          <p dangerouslySetInnerHTML={{ __html: text }} />
        ) : (
          <p>
            <strong>Akceptuję</strong>{' '}
            <Button
              href='/polityka-prywatnosci'
              svg={true}
              disabled={disabled}
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
