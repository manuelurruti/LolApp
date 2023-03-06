import React from 'react'

import HomePage from "./pages/HomePage"
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import ChampionDetail from './pages/ChampionDetail'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/champion/:ChampionName" component={ChampionDetail} element={<ChampionDetail />} />


      </Route>

      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes >
  )
}
