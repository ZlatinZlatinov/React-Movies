import { MainView } from "./MainView"

export function TestCreate() {
    return ( // nope, guess i wont use that for now...
        <>
            <div className="overlay openform">
                <div className="searh-form">
                    <h4 className="sb-title">Or Create new one</h4>
                    <form className="form-style-1" method="POST" >
                        <div className="row">
                            <div className="col-md-12 form-it">
                                <label>Movie title</label>
                                <input type="text" name="title" placeholder="Enter title" />
                            </div>
                            <div className="col-md-12 form-it">
                                <label>Movie description</label>
                                <input type="text" name="description" placeholder="Enter description" />
                            </div>
                            <div className="col-md-12 form-it">
                                <label>Movie ImageURL</label>
                                <input type="text" name="img" placeholder="Enter imgURL" />
                            </div>
                            <div className="col-md-12 ">
                                {/* {err ?? <span>{err}</span>} */}
                                <input className="submit" type="submit" value="Create" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <MainView />
        </>
    )
}