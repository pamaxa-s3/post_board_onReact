import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import nextId from "react-id-generator";
import './app.css';
// import { style } from "./app.module";

export default class App extends Component {

    state = {
        data: [
            {
                label: 'Going to learn React',
                important: true,
                like: false,
                id: nextId()
            },
            {
                label: 'That is so good!',
                important: false,
                like: false,
                id: nextId()
            }, {
                label: 'I need a break...',
                important: false,
                like: false,
                id: nextId()
            }
        ],
        term: '',
        filter: 'all'
    }

    // maxId = 4;

    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: nextId()
            // id: this.maxId++
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleImportant = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = { ...old, important: !old.important };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    onToggleLiked = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = { ...old, like: !old.like };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    searchForm = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    render() {

        const { data, term, filter } = this.state;
        const liked = data.filter(item => item.like).length;
        const allPost = data.length;
        const visiblePosts = this.filterPost(this.searchForm(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPost={allPost}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>
                <PostList
                    posts={visiblePosts}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                    onDelete={this.deleteItem} />
                <PostAddForm
                    onAdd={this.addItem} />
            </div>
        )
    }
}


// class WhoAmI extends Component {

//     state = {
//         age: 22
//     }

//     nextYear = () => {
//         this.setState(state => ({
//             age: ++state.age
//         }))
//     }

//     render() {
//         const { name, surname, link } = this.props;
//         const { age } = this.state;

//         return (
//             <>
//                 <button onClick={this.nextYear}>Age Up</button>
//                 <h1>My name is {name}, surname - {surname}, age = {age}</h1>
//                 <div>
//                     <a href={link}>My profile</a>
//                 </div>
//             </>
//         )
//     }
// }

// export default WhoAmI;
