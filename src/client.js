
import App from './views/App.marko'
import Home from './views/pages/home'
import Note from './views/pages/note'
import NotFound from './views/pages/404'
 
const Routes = [
    { name: 'home', path: '/', component: Home },
    { name: 'note', path: '/note', component: Note },
    { name: '404', path: '/not-found', component: NotFound },
]
 
App.renderSync({ Routes }).prependTo( document.body )