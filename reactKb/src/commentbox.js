import React from 'react';
import commentBox from 'commentbox.io';

class PageWithComments extends React.Component {

    

    componentDidMount() {
        //console.log(this.props.u);
        this.removeCommentBox = commentBox('5682923541889024-proj');
    }

    componentWillUnmount() {

        this.removeCommentBox();
    }

    render() {

        return (
            <div className="commentbox" id={this.props.u}/>
        );
    }
}

export default PageWithComments