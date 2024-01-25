"use client"
import { useEffect, useState } from "react";
import EditableImage from "./EditableImage";
import Trash from "../icons/Trash";
import Plus from "../icons/Plus";
import MenuItemPriceProps from "./MenuItemPriceProps";

export default function MenuItemForm({ onSubmit, menuItem }) {

    const [image, setImage] = useState(menuItem?.image || '')
    const [name, setName] = useState(menuItem?.name || '');
    const [description, setDescription] = useState(menuItem?.description || '');
    const [basePrice, setBasePrice] = useState(menuItem?.basePrice || '');
    const [sizes, setSizes] = useState(menuItem?.sizes || [])
    const [extraIngredientsPrices, setExtraIngredientsPrices] = useState(menuItem?.extraIngredientsPrices || [])
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState(menuItem?.category || '')

    useEffect(() => {
        fetch('/api/categories').then((response) => {
            response.json().then(categories => {
                setCategories(categories);
            })
        })
    }, [])

    return (
        <form onSubmit={ev =>
            onSubmit(ev, { image, name, description, basePrice, sizes, extraIngredientsPrices, category })}
            className="mt-8 max-w-2xl mx-auto">
            <div className="md:grid gap-4 items-start" style={{ gridTemplateColumns: '0.3fr 0.7fr' }}>
                <div className="max-w-[200px]">
                    <EditableImage link={image} setLink={setImage} />
                </div>
                <div className="grow">
                    <label>Item name</label>
                    <input type="text" value={name} onChange={ev => setName(ev.target.value)} />
                    <label>Description</label>
                    <input type="text" value={description} onChange={ev => setDescription(ev.target.value)} />
                    <label>Category</label>
                    <select value={category} onChange={ev => setCategory(ev.target.value)}>
                        {categories?.length > 0 && categories?.map((c) => (
                            <option key={c._id} value={c._id}>{c.name}</option>
                        ))}
                    </select>

                    <label>Base price</label>
                    <input type="text" value={basePrice} onChange={ev => setBasePrice(ev.target.value)} />
                    <MenuItemPriceProps props={sizes} setProps={setSizes} name={'Sizes'} addLabel={'Add item size'} />
                    <MenuItemPriceProps props={extraIngredientsPrices} setProps={setExtraIngredientsPrices} name={'Extra ingredients'} addLabel={'Add ingredients price'} />
                    <button type="submit">Save</button>
                </div>
            </div>
        </form>
    )
}