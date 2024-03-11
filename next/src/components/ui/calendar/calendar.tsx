/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
'use client';

import isoWeek from 'dayjs/plugin/isoWeek';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import { useRef, type MouseEvent, useState } from 'react';
import styles from './calendar.module.scss';

dayjs.extend(localeData);
dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.locale('pl');

export default function Calendar({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: dayjs.Dayjs;
  setSelectedDate: (date: dayjs.Dayjs) => void;
}) {
  const monthsRef = useRef(null);

  const hoursRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const daysOfWeek = dayjs.weekdaysShort(true);
  const months = Array.from({ length: 12 }, (_, i) => dayjs().month(i));
  const daysInMonth = Array.from({ length: selectedDate.daysInMonth() }, (_, i) => i + 1);
  const firstDayOfMonth = (selectedDate.startOf('month').day() + 6) % 7;
  const lastDayOfMonth = (selectedDate.endOf('month').day() + 6) % 7;
  const placeholdersBefore = Array.from(
    { length: firstDayOfMonth },
    (_, i) => selectedDate.subtract(1, 'month').endOf('month').date() - i
  );
  const placeholdersAfter = Array.from({ length: 6 - lastDayOfMonth }, (_, i) => i + 1);
  const times = Array.from({ length: 4 }, (_, i) =>
    dayjs()
      .hour(10)
      .minute(0)
      .add(30 * i, 'minute')
  );

  const handleMonthChange = (event: MouseEvent<HTMLButtonElement>, month: dayjs.Dayjs) => {
    event.preventDefault();
    const newDate = selectedDate.month(month.month());
    setSelectedDate(newDate);
  };

  const handleDayChange = (event: MouseEvent<HTMLButtonElement>, day: number) => {
    event.preventDefault();
    const newDate = selectedDate.date(day);
    setSelectedDate(newDate);
  };

  const handleHourChange = (event: MouseEvent<HTMLButtonElement>, time: dayjs.Dayjs) => {
    event.preventDefault();
    const newDate = selectedDate.hour(time.hour()).minute(time.minute());
    setSelectedDate(newDate);
  };

  const handleDragMove = (pageX, elementRef) => {
    if (!isDragging) return;
    const x = pageX - elementRef.current.offsetLeft;
    const walk = x - startX;
    elementRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragStart = (pageX, elementRef) => {
    setIsDragging(true);
    setStartX(pageX - elementRef.current.offsetLeft);
    setScrollLeft(elementRef.current.scrollLeft);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleInteractionStart = (event, elementRef) => {
    handleDragStart(event.pageX || event.touches[0].pageX, elementRef);
  };

  const handleInteractionMove = (event, elementRef) => {
    handleDragMove(event.pageX || event.touches[0].pageX, elementRef);
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.datePicker}>
        <p className={styles.title}>
          <strong>Wybierz datę</strong>
        </p>
        <div
          className={styles.months}
          ref={monthsRef}
          onMouseDown={(event) => handleInteractionStart(event, monthsRef)}
          onMouseMove={(event) => handleInteractionMove(event, monthsRef)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(event) => handleInteractionStart(event, monthsRef)}
          onTouchMove={(event) => handleInteractionMove(event, monthsRef)}
          onTouchEnd={handleDragEnd}
        >
          {months.map((item) => (
            <button
              key={item.format('MMMM')}
              onClick={(event) => handleMonthChange(event, item)}
              className={styles.item}
              data-selected={item.month() == selectedDate.month()}
            >
              {item.format('MMMM').charAt(0).toUpperCase() + item.format('MMMM').slice(1)}
            </button>
          ))}
        </div>
        <div className={styles.dates}>
          <div className={styles.weekdays}>
            {daysOfWeek.map((day) => (
              <p key={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</p>
            ))}
          </div>
          <div className={styles.days}>
            {placeholdersBefore
              .reverse()
              .concat(daysInMonth)
              .concat(placeholdersAfter)
              .map((day, index) => {
                const isPlaceholder = index < firstDayOfMonth || index >= firstDayOfMonth + daysInMonth.length;
                const thisDay = selectedDate.date(day);
                const isBeforeToday = thisDay.isBefore(dayjs(), 'day');
                const isWeekend = thisDay.day() === 0 || thisDay.day() === 6;
                return (
                  <button
                    key={index}
                    className={styles.day}
                    disabled={isBeforeToday || isPlaceholder || isWeekend}
                    onClick={(event) => handleDayChange(event, day)}
                  >
                    <span data-selected={day == selectedDate.date() && !isPlaceholder && !isBeforeToday}>{day}</span>
                  </button>
                );
              })}
          </div>
        </div>
      </div>
      <div className={styles.hoursWrapper}>
        <p className={styles.title}>
          <strong>Wybierz godzinę</strong>
        </p>
        <div
          className={styles.hours}
          ref={hoursRef}
          onMouseDown={(event) => handleInteractionStart(event, hoursRef)}
          onMouseMove={(event) => handleInteractionMove(event, hoursRef)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(event) => handleInteractionStart(event, hoursRef)}
          onTouchMove={(event) => handleInteractionMove(event, hoursRef)}
          onTouchEnd={handleDragEnd}
        >
          {times.map((item, index) => (
            <button
              key={index}
              onClick={(event) => handleHourChange(event, item)}
              className={styles.item}
              data-selected={item.format('HH:mm') === selectedDate.format('HH:mm')}
            >
              {item.format('HH:mm')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
