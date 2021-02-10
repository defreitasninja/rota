import React from 'react';

class Link extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event)
    {
        event.preventDefault();

        window.history.pushState({}, this.props.to, event.target.href);

        window.dispatchEvent(new PopStateEvent('refreshPage'));
    }

    render()
    {
        const href = '/'+ this.props.to;

        return (<a href={href} onClick={this.handleClick}>{this.props.children}</a>);
    }
}

export default Link