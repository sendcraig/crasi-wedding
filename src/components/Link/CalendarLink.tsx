import React, { JSX } from 'react';
import { Link } from './Link';
import { isApple } from '../utils';

type Props = {
  text: string;
};

const CALENDAR_LINKS = {
  google:
    'https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240929%2F20240930&details=More%20info%20at%20https%3A%2F%2Fcrasi.love%20%E2%9D%A4%EF%B8%8F&location=Cambos%20Estate%2C%20Chania%2C%20Greece&text=Craig%20%26%20Josi%27s%20Wedding%20%F0%9F%92%8D%F0%9F%87%AC%F0%9F%87%B7',
  ical: 'https://stripo.email/storage/ics/2023/11/ics_craig-josis-wedding-2023-11-19-160447.ics',
};

export const CalendarLink = ({ text }: Props): JSX.Element => {
  if (isApple()) {
    return <Link url={CALENDAR_LINKS.ical} text={text} newTab={false} />;
  }

  return <Link url={CALENDAR_LINKS.google} text={text} />;
};
