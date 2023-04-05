import { useState } from "react";
import { createNewMovie } from "../services/movieService"; 
import { useAuthUser } from "react-auth-kit";


export function CreateForm({setMovies}) {
    const [inputValues, setInputValue] = useState({
        title: '',
        description: '',
        img: ''
    }); 

    const userInfo = useAuthUser(); 
    const {token} = userInfo(); 

    const [err, setErr] = useState(null);

    function inputHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        
        setInputValue(state => ({
            ...state, 
            [name]:value
        }));
    }

    async function createFormHandler(e) {
        e.preventDefault(); 
        const data = await createNewMovie(inputValues, token);

        if(data.hasOwnProperty('msg')){
            setErr(data.message);
            return;
        } 

        setMovies(state=> [...state, data]); 

        setInputValue({
            title: '',
            description: '',
            img: ''
        });
    }

    return (
        <div className="searh-form">
            <h4 className="sb-title">Or Create new one</h4>
            <form className="form-style-1" method="POST" onSubmit={createFormHandler}>
                <div className="row">
                    <div className="col-md-12 form-it">
                        <label>Movie title</label>
                        <input type="text" name="title" placeholder="Enter title" value={inputValues.title} onChange={inputHandler}/>
                    </div>
                    <div className="col-md-12 form-it">
                        <label>Movie description</label>
                        <input type="text" name="description" placeholder="Enter description" value={inputValues.description} onChange={inputHandler}/>
                    </div>
                    <div className="col-md-12 form-it">
                        <label>Movie ImageURL</label>
                        <input type="text" name="img" placeholder="Enter imgURL" value={inputValues.img} onChange={inputHandler}/>
                    </div>
                    <div className="col-md-12 ">
                        {err ?? <span>{err}</span>}
                        <input className="submit" type="submit" value="Create" />
                    </div>
                </div>
            </form>
        </div>
    );
}