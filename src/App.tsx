/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './components/ToastContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { DirectoryPage } from './pages/DirectoryPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import {
  LoginPage,
  MyAccountPage,
  LegalSamplePage,
  NotFoundPage,
} from './pages/AccountPages';

export default function App() {
  return (
    <HashRouter>
      <ToastProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesOverviewPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/account" element={<MyAccountPage />} />
            <Route
              path="/privacy"
              element={<LegalSamplePage type="privacy" />}
            />
            <Route
              path="/terms"
              element={<LegalSamplePage type="terms" />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </ToastProvider>
    </HashRouter>
  );
}

