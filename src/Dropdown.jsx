import React, { useState } from 'react';


export const Dropdown = () => {
    const [showdrop, setshowdrop] = useState(false)
    const [parentcategories, setParentcategories] = useState([
        { name: "pCategory1", sub: [], showsub: false },
        { name: "pCategory2", sub: [], showsub: false },
        { name: "pCategory3", sub: [], showsub: false }
    ])
    const [category, setcategory] = useState({
        name: '',
        pCategory: ''
    })
    const addCategory = () => {
        console.log(category)
        parentcategories.forEach(cat => {
            if (category.pCategory === cat.name) {
                cat.sub.push(category.name)
            }
        });
        console.log(parentcategories)
    }

    const handleChange = (e) => {
        let categ = { ...category };
        categ[e.target.name] = e.target.value
        setcategory(categ)
        console.log(e.target.value)
    }
    const handleSubChange = (cat,ind) => {
        console.log(cat)
        let allPCategories = [...parentcategories]
        allPCategories.forEach((ct,i)=>{
            ct.showsub = false
            if(i==ind){
                ct.showsub=true
            }
        })

        setParentcategories(allPCategories)
    }
    return (
        <div id="body">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown" >
                            <a class="nav-link dropdown-toggle" href="#" onClick={() => { setshowdrop(!showdrop) }} >
                                Dropdown
                            </a>
                            {
                                showdrop && <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {parentcategories.map((cat,i) =>

                                        <div>
                                            <a class="dropdown-item" href="#" onClick={() => {

                                                handleSubChange(cat,i)
                                            }}>{cat.name}</a>
                                            {cat.showsub && cat.sub.length > 0 && <div class="dropdown-menu-sub">
                                                {cat.sub.map((s) =>
                                                    <div>
                                                        <a class="dropdown-item" href="#">{s}</a>

                                                    </div>)}
                                            </div>}
                                        </div>)}
                                </div>
                            }


                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>

                </div>
            </nav>

            <form>
                <div id="div1">
                    <h1>Add a New Category</h1>
                    <div class="mb-3">
                        <label for="Categoryname" class="form-label">Category Name</label> <br />
                        <input type="text" class="form-control" name="name" onKeyUp={(e) => { handleChange(e) }} />
                    </div> <br />
                    <div class="mb-3">
                        <label for="Pcategory" class="form-label">Parent Category</label> <br />
                        <select val={category} onChange={(e) => { handleChange(e) }} name="pCategory">
                            <option>Choose a parent</option>
                            {parentcategories.map((cat) => <option value={cat.name}>{cat.name}</option>)}
                        </select>
                    </div> <br />
                    <button type="button" class="addbtn" onClick={addCategory}>Add Category</button>
                </div>
            </form>
        </div>
    )
}
export default Dropdown