import App from './views/App.marko';
import Home from './views/pages/Home';
import Add from './views/pages/Add';
import Edit from './views/pages/Edit';
import Note from './views/pages/Note';
import NotFound from './views/pages/404';
import contextMenu from './views/components/contextMenu';

const Routes = [
    { name: 'home', path: '/', component: Home },
    { name: 'create', path: '/create', component: Add },
    { name: 'edit', path: '/notes/:id/edit', component: Edit },
    { name: 'note', path: '/notes/:id', component: Note },
    { name: '404', path: '/not-found', component: NotFound },
]

// Get the custom context menu element
const contextMenuContainer = document.querySelector('#contextMenu');

// Displays the custom context menu
window.addEventListener('contextmenu', (event)=> {
    event.preventDefault();
    
    contextMenu.render({isRender: true}, (err, result) => {
        if(result) {
            result.appendTo(document.body)
        }  
    })

});

// Removes the context element when the document is clicked
window.addEventListener('click', (event)=> {
    // contextMenuContainer.style.display = "none";
});


App.renderSync({ Routes }).prependTo( document.getElementById('app'));