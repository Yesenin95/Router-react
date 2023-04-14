import { hydrateRoot, createRoot } from 'react-dom/client';
import Root from './Root.jsx';

const node = document.getElementById('react-root'),
root = <Root/>;
if (node.hasChildNodes())
hydrateRoot(node, root)
else
createRoot(node).render(root);