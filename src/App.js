import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

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
        <HashRouter>
            <Layout>
                {/* Si une erreur quelconque arrive en cours de route */}
                <Routes errorElement={<NotFound />}>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:id" element={<Housing />} />
                    <Route path="/404" element={<NotFound />} />
                    {/* Toute autres pages que celles mentionnées seront des pages d'erreur 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
}
