import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    maxWidth: '800px';
`

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                { label: 'Going to learn React', important: false, id: 'sadasd' },
                { label: 'That is so good', important: true, id: 'dsadsa' },
                { label: 'Going to learn React', important: false, id: 'aawwwwww' }
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem => elem.id === id));

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }

        });
    }


    render() {
        return (
            <AppBlock>
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList 
                    posts={this.state.data} 
                    onDelete={this.deleteItem}/>
                <PostAddForm />
            </AppBlock>
        )
    }
    
}
