import React from 'react'
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';

export default function Layout({ children }) {
  return (
    <main>
        <AppProvider i18n={enTranslations}>
            {children}
        </AppProvider>
    </main>
  )
}
