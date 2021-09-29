import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Registration from '../pages/Registration/Registration'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'

function Routes(){
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exat path="/cadastro">
                <Registration/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/profile">
                <Profile/>
            </Route>
        </Switch>
    )
}

export default Routes