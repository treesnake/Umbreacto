import React from 'react';

class ContentBlocks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contentBlocks: []
        };
    }

    componentDidMount() {
        this.getContentBlocks();
    }

    getContentBlocks() {
        // Simple GET request using fetch
        //fetch('https://localhost:44349/Umbraco/Api/ContentBlock/GetContentBlocks/1057')
        //    .then(response => response.json())
        //    .then(data => this.setState({ contentBlocks: data }));

        fetch('https://localhost:44349/Umbraco/Api/ContentBlock/GetContentBlocks/1057')
        .then(response => response.json())
        .then(data => {
          this.setState({ contentBlocks: data })
        })

        let x = 1;
    }

    render() {        
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                    <ul>
                    {this.state.contentBlocks.map(block => {
                        return (
                        <li key={`block-${block.BlockDisplayId}`}>
                            {block.Alias}
                            <ul>
                                {block.Props.map(prop => {
                                    return (
                                    <li key={`block-${prop.DisplayId}`}>
                                            {prop.Alias}
                                    </li>);
                                })}
                            </ul>
                        </li>);
                    })}
                    </ul>
                </div>
            </div>
        );
    }
}

export { ContentBlocks }; 