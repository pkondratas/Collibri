import React, {Component} from 'react';
import PostModal from "./Modals/PostModal";


export class Home extends Component {
    static displayName = Home.name;

    render() {
        return <PostModal />
    }
}
