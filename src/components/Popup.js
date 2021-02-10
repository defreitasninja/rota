import React from 'react';

class Popup extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { display: 'block' };

        this.close = this.close.bind(this);
    }

    close()
    {
        this.setState({ display: 'none' });
    }

    render()
    {
        const style = {
            border: '1px solid black',
            width: '50%',
            margin: 'auto 25%',
            //position: 'fixed',
            padding: '10px',
            top: '25%',
            display: this.state.display
        };

        const closeButtonStyle = {
            float: 'right',
            cursor: 'pointer'
        }

        return(
            <div style={style}>
                <div style={closeButtonStyle} onClick={this.close}>X</div>
                {this.props.children}
            </div>
        );
    }
}

export default Popup;