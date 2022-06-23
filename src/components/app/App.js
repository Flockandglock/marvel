import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pages/MainPage";

// Используем дин-ие импорты, чтобы они загружались только тогда, когда они рендерятся первый раз. Это делается для увеличения скорости загрузки приложения. ДИНАМИЧЕСКИЕ ИМПОРТЫ ВСЕГДА ИДУТ ПОСЛЕ СТАТИЧЕСКИХ ИНАЧЕ ОШИБКА. Ну и конечно же нельзя злоупотреблять ленивыми импортами.
const Page404 = lazy(() => import('../pages/404'));
// const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));

// Импортируем нужные сущности, после обарачиваем в них компаненты. 
const App = () => {

  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<span>Loaging...</span>}>
            <Routes>
              <Route path='/' element={<MainPage/>}/> 
              <Route path='/comics' element={<ComicsPage/>}/>
              <Route path='/comics/:comicId' element={<SingleComicPage/>}/>
              <Route path='*' element={<Page404/>}/>
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App;