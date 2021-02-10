import React from 'react';
import Link from './Link';

class Menu extends React.Component
{
    render()
    {
        return (
            <header>
                <h1>F Silva é?:</h1>

                <ul>
                    <li>
                        <Link to="cu">Cu</Link>
                    </li>
                    <li>
                        <Link to="coco">Cocô</Link>
                    </li>
                    <li>
                        <Link to="fezes">Fezes</Link>
                    </li>
                    <li>
                        <Link to="peido">Peido</Link>
                    </li>
                    <li>
                        <Link to="todos">Todos acima</Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Menu