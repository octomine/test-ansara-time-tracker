'use client';

import { NextIntlClientProvider } from "next-intl";
import { FC, PropsWithChildren } from "react";

import messages from '../../messages/ru.json';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextIntlClientProvider locale="ru" messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

export default Providers;
