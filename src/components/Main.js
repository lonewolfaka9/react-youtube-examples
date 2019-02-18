import   React  from 'react'
import {Switch,Route} from 'react-router-dom'
import Login from "../views/Login.js"
import SearchDash from "../views/SearchDash.js"

const Main = () => (

    <main>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/search' component={SearchDash} />
         </Switch>
    </main>
)

export default Main;