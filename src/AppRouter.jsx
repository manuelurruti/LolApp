import React from 'react'
import { HomePage, CharactersPage, SearchPage } from './pages'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="characters/:id" element={<CharactersPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>


      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes >
  )
}
