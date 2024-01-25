"use client"
import { useState } from "react";
import Trash from "../icons/Trash";
import Plus from "../icons/Plus";
import ChevronDown from "../icons/ChevronDown";
import ChevronUp from "../icons/ChevronUp";

export default function MenuItemPriceProps({ name, addLabel, props, setProps }) {

    const [open, setOpen] = useState(false)

    function addProp() {
        setProps(oldProp => {
            return [...oldProp, { name: '', price: 0 }]
        })
    }

    function editProp(ev, index, prop) {
        const newValue = ev.target.value;
        setProps(prevSizes => {
            const newSizes = [...prevSizes]
            newSizes[index][prop] = newValue;
            return newSizes
        })
    }

    function removeProp(index) {
        setProps(prev => prev.filter((v, i) => i !== index))
    }
    return (
        <div className="bg-gray-200 p-2 rounded-md mb-2">
            <button className="inline-flex p-1 border-0 justify-start" type="button" onClick={() => setOpen(prev => !prev)} >
                {open && <ChevronUp />}
                {!open && <ChevronDown />}
                <span>{name}</span>
                <span>({props?.length})</span>
            </button>
            <div className={open ? 'block' : 'hidden'}>
                {props.length > 0 && props.map((size, index) => (
                    <div className="flex items-end gap-2">
                        <div>
                            <label>Name</label>
                            <input type="text" value={size?.name} onChange={ev => editProp(ev, index, 'name')} placeholder="Size name" />
                        </div>
                        <div>
                            <label>Extra price</label>
                            <input type="text" value={size?.price} onChange={ev => editProp(ev, index, 'price')} placeholder="Extra price" />
                        </div>
                        <div>
                            <button type="button" onClick={() => removeProp(index)} className="bg-white mb-2 fpx-2">
                                <Trash />
                            </button>
                        </div>
                    </div>
                ))}
                <button onClick={addProp} type="button" className="bg-white items-center">
                    <Plus className="w-4 h-4" />
                    <span>{addLabel}</span>
                </button>
            </div>

        </div>
    )
}