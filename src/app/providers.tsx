'use client';

import { NextIntlClientProvider } from "next-intl";
import { FC, PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import messages from '../../messages/ru.json';
import { queryClient } from "../api/query-client";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextIntlClientProvider locale="ru" messages={messages}>
        {children}
      </NextIntlClientProvider>
    </QueryClientProvider>
  )
}

export default Providers;
