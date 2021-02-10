import React from 'react';
import Menu from './Menu';
import Cu from './Cu';
import Coco from './Coco';
import Fezes from './Fezes';
import Peido from './Peido';

class Page extends React.Component
{
    content()
    {
        switch(window.location.pathname)
        {
            case '/cu' :
                return <Cu />;
            break;

            case '/coco' :
                return <Coco />;
            break;

            case '/fezes' :
                return <Fezes />;
            break;

            case '/peido' :
                return <Peido />;
            break;

            case '/todos' :
                return (<>
                    <Cu />
                    <Coco />
                    <Fezes />
                    <Peido />
                </>);
            break;
            default:
                return '';
            break;
        }
    }

    render()
    {
        window.addEventListener('refreshPage', () => { this.setState({}) });

        return (
            <div>
                <Menu />

                {this.content()}
            </div>
        );
    }
}

export default Page;