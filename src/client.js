import App from './views/App.marko';
import Home from './views/pages/Home';
import Add from './views/pages/Add';
import Edit from './views/pages/Edit';
import Note from './views/pages/Note';
import NotFound from './views/pages/404';

const Routes = [
    { name: 'home', path: '/', component: Home },
    { name: 'create', path: '/create', component: Add },
    { name: 'edit', path: '/notes/:id/edit', component: Edit },
    { name: 'note', path: '/notes/:id', component: Note },
    { name: '404', path: '/not-found', component: NotFound },
]

// Get the custom context menu element
const contextMenuContainer = document.querySelector('#contextMenu');

// window.addEventListener('contextmenu', (e)=> {
//     e.preventDefault()
// })
// Removes the context element when the document is clicked
window.addEventListener('click', (event)=> {
   
    let contextMenu = document.querySelector('#contextOptions');
    contextMenu.style.display = "none";
});


App.renderSync({ Routes }).prependTo( document.getElementById('app'));