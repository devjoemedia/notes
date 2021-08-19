import App from './views/App.marko'
import Home from './views/pages/Home'
import Add from './views/pages/Add'
import Edit from './views/pages/Edit'
import Note from './views/pages/Note'
import NotFound from './views/pages/404'

const Routes = [
    { name: 'home', path: '/', component: Home },
    { name: 'create', path: '/create', component: Add },
    { name: 'edit', path: '/notes/:id/edit', component: Edit },
    { name: 'note', path: '/notes/:id', component: Note },
    { name: '404', path: '/not-found', component: NotFound },
]
 
App.renderSync({ Routes }).prependTo( document.getElementById("app") )