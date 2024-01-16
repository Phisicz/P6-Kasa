import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Housing from "./pages/Housing/Housing";

import "./base/global.scss";
import "./base/reset.scss";
import "./base/typography.scss";

export default function App() {
    return (
        <LanguageProvider>
        <ThemeProvider> {/* Englobez toute l'application avec ThemeProvider */}
            <HashRouter>
                <Layout>
                    <Routes errorElement={<NotFound />}>
                        <Route path="/" element={<Navigate replace to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/logement/:id" element={<Housing />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </HashRouter>
        </ThemeProvider>
        </LanguageProvider>
    );
}
