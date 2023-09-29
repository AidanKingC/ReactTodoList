import React, { useState } from "react";
import {v4 as uuid } from "uuid";
import { ReactComponent as Trash } from "./trashCan.svg";
import plus from "./plus.svg";
import "./Todo.css"

function TodoList() {
    const [itemList, setItemList] = useState([]);

    function ListItems(props) {
        function ItemComponent(props) {
            function deleteItem() {
                props.setItemList(props.itemList.filter((item) => item !== props.item));
            }

            function DeleteButton() {
                return (
                    <button className="Delete" onClick={deleteItem}> 
                        <Trash className="DeleteLogo" />
                    </button>
                )
            }

            return (
                <p key={uuid()}> {props.item}  <DeleteButton/>  </p>
            )
        }

        const listItems = props.itemList.map((item) =>
            <li key={item}>
                <ItemComponent item={item} setItemList={props.setItemList} itemList={props.itemList} />
            </li>);

        return (
            <ul>{listItems}</ul>
        );
    }

    function AddItem(props) {
        const [item, setItem] = useState("");

        function handleSubmit(event) {
            event.preventDefault();
            console.log("AddItem.handleSubmit() called item: ", itemList);
            setItemList([...itemList, item]);
            setItem("");
        }

        function handleValueChange(event) {
            setItem(event.target.value);
        }

        return (
            <form onSubmit={handleSubmit}>
                <input type="text" value={item} onChange={handleValueChange} />
                <button type="submit" className="Submit"> <img src={plus} alt=""/> </button>
            </form>
        );
    }

    return (
        <>
            <AddItem itemList={itemList} setItemList={setItemList} />
            <ListItems itemList={itemList} setItemList={setItemList} />
        </>
    );
}

export default TodoList;