import { Routes, Route } from 'react-router'
import Template from '../template/Template';
import Login from '../components/Login';
const MyRoutes = () => {
    return <Routes>
        <Route element={<Template />}>
            <Route path='/' />
            <Route path='/login' element={<Login />} />
            <Route path='/member'/>
            <Route path='/member/:id' />
        </Route>
    </Routes>
}

export default MyRoutes;
