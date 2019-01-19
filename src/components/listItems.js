import React, {Component} from 'react'

class ListItems extends Component {
    createTask(items) {
        return <li key={items.key}>{items.text}</li>
    }

    render() {
        let items = this.props.items
        let mapList = items.map(this.createTask)

        return (
            <ul>
                {mapList}
            </ul>
        )
    }
}

export default ListItems